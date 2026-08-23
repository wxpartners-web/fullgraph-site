import { pageMetadata } from "@/lib/seo";
import { Reveal } from "@/components/motion/Reveal";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CtaFinal } from "@/components/sections/CtaFinal";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Tipos de trabalho que saem da produção da Fullgraph: livros, embalagens, catálogos, tabloides e mais — composições demonstrativas.",
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
              O que sai da <em className="font-serif font-normal italic text-ink">prensa</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lead mt-6 max-w-2xl text-steel">
              Uma amostra dos tipos de trabalho que produzimos. As peças abaixo são
              composições demonstrativas — cases reais entram conforme autorização
              dos clientes.
            </p>
          </Reveal>
        </div>
      </section>
      <PortfolioGrid showHeading={false} />
      <CtaFinal title="Seu projeto pode ser o próximo da prensa." />
    </>
  );
}
