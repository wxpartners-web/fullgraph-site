import type { LandingPage } from "@/types";
import { graficaGoianiaContent } from "@/data/landing-content/grafica-goiania";
import { graficaRioVerdeContent } from "@/data/landing-content/grafica-rio-verde";
import { graficaValparaisoDeGoiasContent } from "@/data/landing-content/grafica-valparaiso-de-goias";
import { graficaLuzianiaContent } from "@/data/landing-content/grafica-luziania";
import { graficaTaguatingaContent } from "@/data/landing-content/grafica-taguatinga";
import { graficaAguasClarasContent } from "@/data/landing-content/grafica-aguas-claras";
import { graficaAnapolisContent } from "@/data/landing-content/grafica-anapolis";
import { graficaAparecidaDeGoianiaContent } from "@/data/landing-content/grafica-aparecida-de-goiania";
import { graficaSenadorCanedoContent } from "@/data/landing-content/grafica-senador-canedo";
import { graficaTrindadeContent } from "@/data/landing-content/grafica-trindade";
import { graficaItumbiaraContent } from "@/data/landing-content/grafica-itumbiara";
import { graficaJataiContent } from "@/data/landing-content/grafica-jatai";

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
  {
    slug: "grafica-anapolis",
    path: "/grafica-anapolis",
    keyword: "gráfica em anápolis",
    breadcrumbName: "Gráfica para Anápolis",
    ogTagline: "Rótulos, catálogos e caixas para a indústria",
    eyebrow: "Anápolis · Goiás",
    image: {
      src: "/images/regions/grafica-anapolis.webp",
      alt: "Impressos da indústria fictícia de conservas Quintal Seriema em verde-petróleo e amarelo: dois rolos de rótulos ovais em bobina, três potes de pimenta, palmito e legumes com o rótulo aplicado, catálogo aberto na página Nossos Produtos e outro fechado com a capa Catálogo de Produtos 2027",
    },
    ogImage: "/og/cidades/grafica-anapolis.jpg",
    whatsappMessage: "Olá! Quero um orçamento da FullGraph com entrega em Anápolis.",
    city: { name: "Anápolis", state: "Goiás" },
    content: graficaAnapolisContent,
  },
  {
    slug: "grafica-aparecida-de-goiania",
    path: "/grafica-aparecida-de-goiania",
    keyword: "gráfica em aparecida de goiânia",
    breadcrumbName: "Gráfica para Aparecida de Goiânia",
    ogTagline: "Tabloides, folhetos e catálogos para atacado e varejo",
    eyebrow: "Aparecida de Goiânia · Goiás",
    image: {
      src: "/images/regions/grafica-aparecida-de-goiania.webp",
      alt: "Impressos do atacarejo fictício Atacarejo Vale Farto em vermelho e amarelo sobre o caixa de uma loja: pilha de tabloides Ofertas da Semana com preços de arroz, óleo e café, folhetos Fim de Semana do Atacarejo em leque e sacola de papel kraft com alça",
    },
    ogImage: "/og/cidades/grafica-aparecida-de-goiania.jpg",
    whatsappMessage: "Olá! Quero um orçamento da FullGraph com entrega em Aparecida de Goiânia.",
    city: { name: "Aparecida de Goiânia", state: "Goiás" },
    content: graficaAparecidaDeGoianiaContent,
  },
  {
    slug: "grafica-senador-canedo",
    path: "/grafica-senador-canedo",
    keyword: "gráfica senador canedo",
    breadcrumbName: "Gráfica para Senador Canedo",
    ogTagline: "Sinalização, crachás e blocos para a indústria",
    eyebrow: "Senador Canedo · Goiás",
    image: {
      src: "/images/regions/grafica-senador-canedo.webp",
      alt: "Impressos da indústria fictícia Gravatá Pré-Moldados em azul-marinho e laranja: placa amarela de sinalização Atenção, uso obrigatório de EPI, crachá de funcionário em PVC com foto e cordão personalizado, e bloco Requisição de Material numerado com vias branca, amarela e rosa",
    },
    ogImage: "/og/cidades/grafica-senador-canedo.jpg",
    whatsappMessage: "Olá! Quero um orçamento da FullGraph com entrega em Senador Canedo.",
    city: { name: "Senador Canedo", state: "Goiás" },
    content: graficaSenadorCanedoContent,
  },
  {
    slug: "grafica-trindade",
    path: "/grafica-trindade",
    keyword: "gráfica trindade",
    breadcrumbName: "Gráfica em Trindade (GO)",
    ogTagline: "Banners, programação impressa e sacolas",
    eyebrow: "Trindade · Goiás",
    image: {
      src: "/images/regions/grafica-trindade.webp",
      alt: "Impressos da festa comunitária fictícia Flor do Campo em salão enfeitado com bandeirinhas: banner roll-up Festa da Comunidade 2027 com ilustração de flores do campo, pilha de folhetos de programação e um informativo paroquial genérico sobre a mesa",
    },
    ogImage: "/og/cidades/grafica-trindade.jpg",
    whatsappMessage: "Olá! Quero um orçamento da FullGraph com entrega em Trindade.",
    city: { name: "Trindade", state: "Goiás" },
    content: graficaTrindadeContent,
  },
  {
    slug: "grafica-itumbiara",
    path: "/grafica-itumbiara",
    keyword: "gráfica itumbiara",
    breadcrumbName: "Gráfica para Itumbiara",
    ogTagline: "Apostilas, formaturas e eventos acadêmicos",
    eyebrow: "Itumbiara · Goiás",
    image: {
      src: "/images/regions/grafica-itumbiara.webp",
      alt: "Impressos da escola fictícia Colégio Paineira Branca em azul-marinho e dourado: apostilas com espiral de Matemática e Língua Portuguesa, calendário escolar de mesa 2027 aberto em fevereiro e envelope de formatura com a inscrição Formatura 2026 em dourado",
    },
    ogImage: "/og/cidades/grafica-itumbiara.jpg",
    whatsappMessage: "Olá! Quero um orçamento da FullGraph com entrega em Itumbiara.",
    city: { name: "Itumbiara", state: "Goiás" },
    content: graficaItumbiaraContent,
  },
  {
    slug: "grafica-jatai",
    path: "/grafica-jatai",
    keyword: "gráfica jataí",
    breadcrumbName: "Gráfica para Jataí",
    ogTagline: "Livros e revistas a partir de 1 exemplar",
    eyebrow: "Jataí · Goiás",
    image: {
      src: "/images/regions/grafica-jatai.webp",
      alt: "Impressos do simpósio acadêmico fictício Simpósio Lobeira de Ecologia em verde e terracota: livro dos anais do III Simpósio Lobeira, pilha da Revista Lobeira de Ecologia e crachá de participante com cordão verde sobre a mesa de credenciamento",
    },
    ogImage: "/og/cidades/grafica-jatai.jpg",
    whatsappMessage: "Olá! Quero um orçamento da FullGraph com entrega em Jataí.",
    city: { name: "Jataí", state: "Goiás" },
    content: graficaJataiContent,
  },
];

export function getCityPage(slug: string): CityPage | undefined {
  return cityPages.find((c) => c.slug === slug);
}
