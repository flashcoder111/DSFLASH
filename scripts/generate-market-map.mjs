import { mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { deflateSync } from "zlib";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, "..", "public", "deepseek-v4-market-map.png");
const width = 1600;
const height = 900;
const pixels = new Uint8Array(width * height * 4);

function blendPixel(x, y, color, alpha = 1) {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const index = (Math.floor(y) * width + Math.floor(x)) * 4;
  const nextAlpha = Math.max(0, Math.min(1, alpha));

  pixels[index] = Math.round(pixels[index] * (1 - nextAlpha) + color[0] * nextAlpha);
  pixels[index + 1] = Math.round(
    pixels[index + 1] * (1 - nextAlpha) + color[1] * nextAlpha
  );
  pixels[index + 2] = Math.round(
    pixels[index + 2] * (1 - nextAlpha) + color[2] * nextAlpha
  );
  pixels[index + 3] = 255;
}

function fillRect(x, y, w, h, color, alpha = 1) {
  for (let yy = y; yy < y + h; yy += 1) {
    for (let xx = x; xx < x + w; xx += 1) {
      blendPixel(xx, yy, color, alpha);
    }
  }
}

function line(x0, y0, x1, y1, color, alpha = 1, thickness = 1) {
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const steps = Math.max(dx, dy);

  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const x = x0 + (x1 - x0) * t;
    const y = y0 + (y1 - y0) * t;

    for (let ty = -thickness; ty <= thickness; ty += 1) {
      for (let tx = -thickness; tx <= thickness; tx += 1) {
        if (tx * tx + ty * ty <= thickness * thickness) {
          blendPixel(x + tx, y + ty, color, alpha);
        }
      }
    }
  }
}

function circle(cx, cy, radius, color, alpha = 1) {
  const r2 = radius * radius;
  for (let y = cy - radius; y <= cy + radius; y += 1) {
    for (let x = cx - radius; x <= cx + radius; x += 1) {
      const distance = (x - cx) * (x - cx) + (y - cy) * (y - cy);
      if (distance <= r2) {
        const edge = 1 - Math.sqrt(distance) / radius;
        blendPixel(x, y, color, alpha * Math.max(0.25, edge));
      }
    }
  }
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const lengthBuffer = Buffer.alloc(4);
  lengthBuffer.writeUInt32BE(data.length);
  const crcBuffer = Buffer.alloc(4);
  crcBuffer.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])));
  return Buffer.concat([lengthBuffer, typeBuffer, data, crcBuffer]);
}

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let i = 0; i < 8; i += 1) {
      crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function pngEncode() {
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y += 1) {
    const rowStart = y * (width * 4 + 1);
    raw[rowStart] = 0;
    for (let x = 0; x < width * 4; x += 1) {
      raw[rowStart + 1 + x] = pixels[y * width * 4 + x];
    }
  }

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  return Buffer.concat([
    signature,
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0))
  ]);
}

for (let y = 0; y < height; y += 1) {
  for (let x = 0; x < width; x += 1) {
    const index = (y * width + x) * 4;
    const vertical = y / height;
    const horizontal = x / width;
    pixels[index] = Math.round(5 + 10 * horizontal);
    pixels[index + 1] = Math.round(9 + 20 * vertical);
    pixels[index + 2] = Math.round(16 + 22 * (1 - horizontal));
    pixels[index + 3] = 255;
  }
}

for (let x = 0; x < width; x += 64) {
  line(x, 0, x, height, [148, 163, 184], 0.08, 1);
}
for (let y = 0; y < height; y += 64) {
  line(0, y, width, y, [148, 163, 184], 0.08, 1);
}

for (let i = 0; i < 34; i += 1) {
  const y = 120 + i * 20;
  line(850, y, 1540, y - 90 + Math.sin(i * 0.7) * 42, [56, 213, 245], 0.06, 1);
}

const bars = [
  { x: 930, h: 36, color: [126, 231, 135] },
  { x: 1025, h: 142, color: [56, 213, 245] },
  { x: 1120, h: 612, color: [244, 184, 74] },
  { x: 1215, h: 710, color: [251, 113, 133] },
  { x: 1310, h: 510, color: [168, 162, 255] },
  { x: 1405, h: 435, color: [251, 191, 36] }
];

for (const bar of bars) {
  fillRect(bar.x, 780 - bar.h, 42, bar.h, bar.color, 0.82);
  fillRect(bar.x - 10, 780 - bar.h - 10, 62, bar.h + 20, bar.color, 0.08);
  line(bar.x, 780 - bar.h, bar.x + 42, 780 - bar.h, [255, 255, 255], 0.45, 1);
}

const path = [
  [120, 690],
  [260, 612],
  [410, 646],
  [560, 510],
  [720, 548],
  [880, 410],
  [1040, 446],
  [1190, 338],
  [1360, 308],
  [1500, 226]
];

for (let i = 1; i < path.length; i += 1) {
  line(path[i - 1][0], path[i - 1][1], path[i][0], path[i][1], [56, 213, 245], 0.42, 3);
  line(path[i - 1][0], path[i - 1][1], path[i][0], path[i][1], [126, 231, 135], 0.16, 7);
}
for (const [x, y] of path) {
  circle(x, y, 8, [56, 213, 245], 0.95);
  circle(x, y, 24, [56, 213, 245], 0.12);
}

fillRect(90, 116, 520, 3, [56, 213, 245], 0.7);
fillRect(90, 137, 360, 2, [126, 231, 135], 0.5);
fillRect(90, 164, 430, 2, [244, 184, 74], 0.5);
fillRect(90, 202, 250, 30, [56, 213, 245], 0.22);
fillRect(360, 202, 170, 30, [126, 231, 135], 0.22);
fillRect(550, 202, 96, 30, [244, 184, 74], 0.22);

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, pngEncode());
console.log(outputPath);
