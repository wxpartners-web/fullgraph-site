import type { MockupKind } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Mockup procedural em CSS puro — representa o produto por
 * materialidade (camadas, sombra, papel) sem fotos de banco.
 * Usado no catálogo, no hero do produto e no portfolio.
 */
export function ProductMockup({
  kind,
  accent = "var(--ink-orange)",
  base = "var(--paper)",
  className,
}: {
  kind: MockupKind;
  accent?: string;
  base?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative h-full w-full", className)} aria-hidden="true">
      {kind === "book" && (
        <div className="absolute inset-[12%] [transform-style:preserve-3d]">
          {/* páginas */}
          <div
            className="absolute inset-0 translate-x-[6%] translate-y-[3%] rounded-r-sm"
            style={{ background: "var(--white-tech)" }}
          />
          <div
            className="absolute inset-0 translate-x-[3%] translate-y-[1.5%] rounded-r-sm opacity-80"
            style={{ background: base }}
          />
          {/* capa */}
          <div
            className="absolute inset-0 rounded-r-sm shadow-xl shadow-black/30"
            style={{ background: accent }}
          >
            <div className="absolute inset-y-0 left-0 w-[6%] brightness-75" style={{ background: accent }} />
            <div className="absolute left-[16%] top-[16%] right-[18%] h-[3%]" style={{ background: "color-mix(in srgb, var(--carbon) 35%, transparent)" }} />
            <div className="absolute left-[16%] top-[24%] w-[40%] h-[3%]" style={{ background: "color-mix(in srgb, var(--carbon) 25%, transparent)" }} />
          </div>
        </div>
      )}

      {kind === "box" && (
        <div className="absolute inset-[16%]">
          {/* tampa */}
          <div
            className="absolute inset-x-[4%] top-0 h-[22%] origin-bottom skew-x-[-16deg] rounded-t-sm brightness-110"
            style={{ background: "var(--carbon-3)" }}
          />
          {/* corpo */}
          <div
            className="absolute inset-x-0 top-[18%] bottom-0 rounded-sm shadow-xl shadow-black/40"
            style={{ background: "var(--carbon-2)" }}
          >
            <div className="absolute inset-x-0 bottom-[22%] h-[18%]" style={{ background: accent }} />
            <div className="absolute left-[10%] top-[18%] h-[10%] w-[34%] opacity-60" style={{ background: base }} />
          </div>
        </div>
      )}

      {kind === "sheet" && (
        <div className="absolute inset-[14%]">
          <div className="absolute inset-0 translate-x-[5%] translate-y-[5%] rotate-2 rounded-sm opacity-50" style={{ background: base }} />
          <div className="absolute inset-0 rounded-sm shadow-lg shadow-black/30" style={{ background: base }}>
            <div className="absolute left-[10%] top-[12%] h-[22%] w-[58%]" style={{ background: accent }} />
            <div className="absolute left-[10%] top-[46%] h-[5%] w-[76%] bg-carbon/25" />
            <div className="absolute left-[10%] top-[57%] h-[5%] w-[64%] bg-carbon/20" />
            <div className="absolute left-[10%] top-[68%] h-[5%] w-[70%] bg-carbon/15" />
          </div>
        </div>
      )}

      {kind === "stack" && (
        <div className="absolute inset-[14%]">
          <div className="absolute inset-x-[2%] bottom-0 h-[85%] translate-y-[8%] rotate-[-2deg] rounded-sm opacity-40" style={{ background: base }} />
          <div className="absolute inset-x-[1%] bottom-0 h-[88%] translate-y-[4%] rotate-[1.5deg] rounded-sm opacity-70" style={{ background: "var(--white-tech)" }} />
          <div className="absolute inset-x-0 bottom-0 h-[92%] rounded-sm shadow-xl shadow-black/30" style={{ background: base }}>
            <div className="absolute inset-x-[8%] top-[10%] h-[30%]" style={{ background: accent }} />
            <div className="absolute left-[8%] top-[48%] h-[4%] w-[70%] bg-carbon/25" />
            <div className="absolute left-[8%] top-[58%] h-[4%] w-[55%] bg-carbon/20" />
          </div>
        </div>
      )}

      {kind === "roll" && (
        <div className="absolute inset-[16%]">
          {/* rolo de rótulos */}
          <div className="absolute left-1/2 top-1/2 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-xl shadow-black/30" style={{ background: base }}>
            <div className="absolute inset-[12%] rounded-full" style={{ background: accent }} />
            <div className="absolute inset-[38%] rounded-full" style={{ background: "var(--carbon-2)" }} />
          </div>
          {/* ponta da fita */}
          <div className="absolute bottom-[6%] left-1/2 h-[14%] w-[46%] -translate-x-[20%] rounded-sm" style={{ background: base }} />
        </div>
      )}

      {kind === "sign" && (
        <div className="absolute inset-[14%]">
          <div className="absolute inset-x-[8%] top-0 h-[4%] rounded-full bg-carbon/50" />
          <div className="absolute inset-x-0 top-[6%] bottom-[4%] rounded-sm shadow-xl shadow-black/30" style={{ background: base }}>
            <div className="absolute inset-[10%] flex flex-col justify-between">
              <div className="h-[34%] w-[70%]" style={{ background: accent }} />
              <div className="space-y-[8%]">
                <div className="h-[10%] w-[85%] bg-carbon/30" />
                <div className="h-[10%] w-[60%] bg-carbon/20" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
