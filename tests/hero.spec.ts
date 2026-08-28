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

test.describe("sistema de legibilidade do hero (poças por banda)", () => {
  /**
   * O platô global anterior (0,85 sobre 72% da largura) passava no
   * contraste escondendo o livro e o movimento do vídeo. O sistema
   * atual segue a skill 10K: poça de sombra POR BANDA, acoplada à
   * opacidade da própria banda, morrendo antes do material em
   * movimento. Estes testes travam a geometria de cada poça.
   */
  const gradientStops = async (page: Page, cls: string) =>
    page.evaluate((c) => {
      const probe = document.createElement("div");
      probe.className = c;
      document.body.appendChild(probe);
      const bg = getComputedStyle(probe).backgroundImage;
      probe.remove();
      const linear = bg.slice(bg.indexOf("linear-gradient"));
      return [...linear.matchAll(/rgba?\(([^)]*)\)\s+([\d.]+)%/g)].map((m) => {
        const parts = m[1].split(",").map((v) => Number(v.trim()));
        return { alpha: parts.length > 3 ? parts[3] : 1, pos: Number(m[2]) };
      });
    }, cls);

  const alphaAt = (stops: { alpha: number; pos: number }[], x: number) => {
    if (!stops.length) return 0;
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

  test("banda 0 desktop: núcleo cobre a coluna de texto e morre antes da faixa direita", async ({
    page,
    isMobile,
  }) => {
    test.skip(Boolean(isMobile), "no mobile a poça é vertical (teste próprio)");
    await page.goto("/");
    const stops = await gradientStops(page, "hero-pool hero-pool-0");
    // núcleo forte sobre a coluna de abertura…
    for (const x of [0, 30, 52]) {
      expect(alphaAt(stops, x), `alpha em x=${x}%`).toBeGreaterThanOrEqual(0.8);
    }
    // …e zero antes da faixa onde a luz, o verniz e a tinta vivem
    expect(alphaAt(stops, 85)).toBeLessThanOrEqual(0.02);
    // a barra do itálico (::before) protege a linha laranja até ~77%
    // e morre antes do canto direito
    const barra = await page.evaluate(() => {
      const probe = document.createElement("div");
      probe.className = "hero-pool hero-pool-0";
      document.body.appendChild(probe);
      const bg = getComputedStyle(probe, "::before").backgroundImage;
      probe.remove();
      const linear = bg.slice(bg.indexOf("linear-gradient"));
      return [...linear.matchAll(/rgba?\(([^)]*)\)\s+([\d.]+)%/g)].map((m) => {
        const parts = m[1].split(",").map((v) => Number(v.trim()));
        return { alpha: parts.length > 3 ? parts[3] : 1, pos: Number(m[2]) };
      });
    });
    expect(alphaAt(barra, 76)).toBeGreaterThanOrEqual(0.8);
    expect(alphaAt(barra, 90)).toBeLessThanOrEqual(0.02);
  });

  test("bandas 1 e 2: a poça morre antes da metade direita do quadro", async ({
    page,
    isMobile,
  }) => {
    test.skip(Boolean(isMobile), "bandas 1–2 são desktop-only");
    await page.goto("/");
    for (const [cls, nucleo, fim] of [
      ["hero-pool hero-pool-1", 46, 76],
      ["hero-pool hero-pool-2", 48, 78],
    ] as const) {
      const stops = await gradientStops(page, cls);
      expect(alphaAt(stops, 0), `${cls} x=0`).toBeGreaterThanOrEqual(0.8);
      expect(alphaAt(stops, nucleo), `${cls} núcleo`).toBeGreaterThanOrEqual(0.8);
      expect(alphaAt(stops, fim), `${cls} fim`).toBeLessThanOrEqual(0.02);
    }
  });

  test("mobile: poça vertical da banda 0 cobre as linhas e abre na base", async ({
    page,
    isMobile,
  }) => {
    test.skip(!isMobile, "só mobile");
    await page.goto("/");
    const stops = await gradientStops(page, "hero-pool hero-pool-0");
    // as linhas de texto vivem entre y≈15% e y≈80%
    for (const y of [15, 40, 70, 80]) {
      expect(alphaAt(stops, y), `alpha em y=${y}%`).toBeGreaterThanOrEqual(0.8);
    }
    // a base fica aberta: é onde a pilha de papel brilha sem texto
    expect(alphaAt(stops, 100)).toBeLessThanOrEqual(0.2);
  });

  test("nenhuma rampa desenha borda dura", async ({ page, isMobile }) => {
    test.skip(Boolean(isMobile), "geometria desktop");
    await page.goto("/");
    for (const cls of ["hero-pool hero-pool-0", "hero-pool hero-pool-1", "hero-pool hero-pool-2"]) {
      const stops = await gradientStops(page, cls);
      let maiorSalto = 0;
      for (let x = 0; x < 100; x += 2) {
        maiorSalto = Math.max(maiorSalto, Math.abs(alphaAt(stops, x) - alphaAt(stops, x + 2)));
      }
      expect(maiorSalto, cls).toBeLessThan(0.35);
    }
  });

  test("as poças acompanham a opacidade das bandas durante o scrub", async ({
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
    // meio da banda 1: poça 1 acesa, poças 0 e 2 apagadas
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), geo.top + geo.range * 0.52);
    await expect.poll(() => opacityOf(1), { timeout: 10_000 }).toBeGreaterThan(0.6);
    await expect.poll(() => opacityOf(0), { timeout: 10_000 }).toBeLessThan(0.1);
    // repouso: poça 2 acesa, poça 1 apagada
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
