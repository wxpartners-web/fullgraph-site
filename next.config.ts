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

/* Hospedagem na Cloudflare (desde 10/11/2026): `STATIC_EXPORT=1 next build`
   gera o site inteiro como arquivos estáticos em out/. Nesse modo o Next não
   aplica redirects/rewrites/headers: os do host antigo ficam no Worker
   cloudflare/legacy (regras geradas por scripts/build-cloudflare-rules.mjs)
   e o noindex da cópia do sitemap antigo fica em public/_headers.
   Sem a variável, o build continua igual ao da Vercel. */
const isStaticExport = process.env.STATIC_EXPORT === "1";

const vercelRoutes: Pick<NextConfig, "redirects" | "rewrites" | "headers"> = {
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

const nextConfig: NextConfig = {
  /* Dev-only: permite testar no celular via IP da rede local
     (o Next 16 bloqueia origens fora de localhost no `next dev`).
     Ignorado em produção. */
  allowedDevOrigins: ["192.168.1.10"],

  ...(isStaticExport
    ? { output: "export" as const, images: { unoptimized: true } }
    : vercelRoutes),
};

export default nextConfig;
