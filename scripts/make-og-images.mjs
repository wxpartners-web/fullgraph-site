/**
 * Gera as imagens de compartilhamento (Open Graph) em JPEG 1200×630 —
 * o formato que WhatsApp, Facebook e LinkedIn leem na prévia do link.
 * Uso: npm run og:images
 *
 * - public/og/fullgraph.jpg        → padrão do site (foto do hero + marca)
 * - public/og/produtos/<slug>.jpg  → uma por produto (foto do catálogo)
 *
 * Rode de novo sempre que trocar a foto de um produto ou a frase do hero.
 */
import sharp from "sharp";
import { mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const W = 1200;
const H = 630;
const ROOT = fileURLToPath(new URL("..", import.meta.url));
const PUB = join(ROOT, "public");
const OUT = join(PUB, "og");
const JPEG = { quality: 84, mozjpeg: true };

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Lê slug, nome, tagline e foto de cada produto direto do arquivo de dados */
function readProducts() {
  const src = readFileSync(join(ROOT, "src/data/products.ts"), "utf8").replace(/\r\n/g, "\n");
  // só blocos de produto (as categorias também têm slug, mas não tagline/foto)
  const blocks = src
    .split(/\n\s*\{\n\s*slug: /)
    .slice(1)
    .filter((b) => /tagline: "/.test(b) && /src: "/.test(b));
  return blocks.map((b) => ({
    slug: b.match(/^"([^"]+)"/)[1],
    name: b.match(/name: "([^"]+)"/)[1],
    tagline: b.match(/tagline: "([^"]+)"/)[1],
    image: b.match(/src: "([^"]+)"/)[1],
  }));
}

/** Quebra um texto em linhas de até `max` caracteres */
function wrap(text, max) {
  const lines = [];
  let line = "";
  for (const word of text.split(" ")) {
    if ((line + " " + word).trim().length > max) {
      lines.push(line.trim());
      line = word;
    } else line += " " + word;
  }
  if (line.trim()) lines.push(line.trim());
  return lines;
}

async function logo(width) {
  return sharp(join(PUB, "brand/fullgraph-logo-light.png")).resize({ width }).png().toBuffer();
}

async function defaultImage() {
  const bg = await sharp(join(PUB, "media/hero/hero-ending.jpg"))
    .resize(W, H, { fit: "cover", position: "right" })
    .toBuffer();
  const overlay = Buffer.from(`
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#0b0b0c" stop-opacity="0.94"/>
          <stop offset="0.55" stop-color="#0b0b0c" stop-opacity="0.72"/>
          <stop offset="1" stop-color="#0b0b0c" stop-opacity="0.05"/>
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#g)"/>
      <text x="72" y="300" font-family="Georgia, 'Times New Roman', serif" font-size="64" fill="#fafaf7">A sua ideia, impressa</text>
      <text x="72" y="378" font-family="Georgia, 'Times New Roman', serif" font-size="64" font-style="italic" fill="#ff5a1f">com peso e presença.</text>
      <text x="74" y="452" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#c9c9c4">Livros, embalagens, catálogos e grandes tiragens</text>
      <rect x="74" y="520" width="44" height="3" fill="#ff5a1f"/>
      <text x="134" y="530" font-family="Arial, Helvetica, sans-serif" font-size="22" letter-spacing="3" fill="#fafaf7">FULLGRAPH.COM.BR · BRASÍLIA → TODO O BRASIL</text>
    </svg>`);
  await sharp(bg)
    .composite([{ input: overlay }, { input: await logo(250), left: 72, top: 96 }])
    .jpeg(JPEG)
    .toFile(join(OUT, "fullgraph.jpg"));
}

async function productImage(p) {
  const photo = await sharp(join(PUB, p.image)).resize(H, H, { fit: "cover" }).toBuffer();
  const nameLines = wrap(p.name, 20);
  const tagLines = wrap(p.tagline, 34);
  const nameSvg = nameLines
    .map((l, i) => `<text x="64" y="${250 + i * 64}" font-family="Georgia, 'Times New Roman', serif" font-size="56" fill="#fafaf7">${esc(l)}</text>`)
    .join("");
  const tagTop = 250 + nameLines.length * 64 + 16;
  const tagSvg = tagLines
    .map((l, i) => `<text x="66" y="${tagTop + i * 36}" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#c9c9c4">${esc(l)}</text>`)
    .join("");
  const panel = Buffer.from(`
    <svg width="${W - H}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${W - H}" height="${H}" fill="#0b0b0c"/>
      ${nameSvg}${tagSvg}
      <rect x="66" y="536" width="40" height="3" fill="#ff5a1f"/>
      <text x="120" y="546" font-family="Arial, Helvetica, sans-serif" font-size="20" letter-spacing="3" fill="#ff5a1f">SOB CONSULTA</text>
      <text x="66" y="584" font-family="Arial, Helvetica, sans-serif" font-size="20" letter-spacing="2" fill="#8a8a85">FULLGRAPH.COM.BR</text>
    </svg>`);
  await sharp({ create: { width: W, height: H, channels: 3, background: "#0b0b0c" } })
    .composite([
      { input: await sharp(panel).png().toBuffer(), left: 0, top: 0 },
      { input: await logo(200), left: 64, top: 72 },
      { input: photo, left: W - H, top: 0 },
    ])
    .jpeg(JPEG)
    .toFile(join(OUT, "produtos", `${p.slug}.jpg`));
}

mkdirSync(join(OUT, "produtos"), { recursive: true });
await defaultImage();
console.log("og/fullgraph.jpg");
for (const p of readProducts()) {
  await productImage(p);
  console.log(`og/produtos/${p.slug}.jpg`);
}
