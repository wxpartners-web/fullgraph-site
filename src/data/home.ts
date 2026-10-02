/**
 * Copy da home aprovada pelo cliente (rascunhos/home/home.md).
 * Texto verbatim — não reescrever nem acrescentar afirmações sem
 * nova aprovação. Fonte única para a UI e para o JSON-LD (FAQPage).
 */

import type { RichText } from "@/types";

export const HOME_META = {
  title: "Gráfica em Brasília-DF: livros, embalagens e impressão | FullGraph",
  description:
    "Gráfica em Brasília com produção própria no SIBS. Livros, embalagens premium, materiais promocionais e corporativos para o DF, Goiás e todo o Brasil.",
} as const;

export const homeIntro = {
  paragraphs: [
    "Procurando gráfica Brasília com produção própria? A FullGraph imprime no SIBS, no Núcleo Bandeirante, e acompanha cada trabalho do arquivo ao acabamento: pré-impressão, impressão, corte, dobra e encadernação no mesmo fluxo.",
    "Atendemos editoras, escolas, empresas, marcas e agências de eventos no DF, em Goiás e em todo o Brasil. Cada pedido recebe orçamento sob medida, com formato, papel, acabamento e tiragem definidos antes de rodar.",
  ],
  cta: "Pedir orçamento pelo WhatsApp",
} as const;

export interface PrintFront {
  slug: string;
  title: string;
  /** Trecho do título em serifa itálica (opcional) */
  serif?: string;
  text: string;
  href: string;
  /** Rótulo do destino, revelado no hover */
  linkLabel: string;
}

export const printFronts: readonly PrintFront[] = [
  {
    slug: "editorial",
    title: "Editorial",
    text: "livros, revistas, catálogos, anuários e publicações institucionais.",
    href: "/solucoes/livros-editorial",
    linkLabel: "Ver solução",
  },
  {
    slug: "embalagens",
    title: "Embalagens premium",
    serif: "premium",
    text: "caixas personalizadas, sleeves, cintas, sacolas e kits para marcas que vendem pela apresentação.",
    href: "/solucoes/embalagens",
    linkLabel: "Ver solução",
  },
  {
    slug: "promocional",
    title: "Promocional e PDV",
    serif: "PDV",
    text: "folders, panfletos, cartazes, displays e calendários para campanhas e pontos de venda.",
    href: "/produtos#flyers-folders-tabloides",
    linkLabel: "Ver catálogo",
  },
  {
    slug: "corporativo",
    title: "Corporativo",
    text: "papel timbrado, pastas, envelopes, blocos e certificados com a identidade padronizada.",
    href: "/solucoes/empresas",
    linkLabel: "Ver solução",
  },
  {
    slug: "eventos",
    title: "Eventos e convenções",
    serif: "convenções",
    text: "crachás, credenciais, programação, sinalização e kits de participantes.",
    href: "/orcamento",
    linkLabel: "Montar orçamento",
  },
  {
    slug: "kits",
    title: "Kits e lançamentos",
    serif: "lançamentos",
    text: "press kits, kits de onboarding e caixas especiais, do projeto à montagem.",
    href: "/orcamento",
    linkLabel: "Montar orçamento",
  },
];

export const whyChoose = [
  {
    title: "Produção própria.",
    text: "O trabalho não sai da gráfica: da pré-impressão ao acabamento, sob o mesmo controle.",
  },
  {
    title: "Cor padronizada em grandes tiragens.",
    text: "Volume alto com o mesmo padrão do primeiro ao último exemplar, no prazo combinado.",
  },
  {
    title: "Orçamento sob medida.",
    text: "Você recebe o valor do seu projeto, não de uma tabela genérica.",
  },
  {
    title: "Entrega rápida depois de pronto.",
    text: "No DF, o pedido é entregue no mesmo dia; em Goiânia e nas cidades de Goiás que atendemos, em até 1 dia útil.",
  },
] as const;

export const orderSteps = [
  "Você envia o projeto ou a ideia pelo WhatsApp ou pelo formulário de orçamento.",
  "Definimos formato, papel, acabamento, quantidade e prazo.",
  "Você aprova a prova antes da impressão.",
  "Produzimos, finalizamos e entregamos — ou você retira na gráfica.",
] as const;

/** Texto aprovado; Goiânia, Rio Verde, Valparaíso de Goiás e Luziânia levam link para as páginas de cidade */
export const servedRegions: RichText = [
  "Atendemos Brasília e todo o Distrito Federal: Plano Piloto, Núcleo Bandeirante, Taguatinga, Águas Claras, Guará e demais regiões. Em Goiás, entregamos em ",
  { link: "Goiânia", href: "/grafica-goiania" },
  ", Aparecida de Goiânia, Anápolis, Senador Canedo, Trindade, ",
  { link: "Rio Verde", href: "/grafica-rio-verde" },
  ", Itumbiara, Jataí, ",
  { link: "Valparaíso de Goiás", href: "/grafica-valparaiso-de-goias" },
  " e ",
  { link: "Luziânia", href: "/grafica-luziania" },
  ". Para os outros estados, enviamos por frete, pago pelo cliente.",
];

export const homeCta = {
  title: "Peça seu orçamento na gráfica em Brasília",
  serifWord: "em Brasília",
  text: "Conte o que você precisa imprimir: tipo de material, quantidade, prazo e cidade de entrega. Respondemos com orçamento e prazo de produção.",
  whatsappLabel: "Falar com a gráfica pelo WhatsApp",
  quoteLabel: "Montar meu orçamento",
} as const;

export const homeFaq = [
  {
    question: "Vocês atendem fora de Brasília?",
    answer:
      "Sim. Atendemos todo o DF e cidades de Goiás como Goiânia, Anápolis, Rio Verde e Itumbiara. Para outros estados, enviamos com frete.",
  },
  {
    question: "Como funciona o preço?",
    answer:
      "Cada trabalho tem orçamento próprio. O valor depende de formato, papel, acabamento e tiragem. Solicite pelo WhatsApp ou pelo formulário.",
  },
  {
    question: "Qual o prazo e como é a entrega?",
    answer:
      "O prazo de produção varia conforme o material e a quantidade, e é informado no orçamento. Depois de pronto, o pedido é entregue no mesmo dia no DF e em até 1 dia útil em Goiânia e nas cidades de Goiás que atendemos. O frete é pago pelo cliente.",
  },
  {
    question: "Posso retirar o pedido na gráfica?",
    answer:
      "Pode. A retirada é feita sob agendamento no SIBS Quadra 03, Conjunto A, Lote 19/21, Núcleo Bandeirante, ou em local a combinar, de segunda a sexta, das 8h às 18h.",
  },
  {
    question: "O que preciso informar para receber o orçamento?",
    answer:
      "O produto, o formato, a quantidade, as cores, o papel, o acabamento, o prazo desejado e a cidade de entrega. Se ainda não tiver tudo definido, a equipe ajuda a fechar as especificações.",
  },
] as const;
