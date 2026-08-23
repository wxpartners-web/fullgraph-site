# Direção de design — "Ink Lab"

Conceito central: **"Da ideia à matéria."** O site trata impressão como transformação física — ideias ganham peso, textura e presença — e a interface se comporta como uma bancada de estúdio gráfico: papel, tinta, marcas de registro, especificações técnicas.

## Princípios

1. **Editorial, não template.** Layouts assimétricos, tipografia monumental com contraste sans/serif, espaço negativo generoso. Nada de grade de cards uniforme.
2. **Materialidade honesta.** Papel, tinta e acabamento representados proceduralmente (CSS/SVG/geometria 3D leve) — nunca foto de banco.
3. **CMYK como linguagem, não como paleta.** Cyan e magenta aparecem apenas em microefeitos de registro (hover de CTA, intro, detalhes) — o site nunca vira explosão CMYK.
4. **Comercial em primeiro lugar.** Toda página termina em CTA; WhatsApp/orçamento sempre a um toque; nenhum efeito atrasa conversão.
5. **A aparência premium vem do acabamento** — consistência de tokens, ritmo tipográfico, microdetalhes (marcas de corte, fios pontilhados, números de seção em mono) — não da quantidade de efeitos.

## Paleta

| Token | Hex | Uso |
| --- | --- | --- |
| `--carbon` | `#0B0B0C` | fundo base (com variações `-2`, `-3`) |
| `--paper` | `#F0EBDD` | seções claras "de papel", superfícies |
| `--white-tech` | `#FAFAF7` | texto sobre escuro, folhas |
| `--steel` | `#AEB3BA` | texto secundário sobre escuro |
| `--ink-orange` | `#FF4D00` | ação, destaque, tinta |
| `--reg-cyan` / `--reg-magenta` | `#00C2FF` / `#FF2D78` | SOMENTE efeitos de registro |

Regra de contraste: sobre carbono usar `white-tech`/`steel`; sobre papel usar `carbon` com opacidades (`/75`, `/60`). O laranja nunca é usado para texto pequeno sobre papel.

## Tipografia

- **Instrument Serif (itálico)** — palavras de ênfase dentro de títulos ("matéria", "presença"), menu mobile. Nunca para corpo de texto.
- **Geist** — títulos, texto e interface.
- **IBM Plex Mono** — "voz técnica": specs, números de seção, eyebrows, medidas (classe `.text-spec`).

Escala com `clamp()`: `--text-display` (até 120px), `--text-h1/h2/h3`, `--text-lead`. Títulos usam tracking negativo e line-height ≤ 1.05.

## Vocabulário visual recorrente

- **Marcas de corte** (`.crop-marks`) nos cantos de cards e mockups.
- **Fio pontilhado** (`.rule-dotted`) como guia técnica.
- **Granulação de papel** (`.grain`, SVG feTurbulence a 5%) sobre seções — z-index isolado, nunca interfere no conteúdo.
- **Números de seção** ("01", "02"…) e índices de categoria em mono.
- **"Sob consulta"** em mono laranja no lugar de preço.

## Identidade preservada

Apenas o logotipo original foi mantido (`public/brand/fullgraph-logo.png`), com variante clara gerada programaticamente para fundo escuro preservando proporção e o laranja original. Slogan atual ("Muito mais que impressão") mantido no footer e na página Sobre.

## Referências absorvidas (princípios, não cópia)

- lusion.co — objeto 3D como protagonista discreto, interação sutil de cursor.
- studiofreight.com — tipografia monumental, contraste de escala, espaço negativo.
- locomotive.ca — navegação minimalista, preview no hover, transições com peso.
- iyO/MOO/Packhelp — produto como protagonista, clareza de categoria e specs.
- Fedrigoni/GF Smith — papel como material, percepção tátil.
