const sharp = require('sharp');
const path = require('path');

async function refineExtraction() {
  const inputPath = path.join(__dirname, '../public/images/products/hmd-detector-unit.jpg');
  const outputPath = path.join(__dirname, '../public/images/products/hmd-plus-isolated.png');

  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const { width, height } = metadata;
  const rawBuffer = await image.raw().toBuffer();

  // Create initial binary mask based on color
  // The yellow plastic body has strong saturation and distinctive hue
  const mask = new Uint8Array(width * height);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 3;
      const r = rawBuffer[idx];
      const g = rawBuffer[idx + 1];
      const b = rawBuffer[idx + 2];

      // Exclude dark slate ground (slate is neutral grey/black, r approx g approx b or low values)
      // Yellow detector: r > 90, g > 65, and r > b * 1.35 and g > b * 1.1
      if (r > 75 && g > 50 && r > b * 1.3 && g > b * 1.05) {
        mask[y * width + x] = 1;
      }
    }
  }

  // Find the largest connected component of yellow pixels (the device body)
  const visited = new Uint8Array(width * height);
  let largestComponent = [];
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      if (mask[idx] === 1 && visited[idx] === 0) {
        const comp = [];
        const queue = [[x, y]];
        visited[idx] = 1;

        while (queue.length > 0) {
          const [cx, cy] = queue.pop();
          comp.push([cx, cy]);

          const neighbors = [
            [cx + 1, cy], [cx - 1, cy],
            [cx, cy + 1], [cx, cy - 1]
          ];

          for (const [nx, ny] of neighbors) {
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              const nIdx = ny * width + nx;
              if (mask[nIdx] === 1 && visited[nIdx] === 0) {
                visited[nIdx] = 1;
                queue.push([nx, ny]);
              }
            }
          }
        }

        if (comp.length > largestComponent.length) {
          largestComponent = comp;
        }
      }
    }
  }

  // Clear mask and set only largest component
  const cleanMask = new Uint8Array(width * height);
  for (const [x, y] of largestComponent) {
    cleanMask[y * width + x] = 1;
  }

  // Fill internal holes (e.g. black button, LEDs, speaker holes, text)
  // Flood fill background from 4 outer borders on cleanMask
  const bgVisited = new Uint8Array(width * height);
  const bgQueue = [];

  function tryAddBg(x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const idx = y * width + x;
    if (cleanMask[idx] === 0 && bgVisited[idx] === 0) {
      bgVisited[idx] = 1;
      bgQueue.push([x, y]);
    }
  }

  for (let x = 0; x < width; x++) {
    tryAddBg(x, 0);
    tryAddBg(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    tryAddBg(0, y);
    tryAddBg(width - 1, y);
  }

  while (bgQueue.length > 0) {
    const [cx, cy] = bgQueue.pop();
    const neighbors = [
      [cx + 1, cy], [cx - 1, cy],
      [cx, cy + 1], [cx, cy - 1]
    ];
    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (cleanMask[nIdx] === 0 && bgVisited[nIdx] === 0) {
          bgVisited[nIdx] = 1;
          bgQueue.push([nx, ny]);
        }
      }
    }
  }

  // Create final alpha mask: 255 for device, 0 for outside background
  const alphaBuffer = Buffer.alloc(width * height);
  for (let i = 0; i < width * height; i++) {
    alphaBuffer[i] = bgVisited[i] === 0 ? 255 : 0;
  }

  // Create RGBA image with slight edge feathering for smooth anti-aliased look
  const blurredMask = await sharp(alphaBuffer, {
    raw: { width, height, channels: 1 }
  })
    .blur(0.8)
    .toBuffer();

  const finalRgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    finalRgba[i * 4] = rawBuffer[i * 3];
    finalRgba[i * 4 + 1] = rawBuffer[i * 3 + 1];
    finalRgba[i * 4 + 2] = rawBuffer[i * 3 + 2];
    finalRgba[i * 4 + 3] = blurredMask[i];
  }

  await sharp(finalRgba, {
    raw: { width, height, channels: 4 }
  })
    .trim()
    .png({ quality: 100 })
    .toFile(outputPath);

  console.log('Refined cutout saved successfully!');
}

refineExtraction().catch(console.error);
