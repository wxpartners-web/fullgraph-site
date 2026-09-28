"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { revealVariants, clipRevealVariants, staggerContainer } from "@/lib/motion-tokens";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** "fade" (padrão) ou "clip" (máscara de corte, para headlines) */
  kind?: "fade" | "clip";
  delay?: number;
  as?: "div" | "section" | "h1" | "h2" | "h3" | "p" | "li" | "span";
}

/** Mesmo estado final, aplicado sem transição (prefers-reduced-motion) */
function instant(variants: Variants): Variants {
  return { hidden: variants.hidden, visible: { ...(variants.visible as object), transition: { duration: 0 } } };
}

/*
 * Reduced-motion: o SSR não conhece a preferência e sempre emite o
 * estado "hidden" inline. Trocar por uma tag simples no cliente não
 * limpa esse style (o React não corrige atributos na hidratação) e o
 * conteúdo ficava invisível. Por isso o componente motion é mantido e
 * apenas pula para "visible" sem animar — a biblioteca reescreve o style.
 */

/**
 * Reveal editorial padrão — usado com parcimônia (não em toda seção).
 * Respeita prefers-reduced-motion: conteúdo aparece sem animação.
 */
export function Reveal({ children, className, kind = "fade", delay = 0, as = "div" }: RevealProps) {
  const reduced = useReducedMotion();
  const Comp = motion[as];
  const variants = kind === "clip" ? clipRevealVariants : revealVariants;
  if (reduced) {
    return (
      <Comp className={className} initial="hidden" animate="visible" variants={instant(variants)}>
        {children}
      </Comp>
    );
  }
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Comp>
  );
}

/** Container com stagger para listas/grades */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduced = useReducedMotion();
  if (reduced) {
    return (
      <motion.div className={className} initial="hidden" animate="visible" variants={staggerContainer(0)}>
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer(stagger)}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div className={className} variants={reduced ? instant(revealVariants) : revealVariants}>
      {children}
    </motion.div>
  );
}
