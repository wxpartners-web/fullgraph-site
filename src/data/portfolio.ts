import type { PortfolioItem } from "@/types";

/**
 * PORTFOLIO PROVISÓRIO — composições procedurais, sem fotos.
 * Nenhum item representa um cliente real. Substituir por cases
 * verdadeiros via CMS (docs/BACKEND-HANDOFF.md).
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: "pf-01",
    title: "Livro de estreia — projeto editorial",
    segment: "Editorial",
    productType: "Livro brochura 14 × 21 cm",
    mockup: "book",
    palette: ["#f0ebdd", "#ff4d00"],
    placeholder: true,
  },
  {
    id: "pf-02",
    title: "Caixa para hamburgueria artesanal",
    segment: "Alimentação",
    productType: "Embalagem em cartão 300 g/m²",
    mockup: "box",
    palette: ["#1c1c1f", "#f0ebdd"],
    placeholder: true,
  },
  {
    id: "pf-03",
    title: "Catálogo de coleção — indústria moveleira",
    segment: "Empresas",
    productType: "Catálogo A4, 48 páginas",
    mockup: "stack",
    palette: ["#aeb3ba", "#0b0b0c"],
    placeholder: true,
  },
  {
    id: "pf-04",
    title: "Papel de bandeja para rede de restaurantes",
    segment: "Alimentação",
    productType: "Forro 30 × 40 cm, alta tiragem",
    mockup: "sheet",
    palette: ["#ff4d00", "#fafaf7"],
    placeholder: true,
  },
  {
    id: "pf-05",
    title: "Tabloide de ofertas — varejo regional",
    segment: "Empresas",
    productType: "Tabloide 8 páginas, 40 mil exemplares",
    mockup: "sheet",
    palette: ["#f0ebdd", "#0b0b0c"],
    placeholder: true,
  },
  {
    id: "pf-06",
    title: "Rótulos para linha de molhos",
    segment: "Alimentação",
    productType: "Rótulo em BOPP com laminação",
    mockup: "roll",
    palette: ["#ff2d78", "#f0ebdd"],
    placeholder: true,
  },
  {
    id: "pf-07",
    title: "Anuário institucional",
    segment: "Editorial",
    productType: "Revista 20,2 × 26,6 cm, capa dura",
    mockup: "book",
    palette: ["#00c2ff", "#0b0b0c"],
    placeholder: true,
  },
  {
    id: "pf-08",
    title: "Kit de papelaria corporativa",
    segment: "Empresas",
    productType: "Timbrado, envelope e pasta",
    mockup: "sheet",
    palette: ["#fafaf7", "#ff4d00"],
    placeholder: true,
  },
];
