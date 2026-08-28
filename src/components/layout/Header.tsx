"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown, MessageCircle, Menu, X } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";
import { hasWhatsApp, whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { duration, easeOutExpo, staggerContainer } from "@/lib/motion-tokens";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu ao navegar (ajuste de estado durante o render,
  // padrão recomendado pelo React para "derived state resets")
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
    setDropdownOpen(false);
  }

  // Trava o scroll enquanto o menu está aberto
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("/").slice(0, 2).join("/"));

  // Rotas com fundo claro (papel): o header muda de contraste
  const onLight = pathname.startsWith("/orcamento") && !menuOpen;
  const linkIdle = onLight ? "text-carbon/65 hover:text-carbon" : "text-steel hover:text-white-tech";
  const linkActive = onLight ? "text-carbon font-medium" : "text-white-tech";

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink focus:text-carbon focus:px-4 focus:py-2 focus:text-sm"
      >
        Pular para o conteúdo
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[70] transition-[background-color,border-color,backdrop-filter] duration-[var(--dur-comp)]",
          scrolled || menuOpen
            ? onLight
              ? "bg-paper/85 backdrop-blur-md border-b border-carbon/10"
              : "bg-carbon/85 backdrop-blur-md border-b border-white-tech/10"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="mx-auto flex h-[var(--header-h)] max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="flex items-center" aria-label={`${site.name} — página inicial`}>
            <Image
              src={onLight ? "/brand/fullgraph-logo.png" : "/brand/fullgraph-logo-light.png"}
              alt={`${site.name} — ${site.tagline}`}
              width={185}
              height={70}
              priority
              fetchPriority="high"
              className="h-9 w-auto md:h-10"
            />
          </Link>

          {/* Navegação desktop */}
          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) =>
                item.children ? (
                  <li key={item.label} className="group relative">
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm transition-colors duration-[var(--dur-micro)]",
                        isActive(item.href) ? linkActive : linkIdle
                      )}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      onClick={() => setDropdownOpen((v) => !v)}
                      onKeyDown={(e) => e.key === "Escape" && setDropdownOpen(false)}
                    >
                      {item.label}
                      <ChevronDown aria-hidden="true" className="size-3.5 transition-transform duration-[var(--dur-micro)] group-hover:rotate-180 group-focus-within:rotate-180" />
                    </button>
                    <div
                      className={cn(
                        "absolute left-0 top-full pt-2 transition-opacity duration-[var(--dur-micro)]",
                        // opacity (e não visibility) mantém os links focáveis
                        // por teclado; o menu revela no hover, no foco ou no clique
                        dropdownOpen
                          ? "pointer-events-auto opacity-100"
                          : "pointer-events-none opacity-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100"
                      )}
                    >
                      <ul
                        className={cn(
                          "min-w-64 border p-2 backdrop-blur-md shadow-2xl shadow-black/40",
                          onLight ? "border-carbon/10 bg-paper/95" : "border-white-tech/10 bg-carbon-2/95"
                        )}
                      >
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={cn(
                                "block px-4 py-3 text-sm transition-colors duration-[var(--dur-micro)]",
                                onLight
                                  ? "text-carbon/70 hover:bg-carbon/5 hover:text-carbon"
                                  : "text-steel hover:bg-white-tech/5 hover:text-white-tech"
                              )}
                              aria-current={pathname === child.href ? "page" : undefined}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "px-4 py-2 text-sm transition-colors duration-[var(--dur-micro)]",
                        isActive(item.href) ? linkActive : linkIdle
                      )}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            {hasWhatsApp() && (
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hidden md:inline-flex items-center gap-2 px-3 py-2 text-sm transition-colors duration-[var(--dur-micro)]",
                  linkIdle
                )}
                data-testid="header-whatsapp"
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                WhatsApp
              </a>
            )}
            <Link
              href="/orcamento"
              className="ink-register-hover hidden md:inline-flex h-10 items-center bg-ink px-5 text-sm font-medium text-carbon transition-colors duration-[var(--dur-micro)] hover:bg-white-tech"
              data-testid="header-orcamento"
            >
              <span className="ink-register-target">Solicitar orçamento</span>
            </Link>
            <button
              className={cn(
                "inline-flex size-11 items-center justify-center lg:hidden",
                onLight ? "text-carbon" : "text-white-tech"
              )}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              data-testid="menu-toggle"
            >
              {menuOpen ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu fullscreen (mobile/tablet) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-mobile"
            className="grain fixed inset-0 z-[65] flex flex-col bg-carbon pt-[var(--header-h)] lg:hidden"
            initial={reduced ? { opacity: 1 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={reduced ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
            exit={reduced ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: duration.component, ease: easeOutExpo }}
          >
            <nav aria-label="Menu" className="flex-1 overflow-y-auto px-6 py-10">
              <motion.ul
                variants={reduced ? undefined : staggerContainer(0.06, 0.12)}
                initial="hidden"
                animate="visible"
                className="space-y-1"
              >
                {[{ label: "Início", href: "/" }, ...mainNav.flatMap((i) => (i.children ? i.children : [i])), { label: "Orçamento", href: "/orcamento" }].map(
                  (item, idx) => (
                    <motion.li
                      key={item.href}
                      variants={
                        reduced
                          ? undefined
                          : {
                              hidden: { opacity: 0, y: 16 },
                              visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeOutExpo } },
                            }
                      }
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "group flex items-baseline gap-4 border-b border-white-tech/10 py-4",
                          pathname === item.href ? "text-ink" : "text-white-tech"
                        )}
                        aria-current={pathname === item.href ? "page" : undefined}
                      >
                        <span aria-hidden="true" className="text-spec text-steel-2 w-7">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="font-serif text-3xl italic tracking-tight transition-transform duration-[var(--dur-micro)] group-active:translate-x-1">
                          {item.label}
                        </span>
                      </Link>
                    </motion.li>
                  )
                )}
              </motion.ul>
            </nav>
            <div className="border-t border-white-tech/10 px-6 py-5">
              <p className="text-spec text-steel-2 mb-2">Fale com a gente</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-steel">
                <a href={`tel:${site.phone.e164}`} className="hover:text-white-tech">
                  {site.phone.display}
                </a>
                <a href={`mailto:${site.email}`} className="hover:text-white-tech">
                  {site.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
