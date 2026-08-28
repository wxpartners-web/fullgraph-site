# Fullgraph — Plano de modernização premium (revisão para execução autônoma)

> Revisão do plano `quero-planejar-a-moderniza-o-glittery-popcorn.md` (mantido intocado em `%USERPROFILE%\.claude\plans\`), corrigido para a execução autônoma noturna de 2026-08-28 e para os fatos revalidados no código. Este documento é a fonte de verdade desta execução; o relatório vivo está em `docs/reports/fullgraph-autonomous-execution.md`.

## 0. O que muda em relação ao plano original

| Tema | Plano original | Revisão |
|---|---|---|
| Conceito do hero | Conceito A ("Da folha à matéria") com morph folha→livro | **Conceito A+C revisado — sem morph.** Nada se transforma; a câmera percorre uma composição física contínua (ver §2) |
| Fábrica/equipamento | Conceito B descartado, mas A ainda sugeria "corte/vinco" | **Nenhuma fábrica, máquina ou equipamento, nem estilizado.** Só matéria: papel, tinta, bordas, acabamento, objetos prontos |
| Escopo noturno | F0→F4 completas | **Só fases locais seguras** (A–E abaixo). Nada de Higgsfield, Hostinger, deploy, push, créditos |
| CTA | Unificação em fase posterior | **Antecipada para a Fase A** — "Solicitar orçamento" em todos os CTAs primários |
| Hero atual | Removido na F4 | **Preservado como HeroClassic/fallback.** Remoção de Three.js adiada até depois de aprovação humana, deploy e estabilização |
| Higiene (drei, tokens órfãos, fontes, loading/error.tsx) | F0.4 | **Adiada** — baixo retorno, risco desnecessário numa execução autônoma. `loading.tsx`/`error.tsx` só se indispensáveis (não foram) |
| Git | Commits por fase | **Segurança seletiva**: backup branch (`backup/pre-autonomous-20260828-0009`), `git add` somente com caminhos explícitos, nunca `git add .`, nunca push, nunca comandos destrutivos |
| Performance | Lighthouse ≥90/85 como aceite | **Metas, não bloqueadores.** Zero loop de otimização; medir e registrar |
| Safari | "Chrome/Firefox/Safari" no aceite | **Safari real = validação posterior** (pendência). Playwright local só tem Chromium; não baixar navegadores |
| Placeholder do scrub | MP4 H.264 via ffmpeg (testsrc2) | **FFmpeg de sistema ausente.** Alternativa sem instalar nada: WebM VP8 determinístico via ffmpeg do Playwright (`sharp` → JPEG frames → `image2pipe` → `libvpx`), ≤1 MB, marcado `dev-placeholder`. O asset definitivo continua sendo MP4 H.264 GOP 8 (pendente) |

## 1. Estado do Gate 1 (o que está e o que NÃO está aprovado)

**Aprovado (Gate 1 parcial), para esta execução:**
- Direção criativa A+C revisada (§2);
- Arquitetura local do hero cinematográfico atrás de `NEXT_PUBLIC_HERO_SCRUB` (default OFF);
- Copy provisória do hero novo (§3) — só visível com a flag ligada;
- Implementação e testes com asset técnico provisório/mocks.

**NÃO aprovado (bloqueado nos Gates 2–6 + revisão humana):**
- Storyboard detalhado, prompts de geração;
- Qualquer geração paga (frame, vídeo, imagens complementares);
- Asset definitivo e re-encode;
- Troca do hero padrão (flag ON por default);
- Deploy/Hostinger; remoção de HeroClassic/Three.js.

## 2. Conceito A+C revisado — "Percurso da matéria"

A narrativa é construída por uma **câmera macro que percorre uma composição física contínua** montada num estúdio escuro (luz rasante, DOF curto, grão fino). Os objetos **já existem no cenário desde o primeiro frame** — nada derrete, dobra-se em outra coisa, ou sofre morph. A transformação é comunicada pelo **percurso espacial da câmera**, não por metamorfose de objetos.

Beats do percurso (1 shot contínuo, movimento lateral/diagonal com micro push-ins):

1. **Fibras e textura de papel** — macro extremo de papel off-white (#f0ebdd) sob luz rasante; fibras e grão visíveis; metade esquerda do quadro em penumbra calma.
2. **Tinta laranja em movimento controlado** — a câmera alcança uma zona onde tinta laranja (#ff4d00) se espalha/assenta em movimento lento e físico (rolo de tinta parado ao fundo fora de foco é aceitável apenas como forma abstrata; nenhum maquinário reconhecível).
3. **Bordas e camadas em paralaxe** — pilhas de folhas e blocos refilados criam planos em profundidade; a paralaxe do dolly revela camadas.
4. **Oclusão natural** — uma folha passa próxima à lente (fora de foco) ocluindo o quadro por um beat — o "corte de textura" que a skill 10K recomenda para esconder emendas.
5. **Detalhes abstratos de acabamento** — vinco, relevo, verniz refletindo luz em macro; sem faca, sem guilhotina, sem máquina.
6. **Composição final conceitual** — a câmera assenta num still-life: livro fechado, embalagem e impresso corporativo sobre superfície escura, **sem marcas, sem textos, sem logos** ("no text, no logos, no lettering anywhere" — lei 12 da skill). Frame final composto com respiro (lei 4) e metade esquerda calma para o texto (lei 7).

O impacto vem de **iluminação, macrotextura, profundidade, paralaxe, luz, sombra, tinta e precisão de movimento** — não de efeito. Leis da skill honradas: movimento concorda com o scroll (lateral/descendente, lei 1), um sujeito contínuo sem cortes (lei 2 — o "sujeito" é a bancada-percurso), trajetória rígida com vida no quadro (lei 3), final em repouso (lei 4), matérias "perdoáveis" para IA — papel, tinta, luz (lei 5), composição para o layout com faixa esquerda calma (lei 7), oclusão vende a passagem (lei 8/seam law), legibilidade por scrim + auditoria worst-frame (lei 10), pacing por distância de scroll (lei 11).

## 3. Copy provisória do hero novo (flag ON apenas; reversível)

| Slot | Copy |
|---|---|
| Eyebrow | "Gráfica · Brasília → todo o Brasil" |
| H1 | "A sua ideia, impressa com peso e presença." |
| Sub | "Livros, embalagens e grandes tiragens para empresas, editoras e restaurantes." |
| CTA primário | "Solicitar orçamento" → `/orcamento` |
| CTA secundário | "Explorar soluções" → `#solucoes` |
| Banda 2 | "Tinta, papel e acabamento tratados como projeto." |
| Banda 3 | "Do arquivo aprovado à entrega em todo o Brasil." + repetição do CTA |

Com a flag OFF, o site mantém o H1 atual ("Ideias ganham peso, textura e presença.") e o spec `tests/routes.spec.ts` continua válido sem alteração. A copy nova vive somente nos componentes `hero/` novos.

## 4. Fatos revalidados no código (base das fases)

- `hooks.ts:5-19` — `subscribeToMedia(query)` cria um novo subscribe por render → `useSyncExternalStore` re-inscreve o matchMedia a cada render. **Confirmado.**
- `LenisProvider.tsx:15` — `if (isTouch || reduced) return <>{children}</>` troca o tipo do wrapper pós-hidratação em touch → remonta a árvore. **Confirmado.**
- Não existe `useSaveData`. **Confirmado.**
- `Header.tsx` — Escape já fecha o menu (45-50); **não há** focus trap, `aria-modal`, devolução de foco; `aria-controls="menu-mobile"` referencia id inexistente com menu fechado (193 vs 207, AnimatePresence); `aria-expanded` do dropdown mente no hover (102 vs reveal por `group-hover`, 117). **Confirmado.**
- `MobileCtaBar.tsx:19` — sem `env(safe-area-inset-bottom)`. **Confirmado.**
- `SolutionPortals` usa `scroll-mt-16` (4rem) < header 4.5rem (`--header-h`, globals.css:40). **Confirmado.**
- `NarrativeScroll.tsx:212` — altura `6*70vh = 420vh` com visual `hidden md:block` (262): mobile rola ~4,2 telas só de texto; mistura `vh` (212) × `svh` (216). Variante estática já existe (reduced-motion, 184-204) e é reutilizável abaixo de `md`. **Confirmado.**
- Contraste (calculado, não assumido): `#ff4d00`/papel = **2,79:1** (falha até para texto grande); `#e64500`/papel = **3,38:1** (só ≥3:1 texto grande); `carbon/50`/papel = **3,54:1** (falha texto pequeno); `carbon/60` = 4,89:1 ✓. Token novo **`--ink-on-paper: #b83700` = 4,92:1 ✓** (mesma família do ink-orange). `#ff4d00` sobre carbon = 5,91:1 ✓ (seções escuras seguem ok).
- CTAs primários hoje: Hero "Transforme seu projeto em matéria", Header "Orçamento", MobileCtaBar "Orçamento", CtaFinal "Solicitar orçamento" (único já correto). **Confirmado.**
- Baseline: lint ✓ (1 warning pré-existente), typecheck ✓, build ✓ (28 páginas), Playwright **51 passed / 5 skipped / 0 failed**.

## 5. Fases desta execução

### Fase A — Conversão e contraste
- CTAs primários → "Solicitar orçamento" (Hero atual, Header desktop, MobileCtaBar; CtaFinal já correto). WhatsApp permanece secundário; número ausente → fallback `tel:` existente preservado (pendência de negócio).
- Token `--ink-on-paper: #b83700` (+ `--color-ink-paper` no @theme) para texto laranja pequeno sobre papel; laranja original permanece em ícones, elementos gráficos e títulos grandes sobre carbon.
- `carbon/50` (e piores) em texto pequeno sobre papel → `carbon/60`+.
- Checkpoint: `fix: unify quote CTAs and accessible contrast`.

### Fase B — Mobile e acessibilidade
- `MobileCtaBar`: `pb-[env(safe-area-inset-bottom)]`.
- `scroll-mt-16` → `scroll-mt-[calc(var(--header-h)+1rem)]`.
- Menu mobile: focus trap (incluindo o botão X do header, que vive acima do overlay), `role="dialog"` + `aria-modal`, `aria-controls` condicional, foco inicial no menu e devolvido ao botão, Escape (já existia — mantido).
- Dropdown desktop: `aria-expanded` sincronizado com hover/focus reais.
- NarrativeScroll: variante estática (a mesma do reduced-motion) também abaixo de `md`; sticky só em `md+`; `vh`→`svh` na altura.
- Sem `loading.tsx`/`error.tsx` (não indispensáveis).
- Checkpoint: `fix: improve mobile navigation and motion fallbacks`.

### Fase C — Hooks e motion
- `hooks.ts`: cache module-level de subscribe por query (fim do resubscribe) + `useSaveData` (navigator.connection.saveData OU `(prefers-reduced-data: reduce)`).
- `LenisProvider`: **sempre** renderizar `<ReactLenis root>`, desativando a suavização via options quando touch/reduced (sem trocar o tipo da árvore). Se causar regressão de scroll, reverter só isto.
- Checkpoint: `perf: stabilize responsive motion hooks`.

### Fase D — Hero cinematográfico (flag OFF por default)
- `Hero.tsx` → switcher server fino por `NEXT_PUBLIC_HERO_SCRUB`; hero atual vira `HeroClassic.tsx` (conteúdo intocado).
- Novos: `src/components/hero/HeroCinema.tsx` (server: seção alta + sticky + texto SSR + poster SSR + scrims), `HeroScrubController.tsx` (client: gates vivos, progress, CSS vars por banda), `HeroScrubVideo.tsx` (client, `dynamic ssr:false` DENTRO de client component, defer pós-idle, fetch→Blob→objectURL com watchdog, motor de seek), `HeroStill.tsx` (server: fallback estático), `src/lib/scrub.ts` (puro: lerp frame-rate-independent, seek-gate, smoothstep, bandas), `src/lib/hero-media.ts` (manifest).
- Motor: progress via `useScroll` do motion; lerp dt-normalizado (k calibrável ~0.3 por causa do Lenis); seek-gate deadlock-safe (coalesce + 1 follow-up + reset em error); delta-gate ≥0.008 nas CSS vars; rAF dorme convergido; IntersectionObserver desarma fora de vista; objectURL revogado e listeners limpos; fetch só em desktop elegível (≥1024px, pointer fine, sem touch, sem reduced-motion, sem save-data); guard extra iPad (`maxTouchPoints > 1`).
- Fallbacks: mobile sem pin (min-h-svh), reduced-motion estático, save-data estático, erro/timeout/ausência de mídia → poster; H1 + CTA no HTML inicial (SSR); vídeo `muted playsInline aria-hidden tabIndex=-1`.
- Placeholder: WebM VP8 determinístico ≤1 MB (`dev-placeholder`, §0) OU mocks se o encode falhar.
- Checkpoint: `feat: add feature-flagged cinematic hero architecture`.

### Fase E — Testes e revisão visual
- `tests/hero.spec.ts`: flag off → HeroClassic intacto; mobile/reduced-motion/(save-data quando testável) → **zero** requests a `/media/hero/*`; H1+CTA presentes sem JS; fallback de erro de mídia; flag on (projeto/fixture dedicado) → hero cinema monta, progress muda `currentTime` (quando placeholder existir), sem erros de console.
- Menu mobile: foco preso e devolvido. CTA consistente. Contraste dos tokens (asserção computada).
- Screenshots 1440×900 e 390×844: hero início/meio/fim, menu aberto, /orcamento.
- Checkpoint: `test: cover cinematic hero and fallbacks`.

## 6. Aceite por fase
`npm run lint` + `npm run typecheck` + `npm test` verdes; `npm run build` quando arquitetura/bundle mudar; `git diff --check` limpo; máx. 2 rodadas de correção automática por fase; falhou → preservar último estável, reverter só a fase, documentar, seguir.

## 7. Pendências deliberadas (amanhã, com aprovação humana)
Storyboard detalhado (Gate 2) · workspace Higgsfield (`hf workspace set`) · preflight gratuito de custo (Gates 3/6) · geração de frames candidatos (Gate 4) · aprovação de frame (Gate 5) · geração do vídeo Seedance 2.0 · re-encode MP4 H.264 GOP 8 (`-g 8 -keyint_min 8 -sc_threshold 0`, ffmpeg real) · auditoria worst-frame (`scripts/hero-contrast.mjs`) · imagens complementares · OG image · número oficial do WhatsApp · validação em Safari real · revisão humana no localhost (G7) · flag ON por default · remoção de HeroClassic + three/R3F · Hostinger/deploy (G8).
