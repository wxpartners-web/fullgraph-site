import { z } from "zod";
import { PAGED_PRODUCTS, BOUND_PRODUCTS } from "@/data/quote";

/**
 * Validação do orçamento (Zod). O schema completo valida no envio;
 * o wizard valida campo a campo por etapa via RHF `trigger`.
 */
export const quoteSchema = z
  .object({
    segmento: z.string().min(1, "Escolha o seu segmento."),
    produto: z.string().min(1, "Escolha um produto."),
    formato: z.string().min(1, "Escolha um formato."),
    formatoCustom: z.string().optional(),
    quantidade: z.string().min(1, "Informe a quantidade."),
    paginas: z.string().optional(),
    cores: z.string().min(1, "Escolha as cores de impressão."),
    material: z.string().min(1, "Escolha o papel ou material."),
    acabamento: z.array(z.string()).min(1, "Marque ao menos uma opção (há a opção “sem acabamento”)."),
    encadernacao: z.string().optional(),
    prazo: z.string().min(1, "Escolha um prazo."),
    cidadeUf: z.string().min(2, "Informe cidade e UF de entrega."),
    cep: z
      .string()
      .optional()
      .refine((v) => !v || /^\d{5}-?\d{3}$/.test(v), "CEP no formato 00000-000."),
    nome: z.string().min(2, "Informe seu nome."),
    empresa: z.string().optional(),
    email: z.string().email("Informe um e-mail válido."),
    telefone: z
      .string()
      .min(10, "Informe telefone com DDD.")
      .refine((v) => /^[\d\s()+-]{10,}$/.test(v), "Use apenas números, espaços e parênteses."),
    observacoes: z.string().optional(),
    anexos: z.array(z.string()),
  })
  .superRefine((data, ctx) => {
    if (PAGED_PRODUCTS.has(data.produto) && !data.paginas) {
      ctx.addIssue({
        code: "custom",
        path: ["paginas"],
        message: "Informe a faixa de páginas.",
      });
    }
    if (BOUND_PRODUCTS.has(data.produto) && !data.encadernacao) {
      ctx.addIssue({
        code: "custom",
        path: ["encadernacao"],
        message: "Escolha a encadernação ou dobra.",
      });
    }
    if (data.formato === "custom" && !data.formatoCustom?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["formatoCustom"],
        message: "Descreva o formato desejado.",
      });
    }
  });

export type QuoteSchema = z.infer<typeof quoteSchema>;

export const quoteDefaults: QuoteSchema = {
  segmento: "",
  produto: "",
  formato: "",
  formatoCustom: "",
  quantidade: "",
  paginas: "",
  cores: "",
  material: "",
  acabamento: [],
  encadernacao: "",
  prazo: "",
  cidadeUf: "",
  cep: "",
  nome: "",
  empresa: "",
  email: "",
  telefone: "",
  observacoes: "",
  anexos: [],
};
