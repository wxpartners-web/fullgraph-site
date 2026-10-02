import type { LandingPage } from "@/types";
import { livrosEditorialContent } from "@/data/landing-content/livros-editorial";
import { embalagensContent } from "@/data/landing-content/embalagens";
import { empresasContent } from "@/data/landing-content/empresas";

/** Soluções com copy longa aprovada (Link Flow, Lotes 1 e 2) */
export const empresasPage: LandingPage = {
  path: "/solucoes/empresas",
  keyword: "papelaria corporativa",
  breadcrumbName: "Gráfica para empresas",
  eyebrow: "Solução A — Empresas",
  image: {
    src: "/images/solutions/solucao-empresas.webp",
    alt: "Materiais corporativos da empresa fictícia Horizonte Logística em azul-marinho e verde-água: relatório anual, catálogo de produtos, folder e cartões de visita",
  },
  whatsappMessage: "Olá! Quero um orçamento corporativo pela FullGraph.",
  content: empresasContent,
};

export const livrosEditorialPage: LandingPage = {
  path: "/solucoes/livros-editorial",
  keyword: "gráfica editorial",
  breadcrumbName: "Livros e editorial",
  eyebrow: "Solução B — Livros & editorial",
  image: {
    src: "/images/solutions/solucao-livros-editorial.webp",
    alt: "Livros de editoras fictícias na estante e sobre a mesa, com um exemplar de capa dura aberto e a prova impressa da capa de Buritizal com marcas de corte",
  },
  whatsappMessage: "Olá! Quero um orçamento editorial pela FullGraph.",
  content: livrosEditorialContent,
};

export const embalagensPage: LandingPage = {
  path: "/solucoes/embalagens",
  keyword: "embalagens personalizadas",
  breadcrumbName: "Embalagens",
  eyebrow: "Solução C — Embalagens",
  image: {
    src: "/images/solutions/solucao-embalagens.webp",
    alt: "Família de embalagens da hamburgueria fictícia Brasa Bruta em kraft impresso preto e vermelho: caixa de hambúrguer, saco de delivery, porta-fritas, adesivos e papel de bandeja",
  },
  whatsappMessage: "Olá! Quero um orçamento de embalagens personalizadas pela FullGraph.",
  content: embalagensContent,
};
