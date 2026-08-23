import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/solucoes/empresas",
    "/solucoes/livros-editorial",
    "/solucoes/embalagens",
    "/produtos",
    "/portfolio",
    "/sobre",
    "/orcamento",
    "/contato",
  ].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path === "/orcamento" ? 0.9 : 0.7,
  }));

  const productRoutes = products.map((p) => ({
    url: `${site.url}/produtos/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes];
}
