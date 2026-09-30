import { SolutionTemplate, type SolutionConfig } from "@/components/sections/SolutionTemplate";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Embalagens personalizadas em Brasília-DF",
  description:
    "Caixas para hambúrguer, papéis de bandeja, sacos e rótulos personalizados, impressos em Brasília-DF — materiais aptos para contato com alimentos, em volume.",
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
    alt: "Família de embalagens da hamburgueria fictícia Brasa Bruta em kraft impresso preto e vermelho: caixa de hambúrguer, saco de delivery, porta-fritas, adesivos e papel de bandeja",
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
