import { getProductsByAudience } from "@/data/products";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ProductDrawerCard } from "@/components/catalog/ProductDrawerCard";
import type { Audience } from "@/types";

/**
 * Grade de produtos do público nas soluções com copy longa. O título é
 * um <p>: os H2 da página seguem só a copy aprovada.
 */
export function SolutionProducts({ audience }: { audience: Audience }) {
  const products = getProductsByAudience(audience);
  if (products.length === 0) return null;
  return (
    <section className="relative border-t border-white-tech/10 bg-carbon-2 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-h3 font-semibold text-white-tech">Produtos desta solução</p>
        <RevealGroup
          className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {products.map((product) => (
            <RevealItem key={product.slug}>
              <ProductDrawerCard product={product} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
