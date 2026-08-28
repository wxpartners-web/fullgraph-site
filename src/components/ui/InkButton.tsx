import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "paper";
type Size = "md" | "lg";

const base =
  "ink-register-hover group relative inline-flex items-center justify-center gap-2 rounded-[3px] font-medium tracking-[0.015em] transition-[background-color,border-color,color,transform,box-shadow] duration-[var(--dur-micro)] ease-[var(--ease-out-expo)] hover:-translate-y-px active:translate-y-0 select-none";

/* Hover por alteração tonal curta + sombra baixa — nunca glow nem
   inversão dramática. O primário leva um fio interno de 1px quase
   invisível que separa o laranja do vídeo sem virar moldura. */
const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-carbon shadow-[inset_0_0_0_1px_rgb(255_255_255/0.16)] hover:bg-ink-2 hover:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.24),0_2px_10px_rgb(0_0_0/0.28)]",
  outline:
    "border border-white-tech/25 bg-white/[0.02] text-white-tech hover:border-white-tech/60 hover:bg-white/[0.05] hover:shadow-[0_2px_10px_rgb(0_0_0/0.22)]",
  ghost: "text-steel hover:text-white-tech",
  paper:
    "bg-carbon text-white-tech shadow-[inset_0_0_0_1px_rgb(255_255_255/0.08)] hover:bg-ink hover:text-carbon",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-[18px] text-[13px]",
  lg: "h-[46px] px-[22px] text-sm",
};

interface InkButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  /** Seta fina à direita — só nos CTAs de avanço, nunca em "voltar" */
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
  "data-testid"?: string;
}

/**
 * Botão do sistema com microinteração de "registro de tinta":
 * no hover/focus o texto separa em cyan/magenta e reconverge
 * (ver .ink-register-hover em globals.css).
 */
export function InkButton({
  variant = "primary",
  size = "md",
  href,
  external,
  withArrow,
  className,
  children,
  ...rest
}: InkButtonProps & Omit<ComponentProps<"button">, keyof InkButtonProps>) {
  const cls = cn(base, variants[variant], sizes[size], className);
  const inner = (
    <>
      <span className="ink-register-target">{children}</span>
      {withArrow && (
        <ArrowRight
          aria-hidden="true"
          strokeWidth={1.75}
          className="-mr-0.5 size-3.5 transition-transform duration-[var(--dur-micro)] ease-[var(--ease-out-expo)] group-hover:translate-x-px"
        />
      )}
    </>
  );
  const testId = rest["data-testid"];
  const isInternal = href?.startsWith("/") || href?.startsWith("#");

  if (href && !isInternal) {
    // Externo (wa.me) abre em nova aba; protocolos como tel:/mailto: não
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cls}
        data-testid={testId}
      >
        {inner}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className={cls} data-testid={testId}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  );
}
