"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useIsSmallScreen, useIsTouch, usePrefersReducedMotion, useWebGLSupport } from "@/lib/hooks";
import { HeroPoster } from "./HeroPoster";
import { cn } from "@/lib/utils";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => null,
});

/**
 * Decide a experiência do hero:
 * - touch/mobile e reduced-motion: poster CSS (conversão primeiro);
 * - sem WebGL: poster CSS;
 * - desktop com WebGL: o poster fica por baixo e a cena 3D assume
 *   com fade quando o primeiro frame estiver pronto — nunca há
 *   vazio nem bloqueio da primeira pintura.
 */
export function HeroVisual() {
  const isTouch = useIsTouch();
  const isSmall = useIsSmallScreen();
  const reduced = usePrefersReducedMotion();
  const webgl = useWebGLSupport();
  const [ready, setReady] = useState(false);
  const [sceneLive, setSceneLive] = useState(false);

  // Adia o carregamento da cena para depois da primeira pintura
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

  const use3d = ready && !isTouch && !isSmall && !reduced && webgl === true;

  return (
    <div className="absolute inset-0" data-testid="hero-visual">
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-700",
          sceneLive && use3d ? "opacity-0" : "opacity-100"
        )}
      >
        <HeroPoster animated={!reduced} />
      </div>
      {use3d && <HeroScene parallax onReady={() => setSceneLive(true)} />}
    </div>
  );
}
