/**
 * Sistema de movimento Fullgraph — tokens centralizados.
 * Espelhados em CSS custom properties (globals.css).
 * Docs: docs/MOTION-SYSTEM.md
 */

export const duration = {
  /** Microinterações: hover, registro de tinta, feedback imediato */
  micro: 0.19,
  /** Componentes: reveals, cards, acordeões, trocas de etapa */
  component: 0.4,
  /** Transições de página / composições grandes */
  page: 0.75,
  /** Intro de marca (uma vez por sessão) — total com saída ≈ 1,15 s */
  intro: 0.7,
} as const;

/** Easing principal do sistema — saída expressiva, sem quique */
export const easeOutExpo = [0.22, 1, 0.36, 1] as const;

/** Easing de entrada+saída para elementos que atravessam a tela */
export const easeInOutInk = [0.83, 0, 0.17, 1] as const;

export const transition = {
  micro: { duration: duration.micro, ease: easeOutExpo },
  component: { duration: duration.component, ease: easeOutExpo },
  page: { duration: duration.page, ease: easeInOutInk },
} as const;

/** Variants reutilizáveis — reveal editorial padrão (sem exagero) */
export const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.component,
  },
} as const;

/** Reveal com máscara de corte (clip), para headlines */
export const clipRevealVariants = {
  hidden: { clipPath: "inset(0 0 100% 0)", y: 12 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    y: 0,
    transition: { duration: duration.component + 0.12, ease: easeOutExpo },
  },
} as const;

/** Stagger container padrão */
export const staggerContainer = (stagger = 0.08, delay = 0) =>
  ({
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  }) as const;

/** Chave de sessionStorage que controla a intro de marca */
export const INTRO_SESSION_KEY = "fullgraph:intro-seen";
