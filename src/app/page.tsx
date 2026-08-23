import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SolutionPortals } from "@/components/sections/SolutionPortals";
import { NarrativeScroll } from "@/components/sections/NarrativeScroll";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { NationalReach } from "@/components/sections/NationalReach";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} — Impressão, livros e embalagens para todo o Brasil`,
  description: site.description,
  alternates: { canonical: site.url },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SolutionPortals />
      <NarrativeScroll />
      <FeaturedProducts />
      <ProcessSection />
      <PortfolioGrid compact />
      <NationalReach />
      <CtaFinal />
    </>
  );
}
