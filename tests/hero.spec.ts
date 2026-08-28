import { existsSync, statSync } from "node:fs";
import path from "node:path";
import { test, expect, type Page } from "@playwright/test";
import { heroMedia } from "../src/lib/hero-media";

/**
 * Cobertura do hero atrás de NEXT_PUBLIC_HERO_SCRUB.
 *
 * Flag OFF (padrão do repositório): hero clássico preservado e ZERO
 * requests de /media/hero/ em qualquer device.
 *
 * Flag ON: exige o build correspondente e o marcador de ambiente —
 *   NEXT_PUBLIC_HERO_SCRUB=1 npm run build
 *   HERO_SCRUB=1 npx playwright test tests/hero.spec.ts tests/navigation.spec.ts
 * (routes.spec/whatsapp.spec validam a copy do hero clássico e só
 * valem com a flag off; navigation.spec vale nos dois modos.)
 *
 * Com a flag on, os stills (poster/mobile) são requests legítimas de
 * /media/hero/ — o que continua proibido fora do desktop elegível é o
 * VÍDEO, e é isso que os coletores distinguem.
 */

const scrubOn = process.env.HERO_SCRUB === "1";
const mediaDir = path.join(__dirname, "..", "public", "media", "hero");
const finalVideoExists = existsSync(path.join(mediaDir, "hero-scrub.mp4"));

function collectHeroMediaRequests(page: Page): string[] {
  const urls: string[] = [];
  page.on("request", (req) => {
    if (req.url().includes("/media/hero/")) urls.push(req.url());
  });
  return urls;
}

function collectHeroVideoRequests(page: Page): string[] {
  const urls: string[] = [];
  page.on("request", (req) => {
    if (/\/media\/hero\/.*\.(mp4|webm)/.test(req.url())) urls.push(req.url());
  });
  return urls;
}

/** Medidas do palco do scrub, lidas da página real */
async function scrubGeometry(page: Page) {
  return page.evaluate(() => {
    const section = document.querySelector<HTMLElement>("[data-hero-cinema]");
    if (!section) throw new Error("hero cinema ausente");
    const rect = section.getBoundingClientRect();
    return {
      top: rect.top + window.scrollY,
      range: Math.max(1, section.offsetHeight - window.innerHeight),
    };
  });
}

test.describe("manifest do hero — consistente com os assets em disco", () => {
  test("kind final, bytes reais e duração coerente com frames/fps", () => {
    expect(heroMedia.kind).toBe("final");
    expect(heroMedia.videoSrc).toBe("/media/hero/hero-scrub.mp4");
    expect(statSync(path.join(mediaDir, "hero-scrub.mp4")).size).toBe(
      heroMedia.videoBytes
    );
    // 97 frames a 24 fps = 4,0416667 s — o manifest não pode divergir
    expect(heroMedia.videoDurationSeconds).toBeCloseTo(
      heroMedia.videoFrames / heroMedia.videoFps,
      3
    );
    expect(heroMedia.videoDurationSeconds).toBeCloseTo(4.041667, 5);
    for (const src of [
      heroMedia.posterSrc,
      heroMedia.endingSrc,
      heroMedia.mobileStillSrc,
    ]) {
      expect(
        existsSync(path.join(mediaDir, path.basename(src))),
        `${src} ausente em public/media/hero`
      ).toBe(true);
    }
  });
});

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

  test("desktop: poster real (frame 000) por baixo do vídeo", async ({ page, isMobile }) => {
    test.skip(Boolean(isMobile), "só desktop");
    await page.goto("/");
    const img = page.getByTestId("hero-still").locator("img");
    await expect
      .poll(() => img.evaluate((el) => (el as HTMLImageElement).complete))
      .toBe(true);
    const loaded = await img.evaluate((el) => {
      const i = el as HTMLImageElement;
      return { src: i.currentSrc, w: i.naturalWidth, h: i.naturalHeight };
    });
    expect(loaded.src).toContain("hero-poster.jpg");
    expect(loaded.w).toBe(1920);
    expect(loaded.h).toBe(1080);
  });

  test("desktop elegível: vídeo monta com a duração real e o scroll dirige currentTime", async ({
    page,
    isMobile,
  }) => {
    test.skip(Boolean(isMobile), "só desktop");
    test.skip(!finalVideoExists, "hero-scrub.mp4 ausente em public/media/hero");
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

    // duração real do encode aprovado (97 frames / 24 fps)
    const duration = await video.evaluate((v) => (v as HTMLVideoElement).duration);
    expect(Math.abs(duration - 4.041667)).toBeLessThanOrEqual(0.06);

    const before = await video.evaluate((v) => (v as HTMLVideoElement).currentTime);
    await page.evaluate(() =>
      window.scrollTo({ top: window.innerHeight * 1.6, behavior: "instant" as ScrollBehavior })
    );
    await expect
      .poll(() => video.evaluate((v) => (v as HTMLVideoElement).currentTime), { timeout: 10_000 })
      .toBeGreaterThan(before + 0.2);

    expect(errors).toEqual([]);
  });

  test("scrub mapeia início/meio/fim e reverte com o scroll", async ({ page, isMobile }) => {
    test.skip(Boolean(isMobile), "só desktop");
    test.skip(!finalVideoExists, "hero-scrub.mp4 ausente em public/media/hero");
    await page.goto("/");
    const video = page.getByTestId("hero-scrub-video");
    await expect(video).toBeAttached({ timeout: 10_000 });
    await expect
      .poll(() => video.evaluate((v) => (v as HTMLVideoElement).readyState), { timeout: 20_000 })
      .toBeGreaterThanOrEqual(2);
    const t = () => video.evaluate((v) => (v as HTMLVideoElement).currentTime);
    const geo = await scrubGeometry(page);
    const dur = heroMedia.videoDurationSeconds;
    const scrollTo = (y: number) =>
      page.evaluate((top) => window.scrollTo({ top, behavior: "instant" as ScrollBehavior }), y);

    // início: p = 0 → t ≈ 0
    await scrollTo(geo.top);
    await expect.poll(t, { timeout: 10_000 }).toBeLessThanOrEqual(0.15);

    // meio: p = 0,5 → t ≈ dur/2 (lerp assenta; tolerância de 0,35 s)
    await scrollTo(geo.top + geo.range / 2);
    await expect
      .poll(async () => Math.abs((await t()) - dur / 2), { timeout: 10_000 })
      .toBeLessThanOrEqual(0.35);

    // fim: p = 1 → t ≈ dur, banda 2 visível segurando o repouso
    await scrollTo(geo.top + geo.range);
    await expect.poll(t, { timeout: 10_000 }).toBeGreaterThanOrEqual(dur - 0.25);
    await expect
      .poll(() =>
        page.evaluate(
          () =>
            getComputedStyle(document.querySelector<HTMLElement>('[data-band="2"]')!)
              .visibility
        )
      )
      .toBe("visible");

    // reverso: volta para dentro da banda 0 → t cai e banda 2 se esconde
    await scrollTo(geo.top + geo.range * 0.15);
    await expect.poll(t, { timeout: 10_000 }).toBeLessThanOrEqual(dur * 0.35);
    await expect
      .poll(() =>
        page.evaluate(
          () =>
            getComputedStyle(document.querySelector<HTMLElement>('[data-band="2"]')!)
              .visibility
        )
      )
      .toBe("hidden");
  });

  test("reload no meio do scrub retoma sem salto nem tela vazia", async ({ page, isMobile }) => {
    test.skip(Boolean(isMobile), "só desktop");
    test.skip(!finalVideoExists, "hero-scrub.mp4 ausente em public/media/hero");
    await page.goto("/");
    const geo = await scrubGeometry(page);
    const mid = geo.top + geo.range / 2;
    await page.evaluate((top) => window.scrollTo({ top }), mid);
    await page.reload();

    // o poster SSR segura o hero imediatamente — nunca tela vazia
    await expect(page.getByTestId("hero-still")).toBeVisible();
    // alguma banda narrativa está legível na posição restaurada
    await expect
      .poll(() =>
        page.evaluate(() =>
          Math.max(
            ...[...document.querySelectorAll<HTMLElement>("[data-band]")].map((el) =>
              Number(getComputedStyle(el).opacity)
            )
          )
        )
      )
      .toBeGreaterThan(0.3);

    // o vídeo volta a montar e retoma a posição do scroll restaurado
    const video = page.getByTestId("hero-scrub-video");
    await expect(video).toBeAttached({ timeout: 10_000 });
    await expect
      .poll(() => video.evaluate((v) => (v as HTMLVideoElement).readyState), { timeout: 20_000 })
      .toBeGreaterThanOrEqual(2);
    const scrollY = await page.evaluate(() => window.scrollY);
    const p = Math.min(1, Math.max(0, (scrollY - geo.top) / geo.range));
    await expect
      .poll(
        async () =>
          Math.abs(
            (await video.evaluate((v) => (v as HTMLVideoElement).currentTime)) -
              p * heroMedia.videoDurationSeconds
          ),
        { timeout: 10_000 }
      )
      .toBeLessThanOrEqual(0.5);
  });

  test("frame final publicado e íntegro (hero-ending.jpg)", async ({ page, isMobile }) => {
    test.skip(Boolean(isMobile), "só desktop");
    await page.goto("/");
    const dims = await page.evaluate(
      (src) =>
        new Promise<{ w: number; h: number }>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
          img.onerror = () => reject(new Error("ending frame falhou"));
          img.src = src;
        }),
      heroMedia.endingSrc
    );
    expect(dims).toEqual({ w: 1920, h: 1080 });
  });

  test("mobile: hero estático com o still 9:16 do repouso e zero requests de vídeo", async ({
    page,
    isMobile,
  }) => {
    test.skip(!isMobile, "só mobile");
    const media = collectHeroVideoRequests(page);
    await page.goto("/");
    await expect(page.getByTestId("hero-cinema")).toBeVisible();
    await expect(page.getByTestId("hero-still")).toBeVisible();
    const img = page.getByTestId("hero-still").locator("img");
    await expect
      .poll(() => img.evaluate((el) => (el as HTMLImageElement).currentSrc))
      .toContain("hero-still-mobile.jpg");
    await expect(page.getByTestId("hero-cta-orcamento")).toBeVisible();
    await page.waitForTimeout(2000);
    expect(media).toEqual([]);
  });

  test("reduced-motion: hero estático e zero requests de vídeo", async ({ browser, isMobile }) => {
    test.skip(Boolean(isMobile), "coberto no projeto desktop");
    const ctx = await browser.newContext({
      reducedMotion: "reduce",
      viewport: { width: 1440, height: 900 },
    });
    const page = await ctx.newPage();
    const media = collectHeroVideoRequests(page);
    await page.goto("/");
    await expect(page.getByTestId("hero-cinema")).toBeVisible();
    await expect(page.getByTestId("hero-still")).toBeVisible();
    await expect(page.getByTestId("hero-cta-orcamento")).toBeVisible();
    await page.waitForTimeout(2000);
    expect(media).toEqual([]);
    await ctx.close();
  });

  test("save-data: zero requests de vídeo", async ({ page, isMobile }) => {
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
    const media = collectHeroVideoRequests(page);
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

test.describe("sistema de legibilidade do hero (manchas orgânicas)", () => {
  /**
   * Nenhum retângulo, nenhuma borda: a banda 0 leva uma mancha radial
   * na coluna + uma faixa difusa atrás do H1 (feathers ≥12% de tela);
   * as bandas 1–2 levam vinheta lateral entrando pela borda esquerda.
   * Todos os gradientes terminam em transparência TOTAL e acompanham
   * a opacidade da própria banda. Estes testes travam os invariantes.
   */
  const stopsOf = async (page: Page, cls: string, pseudo?: string) =>
    page.evaluate(
      ([c, ps]) => {
        const probe = document.createElement("div");
        probe.className = c;
        document.body.appendChild(probe);
        const bg = getComputedStyle(probe, (ps as string) || undefined).backgroundImage;
        const mask =
          getComputedStyle(probe, (ps as string) || undefined).maskImage ||
          (getComputedStyle(probe, (ps as string) || undefined) as CSSStyleDeclaration & {
            webkitMaskImage?: string;
          }).webkitMaskImage ||
          "";
        probe.remove();
        const parse = (str: string) =>
          [...str.matchAll(/rgba?\(([^)]*)\)\s+([\d.]+)%/g)].map((m) => {
            const parts = m[1].split(",").map((v) => Number(v.trim()));
            return { alpha: parts.length > 3 ? parts[3] : 1, pos: Number(m[2]) };
          });
        return { bg: parse(bg), mask: parse(mask), isRadial: bg.includes("radial-gradient") };
      },
      [cls, pseudo ?? ""]
    );

  const alphaAt = (stops: { alpha: number; pos: number }[], x: number) => {
    if (!stops.length) return -1;
    if (x <= stops[0].pos) return stops[0].alpha;
    for (let i = 0; i < stops.length - 1; i++) {
      const a = stops[i];
      const b = stops[i + 1];
      if (x >= a.pos && x <= b.pos) {
        return a.alpha + ((b.alpha - a.alpha) * (x - a.pos)) / (b.pos - a.pos);
      }
    }
    return stops[stops.length - 1].alpha;
  };

  test("banda 0: mancha radial da coluna com núcleo forte e fim transparente", async ({
    page,
    isMobile,
  }) => {
    test.skip(Boolean(isMobile), "no mobile a mancha é vertical (teste próprio)");
    await page.goto("/");
    const { bg, isRadial } = await stopsOf(page, "hero-pool hero-pool-0");
    expect(isRadial).toBe(true);
    expect(alphaAt(bg, 0)).toBeGreaterThanOrEqual(0.8);
    expect(alphaAt(bg, 60)).toBeGreaterThanOrEqual(0.8);
    // transparência TOTAL no fim — sem isso a mancha vira véu global
    expect(bg[bg.length - 1].alpha).toBe(0);
  });

  test("banda 0: a faixa do H1 protege até ~73% e esmaece nos dois eixos", async ({
    page,
    isMobile,
  }) => {
    test.skip(Boolean(isMobile), "só desktop");
    await page.goto("/");
    const { bg, mask } = await stopsOf(page, "hero-pool hero-pool-0", "::before");
    expect(alphaAt(bg, 72)).toBeGreaterThanOrEqual(0.8);
    expect(bg[bg.length - 1].alpha).toBe(0);
    // esmaecimento vertical com feather longo (≥8% por lado) e fim em 0
    expect(mask.length).toBeGreaterThanOrEqual(4);
    expect(mask[0].alpha).toBe(0);
    expect(mask[mask.length - 1].alpha).toBe(0);
  });

  test("bandas 1–2: vinheta lateral esquerda que morre antes do livro", async ({
    page,
    isMobile,
  }) => {
    test.skip(Boolean(isMobile), "bandas 1–2 são desktop-only");
    await page.goto("/");
    for (const [cls, nucleo] of [
      ["hero-pool hero-pool-1", 45],
      ["hero-pool hero-pool-2", 48],
    ] as const) {
      const { bg, mask } = await stopsOf(page, cls);
      expect(alphaAt(bg, 0), `${cls} x=0`).toBeGreaterThanOrEqual(0.8);
      expect(alphaAt(bg, nucleo), `${cls} núcleo`).toBeGreaterThanOrEqual(0.8);
      expect(alphaAt(bg, 85), `${cls} x=85`).toBeLessThanOrEqual(0.02);
      expect(bg[bg.length - 1].alpha, `${cls} fim`).toBe(0);
      // topo e base do quadro livres: máscara vertical começa e termina em 0
      expect(mask[0].alpha, `${cls} mask topo`).toBe(0);
      expect(mask[mask.length - 1].alpha, `${cls} mask base`).toBe(0);
    }
  });

  test("nenhuma rampa desenha borda: saltos ≤0,2 por 2% em todos os gradientes", async ({
    page,
    isMobile,
  }) => {
    test.skip(Boolean(isMobile), "geometria desktop");
    await page.goto("/");
    for (const [cls, pseudo] of [
      ["hero-pool hero-pool-0", undefined],
      ["hero-pool hero-pool-0", "::before"],
      ["hero-pool hero-pool-1", undefined],
      ["hero-pool hero-pool-2", undefined],
    ] as const) {
      const { bg } = await stopsOf(page, cls, pseudo);
      let maiorSalto = 0;
      for (let x = 0; x < 100; x += 2) {
        maiorSalto = Math.max(maiorSalto, Math.abs(alphaAt(bg, x) - alphaAt(bg, x + 2)));
      }
      expect(maiorSalto, `${cls}${pseudo ?? ""}`).toBeLessThanOrEqual(0.2);
    }
  });

  test("mobile: mancha vertical difusa com base aberta", async ({ page, isMobile }) => {
    test.skip(!isMobile, "só mobile");
    await page.goto("/");
    const { bg, isRadial } = await stopsOf(page, "hero-pool hero-pool-0");
    expect(isRadial).toBe(true);
    expect(alphaAt(bg, 0)).toBeGreaterThanOrEqual(0.8);
    expect(bg[bg.length - 1].alpha).toBe(0);
  });

  test("as manchas acompanham a opacidade das bandas durante o scrub", async ({
    page,
    isMobile,
  }) => {
    test.skip(!scrubOn, "precisa do build com a flag ligada");
    test.skip(Boolean(isMobile), "scrub é desktop-only");
    await page.goto("/");
    const geo = await scrubGeometry(page);
    const opacityOf = (n: number) =>
      page.evaluate(
        (i) => Number(getComputedStyle(document.querySelector(`.hero-pool-${i}`)!).opacity),
        n
      );
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), geo.top + geo.range * 0.52);
    await expect.poll(() => opacityOf(1), { timeout: 10_000 }).toBeGreaterThan(0.6);
    await expect.poll(() => opacityOf(0), { timeout: 10_000 }).toBeLessThan(0.1);
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), geo.top + geo.range);
    await expect.poll(() => opacityOf(2), { timeout: 10_000 }).toBeGreaterThan(0.6);
    await expect.poll(() => opacityOf(1), { timeout: 10_000 }).toBeLessThan(0.1);
  });

  test("flag OFF: nenhuma camada do sistema é renderizada (mudança escopada)", async ({
    page,
  }) => {
    test.skip(scrubOn, "build atual está com a flag ligada");
    await page.goto("/");
    await expect(page.locator(".hero-pool")).toHaveCount(0);
    await expect(page.locator(".hero-veil-top")).toHaveCount(0);
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
