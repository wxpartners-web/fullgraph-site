import type { QuoteSchema } from "./quote-schema";
import {
  segments,
  quoteProducts,
  formatsByProduct,
  quantities,
  pageCounts,
  colorOptions,
  materials,
  finishes,
  bindings,
  deadlines,
  optionLabel,
} from "@/data/quote";

/**
 * PONTO DE INTEGRAÇÃO COM BACKEND (docs/BACKEND-HANDOFF.md).
 * Hoje o envio acontece via WhatsApp/e-mail com a mensagem
 * montada abaixo. Quando o backend existir, substitua o corpo
 * de `submitQuote` por um POST para a API mantendo a assinatura.
 */

export interface QuoteSummaryLine {
  label: string;
  value: string;
}

export function buildQuoteSummary(data: QuoteSchema): QuoteSummaryLine[] {
  const lines: QuoteSummaryLine[] = [
    { label: "Segmento", value: optionLabel(segments, data.segmento) },
    { label: "Produto", value: optionLabel(quoteProducts, data.produto) },
    {
      label: "Formato",
      value:
        data.formato === "custom" && data.formatoCustom
          ? data.formatoCustom
          : optionLabel(formatsByProduct[data.produto] ?? [], data.formato),
    },
    { label: "Quantidade", value: optionLabel(quantities, data.quantidade) },
  ];
  if (data.paginas) lines.push({ label: "Páginas", value: optionLabel(pageCounts, data.paginas) });
  lines.push(
    { label: "Cores", value: optionLabel(colorOptions, data.cores) },
    { label: "Material", value: optionLabel(materials, data.material) },
    {
      label: "Acabamento",
      value: data.acabamento.map((f) => optionLabel(finishes, f)).join(", ") || "—",
    }
  );
  if (data.encadernacao)
    lines.push({ label: "Encadernação", value: optionLabel(bindings, data.encadernacao) });
  lines.push(
    { label: "Prazo", value: optionLabel(deadlines, data.prazo) },
    { label: "Entrega", value: data.cep ? `${data.cidadeUf} · CEP ${data.cep}` : data.cidadeUf }
  );
  if (data.anexos.length > 0) lines.push({ label: "Arquivos", value: data.anexos.join(", ") });
  return lines;
}

export function buildWhatsAppMessage(data: QuoteSchema): string {
  const summary = buildQuoteSummary(data)
    .map((l) => `• ${l.label}: ${l.value}`)
    .join("\n");
  const contato = [
    `• Nome: ${data.nome}`,
    data.empresa ? `• Empresa: ${data.empresa}` : null,
    `• E-mail: ${data.email}`,
    `• Telefone: ${data.telefone}`,
  ]
    .filter(Boolean)
    .join("\n");
  return [
    "*Pedido de orçamento — site Fullgraph*",
    "",
    summary,
    "",
    "*Contato*",
    contato,
    data.observacoes ? `\n*Observações*\n${data.observacoes}` : "",
    data.anexos.length > 0 ? "\n(Envio os arquivos na sequência desta conversa.)" : "",
  ]
    .join("\n")
    .trim();
}

/**
 * Futuro: POST /api/orcamento (ver docs/BACKEND-HANDOFF.md).
 * Retorna sucesso imediato no frontend-only.
 */
export async function submitQuote(data: QuoteSchema): Promise<{ ok: boolean }> {
  if (process.env.NODE_ENV === "development") {
    console.info("[fullgraph] orçamento pronto para integração backend:", data);
  }
  return { ok: true };
}
