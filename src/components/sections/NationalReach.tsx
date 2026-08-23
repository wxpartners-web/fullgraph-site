import { SectionHeading } from "@/components/layout/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { trueHighlights } from "@/data/site";

export function NationalReach() {
  return (
    <section className="surface-paper grain on-paper relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="06"
          eyebrow="Alcance"
          title="Impresso em Brasília. Entregue no Brasil."
          serifWord="Brasil."
          onPaper
          description="A produção fica no centro do país — e o resultado chega a qualquer estado, do lote único à reposição contínua."
        />

        {/* rota tipográfica */}
        <div className="mt-12 flex items-center gap-4 overflow-hidden" aria-hidden="true">
          <span className="text-spec flex-none text-carbon/60">BSB</span>
          <span className="rule-dotted min-w-0 flex-1 opacity-50" />
          <span className="inline-block size-2 flex-none rounded-full bg-ink" />
          <span className="rule-dotted min-w-0 flex-1 opacity-50" />
          <span className="text-spec flex-none text-carbon/60">Todo o Brasil</span>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {trueHighlights.map((highlight, i) => (
            <RevealItem key={highlight.title} className="border-t-2 border-carbon/15 pt-5">
              <p className="text-spec text-carbon/50">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 font-semibold">{highlight.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-carbon/70">{highlight.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
