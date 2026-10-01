"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  bindings,
  colorOptions,
  finishes,
  formatsByProduct,
  materials,
  pageCounts,
  quantities,
  quoteProducts,
  segments,
} from "@/data/quote";
import { easeOutExpo } from "@/lib/motion-tokens";
import { cn } from "@/lib/utils";

/**
 * Prévia ilustrativa do orçamento — acompanha cada escolha:
 * a foto troca com o segmento e depois com o produto (as mesmas
 * fotografias conceituais do catálogo), e os selos listam formato,
 * tiragem, páginas, cores, papel, acabamento e encadernação à medida
 * que o pedido é montado. Duas apresentações: cartão completo (lg+)
 * e barra compacta fixa no topo (mobile), para a prévia não sair da
 * tela enquanto o visitante escolhe.
 */

type Photo = { src: string; alt: string };

const PRODUCT_PHOTOS: Record<string, Photo> = {
  livro: { src: "/images/products/livros-editora-pequi.webp", alt: "Livros brochura com capas ilustradas e miolo em papel pólen" },
  catalogo: { src: "/images/products/catalogos-taia-moveis.webp", alt: "Catálogo aberto em página dupla sobre exemplares fechados" },
  flyer: { src: "/images/products/flyers-sonora.webp", alt: "Flyers coloridos espalhados em leque" },
  folder: { src: "/images/products/folders-serra-do-mel.webp", alt: "Folder de três dobras aberto em sanfona" },
  caixa: { src: "/images/products/caixas-personalizadas.webp", alt: "Caixas personalizadas: rígida com tampa, tipo livro, com luva e kraft" },
  embalagem: { src: "/images/products/hamburguer-brasa-bruta.webp", alt: "Caixas de hambúrguer em papel-cartão kraft impresso" },
  bandeja: { src: "/images/products/bandeja-frango-dourado.webp", alt: "Bandeja com papel impresso ilustrado" },
  rotulo: { src: "/images/products/rotulos-sete-serras.webp", alt: "Rolo de rótulos e potes com rótulo aplicado" },
  caderno: { src: "/images/products/cadernos-vale-verde.webp", alt: "Agendas de capa dura com hot stamping" },
  papelaria: { src: "/images/products/papelaria-almeida-sato.webp", alt: "Kit de papelaria: timbrado, envelope, pasta e cartões" },
  banner: { src: "/images/products/banners-sabores-cerrado.webp", alt: "Banner roll-up montado em pavilhão" },
};

const SEGMENT_PHOTOS: Record<string, Photo> = {
  empresa: { src: "/images/solutions/solucao-empresas.webp", alt: "Relatório, catálogo, folder e cartões corporativos" },
  editorial: { src: "/images/solutions/solucao-livros-editorial.webp", alt: "Livros na estante e prova de capa sobre a mesa" },
  alimentacao: { src: "/images/solutions/solucao-embalagens.webp", alt: "Caixa, saco, porta-fritas e papel de bandeja impressos" },
};

const DEFAULT_PHOTO: Photo = {
  src: "/images/institutional/papeis-e-acabamentos.webp",
  alt: "Mostruário de papéis e acabamentos aberto em leque",
};

const PAGE_ESTIMATE: Record<string, string> = {
  "ate-48": "até 48 páginas",
  "48-96": "48 a 96 páginas",
  "96-200": "96 a 200 páginas",
  "200+": "mais de 200 páginas",
};

interface QuoteMockupProps {
  segmento: string;
  produto: string;
  formato: string;
  quantidade: string;
  paginas?: string;
  cores: string;
  material: string;
  acabamento: string[];
  encadernacao?: string;
  className?: string;
}

type Option = { value: string; label: string };

function label(options: Option[] | undefined, value?: string): string | null {
  if (!value || value === "nao-sei") return null;
  return options?.find((o) => o.value === value)?.label ?? null;
}

/** Linha-legenda que descreve a peça conforme as escolhas estruturais */
function caption({ produto, formato, paginas }: Pick<QuoteMockupProps, "produto" | "formato" | "paginas">): string {
  if (!produto) return "Seu material aparece aqui";
  if (produto === "caixa") return label(formatsByProduct.caixa, formato) ?? "Caixa personalizada";
  if (produto === "embalagem") return formato === "wrap" ? "Envoltório" : "Caixa com encaixe";
  if (produto === "folder") return formato.includes("3dobras") ? "3 dobras" : formato ? "2 dobras" : "Folder dobrado";
  if (["livro", "catalogo", "caderno"].includes(produto) && paginas) return PAGE_ESTIMATE[paginas] ?? "";
  if (produto === "rotulo") return "Rolo de rótulos";
  if (produto === "banner") return "Banner com bastão";
  return label(quoteProducts, produto) ?? "";
}

export function QuoteMockup(props: QuoteMockupProps) {
  const { segmento, produto, formato, quantidade, paginas, cores, material, acabamento, encadernacao, className } = props;

  const photo = PRODUCT_PHOTOS[produto] ?? SEGMENT_PHOTOS[segmento] ?? DEFAULT_PHOTO;
  const title = label(quoteProducts, produto) ?? label(segments, segmento) ?? "Monte seu pedido";
  const chips = [
    label(formatsByProduct[produto], formato),
    label(quantities, quantidade) && `${label(quantities, quantidade)} un.`,
    label(pageCounts, paginas),
    label(colorOptions, cores),
    label(materials, material),
    ...acabamento.filter((a) => a !== "sem-acabamento").map((a) => label(finishes, a)),
    label(bindings, encadernacao),
  ].filter((c): c is string => Boolean(c));
  const legend = caption({ produto, formato, paginas });

  const photoLayer = (sizes: string) => (
    <AnimatePresence initial={false}>
      <motion.div
        key={photo.src}
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: easeOutExpo }}
      >
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover" />
      </motion.div>
    </AnimatePresence>
  );

  return (
    <div className={cn("relative", className)} data-testid="quote-mockup">
      {/* Barra compacta — mobile/tablet, fixa no topo durante o formulário */}
      <div className="flex items-center gap-3 lg:hidden">
        <div className="relative size-16 flex-none overflow-hidden bg-carbon/10">{photoLayer("64px")}</div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-carbon">{title}</p>
          <p className="text-spec mt-0.5 truncate text-carbon/60">
            {chips.length ? chips.join(" · ") : legend}
          </p>
        </div>
      </div>

      {/* Cartão completo — desktop */}
      <div className="hidden lg:block">
        <div className="relative aspect-[4/3] overflow-hidden bg-carbon/10">
          {photoLayer("(min-width: 1280px) 480px, 40vw")}
          <span className="text-spec absolute bottom-3 left-3 bg-carbon/80 px-2 py-1 text-white-tech backdrop-blur-sm">
            {legend}
          </span>
        </div>
        <p className="mt-4 text-lg font-semibold tracking-tight text-carbon">{title}</p>
        <ul className="mt-3 flex min-h-8 flex-wrap gap-1.5" aria-label="Escolhas até agora">
          {chips.length ? (
            chips.map((chip) => (
              <li key={chip} className="text-spec border border-carbon/15 bg-paper px-2 py-1 text-carbon/75">
                {chip}
              </li>
            ))
          ) : (
            <li className="text-spec py-1 text-carbon/50">Formato, tiragem e papel aparecem aqui</li>
          )}
        </ul>
      </div>
    </div>
  );
}
