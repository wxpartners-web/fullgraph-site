"use client";

import { useEffect } from "react";
import Script from "next/script";
import {
  UMAMI_SCRIPT_URL,
  UMAMI_WEBSITE_ID,
  eventoDoLink,
  registrarEvento,
} from "@/lib/analytics";

const BOTAO_DO_MEIO = 1;

/**
 * Carrega a medição de acessos e registra como evento todo clique em link
 * de contato: WhatsApp, telefone, e-mail e o envio do pedido de orçamento.
 */
export function Analytics() {
  useEffect(() => {
    function registrarClique(event: MouseEvent) {
      // auxclick também dispara no botão direito, que não abre o link
      if (event.type === "auxclick" && event.button !== BOTAO_DO_MEIO) return;
      const link = (event.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;
      const evento = eventoDoLink(link.href, link.dataset.evento);
      if (evento) registrarEvento(evento);
    }
    document.addEventListener("click", registrarClique, true);
    document.addEventListener("auxclick", registrarClique, true);
    return () => {
      document.removeEventListener("click", registrarClique, true);
      document.removeEventListener("auxclick", registrarClique, true);
    };
  }, []);

  if (!UMAMI_WEBSITE_ID) return null;
  return <Script src={UMAMI_SCRIPT_URL} data-website-id={UMAMI_WEBSITE_ID} strategy="afterInteractive" />;
}
