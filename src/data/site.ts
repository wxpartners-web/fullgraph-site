import type { SiteConfig } from "@/types";

/**
 * ÚNICA fonte de dados comerciais do site.
 * Dados reais extraídos de grafica.fullgraph.com.br em 2026-08;
 * razão social, horário e área de atendimento confirmados pelo cliente em 2026-09-29.
 * O WhatsApp vem de NEXT_PUBLIC_WHATSAPP_NUMBER no .env (ver README).
 */
export const site: SiteConfig = {
  name: "FullGraph",
  legalName: "FULLGRAPH GRAFICA E EDITORA LTDA - EPP",
  tagline: "Muito mais que impressão",
  description:
    "Gráfica em Brasília-DF: livros, embalagens, catálogos e grandes tiragens para o DF, Goiás e todo o Brasil. Orçamento personalizado.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fullgraph.com.br",
  phone: { display: "(61) 99619-4141", e164: "+5561996194141" },
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? null,
    defaultMessage:
      "Olá! Vim pelo site da FullGraph e gostaria de solicitar um orçamento.",
  },
  email: "contato@fullgraph.com.br",
  foundingYear: "2012",
  address: {
    street: "SIBS Qd. 03, conj. A lote 19/21, Térreo",
    neighborhood: "Núcleo Bandeirante",
    city: "Brasília",
    state: "DF",
    zip: "71736-301",
    full: "SIBS Qd. 03, conj. A lote 19/21, Térreo — Núcleo Bandeirante, Brasília-DF, CEP 71736-301",
  },
  hours: {
    display: "Segunda a sexta, das 8h às 18h",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  autoService: "Atendimento automático 24 horas pelo site e pelo WhatsApp.",
  areaServed: [
    { type: "State", name: "Distrito Federal" },
    { type: "State", name: "Goiás" },
    { type: "Country", name: "Brasil" },
  ],
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
