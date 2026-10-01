import type { Metadata } from "next";
import { faqJsonLd, pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { HomeIntro } from "@/components/sections/HomeIntro";
import { SolutionPortals } from "@/components/sections/SolutionPortals";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { NarrativeScroll } from "@/components/sections/NarrativeScroll";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { NationalReach } from "@/components/sections/NationalReach";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { HomeFaq } from "@/components/sections/HomeFaq";
import { HOME_META, homeCta, homeFaq } from "@/data/home";

const homeMeta = pageMetadata({ title: HOME_META.title, description: HOME_META.description, path: "" });

/** Título absoluto: sem o sufixo "— FullGraph" do template, que duplicava a marca */
export const metadata: Metadata = {
  ...homeMeta,
  title: { absolute: HOME_META.title },
  openGraph: { ...homeMeta.openGraph, title: HOME_META.title },
  twitter: { ...homeMeta.twitter, title: HOME_META.title },
};

/*
 * Ordem dos H2 segue a copy aprovada: imprime → por que → como funciona
 * → regiões → orçamento → FAQ. Destaques, narrativa e portfolio ficam
 * intercalados antes de "Regiões atendidas".
 */
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(homeFaq)) }}
      />
      <Hero />
      <HomeIntro />
      <SolutionPortals />
      <WhyChoose />
      <FeaturedProducts />
      <NarrativeScroll />
      <ProcessSection />
      <PortfolioGrid compact />
      <NationalReach />
      <CtaFinal
        title={homeCta.title}
        serifWord={homeCta.serifWord}
        text={homeCta.text}
        quoteLabel={homeCta.quoteLabel}
        whatsappLabel={homeCta.whatsappLabel}
      />
      <HomeFaq />
    </>
  );
}
