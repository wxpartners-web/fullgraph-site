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
  await page.goto("/produtos/jornais-e-tabloides");
  await page.getByTestId("product-cta-orcamento").click();
  await expect(page).toHaveURL(/\/orcamento$/);
});

test("nenhum preço fictício é exibido no catálogo", async ({ page }) => {
  await page.goto("/produtos");
  const body = await page.textContent("body");
  expect(body).not.toMatch(/R\$\s*\d/);
});

test("banners linkam a página de comunicação visual", async ({ page }) => {
  await page.goto("/produtos/banners-e-grandes-formatos");
  await page.getByRole("link", { name: "fachadas, placas e PDV" }).click();
  await expect(page).toHaveURL(/\/produtos\/comunicacao-visual$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    /Empresa de comunicação visual em Brasília/
  );
});

test("papelaria institucional não publica medidas de pasta e aponta para a página de pastas", async ({ page }) => {
  await page.goto("/produtos/papelaria-institucional");
  const body = (await page.textContent("main")) ?? "";
  expect(body).not.toContain("31 × 46");
  expect(body).not.toMatch(/Laminação fosca \(pastas\)|Cartão 300 g\/m² \(pastas\)|Faca especial/);
  await expect(page.locator('main a[href="/produtos/pastas-personalizadas"]').first()).toBeAttached();
});

/** Lote 4 (ondas 2 e 3): meta do frontmatter aprovado e links obrigatórios de cada página */
const LOTE4_PAGES = [
  {
    path: "/produtos/papelaria-institucional",
    title: "Papel timbrado, blocos e formulários numerados | FullGraph",
    description:
      "Papel timbrado em offset 90 g, sem quantidade mínima, e blocos com numeração, picote e várias vias. Nota fiscal, licitações e entrega no DF e em Goiás.",
    links: ["/produtos/envelopes-personalizados", "/produtos/pastas-personalizadas", "/produtos/cadernos-personalizados"],
  },
  {
    path: "/produtos/envelopes-personalizados",
    title: "Envelope personalizado para empresas em Brasília | FullGraph",
    description:
      "Envelope personalizado carta, ofício, saco A4 e A3, com ou sem janela. Sem quantidade mínima, com nota fiscal e entrega no DF no mesmo dia após pronto.",
    links: ["/produtos/papelaria-institucional", "/produtos/pastas-personalizadas", "/solucoes/empresas"],
  },
  {
    path: "/produtos/banners-e-grandes-formatos",
    title: "Banner personalizado em Brasília: lona e faixas | FullGraph",
    description:
      "Banner personalizado sob medida em lona, tecido ou papel fotográfico, além de faixa, roll-up, wind banner e backdrop. A partir de 1 unidade. DF e Goiás.",
    links: ["/produtos/comunicacao-visual", "/produtos/flyers-e-panfletos", "/produtos/crachas-e-credenciais"],
  },
  {
    path: "/produtos/folders-e-dobrados",
    title: "Impressão de folders: todos os tipos de dobra | FullGraph",
    description:
      "Impressão de folders personalizados com 1, 2 ou 3 dobras, sanfona, carteira ou janela. Gráfica em Brasília desde 2012, entrega no DF e em Goiás.",
    links: ["/produtos/flyers-e-panfletos", "/produtos/impressao-de-catalogos", "/produtos/comunicacao-visual"],
  },
  {
    path: "/produtos/impressao-de-catalogos",
    title: "Impressão de catálogos sob demanda em Brasília | FullGraph",
    description:
      "Impressão de catálogos de produtos sob demanda, em qualquer quantidade. Couché, reciclato e papéis especiais, com entrega no DF no mesmo dia após pronto.",
    links: ["/produtos/impressao-de-revistas", "/produtos/folders-e-dobrados", "/grafica-goiania"],
  },
  {
    path: "/produtos/impressao-de-revistas",
    title: "Impressão de revistas com acabamento editorial | FullGraph",
    description:
      "Impressão de revistas para empresas, entidades e editoras: grampo ou lombada colada, laminação, verniz e hot stamping. Prova antes de imprimir.",
    links: ["/produtos/impressao-de-catalogos", "/produtos/jornais-e-tabloides", "/produtos/impressao-de-livros"],
  },
  {
    path: "/produtos/calendarios-personalizados",
    title: "Calendário personalizado 2027 para empresas | FullGraph",
    description:
      "Calendário personalizado 2027 com a marca da sua empresa: de mesa, com wire-o ou acabamento especial, a partir de 100 unidades. Entrega no DF e em Goiás.",
    links: ["/produtos/kits-corporativos", "/produtos/cadernos-personalizados", "/produtos/papelaria-institucional"],
  },
  {
    path: "/produtos/pastas-personalizadas",
    title: "Pastas personalizadas para empresas e eventos | FullGraph",
    description:
      "Pastas personalizadas com bolsa, orelha, porta-cartão ou lombada, para folhas A4. Sem quantidade mínima e prazo médio de 5 dias úteis no DF e em Goiás.",
    links: ["/produtos/envelopes-personalizados", "/produtos/papelaria-institucional", "/produtos/crachas-e-credenciais"],
  },
];

test("lote 4: páginas publicam meta aprovada e os links do texto", async ({ page }) => {
  for (const item of LOTE4_PAGES) {
    await page.goto(item.path);
    await expect(page).toHaveTitle(item.title);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", item.description);
    for (const href of item.links) {
      await expect(page.locator(`main a[href="${href}"]`).first()).toBeAttached();
    }
  }
});

test("lote 4: páginas reescritas não publicam especificações sem fonte", async ({ page }) => {
  for (const item of LOTE4_PAGES) {
    await page.goto(item.path);
    const body = (await page.textContent("main")) ?? "";
    expect(body, item.path).not.toContain("Lona 440");
    expect(body, item.path).not.toMatch(/60\s?×\s?90|80\s?×\s?120/);
    expect(body, item.path).not.toMatch(/receitu[aá]rio/i);
    expect(body, item.path).not.toContain("20,2");
    expect(body, item.path).not.toMatch(/tiragens médias e altas|A partir de 300|8 a 96|Guardamos o perfil/);
  }
});
