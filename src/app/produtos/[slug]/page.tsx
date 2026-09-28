import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { getProduct, getCategory, getRelatedProducts, products } from "@/data/products";
import { pageMetadata } from "@/lib/seo";
import { productJsonLd, faqJsonLd } from "@/lib/seo";
import { InkButton } from "@/components/ui/InkButton";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ProductMockup } from "@/components/catalog/ProductMockup";
import { ProductDrawerCard } from "@/components/catalog/ProductDrawerCard";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { hasWhatsApp, whatsappUrl } from "@/lib/whatsapp";

interface ProdutoPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProdutoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return pageMetadata({
    title: product.name,
    description: `${product.tagline} ${product.description.slice(0, 120)}…`,
    path: `/produtos/${product.slug}`,
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

export default async function ProdutoPage({ params }: ProdutoPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product);
  const waMessage = `Olá! Quero um orçamento de ${product.name} pela Fullgraph.`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product)) }}
      />
      {product.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(product.faq)) }}
        />
      )}

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
      {product.faq.length > 0 && (
        <section className="grain relative bg-carbon py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <h2 className="text-h2 font-semibold text-white-tech">
              Perguntas <em className="font-serif font-normal italic text-ink">frequentes</em>
            </h2>
            <div className="mt-10 divide-y divide-white-tech/10 border-y border-white-tech/10">
              {product.faq.map((item) => (
                <details key={item.question} className="group py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-white-tech marker:hidden [&::-webkit-details-marker]:hidden">
                    <span className="font-medium">{item.question}</span>
                    <ChevronRight
                      aria-hidden="true"
                      className="size-4 flex-none text-steel-2 transition-transform duration-[var(--dur-micro)] group-open:rotate-90"
                    />
                  </summary>
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-steel">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Relacionados */}
      {related.length > 0 && (
        <section className="relative border-t border-white-tech/10 bg-carbon-2 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <h2 className="text-h3 font-semibold text-white-tech">Quem pede este, também pede</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 3).map((rel) => (
                <ProductDrawerCard key={rel.slug} product={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaFinal
        title="Vamos dar matéria ao seu projeto?"
        text="Conte formato, quantidade e prazo — devolvemos um orçamento sob medida."
      />
    </>
  );
}
