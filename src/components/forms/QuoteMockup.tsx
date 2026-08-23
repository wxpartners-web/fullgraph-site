"use client";

import { cn } from "@/lib/utils";

/**
 * Mockup reativo do orçamento — reage às escolhas do usuário:
 * livro engrossa com as páginas, caixa muda de proporção, folder
 * mostra as dobras, pilha cresce com a tiragem e o acabamento
 * altera o "brilho" da superfície. Transições via CSS, sem
 * layout shift (o palco tem tamanho fixo).
 */

const MATERIAL_COLORS: Record<string, string> = {
  kraft: "#b98d55",
  polen: "#f3ecd4",
  offset: "#fafaf7",
  "couche-brilho": "#f6f4ec",
  "couche-fosco": "#efece1",
  cartao: "#e9e2d0",
};

interface QuoteMockupProps {
  produto: string;
  formato: string;
  quantidade: string;
  paginas?: string;
  material: string;
  acabamento: string[];
  className?: string;
}

const PAGE_THICKNESS: Record<string, number> = {
  "ate-48": 14,
  "48-96": 24,
  "96-200": 38,
  "200+": 52,
};

const QTY_STACK: Record<string, number> = {
  "ate-100": 2,
  "100-500": 3,
  "500-1000": 4,
  "1000-5000": 5,
  "5000-20000": 6,
  "20000+": 8,
};

export function QuoteMockup({
  produto,
  formato,
  quantidade,
  paginas,
  material,
  acabamento,
  className,
}: QuoteMockupProps) {
  const paper = MATERIAL_COLORS[material] ?? "var(--paper)";
  const glossy = acabamento.includes("laminacao-brilho") || acabamento.includes("verniz-localizado");
  const stamped = acabamento.includes("hot-stamping");
  const thickness = PAGE_THICKNESS[paginas ?? ""] ?? 20;
  const stackCount = QTY_STACK[quantidade] ?? 3;

  const sheen = glossy
    ? "linear-gradient(115deg, transparent 30%, rgb(255 255 255 / 0.55) 44%, transparent 58%)"
    : "none";

  const isBook = ["livro", "catalogo", "caderno"].includes(produto);
  const isBox = produto === "embalagem";
  const isFolder = produto === "folder";
  const isRoll = produto === "rotulo";
  const isBanner = produto === "banner";
  const folds = formato.includes("3dobras") ? 3 : 2;

  return (
    <div
      className={cn("relative flex h-52 w-full scale-90 items-center justify-center md:h-64 md:scale-100", className)}
      aria-hidden="true"
      data-testid="quote-mockup"
    >
      {/* LIVRO / CATÁLOGO / CADERNO — espessura reage às páginas */}
      {isBook && (
        <div className="relative" style={{ perspective: "700px" }}>
          <div
            className="relative h-48 w-36 transition-all duration-[var(--dur-comp)] ease-[var(--ease-out-expo)]"
            style={{ transform: "rotateY(-18deg) rotateX(4deg)", transformStyle: "preserve-3d" }}
          >
            {/* páginas (lombada) */}
            <div
              className="absolute left-0 top-1 bottom-1 origin-left transition-all duration-[var(--dur-comp)]"
              style={{
                width: thickness,
                transform: `rotateY(90deg) translateX(${-thickness / 2}px)`,
                background: paper,
                filter: "brightness(0.92)",
              }}
            />
            {/* capa */}
            <div
              className="absolute inset-0 rounded-r-sm shadow-2xl shadow-black/30 transition-all duration-[var(--dur-comp)]"
              style={{ background: "var(--ink-orange)", transform: `translateZ(${thickness / 2}px)` }}
            >
              <div className="absolute left-4 top-5 h-2.5 w-2/3 bg-carbon/30" />
              <div className="absolute left-4 top-10 h-2.5 w-1/2 bg-carbon/20" />
              {stamped && <div className="absolute left-4 bottom-5 h-3 w-1/3 bg-[#e8c469]" />}
              <div className="absolute inset-0 rounded-r-sm" style={{ background: sheen }} />
            </div>
          </div>
          <p className="text-spec mt-3 text-center text-carbon/50">{thickness * 4} páginas aprox.</p>
        </div>
      )}

      {/* EMBALAGEM — proporção reage ao formato */}
      {isBox && (
        <div className="relative">
          <div
            className="relative transition-all duration-[var(--dur-comp)] ease-[var(--ease-out-expo)]"
            style={{
              width: formato === "caixa-14" ? 170 : formato === "wrap" ? 200 : 140,
              height: formato === "wrap" ? 90 : formato === "caixa-14" ? 120 : 110,
            }}
          >
            <div
              className="absolute inset-x-[6%] top-0 h-[22%] origin-bottom skew-x-[-14deg] rounded-t-sm transition-colors duration-[var(--dur-comp)]"
              style={{ background: paper, filter: "brightness(0.85)" }}
            />
            <div
              className="absolute inset-x-0 top-[16%] bottom-0 rounded-sm shadow-xl shadow-black/30 transition-colors duration-[var(--dur-comp)]"
              style={{ background: paper }}
            >
              <div className="absolute inset-x-0 bottom-[24%] h-[20%] bg-ink" />
              <div className="absolute inset-0 rounded-sm" style={{ background: sheen }} />
            </div>
          </div>
          <p className="text-spec mt-3 text-center text-carbon/50">
            {formato === "wrap" ? "envoltório" : "caixa com encaixe"}
          </p>
        </div>
      )}

      {/* FOLDER — mostra as dobras */}
      {isFolder && (
        <div className="relative">
          <div className="flex" style={{ perspective: "600px" }}>
            {Array.from({ length: folds + 1 }, (_, i) => (
              <div
                key={i}
                className="h-44 w-16 border-r border-carbon/10 shadow-lg shadow-black/15 transition-all duration-[var(--dur-comp)] ease-[var(--ease-out-expo)]"
                style={{
                  background: paper,
                  transform: `rotateY(${i % 2 === 0 ? -16 : 16}deg)`,
                  transformOrigin: i % 2 === 0 ? "right center" : "left center",
                }}
              >
                {i === 0 && <div className="mx-2 mt-4 h-8 bg-ink/90" />}
                {i > 0 && <div className="mx-2 mt-4 h-1.5 bg-carbon/20" />}
                <div className="mx-2 mt-2 h-1.5 bg-carbon/10" />
              </div>
            ))}
          </div>
          <p className="text-spec mt-3 text-center text-carbon/50">{folds} dobras</p>
        </div>
      )}

      {/* RÓTULO — rolo */}
      {isRoll && (
        <div className="relative">
          <div className="relative h-40 w-40 rounded-full shadow-xl shadow-black/20 transition-colors duration-[var(--dur-comp)]" style={{ background: paper }}>
            <div className="absolute inset-[14%] rounded-full bg-ink" />
            <div className="absolute inset-[40%] rounded-full bg-carbon-2" />
            <div className="absolute inset-0 rounded-full" style={{ background: sheen }} />
          </div>
          <p className="text-spec mt-3 text-center text-carbon/50">rolo de rótulos</p>
        </div>
      )}

      {/* BANNER */}
      {isBanner && (
        <div className="relative">
          <div className="relative h-52 w-36 transition-all duration-[var(--dur-comp)]" style={{ width: formato === "80x120" ? 160 : 130 }}>
            <div className="absolute inset-x-2 top-0 h-1.5 rounded-full bg-carbon/50" />
            <div className="absolute inset-x-0 top-3 bottom-0 rounded-sm shadow-xl shadow-black/25 transition-colors duration-[var(--dur-comp)]" style={{ background: paper }}>
              <div className="mx-3 mt-4 h-1/3 bg-ink" />
              <div className="mx-3 mt-2 h-2 w-3/4 bg-carbon/25" />
            </div>
          </div>
          <p className="text-spec mt-3 text-center text-carbon/50">banner com bastão</p>
        </div>
      )}

      {/* DEMAIS (flyer, bandeja, papelaria…) — pilha cresce com a tiragem */}
      {!isBook && !isBox && !isFolder && !isRoll && !isBanner && (
        <div className="relative">
          <div className="relative h-44 w-40">
            {Array.from({ length: stackCount }, (_, i) => {
              const idx = stackCount - 1 - i;
              return (
                <div
                  key={i}
                  className="absolute inset-x-0 mx-auto h-36 w-36 rounded-sm shadow-md shadow-black/10 transition-all duration-[var(--dur-comp)] ease-[var(--ease-out-expo)]"
                  style={{
                    background: idx === 0 ? paper : `color-mix(in srgb, ${MATERIAL_COLORS[material] ?? "#efece1"} 85%, #999)`,
                    bottom: idx * 7,
                    transform: `rotate(${idx % 2 === 0 ? idx : -idx}deg)`,
                    zIndex: stackCount - idx,
                  }}
                >
                  {idx === 0 && (
                    <>
                      <div className="mx-4 mt-5 h-8 bg-ink" />
                      <div className="mx-4 mt-2 h-1.5 w-3/4 bg-carbon/25" />
                      <div className="mx-4 mt-1.5 h-1.5 w-1/2 bg-carbon/15" />
                      <div className="absolute inset-0 rounded-sm" style={{ background: sheen }} />
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-spec mt-1 text-center text-carbon/50">
            {produto ? "pilha da tiragem" : "seu material aparece aqui"}
          </p>
        </div>
      )}
    </div>
  );
}
