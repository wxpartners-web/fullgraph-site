import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { footerNav, footerRegions } from "@/data/navigation";
import { site } from "@/data/site";
import { InkButton } from "@/components/ui/InkButton";
import { hasWhatsApp, whatsappUrl, whatsappCtaLabel } from "@/lib/whatsapp";
import type { NavItem } from "@/types";

function FooterLinks({ group }: { group: { title: string; items: NavItem[] } }) {
  return (
    <nav aria-label={group.title}>
      <p className="text-spec mb-4 text-steel-2">{group.title}</p>
      <ul className="space-y-2.5">
        {group.items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-steel transition-colors duration-[var(--dur-micro)] hover:text-white-tech"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="grain border-t border-white-tech/10 bg-carbon-2">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          {/* Marca */}
          <div>
            <Image
              src="/brand/fullgraph-logo-light.png"
              alt={`${site.name} — ${site.tagline}`}
              width={185}
              height={70}
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-steel">
              {site.description}
            </p>
            <p className="text-spec mt-6 text-steel-2">
              Impresso em Brasília · Entregue no Brasil
            </p>
          </div>

          {footerNav.map((group, i) => (
            <div key={group.title}>
              <FooterLinks group={group} />
              {/* Cidades atendidas entram na primeira coluna, sem criar coluna nova */}
              {i === 0 && (
                <div className="mt-8">
                  <FooterLinks group={footerRegions} />
                </div>
              )}
            </div>
          ))}

          {/* Contato */}
          <div>
            <p className="text-spec mb-4 text-steel-2">Contato</p>
            <ul className="space-y-3 text-sm text-steel">
              <li className="flex gap-2.5">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 flex-none text-steel-2" />
                <span>{site.address.full}</span>
              </li>
              <li className="flex gap-2.5">
                <Phone aria-hidden="true" className="mt-0.5 size-4 flex-none text-steel-2" />
                <a href={`tel:${site.phone.e164}`} className="hover:text-white-tech">
                  {site.phone.display}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail aria-hidden="true" className="mt-0.5 size-4 flex-none text-steel-2" />
                <a href={`mailto:${site.email}`} className="break-all hover:text-white-tech">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Clock aria-hidden="true" className="mt-0.5 size-4 flex-none text-steel-2" />
                <span>{site.hours.display}</span>
              </li>
            </ul>
            <div className="mt-6">
              <InkButton
                href={whatsappUrl()}
                external={hasWhatsApp()}
                variant="outline"
                size="md"
                data-testid="footer-whatsapp"
              >
                {whatsappCtaLabel()}
              </InkButton>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white-tech/10 pt-6 text-xs text-steel-2 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName} — {site.tagline}.
          </p>
          <p className="text-spec">CMYK · Offset · Digital · Grande formato</p>
        </div>
      </div>
      {/* Espaço para a barra de CTA mobile */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </footer>
  );
}
