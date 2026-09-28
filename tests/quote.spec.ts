import { test, expect, type Page } from "@playwright/test";

async function pickOption(page: Page, label: string | RegExp) {
  await page.getByRole("radio", { name: label }).check();
}

async function next(page: Page) {
  await page.getByTestId("quote-next").click();
}

test("fluxo completo do orçamento até o envio", async ({ page }) => {
  await page.goto("/orcamento");
  const title = page.getByTestId("quote-step-title");

  // 1. Segmento
  await expect(title).toContainText("Quem é você no projeto?");
  await pickOption(page, /Autor ou editora/);
  await next(page);

  // 2. Produto
  await expect(title).toContainText("O que vamos imprimir?");
  await pickOption(page, /Livro ou publicação/);
  await next(page);

  // 3. Formato
  await expect(title).toContainText("Qual o formato?");
  await pickOption(page, /14 × 21 cm/);
  await next(page);

  // 4. Quantidade
  await pickOption(page, /500 a 1\.000/);
  await next(page);

  // 5. Páginas (aparece porque é livro)
  await expect(title).toContainText("Quantas páginas?");
  await pickOption(page, /96 a 200/);
  await next(page);

  // 6. Cores
  await pickOption(page, /Preto e branco/);
  await next(page);

  // 7. Material
  await pickOption(page, /Pólen/);
  await next(page);

  // 8. Acabamento (checkbox)
  await page.getByRole("checkbox", { name: /Laminação fosca/ }).check();
  await next(page);

  // 9. Encadernação (aparece porque é livro)
  await expect(title).toContainText("Encadernação ou dobra?");
  await pickOption(page, /Brochura/);
  await next(page);

  // 10. Prazo
  await pickOption(page, /Até 30 dias/);
  await next(page);

  // 11. Entrega
  await page.getByLabel("Cidade e UF").fill("São Paulo - SP");
  await page.getByLabel(/^CEP/).fill("01310-100");
  await next(page);

  // 12. Contato
  await page.getByLabel("Seu nome").fill("Maria Teste");
  await page.getByLabel("E-mail").fill("maria@example.com");
  await page.getByLabel(/Telefone/).fill("(61) 99999-0000");
  await next(page);

  // 13. Anexos (opcional) → revisar
  await expect(title).toContainText("Já tem o arquivo?");
  await next(page);

  // Resumo
  await expect(title).toContainText("Confira e envie");
  const summary = page.getByTestId("quote-summary");
  await expect(summary).toContainText("Livro ou publicação");
  await expect(summary).toContainText("14 × 21 cm");
  await expect(summary).toContainText("Pólen");
  await expect(summary).toContainText("São Paulo - SP");

  // Sem WhatsApp configurado no ambiente de teste, o CTA degrada para e-mail
  const send = page.getByTestId("quote-send-whatsapp").or(page.getByTestId("quote-send-email"));
  await expect(send).toBeVisible();
  const href = await send.getAttribute("href");
  expect(href).toBeTruthy();
  expect(href!).toMatch(/^(https:\/\/wa\.me\/|mailto:)/);
  // a mensagem carrega o resumo
  expect(decodeURIComponent(href!)).toContain("Pedido de orçamento");
});

test("validação impede avançar sem escolher", async ({ page }) => {
  await page.goto("/orcamento");
  await page.getByTestId("quote-next").click();
  await expect(page.locator("#segmento-error")).toContainText(/Escolha o seu segmento/i);
  // continua na etapa 1
  await expect(page.getByTestId("quote-step-title")).toContainText("Quem é você no projeto?");
});

test("mockup reage às escolhas", async ({ page }) => {
  await page.goto("/orcamento");
  const mockup = page.getByTestId("quote-mockup");
  await expect(mockup).toContainText(/seu material aparece aqui/i);

  await pickOption(page, /Restaurante/);
  await next(page);
  await pickOption(page, /Embalagem para alimentos/);
  await expect(mockup).toContainText(/caixa com encaixe/i);
  // a foto da prévia acompanha o produto escolhido
  await expect(mockup.locator('img[src*="hamburguer-brasa-bruta"]').first()).toBeAttached();
});

test("prévia continua visível enquanto o visitante escolhe (celular)", async ({ page, isMobile }) => {
  test.skip(!isMobile, "barra fixa só no layout compacto");
  await page.goto("/orcamento");
  await pickOption(page, /Restaurante/);
  await next(page);
  await pickOption(page, /Papel de bandeja/);
  const preview = page.getByRole("complementary", { name: "Prévia do seu material" });
  await page.getByRole("radio", { name: /Outro produto/ }).scrollIntoViewIfNeeded();
  await expect(preview).toBeInViewport();
  await expect(preview).toContainText(/Papel de bandeja/);
});

test("resumo permite voltar e editar etapa", async ({ page }) => {
  await page.goto("/orcamento");
  // caminho rápido: flyer (sem páginas/encadernação... folder tem encadernação; flyer não)
  await pickOption(page, /Empresa/);
  await next(page);
  await pickOption(page, /Flyer ou panfleto/);
  await next(page);
  await pickOption(page, /A5/);
  await next(page);
  await pickOption(page, /5\.000 a 20\.000/);
  await next(page);
  await pickOption(page, /Colorido frente e verso/);
  await next(page);
  await pickOption(page, /Couché brilho/);
  await next(page);
  await page.getByRole("checkbox", { name: /Sem acabamento/ }).check();
  await next(page);
  await pickOption(page, /Para já/);
  await next(page);
  await page.getByLabel("Cidade e UF").fill("Goiânia - GO");
  await next(page);
  await page.getByLabel("Seu nome").fill("João Empresa");
  await page.getByLabel("E-mail").fill("joao@example.com");
  await page.getByLabel(/Telefone/).fill("(62) 98888-7777");
  await next(page);
  await next(page); // anexos → resumo

  await expect(page.getByTestId("quote-step-title")).toContainText("Confira e envie");
  await page.getByRole("button", { name: "Editar Quantidade" }).click();
  await expect(page.getByTestId("quote-step-title")).toContainText("Quantas unidades?");
});
