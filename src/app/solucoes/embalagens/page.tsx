import { SolutionTemplate, type SolutionConfig } from "@/components/sections/SolutionTemplate";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Embalagens impressas para restaurantes e alimentação",
  description:
    "Caixas para hambúrguer, papéis de bandeja, sacos e rótulos personalizados — materiais aptos para contato com alimentos, em volume.",
  path: "/solucoes/embalagens",
});

const config: SolutionConfig = {
  audience: "embalagens",
  index: "C",
  eyebrow: "Embalagens & alimentação",
  title: "Sua marca chega junto com o pedido.",
  serifWord: "junto",
  intro:
    "Embalagens, bandejas e rótulos para restaurantes, hamburguerias e redes — do balcão ao delivery, com material apto para alimentos e reposição programada.",
  heroMockup: "box",
  heroImage: {
    src: "/images/solutions/solucao-embalagens.webp",
    alt: "Família de embalagens impressas para alimentação: caixa de hambúrguer, saco kraft, papel de bandeja e rótulos",
  },
  arguments: [
    {
      title: "Apto para alimentos",
      text: "Papéis e cartões adequados ao contato alimentar, com estrutura para uso real: gordura, calor e transporte.",
    },
    {
      title: "Faca sob medida",
      text: "Desenvolvemos o corte para o seu produto — a caixa veste o lanche, não o contrário.",
    },
    {
      title: "Reposição sem falta",
      text: "Programamos tiragens recorrentes para a operação nunca ficar sem embalagem na ponta.",
    },
  ],
  ctaTitle: "Leve sua marca até a mesa.",
};

export default function EmbalagensPage() {
  return <SolutionTemplate config={config} />;
}
