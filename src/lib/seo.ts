import type { Metadata } from "next";
import { site } from "@/data/site";

interface PageMeta {
  title: string;
  description: string;
  path: string;
  /** Imagem de compartilhamento (JPEG 1200×630 em /public/og); padrão do site se omitida */
  image?: string;
  /** Título já contém a marca: ignora o template "%s — FullGraph" e o sufixo em og/twitter */
  absoluteTitle?: boolean;
}

/** Prévia padrão de links (WhatsApp, redes sociais) — gerada por scripts/make-og-images.mjs */
export const DEFAULT_OG_IMAGE = {
  url: "/og/fullgraph.jpg",
  width: 1200,
  height: 630,
  alt: "FullGraph — A sua ideia, impressa com peso e presença",
  type: "image/jpeg",
};

export function pageMetadata({ title, description, path, image, absoluteTitle }: PageMeta): Metadata {
  const url = `${site.url}${path}`;
  const socialTitle = absoluteTitle ? title : `${title} — ${site.name}`;
  const ogImage = image ? { ...DEFAULT_OG_IMAGE, url: image, alt: socialTitle } : DEFAULT_OG_IMAGE;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: site.name,
      locale: "pt_BR",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImage.url],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#empresa`,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phone.e164,
    email: site.email,
    slogan: site.tagline,
    foundingDate: site.foundingYear,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.neighborhood}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "BR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: site.hours.days,
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
    areaServed: site.areaServed.map((a) => ({ "@type": a.type, name: a.name })),
  };
}

type AreaServed = Record<string, unknown>;

/** Regiões do site (DF, GO, Brasil) no formato schema.org */
function siteAreaServed(): AreaServed[] {
  return site.areaServed.map((a) => ({ "@type": a.type, name: a.name }));
}

function buildService(s: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areaServed: readonly AreaServed[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    url: `${site.url}${s.path}`,
    serviceType: s.serviceType,
    provider: { "@id": `${site.url}/#empresa` },
    areaServed: s.areaServed,
    offers: {
      "@type": "Offer",
      description: "Orçamento personalizado conforme formato, papel, acabamento e tiragem",
      url: `${site.url}/orcamento`,
    },
  };
}

/**
 * Cada produto é impresso sob encomenda e orçado caso a caso, então vai como
 * Service (sem preço) em vez de Product — Product sem preço real exige price: 0,
 * que o Google lê como "grátis".
 */
export function serviceJsonLd(p: { name: string; description: string; slug: string }) {
  return buildService({
    name: p.name,
    description: p.description,
    path: `/produtos/${p.slug}`,
    serviceType: p.name,
    areaServed: siteAreaServed(),
  });
}

/** Cidade atendida a partir de Brasília — sem endereço local (o provider segue em Brasília) */
export function cityAreaServed(city: string, state: string): AreaServed {
  return {
    "@type": "City",
    name: city,
    containedInPlace: { "@type": "State", name: state },
  };
}

/**
 * Service das páginas longas (soluções e cidades). `serviceType` é a KW
 * principal; sem `areaServed`, valem as regiões do site (DF, GO, Brasil).
 */
export function pageServiceJsonLd(p: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areaServed?: readonly AreaServed[];
}) {
  return buildService({ ...p, areaServed: p.areaServed ?? siteAreaServed() });
}

export function faqJsonLd(faq: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Trilha de navegação — `path` relativo à raiz ("" = início) */
export function breadcrumbJsonLd(items: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
