import { SectionHeading } from "@/components/layout/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { whyChoose } from "@/data/home";

/** Diferenciais aprovados — superfície papel, quatro colunas */
export function WhyChoose() {
  return (
    <section className="surface-paper grain on-paper relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="02"
          eyebrow="Diferenciais"
          title="Por que escolher a FullGraph"
          serifWord="FullGraph"
          onPaper
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {whyChoose.map((item, i) => (
            <RevealItem key={item.title} className="border-t-2 border-carbon/15 pt-5">
              <p className="text-spec text-carbon/60">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-carbon/70">{item.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
