import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cityPages, getCityPage } from "@/data/cities";
import { pageMetadata } from "@/lib/seo";
import { LandingPageView } from "@/components/sections/LandingPageView";

interface CidadePageProps {
  params: Promise<{ cidade: string }>;
}

/* Só as cidades listadas viram rota: qualquer outro caminho de primeiro
   nível continua em 404 (as rotas estáticas têm prioridade sobre esta). */
export const dynamicParams = false;

export function generateStaticParams() {
  return cityPages.map((c) => ({ cidade: c.slug }));
}

export async function generateMetadata({ params }: CidadePageProps): Promise<Metadata> {
  const { cidade } = await params;
  const page = getCityPage(cidade);
  if (!page) return {};
  return pageMetadata({
    title: page.content.metaTitle,
    description: page.content.metaDescription,
    path: page.path,
    image: page.ogImage,
    absoluteTitle: true,
  });
}

export default async function CidadePage({ params }: CidadePageProps) {
  const { cidade } = await params;
  const page = getCityPage(cidade);
  if (!page) notFound();

  return (
    <LandingPageView
      page={page}
      crumbs={[
        { name: "Início", path: "" },
        { name: page.breadcrumbName, path: page.path },
      ]}
    />
  );
}
