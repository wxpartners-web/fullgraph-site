/**
 * Poster estático do hero — composição CSS de "bancada gráfica".
 * Serve como: primeira pintura (antes do WebGL), fallback sem
 * WebGL, versão mobile e versão reduced-motion. Sem imagens.
 */
export function HeroPoster({ animated = false }: { animated?: boolean }) {
  const drift = animated ? "hero-poster-drift" : "";
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* No mobile fica mais baixo e esmaecido para nunca disputar
          com o headline; em desktop ocupa a metade direita */}
      <div className="absolute right-[-12%] top-[34%] h-[58%] w-[78%] opacity-45 md:right-[2%] md:top-[12%] md:h-[76%] md:w-[46%] md:opacity-100">
        {/* pilha de impressos */}
        <div
          className={`absolute left-[6%] top-[8%] h-[34%] w-[52%] rotate-[-7deg] ${drift}`}
          style={{ animationDelay: "0.4s" }}
        >
          <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-sm bg-[#d9d2bd]" />
          <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-sm bg-[#e6e0cf]" />
          <div className="absolute inset-0 rounded-sm bg-paper shadow-2xl shadow-black/40">
            <div className="absolute left-[10%] top-[14%] h-[18%] w-[55%] bg-ink" />
            <div className="absolute left-[10%] top-[44%] h-[6%] w-[70%] bg-carbon/20" />
            <div className="absolute left-[10%] top-[56%] h-[6%] w-[60%] bg-carbon/15" />
          </div>
        </div>
        {/* livro */}
        <div
          className={`absolute right-[4%] top-[30%] h-[44%] w-[38%] rotate-[8deg] ${drift}`}
        >
          <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-r-sm bg-[#c93d00]" />
          <div className="absolute inset-y-0 left-0 w-[7%] rounded-l-sm bg-[#d94100]" />
          <div className="absolute inset-0 left-[7%] rounded-r-sm bg-ink shadow-2xl shadow-black/50">
            <div className="absolute left-[12%] top-[12%] right-[12%] h-px bg-carbon/30" />
            <div className="absolute left-[12%] top-[20%] text-[10px] font-mono uppercase tracking-[0.2em] text-carbon/70">
              Livro
            </div>
          </div>
        </div>
        {/* caixa de embalagem */}
        <div
          className={`absolute bottom-[4%] left-[16%] h-[26%] w-[40%] rotate-[-3deg] ${drift}`}
          style={{ animationDelay: "0.8s" }}
        >
          <div className="absolute inset-0 rounded-sm bg-carbon-3 shadow-xl shadow-black/50" />
          <div className="absolute inset-x-0 top-0 h-[18%] -translate-y-1/3 skew-x-[-14deg] rounded-sm bg-carbon-2" />
          <div className="absolute bottom-[18%] left-0 right-0 h-[16%] bg-ink" />
        </div>
        {/* marcas de registro */}
        <div className="absolute right-[16%] top-[6%] h-6 w-6 rotate-45 border border-reg-cyan/70" />
        <div className="absolute bottom-[16%] right-[2%] h-4 w-10 rotate-[24deg] bg-reg-magenta/60" />
      </div>
    </div>
  );
}
