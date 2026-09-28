import type { PortfolioItem } from "@/types";

/**
 * PORTFOLIO CONCEITUAL — marcas, artes e peças criadas para o site
 * com o objetivo de mostrar o potencial de cada material e acabamento.
 * Nenhum item representa encomenda de cliente real. Quando houver
 * cases autorizados, substituir via CMS (docs/BACKEND-HANDOFF.md).
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: "pf-01",
    brand: "Editora Maré Baixa",
    piece: "Romance em capa dura",
    caption: "Tecido teal com hot stamping cobre e fita marcadora",
    segment: "Editorial",
    mockup: "book",
    palette: ["#1f4e52", "#c07a4a"],
    image: {
      src: "/images/portfolio/pf-01-mare-baixa.webp",
      alt: "Romance O Sal das Horas, da Editora Maré Baixa: capa dura em tecido azul-petróleo com gráfico de marés em hot stamping cobre, um exemplar aberto na abertura de capítulo",
    },
  },
  {
    id: "pf-02",
    brand: "Candango Smash",
    piece: "Kit de embalagens para hamburgueria",
    caption: "Caixa com trava, papel de envolver, porta-fritas e saco",
    segment: "Alimentação",
    mockup: "box",
    palette: ["#c8102e", "#f3e7cf"],
    image: {
      src: "/images/portfolio/pf-02-candango-smash.webp",
      alt: "Kit da hamburgueria Candango Smash em creme, vermelho e verde-água: caixa montada, hambúrguer embrulhado, porta-fritas e saco de papel sobre balcão de lanchonete",
    },
  },
  {
    id: "pf-03",
    brand: "Linho Ocre",
    piece: "Lookbook de coleção",
    caption: "Capa texturizada com baixo-relevo e costura aparente",
    segment: "Moda",
    mockup: "stack",
    palette: ["#c98a2b", "#efe4d0"],
    image: {
      src: "/images/portfolio/pf-03-linho-ocre.webp",
      alt: "Lookbook Linho Ocre Verão 2027 aberto sobre tecido de linho, com fotografia de roupas em arara e encadernação de costura aparente",
    },
  },
  {
    id: "pf-04",
    brand: "Verde Bowl",
    piece: "Papel de bandeja",
    caption: "Ilustração de hortaliças em quatro cores sobre offset",
    segment: "Alimentação",
    mockup: "sheet",
    palette: ["#2f7d4a", "#ff7a5c"],
    image: {
      src: "/images/portfolio/pf-04-verde-bowl.webp",
      alt: "Bandeja com papel impresso da rede Verde Bowl, ilustrado com abacate, couve e rabanete, com bowl de salada e suco por cima",
    },
  },
  {
    id: "pf-05",
    brand: "Mostra Cine Cerrado",
    piece: "Cartazes e flyers de campanha",
    caption: "Duotone violeta e laranja em cartaz, flyer e programa",
    segment: "Cultura",
    mockup: "sheet",
    palette: ["#3b1f5c", "#ff8a2a"],
    image: {
      src: "/images/portfolio/pf-05-cine-cerrado.webp",
      alt: "Campanha da Mostra Cine Cerrado 2027: cartazes em duotone violeta e laranja fixados na parede e flyers espalhados sobre a mesa",
    },
  },
  {
    id: "pf-06",
    brand: "Pimenta Braba",
    piece: "Rótulos para linha de molhos",
    caption: "BOPP laminado, uma cor por sabor",
    segment: "Alimentação",
    mockup: "roll",
    palette: ["#d62718", "#141414"],
    image: {
      src: "/images/portfolio/pf-06-pimenta-braba.webp",
      alt: "Três garrafas de molho Pimenta Braba com rótulos laminados vermelho, verde e preto, pimentas frescas e rolo de rótulos ao lado",
    },
  },
  {
    id: "pf-07",
    brand: "Cacau Alvorada",
    piece: "Caixa rígida para presente",
    caption: "Soft touch bordô com hot stamping dourado e berço interno",
    segment: "Premium",
    mockup: "box",
    palette: ["#5a1526", "#d4af6a"],
    image: {
      src: "/images/portfolio/pf-07-cacau-alvorada.webp",
      alt: "Caixa rígida bordô da chocolateria Cacau Alvorada com emblema dourado, tampa apoiada e seis barras de chocolate no berço interno",
    },
  },
  {
    id: "pf-08",
    brand: "Café Vereda",
    piece: "Identidade impressa de cafeteria",
    caption: "Rótulos, cartões fidelidade, luva de copo e adesivos",
    segment: "Varejo",
    mockup: "sheet",
    palette: ["#23452f", "#d8692e"],
    image: {
      src: "/images/portfolio/pf-08-cafe-vereda.webp",
      alt: "Conjunto impresso do Café Vereda: embalagens kraft de café com rótulo, cartões fidelidade, copo com luva impressa e adesivos sobre balcão de madeira",
    },
  },
];
