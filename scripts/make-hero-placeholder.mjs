/**
 * Gera o vídeo DEV-PLACEHOLDER do hero cinematográfico:
 * public/media/hero/hero-scrub-placeholder.webm
 *
 * É um asset técnico determinístico (barra de progresso + contador de
 * frame) usado APENAS para validar o motor de scrub em desenvolvimento.
 * Não representa o asset aprovado — o vídeo definitivo (Seedance 2.0 →
 * MP4 H.264 GOP 8) depende dos Gates 2–6 e de ffmpeg completo.
 *
 * Sem rede e sem instalar nada: os frames saem do sharp (devDependency)
 * e o encode usa o ffmpeg que o Playwright já traz (build limitado:
 * só VP8/WebM, demuxer image2pipe sem protocolo pipe — por isso os
 * JPEGs vão concatenados num arquivo temporário lido via file:).
 *
 * Uso: node scripts/make-hero-placeholder.mjs
 */
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "public", "media", "hero");
const OUT = path.join(OUT_DIR, "hero-scrub-placeholder.webm");
const MAX_BYTES = 1_000_000; // regra: placeholder ≤ 1 MB

const W = 960;
const H = 540;
const FPS = 24;
const SECONDS = 6;
const FRAMES = FPS * SECONDS;

function findFfmpeg() {
  const home = process.env.LOCALAPPDATA;
  if (home) {
    const base = path.join(home, "ms-playwright");
    if (existsSync(base)) {
      for (const dir of readdirSync(base)) {
        if (!dir.startsWith("ffmpeg-")) continue;
        const exe = path.join(base, dir, "ffmpeg-win64.exe");
        if (existsSync(exe)) return exe;
      }
    }
  }
  return null;
}

function frameSvg(i) {
  const t = i / (FRAMES - 1);
  const barW = Math.round(t * (W - 80));
  const x = 40 + Math.round(t * (W - 200));
  const pct = String(Math.round(t * 100)).padStart(3, "0");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <rect width="${W}" height="${H}" fill="#0b0b0c"/>
    <rect x="40" y="${H - 60}" width="${barW}" height="8" fill="#ff4d00"/>
    <rect x="${x}" y="${H / 2 - 60}" width="120" height="120" fill="#ff4d00"/>
    <rect x="${x + 20}" y="${H / 2 - 40}" width="80" height="80" fill="#0b0b0c"/>
    <text x="40" y="70" font-family="monospace" font-size="40" fill="#f0ebdd">DEV-PLACEHOLDER</text>
    <text x="40" y="120" font-family="monospace" font-size="32" fill="#878c93">frame ${String(i).padStart(3, "0")} · ${pct}%</text>
    <text x="${W - 220}" y="70" font-family="monospace" font-size="32" fill="#00c2ff">t=${t.toFixed(3)}</text>
  </svg>`;
}

const ffmpeg = findFfmpeg();
if (!ffmpeg) {
  console.error(
    "ffmpeg do Playwright não encontrado (%LOCALAPPDATA%\\ms-playwright\\ffmpeg-*).\n" +
      "Sem ele o placeholder não é gerado — o hero cinematográfico cai no poster\n" +
      "(comportamento previsto). Nada foi instalado."
  );
  process.exit(1);
}

mkdirSync(OUT_DIR, { recursive: true });

const chunks = [];
for (let i = 0; i < FRAMES; i++) {
  chunks.push(await sharp(Buffer.from(frameSvg(i))).jpeg({ quality: 82 }).toBuffer());
}
const stream = path.join(OUT_DIR, "frames.tmp.mjpeg");
writeFileSync(stream, Buffer.concat(chunks));

const args = [
  "-hide_banner", "-loglevel", "error", "-y",
  "-f", "image2pipe", "-c:v", "mjpeg", "-framerate", String(FPS), "-i", `file:${stream}`,
  // keyframe a cada 6 frames (0,25s @24fps): seek limpo em qualquer posição
  "-c:v", "libvpx", "-b:v", "0", "-crf", "34", "-g", "6", "-keyint_min", "6",
  "-pix_fmt", "yuv420p", "-an",
  `file:${OUT}`,
];

const code = await new Promise((resolve) => {
  spawn(ffmpeg, args, { stdio: ["ignore", "inherit", "inherit"] }).on("close", resolve);
});
unlinkSync(stream);
if (code !== 0) {
  console.error(`ffmpeg saiu com código ${code}`);
  process.exit(1);
}

const size = statSync(OUT).size;
if (size > MAX_BYTES) {
  unlinkSync(OUT);
  console.error(`placeholder estourou o orçamento: ${size} bytes > ${MAX_BYTES}`);
  process.exit(1);
}
console.log(`ok: ${path.relative(ROOT, OUT)} — ${size} bytes (${FRAMES} frames, ${SECONDS}s, GOP 6)`);
console.log("Lembrete: atualize videoBytes em src/lib/hero-media.ts se o tamanho mudar.");
