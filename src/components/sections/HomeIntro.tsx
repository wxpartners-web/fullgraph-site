import { InkButton } from "@/components/ui/InkButton";
import { Reveal } from "@/components/motion/Reveal";
import { homeIntro } from "@/data/home";
import { hasWhatsApp, whatsappUrl, whatsappCtaLabel } from "@/lib/whatsapp";

/**
 * Abertura em texto logo após o hero — apresenta a gráfica em poucas
 * linhas e leva direto ao WhatsApp. Server component: o texto sai no
 * HTML inicial (primeiras ~100 palavras visíveis da página).
 */
export function HomeIntro() {
  const [lead, body] = homeIntro.paragraphs;

  return (
    <section
      aria-label="Sobre a gráfica"
      className="relative border-t border-white-tech/10 bg-carbon-2 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
        <p className="text-lead text-white-tech">{lead}</p>
        <div>
          <p className="leading-relaxed text-steel">{body}</p>
          <Reveal delay={0.08} className="mt-8">
            <InkButton
              href={whatsappUrl()}
              external={hasWhatsApp()}
              size="lg"
              withArrow
              data-testid="intro-whatsapp"
            >
              {whatsappCtaLabel(homeIntro.cta)}
            </InkButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
