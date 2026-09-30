// Generates src/app/apple-icon.png (180x180) with zero image dependencies —
// slate-950 tile with a sky accent band, matching the {yk} SVG favicon.
import { deflateSync } from "node:zlib";
import { writeFileSync } from "node:fs";

const W = 180;
const H = 180;
const BG = [15, 23, 42]; // slate-950
const FG = [226, 232, 240]; // slate-200
const ACCENT = [3, 105, 161]; // sky-700

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
const crc32 = (buf) => {
  let c = 0xffffffff;
  for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};
const chunk = (type, data) => {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
};

const raw = Buffer.alloc(H * (1 + W * 3));
for (let y = 0; y < H; y++) {
  const rowStart = y * (1 + W * 3);
  raw[rowStart] = 0;
  // accent band; a light band above it echoes the wordmark underline
  const inAccent = y > 136 && y <= 148;
  const inFgBand = y > 96 && y <= 120;
  const color = inAccent ? ACCENT : inFgBand ? FG : BG;
  for (let x = 0; x < W; x++) {
    const p = rowStart + 1 + x * 3;
    raw[p] = color[0];
    raw[p + 1] = color[1];
    raw[p + 2] = color[2];
  }
}

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0);
ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8;
ihdr[9] = 2;

const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk("IHDR", ihdr),
  chunk("IDAT", deflateSync(raw)),
  chunk("IEND", Buffer.alloc(0)),
]);

writeFileSync("src/app/apple-icon.png", png);
console.log(`src/app/apple-icon.png written (${png.length} bytes)`);
