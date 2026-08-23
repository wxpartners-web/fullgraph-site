import { pageMetadata } from "@/lib/seo";
import { QuoteWizard } from "@/components/forms/QuoteWizard";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = pageMetadata({
  title: "Orçamento personalizado",
  description:
    "Monte seu pedido em etapas rápidas — produto, formato, papel, acabamento e prazo — e envie direto para a equipe da Fullgraph.",
  path: "/orcamento",
});

export default function OrcamentoPage() {
  return (
    <div className="surface-paper grain on-paper min-h-svh">
      <section className="pb-24 pt-36 md:pt-44">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-spec mb-5 flex items-center gap-3 text-carbon/60">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-ink" />
              Orçamento
            </p>
          </Reveal>
          <Reveal kind="clip">
            <h1 className="text-h1 max-w-3xl font-semibold text-balance">
              Monte seu pedido, <em className="font-serif font-normal italic text-ink">sem mistério</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lead mt-5 max-w-2xl text-carbon/75">
              Uma decisão por etapa. No final, o resumo vai pronto para o nosso
              WhatsApp — e a resposta volta com um orçamento sob medida.
            </p>
          </Reveal>

          <div className="mt-14">
            <QuoteWizard />
          </div>
        </div>
      </section>
    </div>
  );
}
