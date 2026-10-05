import type { NextConfig } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  LEGACY_SITEMAP_DIR,
  buildLegacyRedirects,
  buildLegacyRewrites,
} from "./src/lib/legacy-redirects";

/* Slugs das páginas de cidade existentes no momento do build. Lidos por
   regex (como scripts/make-og-images.mjs) para não carregar o conteúdo
   das landing pages no next.config. As regras das cidades novas só
   entram quando o slug aparece aqui. */
function readCitySlugs(): string[] {
  const source = readFileSync(join(process.cwd(), "src/data/cities.ts"), "utf8");
  return [...source.matchAll(/slug:\s*"(grafica-[a-z0-9-]+)"/g)].map((m) => m[1]);
}

const nextConfig: NextConfig = {
  /* Dev-only: permite testar no celular via IP da rede local
     (o Next 16 bloqueia origens fora de localhost no `next dev`).
     Ignorado em produção. */
  allowedDevOrigins: ["192.168.1.10"],

  /* 301/308 do site antigo grafica.fullgraph.com.br (só valem nesse host). */
  async redirects() {
    return buildLegacyRedirects(readCitySlugs());
  },

  /* robots.txt e sitemaps antigos servidos no host antigo durante a migração. */
  async rewrites() {
    return { beforeFiles: buildLegacyRewrites(), afterFiles: [], fallback: [] };
  },

  /* A cópia do sitemap antigo não deve ser indexada no domínio principal. */
  async headers() {
    return [
      {
        source: `${LEGACY_SITEMAP_DIR}/:path*`,
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

export default nextConfig;
