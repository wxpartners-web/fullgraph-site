"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, FileText } from "lucide-react";
import { hasWhatsApp, whatsappUrl } from "@/lib/whatsapp";
import { site } from "@/data/site";

/**
 * Barra inferior discreta no mobile — prioridade de conversão nº 1.
 * Oculta na página de orçamento (o wizard tem os próprios CTAs).
 */
export function MobileCtaBar() {
  const pathname = usePathname();
  if (pathname.startsWith("/orcamento")) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] grid grid-cols-2 border-t border-white-tech/10 bg-carbon/92 backdrop-blur-md md:hidden"
      data-testid="mobile-cta-bar"
    >
      <a
        href={hasWhatsApp() ? whatsappUrl() : `tel:${site.phone.e164}`}
        target={hasWhatsApp() ? "_blank" : undefined}
        rel={hasWhatsApp() ? "noopener noreferrer" : undefined}
        className="flex h-14 items-center justify-center gap-2 text-sm font-medium text-white-tech active:bg-white-tech/5"
        data-testid="mobile-whatsapp"
      >
        <MessageCircle aria-hidden="true" className="size-4 text-ink" />
        {hasWhatsApp() ? "WhatsApp" : "Ligar"}
      </a>
      <Link
        href="/orcamento"
        className="flex h-14 items-center justify-center gap-2 bg-ink text-sm font-medium text-carbon active:bg-ink-2"
      >
        <FileText aria-hidden="true" className="size-4" />
        Orçamento
      </Link>
    </div>
  );
}
