import { test, expect } from "@playwright/test";

/**
 * Sem NEXT_PUBLIC_WHATSAPP_NUMBER no ambiente de teste, os CTAs
 * degradam para telefone/e-mail — o teste cobre os dois modos.
 */

test("CTA de conversão presente no fim das páginas", async ({ page }) => {
  await page.goto("/");
  const cta = page.getByTestId("cta-final-whatsapp");
  await expect(cta).toBeVisible();
  await expect(cta).toHaveAttribute("href", /^(https:\/\/wa\.me\/|tel:|\/contato)/);
});

test("footer traz telefone e e-mail reais", async ({ page }) => {
  await page.goto("/");
  const footer = page.locator("footer");
  await expect(footer.getByRole("link", { name: "(61) 99619-4141", exact: true })).toBeVisible();
  await expect(footer.getByRole("link", { name: "leonardo@fullgraph.com.br", exact: true })).toBeVisible();
});

test("hero tem os dois CTAs principais", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("hero-cta-orcamento")).toBeVisible();
  await expect(page.getByRole("link", { name: "Explorar soluções" })).toBeVisible();
});

test("prefers-reduced-motion: conteúdo permanece utilizável", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/Gráfica em Brasília: a sua ideia/);
  // narrativa vira lista estática
  await expect(page.getByRole("heading", { name: /Da ideia à/ })).toBeVisible();
  await page.goto("/orcamento");
  await expect(page.getByTestId("quote-step-title")).toBeVisible();
  await context.close();
});
