import { pageMetadata } from "@/lib/seo";
import { site, trueHighlights } from "@/data/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = pageMetadata({
  title: "Sobre a Fullgraph",
  description:
    "Gráfica em Brasília-DF com atendimento em todo o Brasil: impressão de livros, embalagens, catálogos e grandes tiragens com orçamento personalizado.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <>
      <section className="grain relative bg-carbon pb-20 pt-40 md:pb-28 md:pt-48">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-spec mb-6 flex items-center gap-3 text-steel">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-ink" />
              Sobre
            </p>
          </Reveal>
          <Reveal kind="clip">
            <h1 className="text-h1 max-w-4xl font-semibold text-white-tech text-balance">
              Muito mais que <em className="font-serif font-normal italic text-ink">impressão</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lead mt-6 max-w-2xl text-steel">
              A Fullgraph é uma gráfica instalada no Núcleo Bandeirante, em
              Brasília-DF, que atende clientes em todo o Brasil — de autores
              independentes a redes de alimentação e empresas com grandes
              tiragens.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="surface-paper grain on-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Como trabalhamos"
            title="Consultivo do arquivo ao acabamento"
            serifWord="acabamento"
            onPaper
            description="Cada orçamento é montado sob medida: ouvimos o projeto, sugerimos papel, formato e acabamento, e acompanhamos a produção até a entrega."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
            {trueHighlights.map((h, i) => (
              <RevealItem key={h.title} className="border-t-2 border-carbon/15 pt-5">
                <p className="text-spec text-carbon/60">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 font-semibold">{h.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-carbon/70">{h.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="grain relative bg-carbon py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Onde estamos" title="Base em Brasília, alcance nacional" />
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex gap-3 border-t border-white-tech/10 pt-5">
              <MapPin aria-hidden="true" className="mt-0.5 size-5 flex-none text-ink" />
              <div>
                <h2 className="text-sm font-semibold text-white-tech">Endereço</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-steel">{site.address.full}</p>
              </div>
            </div>
            <div className="flex gap-3 border-t border-white-tech/10 pt-5">
              <Phone aria-hidden="true" className="mt-0.5 size-5 flex-none text-ink" />
              <div>
                <h2 className="text-sm font-semibold text-white-tech">Telefone</h2>
                <a href={`tel:${site.phone.e164}`} className="mt-1.5 block text-sm text-steel hover:text-white-tech">
                  {site.phone.display}
                </a>
              </div>
            </div>
            <div className="flex gap-3 border-t border-white-tech/10 pt-5">
              <Mail aria-hidden="true" className="mt-0.5 size-5 flex-none text-ink" />
              <div>
                <h2 className="text-sm font-semibold text-white-tech">E-mail</h2>
                <a href={`mailto:${site.email}`} className="mt-1.5 block break-all text-sm text-steel hover:text-white-tech">
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
