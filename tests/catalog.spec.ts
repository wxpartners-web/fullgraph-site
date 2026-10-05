import { test, expect } from "@playwright/test";

test("catálogo lista todas as famílias e abre um produto", async ({ page }) => {
  await page.goto("/produtos");

  // trilho de categorias
  await expect(page.getByRole("navigation", { name: "Categorias" })).toBeVisible();

  // card abre página do produto
  await page.getByTestId("product-card-embalagens-para-hamburguer").click();
  await expect(page).toHaveURL(/\/produtos\/embalagens-para-hamburguer$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/Embalagens para hambúrguer/i);

  // hero do produto com mockup e specs
  await expect(page.getByTestId("product-hero-mockup")).toBeVisible();
  await expect(page.getByText("Sob consulta").first()).toBeVisible();
});

test("página de produto tem FAQ, relacionados e CTA de orçamento", async ({ page }) => {
  await page.goto("/produtos/impressao-de-livros");

  // FAQ abre
  const faq = page.locator("details").first();
  await faq.locator("summary").click();
  await expect(faq).toHaveAttribute("open", "");

  // relacionados
  await expect(page.getByText("Quem pede este, também pede")).toBeVisible();

  // CTA para orçamento — Money Page usa a seção "Solicite o orçamento" (copy aprovada)
  await page.getByTestId("cta-final-orcamento").click();
  await expect(page).toHaveURL(/\/orcamento$/);
});

test("produto sem copy longa mantém CTA de orçamento no hero", async ({ page }) => {
  await page.goto("/produtos/folders-e-dobrados");
  await page.getByTestId("product-cta-orcamento").click();
  await expect(page).toHaveURL(/\/orcamento$/);
});

test("nenhum preço fictício é exibido no catálogo", async ({ page }) => {
  await page.goto("/produtos");
  const body = await page.textContent("body");
  expect(body).not.toMatch(/R\$\s*\d/);
});

test("banners linkam a página de comunicação visual", async ({ page }) => {
  await page.goto("/produtos/banners-e-grandes-formatos");
  await page.getByRole("link", { name: "empresa de comunicação visual" }).click();
  await expect(page).toHaveURL(/\/produtos\/comunicacao-visual$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    /Empresa de comunicação visual em Brasília/
  );
});

test("papelaria institucional não publica medidas de pasta e aponta para a página de pastas", async ({ page }) => {
  await page.goto("/produtos/papelaria-institucional");
  const body = (await page.textContent("main")) ?? "";
  expect(body).not.toContain("31 × 46");
  expect(body).not.toMatch(/Laminação fosca \(pastas\)|Cartão 300 g\/m² \(pastas\)|Faca especial/);
  await expect(page.locator('main a[href="/produtos/pastas-personalizadas"]').first()).toBeAttached();
});

test("pastas e calendários publicam meta aprovada e não linkam envelopes", async ({ page }) => {
  const pages = [
    {
      path: "/produtos/pastas-personalizadas",
      title: "Pastas personalizadas para empresas e eventos | FullGraph",
      related: ["/produtos/crachas-e-credenciais", "/produtos/kits-corporativos", "/produtos/papelaria-institucional"],
    },
    {
      path: "/produtos/calendarios-personalizados",
      title: "Calendário personalizado 2027 para empresas | FullGraph",
      related: ["/produtos/kits-corporativos", "/produtos/cadernos-personalizados", "/produtos/papelaria-institucional"],
    },
  ];
  for (const item of pages) {
    await page.goto(item.path);
    await expect(page).toHaveTitle(item.title);
    await expect(page.locator('a[href="/produtos/envelopes-personalizados"]')).toHaveCount(0);
    for (const href of item.related) {
      await expect(page.locator(`main a[href="${href}"]`).first()).toBeAttached();
    }
  }
});
