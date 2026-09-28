import type { Metadata } from "next";
import { site } from "@/data/site";

interface PageMeta {
  title: string;
  description: string;
  path: string;
  /** Imagem de compartilhamento (JPEG 1200×630 em /public/og); padrão do site se omitida */
  image?: string;
}

/** Prévia padrão de links (WhatsApp, redes sociais) — gerada por scripts/make-og-images.mjs */
export const DEFAULT_OG_IMAGE = {
  url: "/og/fullgraph.jpg",
  width: 1200,
  height: 630,
  alt: "Fullgraph — A sua ideia, impressa com peso e presença",
  type: "image/jpeg",
};

export function pageMetadata({ title, description, path, image }: PageMeta): Metadata {
  const url = `${site.url}${path}`;
  const ogImage = image ? { ...DEFAULT_OG_IMAGE, url: image, alt: `${title} — ${site.name}` } : DEFAULT_OG_IMAGE;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} — ${site.name}`,
      description,
      url,
      siteName: site.name,
      locale: "pt_BR",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.name}`,
      description,
      images: [ogImage.url],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.legalName,
    alternateName: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone.e164,
    email: site.email,
    slogan: site.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.neighborhood}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "BR",
    },
    areaServed: { "@type": "Country", name: "Brasil" },
  };
}

export function productJsonLd(p: { name: string; description: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    url: `${site.url}/produtos/${p.slug}`,
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "Offer",
      priceSpecification: { "@type": "PriceSpecification", price: 0, priceCurrency: "BRL" },
      availability: "https://schema.org/InStock",
      description: "Sob consulta — orçamento personalizado",
    },
  };
}

export function faqJsonLd(faq: { question: string; answer: string }[]) {
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
