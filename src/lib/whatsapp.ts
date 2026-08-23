import { site } from "@/data/site";

/**
 * Integração frontend com WhatsApp.
 * O número vem de NEXT_PUBLIC_WHATSAPP_NUMBER (ver .env.example).
 * Sem número configurado, os CTAs degradam para telefone/e-mail.
 */

export function hasWhatsApp(): boolean {
  return Boolean(site.whatsapp.number);
}

export function whatsappUrl(message?: string): string {
  const text = encodeURIComponent(message ?? site.whatsapp.defaultMessage);
  if (site.whatsapp.number) {
    return `https://wa.me/${site.whatsapp.number}?text=${text}`;
  }
  // Fallback: telefone fixo real da Fullgraph
  return `tel:${site.phone.e164}`;
}

/** Rótulo do CTA conforme o canal disponível */
export function whatsappCtaLabel(): string {
  return hasWhatsApp() ? "Orçamento no WhatsApp" : `Ligar ${site.phone.display}`;
}
