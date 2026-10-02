import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { getProduct, getCategory, getRelatedProducts, products } from "@/data/products";
import { getProductContent } from "@/data/product-content";
import { pageMetadata, serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { InkButton } from "@/components/ui/InkButton";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ProductMockup } from "@/components/catalog/ProductMockup";
import { ProductDrawerCard } from "@/components/catalog/ProductDrawerCard";
import { ProductContentSections } from "@/components/catalog/ProductContentSections";
import { ProductFaq } from "@/components/catalog/ProductFaq";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { hasWhatsApp, whatsappUrl, whatsappCtaLabel } from "@/lib/whatsapp";
import type { Product } from "@/types";

interface ProdutoPageProps {
  params: Promise<{ slug: string }>;
}

const META_DESCRIPTION_MAX = 155;

/** Corta no limite de caracteres sem partir palavra ao meio */
function metaDescription(text: string): string {
  if (text.length <= META_DESCRIPTION_MAX) return text;
  const cut = text.slice(0, META_DESCRIPTION_MAX);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.—-]+$/, "")}…`;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProdutoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const content = getProductContent(slug);
  if (content) {
    return pageMetadata({
      title: content.metaTitle,
      description: content.metaDescription,
      path: `/produtos/${product.slug}`,
      image: `/og/produtos/${product.slug}.jpg`,
      absoluteTitle: true,
    });
  }
  return pageMetadata({
    title: `${product.name} em Brasília-DF`,
    description: metaDescription(`${product.tagline} ${product.description}`),
    path: `/produtos/${product.slug}`,
    image: `/og/produtos/${product.slug}.jpg`,
  });
}

function SpecPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-t-2 border-carbon/15 pt-5">
      <h3 className="text-spec text-carbon/60">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-carbon/85">
            <span aria-hidden="true" className="mt-1.5 inline-block size-1 flex-none bg-ink" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function RelatedProducts({ related, headingAs: Heading }: { related: Product[]; headingAs: "h2" | "p" }) {
  return (
    <section className="relative border-t border-white-tech/10 bg-carbon-2 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Heading className="text-h3 font-semibold text-white-tech">Quem pede este, também pede</Heading>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {related.slice(0, 3).map((rel) => (
            <ProductDrawerCard key={rel.slug} product={rel} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function ProdutoPage({ params }: ProdutoPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product);
  const waMessage = `Olá! Quero um orçamento de ${product.name} pela FullGraph.`;
  /* Money Page: copy longa aprovada substitui tagline, "Sobre este produto" e o CtaFinal padrão */
  const content = getProductContent(slug);
  const faq = content?.faq ?? product.faq;
  const breadcrumb = breadcrumbJsonLd([
    { name: "Início", path: "" },
    { name: "Produtos", path: "/produtos" },
    { name: product.name, path: `/produtos/${product.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd(content ? { ...product, description: content.metaDescription } : product),
          ),
        }}
      />
      {faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq)) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero do produto — o card se expande para cá */}
      <section className="grain relative overflow-hidden bg-carbon pb-20 pt-36 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <nav aria-label="Você está em" className="mb-10">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-steel-2">
              <li>
                <Link href="/produtos" className="transition-colors hover:text-white-tech">
                  Catálogo
                </Link>
              </li>
              <ChevronRight aria-hidden="true" className="size-3.5" />
              {category && (
                <>
                  <li>
                    <Link
                      href={`/produtos#${category.slug}`}
                      className="transition-colors hover:text-white-tech"
                    >
                      {category.shortName}
                    </Link>
                  </li>
                  <ChevronRight aria-hidden="true" className="size-3.5" />
                </>
              )}
              <li aria-current="page" className="text-steel">
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.2fr_1fr]">
            <div>
              <Reveal>
                <p className="text-spec mb-5 flex items-center gap-3 text-steel">
                  <span aria-hidden="true" className="inline-block h-px w-8 bg-ink" />
                  {category?.name} · {category?.index}
                </p>
              </Reveal>
              {content ? (
                <>
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
                        href={whatsappUrl(waMessage)}
                        external={hasWhatsApp()}
                        size="lg"
                        withArrow
                        data-testid="product-intro-whatsapp"
                      >
                        {whatsappCtaLabel(content.introCta)}
                      </InkButton>
                    </div>
                  </Reveal>
                </>
              ) : (
                <>
                  <Reveal kind="clip">
                    <h1 className="text-h1 font-semibold text-white-tech text-balance">{product.name}</h1>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="text-lead mt-5 max-w-xl text-steel">{product.tagline}</p>
                  </Reveal>
                  <Reveal delay={0.14}>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <InkButton href="/orcamento" size="lg" data-testid="product-cta-orcamento">
                        Solicitar orçamento
                      </InkButton>
                      {hasWhatsApp() && (
                        <InkButton href={whatsappUrl(waMessage)} external variant="outline" size="lg">
                          Falar no WhatsApp
                        </InkButton>
                      )}
                    </div>
                  </Reveal>
                </>
              )}
              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
                  {product.specs.map((spec) => (
                    <p key={spec.label} className="text-spec text-steel-2">
                      {spec.label}: <span className="text-steel">{spec.value}</span>
                    </p>
                  ))}
                  <p className="text-spec text-ink">Sob consulta</p>
                </div>
              </Reveal>
            </div>

            <div
              className="crop-marks relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden text-steel-2"
              data-testid="product-hero-mockup"
              aria-hidden={product.image ? undefined : true}
            >
              {product.image ? (
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  fill
                  priority
                  sizes="(min-width: 768px) 384px, 90vw"
                  className="object-cover"
                />
              ) : (
                <ProductMockup kind={product.mockup} accent={product.accent} />
              )}
            </div>
          </div>
        </div>
      </section>

      {content ? (
        <>
          <ProductContentSections sections={content.sections} />
          {related.length > 0 && <RelatedProducts related={related} headingAs="p" />}
          <CtaFinal
            title={content.closing.heading}
            serifWord={content.closing.serifWord}
            text={content.closing.text}
            quoteLabel={content.closing.quoteLabel}
            whatsappLabel={content.closing.whatsappLabel}
          />
          {/* FAQ é o último H2 da Money Page */}
          {faq.length > 0 && <ProductFaq faq={faq} heading={content.faqHeading} />}
        </>
      ) : (
        <>
          {/* Descrição + especificações */}
          <section className="surface-paper grain on-paper py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
                <div>
                  <h2 className="text-h3 font-semibold">Sobre este produto</h2>
                  <p className="mt-4 leading-relaxed text-carbon/80">{product.description}</p>
                  <h3 className="text-spec mt-8 text-carbon/60">Aplicações</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <li
                        key={app}
                        className="border border-carbon/20 px-3 py-1.5 text-sm text-carbon/80"
                      >
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>

                <RevealGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2" stagger={0.05}>
                  <RevealItem>
                    <SpecPanel title="Formatos" items={product.formats} />
                  </RevealItem>
                  <RevealItem>
                    <SpecPanel title="Papéis e materiais" items={product.materials} />
                  </RevealItem>
                  <RevealItem>
                    <SpecPanel title="Acabamentos" items={product.finishes} />
                  </RevealItem>
                  <RevealItem>
                    <SpecPanel title="Tiragens" items={product.runRanges} />
                  </RevealItem>
                </RevealGroup>
              </div>
            </div>
          </section>

          {/* FAQ */}
          {faq.length > 0 && <ProductFaq faq={faq} />}

          {/* Relacionados */}
          {related.length > 0 && <RelatedProducts related={related} headingAs="h2" />}

          <CtaFinal
            title="Vamos dar matéria ao seu projeto?"
            text="Conte formato, quantidade e prazo — devolvemos um orçamento sob medida."
          />
        </>
      )}
    </>
  );
}
