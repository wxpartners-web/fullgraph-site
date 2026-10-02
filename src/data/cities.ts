import type { LandingPage } from "@/types";
import { graficaGoianiaContent } from "@/data/landing-content/grafica-goiania";
import { graficaRioVerdeContent } from "@/data/landing-content/grafica-rio-verde";
import { graficaValparaisoDeGoiasContent } from "@/data/landing-content/grafica-valparaiso-de-goias";
import { graficaLuzianiaContent } from "@/data/landing-content/grafica-luziania";

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
];

export function getCityPage(slug: string): CityPage | undefined {
  return cityPages.find((c) => c.slug === slug);
}
