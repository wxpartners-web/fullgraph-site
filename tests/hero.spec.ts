import { existsSync } from "node:fs";
import path from "node:path";
import { test, expect, type Page } from "@playwright/test";

/**
 * Cobertura do hero atrás de NEXT_PUBLIC_HERO_SCRUB.
 *
 * Flag OFF (padrão do repositório): hero clássico preservado e ZERO
 * requests de mídia do hero em qualquer device.
 *
 * Flag ON: exige o build correspondente e o marcador de ambiente —
 *   NEXT_PUBLIC_HERO_SCRUB=1 npm run build
 *   HERO_SCRUB=1 npx playwright test tests/hero.spec.ts
 * (routes.spec/whatsapp.spec validam a copy do hero clássico e só
 * valem com a flag off; por isso o comando acima roda só este spec.)
 */

const scrubOn = process.env.HERO_SCRUB === "1";
const placeholderExists = existsSync(
  path.join(__dirname, "..", "public", "media", "hero", "hero-scrub-placeholder.webm")
);

function collectHeroMediaRequests(page: Page): string[] {
  const urls: string[] = [];
  page.on("request", (req) => {
    if (req.url().includes("/media/hero/")) urls.push(req.url());
  });
  return urls;
}

test.describe("flag OFF — hero clássico preservado", () => {
  test.skip(scrubOn, "build atual está com a flag ligada");

  test("hero clássico renderiza com H1, visual e CTAs", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/Ideias ganham/i);
    await expect(page.getByTestId("hero-visual")).toBeVisible();
    await expect(page.getByTestId("hero-cinema")).toHaveCount(0);
    await expect(page.getByTestId("hero-cta-orcamento")).toBeVisible();
  });

  test("nenhuma request de mídia do hero", async ({ page }) => {
    const media = collectHeroMediaRequests(page);
    await page.goto("/");
    await page.evaluate(() => window.scrollTo(0, window.innerHeight));
    // janela maior que o defer pós-idle (timeout 1200ms) do controller
    await page.waitForTimeout(2000);
    expect(media).toEqual([]);
  });

  test("CTA primário consistente: 'Solicitar orçamento'", async ({ page, isMobile }) => {
    await page.goto("/");
    await expect(page.getByTestId("hero-cta-orcamento")).toHaveText(/Solicitar orçamento/);
    if (isMobile) {
      await expect(
        page.getByTestId("mobile-cta-bar").getByRole("link", { name: /orçamento/i })
      ).toHaveText(/Solicitar orçamento/);
    } else {
      await expect(page.getByTestId("header-orcamento")).toHaveText(/Solicitar orçamento/);
    }
  });
});

test.describe("flag ON — hero cinematográfico", () => {
  test.skip(!scrubOn, "rodar com NEXT_PUBLIC_HERO_SCRUB=1 no build e HERO_SCRUB=1 no test");

  test("H1 e CTA existem sem JavaScript (SSR)", async ({ browser }) => {
    const ctx = await browser.newContext({ javaScriptEnabled: false });
    const page = await ctx.newPage();
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/A sua ideia/i);
    await expect(page.getByTestId("hero-cta-orcamento")).toBeVisible();
    await expect(page.getByTestId("hero-still")).toBeVisible();
    await ctx.close();
  });

  test("desktop elegível: vídeo monta e o scroll dirige currentTime", async ({ page, isMobile }) => {
    test.skip(Boolean(isMobile), "só desktop");
    test.skip(!placeholderExists, "placeholder ausente — node scripts/make-hero-placeholder.mjs");
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });

    await page.goto("/");
    await expect(page.getByTestId("hero-cinema")).toBeVisible();
    const video = page.getByTestId("hero-scrub-video");
    await expect(video).toBeAttached({ timeout: 10_000 });
    // blob + canplay: o vídeo decorativo é muted/playsInline/aria-hidden
    await expect(video).toHaveAttribute("aria-hidden", "true");
    await expect
      .poll(() => video.evaluate((v) => (v as HTMLVideoElement).readyState), { timeout: 20_000 })
      .toBeGreaterThanOrEqual(2);

    const before = await video.evaluate((v) => (v as HTMLVideoElement).currentTime);
    await page.evaluate(() =>
      window.scrollTo({ top: window.innerHeight * 1.6, behavior: "instant" as ScrollBehavior })
    );
    await expect
      .poll(() => video.evaluate((v) => (v as HTMLVideoElement).currentTime), { timeout: 10_000 })
      .toBeGreaterThan(before + 0.2);

    expect(errors).toEqual([]);
  });

  test("mobile: hero estático sem pin e zero requests de mídia", async ({ page, isMobile }) => {
    test.skip(!isMobile, "só mobile");
    const media = collectHeroMediaRequests(page);
    await page.goto("/");
    await expect(page.getByTestId("hero-cinema")).toBeVisible();
    await expect(page.getByTestId("hero-still")).toBeVisible();
    await expect(page.getByTestId("hero-cta-orcamento")).toBeVisible();
    await page.waitForTimeout(2000);
    expect(media).toEqual([]);
  });

  test("reduced-motion: hero estático e zero requests de mídia", async ({ browser, isMobile }) => {
    test.skip(Boolean(isMobile), "coberto no projeto desktop");
    const ctx = await browser.newContext({
      reducedMotion: "reduce",
      viewport: { width: 1440, height: 900 },
    });
    const page = await ctx.newPage();
    const media = collectHeroMediaRequests(page);
    await page.goto("/");
    await expect(page.getByTestId("hero-cinema")).toBeVisible();
    await expect(page.getByTestId("hero-cta-orcamento")).toBeVisible();
    await page.waitForTimeout(2000);
    expect(media).toEqual([]);
    await ctx.close();
  });

  test("save-data: zero requests de mídia", async ({ page, isMobile }) => {
    test.skip(Boolean(isMobile), "gate de touch já cobre o mobile");
    await page.addInitScript(() => {
      Object.defineProperty(navigator, "connection", {
        configurable: true,
        value: {
          saveData: true,
          addEventListener: () => {},
          removeEventListener: () => {},
        },
      });
    });
    const media = collectHeroMediaRequests(page);
    await page.goto("/");
    await expect(page.getByTestId("hero-cinema")).toBeVisible();
    await page.waitForTimeout(2000);
    expect(media).toEqual([]);
  });

  test("erro de mídia: poster segura o hero, sem crash", async ({ page, isMobile }) => {
    test.skip(Boolean(isMobile), "só desktop (mobile nem requisita)");
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));
    await page.route("**/media/hero/**", (route) => route.abort());
    await page.goto("/");
    await expect(page.getByTestId("hero-still")).toBeVisible();
    await expect(page.getByTestId("hero-cta-orcamento")).toBeVisible();
    await page.waitForTimeout(2500);
    await expect(page.getByTestId("hero-scrub-video")).toBeHidden();
    expect(errors).toEqual([]);
  });
});

test.describe("scrim do hero cinematográfico", () => {
  /**
   * O scrim é a única defesa de legibilidade do texto sobre o vídeo, e o
   * Gate 3 mostrou que ele estava curto: o platô terminava em 36% enquanto
   * o H1 real chega a 69,4% do quadro. O itálico laranja media 2,33:1.
   * Estes testes travam a correção.
   */
  const stopsFromCss = async (page: Page) =>
    page.evaluate(() => {
      // a regra existe na folha de estilo mesmo com a flag desligada;
      // um elemento sonda basta para ler o valor computado
      const probe = document.createElement("div");
      probe.className = "hero-scrim";
      document.body.appendChild(probe);
      const bg = getComputedStyle(probe).backgroundImage;
      probe.remove();
      const linear = bg.slice(bg.indexOf("linear-gradient"));
      // "rgba(11, 11, 12, 0.82) 72%" → { alpha, pos }
      return [...linear.matchAll(/rgba?\(([^)]*)\)\s+([\d.]+)%/g)].map((m) => {
        const parts = m[1].split(",").map((v) => Number(v.trim()));
        return { alpha: parts.length > 3 ? parts[3] : 1, pos: Number(m[2]) };
      });
    });

  const alphaAt = (stops: { alpha: number; pos: number }[], x: number) => {
    for (let i = 0; i < stops.length - 1; i++) {
      const a = stops[i];
      const b = stops[i + 1];
      if (x >= a.pos && x <= b.pos) {
        return a.alpha + ((b.alpha - a.alpha) * (x - a.pos)) / (b.pos - a.pos);
      }
    }
    return stops[stops.length - 1].alpha;
  };

  test("o platô cobre toda a faixa de texto (H1 chega a 69,4%)", async ({ page }) => {
    await page.goto("/");
    const stops = await stopsFromCss(page);
    expect(stops.length).toBeGreaterThanOrEqual(4);
    // 69,4% é a borda direita real do H1; 72% é o fim do platô com margem
    for (const x of [0, 25, 50, 69.4, 72]) {
      expect(alphaAt(stops, x), `alpha em x=${x}%`).toBeGreaterThanOrEqual(0.8);
    }
  });

  test("a faixa direita continua viva (luz, verniz e tinta)", async ({ page }) => {
    await page.goto("/");
    const stops = await stopsFromCss(page);
    // a partir de ~84% o scrim quase some: é onde a imagem precisa respirar
    expect(alphaAt(stops, 88)).toBeLessThanOrEqual(0.3);
  });

  test("a rampa de saída não desenha borda dura", async ({ page }) => {
    await page.goto("/");
    const stops = await stopsFromCss(page);
    // nenhum salto de alpha maior que 0,35 entre amostras de 2% —
    // uma queda de 0,82 para 0,10 num intervalo só cria linha vertical visível
    let maiorSalto = 0;
    for (let x = 70; x < 100; x += 2) {
      maiorSalto = Math.max(maiorSalto, Math.abs(alphaAt(stops, x) - alphaAt(stops, x + 2)));
    }
    expect(maiorSalto).toBeLessThan(0.35);
  });

  test("flag OFF: o scrim não é renderizado (mudança escopada)", async ({ page }) => {
    test.skip(scrubOn, "build atual está com a flag ligada");
    await page.goto("/");
    await expect(page.locator(".hero-scrim")).toHaveCount(0);
  });
});

test.describe("tokens de contraste", () => {
  test("--ink-on-paper cumpre AA (≥4.5:1) sobre --paper", async ({ page }) => {
    await page.goto("/");
    const ratio = await page.evaluate(() => {
      const css = getComputedStyle(document.documentElement);
      const hex = (name: string) => css.getPropertyValue(name).trim();
      const lum = (h: string) => {
        const c = h.replace("#", "");
        const [r, g, b] = [0, 2, 4]
          .map((i) => parseInt(c.slice(i, i + 2), 16) / 255)
          .map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      };
      const la = lum(hex("--ink-on-paper"));
      const lb = lum(hex("--paper"));
      const [hi, lo] = la > lb ? [la, lb] : [lb, la];
      return (hi + 0.05) / (lo + 0.05);
    });
    expect(ratio).toBeGreaterThanOrEqual(4.5);
  });
});
