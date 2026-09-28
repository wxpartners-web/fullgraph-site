import { SectionHeading } from "@/components/layout/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ProductDrawerCard } from "@/components/catalog/ProductDrawerCard";
import { InkButton } from "@/components/ui/InkButton";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="grain relative bg-carbon py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="03"
            eyebrow="Gaveta de amostras"
            title="Produtos em destaque"
            description="Uma amostra do que sai da nossa produção todos os dias. Tudo sob consulta, tudo sob medida."
          />
          <InkButton href="/produtos" variant="outline">
            Ver catálogo completo
          </InkButton>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {featured.map((product, i) => (
            <RevealItem key={product.slug} className={i % 3 === 1 ? "lg:translate-y-10" : undefined}>
              <ProductDrawerCard product={product} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
