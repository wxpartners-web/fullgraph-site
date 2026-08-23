"use client";

import { useState, useSyncExternalStore } from "react";

function subscribeToMedia(query: string) {
  return (callback: () => void) => {
    const mql = window.matchMedia(query);
    mql.addEventListener("change", callback);
    return () => mql.removeEventListener("change", callback);
  };
}

function useMediaQuery(query: string, serverDefault = false): boolean {
  return useSyncExternalStore(
    subscribeToMedia(query),
    () => window.matchMedia(query).matches,
    () => serverDefault
  );
}

/** Hook central de reduced-motion — todo motion do site passa por aqui */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

export function useIsTouch(): boolean {
  return useMediaQuery("(hover: none) and (pointer: coarse)");
}

/** Telas pequenas nunca carregam a cena WebGL (conversão primeiro) */
export function useIsSmallScreen(): boolean {
  return useMediaQuery("(max-width: 1023px)");
}

let webglCache: boolean | null = null;

function detectWebGL(): boolean {
  if (webglCache !== null) return webglCache;
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
    webglCache = Boolean(gl);
  } catch {
    webglCache = false;
  }
  return webglCache;
}

/** WebGL disponível? `null` durante SSR, boolean no cliente. */
export function useWebGLSupport(): boolean | null {
  const [supported] = useState<boolean | null>(() =>
    typeof window === "undefined" ? null : detectWebGL()
  );
  return supported;
}
