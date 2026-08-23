# Fullgraph — Frontend "Ink Lab"

Redesign completo do frontend da Gráfica Fullgraph (grafica.fullgraph.com.br), construído como experiência digital autoral: direção editorial, materialidade de papel e tinta, tipografia monumental, motion system próprio e cena 3D procedural leve.

**Frontend apenas** — sem backend, banco, pagamentos ou upload real. Tudo preparado para integração futura (ver [docs/BACKEND-HANDOFF.md](docs/BACKEND-HANDOFF.md)).

## Stack

| Camada | Ferramenta |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) + React 19 |
| Linguagem | TypeScript estrito |
| Estilo | Tailwind CSS v4 (tokens via CSS custom properties) |
| Motion | [motion](https://motion.dev) (open source) |
| 3D | three + @react-three/fiber v9 + @react-three/drei |
| Scroll | lenis (desativado em touch e reduced-motion) |
| Formulário | react-hook-form + zod v4 |
| Ícones | lucide-react |
| Testes | Playwright |
| Fontes | Instrument Serif · Geist · IBM Plex Mono (via `next/font`, sem requisição externa) |

Notas de compatibilidade: R3F v9 e drei v10 são as versões compatíveis com React 19; motion v13 substitui o Framer Motion.

## Rodando

```bash
npm install
cp .env.example .env.local   # preencha as variáveis (ver abaixo)
npm run dev                  # desenvolvimento
npm run build && npm start   # produção
```

Outros comandos:

```bash
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit
npm test            # Playwright (desktop 1440x900 + mobile 390x844)
node scripts/screenshots.mjs  # screenshots de inspeção (site em :3000)
npm run logo:variant          # regenera a variante clara do logotipo
```

## Variáveis de ambiente (`.env.local`)

| Variável | O que é |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública (canonical/sitemap/OG) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | **IMPORTANTE**: número comercial de WhatsApp, só dígitos com DDI (ex. `5561999999999`). O site antigo não publicava esse número — confirme com a Fullgraph. Sem ele, todos os CTAs de WhatsApp degradam automaticamente para telefone fixo `(61) 3022-0027` e e-mail. |

## Dados que precisam de substituição/confirmação

Todo o conteúdo comercial vive em `src/data/` — nada está hardcoded em componente:

- **`src/data/site.ts`** — telefone, e-mail, endereço (extraídos do site antigo em 2026-08; confirmar), mensagens padrão de WhatsApp.
- **`src/data/products.ts`** — catálogo com 9 famílias e 14 produtos. Especificações técnicas (papéis, gramaturas, tiragens) são **provisórias e plausíveis**; revisar com a produção. Preço nunca aparece — sempre "sob consulta".
- **`src/data/portfolio.ts`** — itens **demonstrativos** (`placeholder: true`); substituir por cases reais autorizados.
- **`src/data/quote.ts`** — opções do formulário de orçamento (formatos, papéis, acabamentos, faixas de tiragem); revisar com a produção.
- **`public/brand/`** — `fullgraph-logo.png` é o logo original do site atual; `fullgraph-logo-light.png` é uma variante clara gerada por `scripts/make-logo-variant.mjs` para fundos escuros ("Full" branco, "Graph" laranja preservado). Se existir uma versão negativa oficial da marca, substitua o arquivo.

## Arquitetura

```
src/
  app/            rotas (App Router) — /, /solucoes/*, /produtos, /produtos/[slug],
                  /portfolio, /sobre, /orcamento, /contato, sitemap, robots
  components/
    layout/       Header (adapta contraste por rota), menu fullscreen, Footer, barra CTA mobile
    motion/       BrandIntro (1x por sessão), PageTransition (folha/guilhotina), Reveal, Lenis
    three/        HeroScene (R3F, geometrias procedurais), HeroPoster (fallback CSS), HeroVisual
    catalog/      ProductMockup (mockups procedurais CSS), ProductDrawerCard
    sections/     Hero, SolutionPortals, NarrativeScroll, FeaturedProducts, Process, etc.
    forms/        QuoteWizard (multietapas), QuoteMockup (prévia reativa)
    ui/           InkButton (microinteração de registro CMYK)
  data/           TODO o conteúdo comercial (ver acima)
  lib/            motion-tokens, seo (metadata + JSON-LD), whatsapp, quote-schema (Zod),
                  quote-submit (ponto de integração backend), hooks (reduced-motion/touch/webgl)
  types/          tipos de domínio
docs/             DESIGN-DIRECTION.md · MOTION-SYSTEM.md · BACKEND-HANDOFF.md
tests/            Playwright: rotas, navegação, catálogo, orçamento completo, WhatsApp, mobile
```

## Validação e Lighthouse

`lint`, `typecheck` e `build` passam sem erros; a suíte Playwright cobre rotas, navegação (desktop + mobile), catálogo, abertura de produto, fluxo completo do orçamento, CTAs de WhatsApp e reduced-motion.

Lighthouse (build de produção, headless):

| Categoria | Desktop | Mobile | Meta |
| --- | --- | --- | --- |
| Accessibility | 96 → 100* | 96 → 100* | ≥95 ✓ |
| Best Practices | 100 | 100 | ≥95 ✓ |
| SEO | 100 | 100 | ≥95 ✓ |
| Performance | ~70–75 | ~63 | 90 / 85 — ver nota |

\* o único apontamento (contraste de `--steel-2`) foi corrigido após a medição.

**Nota sobre performance:** CLS = 0, FCP 0,3 s/1,1 s e LCP 0,9 s/1,9 s — todos verdes. A nota é puxada por TBT/Speed Index, que nesta máquina de desenvolvimento variaram até 10× entre execuções idênticas (pasta sincronizada pelo OneDrive + WebGL por software no headless). Otimizações já aplicadas: 3D nunca carrega em telas <1024px/touch, chunk three.js adiado para depois da primeira pintura com poster CSS por baixo, hero pintando antes da hidratação, intro só em desktop e com guarda de 900 ms, transição de rota em CSS puro. O custo restante é a hidratação do React em CPU 4× emulada; medir em ambiente estável/real antes de novas otimizações (próximo passo seria `LazyMotion` para reduzir o bundle do motion).

## Acessibilidade e degradação

- Navegação completa por teclado (menu, dropdown, wizard); foco visível em tudo.
- `prefers-reduced-motion`: intro pulada, transições desativadas, narrativa de scroll vira lista estática, hero vira poster.
- Sem WebGL / mobile: o hero usa composição CSS ("poster") — nenhuma conversão depende de 3D ou JS pesado.
- WhatsApp indisponível (sem env): CTAs degradam para `tel:` e `mailto:` sem quebrar fluxo.
