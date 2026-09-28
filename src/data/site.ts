import type { SiteConfig } from "@/types";

/**
 * ÚNICA fonte de dados comerciais do site.
 * Dados reais extraídos de grafica.fullgraph.com.br em 2026-08.
 * O número de WhatsApp NÃO estava público no site antigo:
 * preencha NEXT_PUBLIC_WHATSAPP_NUMBER no .env (ver README).
 */
export const site: SiteConfig = {
  name: "Fullgraph",
  legalName: "Full Graph",
  tagline: "Muito mais que impressão",
  description:
    "Impressão, livros, embalagens e grandes tiragens entregues em todo o Brasil. Orçamento personalizado para empresas, editoras e restaurantes.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fullgraph.com.br",
  phone: { display: "(61) 3022-0027", e164: "+556130220027" },
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? null,
    defaultMessage:
      "Olá! Vim pelo site da Fullgraph e gostaria de solicitar um orçamento.",
  },
  email: "fullgraph109@gmail.com",
  address: {
    street: "SIBS Qd. 03, conj. A lote 19/21, Térreo",
    neighborhood: "Núcleo Bandeirante",
    city: "Brasília",
    state: "DF",
    zip: "71736-301",
    full: "SIBS Qd. 03, conj. A lote 19/21, Térreo — Núcleo Bandeirante, Brasília-DF, CEP 71736-301",
  },
};

/** Destaques verdadeiros — não inventar números, prêmios ou clientes */
export const trueHighlights = [
  {
    title: "Atendimento em todo o Brasil",
    text: "Produção em Brasília-DF com entrega para qualquer estado.",
  },
  {
    title: "Orçamento personalizado",
    text: "Cada projeto é cotado sob medida: formato, papel, acabamento e tiragem.",
  },
  {
    title: "Grandes tiragens",
    text: "Estrutura para volumes altos com padronização de cor e prazo combinado.",
  },
  {
    title: "Do arquivo ao acabamento",
    text: "Pré-impressão, impressão, corte, dobra e encadernação em um só fluxo.",
  },
] as const;
