import { SolutionTemplate, type SolutionConfig } from "@/components/sections/SolutionTemplate";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Impressão de livros para autores e editoras",
  description:
    "Livros, revistas e publicações com acabamento editorial: miolo em pólen ou offset, capa laminada e encadernação à sua escolha.",
  path: "/solucoes/livros-editorial",
});

const config: SolutionConfig = {
  audience: "livros",
  index: "B",
  eyebrow: "Livros & editorial",
  title: "Seu texto merece papel, lombada e estante.",
  serifWord: "lombada",
  intro:
    "Para autores independentes, editoras e projetos especiais: acompanhamos o arquivo da prova ao acabamento, em tiragens que cabem no seu plano.",
  heroMockup: "book",
  arguments: [
    {
      title: "Tiragem que cabe no projeto",
      text: "De poucas dezenas para o lançamento a milhares para distribuição — com comparativo de custo por faixa.",
    },
    {
      title: "Pré-impressão de verdade",
      text: "Conferimos sangria, fontes e imagens, calculamos a lombada e enviamos prova antes de rodar.",
    },
    {
      title: "Acabamento editorial",
      text: "Pólen no miolo, laminação na capa, orelhas, verniz localizado — o livro com cara de livraria.",
    },
  ],
  ctaTitle: "Transforme o manuscrito em matéria.",
};

export default function LivrosEditorialPage() {
  return <SolutionTemplate config={config} />;
}
