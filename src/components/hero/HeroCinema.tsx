import { InkButton } from "@/components/ui/InkButton";
import { HeroStill } from "./HeroStill";
import { HeroScrubController } from "./HeroScrubController";
import { HERO_SECTION_SVH } from "@/lib/hero-media";

/**
 * Hero cinematográfico (atrás de NEXT_PUBLIC_HERO_SCRUB).
 *
 * Server component: texto, poster, scrim e estrutura saem no HTML
 * inicial — H1 e CTA existem sem JavaScript. A fronteira client
 * (HeroScrubController) só acrescenta o vídeo por cima quando o
 * desktop é elegível.
 *
 * Alturas: mobile/touch = min-h-svh SEM pin (nenhum scroll vazio);
 * desktop lg+ = seção alta (~300svh) com palco sticky.
 *
 * Bandas: a banda 0 abre assentada (opacity padrão 1 via CSS var);
 * bandas 1–2 são overlays desktop-only, visibility:hidden por padrão —
 * só o motor de scrub as revela. Sem JS, com reduced-motion, com
 * data-saver ou em erro de mídia, o resultado é o hero estático
 * completo: poster + banda 0.
 */
export function HeroCinema() {
  return (
    <section
      data-hero-cinema
      data-testid="hero-cinema"
      className="grain relative min-h-svh bg-carbon lg:h-[var(--hero-cinema-h)]"
      style={{ "--hero-cinema-h": `${HERO_SECTION_SVH}svh` } as React.CSSProperties}
    >
      <div className="relative flex min-h-svh flex-col justify-center overflow-hidden lg:sticky lg:top-0 lg:h-svh lg:min-h-0">
        {/* Poster SSR — o hero é completo mesmo se o vídeo nunca chegar */}
        <HeroStill />
        {/* Vídeo scrub: só monta em desktop elegível */}
        <HeroScrubController />
        {/* Legibilidade localizada (skill 10K): véu fino atrás da nav
            e uma poça de sombra POR BANDA que lê as mesmas CSS vars do
            motor — a proteção aparece e some junto com o texto, e fora
            dele o vídeo respira sem véu */}
        <div aria-hidden="true" className="hero-veil-top" />
        <div
          aria-hidden="true"
          className="hero-pool hero-pool-0"
          style={{ opacity: "var(--hb0-o, 1)" }}
        />
        <div
          aria-hidden="true"
          className="hero-pool hero-pool-1 hidden lg:block"
          style={{ opacity: "var(--hb1-o, 0)" }}
        />
        <div
          aria-hidden="true"
          className="hero-pool hero-pool-2 hidden lg:block"
          style={{ opacity: "var(--hb2-o, 0)" }}
        />

        {/* Banda 0 — H1 + CTA no HTML inicial, abre assentada */}
        <div
          data-band="0"
          className="hero-band relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-32 md:px-8"
          style={{ opacity: "var(--hb0-o, 1)" }}
        >
          <p className="text-eyebrow hero-rise mb-6 flex items-center gap-3 text-steel">
            <span aria-hidden="true" className="inline-block h-px w-8 bg-ink" />
            Gráfica · Brasília → todo o Brasil
          </p>

          <h1 className="text-display max-w-5xl text-white-tech">
            <span className="hero-rise hero-rise-2 block">A sua ideia, impressa</span>
            <span className="hero-rise hero-rise-3 block">
              com{" "}
              <em className="font-serif font-normal italic text-ink">
                peso e presença.
              </em>
            </span>
          </h1>

          <p className="text-lead hero-rise hero-rise-3 mt-8 max-w-lg text-steel">
            Livros, embalagens e grandes tiragens para empresas, editoras e
            restaurantes.
          </p>

          <div className="hero-rise hero-rise-4 mt-10 flex flex-wrap items-center gap-4">
            <InkButton href="/orcamento" size="lg" data-testid="hero-cta-orcamento">
              Solicitar orçamento
            </InkButton>
            <InkButton href="#solucoes" variant="outline" size="lg">
              Explorar soluções
            </InkButton>
          </div>
        </div>

        {/* Bandas 1–2 — narrativa do scrub, desktop-only; o motor revela */}
        <div
          data-band="1"
          className="hero-band hero-band-overlay absolute inset-0 z-10 hidden items-center lg:flex"
          style={{
            opacity: "var(--hb1-o, 0)",
            transform: "translateY(calc((1 - var(--hb1-k, 1)) * 28px))",
          }}
        >
          <div className="mx-auto w-full max-w-7xl px-8">
            <p className="text-h2 max-w-2xl text-white-tech">
              Tinta, papel e acabamento tratados como{" "}
              <em className="font-serif font-normal italic text-ink">projeto.</em>
            </p>
          </div>
        </div>

        <div
          data-band="2"
          className="hero-band hero-band-overlay absolute inset-0 z-10 hidden items-center lg:flex"
          style={{
            opacity: "var(--hb2-o, 0)",
            transform: "translateY(calc((1 - var(--hb2-k, 1)) * 28px))",
          }}
        >
          <div className="mx-auto w-full max-w-7xl px-8">
            <p className="text-h2 max-w-2xl text-white-tech">
              Do arquivo aprovado à{" "}
              <em className="font-serif font-normal italic text-ink">
                entrega em todo o Brasil.
              </em>
            </p>
            <div className="mt-9">
              <InkButton href="/orcamento" size="lg">
                Solicitar orçamento
              </InkButton>
            </div>
          </div>
        </div>

        {/* specs técnicas decorativas, em chips legíveis sobre o vídeo */}
        <div className="pointer-events-none absolute bottom-6 left-0 right-0 z-10 hidden items-center justify-between px-8 lg:flex">
          <p className="text-spec hero-chip text-steel">CMYK · 300 dpi · sangria 3 mm</p>
          <p className="text-spec hero-chip text-steel">BSB → BR</p>
        </div>
      </div>
    </section>
  );
}
