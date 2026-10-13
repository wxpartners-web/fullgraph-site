/**
 * Medição de acessos com Umami: sem cookies e sem identificar o visitante.
 * O script só entra na página quando NEXT_PUBLIC_UMAMI_WEBSITE_ID existe —
 * a variável fica apenas no ambiente de produção, para que testes,
 * previews e desenvolvimento local não contem como visita.
 */
export const UMAMI_SCRIPT_URL = "https://cloud.umami.is/script.js";
export const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || null;

/** Evento dos links que concluem o pedido de orçamento (via `data-evento`) */
export const EVENTO_ORCAMENTO = "orcamento-enviado";

const WHATSAPP_HOST = "wa.me";

type CanalDeContato = "whatsapp" | "telefone" | "email";

const EVENTO_POR_CANAL: Record<CanalDeContato, string> = {
  whatsapp: "clique-whatsapp",
  telefone: "clique-telefone",
  email: "clique-email",
};

export interface EventoDeContato {
  nome: string;
  dados?: Record<string, string>;
}

declare global {
  interface Window {
    umami?: { track: (nome: string, dados?: Record<string, string>) => void };
  }
}

function canalDoLink(href: string): CanalDeContato | null {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return null;
  }
  if (url.hostname === WHATSAPP_HOST) return "whatsapp";
  if (url.protocol === "tel:") return "telefone";
  if (url.protocol === "mailto:") return "email";
  return null;
}

/**
 * Evento de um link de contato, ou `null` para os demais links.
 * Um link com evento declarado (ex.: o envio do orçamento) usa esse nome
 * e leva o canal como dado, em vez de contar como clique avulso.
 */
export function eventoDoLink(href: string, eventoDeclarado?: string): EventoDeContato | null {
  const canal = canalDoLink(href);
  if (!canal) return null;
  if (eventoDeclarado) return { nome: eventoDeclarado, dados: { canal } };
  return { nome: EVENTO_POR_CANAL[canal] };
}

/** Sem o script (dev, preview ou bloqueador de anúncio) não há o que registrar */
export function registrarEvento(evento: EventoDeContato): void {
  window.umami?.track(evento.nome, evento.dados);
}
