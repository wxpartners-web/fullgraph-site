import type { Band } from "./scrub";

/**
 * Manifest da mídia do hero cinematográfico.
 *
 * ESTADO ATUAL: dev-placeholder — um WebM técnico determinístico gerado
 * localmente (scripts/make-hero-placeholder.mjs) só para validar o motor
 * de scrub. NÃO representa o asset aprovado. O vídeo definitivo
 * (Seedance 2.0 → MP4 H.264 GOP 8, ≤8 MB) depende dos Gates 2–6 e
 * substituirá este arquivo trocando apenas os campos abaixo.
 */
export interface HeroMediaManifest {
  /** null = sem asset local: o motor não arma e o poster segura o hero */
  videoSrc: string | null;
  /** fallback quando Content-Length faltar no fetch streamed */
  videoBytes: number;
  /** fallback até o loadedmetadata informar a duração real */
  videoDurationSeconds: number;
  kind: "dev-placeholder" | "final";
}

export const heroMedia: HeroMediaManifest = {
  videoSrc: "/media/hero/hero-scrub-placeholder.webm",
  videoBytes: 168_648,
  videoDurationSeconds: 6,
  kind: "dev-placeholder",
};

/**
 * Bandas narrativas do hero (ranges em progresso de scroll 0..1).
 * Valores são pontos de partida — o flick test da Fase 2 calibra.
 * Banda 0 abre assentada (H1 + CTA, SSR); banda 2 segura até o fim.
 */
export const HERO_BANDS: readonly Band[] = [
  { a: 0, b: 0.34 },
  { a: 0.4, b: 0.62 },
  { a: 0.68, b: 1 },
] as const;

/** Altura da seção pinada em desktop (svh). ~300svh para um shot de ~6s */
export const HERO_SECTION_SVH = 300;
