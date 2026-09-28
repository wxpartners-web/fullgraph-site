import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const portals = [
  {
    href: "/solucoes/empresas",
    index: "A",
    title: "Empresas & grandes tiragens",
    serif: "tiragens",
    text: "Catálogos, tabloides, papelaria e campanhas em volume, com padrão de cor e prazo combinado.",
    preview: ["Catálogos", "Tabloides", "Papelaria", "Flyers"],
  },
  {
    href: "/solucoes/livros-editorial",
    index: "B",
    title: "Livros & editorial",
    serif: "editorial",
    text: "Do arquivo à brochura: livros para autores, editoras e projetos independentes, em qualquer tiragem.",
    preview: ["Livros", "Revistas", "Apostilas", "Anuários"],
  },
  {
    href: "/solucoes/embalagens",
    index: "C",
    title: "Embalagens & alimentação",
    serif: "alimentação",
    text: "Caixas, papéis de bandeja, sacos e rótulos que levam sua marca até a mesa do cliente.",
    preview: ["Caixas", "Bandejas", "Sacos", "Rótulos"],
  },
] as const;

/**
 * Três portais comerciais — entradas visuais por público, com
 * preview tipográfico no hover (inspiração: navegação Locomotive).
 */
export function SolutionPortals() {
  return (
    <section id="solucoes" className="grain relative bg-carbon py-24 md:py-32 scroll-mt-[calc(var(--header-h)+0.5rem)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="01"
          eyebrow="Para quem fazemos"
          title="Três caminhos, uma prensa"
          description="Cada projeto entra por uma porta diferente — e sai da mesma produção, com o mesmo rigor."
        />

        <RevealGroup className="mt-14 border-t border-white-tech/10" stagger={0.1}>
          {portals.map((portal) => (
            <RevealItem key={portal.href}>
              <Link
                href={portal.href}
                className="group relative flex flex-col gap-2 border-b border-white-tech/10 py-5 pr-8 transition-colors duration-[var(--dur-comp)] hover:bg-white-tech/[0.03] md:flex-row md:items-center md:gap-8 md:py-10 md:pr-0"
                data-testid={`portal-${portal.index}`}
              >
                <div className="flex items-baseline gap-3 md:contents">
                  <span aria-hidden="true" className="text-spec flex-none text-steel-2 md:w-10">
                    {portal.index}
                  </span>

                  <h3 className="text-h3 flex-1 font-semibold text-white-tech">
                    {portal.title.split(portal.serif)[0]}
                    <em className="font-serif font-normal italic text-steel transition-colors duration-[var(--dur-micro)] group-hover:text-ink">
                      {portal.serif}
                    </em>
                  </h3>
                </div>

                <p className="max-w-sm flex-1 pl-6 text-sm leading-relaxed text-steel md:pl-0">
                  {portal.text}
                </p>

                {/* preview tipográfico no hover */}
                <div className="relative hidden h-6 w-44 overflow-hidden lg:block" aria-hidden="true">
                  <div className="hover-reveal absolute inset-0 flex translate-y-full flex-col transition-transform duration-[var(--dur-comp)] ease-[var(--ease-out-expo)] group-hover:translate-y-0">
                    <p className="text-spec whitespace-nowrap text-ink">
                      {portal.preview.join(" · ")}
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
