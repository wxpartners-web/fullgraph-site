import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "paper";
type Size = "md" | "lg";

const base =
  "ink-register-hover group relative inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-[background-color,border-color,color,transform] duration-[var(--dur-micro)] ease-[var(--ease-out-expo)] active:translate-y-px select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-carbon hover:bg-[color:var(--white-tech)]",
  outline:
    "border border-steel-2 text-white-tech hover:border-white-tech hover:text-white-tech",
  ghost: "text-steel hover:text-white-tech",
  paper:
    "bg-carbon text-white-tech hover:bg-ink hover:text-carbon",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

interface InkButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
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
  className,
  children,
  ...rest
}: InkButtonProps & Omit<ComponentProps<"button">, keyof InkButtonProps>) {
  const cls = cn(base, variants[variant], sizes[size], className);
  const inner = <span className="ink-register-target">{children}</span>;
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
