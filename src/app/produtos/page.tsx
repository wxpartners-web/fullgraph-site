import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { categories, getProductsByCategory } from "@/data/products";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ProductDrawerCard } from "@/components/catalog/ProductDrawerCard";
import { CtaFinal } from "@/components/sections/CtaFinal";

export const metadata = pageMetadata({
  title: "Catálogo de produtos gráficos — gráfica em Brasília-DF",
  description:
    "Livros, catálogos, flyers, embalagens, rótulos, cadernos e comunicação visual — o mostruário completo da FullGraph, com orçamento sob consulta.",
  path: "/produtos",
});

export default function ProdutosPage() {
  const groups = categories
    .map((category) => ({ category, items: getProductsByCategory(category.slug) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      {/* Cabeçalho do mostruário */}
      <section className="grain relative bg-carbon pb-16 pt-40 md:pt-48">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-spec mb-6 flex items-center gap-3 text-steel">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-ink" />
              Catálogo
            </p>
          </Reveal>
          <Reveal kind="clip">
            <h1 className="text-h1 max-w-4xl font-semibold text-white-tech">
              A gaveta de <em className="font-serif font-normal italic text-ink">amostras</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lead mt-6 max-w-2xl text-steel">
              Nove famílias de produto, todas sob consulta. Abra uma amostra para
              ver formatos, papéis e acabamentos — e peça o orçamento do seu jeito.
            </p>
          </Reveal>

          {/* trilho de categorias */}
          <nav aria-label="Categorias" className="mt-12 -mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
            <ul className="flex gap-2 pb-2">
              {groups.map(({ category }) => (
                <li key={category.slug} className="flex-none">
                  <Link
                    href={`#${category.slug}`}
                    className="text-spec inline-flex items-center gap-2 border border-white-tech/15 px-4 py-2.5 text-steel transition-colors duration-[var(--dur-micro)] hover:border-ink hover:text-white-tech"
                  >
                    <span aria-hidden="true" className="text-steel-2">{category.index}</span>
                    {category.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Famílias */}
      {groups.map(({ category, items }, gi) => (
        <section
          key={category.slug}
          id={category.slug}
          className={
            gi % 2 === 1
              ? "relative border-t border-white-tech/10 bg-carbon-2 py-20 scroll-mt-20"
              : "grain relative border-t border-white-tech/10 bg-carbon py-20 scroll-mt-20"
          }
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mb-10 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <span aria-hidden="true" className="text-spec text-steel-2">
                {category.index}
              </span>
              <h2 className="text-h3 font-semibold text-white-tech">{category.name}</h2>
              <p className="max-w-xl text-sm text-steel">{category.description}</p>
            </div>
            <RevealGroup
              className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
              stagger={0.06}
            >
              {items.map((product, i) => (
                <RevealItem key={product.slug} className={i % 3 === 1 ? "lg:translate-y-8" : undefined}>
                  <ProductDrawerCard product={product} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      ))}

      <CtaFinal
        title="Não achou a amostra exata?"
        text="Produzimos fora de catálogo também — descreva o material no orçamento e a gente resolve."
      />
    </>
  );
}
