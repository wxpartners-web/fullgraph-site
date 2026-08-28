"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_BANDS, heroMedia } from "@/lib/hero-media";
import {
  bandK,
  bandOpacity,
  clamp01,
  createScrubEngine,
  createSeekGate,
  FETCH_WATCHDOG_MS,
  VAR_DELTA_GATE,
  type SeekGate,
} from "@/lib/scrub";
import { cn } from "@/lib/utils";

/**
 * Motor do scroll-scrub. Só monta em desktop elegível (via
 * HeroScrubController). Regras do pipeline 10K honradas aqui:
 * fetch→Blob→objectURL (independência de HTTP Range), watchdog de 20s
 * re-armado por chunk, seek-gate coalescido, lerp frame-rate-
 * independent, rAF que dorme, IntersectionObserver desarmando fora da
 * viewport, escrita de DOM delta-gated e zero re-render React por frame.
 */

// Cache module-level do objectURL: template.tsx remonta a árvore a cada
// navegação — sem isso, voltar à home refaria o download inteiro
let cachedObjectUrl: string | null = null;
let inflight: Promise<string> | null = null;
let revokeRegistered = false;

async function loadHeroBlobUrl(src: string): Promise<string> {
  if (cachedObjectUrl) return cachedObjectUrl;
  if (!inflight) {
    inflight = (async () => {
      const ctrl = new AbortController();
      let watchdog = window.setTimeout(() => ctrl.abort(), FETCH_WATCHDOG_MS);
      try {
        const init: RequestInit & { priority?: "low" | "high" | "auto" } = {
          signal: ctrl.signal,
          priority: "low",
        };
        const res = await fetch(src, init);
        if (!res.ok || !res.body) throw new Error(`hero video HTTP ${res.status}`);
        const reader = res.body.getReader();
        const chunks: Uint8Array<ArrayBuffer>[] = [];
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          window.clearTimeout(watchdog);
          watchdog = window.setTimeout(() => ctrl.abort(), FETCH_WATCHDOG_MS);
          if (value) chunks.push(value as Uint8Array<ArrayBuffer>);
        }
        cachedObjectUrl = URL.createObjectURL(new Blob(chunks));
        if (!revokeRegistered) {
          revokeRegistered = true;
          window.addEventListener(
            "pagehide",
            () => {
              if (cachedObjectUrl) URL.revokeObjectURL(cachedObjectUrl);
              cachedObjectUrl = null;
            },
            { once: true }
          );
        }
        return cachedObjectUrl;
      } finally {
        window.clearTimeout(watchdog);
        inflight = null;
      }
    })();
  }
  return inflight;
}

export function HeroScrubVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const section = video.closest<HTMLElement>("[data-hero-cinema]");
    if (!section) return;

    let disposed = false;
    let gate: SeekGate | null = null;

    // Medidas cacheadas: nenhum layout read no caminho quente do rAF
    let sectionTop = 0;
    let scrollRange = 1;
    const measure = () => {
      const rect = section.getBoundingClientRect();
      sectionTop = rect.top + window.scrollY;
      scrollRange = Math.max(1, section.offsetHeight - window.innerHeight);
    };

    const bandEls = new Map<number, HTMLElement>();
    section.querySelectorAll<HTMLElement>("[data-band]").forEach((el) => {
      bandEls.set(Number(el.dataset.band), el);
    });
    const lastVars = new Map<string, number>();
    const lastVisible = new Map<HTMLElement, boolean>();

    const applyFrame = (shown: number) => {
      if (gate) {
        const duration =
          Number.isFinite(video.duration) && video.duration > 0
            ? video.duration
            : heroMedia.videoDurationSeconds;
        gate.requestSeek(shown * duration);
      }
      HERO_BANDS.forEach((band, i) => {
        const o = bandOpacity(shown, band, i === 0, i === HERO_BANDS.length - 1);
        const k = bandK(shown, band);
        const oKey = `--hb${i}-o`;
        const kKey = `--hb${i}-k`;
        if (Math.abs((lastVars.get(oKey) ?? -1) - o) >= VAR_DELTA_GATE) {
          lastVars.set(oKey, o);
          section.style.setProperty(oKey, o.toFixed(3));
        }
        if (Math.abs((lastVars.get(kKey) ?? -1) - k) >= VAR_DELTA_GATE) {
          lastVars.set(kKey, k);
          section.style.setProperty(kKey, k.toFixed(3));
        }
        // Bandas sobrepostas ficam visibility:hidden quando apagadas —
        // um CTA invisível jamais pode receber foco de teclado
        const el = bandEls.get(i);
        if (el && i > 0) {
          const visible = o > 0.01;
          if (lastVisible.get(el) !== visible) {
            lastVisible.set(el, visible);
            el.style.visibility = visible ? "visible" : "hidden";
          }
        }
      });
    };

    const engine = createScrubEngine(applyFrame);
    const progress = () =>
      clamp01((window.scrollY - sectionTop) / scrollRange);
    const onScroll = () => engine.setTarget(progress());
    const onResize = () => {
      measure();
      engine.setTarget(progress());
    };

    const io = new IntersectionObserver(([entry]) => {
      engine.setActive(entry?.isIntersecting ?? true);
    });
    io.observe(section);

    const onVideoError = () => setVideoFailed(true);
    video.addEventListener("error", onVideoError);

    const src = heroMedia.videoSrc;
    if (src) {
      loadHeroBlobUrl(src)
        .then((url) => {
          if (disposed) return;
          video.src = url;
          video.load();
          video.addEventListener(
            "canplay",
            () => {
              if (disposed) return;
              gate = createSeekGate(video);
              setVideoReady(true);
              engine.setTarget(progress());
            },
            { once: true }
          );
        })
        .catch(() => {
          if (!disposed) setVideoFailed(true);
        });
    }

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onScroll();

    return () => {
      disposed = true;
      engine.dispose();
      gate?.dispose();
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      video.removeEventListener("error", onVideoError);
      // Desarme limpo (ex.: flip de reduced-motion em sessão aberta):
      // bandas voltam ao estado estático padrão e as vars saem do DOM
      bandEls.forEach((el, i) => {
        if (i > 0) el.style.visibility = "";
      });
      HERO_BANDS.forEach((_, i) => {
        section.style.removeProperty(`--hb${i}-o`);
        section.style.removeProperty(`--hb${i}-k`);
      });
      // objectURL fica no cache module-level; revogado em pagehide
    };
  }, []);

  // Em erro/timeout o vídeo some e o poster SSR segura o hero;
  // as bandas continuam scroll-driven (o motor não depende do vídeo)
  return (
    <video
      ref={videoRef}
      muted
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
      data-testid="hero-scrub-video"
      className={cn(
        "absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 will-change-transform",
        videoReady && !videoFailed && "opacity-100",
        videoFailed && "hidden"
      )}
    />
  );
}
