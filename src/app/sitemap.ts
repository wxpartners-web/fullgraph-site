import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { products } from "@/data/products";

/**
 * Sitemap canônico servido em /sitemap.xml (convenção de metadata route
 * do App Router). Contém apenas rotas públicas realmente implementadas
 * em src/app — sem âncoras, previews ou páginas técnicas.
 *
 * `lastModified`, `changeFrequency` e `priority` são omitidos de
 * propósito: não há fonte confiável de data de alteração por página e
 * os dois últimos campos são ignorados pelos buscadores atuais.
 */

/** Rotas estáticas públicas — espelham os arquivos page.tsx em src/app */
const staticPaths = [
  "",
  "/solucoes/empresas",
  "/solucoes/livros-editorial",
  "/solucoes/embalagens",
  "/produtos",
  "/portfolio",
  "/sobre",
  "/orcamento",
  "/contato",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = staticPaths.map((path) => ({ url: `${site.url}${path}` }));

  /* Rotas de produto — as mesmas geradas por generateStaticParams em
     src/app/produtos/[slug]/page.tsx */
  const productRoutes = products.map((product) => ({
    url: `${site.url}/produtos/${product.slug}`,
  }));

  return [...staticRoutes, ...productRoutes];
}
