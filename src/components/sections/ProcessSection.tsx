import { SectionHeading } from "@/components/layout/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { orderSteps } from "@/data/home";

/** Como funciona o pedido — quatro etapas, do envio à entrega */
export function ProcessSection() {
  return (
    <section className="relative border-t border-white-tech/10 bg-carbon-2 py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="05"
          eyebrow="Passo a passo"
          title="Como funciona o seu pedido"
          serifWord="pedido"
        />
        <RevealGroup stagger={0.06}>
          <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-white-tech/10 bg-white-tech/10 sm:grid-cols-2 lg:grid-cols-4">
            {orderSteps.map((step, i) => (
              <li key={step} className="bg-carbon-2">
                <RevealItem className="h-full p-7">
                  <p aria-hidden="true" className="text-spec text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 leading-relaxed text-white-tech">{step}</p>
                </RevealItem>
              </li>
            ))}
          </ol>
        </RevealGroup>
      </div>
    </section>
  );
}
