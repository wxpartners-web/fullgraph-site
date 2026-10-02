import { test, expect } from "@playwright/test";

const routes: { path: string; h1: RegExp }[] = [
  { path: "/", h1: /Gráfica em Brasília: a sua ideia, impressa com peso e presença./ },
  { path: "/solucoes/empresas", h1: /Gráfica para empresas: papelaria corporativa/ },
  { path: "/solucoes/livros-editorial", h1: /Gráfica editorial: do original revisado/ },
  { path: "/solucoes/embalagens", h1: /Embalagens personalizadas para marcas/ },
  { path: "/grafica-goiania", h1: /Gráfica Goiânia: produção em Brasília/ },
  { path: "/grafica-rio-verde", h1: /Gráfica para Rio Verde, Goiás/ },
  { path: "/grafica-valparaiso-de-goias", h1: /Gráfica para Valparaíso de Goiás/ },
  { path: "/grafica-luziania", h1: /Gráfica para Luziânia/ },
  { path: "/produtos", h1: /gaveta de/i },
  { path: "/produtos/impressao-de-livros", h1: /Impressão de livros/i },
  { path: "/produtos/flyers-e-panfletos", h1: /Impressão de panfletos personalizados/ },
  { path: "/produtos/crachas-e-credenciais", h1: /Crachás personalizados e credenciais/ },
  { path: "/portfolio", h1: /Ideias que ganham/i },
  { path: "/sobre", h1: /Muito mais que/i },
  { path: "/orcamento", h1: /Monte seu pedido/i },
  { path: "/contato", h1: /Vamos/i },
];

for (const route of routes) {
  test(`rota ${route.path} carrega sem erros de console`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });

    await page.goto(route.path);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(route.h1);

    // landmarks básicos
    await expect(page.locator("main#conteudo")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();

    expect(errors, `Console errors em ${route.path}: ${errors.join("\n")}`).toEqual([]);
  });
}

test("página 404 personalizada", async ({ page }) => {
  await page.goto("/rota-que-nao-existe");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/fora do corte/i);
});

test("sitemap e robots respondem", async ({ request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  const xml = await sitemap.text();
  expect(xml).toContain("/produtos/impressao-de-livros");
  expect(xml).toContain("/produtos/crachas-e-credenciais");
  expect(xml).toContain("/grafica-valparaiso-de-goias");
  expect(xml).toContain("/grafica-luziania");
  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBeTruthy();
});
