"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { useRef, useState } from "react";
import { easeOutExpo } from "@/lib/motion-tokens";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "arquivo",
    title: "Ideia e arquivo",
    text: "Tudo começa num PDF fechado: sangria de 3 mm, fontes incorporadas, imagens em 300 dpi. A pré-impressão confere cada página e a prova mostra a cor antes de rodar.",
    spec: "arquivo.pdf · prova de cor",
    image: {
      src: "/images/process/01-arquivo-e-prova.webp",
      alt: "Prova de impressão de uma capa de livro com marcas de corte e barra de controle de cor, conta-fios e leque de cores sobre a mesa",
    },
  },
  {
    id: "cores",
    title: "Separação de cores",
    text: "A arte se divide em quatro chapas — ciano, magenta, amarelo e preto. É o desenho invisível de toda impressão offset.",
    spec: "C · M · Y · K",
    image: {
      src: "/images/process/02-separacao-de-cores.webp",
      alt: "Quatro chapas de alumínio de impressão offset lado a lado, cada uma com a mesma página separada em ciano, magenta, amarelo e preto",
    },
  },
  {
    id: "impressao",
    title: "Impressão",
    text: "Papel e tinta se encontram na prensa. Cor calibrada, registro alinhado, folha após folha, na velocidade da tiragem.",
    spec: "offset · registro · cor calibrada",
    image: {
      src: "/images/process/03-impressao.webp",
      alt: "Folhas recém-impressas empilhadas na saída de uma impressora offset, com várias páginas de catálogo impostas e barras de cor",
    },
  },
  {
    id: "acabamento",
    title: "Corte, dobra e encadernação",
    text: "A guilhotina define o formato final. Vinco, dobra, lombada ou faca especial — o acabamento é o que se sente na mão.",
    spec: "refile · vinco · lombada",
    image: {
      src: "/images/process/04-corte-e-acabamento.webp",
      alt: "Pilha de folhas recém-refiladas com bordas limpas, dobradeira de osso, folder vincado e cadernos de livro dobrados",
    },
  },
  {
    id: "produto",
    title: "Produto final",
    text: "A ideia agora tem peso, textura e presença: livros, catálogos, folders e caixas conferidos antes de seguir para a embalagem.",
    spec: "conferido · aprovado",
    image: {
      src: "/images/process/05-produto-final.webp",
      alt: "Livros, catálogos, folders e caixas montadas dispostos sobre uma mesa branca para conferência final",
    },
  },
  {
    id: "entrega",
    title: "Entrega em todo o Brasil",
    text: "De Brasília para qualquer estado. Logística combinada no orçamento, do lote único às reposições recorrentes.",
    spec: "BSB → BR",
    image: {
      src: "/images/process/06-expedicao.webp",
      alt: "Caixas de papelão com etiquetas de envio empilhadas e cintadas sobre palete, uma aberta mostrando impressos embalados",
    },
  },
] as const;

const PHOTO_NOTE = "Imagens ilustrativas do processo gráfico.";

/** Pilha de fotos das etapas — todas montadas, só a atual visível (sem flash de carregamento) */
function StagePhotos({ step }: { step: number }) {
  return (
    <figure className="relative">
      <div className="crop-marks relative aspect-[4/3] w-full overflow-hidden bg-carbon/10 text-carbon/40 shadow-2xl shadow-black/20">
        {steps.map((s, i) => (
          <Image
            key={s.id}
            src={s.image.src}
            alt={i === step ? s.image.alt : ""}
            aria-hidden={i === step ? undefined : true}
            fill
            sizes="(min-width: 1280px) 680px, 55vw"
            className={cn(
              "object-cover transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)]",
              i === step ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
            )}
          />
        ))}
        <span className="text-spec absolute bottom-3 left-3 bg-carbon/75 px-2 py-1 text-white-tech backdrop-blur-sm">
          {String(step + 1).padStart(2, "0")} · {steps[step].spec}
        </span>
      </div>
      <figcaption className="text-spec mt-3 text-carbon/50">{PHOTO_NOTE}</figcaption>
    </figure>
  );
}

/** Versão lista — serve reduced-motion e telas <md: cada etapa com sua foto */
function NarrativeStatic() {
  return (
    <section className="surface-paper grain on-paper py-24" aria-label="Como produzimos" data-testid="narrative-static">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-spec mb-4 text-carbon/60">04 — Como produzimos</p>
        <h2 className="text-h2 font-semibold">
          Da ideia à <em className="font-serif italic text-ink-2">matéria</em>
        </h2>
        <ol className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.id} data-testid={`narrative-step-${s.id}`}>
              <div className="relative aspect-[3/2] overflow-hidden bg-carbon/10">
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="text-spec mt-4 text-carbon/60">
                {String(i + 1).padStart(2, "0")} · {s.spec}
              </p>
              <h3 className="text-h3 mt-1 font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-carbon/75">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="text-spec mt-10 text-carbon/50">{PHOTO_NOTE}</p>
      </div>
    </section>
  );
}

/**
 * Narrativa de produção — scroll pino (sticky), sem sequestro:
 * a página continua rolando normalmente; a foto de cada etapa
 * substitui a anterior. Reduced-motion e mobile: lista com fotos.
 */
export function NarrativeScroll() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setStep(Math.min(steps.length - 1, Math.floor(v * steps.length)));
  });

  if (reduced) return <NarrativeStatic />;

  const current = steps[step];

  return (
    <>
      <div className="md:hidden">
        <NarrativeStatic />
      </div>
      <section
        ref={ref}
        className="surface-paper grain on-paper relative hidden md:block"
        style={{ height: `${steps.length * 55}svh` }}
        aria-label="Como produzimos"
        data-testid="narrative"
        data-step={current.id}
      >
        <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-center gap-12 px-5 md:px-8 lg:gap-16">
            {/* Texto da etapa */}
            <div>
              <p className="text-spec mb-4 flex items-center gap-3 text-carbon/60">
                <span aria-hidden="true" className="inline-block h-px w-8 bg-ink" />
                04 — Como produzimos
              </p>
              <h2 className="text-h2 font-semibold">
                Da ideia à <em className="font-serif italic text-ink-2">matéria</em>
              </h2>

              <div className="mt-8 min-h-48" aria-live="polite">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: easeOutExpo }}
                  >
                    <p className="text-spec text-carbon/60">
                      {String(step + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                    </p>
                    <h3 className="text-h3 mt-2 font-semibold">{current.title}</h3>
                    <p className="mt-3 max-w-md leading-relaxed text-carbon/75">{current.text}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* régua de etapas */}
              <ol className="mt-6 grid max-w-md grid-cols-6 gap-2" aria-hidden="true">
                {steps.map((s, i) => (
                  <li key={s.id}>
                    <span
                      className={cn(
                        "block h-1 transition-colors duration-[var(--dur-comp)]",
                        i <= step ? "bg-ink" : "bg-carbon/15"
                      )}
                    />
                    <span
                      className={cn(
                        "text-spec mt-2 block transition-colors duration-[var(--dur-comp)]",
                        i === step ? "text-carbon" : "text-carbon/40"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Foto da etapa */}
            <StagePhotos step={step} />
          </div>
        </div>
      </section>
    </>
  );
}
