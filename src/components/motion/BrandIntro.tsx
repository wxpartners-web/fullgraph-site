"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { INTRO_SESSION_KEY, duration, easeInOutInk, easeOutExpo } from "@/lib/motion-tokens";

/**
 * Intro de marca (uma vez por sessão): sobre papel, o logotipo
 * converge de um desregistro cyan/magenta — como chapas de
 * impressão alinhando — e a "folha" sobe liberando o hero.
 * Pulada em prefers-reduced-motion e em navegações seguintes.
 */
export function BrandIntro() {
  const reduced = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (reduced) return;
    let hide: ReturnType<typeof setTimeout> | undefined;
    const raf = requestAnimationFrame(() => {
      try {
        if (sessionStorage.getItem(INTRO_SESSION_KEY)) return;
        // Intro somente em desktop (mobile prioriza conversão e LCP)
        if (!window.matchMedia("(min-width: 1024px) and (hover: hover)").matches) return;
        // Dispositivo lento: se a página já está visível há tempo
        // demais, uma intro atrasada só atrapalharia (LCP e UX)
        if (performance.now() > 900) return;
        sessionStorage.setItem(INTRO_SESSION_KEY, "1");
        setShow(true);
        hide = setTimeout(() => setShow(false), duration.intro * 1000 + 120);
      } catch {
        // sessionStorage indisponível: não bloquear o conteúdo
      }
    });
    return () => {
      cancelAnimationFrame(raf);
      if (hide) clearTimeout(hide);
    };
  }, [reduced]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden="true"
          className="surface-paper grain fixed inset-0 z-[90] flex items-center justify-center"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.42, ease: easeInOutInk }}
        >
          <motion.div
            initial={{
              filter:
                "drop-shadow(-7px 0 0 var(--reg-cyan)) drop-shadow(7px 0 0 var(--reg-magenta))",
              opacity: 0.9,
            }}
            animate={{
              filter:
                "drop-shadow(0px 0 0 var(--reg-cyan)) drop-shadow(0px 0 0 var(--reg-magenta))",
              opacity: 1,
            }}
            transition={{ duration: duration.intro, ease: easeOutExpo }}
          >
            <Image
              src="/brand/fullgraph-logo.png"
              alt=""
              width={296}
              height={112}
              priority
              className="h-16 w-auto md:h-24"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
