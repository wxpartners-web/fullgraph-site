import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  {
    label: "Soluções",
    href: "/solucoes/empresas",
    children: [
      { label: "Empresas e grandes tiragens", href: "/solucoes/empresas" },
      { label: "Livros e editorial", href: "/solucoes/livros-editorial" },
      { label: "Embalagens", href: "/solucoes/embalagens" },
    ],
  },
  { label: "Produtos", href: "/produtos" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

/** Cidades com página própria — lista curta no rodapé, abaixo de "Soluções" */
export const footerRegions: { title: string; items: NavItem[] } = {
  title: "Atendemos",
  items: [
    { label: "Gráfica em Goiânia", href: "/grafica-goiania" },
    { label: "Gráfica para Rio Verde", href: "/grafica-rio-verde" },
    { label: "Gráfica para Valparaíso", href: "/grafica-valparaiso-de-goias" },
    { label: "Gráfica para Luziânia", href: "/grafica-luziania" },
  ],
};

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Soluções",
    items: [
      { label: "Empresas e grandes tiragens", href: "/solucoes/empresas" },
      { label: "Livros e editorial", href: "/solucoes/livros-editorial" },
      { label: "Embalagens", href: "/solucoes/embalagens" },
    ],
  },
  {
    title: "Navegue",
    items: [
      { label: "Produtos", href: "/produtos" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Sobre a FullGraph", href: "/sobre" },
      { label: "Contato", href: "/contato" },
      { label: "Orçamento", href: "/orcamento" },
    ],
  },
];
