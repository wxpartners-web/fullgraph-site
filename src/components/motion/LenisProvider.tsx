"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import { useIsTouch, usePrefersReducedMotion } from "@/lib/hooks";

/**
 * Smooth scroll global (Lenis) — desabilitado em touch e em
 * prefers-reduced-motion, onde o scroll nativo é melhor.
 */
export function LenisProvider({ children }: { children: ReactNode }) {
  const isTouch = useIsTouch();
  const reduced = usePrefersReducedMotion();

  if (isTouch || reduced) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.12, wheelMultiplier: 1, touchMultiplier: 1.4 }}>
      {children}
    </ReactLenis>
  );
}
