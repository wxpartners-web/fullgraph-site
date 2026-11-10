/**
 * Gera cloudflare/legacy/rules.json — os redirects do host antigo
 * grafica.fullgraph.com.br compilados para regex, no MESMO formato que o
 * Next usa no routes-manifest (buildCustomRoute). A fonte continua sendo
 * src/lib/legacy-redirects.ts; este arquivo só traduz para o Worker.
 *
 * Uso: node scripts/build-cloudflare-rules.mjs  (Node 24, que lê .ts)
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";
import { buildLegacyRedirects } from "../src/lib/legacy-redirects.ts";

const require = createRequire(import.meta.url);
const { buildCustomRoute } = require("next/dist/lib/build-custom-route");

const root = process.cwd();
const citiesSource = readFileSync(join(root, "src/data/cities.ts"), "utf8");
const citySlugs = [...citiesSource.matchAll(/slug:\s*"(grafica-[a-z0-9-]+)"/g)].map((m) => m[1]);

const redirects = buildLegacyRedirects(citySlugs).map((route) => {
  const built = buildCustomRoute("redirect", route, ["/_next"]);
  return { regex: built.regex, destination: route.destination, status: 308 };
});

const out = join(root, "cloudflare/legacy/rules.json");
writeFileSync(out, JSON.stringify({ redirects }, null, 1) + "\n");
console.log(`rules.json: ${redirects.length} redirects (${citySlugs.length} cidades)`);
