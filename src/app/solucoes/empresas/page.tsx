import { SolutionTemplate, type SolutionConfig } from "@/components/sections/SolutionTemplate";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Impressão para empresas e grandes tiragens",
  description:
    "Catálogos, tabloides, papelaria e campanhas em volume com padrão de cor, prazo combinado e entrega em todo o Brasil.",
  path: "/solucoes/empresas",
});

const config: SolutionConfig = {
  audience: "empresas",
  index: "A",
  eyebrow: "Empresas",
  title: "Volume com padrão de gráfica grande, atenção de bancada.",
  serifWord: "atenção",
  intro:
    "Campanhas, catálogos e papelaria produzidos em escala — com a mesma cor da primeira à última folha e um interlocutor que entende do seu material.",
  heroMockup: "stack",
  heroImage: {
    src: "/images/solutions/solucao-empresas.webp",
    alt: "Materiais corporativos da empresa fictícia Horizonte Logística em azul-marinho e verde-água: relatório anual, catálogo de produtos, folder e cartões de visita",
  },
  arguments: [
    {
      title: "Cor que se repete",
      text: "Perfil de cor guardado por cliente: a reimpressão do mês que vem sai igual à tiragem de hoje.",
    },
    {
      title: "Escala sem sobressalto",
      text: "Estrutura para grandes tiragens com cronograma combinado no orçamento — sem surpresa no prazo.",
    },
    {
      title: "Um fornecedor, o kit inteiro",
      text: "Do tabloide de ofertas à pasta institucional, tudo em um fluxo só, com frete otimizado.",
    },
  ],
  ctaTitle: "Sua próxima campanha, em matéria.",
};

export default function EmpresasPage() {
  return <SolutionTemplate config={config} />;
}
