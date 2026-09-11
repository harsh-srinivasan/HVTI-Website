const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processHDProduct() {
  const srcPath = '/Users/harshsrinivasan/.gemini/antigravity-ide/brain/495393bd-809f-4a39-9a7a-8998829129ec/ultra_light_dc_test_set_hd_1788841927246.jpg';
  const image = sharp(srcPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  function getRGB(x, y) {
    if (x < 0 || x >= w || y < 0 || y >= h) return [244, 244, 244];
    const idx = (y * w + x) * info.channels;
    return [data[idx], data[idx + 1], data[idx + 2]];
  }

  function isFloorReflection(x, y, r, g, b) {
    // 1. Left front foot: x in [160, 228], y in [480, 538]
    const isLeftFoot = (x >= 160 && x <= 228 && y >= 480 && y <= 538 && r < 45 && g < 45 && b < 45);

    // 2. Right front foot: x in [970, 1035], y in [515, 572]
    const isRightFoot = (x >= 970 && x <= 1035 && y >= 515 && y <= 572 && r < 40 && g < 40 && b < 40);

    // 3. Rear right foot: x in [1215, 1265], y in [420, 452]
    const isRearFoot = (x >= 1215 && x <= 1265 && y >= 420 && y <= 452 && r < 45 && g < 45 && b < 45);

    if (isLeftFoot || isRightFoot || isRearFoot) return false;

    // Front faceplate bottom line: from (x=65, y=475) to (x=1035, y=522)
    const frontBottomY = 475 + ((522 - 475) / (1035 - 65)) * (x - 65);
    if (x <= 1035 && y >= frontBottomY) {
      return true;
    }

    // Side chassis bottom line: from (x=1035, y=522) to (x=1305, y=420)
    const sideBottomY = 522 + ((420 - 522) / (1305 - 1035)) * (x - 1035);
    if (x > 1035 && y >= sideBottomY) {
      return true;
    }

    // Global floor bounds
    if (y > 572) return true;

    return false;
  }

  const isBg = new Uint8Array(w * h);
  const queue = [];

  function isBackgroundCandidate(x, y) {
    if (x < 0 || x >= w || y < 0 || y >= h) return true;
    const [r, g, b] = getRGB(x, y);

    if (isFloorReflection(x, y, r, g, b)) return true;

    const avg = (r + g + b) / 3;
    const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));

    // Studio background
    if (avg > 230 && maxDiff <= 8) return true;
    if (y < 265) return true; // above product
    if (x < 65) return true; // left of left handle
    if (x > 1305) return true; // right of rear chassis

    return false;
  }

  // Seed boundary points
  for (let x = 0; x < w; x++) {
    queue.push(x, 0);
    queue.push(x, h - 1);
    isBg[0 * w + x] = 1;
    isBg[(h - 1) * w + x] = 1;
  }
  for (let y = 0; y < h; y++) {
    queue.push(0, y);
    queue.push(w - 1, y);
    isBg[y * w + 0] = 1;
    isBg[y * w + (w - 1)] = 1;
  }

  // Seed top area above cable (y=100)
  for (let x = 0; x < w; x += 10) {
    if (!isBg[100 * w + x] && isBackgroundCandidate(x, 100)) {
      isBg[100 * w + x] = 1;
      queue.push(x, 100);
    }
  }

  // Seed bottom floor area (y=700)
  for (let x = 0; x < w; x += 10) {
    if (!isBg[700 * w + x] && isBackgroundCandidate(x, 700)) {
      isBg[700 * w + x] = 1;
      queue.push(x, 700);
    }
  }

  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];

    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1]
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
        const nIdx = ny * w + nx;
        if (!isBg[nIdx] && isBackgroundCandidate(nx, ny)) {
          isBg[nIdx] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

  // Create RGBA buffer with de-fringed alpha matte
  const rgba = Buffer.alloc(w * h * 4);

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * info.channels;
      const dstIdx = (y * w + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      rgba[dstIdx] = r;
      rgba[dstIdx + 1] = g;
      rgba[dstIdx + 2] = b;

      if (isBg[y * w + x]) {
        rgba[dstIdx + 3] = 0;
      } else {
        // Foreground pixel
        let bgNeighbors = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const nx = x + dx, ny = y + dy;
            if (nx >= 0 && nx < w && ny >= 0 && ny < h && isBg[ny * w + nx]) {
              bgNeighbors++;
            }
          }
        }

        if (bgNeighbors > 0) {
          const brightness = (r + g + b) / 3;
          if (brightness > 220) {
            const factor = Math.max(0.15, (246 - brightness) / 26);
            rgba[dstIdx + 3] = Math.round(255 * factor * (1 - (bgNeighbors / 14)));
          } else {
            rgba[dstIdx + 3] = 255;
          }
        } else {
          rgba[dstIdx + 3] = 255;
        }
      }
    }
  }

  // Find tight bounding box of foreground
  let minX = w, maxX = 0, minY = h, maxY = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (rgba[(y * w + x) * 4 + 3] > 20) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log('Clean HD product bounding box:', { minX, maxX, minY, maxY, width: maxX - minX + 1, height: maxY - minY + 1 });

  const prodW = maxX - minX + 1;
  const prodH = maxY - minY + 1;

  const croppedProd = await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
    .extract({ left: minX, top: minY, width: prodW, height: prodH })
    .png()
    .toBuffer();

  // Canvas layout (1600 x 960)
  const canvasW = 1600;
  const canvasH = 960;

  // Scale product to 1420px wide
  const targetProdW = 1420;
  const scaledProd = await sharp(croppedProd)
    .resize({ width: targetProdW, fit: 'inside' })
    .png()
    .toBuffer();

  const scaledMeta = await sharp(scaledProd).metadata();
  const posX = Math.round((canvasW - scaledMeta.width) / 2);
  const posY = Math.round((canvasH - scaledMeta.height) / 2) - 20;

  // Refined unified natural contact shadow
  const shadowSvg = `
    <svg width="${canvasW}" height="${canvasH}" viewBox="0 0 ${canvasW} ${canvasH}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Soft ambient diffuse floor shadow -->
        <radialGradient id="diffuseShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.42" />
          <stop offset="45%" stop-color="#000000" stop-opacity="0.20" />
          <stop offset="75%" stop-color="#000000" stop-opacity="0.05" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.0" />
        </radialGradient>

        <!-- Chassis base line contact occlusion -->
        <radialGradient id="frontBaseContact" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.65" />
          <stop offset="50%" stop-color="#000000" stop-opacity="0.30" />
          <stop offset="85%" stop-color="#000000" stop-opacity="0.06" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.0" />
        </radialGradient>
        
        <!-- Left front foot tight occlusion -->
        <radialGradient id="leftFootOcclusion" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.75" />
          <stop offset="45%" stop-color="#000000" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.0" />
        </radialGradient>

        <!-- Right front foot tight occlusion -->
        <radialGradient id="rightFootOcclusion" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.75" />
          <stop offset="45%" stop-color="#000000" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.0" />
        </radialGradient>
      </defs>

      <!-- Soft ground diffuse spread under entire machine body -->
      <ellipse cx="${posX + scaledMeta.width * 0.50}" cy="${posY + scaledMeta.height + 4}" rx="${scaledMeta.width * 0.44}" ry="30" fill="url(#diffuseShadow)" />

      <!-- Front chassis contact shadow line -->
      <ellipse cx="${posX + scaledMeta.width * 0.43}" cy="${posY + scaledMeta.height}" rx="${scaledMeta.width * 0.36}" ry="14" fill="url(#frontBaseContact)" />

      <!-- Left foot contact point -->
      <ellipse cx="${posX + scaledMeta.width * 0.11}" cy="${posY + scaledMeta.height - 10}" rx="42" ry="14" fill="url(#leftFootOcclusion)" />

      <!-- Right foot contact point -->
      <ellipse cx="${posX + scaledMeta.width * 0.73}" cy="${posY + scaledMeta.height + 2}" rx="46" ry="15" fill="url(#rightFootOcclusion)" />
    </svg>
  `;

  const shadowBuffer = await sharp(Buffer.from(shadowSvg)).png().toBuffer();

  const finalImage = await sharp({
    create: {
      width: canvasW,
      height: canvasH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([
      { input: shadowBuffer, top: 0, left: 0 },
      { input: scaledProd, top: posY, left: posX }
    ])
    .png()
    .toBuffer();

  const prodOutDir = path.join(__dirname, '../public/images/products');
  const scratchDir = path.join(__dirname, '../scratch');

  // Output HD transparent WebP and PNG
  await sharp(finalImage)
    .webp({ quality: 96, effort: 6 })
    .toFile(path.join(prodOutDir, 'ultra-light-hv-dc-test-sets.webp'));

  await sharp(finalImage)
    .webp({ quality: 96, effort: 6 })
    .toFile(path.join(prodOutDir, 'ultra-light-hv-dc-test-sets-hd.webp'));

  await sharp(finalImage)
    .png({ quality: 96, compressionLevel: 9 })
    .toFile(path.join(prodOutDir, 'ultra-light-hv-dc-test-sets.png'));

  await sharp(finalImage)
    .png({ quality: 96, compressionLevel: 9 })
    .toFile(path.join(prodOutDir, 'ultra-light-hv-dc-test-sets-hd.png'));

  // Preview on dark website canvas (#0A0F1D)
  await sharp({
    create: {
      width: canvasW,
      height: canvasH,
      channels: 4,
      background: { r: 10, g: 15, b: 29, alpha: 1 }
    }
  })
    .composite([
      { input: finalImage, top: 0, left: 0 }
    ])
    .png()
    .toFile(path.join(scratchDir, 'preview_hd_on_dark_bg.png'));

  console.log('Successfully generated clean HD transparent assets!');
}

processHDProduct().catch(err => {
  console.error(err);
  process.exit(1);
});
