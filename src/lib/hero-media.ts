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
 * Banda 0 abre assentada (H1 + CTA, SSR); banda 2 segura até o fim.
 *
 * CALIBRADO PELO FLICK TEST (Gate 2). Os ranges são ADJACENTES de
 * propósito — `b` de uma banda é o `a` da seguinte. O mapa anterior
 * deixava vãos de 0,06 de progresso entre as bandas, e a telemetria
 * mostrou o hero literalmente sem texto por ~200 ms duas vezes por
 * passagem (lei 11 da skill 10K: o leitor nunca pode ver o texto
 * sumir entre dois flicks). Adjacentes, a troca vira um handoff
 * instantâneo: uma banda chega a 0 exatamente onde a próxima começa
 * a subir, e nunca há duas frases legíveis ao mesmo tempo — bandas
 * 1 e 2 ocupam a mesma faixa vertical, então sobreposição seria
 * texto impresso em cima de texto.
 *
 * Plateaus resultantes a 1440×900 (range = 2700 px): 102vh / 84vh /
 * 90vh — dentro da faixa 80–130vh da skill, ≥ 6 flicks de 120 px por
 * banda.
 */
export const HERO_BANDS: readonly Band[] = [
  { a: 0, b: 0.36 },
  { a: 0.36, b: 0.68 },
  { a: 0.68, b: 1 },
] as const;

/**
 * Altura da seção pinada em desktop (svh).
 *
 * 400svh, não 300: a 300svh o range de scroll é de 200vh para três
 * bandas, o que espremia o plateau da banda 1 em 36vh (~3 flicks,
 * abaixo dos 5–6 exigidos). 400svh dá 300vh de range e devolve a
 * cada banda um plateau dentro do padrão, sem tocar na matemática
 * das rampas em `scrub.ts`. Custo: ~1 viewport a mais de scroll
 * antes de `#solucoes`, só em lg+ (mobile nunca pina).
 */
export const HERO_SECTION_SVH = 400;
