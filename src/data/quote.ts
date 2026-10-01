import type { QuoteOption, QuoteStepId } from "@/types";

export type { QuoteOption };

/**
 * Opções do formulário de orçamento — dados separados da camada visual
 * para futura administração via CMS/backend.
 */

export const segments: QuoteOption[] = [
  { value: "empresa", label: "Empresa / grandes tiragens", hint: "Materiais corporativos, campanhas e volume" },
  { value: "editorial", label: "Autor ou editora", hint: "Livros, revistas e publicações" },
  { value: "alimentacao", label: "Restaurante / alimentação", hint: "Embalagens, bandejas e rótulos" },
  { value: "outro", label: "Outro projeto", hint: "Conte para a gente no final" },
];

export const quoteProducts: QuoteOption[] = [
  { value: "livro", label: "Livro ou publicação" },
  { value: "catalogo", label: "Catálogo ou revista" },
  { value: "flyer", label: "Flyer ou panfleto" },
  { value: "folder", label: "Folder dobrado" },
  { value: "caixa", label: "Caixas personalizadas" },
  { value: "embalagem", label: "Embalagem para alimentos" },
  { value: "bandeja", label: "Papel de bandeja" },
  { value: "rotulo", label: "Rótulos ou adesivos" },
  { value: "caderno", label: "Caderno ou agenda" },
  { value: "papelaria", label: "Papelaria corporativa" },
  { value: "banner", label: "Banner / grande formato" },
  { value: "outro", label: "Outro produto" },
];

/** Produtos em que número de páginas se aplica */
export const PAGED_PRODUCTS = new Set(["livro", "catalogo", "caderno"]);
/** Produtos com encadernação/dobra */
export const BOUND_PRODUCTS = new Set(["livro", "catalogo", "caderno", "folder"]);

export const formatsByProduct: Record<string, QuoteOption[]> = {
  livro: [
    { value: "14x21", label: "14 × 21 cm" },
    { value: "16x23", label: "16 × 23 cm" },
    { value: "a5", label: "A5 (14,8 × 21)" },
    { value: "custom", label: "Outro formato" },
  ],
  catalogo: [
    { value: "a4", label: "A4 (21 × 29,7)" },
    { value: "21x21", label: "21 × 21 cm" },
    { value: "a5", label: "A5 (14,8 × 21)" },
    { value: "custom", label: "Outro formato" },
  ],
  flyer: [
    { value: "10x15", label: "10 × 15 cm" },
    { value: "a5", label: "A5 (14,8 × 21)" },
    { value: "a4", label: "A4 (21 × 29,7)" },
    { value: "custom", label: "Outro formato" },
  ],
  folder: [
    { value: "a4-2dobras", label: "A4 aberto, 2 dobras" },
    { value: "a4-3dobras", label: "A4 aberto, 3 dobras" },
    { value: "a3", label: "A3 aberto" },
    { value: "custom", label: "Outro formato" },
  ],
  caixa: [
    { value: "rigida", label: "Caixa rígida" },
    { value: "cartonada", label: "Caixa cartonada (cartucho)" },
    { value: "luva-cinta", label: "Luva ou cinta" },
    { value: "ondulado", label: "Papelão ondulado" },
    { value: "custom", label: "Outro modelo / faca sob medida" },
  ],
  embalagem: [
    { value: "caixa-12", label: "Caixa 12 × 12 × 8 cm" },
    { value: "caixa-14", label: "Caixa 14 × 14 × 8 cm" },
    { value: "wrap", label: "Envoltório / wrap" },
    { value: "custom", label: "Faca sob medida" },
  ],
  bandeja: [
    { value: "30x40", label: "30 × 40 cm" },
    { value: "315x44", label: "31,5 × 44 cm" },
    { value: "custom", label: "Outro formato" },
  ],
  rotulo: [
    { value: "redondo", label: "Redondo" },
    { value: "retangular", label: "Retangular" },
    { value: "especial", label: "Recorte especial" },
  ],
  caderno: [
    { value: "a5", label: "A5 (14,8 × 21)" },
    { value: "17x24", label: "17 × 24 cm" },
    { value: "a4", label: "A4" },
  ],
  papelaria: [
    { value: "kit", label: "Kit completo" },
    { value: "timbrado", label: "Papel timbrado" },
    { value: "envelope", label: "Envelopes" },
    { value: "pasta", label: "Pastas" },
  ],
  banner: [
    { value: "60x90", label: "60 × 90 cm" },
    { value: "80x120", label: "80 × 120 cm" },
    { value: "custom", label: "Medida sob demanda" },
  ],
  outro: [{ value: "custom", label: "Descrever no final" }],
};

export const quantities: QuoteOption[] = [
  { value: "ate-100", label: "Até 100" },
  { value: "100-500", label: "100 a 500" },
  { value: "500-1000", label: "500 a 1.000" },
  { value: "1000-5000", label: "1.000 a 5.000" },
  { value: "5000-20000", label: "5.000 a 20.000" },
  { value: "20000+", label: "Acima de 20.000" },
];

export const pageCounts: QuoteOption[] = [
  { value: "ate-48", label: "Até 48 páginas" },
  { value: "48-96", label: "48 a 96" },
  { value: "96-200", label: "96 a 200" },
  { value: "200+", label: "Mais de 200" },
];

export const colorOptions: QuoteOption[] = [
  { value: "4x4", label: "Colorido frente e verso (4×4)" },
  { value: "4x0", label: "Colorido só frente (4×0)" },
  { value: "1x1", label: "Preto e branco (1×1)" },
  { value: "nao-sei", label: "Preciso de orientação" },
];

export const materials: QuoteOption[] = [
  { value: "couche-brilho", label: "Couché brilho", hint: "Cores vivas, toque liso" },
  { value: "couche-fosco", label: "Couché fosco", hint: "Elegante, sem reflexo" },
  { value: "offset", label: "Offset", hint: "Para escrita e leitura" },
  { value: "polen", label: "Pólen", hint: "Miolo de livro, leitura confortável" },
  { value: "kraft", label: "Kraft", hint: "Natural, artesanal" },
  { value: "cartao", label: "Papel-cartão", hint: "Embalagens e capas" },
  { value: "nao-sei", label: "Preciso de orientação" },
];

export const finishes: QuoteOption[] = [
  { value: "laminacao-fosca", label: "Laminação fosca" },
  { value: "laminacao-brilho", label: "Laminação brilho" },
  { value: "verniz-localizado", label: "Verniz localizado" },
  { value: "hot-stamping", label: "Hot stamping" },
  { value: "sem-acabamento", label: "Sem acabamento especial" },
];

export const bindings: QuoteOption[] = [
  { value: "brochura", label: "Brochura (lombada quadrada)" },
  { value: "grampo", label: "Grampo canoa" },
  { value: "espiral", label: "Espiral / wire-o" },
  { value: "dobra", label: "Somente dobra" },
  { value: "nao-sei", label: "Preciso de orientação" },
];

export const deadlines: QuoteOption[] = [
  { value: "urgente", label: "Para já", hint: "Preciso o quanto antes" },
  { value: "15-dias", label: "Até 15 dias" },
  { value: "30-dias", label: "Até 30 dias" },
  { value: "flexivel", label: "Flexível", hint: "Priorizo custo" },
];

/** Rótulos legíveis para montar o resumo e a mensagem de WhatsApp */
export const stepLabels: Record<QuoteStepId, string> = {
  segmento: "Segmento",
  produto: "Produto",
  formato: "Formato",
  quantidade: "Quantidade",
  paginas: "Páginas",
  cores: "Cores",
  material: "Material",
  acabamento: "Acabamento",
  encadernacao: "Encadernação",
  prazo: "Prazo",
  entrega: "Entrega",
  contato: "Contato",
  anexos: "Arquivos",
};

export function optionLabel(options: QuoteOption[], value: string): string {
  return options.find((o) => o.value === value)?.label ?? value;
}
