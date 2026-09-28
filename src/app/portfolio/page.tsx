import { pageMetadata } from "@/lib/seo";
import { Reveal } from "@/components/motion/Reveal";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CtaFinal } from "@/components/sections/CtaFinal";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Projetos conceituais que exploram o potencial de cada material, formato e acabamento: livros, embalagens, lookbooks, rótulos, papéis de bandeja e campanhas impressas.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <section className="grain relative bg-carbon pb-4 pt-40 md:pt-48">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-spec mb-6 flex items-center gap-3 text-steel">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-ink" />
              Portfolio
            </p>
          </Reveal>
          <Reveal kind="clip">
            <h1 className="text-h1 max-w-4xl font-semibold text-white-tech">
              Ideias que ganham <em className="font-serif font-normal italic text-ink">forma</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lead mt-6 max-w-2xl text-steel">
              Projetos conceituais que exploram o potencial de cada material,
              formato e acabamento. Cada marca foi criada para mostrar o que o
              papel certo, a cor calibrada e o acabamento bem resolvido fazem
              por um produto.
            </p>
          </Reveal>
        </div>
      </section>
      <PortfolioGrid showHeading={false} />
      <CtaFinal title="Seu projeto pode ser o próximo da prensa." />
    </>
  );
}
