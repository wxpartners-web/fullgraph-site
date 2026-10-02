import { test, expect } from "@playwright/test";

const cities = [
  { path: "/grafica-goiania", faq: "Perguntas frequentes sobre a gráfica para Goiânia" },
  { path: "/grafica-rio-verde", faq: "Perguntas frequentes sobre a gráfica para Rio Verde" },
  {
    path: "/grafica-valparaiso-de-goias",
    faq: "Perguntas frequentes sobre a gráfica para Valparaíso de Goiás",
  },
  { path: "/grafica-luziania", faq: "Perguntas frequentes sobre a gráfica para Luziânia" },
];

for (const city of cities) {
  test(`página de cidade ${city.path}: 200, um H1 e FAQ como último H2`, async ({ page }) => {
    const res = await page.goto(city.path);
    expect(res?.status()).toBe(200);

    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);

    const faq = page.getByRole("heading", { level: 2, name: city.faq });
    await faq.scrollIntoViewIfNeeded();
    await expect(faq).toBeVisible();
    const h2s = await page.locator("main h2").allTextContents();
    expect(h2s.at(-1)).toBe(city.faq);

    // sem endereço local: a página não cita endereço na cidade atendida no schema
    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
    const service = schemas.map((s) => JSON.parse(s)).find((s) => s["@type"] === "Service");
    expect(service.areaServed[0]["@type"]).toBe("City");
    expect(service.areaServed[0].containedInPlace).toEqual({ "@type": "State", name: "Goiás" });
    expect(service.provider["@id"]).toMatch(/#empresa$/);
  });
}

test("caminho de primeiro nível desconhecido continua 404", async ({ request }) => {
  const res = await request.get("/grafica-sao-paulo");
  expect(res.status()).toBe(404);
});
