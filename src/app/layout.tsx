import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { BrandIntro } from "@/components/motion/BrandIntro";
import { LenisProvider } from "@/components/motion/LenisProvider";
import { localBusinessJsonLd } from "@/lib/seo";

/* Direção tipográfica editorial (passe visual pós-Gate 5):
   Newsreader (serif editorial, fonte variável com eixo óptico) para
   display/H1/títulos; IBM Plex Sans para subtítulos, corpo, nav e
   CTAs — a Plex é uma família desenhada para sistemas técnicos, irmã
   do Plex Mono que já marca as specs gráficas do site. Self-hosted
   via next/font: zero requisição externa no runtime. */
const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  subsets: ["latin"],
  axes: ["opsz"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Impressão, livros e embalagens para todo o Brasil`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "gráfica",
    "impressão de livros",
    "embalagens para alimentos",
    "grandes tiragens",
    "catálogos",
    "Brasília",
  ],
  openGraph: {
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${plexSans.variable} ${newsreader.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <BrandIntro />
        <LenisProvider>
          <Header />
          <main id="conteudo" className="flex-1 scroll-mt-[var(--header-h)]">
            {children}
          </main>
          <Footer />
        </LenisProvider>
        <MobileCtaBar />
      </body>
    </html>
  );
}
