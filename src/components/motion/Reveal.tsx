"use client";

import { motion, useReducedMotion } from "motion/react";
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

/**
 * Reveal editorial padrão — usado com parcimônia (não em toda seção).
 * Respeita prefers-reduced-motion: conteúdo aparece sem animação.
 */
export function Reveal({ children, className, kind = "fade", delay = 0, as = "div" }: RevealProps) {
  const reduced = useReducedMotion();
  const Comp = motion[as];
  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }
  const variants = kind === "clip" ? clipRevealVariants : revealVariants;
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
  if (reduced) return <div className={className}>{children}</div>;
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
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} variants={revealVariants}>
      {children}
    </motion.div>
  );
}
