/**
 * Redirects permanentes do site antigo grafica.fullgraph.com.br (PHP,
 * 21.561 URLs no sitemap) para o site novo fullgraph.com.br.
 *
 * Fontes do mapa: projetos/fullgraph-grafica-editora/site-antigo-inventario.md
 * (seções 4 e 5) e as seções "301/legado" de rascunhos/<slug>/pesquisa.md.
 *
 * Toda regra tem `has: host = grafica.fullgraph.com.br`, então o domínio
 * principal nunca é afetado. Ordem (o Next aplica a primeira que casar):
 *   1. 1:1 das URLs que ranqueiam (inclui overrides de cidade)
 *   2. 1:1 das cidades novas (só entra quando a rota existe em cities.ts)
 *   3. categorias do 1º segmento (raiz + /categoria/*)
 *   4. páginas de palavra-chave na raiz (~300), por padrão do slug
 *   5. institucionais
 *   6. fallback: qualquer outra URL → /produtos (nunca a home, risco de soft-404)
 *
 * /robots.txt e /sitemap*.xml do host antigo ficam fora do fallback: são
 * reescritos (legacyHostRewrites) para a cópia do sitemap antigo em
 * public/legacy-grafica/, para o Google recrawlear as URLs e achar os 301.
 */

export const LEGACY_HOST = "grafica.fullgraph.com.br";
export const TARGET_ORIGIN = "https://fullgraph.com.br";

/* O valor de `has.host` é uma regex ancorada (^…$) no Next: escapar os pontos. */
const HOST_MATCH = [{ type: "host" as const, value: LEGACY_HOST.replace(/\./g, "\\.") }];

export interface LegacyRedirect {
  source: string;
  destination: string;
  permanent: true;
  has: typeof HOST_MATCH;
}

export interface LegacyRewrite {
  source: string;
  destination: string;
  has: typeof HOST_MATCH;
}

/** Par origem → rota do site novo (caminho relativo, sem domínio). */
type Mapping = readonly [source: string, route: string];

const P = {
  livros: "/produtos/impressao-de-livros",
  apostilas: "/produtos/apostilas-e-espirais",
  revistas: "/produtos/impressao-de-revistas",
  catalogos: "/produtos/impressao-de-catalogos",
  jornais: "/produtos/jornais-e-tabloides",
  flyers: "/produtos/flyers-e-panfletos",
  folders: "/produtos/folders-e-dobrados",
  papelaria: "/produtos/papelaria-institucional",
  envelopes: "/produtos/envelopes-personalizados",
  pastas: "/produtos/pastas-personalizadas",
  bandeja: "/produtos/papeis-de-bandeja-personalizados",
  hamburguer: "/produtos/embalagens-para-hamburguer",
  rotulos: "/produtos/rotulos-e-etiquetas",
  cadernos: "/produtos/cadernos-personalizados",
  calendarios: "/produtos/calendarios-personalizados",
  banners: "/produtos/banners-e-grandes-formatos",
  comunicacaoVisual: "/produtos/comunicacao-visual",
} as const;

/* ------------------------------------------------------------------ */
/* 1. URLs que ranqueiam / têm backlinks (inventário + pesquisas)       */
/* ------------------------------------------------------------------ */
export const PRIORITY_REDIRECTS: readonly Mapping[] = [
  // Top 20 por tráfego (inventário, seção 1) e overrides das pesquisas
  ["/papelaria-para-escritorios/papelaria-de-escritorio/papelaria-de-escritorio-sudoeste", P.papelaria],
  ["/papelaria-para-escritorios/papelaria-para-escritorio/papelaria-de-escritorio-sudoeste", P.papelaria],
  ["/impressao-de-livro/impressao-de-livros-em-brasilia/grafica-impressao-de-livros-telefone-taguatinga-sul", "/grafica-taguatinga"],
  ["/impressao-de-revista/impressao-revista-online/onde-faz-impressao-grafica-revista-sobradinho-ii", P.revistas],
  ["/impressao-de-livro/impressao-de-livros/impressao-de-livros-asa-norte", P.livros],
  ["/papelaria-para-escritorios/papelaria-de-escritorio/atacado-de-papelaria-e-material-de-escritorio-sia", P.papelaria],
  ["/comunicacao-visual/empresa-de-comunicacao-visual-em-brasilia/contato-de-grafica-e-comunicacao-visual-recanto-das-emas", P.comunicacaoVisual],
  ["/impressao-revistas-em-brasilia", P.revistas],
  ["/comunicacao-visual/agencia-de-comunicacao-visual/servico-de-comunicacao-visual-design-luziania", "/grafica-luziania"],
  ["/comunicacao-visual/agencia-de-comunicacao-visual/servico-de-comunicacao-visual-fachada-luziania", "/grafica-luziania"],
  ["/comunicacao-visual/comunicacao-visual-placas/grafica-comunicacao-visual-sobradinho", P.comunicacaoVisual],
  ["/impressao-de-revista/impressao-revista-online/impressao-grafica-revista-nucleo-bandeirante", P.revistas],
  ["/comunicacao-visual/agencia-de-comunicacao-visual/contato-de-grafica-comunicacao-visual-riacho-fundo-ii", P.comunicacaoVisual],
  ["/impressao-de-livro/impressao-de-livros-em-brasilia/impressao-de-livros-e-apostilas-aguas-claras", "/grafica-aguas-claras"],
  ["/comunicacao-visual/comunicacao-visual-interna/contato-de-grafica-e-comunicacao-visual-aguas-claras", "/grafica-aguas-claras"],
  ["/comunicacao-visual/agencia-de-comunicacao-visual/grafica-comunicacao-visual-riacho-fundo-i", P.comunicacaoVisual],
  ["/comunicacao-visual/agencia-de-comunicacao-visual/contato-de-grafica-e-comunicacao-visual-caldas-novas", P.comunicacaoVisual],
  ["/grafica-impressao-catalogos", P.catalogos],
  ["/papelaria-para-escritorios/papelaria-material-de-escritorio/papelaria-e-material-de-escritorio-cidade-ocidental", P.papelaria],
  ["/banner-personalizado-em-goiania", P.banners],
  ["/impressao-de-livro/grafica-para-impressao-de-livros/impressao-de-livros-e-apostilas-valor-asa-norte", P.apostilas],
  ["/impressao-de-livro/impressao-de-livros/impressao-de-livros-e-apostilas-valor-asa-norte", P.apostilas],
  ["/comunicacao-visual/empresa-de-comunicacao-visual-em-brasilia/grafica-e-comunicacao-visual-nucleo-bandeirante", P.comunicacaoVisual],
  ["/impressao-de-livro/impressao-de-livros/grafica-para-impressao-de-livros-rio-verde", "/grafica-rio-verde"],
  ["/comunicacao-visual/grafica-comunicacao-visual/grafica-comunicacao-visual-valparaiso-de-goias", "/grafica-valparaiso-de-goias"],
  // Livros: página Posse (pos. 6 em "impressão de livros") e raiz (pos. 11)
  ["/impressao-de-livro/impressao-livros-sob-demanda/impressao-e-encadernacao-de-livros-posse", P.livros],
  ["/impressao-de-livros", P.livros],
  // Revistas (pos. 7, 16, 20, 25), inclusive a de Anápolis: a busca é de produto
  ["/impressao-de-revista/impressao-revistas-em-goiania/impressao-grafica-revista-sudoeste", P.revistas],
  ["/impressao-de-revista/impressao-de-catalogos-e-revistas/impressao-grafica-revista-preco-guara", P.revistas],
  ["/impressao-de-revista/impressao-revistas-em-brasilia/impressao-de-revistas-papel-lado-norte", P.revistas],
  ["/impressao-de-revista/impressao-revistas-em-goiania/impressao-de-revistas-preco-anapolis", P.revistas],
  ["/impressao-de-revistas-pequenas-tiragens", P.revistas],
  // Backlinks por URL (inventário)
  ["/papel-bandeja", P.bandeja],
  ["/papel-para-bandeja-personalizado", P.bandeja],
  ["/impressao-em-papel-jornal", P.jornais],
  ["/impressao-digital-de-jornal-tabloide", P.jornais],
  ["/pasta-l-personalizada", P.pastas],
  // Comunicação visual, timbrado, envelopes, rótulos (pesquisas)
  ["/empresa-de-comunicacao-visual-em-brasilia", P.comunicacaoVisual],
  ["/comunicacao-visual-adesivos", P.comunicacaoVisual],
  ["/comunicacao-visual-para-supermercados", P.comunicacaoVisual],
  ["/papel-timbrado-em-brasilia", P.papelaria],
  ["/papeis-timbrados/papel-timbrado-personalizado/atacado-de-papel-timbrado-grafica-brasilia", P.papelaria],
  ["/envelope-personalizado-a4", P.envelopes],
  ["/rotulo-vinho-personalizado", P.rotulos],
];

/* ------------------------------------------------------------------ */
/* 2. Cidades novas: só viram regra quando a rota existe em cities.ts   */
/*    (evita 301 → 404). Enquanto isso, as URLs caem na categoria.       */
/* ------------------------------------------------------------------ */
export const PENDING_CITY_SLUGS = [
  "grafica-anapolis",
  "grafica-itumbiara",
  "grafica-aparecida-de-goiania",
  "grafica-senador-canedo",
  "grafica-trindade",
  "grafica-jatai",
] as const;

export const PENDING_CITY_REDIRECTS: readonly Mapping[] = [
  // Itumbiara: pos. 5 em "gráfica itumbiara" (pesquisa grafica-itumbiara)
  ["/comunicacao-visual/grafica-comunicacao-visual/grafica-e-comunicacao-visual-telefone-itumbiara", "/grafica-itumbiara"],
  // Anápolis: pos. 10 em "gráfica em anápolis" + 5 irmãs de comunicação visual
  ["/comunicacao-visual/comunicacao-visual-design/grafica-e-comunicacao-visual-anapolis", "/grafica-anapolis"],
  ["/comunicacao-visual/agencia-de-comunicacao-visual/grafica-e-comunicacao-visual-telefone-anapolis", "/grafica-anapolis"],
  ["/comunicacao-visual/comunicacao-visual-design/comunicacao-visual-interna-preco-anapolis", "/grafica-anapolis"],
  ["/comunicacao-visual/comunicacao-visual-para-supermercados/comunicacao-visual-para-supermercados-anapolis", "/grafica-anapolis"],
  ["/comunicacao-visual/comunicacao-visual-para-supermercados/comunicacao-visual-adesivos-preco-anapolis", "/grafica-anapolis"],
  ["/comunicacao-visual/comunicacao-visual-para-supermercados/contato-de-agencia-de-comunicacao-visual-anapolis", "/grafica-anapolis"],
  // Senador Canedo: pos. 8 BR em "grafica senador canedo"
  ["/comunicacao-visual/agencia-de-comunicacao-visual/grafica-comunicacao-visual-telefone-senador-canedo", "/grafica-senador-canedo"],
  // Aparecida de Goiânia, Trindade e Jataí: nenhuma URL legada ranqueia
  // (pesquisas de 05/10); as URLs com o sufixo seguem a regra da categoria.
];

/* ------------------------------------------------------------------ */
/* 3. Categorias do 1º segmento (raiz, /cat/sub e /cat/sub/bairro)     */
/* ------------------------------------------------------------------ */
export const CATEGORY_REDIRECTS: readonly (readonly [categories: readonly string[], route: string])[] = [
  [["impressao-de-livro"], P.livros],
  [["impressao-de-revista", "revistas-personalizadas"], P.revistas],
  [["impressao-de-catalogos"], P.catalogos],
  [["impressao-de-jornais", "impressao-de-tabloides", "jornais-personalizados"], P.jornais],
  [["impressao-de-flyers"], P.flyers],
  [["impressao-de-folders"], P.folders],
  // Receituário fica fora da oferta (Gate 1): o 301 só preserva o sinal
  [["papeis-timbrados", "receituarios-personalizados", "papelaria-para-escritorios"], P.papelaria],
  [["envelopes-personalizados"], P.envelopes],
  [["pastas-personalizadas"], P.pastas],
  [["papeis-de-bandeja"], P.bandeja],
  [["embalagens-para-hamburguer"], P.hamburguer],
  [["rotulos-personalizados"], P.rotulos],
  [
    ["cadernos-personalizados", "cadernos-de-anotacoes-personalizados", "agendas-personalizadas", "agenda-de-anotacoes-personalizado"],
    P.cadernos,
  ],
  [["calendarios-personalizados"], P.calendarios],
  [["banners-personalizados"], P.banners],
  [["comunicacao-visual"], P.comunicacaoVisual],
];

/* ------------------------------------------------------------------ */
/* 4. Páginas de palavra-chave na raiz (1 segmento). A ordem importa:   */
/*    pasta-catalogo vai para pastas antes da regra de catálogo, etc.   */
/* ------------------------------------------------------------------ */
const SEG = "[^/]*";
export const ROOT_KEYWORD_REDIRECTS: readonly (readonly [pattern: string, route: string])[] = [
  [`${SEG}comunicacao-visual${SEG}`, P.comunicacaoVisual],
  [`banners?-${SEG}|painel-banner${SEG}`, P.banners],
  [`(?:mini-)?calendarios?-${SEG}`, P.calendarios],
  [`${SEG}hamburguer${SEG}`, P.hamburguer],
  [`${SEG}bandeja${SEG}`, P.bandeja],
  [`pastas?-${SEG}`, P.pastas],
  [`envelopes?-${SEG}`, P.envelopes],
  [
    `${SEG}timbrado${SEG}|(?:bloco-de-)?receituarios?${SEG}|papelaria${SEG}|material${SEG}escritorio${SEG}|artigos-de-escritorio${SEG}|kit-papelaria${SEG}`,
    P.papelaria,
  ],
  [`rotulos?-${SEG}|adesivo-rotulo${SEG}`, P.rotulos],
  [`cadernos?-${SEG}|agendas?-${SEG}|mini-agenda${SEG}`, P.cadernos],
  [`${SEG}catalogo${SEG}`, P.catalogos],
  [`${SEG}livros?(?:-${SEG})?`, P.livros],
  [`${SEG}revistas?(?:-${SEG})?`, P.revistas],
  [`${SEG}(?:jornal|jornais|tabloides?)${SEG}`, P.jornais],
  [`${SEG}flyers?(?:-${SEG})?`, P.flyers],
  [`${SEG}folders?(?:-${SEG})?`, P.folders],
];

/* ------------------------------------------------------------------ */
/* 5. Institucionais                                                    */
/* ------------------------------------------------------------------ */
export const INSTITUTIONAL_REDIRECTS: readonly Mapping[] = [
  ["/", "/"],
  ["/home", "/"],
  ["/empresa", "/sobre"],
  ["/missao", "/sobre"],
  ["/servicos", "/produtos"],
  ["/mapa-do-site", "/produtos"],
  ["/contato", "/contato"],
  ["/orcamento", "/orcamento"],
];

/* ------------------------------------------------------------------ */
/* 6. Fallback: tudo o que sobrou, menos robots/sitemaps (reescritos)   */
/* ------------------------------------------------------------------ */
export const FALLBACK_ROUTE = "/produtos";
export const FALLBACK_SOURCE = "/:path((?!robots\\.txt$|sitemap(?:-\\d+)?\\.xml$).*)";

/** Pasta em public/ com a cópia do sitemap antigo (servida só no host antigo). */
export const LEGACY_SITEMAP_DIR = "/legacy-grafica";

function redirect(source: string, route: string): LegacyRedirect {
  return { source, destination: `${TARGET_ORIGIN}${route}`, permanent: true, has: HOST_MATCH };
}

/**
 * Monta a lista final, na ordem de prioridade.
 * @param existingCitySlugs slugs presentes em cities.ts no momento do build;
 *   as regras das cidades novas só entram quando a cidade está na lista.
 */
export function buildLegacyRedirects(existingCitySlugs: Iterable<string>): LegacyRedirect[] {
  const cities = new Set(existingCitySlugs);
  const activeCityRedirects = PENDING_CITY_REDIRECTS.filter(([, route]) => cities.has(route.slice(1)));

  return [
    ...PRIORITY_REDIRECTS.map(([source, route]) => redirect(source, route)),
    ...activeCityRedirects.map(([source, route]) => redirect(source, route)),
    ...CATEGORY_REDIRECTS.map(([cats, route]) => redirect(`/:category(${cats.join("|")})/:rest*`, route)),
    ...ROOT_KEYWORD_REDIRECTS.map(([pattern, route]) => redirect(`/:slug(${pattern})`, route)),
    ...INSTITUTIONAL_REDIRECTS.map(([source, route]) => redirect(source, route)),
    redirect(FALLBACK_SOURCE, FALLBACK_ROUTE),
  ];
}

/** robots.txt e sitemaps antigos, servidos no host antigo (rewrites beforeFiles). */
export function buildLegacyRewrites(): LegacyRewrite[] {
  return [
    { source: "/robots.txt", destination: `${LEGACY_SITEMAP_DIR}/robots.txt`, has: HOST_MATCH },
    { source: "/sitemap.xml", destination: `${LEGACY_SITEMAP_DIR}/sitemap.xml`, has: HOST_MATCH },
    { source: "/sitemap-:n(\\d+).xml", destination: `${LEGACY_SITEMAP_DIR}/sitemap-:n.xml`, has: HOST_MATCH },
  ];
}
