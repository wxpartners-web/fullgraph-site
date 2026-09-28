import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ProductMockup } from "@/components/catalog/ProductMockup";
import { portfolioItems } from "@/data/portfolio";

export function PortfolioGrid({
  compact = false,
  showHeading = true,
}: {
  compact?: boolean;
  showHeading?: boolean;
}) {
  const items = compact ? portfolioItems.slice(0, 4) : portfolioItems;

  return (
    <section className={compact ? "grain relative bg-carbon py-24 md:py-32" : "grain relative bg-carbon pb-24 pt-14 md:pb-32"}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {!showHeading ? null : compact ? (
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              index="05"
              eyebrow="Portfolio"
              title="Matéria que já saiu da prensa"
              serifWord="prensa"
              description="Composições demonstrativas — os cases reais entram aqui conforme forem autorizados pelos clientes."
            />
            <Link
              href="/portfolio"
              className="group text-spec flex items-center gap-2 text-steel transition-colors hover:text-white-tech"
            >
              Ver portfolio
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-[var(--dur-micro)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        ) : (
          <SectionHeading
            eyebrow="Portfolio"
            title="Matéria que já saiu da prensa"
            serifWord="prensa"
            description="Composições demonstrativas de tipos de trabalho que produzimos — os cases reais entram aqui conforme forem autorizados pelos clientes."
          />
        )}

        <RevealGroup
          className={
            showHeading
              ? "mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
              : "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          }
          stagger={0.06}
        >
          {items.map((item) => (
            <RevealItem key={item.id}>
              <figure className="group">
                <div
                  className="crop-marks relative aspect-[4/5] overflow-hidden border border-white-tech/10 text-steel-2 transition-colors duration-[var(--dur-comp)] group-hover:border-white-tech/25"
                  style={{ background: `color-mix(in srgb, ${item.palette[0]} 14%, var(--carbon-2))` }}
                >
                  <div className="absolute inset-0 transition-transform duration-[var(--dur-comp)] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]">
                    {item.image ? (
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <ProductMockup kind={item.mockup} accent={item.palette[0]} base={item.palette[1]} />
                    )}
                  </div>
                  <span className="text-spec absolute left-3 top-3 text-steel">{item.segment}</span>
                </div>
                <figcaption className="mt-3">
                  <p className="text-sm font-medium text-white-tech">{item.title}</p>
                  <p className="text-spec mt-1 text-steel-2">
                    {item.productType}
                    {item.placeholder && " · exemplo ilustrativo"}
                  </p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
