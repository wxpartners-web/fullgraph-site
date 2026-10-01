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
  await page.goto("/produtos/flyers-e-panfletos");
  await page.getByTestId("product-cta-orcamento").click();
  await expect(page).toHaveURL(/\/orcamento$/);
});

test("nenhum preço fictício é exibido no catálogo", async ({ page }) => {
  await page.goto("/produtos");
  const body = await page.textContent("body");
  expect(body).not.toMatch(/R\$\s*\d/);
});
