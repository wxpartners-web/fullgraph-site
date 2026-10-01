import { test, expect } from "@playwright/test";

test.describe("navegação desktop", () => {
  test.skip(({ isMobile }) => Boolean(isMobile), "somente desktop");

  test("header navega para produtos e orçamento", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("navigation", { name: "Navegação principal" }).getByRole("link", { name: "Produtos" }).click();
    await expect(page).toHaveURL(/\/produtos$/);

    await page.getByTestId("header-orcamento").click();
    await expect(page).toHaveURL(/\/orcamento$/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/Monte seu pedido/i);
  });

  test("dropdown de soluções acessível por teclado", async ({ page }) => {
    await page.goto("/");
    const trigger = page.getByRole("button", { name: /Soluções/ });
    await trigger.focus();
    // dropdown abre por focus-within
    const link = page.locator("header").getByRole("link", { name: "Livros e editorial" });
    await link.focus();
    await expect(link).toBeVisible();
    await link.press("Enter");
    await expect(page).toHaveURL(/\/solucoes\/livros-editorial$/);
  });

  test("portais da home levam às soluções", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("portal-embalagens").click();
    await expect(page).toHaveURL(/\/solucoes\/embalagens$/);
  });
});

test.describe("navegação mobile", () => {
  test.skip(({ isMobile }) => !isMobile, "somente mobile");

  test("menu fullscreen abre, navega e fecha", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("menu-toggle").click();
    const menu = page.locator("#menu-mobile");
    await expect(menu).toBeVisible();
    await menu.getByRole("link", { name: /Produtos/ }).click();
    await expect(page).toHaveURL(/\/produtos$/);
    await expect(menu).toBeHidden();
  });

  test("menu prende o foco e devolve ao botão ao fechar", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("menu-toggle").click();
    const menu = page.locator("#menu-mobile");
    await expect(menu).toBeVisible();
    await expect(menu).toHaveAttribute("aria-modal", "true");
    // o foco entra no menu ao abrir
    await expect
      .poll(() =>
        page.evaluate(() => document.activeElement?.closest("#menu-mobile") !== null)
      )
      .toBe(true);
    // o ciclo de Tab nunca escapa de header+menu (o X vive no header)
    for (let i = 0; i < 12; i++) {
      await page.keyboard.press("Tab");
      const contained = await page.evaluate(() => {
        const a = document.activeElement;
        return Boolean(a && (a.closest("#menu-mobile") || a.closest("header")));
      });
      expect(contained, `Tab ${i + 1} escapou do menu`).toBe(true);
    }
    await page.keyboard.press("Escape");
    await expect(menu).toBeHidden();
    await expect
      .poll(() =>
        page.evaluate(() => document.activeElement?.getAttribute("data-testid") ?? null)
      )
      .toBe("menu-toggle");
  });

  test("barra inferior de CTA aparece e leva ao orçamento", async ({ page }) => {
    await page.goto("/");
    const bar = page.getByTestId("mobile-cta-bar");
    await expect(bar).toBeVisible();
    await bar.getByRole("link", { name: /orçamento/i }).click();
    await expect(page).toHaveURL(/\/orcamento$/);
    // na página de orçamento a barra some (wizard tem os próprios CTAs)
    await expect(page.getByTestId("mobile-cta-bar")).toHaveCount(0);
  });
});
