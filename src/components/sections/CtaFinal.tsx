import { InkButton } from "@/components/ui/InkButton";
import { Reveal } from "@/components/motion/Reveal";
import { hasWhatsApp, whatsappUrl, whatsappCtaLabel } from "@/lib/whatsapp";

/** CTA de fim de página — presente em todas as rotas principais */
export function CtaFinal({
  title = "Pronto para dar matéria à sua ideia?",
  text = "Conte formato, quantidade e prazo — devolvemos um orçamento sob medida.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="grain relative overflow-hidden border-t border-white-tech/10 bg-carbon py-24 md:py-32">
      {/* respingos de registro nas bordas */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-6 top-10 h-16 w-24 rotate-12 bg-reg-cyan/10 blur-2xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-8 bottom-8 h-20 w-28 -rotate-6 bg-reg-magenta/10 blur-2xl" />

      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal kind="clip" as="div">
          <h2 className="text-h1 font-semibold text-white-tech">
            {title.split("matéria")[0]}
            {title.includes("matéria") ? (
              <>
                <em className="font-serif font-normal italic text-ink">matéria</em>
                {title.split("matéria")[1]}
              </>
            ) : null}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lead mx-auto mt-6 max-w-xl text-steel">{text}</p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <InkButton href="/orcamento" size="lg" data-testid="cta-final-orcamento">
              Solicitar orçamento
            </InkButton>
            <InkButton
              href={whatsappUrl()}
              external={hasWhatsApp()}
              variant="outline"
              size="lg"
              data-testid="cta-final-whatsapp"
            >
              {whatsappCtaLabel()}
            </InkButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
