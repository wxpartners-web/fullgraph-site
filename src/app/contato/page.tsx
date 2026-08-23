import { pageMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";
import { InkButton } from "@/components/ui/InkButton";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { hasWhatsApp, whatsappUrl, whatsappCtaLabel } from "@/lib/whatsapp";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = pageMetadata({
  title: "Contato",
  description:
    "Fale com a Fullgraph: telefone (61) 3022-0027, e-mail e endereço no Núcleo Bandeirante, Brasília-DF. Atendimento em todo o Brasil.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <section className="grain relative bg-carbon pb-20 pt-40 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-spec mb-6 flex items-center gap-3 text-steel">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-ink" />
              Contato
            </p>
          </Reveal>
          <Reveal kind="clip">
            <h1 className="text-h1 max-w-4xl font-semibold text-white-tech">
              Vamos <em className="font-serif font-normal italic text-ink">conversar</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lead mt-6 max-w-2xl text-steel">
              O caminho mais rápido para um orçamento é o formulário guiado — mas
              todos os canais abaixo chegam na mesma bancada.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-9 flex flex-wrap gap-4">
              <InkButton href="/orcamento" size="lg">
                Montar orçamento guiado
              </InkButton>
              <InkButton
                href={hasWhatsApp() ? whatsappUrl() : `tel:${site.phone.e164}`}
                external={hasWhatsApp()}
                variant="outline"
                size="lg"
                data-testid="contato-whatsapp"
              >
                {whatsappCtaLabel()}
              </InkButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="surface-paper grain on-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="border-t-2 border-carbon/15 pt-5">
              <p className="text-spec flex items-center gap-2 text-carbon/60">
                <Phone aria-hidden="true" className="size-4" /> Telefone
              </p>
              <a href={`tel:${site.phone.e164}`} className="mt-3 block text-xl font-semibold hover:text-ink">
                {site.phone.display}
              </a>
            </div>
            <div className="border-t-2 border-carbon/15 pt-5">
              <p className="text-spec flex items-center gap-2 text-carbon/60">
                <Mail aria-hidden="true" className="size-4" /> E-mail
              </p>
              <a href={`mailto:${site.email}`} className="mt-3 block break-all text-lg font-semibold hover:text-ink">
                {site.email}
              </a>
            </div>
            <div className="border-t-2 border-carbon/15 pt-5">
              <p className="text-spec flex items-center gap-2 text-carbon/60">
                <MapPin aria-hidden="true" className="size-4" /> Endereço
              </p>
              <p className="mt-3 text-sm leading-relaxed text-carbon/85">{site.address.full}</p>
            </div>
            <div className="border-t-2 border-carbon/15 pt-5">
              <p className="text-spec flex items-center gap-2 text-carbon/60">
                <Clock aria-hidden="true" className="size-4" /> Atendimento
              </p>
              <p className="mt-3 text-sm leading-relaxed text-carbon/85">
                Comercial, em horário de expediente de Brasília. Envie sua
                mensagem a qualquer hora — respondemos na sequência.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaFinal
        title="Prefere ir direto ao ponto?"
        text="O formulário de orçamento leva menos de dois minutos e já chega completo para a nossa equipe."
      />
    </>
  );
}
