/**
 * Matemática e motor do scroll-scrub — lógica pura, sem React.
 * Padrão técnico da metodologia 10K Websites adaptado ao stack:
 * lerp frame-rate-independent, seek-gate deadlock-safe, bandas com
 * smoothstep, escrita de DOM delta-gated (feita pelo chamador).
 */

/** k por frame de 60fps; o Lenis já suaviza o scroll, então o k daqui é mais alto */
export const SCRUB_LERP_K = 0.3;
/** Distância de progresso abaixo da qual o rAF considera convergido e dorme */
export const CONVERGENCE_EPSILON = 0.0005;
/** Delta mínimo para reescrever uma CSS var (zero writes quando parado) */
export const VAR_DELTA_GATE = 0.008;
/** Abort do fetch do vídeo se nenhum chunk chegar neste intervalo */
export const FETCH_WATCHDOG_MS = 20_000;

export const clamp01 = (v: number): number => Math.min(1, Math.max(0, v));

/** Hermite clássico — rampas suaves das bandas */
export function smoothstep(p: number, e0: number, e1: number): number {
  const t = clamp01((p - e0) / (e1 - e0));
  return t * t * (3 - 2 * t);
}

/**
 * Interpolação frame-rate-independent: o expoente normaliza o k para a
 * referência de 60fps, então 60Hz e 144Hz convergem na mesma velocidade.
 */
export function lerpFrameRateIndependent(
  shown: number,
  target: number,
  k: number,
  dtMs: number
): number {
  const dt = Math.min(100, dtMs);
  return shown + (target - shown) * (1 - Math.pow(1 - k, dt / 16.667));
}

export interface Band {
  /** início do range de progresso [0..1] */
  a: number;
  /** fim do range */
  b: number;
}

/**
 * Opacity da banda: plateau cheio com rampas smoothstep nas bordas.
 * A primeira banda abre assentada (sem ease-in) e a última segura até
 * o fim (sem ease-out) — regra de pacing da skill.
 */
export function bandOpacity(p: number, band: Band, isFirst: boolean, isLast: boolean): number {
  const f = Math.min(0.02, (band.b - band.a) / 3);
  const fadeIn = isFirst ? 1 : smoothstep(p, band.a, band.a + f);
  const fadeOut = isLast ? 1 : 1 - smoothstep(p, band.b - f, band.b);
  return fadeIn * fadeOut;
}

/** Progresso de montagem do texto da banda (assenta cedo, plateau longo) */
export function bandK(p: number, band: Band): number {
  const ramp = Math.min(0.025, (band.b - band.a) * 0.35);
  if (ramp <= 0) return 1;
  return clamp01((p - band.a) / ramp);
}

export interface SeekGate {
  requestSeek: (timeSeconds: number) => void;
  dispose: () => void;
}

/**
 * Seek-gate deadlock-safe: nunca escreve currentTime com um seek em
 * voo; coalesce para o alvo mais novo; exatamente um follow-up por
 * `seeked`; `error` reseta a flag para o gate jamais travar.
 */
export function createSeekGate(video: HTMLVideoElement): SeekGate {
  let busy = false;
  let pending: number | null = null;

  function requestSeek(t: number) {
    if (!Number.isFinite(video.duration) || video.duration <= 0) return;
    if (busy) {
      pending = t;
      return;
    }
    busy = true;
    video.currentTime = t;
  }

  const onSeeked = () => {
    busy = false;
    if (pending !== null) {
      const t = pending;
      pending = null;
      requestSeek(t);
    }
  };
  const onError = () => {
    busy = false;
    pending = null;
  };

  video.addEventListener("seeked", onSeeked);
  video.addEventListener("error", onError);

  return {
    requestSeek,
    dispose: () => {
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("error", onError);
      busy = false;
      pending = null;
    },
  };
}

export interface ScrubEngine {
  /** alvo novo vindo do scroll (0..1); acorda o rAF se preciso */
  setTarget: (progress: number) => void;
  /** liga/desliga pelo IntersectionObserver — fora de vista o loop dorme */
  setActive: (active: boolean) => void;
  dispose: () => void;
}

/**
 * Loop rAF que descansa: lerp até convergir (< CONVERGENCE_EPSILON) e
 * cancela o frame; qualquer setTarget/setActive re-arma. Zero trabalho
 * por frame quando parado ou fora da viewport.
 */
export function createScrubEngine(
  onFrame: (shown: number) => void,
  k: number = SCRUB_LERP_K
): ScrubEngine {
  let target = 0;
  let shown = 0;
  let rafId: number | null = null;
  let lastTick = 0;
  let active = true;
  let disposed = false;

  function tick(now: number) {
    rafId = null;
    if (disposed || !active) {
      lastTick = 0;
      return;
    }
    const dt = lastTick === 0 ? 16.667 : now - lastTick;
    lastTick = now;
    shown = lerpFrameRateIndependent(shown, target, k, dt);
    if (Math.abs(target - shown) < CONVERGENCE_EPSILON) {
      shown = target;
      lastTick = 0;
    } else {
      rafId = requestAnimationFrame(tick);
    }
    onFrame(shown);
  }

  function wake() {
    if (disposed || !active || rafId !== null) return;
    rafId = requestAnimationFrame(tick);
  }

  return {
    setTarget(progress: number) {
      target = clamp01(progress);
      if (Math.abs(target - shown) >= CONVERGENCE_EPSILON) wake();
    },
    setActive(next: boolean) {
      active = next;
      if (!next && rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
        lastTick = 0;
      }
      if (next) wake();
    },
    dispose() {
      disposed = true;
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = null;
    },
  };
}
