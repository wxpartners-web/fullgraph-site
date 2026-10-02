import { test, expect } from "@playwright/test";

/**
 * Toda mensagem de WhatsApp aberta pelo site leva a página de origem,
 * a página de entrada da sessão e o domínio de quem trouxe o visitante.
 */
test("mensagem do WhatsApp leva página, entrada e origem", async ({ page, context, isMobile }) => {
  test.skip(isMobile, "fluxo de clique coberto no desktop");
  await context.route(/wa\.me/, (route) => route.abort());

  await page.goto("/", { referer: "https://www.google.com/" });
  await page.goto("/produtos/impressao-de-livros");

  const link = page.locator('main a[href*="wa.me"]').first();
  await expect(link).toBeVisible();
  const popupPromise = context.waitForEvent("page", { timeout: 3000 }).catch(() => null);
  await link.click();
  await popupPromise;

  const href = await link.getAttribute("href");
  const texto = new URL(href ?? "").searchParams.get("text") ?? "";
  expect(texto).toContain("(Página: /produtos/impressao-de-livros");
  expect(texto).toContain("entrada: início");
  expect(texto).toContain("via: google.com");
});
