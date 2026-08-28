"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {
  useIsSmallScreen,
  useIsTouch,
  usePrefersReducedMotion,
  useSaveData,
} from "@/lib/hooks";

const HeroScrubVideo = dynamic(
  () => import("./HeroScrubVideo").then((m) => m.HeroScrubVideo),
  { ssr: false, loading: () => null }
);

/**
 * Fronteira client do hero cinematográfico: decide, com gates VIVOS
 * (os hooks re-avaliam em rotação/flip de preferência), se o motor de
 * scrub monta. Elegível = desktop ≥1024px, pointer fine, sem
 * reduced-motion, sem data-saver, sem multi-touch (iPad com teclado
 * finge desktop). Fora disso nada é baixado: o poster SSR segura o hero.
 */
export function HeroScrubController() {
  const isTouch = useIsTouch();
  const isSmall = useIsSmallScreen();
  const reduced = usePrefersReducedMotion();
  const saveData = useSaveData();
  // armed = pós-idle E sem multi-touch (checado no mesmo callback:
  // maxTouchPoints é estável na sessão)
  const [armed, setArmed] = useState(false);

  // Adia a montagem do vídeo para depois da primeira pintura
  // (mesmo padrão do HeroVisual clássico)
  useEffect(() => {
    const arm = () => setArmed(navigator.maxTouchPoints <= 1);
    const hasIdle = typeof window.requestIdleCallback === "function";
    const id = hasIdle
      ? window.requestIdleCallback(arm, { timeout: 1200 })
      : window.setTimeout(arm, 350);
    return () => {
      if (hasIdle) window.cancelIdleCallback(id as number);
      else window.clearTimeout(id as number);
    };
  }, []);

  const eligible = armed && !isTouch && !isSmall && !reduced && !saveData;

  if (!eligible) return null;
  return <HeroScrubVideo />;
}
