"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "fg-entrada";
const WHATSAPP_HOST = "wa.me";
const ORIGIN_MARK = "(Página: ";

interface Entrada {
  path: string;
  via: string;
}

/** Domínio de quem trouxe o visitante na primeira página da sessão, ou "acesso direto" */
function viaDoReferrer(): string {
  try {
    const host = new URL(document.referrer).hostname.replace(/^www\./, "");
    if (!host || host === window.location.hostname) return "acesso direto";
    return host;
  } catch {
    return "acesso direto";
  }
}

function lerEntrada(): Entrada | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Entrada) : null;
  } catch {
    return null;
  }
}

function salvarEntrada(entrada: Entrada): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(entrada));
  } catch {
    // sessionStorage bloqueado: a mensagem segue só com a página atual
  }
}

function nomeDaPagina(path: string): string {
  return path === "/" ? "início" : path;
}

/** Linha anexada à mensagem para o atendimento saber de onde o lead veio */
function linhaDeOrigem(path: string, entrada: Entrada | null): string {
  const partes = [`${ORIGIN_MARK}${nomeDaPagina(path)}`];
  if (entrada) {
    if (entrada.path !== path) partes.push(`entrada: ${nomeDaPagina(entrada.path)}`);
    partes.push(`via: ${entrada.via}`);
  }
  return `\n\n${partes.join(" · ")})`;
}

/**
 * Anexa a página de origem a toda mensagem de WhatsApp aberta pelo site.
 * Registra a página de entrada e o site de origem (só o domínio) uma vez por sessão
 * e reescreve o parâmetro `text` dos links wa.me no momento do clique.
 */
export function WhatsAppOrigin() {
  const pathname = usePathname();

  useEffect(() => {
    if (!lerEntrada()) salvarEntrada({ path: pathname, via: viaDoReferrer() });
  }, [pathname]);

  useEffect(() => {
    function anexarOrigem(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;
      let url: URL;
      try {
        url = new URL(link.href);
      } catch {
        return;
      }
      if (url.hostname !== WHATSAPP_HOST) return;
      const texto = url.searchParams.get("text") ?? "";
      if (texto.includes(ORIGIN_MARK)) return;
      url.searchParams.set("text", texto + linhaDeOrigem(window.location.pathname, lerEntrada()));
      link.href = url.toString();
    }
    document.addEventListener("click", anexarOrigem, true);
    document.addEventListener("auxclick", anexarOrigem, true);
    return () => {
      document.removeEventListener("click", anexarOrigem, true);
      document.removeEventListener("auxclick", anexarOrigem, true);
    };
  }, []);

  return null;
}
