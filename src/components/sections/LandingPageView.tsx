import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { breadcrumbJsonLd, cityAreaServed, faqJsonLd, pageServiceJsonLd } from "@/lib/seo";
import { InkButton } from "@/components/ui/InkButton";
import { Reveal } from "@/components/motion/Reveal";
import { ProductContentSections } from "@/components/catalog/ProductContentSections";
import { ProductFaq } from "@/components/catalog/ProductFaq";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { hasWhatsApp, whatsappUrl, whatsappCtaLabel } from "@/lib/whatsapp";
import type { LandingPage } from "@/types";

export interface Crumb {
  name: string;
  /** Caminho a partir da raiz ("" = início) */
  path: string;
}

function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

function Breadcrumb({ crumbs }: { crumbs: readonly Crumb[] }) {
  return (
    <nav aria-label="Você está em" className="mb-10">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-steel-2">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="text-steel">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link href={crumb.path || "/"} className="transition-colors hover:text-white-tech">
                    {crumb.name}
                  </Link>
                  <ChevronRight aria-hidden="true" className="size-3.5" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Página longa com copy aprovada (soluções e cidades): hero com o H1,
 * seções H2 na ordem da copy, CTA de orçamento e FAQ como último H2.
 * `children` entra entre as seções e o CTA — sem H2, para não alterar
 * a sequência aprovada.
 */
export function LandingPageView({
  page,
  crumbs,
  children,
}: {
  page: LandingPage;
  crumbs: readonly Crumb[];
  children?: ReactNode;
}) {
  const { content } = page;
  const service = pageServiceJsonLd({
    name: content.h1,
    description: content.metaDescription,
    path: page.path,
    serviceType: page.keyword,
    areaServed: page.city ? [cityAreaServed(page.city.name, page.city.state)] : undefined,
  });

  return (
    <>
      <JsonLd data={service} />
      <JsonLd data={faqJsonLd(content.faq)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <section className="grain relative overflow-hidden bg-carbon pb-20 pt-36 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Breadcrumb crumbs={crumbs} />
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.2fr_1fr]">
            <div>
              <Reveal>
                <p className="text-spec mb-5 flex items-center gap-3 text-steel">
                  <span aria-hidden="true" className="inline-block h-px w-8 bg-ink" />
                  {page.eyebrow}
                </p>
              </Reveal>
              <Reveal kind="clip">
                <h1 className="text-h2 font-semibold text-white-tech text-balance">{content.h1}</h1>
              </Reveal>
              <Reveal delay={0.1}>
                {content.intro.map((paragraph, i) => (
                  <p
                    key={paragraph}
                    className={
                      i === 0
                        ? "text-lead mt-6 max-w-2xl text-white-tech/90"
                        : "mt-4 max-w-2xl leading-relaxed text-steel"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </Reveal>
              <Reveal delay={0.14}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <InkButton
                    href={whatsappUrl(page.whatsappMessage)}
                    external={hasWhatsApp()}
                    size="lg"
                    withArrow
                    data-testid="landing-intro-whatsapp"
                  >
                    {whatsappCtaLabel(content.introCta)}
                  </InkButton>
                </div>
              </Reveal>
            </div>

            <div className="crop-marks relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden text-steel-2">
              <Image
                src={page.image.src}
                alt={page.image.alt}
                fill
                priority
                sizes="(min-width: 768px) 384px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ProductContentSections sections={content.sections} whatsappMessage={page.whatsappMessage} />
      {children}
      <CtaFinal
        title={content.closing.heading}
        serifWord={content.closing.serifWord}
        text={content.closing.text}
        quoteLabel={content.closing.quoteLabel}
        whatsappLabel={content.closing.whatsappLabel}
      />
      {/* FAQ é o último H2 da página */}
      <ProductFaq faq={content.faq} heading={content.faqHeading} />
    </>
  );
}
