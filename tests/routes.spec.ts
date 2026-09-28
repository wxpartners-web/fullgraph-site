import { test, expect } from "@playwright/test";

const routes: { path: string; h1: RegExp }[] = [
  { path: "/", h1: /Ideias ganham/i },
  { path: "/solucoes/empresas", h1: /Volume com padrão/i },
  { path: "/solucoes/livros-editorial", h1: /Seu texto merece/i },
  { path: "/solucoes/embalagens", h1: /Sua marca chega/i },
  { path: "/produtos", h1: /gaveta de/i },
  { path: "/produtos/impressao-de-livros", h1: /Impressão de livros/i },
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
  expect(await sitemap.text()).toContain("/produtos/impressao-de-livros");
  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBeTruthy();
});
