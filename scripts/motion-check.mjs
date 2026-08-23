/** Captura a intro de marca e a transição de página para inspeção. */
import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.argv[2] ?? "screenshots";
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

// 1) Intro de marca (sessionStorage limpo)
await page.goto("http://localhost:3000/", { waitUntil: "commit" });
await page.waitForTimeout(450);
await page.screenshot({ path: join(outDir, "check-intro.png") });
console.log("ok intro");

// 2) Transição de página: navega e fotografa no meio da varredura
await page.waitForTimeout(2500);
await page.getByRole("navigation", { name: "Navegação principal" }).getByRole("link", { name: "Portfolio" }).click();
await page.waitForTimeout(220);
await page.screenshot({ path: join(outDir, "check-transition.png") });
console.log("ok transition");

await browser.close();
