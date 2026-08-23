import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types";
import { ProductMockup } from "./ProductMockup";
import { getCategory } from "@/data/products";
import { cn } from "@/lib/utils";

/**
 * Card do catálogo "gaveta de amostras": o produto ganha
 * profundidade no hover, as camadas se separam discretamente e a
 * especificação técnica surge — tudo sem deslocar o layout.
 * Interações via CSS puro (funciona sem JS; touch vê tudo visível).
 */
export function ProductDrawerCard({
  product,
  large = false,
}: {
  product: Product;
  large?: boolean;
}) {
  const category = getCategory(product.category);
  const spec = product.specs[0];

  return (
    <Link
      href={`/produtos/${product.slug}`}
      className="group block focus-visible:outline-offset-4"
      data-testid={`product-card-${product.slug}`}
    >
      <article className="relative">
        {/* Bandeja da amostra */}
        <div
          className={cn(
            "crop-marks relative overflow-hidden border border-white-tech/10 bg-carbon-2 text-steel-2 transition-colors duration-[var(--dur-comp)] group-hover:border-white-tech/25",
            large ? "aspect-[4/3]" : "aspect-[5/4]"
          )}
          style={{ perspective: "900px" }}
        >
          {/* camadas de papel que se separam no hover */}
          <div className="absolute inset-[10%] translate-x-0 translate-y-0 rotate-0 bg-white-tech/5 transition-transform duration-[var(--dur-comp)] ease-[var(--ease-out-expo)] group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:-rotate-2" />
          <div className="absolute inset-[10%] bg-white-tech/8 transition-transform duration-[var(--dur-comp)] ease-[var(--ease-out-expo)] group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:rotate-1" />

          {/* produto: inclinação máxima controlada (~4°) */}
          <div className="absolute inset-0 transition-transform duration-[var(--dur-comp)] ease-[var(--ease-out-expo)] [transform:rotateX(0)_translateY(0)] group-hover:[transform:rotateX(4deg)_translateY(-6px)_scale(1.02)]">
            <ProductMockup kind={product.mockup} accent={product.accent} />
          </div>

          {/* especificação técnica revela no hover (sem layout shift) */}
          {spec && (
            <p className="hover-reveal text-spec pointer-events-none absolute bottom-3 left-3 right-3 flex items-center gap-2 text-steel opacity-0 transition-opacity duration-[var(--dur-comp)] group-hover:opacity-100">
              <span className="inline-block size-1.5 flex-none bg-ink" aria-hidden="true" />
              {spec.label}: {spec.value}
            </p>
          )}

          {/* índice de categoria */}
          {category && (
            <span className="text-spec absolute left-3 top-3 text-steel-2" aria-hidden="true">
              {category.index}
            </span>
          )}
        </div>

        {/* Ficha */}
        <div className="relative mt-4 pr-9">
          <p className="text-spec text-steel-2">{category?.shortName}</p>
          <h3 className={cn("mt-1 font-semibold tracking-tight text-white-tech", large ? "text-xl" : "text-lg")}>
            {product.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-steel">{product.tagline}</p>
          <p className="text-spec mt-3 text-ink">Sob consulta</p>
          <ArrowUpRight
            aria-hidden="true"
            className="absolute right-0 top-1 size-5 text-steel-2 transition-[transform,color] duration-[var(--dur-micro)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
          />
        </div>
      </article>
    </Link>
  );
}
