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
  const [ready, setReady] = useState(false);
  const [multiTouch, setMultiTouch] = useState(false);

  useEffect(() => {
    setMultiTouch(navigator.maxTouchPoints > 1);
  }, []);

  // Adia a montagem do vídeo para depois da primeira pintura
  // (mesmo padrão do HeroVisual clássico)
  useEffect(() => {
    const hasIdle = typeof window.requestIdleCallback === "function";
    const id = hasIdle
      ? window.requestIdleCallback(() => setReady(true), { timeout: 1200 })
      : window.setTimeout(() => setReady(true), 350);
    return () => {
      if (hasIdle) window.cancelIdleCallback(id as number);
      else window.clearTimeout(id as number);
    };
  }, []);

  const eligible =
    ready && !isTouch && !isSmall && !reduced && !saveData && !multiTouch;

  if (!eligible) return null;
  return <HeroScrubVideo />;
}
