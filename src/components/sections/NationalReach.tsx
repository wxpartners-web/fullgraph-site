import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { RichTextInline } from "@/components/catalog/ProductRichText";
import { servedRegions } from "@/data/home";

/** Regiões atendidas — DF, cidades de Goiás e frete para os demais estados */
export function NationalReach() {
  return (
    <section className="surface-paper grain on-paper relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="07"
          eyebrow="Alcance"
          title="Regiões atendidas"
          serifWord="atendidas"
          onPaper
        />

        {/* rota tipográfica */}
        <div className="mt-12 flex items-center gap-4 overflow-hidden" aria-hidden="true">
          <span className="text-spec flex-none text-carbon/60">BSB</span>
          <span className="rule-dotted min-w-0 flex-1 opacity-50" />
          <span className="inline-block size-2 flex-none rounded-full bg-ink" />
          <span className="rule-dotted min-w-0 flex-1 opacity-50" />
          <span className="text-spec flex-none text-carbon/60">DF · GO · BR</span>
        </div>

        <Reveal delay={0.08}>
          <p className="text-lead mt-12 max-w-4xl text-carbon/80">
            <RichTextInline value={servedRegions} />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
