import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { printFronts, type PrintFront } from "@/data/home";

const LETTERS = "ABCDEF";

/** Título com o trecho `serif` em itálico serifado (padrão do sistema) */
function FrontTitle({ front }: { front: PrintFront }) {
  if (!front.serif) return <>{front.title}</>;
  const [before, after] = front.title.split(front.serif);
  return (
    <>
      {before}
      <em className="font-serif font-normal italic text-steel transition-colors duration-[var(--dur-micro)] group-hover:text-ink">
        {front.serif}
      </em>
      {after}
    </>
  );
}

/**
 * As seis frentes de impressão — cada uma leva à rota mais próxima
 * (solução, catálogo ou orçamento), com o destino revelado no hover
 * (inspiração: navegação Locomotive).
 */
export function SolutionPortals() {
  return (
    <section id="solucoes" className="grain relative bg-carbon py-24 md:py-32 scroll-mt-[calc(var(--header-h)+0.5rem)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="01"
          eyebrow="O que imprimimos"
          title="O que a gráfica em Brasília da FullGraph imprime?"
          serifWord="imprime?"
        />

        <RevealGroup className="mt-14 border-t border-white-tech/10" stagger={0.1}>
          {printFronts.map((front, i) => (
            <RevealItem key={front.slug}>
              <Link
                href={front.href}
                className="group relative flex flex-col gap-2 border-b border-white-tech/10 py-5 pr-8 transition-colors duration-[var(--dur-comp)] hover:bg-white-tech/[0.03] md:flex-row md:items-center md:gap-8 md:py-10 md:pr-0"
                data-testid={`portal-${front.slug}`}
              >
                <div className="flex items-baseline gap-3 md:contents">
                  <span aria-hidden="true" className="text-spec flex-none text-steel-2 md:w-10">
                    {LETTERS[i]}
                  </span>

                  <h3 className="text-h3 flex-1 font-semibold text-white-tech">
                    <FrontTitle front={front} />
                  </h3>
                </div>

                <p className="max-w-sm flex-1 pl-6 text-sm leading-relaxed text-steel first-letter:uppercase md:pl-0">
                  {front.text}
                </p>

                {/* destino revelado no hover */}
                <div className="relative hidden h-6 w-44 overflow-hidden lg:block" aria-hidden="true">
                  <div className="hover-reveal absolute inset-0 flex translate-y-full flex-col transition-transform duration-[var(--dur-comp)] ease-[var(--ease-out-expo)] group-hover:translate-y-0">
                    <p className="text-spec whitespace-nowrap text-ink">
                      {front.linkLabel}
                    </p>
                  </div>
                </div>

                <ArrowRight
                  aria-hidden="true"
                  className="absolute right-0 top-6 size-5 flex-none text-steel-2 transition-[transform,color] md:static duration-[var(--dur-micro)] group-hover:translate-x-1.5 group-hover:text-ink"
                />
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
