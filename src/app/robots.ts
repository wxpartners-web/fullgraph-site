import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/**
 * robots.txt servido em /robots.txt (metadata route do App Router).
 * O site é inteiramente público: liberamos o rastreamento completo,
 * inclusive dos assets de CSS, JS e mídia necessários à renderização.
 * Nenhum Disallow é declarado porque não existe rota administrativa,
 * de preview ou de API neste projeto.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
