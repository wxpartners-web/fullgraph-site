import { Reveal } from "@/components/motion/Reveal";
import { ContentBlocks } from "@/components/catalog/ProductRichText";
import type { ContentSection } from "@/types";

/**
 * Corpo da Money Page: cada seção aprovada vira um H2, na ordem da
 * copy. Superfície papel, índice técnico à esquerda e texto à direita.
 */
export function ProductContentSections({ sections }: { sections: readonly ContentSection[] }) {
  return (
    <div className="surface-paper grain on-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {sections.map((section, i) => (
          <section
            key={section.heading}
            className="grid grid-cols-1 gap-6 border-t-2 border-carbon/15 py-12 first:border-t-0 first:pt-0 last:pb-0 md:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-16"
          >
            <Reveal>
              <p className="text-spec text-carbon/60">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="text-h3 mt-3 max-w-md font-semibold text-balance">{section.heading}</h2>
            </Reveal>
            <div className="max-w-2xl">
              <ContentBlocks blocks={section.blocks} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
