import type { ProductContent } from "@/types";
import { impressaoDeLivrosContent } from "./impressao-de-livros";

/**
 * Copy longa aprovada por slug de produto (Money Pages). Produtos fora
 * deste mapa usam o layout padrão de /produtos/[slug].
 */
const productContent: Readonly<Record<string, ProductContent>> = {
  "impressao-de-livros": impressaoDeLivrosContent,
};

export function getProductContent(slug: string): ProductContent | undefined {
  return Object.hasOwn(productContent, slug) ? productContent[slug] : undefined;
}
