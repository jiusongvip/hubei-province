// 压缩 public/images 下的 WebP 图片，优化 LCP 与加载速度
import { readdirSync, statSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const imagesDir = fileURLToPath(new URL("../public/images", import.meta.url));

// 各图片的目标宽度与质量（Hero 图重点压缩，OG 图保留更大尺寸）
const rules = {
  "hubei-hero.webp": { width: 640, quality: 72 },
  "og-hubei.webp": { width: 1200, quality: 78 },
};

const files = readdirSync(imagesDir).filter((f) => f.endsWith(".webp"));

for (const file of files) {
  const rule = rules[file] || { width: 800, quality: 75 };
  const input = join(imagesDir, file);
  const before = statSync(input).size;

  // 先完整读入内存，避免 sharp 文件句柄冲突
  const original = readFileSync(input);
  const buf = await sharp(original)
    .resize({ width: rule.width, withoutEnlargement: true })
    .webp({ quality: rule.quality, effort: 4 })
    .toBuffer();

  writeFileSync(input, buf);
  const after = statSync(input).size;
  const kb = (n) => (n / 1024).toFixed(0) + " KB";
  const pct = Math.round((1 - after / before) * 100);
  console.log(`${file}: ${kb(before)} -> ${kb(after)} (${pct}% saved)`);
}

console.log("压缩完成");
