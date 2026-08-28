"use client";

import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { useRef, useState } from "react";
import { duration, easeOutExpo } from "@/lib/motion-tokens";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "arquivo",
    title: "Ideia e arquivo",
    text: "Tudo começa num PDF fechado: sangria de 3 mm, fontes incorporadas, imagens em 300 dpi. Nossa pré-impressão confere cada página.",
    spec: "arquivo.pdf · 300 dpi",
  },
  {
    id: "cores",
    title: "Separação de cores",
    text: "A arte se divide em quatro chapas — cyan, magenta, amarelo e preto. É o desenho invisível de toda impressão offset.",
    spec: "C · M · Y · K",
  },
  {
    id: "impressao",
    title: "Impressão",
    text: "Papel e tinta se encontram na prensa. Cor calibrada, registro alinhado, folha após folha, na velocidade da tiragem.",
    spec: "offset · até 20.000/h",
  },
  {
    id: "acabamento",
    title: "Corte, dobra e encadernação",
    text: "A guilhotina define o formato final. Vinco, dobra, lombada ou faca especial — o acabamento é o que se sente na mão.",
    spec: "refile · vinco · lombada",
  },
  {
    id: "produto",
    title: "Produto final",
    text: "A ideia agora tem peso, textura e presença: um livro, uma caixa, uma pilha de impressos prontos para trabalhar pela sua marca.",
    spec: "conferido · embalado",
  },
  {
    id: "entrega",
    title: "Entrega em todo o Brasil",
    text: "De Brasília para qualquer estado. Logística combinada no orçamento, do lote único às reposições recorrentes.",
    spec: "BSB → BR",
  },
] as const;

/** A folha central em cada etapa da produção */
function SheetStage({ step }: { step: number }) {
  const s = steps[step];
  return (
    <div className="relative flex h-full w-full items-center justify-center" aria-hidden="true">
      <motion.div
        className="relative h-72 w-56 md:h-80 md:w-64"
        animate={{
          rotate: step === 3 ? -4 : step === 5 ? 3 : 0,
          scale: step >= 4 ? 0.94 : 1,
        }}
        transition={{ duration: duration.component, ease: easeOutExpo }}
      >
        {/* chapas CMYK desregistradas (etapa 2) */}
        <AnimatePresence>
          {step === 1 && (
            <>
              {[
                { c: "var(--reg-cyan)", x: -14, y: -10 },
                { c: "var(--reg-magenta)", x: 14, y: -4 },
                { c: "#ffd400", x: -8, y: 12 },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-sm mix-blend-multiply"
                  style={{ background: p.c, opacity: 0.5 }}
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={{ x: p.x, y: p.y, opacity: 0.45 }}
                  exit={{ x: 0, y: 0, opacity: 0 }}
                  transition={{ duration: duration.component, ease: easeOutExpo }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* corpo da folha */}
        <motion.div
          className="absolute inset-0 rounded-sm bg-white-tech shadow-2xl shadow-black/25"
          animate={{
            backgroundColor:
              step === 4 ? "var(--ink-orange)" : step === 5 ? "var(--carbon-2)" : "var(--white-tech)",
          }}
          transition={{ duration: duration.component, ease: easeOutExpo }}
        >
          {/* conteúdo por etapa */}
          <AnimatePresence mode="wait">
            <motion.div
              key={s.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24, ease: easeOutExpo }}
            >
              {step === 0 && (
                <div className="absolute inset-4 rounded-sm border border-dashed border-carbon/30 p-4">
                  <div className="h-2 w-3/5 bg-carbon/20" />
                  <div className="mt-2 h-2 w-4/5 bg-carbon/10" />
                  <div className="mt-2 h-2 w-2/5 bg-carbon/10" />
                  <p className="text-spec absolute bottom-3 left-4 text-carbon/50">A4 · sangria 3 mm</p>
                </div>
              )}
              {step === 1 && (
                <div className="absolute inset-4 p-4">
                  <div className="h-2.5 w-3/5 bg-carbon/60" />
                  <div className="mt-2 h-2.5 w-4/5 bg-carbon/30" />
                </div>
              )}
              {step === 2 && (
                <div className="absolute inset-0 overflow-hidden rounded-sm">
                  {/* passada de tinta */}
                  <motion.div
                    className="absolute inset-y-0 w-[140%] bg-ink"
                    initial={{ x: "-160%" }}
                    animate={{ x: "-30%" }}
                    transition={{ duration: 0.7, ease: easeOutExpo }}
                  />
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage: "radial-gradient(circle, var(--carbon) 1px, transparent 1.2px)",
                      backgroundSize: "8px 8px",
                    }}
                  />
                </div>
              )}
              {step === 3 && (
                <div className="absolute inset-0">
                  <div className="absolute inset-x-0 top-1/2 h-px bg-carbon/40" />
                  <div className="crop-marks absolute inset-2 text-carbon/60" />
                  <div className="absolute left-6 top-6 h-2 w-2/5 bg-ink/80" />
                  <div className="absolute left-6 top-11 h-2 w-1/4 bg-carbon/20" />
                </div>
              )}
              {step === 4 && (
                <div className="absolute inset-0 p-6">
                  <div className="absolute inset-y-0 left-0 w-2 bg-black/25" />
                  <div className="mt-4 h-3 w-3/5 bg-carbon/70" />
                  <div className="mt-2 h-3 w-2/5 bg-carbon/40" />
                  <p className="text-spec absolute bottom-5 left-6 text-carbon/80">capa · laminação fosca</p>
                </div>
              )}
              {step === 5 && (
                <div className="absolute inset-0 p-5">
                  <div className="absolute inset-x-5 top-5 h-14 rounded-sm bg-white-tech p-2">
                    <p className="text-spec text-carbon/70">Fullgraph → seu endereço</p>
                    <div className="mt-1.5 h-1.5 w-3/4 bg-carbon/20" />
                  </div>
                  <div className="absolute bottom-8 left-5 right-5 h-px border-t border-dashed border-white-tech/40" />
                  <div className="absolute bottom-5 left-5 h-2 w-2 rounded-full bg-ink" />
                  <div className="absolute bottom-5 right-5 h-2 w-2 rounded-full bg-white-tech/70" />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}

/**
 * Narrativa de produção — scroll pino (sticky), sem sequestro:
 * a página continua rolando normalmente; a folha central se
 * transforma em 6 etapas. Reduced-motion: lista estática.
 */
export function NarrativeScroll() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setStep(Math.min(steps.length - 1, Math.floor(v * steps.length)));
  });

  if (reduced) {
    return (
      <section className="surface-paper grain on-paper py-24" aria-label="Como produzimos">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="text-spec mb-4 text-carbon/60">02 — Como produzimos</p>
          <h2 className="text-h2 font-semibold">
            Da ideia à <em className="font-serif italic text-ink-2">matéria</em>
          </h2>
          <ol className="mt-12 space-y-10">
            {steps.map((s, i) => (
              <li key={s.id} className="border-l-2 border-carbon/15 pl-6">
                <p className="text-spec text-carbon/60">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-h3 mt-1 font-semibold">{s.title}</h3>
                <p className="mt-2 max-w-xl text-carbon/75">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  const current = steps[step];

  return (
    <section
      ref={ref}
      className="surface-paper grain on-paper relative"
      style={{ height: `${steps.length * 70}vh` }}
      aria-label="Como produzimos"
      data-testid="narrative"
    >
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 md:grid-cols-2 md:px-8">
          {/* Texto da etapa */}
          <div>
            <p className="text-spec mb-4 flex items-center gap-3 text-carbon/60">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-ink" />
              02 — Como produzimos
            </p>
            <h2 className="text-h2 font-semibold">
              Da ideia à <em className="font-serif italic text-ink-2">matéria</em>
            </h2>

            <div className="mt-10 min-h-44" aria-live="polite">
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
                  <p className="text-spec mt-4 text-ink-paper">{current.spec}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* régua de progresso */}
            <div className="mt-8 flex items-center gap-2" aria-hidden="true">
              {steps.map((s, i) => (
                <span
                  key={s.id}
                  className={cn(
                    "h-1 flex-1 max-w-12 transition-colors duration-[var(--dur-comp)]",
                    i <= step ? "bg-ink" : "bg-carbon/15"
                  )}
                />
              ))}
            </div>
          </div>

          {/* A folha em transformação */}
          <div className="relative hidden h-[26rem] md:block">
            <SheetStage step={step} />
          </div>
        </div>
      </div>
    </section>
  );
}
