"use client";

import { useState, useSyncExternalStore } from "react";

// Um subscribe estável por query (cache module-level): se a identidade da
// função mudar a cada render, o useSyncExternalStore refaz a inscrição no
// matchMedia em todo render de todo componente que usa o hook
const mediaSubscribers = new Map<string, (callback: () => void) => () => void>();

function subscribeToMedia(query: string) {
  let subscribe = mediaSubscribers.get(query);
  if (!subscribe) {
    subscribe = (callback: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    };
    mediaSubscribers.set(query, subscribe);
  }
  return subscribe;
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

interface NetworkInformationLike {
  saveData?: boolean;
  addEventListener?: (type: "change", listener: () => void) => void;
  removeEventListener?: (type: "change", listener: () => void) => void;
}

function getConnection(): NetworkInformationLike | undefined {
  return (navigator as Navigator & { connection?: NetworkInformationLike }).connection;
}

function subscribeToSaveData(callback: () => void): () => void {
  const connection = getConnection();
  connection?.addEventListener?.("change", callback);
  // prefers-reduced-data ainda não é universal; onde não existir, a MQL
  // simplesmente nunca casa
  const mql = window.matchMedia("(prefers-reduced-data: reduce)");
  mql.addEventListener("change", callback);
  return () => {
    connection?.removeEventListener?.("change", callback);
    mql.removeEventListener("change", callback);
  };
}

/** Data-saver ativo? Gate de mídia pesada (o hero novo nunca baixa vídeo com isso ligado) */
export function useSaveData(): boolean {
  return useSyncExternalStore(
    subscribeToSaveData,
    () =>
      Boolean(getConnection()?.saveData) ||
      window.matchMedia("(prefers-reduced-data: reduce)").matches,
    () => false
  );
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
