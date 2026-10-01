/**
 * Tipos de domínio — preparados para futura integração com CMS/backend.
 * Ver docs/BACKEND-HANDOFF.md.
 */

export type Audience = "empresas" | "livros" | "embalagens";

export type CategorySlug =
  | "livros-e-publicacoes"
  | "catalogos-e-revistas"
  | "materiais-corporativos"
  | "flyers-folders-tabloides"
  | "embalagens-alimentos"
  | "papeis-de-bandeja"
  | "rotulos-e-adesivos"
  | "cadernos-e-agendas"
  | "comunicacao-visual";

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
  audiences: Audience[];
  /** Índice de seção estilo especificação gráfica: "01", "02"… */
  index: string;
}

export type MockupKind = "book" | "box" | "sheet" | "stack" | "roll" | "sign";

/** Foto de produto servida de /public — gerada por IA (conceitual) ou real */
export interface ProductImage {
  /** Caminho absoluto em /public, ex. "/images/products/livros-editora-pequi.webp" */
  src: string;
  /** Texto alternativo objetivo, em pt-BR */
  alt: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/* ---------- Conteúdo rico de produto (Money Pages) ---------- */

/** Trecho inline: texto simples, negrito de abertura ou link interno */
export type InlineText = string | { strong: string } | { link: string; href: string };

/** Texto corrido: string simples ou sequência de trechos inline */
export type RichText = string | readonly InlineText[];

export type ContentBlock =
  | { p: RichText }
  | { ul: readonly RichText[] }
  | { ol: readonly RichText[] };

export interface ContentSection {
  /** Vira H2 — ordem do array = ordem da copy aprovada */
  heading: string;
  blocks: readonly ContentBlock[];
}

/**
 * Copy longa aprovada pelo cliente para uma página de produto.
 * Opcional: produtos sem conteúdo rico mantêm o layout padrão.
 */
export interface ProductContent {
  /** Título absoluto (já inclui a marca) */
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: readonly string[];
  introCta: string;
  sections: readonly ContentSection[];
  /** Seção de orçamento (H2) antes do FAQ */
  closing: {
    heading: string;
    serifWord?: string;
    text: string;
    whatsappLabel: string;
    quoteLabel: string;
  };
  faq: FaqItem[];
}

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  audiences: Audience[];
  /** Frase curta de catálogo */
  tagline: string;
  description: string;
  applications: string[];
  formats: string[];
  materials: string[];
  finishes: string[];
  /** Faixas de tiragem típicas — preço sempre "sob consulta" */
  runRanges: string[];
  specs: ProductSpec[];
  faq: FaqItem[];
  related: string[];
  mockup: MockupKind;
  /** Foto do produto — quando ausente, o ProductMockup procedural é o fallback */
  image?: ProductImage;
  featured?: boolean;
  /** Cor de destaque do mockup procedural (token CSS) */
  accent?: string;
}

/**
 * Projeto conceitual do portfolio: marca fictícia, peça e legenda.
 * Não representa encomenda de cliente real — a seção declara isso
 * uma única vez no cabeçalho ("Projetos conceituais…").
 */
export interface PortfolioItem {
  id: string;
  /** Marca fictícia criada para o projeto */
  brand: string;
  /** Peça impressa apresentada, ex.: "Caixa para hambúrguer" */
  piece: string;
  /** Legenda curta sobre material/acabamento visível na foto */
  caption: string;
  segment: string;
  /** Composição procedural do card — fallback quando não há imagem */
  mockup: MockupKind;
  palette: [string, string];
  image?: ProductImage;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  phone: { display: string; e164: string };
  whatsapp: {
    /** Somente dígitos com DDI, ex. 5561999999999 — vem de env */
    number: string | null;
    /** Mensagem padrão pré-preenchida */
    defaultMessage: string;
  };
  email: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  /** Horário presencial (retirada e visitas) — usado no rodapé, /contato e JSON-LD */
  hours: {
    display: string;
    days: readonly string[];
    opens: string;
    closes: string;
  };
  /** Mensagem sobre o atendimento automático fora do horário presencial */
  autoService: string;
  /** Regiões atendidas, da prioritária para a mais ampla */
  areaServed: readonly { type: "State" | "Country"; name: string }[];
}

/* ---------- Orçamento ---------- */

export type QuoteStepId =
  | "segmento"
  | "produto"
  | "formato"
  | "quantidade"
  | "paginas"
  | "cores"
  | "material"
  | "acabamento"
  | "encadernacao"
  | "prazo"
  | "entrega"
  | "contato"
  | "anexos";

export interface QuoteOption {
  value: string;
  label: string;
  hint?: string;
}

export interface QuoteFormData {
  segmento: string;
  produto: string;
  formato: string;
  formatoCustom?: string;
  quantidade: string;
  paginas?: string;
  cores: string;
  material: string;
  acabamento: string[];
  encadernacao?: string;
  prazo: string;
  cidadeUf: string;
  cep?: string;
  nome: string;
  empresa?: string;
  email: string;
  telefone: string;
  observacoes?: string;
  /** Nomes de arquivos selecionados — upload real virá do backend */
  anexos: string[];
}
