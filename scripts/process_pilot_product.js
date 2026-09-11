const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processPilotProduct() {
  const srcPath = path.join(__dirname, '../public/images/products/ultra-light-hv-dc-test-sets.jpg');
  const image = sharp(srcPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  function getRGB(x, y) {
    if (x < 0 || x >= w || y < 0 || y >= h) return [255, 255, 255];
    const idx = (y * w + x) * info.channels;
    return [data[idx], data[idx + 1], data[idx + 2]];
  }

  function isBackgroundPixel(x, y) {
    if (x < 0 || x >= w || y < 0 || y >= h) return true;
    
    // Everything above y=468 is presentation annotation / whitespace
    if (y < 468) return true;

    // Left of the handle (handle loop outer edge is at x=23)
    if (x < 22) return true;

    // Right of the chassis side
    if (x > 614) return true;

    const [r, g, b] = getRGB(x, y);

    // Arrow artifact cleanup on top of cable
    if (x >= 278 && x <= 298 && y >= 498 && y <= 518 && r > 170 && g > 120 && b < 90) {
      return true;
    }

    // Pure / near-white background
    if (r > 243 && g > 243 && b > 243) {
      return true;
    }

    // Blue oval graphic (uniform pastel blue tint)
    if (b >= r + 6 && g >= r + 4 && r > 180) {
      return true;
    }

    // Below the feet / chassis bottom
    if (x > 510 && y > 612) return true;
    if (x >= 505 && x < 575 && y > 598) return true;
    if (x > 105 && x < 465 && y > 632) return true;
    if (x <= 105 && y > 647) return true;
    if (x >= 465 && x <= 505 && y > 666) return true;

    return false;
  }

  // Flood-fill exterior background
  const isBg = new Uint8Array(w * h);
  const queue = [];

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

  // Also seed from y=460
  for (let x = 0; x < w; x++) {
    if (!isBg[460 * w + x]) {
      isBg[460 * w + x] = 1;
      queue.push(x, 460);
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
        if (!isBg[nIdx] && isBackgroundPixel(nx, ny)) {
          isBg[nIdx] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

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
        // Edge anti-aliasing
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
          if (brightness > 232) {
            const factor = Math.max(0.15, (255 - brightness) / 23);
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

  // Find bounding box
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

  console.log('Final product bounding box:', { minX, maxX, minY, maxY, width: maxX - minX + 1, height: maxY - minY + 1 });

  const prodW = maxX - minX + 1;
  const prodH = maxY - minY + 1;

  const croppedProd = await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
    .extract({ left: minX, top: minY, width: prodW, height: prodH })
    .png()
    .toBuffer();

  // Balanced 16:10 Canvas with generous breathing room
  const canvasW = 960;
  const canvasH = 580;

  // Scale product to 800px wide for optimal prominence
  const targetProdW = 800;
  const scaledProd = await sharp(croppedProd)
    .resize({ width: targetProdW, fit: 'inside' })
    .png()
    .toBuffer();

  const scaledMeta = await sharp(scaledProd).metadata();
  const posX = Math.round((canvasW - scaledMeta.width) / 2);
  const posY = Math.round((canvasH - scaledMeta.height) / 2) - 16;

  // Contact shadow synthesis
  const shadowSvg = `
    <svg width="${canvasW}" height="${canvasH}" viewBox="0 0 ${canvasW} ${canvasH}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Soft ambient diffuse shadow -->
        <radialGradient id="diffuseShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.38" />
          <stop offset="45%" stop-color="#000000" stop-opacity="0.18" />
          <stop offset="80%" stop-color="#000000" stop-opacity="0.04" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.0" />
        </radialGradient>

        <!-- Chassis base line contact occlusion -->
        <radialGradient id="frontBaseContact" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.55" />
          <stop offset="50%" stop-color="#000000" stop-opacity="0.25" />
          <stop offset="85%" stop-color="#000000" stop-opacity="0.05" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.0" />
        </radialGradient>
        
        <!-- Left front foot tight occlusion -->
        <radialGradient id="leftFootOcclusion" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.70" />
          <stop offset="40%" stop-color="#000000" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.0" />
        </radialGradient>

        <!-- Right front foot tight occlusion -->
        <radialGradient id="rightFootOcclusion" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.70" />
          <stop offset="40%" stop-color="#000000" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.0" />
        </radialGradient>

        <!-- Rear right side foot occlusion -->
        <radialGradient id="rearFootOcclusion" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.50" />
          <stop offset="50%" stop-color="#000000" stop-opacity="0.18" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.0" />
        </radialGradient>
      </defs>

      <!-- Soft ground diffuse spread under entire machine -->
      <ellipse cx="${posX + scaledMeta.width * 0.49}" cy="${posY + scaledMeta.height + 6}" rx="${scaledMeta.width * 0.46}" ry="24" fill="url(#diffuseShadow)" />

      <!-- Front chassis contact shadow bar -->
      <ellipse cx="${posX + scaledMeta.width * 0.40}" cy="${posY + scaledMeta.height + 2}" rx="${scaledMeta.width * 0.35}" ry="12" fill="url(#frontBaseContact)" />

      <!-- Tight contact point under left foot -->
      <ellipse cx="${posX + scaledMeta.width * 0.125}" cy="${posY + scaledMeta.height - 4}" rx="32" ry="11" fill="url(#leftFootOcclusion)" />

      <!-- Tight contact point under front right foot -->
      <ellipse cx="${posX + scaledMeta.width * 0.69}" cy="${posY + scaledMeta.height + 1}" rx="36" ry="12" fill="url(#rightFootOcclusion)" />

      <!-- Rear chassis / foot contact point -->
      <ellipse cx="${posX + scaledMeta.width * 0.88}" cy="${posY + scaledMeta.height - 24}" rx="28" ry="10" fill="url(#rearFootOcclusion)" />
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

  // Output transparent WebP and PNG
  await sharp(finalImage)
    .webp({ quality: 96, effort: 6 })
    .toFile(path.join(prodOutDir, 'ultra-light-hv-dc-test-sets.webp'));

  await sharp(finalImage)
    .png({ quality: 96, compressionLevel: 9 })
    .toFile(path.join(prodOutDir, 'ultra-light-hv-dc-test-sets.png'));

  // Test preview on dark HVTI website background (#0A0F1D)
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
    .toFile(path.join(scratchDir, 'preview_on_dark_bg.png'));

  console.log('Successfully generated clean transparent assets!');
}

processPilotProduct().catch(err => {
  console.error(err);
  process.exit(1);
});
