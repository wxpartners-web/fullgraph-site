import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { SolutionPortals } from "@/components/sections/SolutionPortals";
import { NarrativeScroll } from "@/components/sections/NarrativeScroll";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { NationalReach } from "@/components/sections/NationalReach";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { site } from "@/data/site";

const HOME_TITLE = `Gráfica em Brasília-DF: livros, embalagens e impressão | ${site.name}`;
const homeMeta = pageMetadata({ title: HOME_TITLE, description: site.description, path: "" });

/** Título absoluto: sem o sufixo "— Fullgraph" do template, que duplicava a marca */
export const metadata: Metadata = {
  ...homeMeta,
  title: { absolute: HOME_TITLE },
  openGraph: { ...homeMeta.openGraph, title: HOME_TITLE },
  twitter: { ...homeMeta.twitter, title: HOME_TITLE },
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
