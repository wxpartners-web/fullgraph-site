# Sistema de motion

Tokens centralizados em `src/lib/motion-tokens.ts` (espelhados em CSS custom properties em `globals.css`). Nenhum componente define duração/easing próprios.

## Tokens

| Token | Valor | Uso |
| --- | --- | --- |
| `duration.micro` | 190 ms | hover, registro de tinta, feedback |
| `duration.component` | 400 ms | reveals, cards, etapas do wizard |
| `duration.page` | 750 ms | transição de rota |
| `duration.intro` | 700 ms | intro de marca (1x por sessão, só desktop) |
| `easeOutExpo` | `cubic-bezier(0.22, 1, 0.36, 1)` | easing principal |
| `easeInOutInk` | `cubic-bezier(0.83, 0, 0.17, 1)` | elementos que atravessam a tela |

Springs não são usados — nenhum movimento aqui tem física que os justifique.

## Peças

1. **BrandIntro** (`components/motion/BrandIntro.tsx`) — na primeira visita da sessão, o logotipo converge de um desregistro cyan/magenta sobre papel (drop-shadows coloridos animados) e a folha sobe liberando o hero (0,7 s + 0,42 s de saída). Controlado por `sessionStorage` (`fullgraph:intro-seen`). Guard-rails: só em desktop (≥1024px com hover), pulada se a hidratação demorar >900 ms (dispositivo lento) e em `prefers-reduced-motion` — a intro nunca pode custar LCP.

2. **PageTransition** (`components/motion/PageTransition.tsx`) — montada via `app/template.tsx` (remonta a cada navegação). Uma folha de papel com fio de corte varre a tela de baixo para cima (~460 ms) enquanto o conteúdo novo entra com fade+rise. Implementada com **animações CSS** (compositor): continua fluida mesmo com a main thread ocupada e `forwards` garante o estado final. Primeira carga da sessão não anima (a intro cobre). Reduced-motion: sem transição.

2b. **Entrada do hero** — CSS puro (`.hero-rise`), começa antes da hidratação. Só anima em desktop; no mobile o texto pinta imediatamente (LCP e conversão primeiro).

3. **Reveal / RevealGroup** (`components/motion/Reveal.tsx`) — reveal editorial padrão (fade+rise 24px) e variante `clip` (máscara de corte) para headlines. `whileInView` com `once: true`. Usado com parcimônia — não em toda seção. Reduced-motion: render estático.

4. **Registro de tinta** (`.ink-register-hover` em CSS) — no hover/focus de CTAs, o texto separa em sombras cyan/magenta ±3px e reconverge em 190 ms. Implementação pura CSS (`text-shadow` keyframes).

5. **Cards de produto** (`ProductDrawerCard`) — hover: o mockup ganha `rotateX(4°)` + elevação (inclinação máxima controlada), as camadas de papel de fundo se separam ±8px, a spec técnica surge por opacity (sem layout shift). Tudo CSS puro; em touch, tudo fica visível (`@media (hover:none)`).

6. **NarrativeScroll** — seção sticky (~70vh por etapa, 6 etapas) SEM scroll-jacking: o scroll nativo continua; `useScroll` mapeia progresso → etapa; a folha central troca de estado (arquivo → chapas CMYK → passada de tinta → corte → capa → etiqueta de envio) com crossfades de 240–400 ms. Reduced-motion: lista estática completa.

7. **Hero 3D** (`components/three/HeroScene.tsx`) — flutuação senoidal de baixa amplitude (±0,07–0,1un), parallax de cursor limitado (±0,06/0,1 rad com lerp 0,05), leve reorganização com o scroll. DPR ≤ 1,75, `frameloop` pausado fora de vista, poster CSS por baixo até o primeiro frame (`onCreated`). Touch/reduced/sem-WebGL: poster com deriva CSS de 7s (ou estático).

8. **QuoteWizard** — etapas trocam com slide+fade de 320 ms (`AnimatePresence mode="wait"`), barra de progresso com transição de width, mockup reativo com transições CSS de 400 ms (espessura do livro, proporção da caixa, dobras do folder, altura da pilha, brilho do acabamento). Área de pergunta tem `min-height` fixo — zero layout shift.

## Guard-rails

- Todo motion passa por `useReducedMotion`/`@media (prefers-reduced-motion)`.
- Lenis só em desktop com pointer fino e sem reduced-motion (lerp 0,12).
- Proibido no projeto: mouse trail, cursor custom, scroll-jacking, parallax agressivo, autoplay de áudio/vídeo, animação que cause CLS.
