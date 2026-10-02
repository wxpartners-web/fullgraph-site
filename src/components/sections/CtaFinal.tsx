import { InkButton } from "@/components/ui/InkButton";
import { Reveal } from "@/components/motion/Reveal";
import { hasWhatsApp, whatsappUrl, whatsappCtaLabel } from "@/lib/whatsapp";

/** CTA de fim de página — presente em todas as rotas principais */
export function CtaFinal({
  title = "Pronto para dar matéria à sua ideia?",
  text = "Conte formato, quantidade e prazo — devolvemos um orçamento sob medida.",
  serifWord = "matéria",
  quoteLabel = "Solicitar orçamento",
  whatsappLabel,
  items,
  note,
}: {
  title?: string;
  text?: string;
  /** Lista após o texto (ex.: o que mandar para o orçamento) */
  items?: readonly string[];
  /** Parágrafo depois da lista */
  note?: string;
  /** Trecho do título em serifa itálica, se presente */
  serifWord?: string;
  quoteLabel?: string;
  /** Rótulo do CTA de WhatsApp (degrada para telefone sem número) */
  whatsappLabel?: string;
}) {
  const [before, after] = title.split(serifWord);
  return (
    <section className="grain relative overflow-hidden border-t border-white-tech/10 bg-carbon py-24 md:py-32">
      {/* respingos de registro nas bordas */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-6 top-10 h-16 w-24 rotate-12 bg-reg-cyan/10 blur-2xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-8 bottom-8 h-20 w-28 -rotate-6 bg-reg-magenta/10 blur-2xl" />

      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal kind="clip" as="div">
          <h2 className="text-h1 font-semibold text-white-tech">
            {before}
            {title.includes(serifWord) ? (
              <>
                <em className="font-serif font-normal italic text-ink">{serifWord}</em>
                {after}
              </>
            ) : null}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lead mx-auto mt-6 max-w-xl text-steel">{text}</p>
          {items && items.length > 0 && (
            <ul className="mx-auto mt-6 max-w-xl space-y-2 text-left text-steel">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-relaxed">
                  <span aria-hidden="true" className="mt-2.5 inline-block size-1.5 flex-none bg-ink" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {note && <p className="mx-auto mt-6 max-w-xl text-steel">{note}</p>}
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <InkButton href="/orcamento" size="lg" data-testid="cta-final-orcamento">
              {quoteLabel}
            </InkButton>
            <InkButton
              href={whatsappUrl()}
              external={hasWhatsApp()}
              variant="outline"
              size="lg"
              data-testid="cta-final-whatsapp"
            >
              {whatsappCtaLabel(whatsappLabel)}
            </InkButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
