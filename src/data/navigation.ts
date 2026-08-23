import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  {
    label: "Soluções",
    href: "/solucoes/empresas",
    children: [
      { label: "Empresas e grandes tiragens", href: "/solucoes/empresas" },
      { label: "Livros e editorial", href: "/solucoes/livros-editorial" },
      { label: "Embalagens e alimentação", href: "/solucoes/embalagens" },
    ],
  },
  { label: "Produtos", href: "/produtos" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Soluções",
    items: [
      { label: "Empresas e grandes tiragens", href: "/solucoes/empresas" },
      { label: "Livros e editorial", href: "/solucoes/livros-editorial" },
      { label: "Embalagens e alimentação", href: "/solucoes/embalagens" },
    ],
  },
  {
    title: "Navegue",
    items: [
      { label: "Produtos", href: "/produtos" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Sobre a Fullgraph", href: "/sobre" },
      { label: "Contato", href: "/contato" },
      { label: "Orçamento", href: "/orcamento" },
    ],
  },
];
