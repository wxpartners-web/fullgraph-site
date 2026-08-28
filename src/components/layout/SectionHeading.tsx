import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

interface SectionHeadingProps {
  /** Índice estilo especificação gráfica: "01", "02"… */
  index?: string;
  eyebrow: string;
  title: string;
  /** Palavra(s) em serifa itálica dentro do título, ex.: "matéria" */
  serifWord?: string;
  description?: string;
  className?: string;
  onPaper?: boolean;
}

/**
 * Cabeçalho de seção do sistema: número técnico em mono + fio
 * pontilhado + título com contraste sans/serif.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  serifWord,
  description,
  className,
  onPaper,
}: SectionHeadingProps) {
  const parts = serifWord ? title.split(serifWord) : [title];
  return (
    <div className={cn("max-w-4xl", className)}>
      <div className="flex items-center gap-4 mb-5">
        {index && (
          <span
            aria-hidden="true"
            className={cn("text-spec", onPaper ? "text-carbon/60" : "text-steel-2")}
          >
            {index}
          </span>
        )}
        <span className={cn("rule-dotted flex-none w-10", onPaper ? "opacity-60" : "opacity-40")} />
        <p className={cn("text-spec", onPaper ? "text-carbon/70" : "text-steel")}>{eyebrow}</p>
      </div>
      <Reveal kind="clip" as="div">
        <h2 className="text-h2 font-semibold text-balance">
          {parts[0]}
          {serifWord && (
            <>
              <em className={cn("font-serif font-normal italic", onPaper ? "text-ink-2" : "text-ink")}>
                {serifWord}
              </em>
              {parts[1]}
            </>
          )}
        </h2>
      </Reveal>
      {description && (
        <p
          className={cn(
            "text-lead mt-5 max-w-2xl",
            onPaper ? "text-carbon/75" : "text-steel"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
