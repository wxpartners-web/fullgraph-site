/**
 * Gera a variante clara (negativa) do logotipo para uso sobre fundo
 * escuro: pixels acromáticos escuros ("Full" + slogan) viram branco
 * técnico; o laranja do "Graph" é preservado. Proporções intactas.
 *
 * Uso: node scripts/make-logo-variant.mjs
 */
import sharp from "sharp";

const SRC = "public/brand/fullgraph-logo.png";
const OUT = "public/brand/fullgraph-logo-light.png";

const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const a = data[i + 3];
  if (a === 0) continue;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const chroma = max - min;
  // Acromático (cinza/preto do "Full" e slogan) -> branco técnico,
  // mantendo leve variação de luminância para preservar o degradê.
  if (chroma < 40) {
    const lum = max / 255;
    const target = 250 - Math.round(lum * 30); // 220–250
    data[i] = target;
    data[i + 1] = target;
    data[i + 2] = Math.max(0, target - 3);
  }
}

await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png()
  .toFile(OUT);

console.log(`OK: ${OUT} (${info.width}x${info.height})`);
