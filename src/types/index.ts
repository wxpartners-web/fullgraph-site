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

export interface ProductSpec {
  label: string;
  value: string;
}

export interface FaqItem {
  question: string;
  answer: string;
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
  featured?: boolean;
  /** Cor de destaque do mockup procedural (token CSS) */
  accent?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  segment: string;
  productType: string;
  /** Composição procedural do card (sem fotos de banco) */
  mockup: MockupKind;
  palette: [string, string];
  /** Dados provisórios — substituir por cases reais (BACKEND-HANDOFF) */
  placeholder: true;
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
