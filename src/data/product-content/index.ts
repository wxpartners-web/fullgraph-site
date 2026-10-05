import type { ProductContent } from "@/types";
import { caixasPersonalizadasContent } from "./caixas-personalizadas";
import { impressaoDeLivrosContent } from "./impressao-de-livros";
import { flyersEPanfletosContent } from "./flyers-e-panfletos";
import { crachasECredenciaisContent } from "./crachas-e-credenciais";
import { comunicacaoVisualContent } from "./comunicacao-visual";
import { sacolasPersonalizadasContent } from "./sacolas-personalizadas";
import { kitsCorporativosContent } from "./kits-corporativos";
import { calendariosPersonalizadosContent } from "./calendarios-personalizados";
import { pastasPersonalizadasContent } from "./pastas-personalizadas";

/**
 * Copy longa aprovada por slug de produto (Money Pages). Produtos fora
 * deste mapa usam o layout padrão de /produtos/[slug].
 */
const productContent: Readonly<Record<string, ProductContent>> = {
  "impressao-de-livros": impressaoDeLivrosContent,
  "caixas-personalizadas": caixasPersonalizadasContent,
  "flyers-e-panfletos": flyersEPanfletosContent,
  "crachas-e-credenciais": crachasECredenciaisContent,
  "comunicacao-visual": comunicacaoVisualContent,
  "sacolas-personalizadas": sacolasPersonalizadasContent,
  "kits-corporativos": kitsCorporativosContent,
  "calendarios-personalizados": calendariosPersonalizadosContent,
  "pastas-personalizadas": pastasPersonalizadasContent,
};

export function getProductContent(slug: string): ProductContent | undefined {
  return Object.hasOwn(productContent, slug) ? productContent[slug] : undefined;
}
