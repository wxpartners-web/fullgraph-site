import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { test, expect } from "@playwright/test";
// Mesmo compilador de rotas que o Next usa para `redirects()` (módulo interno, sem tipos).
// @ts-expect-error -- next/dist/compiled/path-to-regexp não publica .d.ts
import { pathToRegexp } from "next/dist/compiled/path-to-regexp";
import {
  FALLBACK_ROUTE,
  FALLBACK_SOURCE,
  LEGACY_HOST,
  PENDING_CITY_REDIRECTS,
  PENDING_CITY_SLUGS,
  PRIORITY_REDIRECTS,
  TARGET_ORIGIN,
  buildLegacyRedirects,
  type LegacyRedirect,
} from "../src/lib/legacy-redirects";
import { products } from "../src/data/products";
import { cityPages } from "../src/data/cities";

/* Testes unitários (sem navegador): rodam uma vez só, no projeto desktop. */
test.skip(({ isMobile }) => isMobile, "unitário: roda só no projeto desktop");

const CITY_SLUGS = cityPages.map((c) => c.slug);
const FIXED_ROUTES = [
  "/",
  "/produtos",
  "/portfolio",
  "/sobre",
  "/orcamento",
  "/contato",
  "/solucoes/empresas",
  "/solucoes/livros-editorial",
  "/solucoes/embalagens",
];
const EXISTING_ROUTES = new Set([
  ...FIXED_ROUTES,
  ...products.map((p) => `/produtos/${p.slug}`),
  ...CITY_SLUGS.map((s) => `/${s}`),
]);

/** Replica o casamento do Next (build-custom-route + redirect-status). */
function compile(rules: LegacyRedirect[]) {
  return rules.map((rule) => {
    const re = pathToRegexp(rule.source, [], { strict: true, sensitive: false, delimiter: "/" });
    return { rule, re: new RegExp(re.source.replace(/\$$/, "(?:\\/)?$"), re.flags) };
  });
}

function matcher(rules: LegacyRedirect[]) {
  const compiled = compile(rules);
  return (pathname: string): LegacyRedirect | null =>
    compiled.find(({ re }) => re.test(pathname))?.rule ?? null;
}

function resolver(rules: LegacyRedirect[]) {
  const match = matcher(rules);
  return (pathname: string): string | null => {
    const rule = match(pathname);
    return rule ? rule.destination.replace(TARGET_ORIGIN, "") : null;
  };
}

const currentRules = buildLegacyRedirects(CITY_SLUGS);
const resolve = resolver(currentRules);

function legacySitemapPaths(): string[] {
  const dir = path.join(process.cwd(), "public", "legacy-grafica");
  const files = readdirSync(dir).filter((f) => /^sitemap-\d+\.xml$/.test(f));
  const paths = new Set<string>();
  for (const file of files) {
    const xml = readFileSync(path.join(dir, file), "utf8");
    for (const m of xml.matchAll(/<loc>https?:\/\/grafica\.fullgraph\.com\.br([^<]*)<\/loc>/g)) {
      paths.add(m[1] === "" ? "/" : m[1]);
    }
  }
  return [...paths];
}

test.describe("redirects do legado grafica.fullgraph.com.br", () => {
  test("toda regra exige o host antigo, é permanente e cabe no limite da Vercel", () => {
    expect(currentRules.length).toBeLessThanOrEqual(1024);
    for (const rule of currentRules) {
      expect(rule.permanent).toBe(true);
      expect(rule.has).toHaveLength(1);
      expect(rule.has[0].type).toBe("host");
      expect(LEGACY_HOST).toMatch(new RegExp(`^${rule.has[0].value}$`));
      expect("fullgraph.com.br").not.toMatch(new RegExp(`^${rule.has[0].value}$`));
      expect(rule.destination.startsWith(`${TARGET_ORIGIN}/`)).toBe(true);
    }
  });

  test("URLs prioritárias (1:1) vão para o destino declarado", () => {
    for (const [source, route] of PRIORITY_REDIRECTS) {
      expect(resolve(source), source).toBe(route);
    }
    expect(resolve("/papelaria-para-escritorios/papelaria-de-escritorio/papelaria-de-escritorio-sudoeste")).toBe(
      "/produtos/papelaria-institucional",
    );
    expect(
      resolve("/impressao-de-livro/impressao-de-livros-em-brasilia/grafica-impressao-de-livros-telefone-taguatinga-sul"),
    ).toBe("/grafica-taguatinga");
    expect(resolve("/home")).toBe("/");
    expect(resolve("/papel-bandeja")).toBe("/produtos/papeis-de-bandeja-personalizados");
  });

  test("uma amostra por categoria (raiz, 2 e 3 níveis)", () => {
    const samples: [string, string][] = [
      ["/impressao-de-livro", "/produtos/impressao-de-livros"],
      ["/impressao-de-livro/impressao-livros/impressao-livros-park-sul", "/produtos/impressao-de-livros"],
      ["/impressao-de-revista/impressao-revista-online", "/produtos/impressao-de-revistas"],
      ["/revistas-personalizadas/x/y-guara", "/produtos/impressao-de-revistas"],
      ["/impressao-de-catalogos/imprimir-catalogos/z-gama", "/produtos/impressao-de-catalogos"],
      ["/impressao-de-jornais/a/b", "/produtos/jornais-e-tabloides"],
      ["/impressao-de-tabloides/a/b", "/produtos/jornais-e-tabloides"],
      ["/jornais-personalizados/a/b", "/produtos/jornais-e-tabloides"],
      ["/impressao-de-flyers/a/b", "/produtos/flyers-e-panfletos"],
      ["/impressao-de-folders/a/b", "/produtos/folders-e-dobrados"],
      ["/papeis-timbrados/a/b", "/produtos/papelaria-institucional"],
      ["/receituarios-personalizados/a/b", "/produtos/papelaria-institucional"],
      ["/papelaria-para-escritorios/a/b-noroeste", "/produtos/papelaria-institucional"],
      ["/envelopes-personalizados/a/b", "/produtos/envelopes-personalizados"],
      ["/pastas-personalizadas/a/b", "/produtos/pastas-personalizadas"],
      ["/papeis-de-bandeja/a/b", "/produtos/papeis-de-bandeja-personalizados"],
      ["/embalagens-para-hamburguer/a/b", "/produtos/embalagens-para-hamburguer"],
      ["/rotulos-personalizados/a/b", "/produtos/rotulos-e-etiquetas"],
      ["/cadernos-personalizados/a/b", "/produtos/cadernos-personalizados"],
      ["/cadernos-de-anotacoes-personalizados/a/b", "/produtos/cadernos-personalizados"],
      ["/agendas-personalizadas/a/b", "/produtos/cadernos-personalizados"],
      ["/agenda-de-anotacoes-personalizado/a/b", "/produtos/cadernos-personalizados"],
      ["/calendarios-personalizados/calendario-de-mesa-personalizado/c-gama", "/produtos/calendarios-personalizados"],
      ["/banners-personalizados/a/b", "/produtos/banners-e-grandes-formatos"],
      ["/comunicacao-visual/comunicacao-visual-fachada/x-guara", "/produtos/comunicacao-visual"],
      // páginas de palavra-chave na raiz
      ["/calendario-de-mesa-personalizado", "/produtos/calendarios-personalizados"],
      ["/mini-calendario-personalizado", "/produtos/calendarios-personalizados"],
      ["/pasta-catalogo-personalizada", "/produtos/pastas-personalizadas"],
      ["/envelope-personalizado-em-goiania", "/produtos/envelopes-personalizados"],
      ["/bloco-de-receituario-personalizado", "/produtos/papelaria-institucional"],
      ["/caixa-embalagem-hamburguer", "/produtos/embalagens-para-hamburguer"],
      ["/impressao-de-catalogos-e-revistas", "/produtos/impressao-de-catalogos"],
      ["/impressao-tipo-revista", "/produtos/impressao-de-revistas"],
      ["/graficas-impressao-jornal", "/produtos/jornais-e-tabloides"],
      ["/imprimir-flyers-a5", "/produtos/flyers-e-panfletos"],
      ["/impressao-folder-1-dobra", "/produtos/folders-e-dobrados"],
      ["/grafica-para-impressao-de-livros", "/produtos/impressao-de-livros"],
      ["/rotulo-cerveja-personalizado", "/produtos/rotulos-e-etiquetas"],
      ["/agencia-de-comunicacao-visual", "/produtos/comunicacao-visual"],
      ["/painel-banner-personalizado", "/produtos/banners-e-grandes-formatos"],
      ["/agenda-de-couro-personalizada-anapolis", "/produtos/cadernos-personalizados"],
    ];
    for (const [source, route] of samples) expect(resolve(source), source).toBe(route);
  });

  test("institucionais e fallback (nada fica em 404)", () => {
    expect(resolve("/")).toBe("/");
    expect(resolve("/empresa")).toBe("/sobre");
    expect(resolve("/missao")).toBe("/sobre");
    expect(resolve("/servicos")).toBe("/produtos");
    expect(resolve("/mapa-do-site")).toBe("/produtos");
    expect(resolve("/contato")).toBe("/contato");
    expect(resolve("/orcamento")).toBe("/orcamento");
    expect(resolve("/404")).toBe(FALLBACK_ROUTE);
    expect(resolve("/pagina-que-nunca-existiu")).toBe(FALLBACK_ROUTE);
    expect(resolve("/a/b/c/d")).toBe(FALLBACK_ROUTE);
    // robots e sitemaps antigos não redirecionam (são reescritos para a cópia)
    expect(resolve("/robots.txt")).toBeNull();
    expect(resolve("/sitemap.xml")).toBeNull();
    expect(resolve("/sitemap-22.xml")).toBeNull();
  });

  test("as 21.561 URLs do sitemap antigo (21.560 caminhos: a home aparece com e sem barra) redirecionam; só /404 cai no fallback", () => {
    const paths = legacySitemapPaths();
    expect(paths.length).toBe(21560);
    const match = matcher(currentRules);
    const fallback = paths.filter((p) => match(p)?.source === FALLBACK_SOURCE);
    expect(fallback).toEqual(["/404"]);
    expect(paths.every((p) => resolve(p) !== null)).toBe(true);
  });

  test("bloco das 6 cidades novas: inativo até a rota existir, ativo depois", () => {
    const itumbiara =
      "/comunicacao-visual/grafica-comunicacao-visual/grafica-e-comunicacao-visual-telefone-itumbiara";
    const canedo =
      "/comunicacao-visual/agencia-de-comunicacao-visual/grafica-comunicacao-visual-telefone-senador-canedo";
    const anapolis = "/comunicacao-visual/comunicacao-visual-design/grafica-e-comunicacao-visual-anapolis";

    const pending = PENDING_CITY_SLUGS.filter((s) => !CITY_SLUGS.includes(s));
    if (pending.includes("grafica-itumbiara")) expect(resolve(itumbiara)).toBe("/produtos/comunicacao-visual");

    const withAll = resolver(buildLegacyRedirects([...CITY_SLUGS, ...PENDING_CITY_SLUGS]));
    expect(withAll(itumbiara)).toBe("/grafica-itumbiara");
    expect(withAll(canedo)).toBe("/grafica-senador-canedo");
    expect(withAll(anapolis)).toBe("/grafica-anapolis");
    // URLs com cidade que não ranqueiam seguem a categoria
    expect(withAll("/rotulos-personalizados/rotulo-personalizado/rotulo-personalizado-preco-anapolis")).toBe(
      "/produtos/rotulos-e-etiquetas",
    );
    // a revista de Anápolis ranqueia por produto: 1:1 vem antes da cidade
    expect(withAll("/impressao-de-revista/impressao-revistas-em-goiania/impressao-de-revistas-preco-anapolis")).toBe(
      "/produtos/impressao-de-revistas",
    );
  });

  test("nenhuma regra aponta para rota inexistente (exceto o bloco das cidades novas)", () => {
    for (const rule of currentRules) {
      const route = rule.destination.replace(TARGET_ORIGIN, "");
      expect(EXISTING_ROUTES.has(route), `${rule.source} → ${route}`).toBe(true);
    }
    // Com todas as cidades novas ativas, só o bloco delas pode apontar para rota ainda não criada
    const pendingRoutes = new Set(PENDING_CITY_SLUGS.map((s) => `/${s}`));
    for (const [, route] of PENDING_CITY_REDIRECTS) expect(pendingRoutes.has(route)).toBe(true);
    for (const rule of buildLegacyRedirects([...CITY_SLUGS, ...PENDING_CITY_SLUGS])) {
      const route = rule.destination.replace(TARGET_ORIGIN, "");
      expect(EXISTING_ROUTES.has(route) || pendingRoutes.has(route), route).toBe(true);
    }
  });
});
