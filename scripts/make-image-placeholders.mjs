/** Prévias de até 10 px; os arquivos originais e suas URLs são preservados. */
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const read = (path) => readFileSync(join(root, path), "utf8").replace(/\r\n/g, "\n");
const imagePaths = (source) => [...source.matchAll(/src: "(\/images\/[^"]+)"/g)].map((match) => match[1]);
const featured = read("src/data/products.ts").split(/\n  \{\n    slug:/).filter((block) => block.includes("featured: true"));
const sources = new Set([
  ...featured.flatMap(imagePaths),
  ...imagePaths(read("src/data/portfolio.ts")),
  ...imagePaths(read("src/components/sections/NarrativeScroll.tsx")),
]);
const previews = {};
for (const src of [...sources].sort()) {
  const buffer = await sharp(join(root, "public", src))
    .resize(10, 10, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 35 })
    .toBuffer();
  previews[src] = `data:image/webp;base64,${buffer.toString("base64")}`;
}
const json = JSON.stringify(previews, null, 2) + "\n";
writeFileSync(join(root, "src/data/image-placeholders.json"), json);
console.log(`${sources.size} prévias; ${Buffer.byteLength(json)} bytes no total.`);
