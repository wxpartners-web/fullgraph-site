/**
 * Gera screenshots de inspeção visual nas resoluções do brief.
 * Uso: node scripts/screenshots.mjs [outDir]
 * Requer o site rodando em http://localhost:3000 (npm run start).
 */
import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.argv[2] ?? "screenshots";
mkdirSync(outDir, { recursive: true });

const viewports = [
  { name: "1440x900", width: 1440, height: 900 },
  { name: "1024x768", width: 1024, height: 768 },
  { name: "390x844", width: 390, height: 844 },
];

const pages = [
  { path: "/", name: "home", full: true },
  { path: "/produtos", name: "produtos", full: true },
  { path: "/produtos/impressao-de-livros", name: "produto-livros", full: true },
  { path: "/solucoes/embalagens", name: "solucao-embalagens", full: true },
  { path: "/orcamento", name: "orcamento", full: true },
  { path: "/portfolio", name: "portfolio", full: false },
  { path: "/sobre", name: "sobre", full: false },
  { path: "/contato", name: "contato", full: false },
];

const browser = await chromium.launch();

// 1) Layout completo com reduced-motion: todos os reveals ficam
//    estáticos e o full-page mostra o conteúdo real.
for (const vp of viewports) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  await context.addInitScript(() => {
    try {
      sessionStorage.setItem("fullgraph:intro-seen", "1");
    } catch {}
  });
  const page = await context.newPage();
  for (const p of pages) {
    await page.goto(`http://localhost:3000${p.path}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(700);
    await page.screenshot({
      path: join(outDir, `${p.name}--${vp.name}.png`),
      fullPage: p.full,
    });
    console.log(`ok ${p.name} @ ${vp.name}`);
  }
  await context.close();
}

// 2) Cenas animadas (motion real): hero 3D, portais e narrativa
const anim = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
await anim.addInitScript(() => {
  try {
    sessionStorage.setItem("fullgraph:intro-seen", "1");
  } catch {}
});
const ap = await anim.newPage();
await ap.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await ap.waitForTimeout(2500);
await ap.screenshot({ path: join(outDir, "anim-hero--1440x900.png") });
await ap.locator("#solucoes").scrollIntoViewIfNeeded();
await ap.waitForTimeout(1200);
await ap.screenshot({ path: join(outDir, "anim-portais--1440x900.png") });
await ap.getByTestId("narrative").scrollIntoViewIfNeeded();
await ap.mouse.wheel(0, 1400);
await ap.waitForTimeout(1200);
await ap.screenshot({ path: join(outDir, "anim-narrativa--1440x900.png") });
console.log("ok cenas animadas");
await anim.close();
await browser.close();
