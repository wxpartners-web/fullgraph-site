import { pageMetadata } from "@/lib/seo";
import { embalagensPage as page } from "@/data/solution-pages";
import { LandingPageView } from "@/components/sections/LandingPageView";
import { SolutionProducts } from "@/components/sections/SolutionProducts";

export const metadata = pageMetadata({
  title: page.content.metaTitle,
  description: page.content.metaDescription,
  path: page.path,
  absoluteTitle: true,
});

export default function EmbalagensPage() {
  return (
    <LandingPageView
      page={page}
      crumbs={[
        { name: "Início", path: "" },
        { name: "Soluções", path: "/#solucoes" },
        { name: page.breadcrumbName, path: page.path },
      ]}
    >
      <SolutionProducts audience="embalagens" />
    </LandingPageView>
  );
}
