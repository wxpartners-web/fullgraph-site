import type { LandingPage } from "@/types";
import { graficaGoianiaContent } from "@/data/landing-content/grafica-goiania";
import { graficaRioVerdeContent } from "@/data/landing-content/grafica-rio-verde";
import { graficaValparaisoDeGoiasContent } from "@/data/landing-content/grafica-valparaiso-de-goias";
import { graficaLuzianiaContent } from "@/data/landing-content/grafica-luziania";
import { graficaTaguatingaContent } from "@/data/landing-content/grafica-taguatinga";
import { graficaAguasClarasContent } from "@/data/landing-content/grafica-aguas-claras";

/**
 * Páginas de cidade atendida a partir de Brasília (rota /[cidade]).
 * A FullGraph não tem endereço nessas cidades: o schema usa City em
 * areaServed e o provider continua sendo o LocalBusiness de Brasília.
 *
 * `ogTagline` alimenta scripts/make-og-images.mjs (lido por regex —
 * manter cada campo em uma linha, entre aspas duplas).
 */
export interface CityPage extends LandingPage {
  slug: string;
  ogTagline: string;
}

export const cityPages: readonly CityPage[] = [
  {
    slug: "grafica-goiania",
    path: "/grafica-goiania",
    keyword: "gráfica goiânia",
    breadcrumbName: "Gráfica em Goiânia",
    ogTagline: "Produção em Brasília e entrega em até 1 dia útil",
    eyebrow: "Goiânia · Goiás",
    image: {
      src: "/images/regions/grafica-goiania.webp",
      alt: "Tabloides de ofertas, catálogo de produtos aberto, flyers e folder da distribuidora fictícia Distribuidora Cerrado Vivo, em verde e laranja, sobre uma mesa de madeira",
    },
    ogImage: "/og/cidades/grafica-goiania.jpg",
    whatsappMessage: "Olá! Quero um orçamento da FullGraph com entrega em Goiânia.",
    city: { name: "Goiânia", state: "Goiás" },
    content: graficaGoianiaContent,
  },
  {
    slug: "grafica-rio-verde",
    path: "/grafica-rio-verde",
    keyword: "gráfica rio verde",
    breadcrumbName: "Gráfica para Rio Verde",
    ogTagline: "Catálogos, rótulos e materiais para eventos",
    eyebrow: "Rio Verde · Goiás",
    image: {
      src: "/images/regions/grafica-rio-verde.webp",
      alt: "Kit impresso da cooperativa fictícia Cooperativa Vale do Ipê, em verde e amarelo: catálogo de sementes aberto, frascos com rótulos, calendário de parede 2027 e credencial de dia de campo com cordão",
    },
    ogImage: "/og/cidades/grafica-rio-verde.jpg",
    whatsappMessage: "Olá! Quero um orçamento da FullGraph com entrega em Rio Verde.",
    city: { name: "Rio Verde", state: "Goiás" },
    content: graficaRioVerdeContent,
  },
  {
    slug: "grafica-valparaiso-de-goias",
    path: "/grafica-valparaiso-de-goias",
    keyword: "gráfica valparaíso",
    breadcrumbName: "Gráfica para Valparaíso de Goiás",
    ogTagline: "Entrega no mesmo dia após pronto",
    eyebrow: "Valparaíso de Goiás · Goiás",
    image: {
      src: "/images/regions/grafica-valparaiso-de-goias.webp",
      alt: "Materiais do supermercado fictício Mercado Bom Preço Entorno, em vermelho e amarelo: pilha de panfletos Ofertas da Semana, painel-modelo de fachada e banner roll-up Ofertas todo dia",
    },
    ogImage: "/og/cidades/grafica-valparaiso-de-goias.jpg",
    whatsappMessage: "Olá! Quero um orçamento da FullGraph com entrega em Valparaíso de Goiás.",
    city: { name: "Valparaíso de Goiás", state: "Goiás" },
    content: graficaValparaisoDeGoiasContent,
  },
  {
    slug: "grafica-luziania",
    path: "/grafica-luziania",
    keyword: "gráfica luziânia",
    breadcrumbName: "Gráfica para Luziânia",
    ogTagline: "Apostilas, formulários e certificados com nota fiscal",
    eyebrow: "Luziânia · Goiás",
    image: {
      src: "/images/regions/grafica-luziania.webp",
      alt: "Impressos da escola fictícia Escola Municipal Ipê Amarelo: blocos de requisição numerados com vias coloridas, apostilas com espiral de Matemática e Português, certificado de participação e calendário de parede 2027",
    },
    ogImage: "/og/cidades/grafica-luziania.jpg",
    whatsappMessage: "Olá! Quero um orçamento da FullGraph com entrega em Luziânia.",
    city: { name: "Luziânia", state: "Goiás" },
    content: graficaLuzianiaContent,
  },
  {
    slug: "grafica-taguatinga",
    path: "/grafica-taguatinga",
    keyword: "gráfica taguatinga",
    breadcrumbName: "Gráfica para Taguatinga",
    ogTagline: "Embalagens e sacolas sem pedido mínimo",
    eyebrow: "Taguatinga · Distrito Federal",
    image: {
      src: "/images/regions/grafica-taguatinga.webp",
      alt: "Embalagens de delivery da lanchonete fictícia Chapa Norte Lanches em kraft, verde-petróleo e amarelo: caixa de hambúrguer aberta com o lanche e outra fechada, saco kraft com alça, papel de bandeja ilustrado e rolo de rótulos redondos Lacrado com cuidado",
    },
    ogImage: "/og/cidades/grafica-taguatinga.jpg",
    whatsappMessage: "Olá! Quero um orçamento da FullGraph com entrega em Taguatinga.",
    city: { name: "Taguatinga", state: "Distrito Federal" },
    content: graficaTaguatingaContent,
  },
  {
    slug: "grafica-aguas-claras",
    path: "/grafica-aguas-claras",
    keyword: "grafica aguas claras",
    breadcrumbName: "Gráfica para Águas Claras",
    ogTagline: "Entrega no mesmo dia após pronto ou retirada agendada",
    eyebrow: "Águas Claras · Distrito Federal",
    image: {
      src: "/images/regions/grafica-aguas-claras.webp",
      alt: "Impressos da incorporadora fictícia Cumaru Incorporadora em azul-petróleo e cobre: folder aberto do lançamento Residencial Alto Cumaru com plantas de 2 e 3 quartos, catálogo Lançamento 2027, cartões de visita, papel timbrado, envelope e pasta",
    },
    ogImage: "/og/cidades/grafica-aguas-claras.jpg",
    whatsappMessage: "Olá! Quero um orçamento da FullGraph com entrega em Águas Claras.",
    city: { name: "Águas Claras", state: "Distrito Federal" },
    content: graficaAguasClarasContent,
  },
];

export function getCityPage(slug: string): CityPage | undefined {
  return cityPages.find((c) => c.slug === slug);
}
