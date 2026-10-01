import { SolutionTemplate, type SolutionConfig } from "@/components/sections/SolutionTemplate";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Embalagens personalizadas em Brasília-DF",
  description:
    "Caixas para hambúrguer, papéis de bandeja, sacos e rótulos personalizados, impressos em Brasília-DF, com matéria-prima apropriada para uso com alimentos.",
  path: "/solucoes/embalagens",
});

const config: SolutionConfig = {
  audience: "embalagens",
  index: "C",
  eyebrow: "Embalagens & alimentação",
  title: "Sua marca chega junto com o pedido.",
  serifWord: "junto",
  intro:
    "Embalagens, bandejas e rótulos para restaurantes, hamburguerias e redes — do balcão ao delivery, com matéria-prima apropriada para uso com alimentos e reposição programada.",
  heroMockup: "box",
  heroImage: {
    src: "/images/solutions/solucao-embalagens.webp",
    alt: "Família de embalagens da hamburgueria fictícia Brasa Bruta em kraft impresso preto e vermelho: caixa de hambúrguer, saco de delivery, porta-fritas, adesivos e papel de bandeja",
  },
  arguments: [
    {
      title: "Matéria-prima para alimentos",
      text: "Papéis e cartões de matéria-prima apropriada para uso com alimentos, com estrutura para uso real: gordura, calor e transporte.",
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
  productsNote: {
    before: "Para marcas que vendem pela apresentação, também fazemos ",
    link: "caixas personalizadas",
    href: "/produtos/caixas-personalizadas",
    after: ": rígidas, cartonadas, luvas e papelão ondulado, com faca sob medida e protótipo incluso.",
  },
  ctaTitle: "Leve sua marca até a mesa.",
};

export default function EmbalagensPage() {
  return <SolutionTemplate config={config} />;
}
