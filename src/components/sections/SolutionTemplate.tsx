import Image from "next/image";
import type { Audience, ProductImage } from "@/types";
import { getProductsByAudience } from "@/data/products";
import { InkButton } from "@/components/ui/InkButton";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ProductDrawerCard } from "@/components/catalog/ProductDrawerCard";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { ProductMockup } from "@/components/catalog/ProductMockup";
import type { MockupKind } from "@/types";

export interface SolutionConfig {
  audience: Audience;
  index: string;
  eyebrow: string;
  title: string;
  serifWord: string;
  intro: string;
  heroMockup: MockupKind;
  /** Foto do hero — quando ausente, o mockup procedural é o fallback */
  heroImage?: ProductImage;
  accent?: string;
  arguments: { title: string; text: string }[];
  ctaTitle: string;
}

/** Template das três páginas de solução — hero próprio por público */
export function SolutionTemplate({ config }: { config: SolutionConfig }) {
  const products = getProductsByAudience(config.audience);
  const titleParts = config.title.split(config.serifWord);

  return (
    <>
      {/* Hero da solução */}
      <section className="grain relative overflow-hidden bg-carbon pb-20 pt-40 md:pb-28 md:pt-48">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-[1.4fr_1fr] md:px-8">
          <div>
            <Reveal>
              <p className="text-spec mb-6 flex items-center gap-3 text-steel">
                <span aria-hidden="true" className="inline-block h-px w-8 bg-ink" />
                Solução {config.index} — {config.eyebrow}
              </p>
            </Reveal>
            <Reveal kind="clip">
              <h1 className="text-h1 font-semibold text-white-tech text-balance">
                {titleParts[0]}
                <em className="font-serif font-normal italic text-ink">{config.serifWord}</em>
                {titleParts[1]}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-lead mt-6 max-w-xl text-steel">{config.intro}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap gap-4">
                <InkButton href="/orcamento" size="lg">
                  Solicitar orçamento
                </InkButton>
                <InkButton href="/produtos" variant="outline" size="lg">
                  Ver produtos
                </InkButton>
              </div>
            </Reveal>
          </div>

          <div
            className="crop-marks relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden text-steel-2"
            aria-hidden={config.heroImage ? undefined : true}
          >
            {config.heroImage ? (
              <Image
                src={config.heroImage.src}
                alt={config.heroImage.alt}
                fill
                priority
                sizes="(min-width: 768px) 384px, 90vw"
                className="object-cover"
              />
            ) : (
              <ProductMockup kind={config.heroMockup} accent={config.accent} />
            )}
          </div>
        </div>
      </section>

      {/* Argumentos */}
      <section className="surface-paper grain on-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <RevealGroup className="grid grid-cols-1 gap-10 md:grid-cols-3" stagger={0.08}>
            {config.arguments.map((arg, i) => (
              <RevealItem key={arg.title} className="border-t-2 border-carbon/15 pt-5">
                <p className="text-spec text-carbon/60">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="text-h3 mt-2 font-semibold">{arg.title}</h2>
                <p className="mt-3 leading-relaxed text-carbon/75">{arg.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Produtos do público */}
      <section className="grain relative bg-carbon py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="O que produzimos para você"
            title="Produtos desta solução"
          />
          <RevealGroup className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {products.map((product) => (
              <RevealItem key={product.slug}>
                <ProductDrawerCard product={product} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaFinal title={config.ctaTitle} />
    </>
  );
}
