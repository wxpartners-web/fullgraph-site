/**
 * Worker dos hosts secundários de fullgraph.com.br (Cloudflare, desde 10/11/2026).
 *
 * - www.fullgraph.com.br      → 308 para https://fullgraph.com.br (mesmo caminho e query)
 * - grafica.fullgraph.com.br  → site antigo: os mesmos 308 que o Next aplicava na
 *   Vercel (rules.json, gerado de src/lib/legacy-redirects.ts) e o robots/sitemaps
 *   antigos servidos a partir da cópia em /legacy-grafica do domínio principal.
 *
 * O domínio principal NÃO passa por aqui: é servido direto dos arquivos estáticos
 * (wrangler.jsonc na raiz), sem custo por requisição.
 */
import rules from "./rules.json";

const APEX = "https://fullgraph.com.br";
const LEGACY_HOST = "grafica.fullgraph.com.br";
const LEGACY_DIR = "/legacy-grafica";

const compiled = rules.redirects.map((r) => ({ re: new RegExp(r.regex), to: r.destination, status: r.status }));

/** robots.txt e sitemaps do host antigo (equivalente aos rewrites beforeFiles do Next). */
function legacyFilePath(pathname) {
  if (pathname === "/robots.txt" || pathname === "/sitemap.xml") return LEGACY_DIR + pathname;
  const m = pathname.match(/^\/sitemap-(\d+)\.xml$/);
  return m ? `${LEGACY_DIR}/sitemap-${m[1]}.xml` : null;
}

async function serveFromApex(path, request) {
  const upstream = await fetch(APEX + path, { method: request.method, headers: { "user-agent": "fullgraph-legacy-worker" } });
  const response = new Response(upstream.body, upstream);
  // O noindex vale para a cópia no domínio principal, não para o host antigo.
  response.headers.delete("x-robots-tag");
  return response;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.hostname !== LEGACY_HOST) {
      return Response.redirect(APEX + url.pathname + url.search, 308);
    }

    for (const rule of compiled) {
      if (rule.re.test(url.pathname)) return Response.redirect(rule.to, rule.status);
    }

    const file = legacyFilePath(url.pathname);
    if (file) return serveFromApex(file, request);

    // Só sobra /_next/* (excluído das regras, como no Next): serve do principal.
    return serveFromApex(url.pathname + url.search, request);
  },
};
