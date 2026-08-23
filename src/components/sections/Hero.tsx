import { ArrowDown } from "lucide-react";
import { InkButton } from "@/components/ui/InkButton";
import { HeroVisual } from "@/components/three/HeroVisual";

/**
 * Hero — o texto entra com animação CSS pura (não espera hidratação,
 * não penaliza LCP); a cena 3D carrega depois da primeira pintura.
 */
export function Hero() {
  return (
    <section className="grain relative flex min-h-svh flex-col justify-center overflow-hidden bg-carbon">
      {/* Cena 3D / poster — atrás do texto, nunca bloqueia a leitura */}
      <HeroVisual />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-32 md:px-8">
        <p className="text-spec hero-rise mb-6 flex items-center gap-3 text-steel">
          <span aria-hidden="true" className="inline-block h-px w-8 bg-ink" />
          Da ideia à matéria
        </p>

        <h1 className="text-display max-w-5xl font-semibold text-white-tech">
          <span className="hero-rise hero-rise-2 block">Ideias ganham</span>
          <span className="hero-rise hero-rise-3 block">
            peso, textura{" "}
            <em className="font-serif font-normal italic text-ink">e presença.</em>
          </span>
        </h1>

        <p className="text-lead hero-rise hero-rise-3 mt-8 max-w-xl text-steel">
          Impressão, livros, embalagens e grandes tiragens entregues em todo o
          Brasil.
        </p>

        <div className="hero-rise hero-rise-4 mt-10 flex flex-wrap items-center gap-4">
          <InkButton href="/orcamento" size="lg" data-testid="hero-cta-orcamento">
            Transforme seu projeto em matéria
          </InkButton>
          <InkButton href="#solucoes" variant="outline" size="lg">
            Explorar soluções
          </InkButton>
        </div>
      </div>

      {/* especificações técnicas decorativas */}
      <div className="pointer-events-none absolute bottom-6 left-0 right-0 z-10 hidden items-center justify-between px-8 md:flex">
        <p className="text-spec text-steel-2">CMYK · 300 dpi · sangria 3 mm</p>
        <a
          href="#solucoes"
          className="text-spec pointer-events-auto flex items-center gap-2 text-steel transition-colors hover:text-white-tech"
        >
          Role para explorar
          <ArrowDown aria-hidden="true" className="size-3.5 animate-bounce motion-reduce:animate-none" />
        </a>
        <p className="text-spec text-steel-2">BSB → BR</p>
      </div>
    </section>
  );
}
