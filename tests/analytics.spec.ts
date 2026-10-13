import { test, expect, type Page } from "@playwright/test";

/**
 * Cliques de contato viram eventos na medição de acessos (Umami).
 * O script real é bloqueado nos testes; `window.umami` é um dublê que
 * guarda as chamadas, para nenhum teste contar como visita.
 */
interface EventoRegistrado {
  nome: string;
  dados?: Record<string, string>;
}

declare global {
  interface Window {
    __eventos: EventoRegistrado[];
  }
}

const UMAMI_HOST = /cloud\.umami\.is/;

async function prepararDuble(page: Page) {
  await page.context().route(UMAMI_HOST, (route) => route.abort());
  await page.context().route(/wa\.me/, (route) => route.abort());
  await page.addInitScript(() => {
    window.__eventos = [];
    window.umami = {
      track: (nome, dados) => {
        window.__eventos.push(dados ? { nome, dados } : { nome });
      },
    };
    // tel: e mailto: não devem abrir aplicativo externo durante o teste
    document.addEventListener("click", (event) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="tel:"], a[href^="mailto:"]');
      if (link) event.preventDefault();
    });
  });
}

function eventos(page: Page): Promise<EventoRegistrado[]> {
  return page.evaluate(() => window.__eventos);
}

test.describe("eventos de contato", () => {
  test.beforeEach(async ({ page, isMobile }) => {
    test.skip(isMobile, "fluxo de clique coberto no desktop");
    await prepararDuble(page);
  });

  test("clique no telefone registra clique-telefone", async ({ page }) => {
    await page.goto("/contato");
    await page.locator('main a[href^="tel:"]').first().click();
    expect(await eventos(page)).toEqual([{ nome: "clique-telefone" }]);
  });

  test("clique no e-mail registra clique-email", async ({ page }) => {
    await page.goto("/contato");
    await page.locator('main a[href^="mailto:"]').first().click();
    expect(await eventos(page)).toEqual([{ nome: "clique-email" }]);
  });

  test("clique no WhatsApp registra clique-whatsapp", async ({ page, context }) => {
    await page.goto("/produtos/impressao-de-livros");
    const link = page.locator('main a[href*="wa.me"]').first();
    await expect(link).toBeVisible();
    const popupPromise = context.waitForEvent("page", { timeout: 3000 }).catch(() => null);
    await link.click();
    await popupPromise;
    expect(await eventos(page)).toEqual([{ nome: "clique-whatsapp" }]);
  });

  test("link comum não registra evento", async ({ page }) => {
    await page.goto("/contato");
    await page.locator('main a[href="/orcamento"]').first().click();
    await expect(page).toHaveURL(/\/orcamento$/);
    expect(await eventos(page)).toEqual([]);
  });

  test("envio do orçamento registra orcamento-enviado com o canal", async ({ page, context }) => {
    await page.goto("/orcamento");
    const next = () => page.getByTestId("quote-next").click();
    const pick = (label: RegExp) => page.getByRole("radio", { name: label }).check();

    await pick(/Empresa/);
    await next();
    await pick(/Flyer ou panfleto/);
    await next();
    await pick(/A5/);
    await next();
    await pick(/5\.000 a 20\.000/);
    await next();
    await pick(/Colorido frente e verso/);
    await next();
    await pick(/Couché brilho/);
    await next();
    await page.getByRole("checkbox", { name: /Sem acabamento/ }).check();
    await next();
    await pick(/Para já/);
    await next();
    await page.getByLabel("Cidade e UF").fill("Goiânia - GO");
    await next();
    await page.getByLabel("Seu nome").fill("João Empresa");
    await page.getByLabel("E-mail").fill("joao@example.com");
    await page.getByLabel(/Telefone/).fill("(62) 98888-7777");
    await next();
    await next(); // anexos → resumo
    await expect(page.getByTestId("quote-step-title")).toContainText("Confira e envie");

    const send = page.getByTestId("quote-send-whatsapp").or(page.getByTestId("quote-send-email"));
    const canal = (await send.getAttribute("href"))?.startsWith("mailto:") ? "email" : "whatsapp";
    const popupPromise = context.waitForEvent("page", { timeout: 3000 }).catch(() => null);
    await send.click();
    await popupPromise;

    expect(await eventos(page)).toEqual([{ nome: "orcamento-enviado", dados: { canal } }]);
  });
});

test("script de medição carrega com o ID do site", async ({ page }) => {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  test.skip(!websiteId, "build sem medição configurada (padrão fora da produção)");
  await page.context().route(UMAMI_HOST, (route) => route.abort());
  await page.goto("/");
  await expect(page.locator(`script[src*="cloud.umami.is"][data-website-id="${websiteId}"]`)).toBeAttached();
});

test("sem ID configurado, nenhum script de medição entra na página", async ({ page }) => {
  test.skip(Boolean(process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID), "build com medição configurada");
  await page.goto("/");
  await expect(page.locator('script[src*="umami"]')).toHaveCount(0);
});

test("rodapé leva à política de privacidade", async ({ page }) => {
  await page.goto("/");
  await page.locator("footer").getByRole("link", { name: "Política de privacidade" }).click();
  await expect(page).toHaveURL(/\/politica-de-privacidade$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Política de privacidade");
  await expect(page.locator("main")).toContainText("não usa cookies");
});
