"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import { useIsTouch, usePrefersReducedMotion } from "@/lib/hooks";

/**
 * Smooth scroll global (Lenis) — desabilitado em touch e em
 * prefers-reduced-motion, onde o scroll nativo é melhor.
 *
 * A árvore é SEMPRE a mesma: trocar o tipo do wrapper (fragment ↔
 * ReactLenis) depois da hidratação remontava a página inteira em
 * touch/reduced-motion. A desativação acontece por options —
 * smoothWheel:false + syncTouch:false deixam wheel e touch 100%
 * nativos (o lenis-react recria só a instância interna quando as
 * options mudam, nunca os filhos).
 */
export function LenisProvider({ children }: { children: ReactNode }) {
  const isTouch = useIsTouch();
  const reduced = usePrefersReducedMotion();
  const smooth = !isTouch && !reduced;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
        smoothWheel: smooth,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
