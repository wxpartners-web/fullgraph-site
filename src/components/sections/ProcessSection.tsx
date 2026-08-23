import { SectionHeading } from "@/components/layout/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const stages = [
  {
    step: "Pré-impressão",
    items: ["Conferência de arquivo", "Prova digital", "Ajuste de sangria e cores", "Cálculo de lombada"],
  },
  {
    step: "Impressão",
    items: ["Offset para volume", "Digital para tiragens curtas", "Grande formato", "Cor calibrada"],
  },
  {
    step: "Acabamento",
    items: ["Corte e refile", "Vinco e dobra", "Laminação e verniz", "Encadernação e colagem"],
  },
  {
    step: "Logística",
    items: ["Embalagem protegida", "Expedição de Brasília", "Entrega em todo o Brasil", "Reposição programada"],
  },
] as const;

export function ProcessSection() {
  return (
    <section className="relative border-t border-white-tech/10 bg-carbon-2 py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="04"
          eyebrow="Processo produtivo"
          title="Um fluxo, quatro bancadas"
          serifWord="bancadas"
        />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-white-tech/10 bg-white-tech/10 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {stages.map((stage, i) => (
            <RevealItem key={stage.step} className="bg-carbon-2 p-7">
              <p className="text-spec text-steel-2">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-lg font-semibold text-white-tech">{stage.step}</h3>
              <ul className="mt-4 space-y-2">
                {stage.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-steel">
                    <span aria-hidden="true" className="mt-1.5 inline-block size-1 flex-none bg-ink" />
                    {item}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
