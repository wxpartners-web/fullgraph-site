import { test, expect } from "@playwright/test";

test("fotos próximas carregam antecipadamente e mantêm a prévia durante o download", async ({ page }) => {
  let releaseImages!: () => void;
  const pending = new Promise<void>((resolve) => { releaseImages = resolve; });
  const photoRequests: string[] = [];
  await page.route("**/_next/image?*", async (route) => {
    const src = new URL(route.request().url()).searchParams.get("url") ?? "";
    if (src.startsWith("/images/products/")) {
      photoRequests.push(src);
      await pending;
    }
    await route.continue();
  });
  try {
    await page.goto("/");
    const photo = page.getByTestId("product-card-impressao-de-livros").locator("img");
    await expect(photo).toHaveAttribute("loading", "lazy");
    expect(photoRequests).toHaveLength(0);

    // Ainda 2700 px abaixo da tela: prepara a foto antes da chegada do visitante.
    await photo.evaluate((img) => {
      window.scrollTo(0, img.getBoundingClientRect().top + scrollY - innerHeight - 2700);
    });
    await expect(photo).toHaveAttribute("loading", "eager");
    await expect.poll(() => photoRequests.length).toBeGreaterThan(0);
    expect(await photo.evaluate((img) => img.getBoundingClientRect().top)).toBeGreaterThan(await page.evaluate(() => innerHeight));

    await photo.scrollIntoViewIfNeeded();
    expect(await photo.evaluate((img) => (img as HTMLImageElement).naturalWidth)).toBe(0);
    expect(await photo.evaluate((img) => getComputedStyle(img).backgroundImage)).toContain("data:image/");

    releaseImages();
    await expect.poll(() => photo.evaluate((img) => (img as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    await expect.poll(() => photo.evaluate((img) => getComputedStyle(img).backgroundImage)).toBe("none");
  } finally {
    releaseImages();
    await page.unrouteAll({ behavior: "wait" });
  }
});
