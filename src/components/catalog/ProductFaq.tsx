import { ChevronRight } from "lucide-react";
import type { FaqItem } from "@/types";

const DEFAULT_HEADING = "Perguntas frequentes";
const SERIF_WORD = "frequentes";

/**
 * FAQ das Money Pages — <details> nativo (acessível sem JS). O JSON-LD
 * FAQPage sai na page.tsx a partir dos mesmos dados.
 */
export function ProductFaq({
  faq,
  heading = DEFAULT_HEADING,
}: {
  faq: readonly FaqItem[];
  /** H2 aprovado na copy; "frequentes" mantém a serifa itálica */
  heading?: string;
}) {
  const [before, after] = heading.includes(SERIF_WORD)
    ? heading.split(SERIF_WORD)
    : [heading, null];
  return (
    <section className="grain relative bg-carbon py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <h2 className="text-h2 font-semibold text-white-tech">
          {before}
          {after !== null && (
            <>
              <em className="font-serif font-normal italic text-ink">{SERIF_WORD}</em>
              {after}
            </>
          )}
        </h2>
        <div className="mt-10 divide-y divide-white-tech/10 border-y border-white-tech/10">
          {faq.map((item) => (
            <details key={item.question} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-white-tech marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="font-medium">{item.question}</span>
                <ChevronRight
                  aria-hidden="true"
                  className="size-4 flex-none text-steel-2 transition-transform duration-[var(--dur-micro)] group-open:rotate-90"
                />
              </summary>
              <p className="pb-5 pr-8 text-sm leading-relaxed text-steel">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
