import { test, expect } from "@playwright/test";

const GO = "Goiás";
const DF = "Distrito Federal";

const cities = [
  { path: "/grafica-goiania", faq: "Perguntas frequentes sobre a gráfica para Goiânia", state: GO },
  { path: "/grafica-rio-verde", faq: "Perguntas frequentes sobre a gráfica para Rio Verde", state: GO },
  {
    path: "/grafica-valparaiso-de-goias",
    faq: "Perguntas frequentes sobre a gráfica para Valparaíso de Goiás",
    state: GO,
  },
  { path: "/grafica-luziania", faq: "Perguntas frequentes sobre a gráfica para Luziânia", state: GO },
  { path: "/grafica-taguatinga", faq: "Perguntas frequentes sobre a gráfica para Taguatinga", state: DF },
  {
    path: "/grafica-aguas-claras",
    faq: "Perguntas frequentes sobre a gráfica para Águas Claras",
    state: DF,
  },
  {
    path: "/grafica-anapolis",
    faq: "Perguntas frequentes de indústrias que pedem impressos para Anápolis",
    state: GO,
  },
  {
    path: "/grafica-aparecida-de-goiania",
    faq: "Perguntas frequentes de lojas e distribuidoras de Aparecida de Goiânia",
    state: GO,
  },
  { path: "/grafica-senador-canedo", faq: "Perguntas frequentes de empresas de Senador Canedo", state: GO },
  {
    path: "/grafica-trindade",
    faq: "Perguntas frequentes: paróquias, organizadores e lojistas de Trindade",
    state: GO,
  },
  {
    path: "/grafica-itumbiara",
    faq: "Perguntas frequentes de escolas e comissões de formatura de Itumbiara",
    state: GO,
  },
  {
    path: "/grafica-jatai",
    faq: "Perguntas frequentes de autores, editoras e organizadores de Jataí",
    state: GO,
  },
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
    expect(service.areaServed[0].containedInPlace).toEqual({ "@type": "State", name: city.state });
    expect(service.provider["@id"]).toMatch(/#empresa$/);
  });
}

test("páginas do DF linkam sacolas, kits e comunicação visual", async ({ page }) => {
  const expected: Record<string, string[]> = {
    "/grafica-taguatinga": ["/produtos/sacolas-personalizadas", "/produtos/comunicacao-visual"],
    "/grafica-aguas-claras": [
      "/produtos/sacolas-personalizadas",
      "/produtos/kits-corporativos",
      "/produtos/comunicacao-visual",
    ],
  };
  for (const [path, hrefs] of Object.entries(expected)) {
    await page.goto(path);
    for (const href of hrefs) {
      await expect(page.locator(`main a[href="${href}"]`).first()).toBeAttached();
    }
  }
});

test("empresas e embalagens linkam kits e sacolas", async ({ page }) => {
  await page.goto("/solucoes/empresas");
  await expect(page.locator('main a[href="/produtos/kits-corporativos"]').first()).toBeAttached();
  await page.goto("/solucoes/embalagens");
  await page.getByRole("link", { name: "sacolas personalizadas", exact: true }).first().click();
  await expect(page).toHaveURL(/\/produtos\/sacolas-personalizadas$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    /Sacolas personalizadas para lojas e marcas/
  );
});

test("páginas de entrada linkam pastas e calendários personalizados", async ({ page }) => {
  const expected: Record<string, string[]> = {
    "/solucoes/empresas": ["/produtos/pastas-personalizadas", "/produtos/calendarios-personalizados"],
    "/grafica-aguas-claras": ["/produtos/pastas-personalizadas"],
    "/grafica-rio-verde": ["/produtos/calendarios-personalizados"],
    "/grafica-luziania": ["/produtos/calendarios-personalizados"],
  };
  for (const [path, hrefs] of Object.entries(expected)) {
    await page.goto(path);
    for (const href of hrefs) {
      await expect(page.locator(`main a[href="${href}"]`).first()).toBeAttached();
    }
  }
});

test("páginas de entrada linkam envelopes e kits linkam pastas", async ({ page }) => {
  const expected: Record<string, string[]> = {
    "/solucoes/empresas": ["/produtos/envelopes-personalizados"],
    "/grafica-aguas-claras": ["/produtos/envelopes-personalizados"],
    "/produtos/kits-corporativos": ["/produtos/pastas-personalizadas"],
  };
  for (const [path, hrefs] of Object.entries(expected)) {
    await page.goto(path);
    for (const href of hrefs) {
      await expect(page.locator(`main a[href="${href}"]`).first()).toBeAttached();
    }
  }
});

test("Anápolis mostra a tabela de reposição aprovada", async ({ page }) => {
  await page.goto("/grafica-anapolis");
  const table = page.locator("main table");
  await expect(table).toHaveCount(1);
  await expect(table.locator("th")).toHaveText(["O que a sua empresa envia", "O que recebe"]);
  await expect(table.locator("tbody tr")).toHaveCount(4);
});

test("cidades do Lote 5 linkam umas às outras", async ({ page }) => {
  const links: [string, string][] = [
    ["/grafica-anapolis", "/grafica-senador-canedo"],
    ["/grafica-anapolis", "/grafica-aparecida-de-goiania"],
    ["/grafica-aparecida-de-goiania", "/grafica-trindade"],
    ["/grafica-itumbiara", "/grafica-jatai"],
    ["/grafica-jatai", "/grafica-itumbiara"],
  ];
  for (const [from, to] of links) {
    await page.goto(from);
    await expect(page.locator(`main a[href="${to}"]`).first()).toBeAttached();
  }
});

test("caminho de primeiro nível desconhecido continua 404", async ({ request }) => {
  const res = await request.get("/grafica-sao-paulo");
  expect(res.status()).toBe(404);
});
