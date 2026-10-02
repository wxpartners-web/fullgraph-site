import type { ProductContent } from "@/types";
import { caixasPersonalizadasContent } from "./caixas-personalizadas";
import { impressaoDeLivrosContent } from "./impressao-de-livros";
import { flyersEPanfletosContent } from "./flyers-e-panfletos";
import { crachasECredenciaisContent } from "./crachas-e-credenciais";

/**
 * Copy longa aprovada por slug de produto (Money Pages). Produtos fora
 * deste mapa usam o layout padrão de /produtos/[slug].
 */
const productContent: Readonly<Record<string, ProductContent>> = {
  "impressao-de-livros": impressaoDeLivrosContent,
  "caixas-personalizadas": caixasPersonalizadasContent,
  "flyers-e-panfletos": flyersEPanfletosContent,
  "crachas-e-credenciais": crachasECredenciaisContent,
};

export function getProductContent(slug: string): ProductContent | undefined {
  return Object.hasOwn(productContent, slug) ? productContent[slug] : undefined;
}
