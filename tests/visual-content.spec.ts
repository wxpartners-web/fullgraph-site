import { test, expect, type Page } from "@playwright/test";

/** Toda <img> do seletor carregou de fato (naturalWidth > 0) */
async function expectImagesLoaded(page: Page, selector: string) {
  const imgs = page.locator(`${selector} img`);
  const count = await imgs.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    const img = imgs.nth(i);
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0))
      .toBe(true);
  }
}

test("destaques da home seguem a sequência 01 a 06, incluindo o 03", async ({ page }) => {
  await page.goto("/");
  const section = page.locator("section", { has: page.getByRole("heading", { name: "Produtos em destaque" }) });
  const cards = section.locator('[data-testid^="product-card-"]');
  await expect(cards).toHaveCount(6);

  const indexes = await cards.locator("span.text-spec").allTextContents();
  expect(indexes.map((t) => t.trim())).toEqual(["01", "02", "03", "04", "05", "06"]);
  await expect(section.getByTestId("product-card-papelaria-institucional")).toBeVisible();

  for (let i = 0; i < 6; i++) {
    const img = cards.nth(i).locator("img");
    await img.scrollIntoViewIfNeeded();
    await expect.poll(() => img.evaluate((el: HTMLImageElement) => el.naturalWidth > 0)).toBe(true);
  }
});

test("portfolio não exibe textos provisórios e mostra marcas com foto própria", async ({ page }) => {
  for (const path of ["/", "/portfolio"]) {
    await page.goto(path);
    const body = (await page.textContent("body")) ?? "";
    expect(body).not.toMatch(/exemplo ilustrativo/i);
    expect(body).not.toMatch(/autorizados pelos clientes/i);
    expect(body).not.toMatch(/Matéria que já saiu da prensa/i);
  }

  await expect(page.getByRole("heading", { level: 1 })).toContainText(/Ideias que ganham/i);
  const figures = page.locator("main figure");
  await expect(figures).toHaveCount(8);
  const srcs = await figures.locator("img").evaluateAll((els) => els.map((el) => (el as HTMLImageElement).getAttribute("src")));
  expect(new Set(srcs).size).toBe(8);
  await expectImagesLoaded(page, "main figure");
});

test("as seis etapas de Da ideia à matéria têm foto carregada", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const list = page.getByTestId("narrative-static");
  for (const id of ["arquivo", "cores", "impressao", "acabamento", "produto", "entrega"]) {
    await expect(list.getByTestId(`narrative-step-${id}`)).toBeVisible();
  }
  await expectImagesLoaded(page, '[data-testid="narrative-static"]');
});

test("narrativa animada passa pelas seis etapas no desktop", async ({ page, isMobile }) => {
  test.skip(isMobile, "no celular a narrativa é a lista estática");
  await page.goto("/");
  const section = page.getByTestId("narrative");
  const top = await section.evaluate((el) => el.getBoundingClientRect().top + window.scrollY);
  const height = await section.evaluate((el: HTMLElement) => el.offsetHeight);
  const vh = await page.evaluate(() => window.innerHeight);

  const seen: string[] = [];
  for (let i = 0; i < 6; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), top + (height - vh) * ((i + 0.5) / 6));
    await page.waitForTimeout(250);
    seen.push((await section.getAttribute("data-step")) ?? "");
  }
  expect(seen).toEqual(["arquivo", "cores", "impressao", "acabamento", "produto", "entrega"]);
});
