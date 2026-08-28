# Fullgraph — Gate 2: storyboard e prompts do hero cinematográfico

> Documento de aprovação do **Gate 2**. Escrito depois da validação local do hero com
> `NEXT_PUBLIC_HERO_SCRUB=1` (resultados em `docs/reports/fullgraph-autonomous-execution.md`
> e no §22 deste arquivo). **Nada aqui foi executado no Higgsfield. Zero créditos consumidos.**
>
> Fontes: skill `10k-websites` (`SKILL.md` + `references/prompt-laws.md`,
> `references/scrub-pipeline.md`, `references/ffmpeg-recipes.md`) e a skill oficial instalada
> `higgsfield-generate` (`SKILL.md` + `references/model-catalog.md`,
> `references/prompt-engineering.md`), ambas lidas apenas para orientação.
>
> Todas as medidas de enquadramento neste documento saíram de **capturas reais da página
> construída**, não de estimativa. Referência: 1440×900 (`--hero-cinema-h: 400svh`).

---

## 1. Resumo da direção criativa

Uma **única tomada macro contínua**, sem cortes e sem morph, percorrendo uma bancada de
estúdio escuro onde os materiais gráficos já existem desde o primeiro frame. A câmera viaja;
os objetos não se transformam. A narrativa — "matéria bruta → objeto acabado" — é construída
pelo **percurso espacial da câmera**, não por metamorfose.

O que carrega o vídeo: fotografia macro, fibra de papel real, tinta laranja em movimento
físico plausível, luz rasante lateral, sombras longas e suaves, profundidade de campo curta,
paralaxe entre camadas, oclusão natural e um assentamento final em repouso.

O que **não** carrega: efeito, partícula, brilho artificial, fábrica, máquina, mão, texto,
logo. A beleza vem de material e luz.

Paleta, tirada do próprio site: papel `#f0ebdd`, tinta `#ff4d00`, carbono `#0b0b0c`,
branco-técnico `#fafaf7`. Descrita ao gerador **como material e luz**, nunca como hex.

---

## 2. Justificativa do conceito A+C sem morph

| Lei da skill 10K | Como o A+C sem morph a honra |
|---|---|
| 1 — o movimento concorda com o scroll | Trajetória lateral-descendente contínua; rolar para baixo = avançar pela bancada |
| 2 — um sujeito, um movimento, sem cortes | O "sujeito" é o próprio percurso da bancada. **Nada vira outra coisa** — a lei diz explicitamente que transformação entre dois sujeitos é a tomada mais cara e mais frágil de vídeo por IA. Foi o principal motivo de abandonar o morph folha→livro do plano original |
| 3 — trave o caminho, solte o corpo | Trajetória rígida; vida no quadro por tinta que assenta, fibra que respira sob a luz, poeira fina em suspensão |
| 4 — planeje o final primeiro | O último beat é um still-life composto e em repouso, com margem generosa (§13) |
| 5 — escolha sujeitos perdoáveis | Papel, tinta, luz e sombra são exatamente as matérias que a IA renderiza sem erro anatômico. **Nenhuma mão, nenhuma máquina, nenhum rosto** |
| 6 — prefira eixo vertical | Compromisso: lateral-diagonal com micro push-ins. O eixo puro vertical brigaria com a composição em faixas do layout (§3) |
| 7 — componha para o layout | A faixa esquerda do quadro é reservada e calma desde a concepção (§3) |
| 8 — venda as travessias | O beat 4 é uma oclusão física: uma folha passa rente à lente, desfocada |
| 10 — o texto sobre o vídeo merece legibilidade | Scrim em duas camadas + text-shadow + auditoria worst-frame (§22) |
| 11 — ritmo em distância de scroll | Bandas calibradas por flick test real (§22) |
| 12 — guardas permanentes | "no text, no logos, no lettering anywhere" em todo prompt (§17, §18) |

**Por que não é Tier 2 (encadeado):** encadear exigiria 2–3 segmentos a ~54 créditos cada,
e a *seam law* alerta que textura hiperespecífica (fibra de papel é o caso extremo) **não
sobrevive à emenda** — cada geração re-imagina o grão. Uma tomada única de 6 s em Tier 1 é
a escolha correta técnica e orçamentária.

---

## 3. Zonas de texto medidas (a restrição que governa o enquadramento)

Medido na página real, 1440×900. Percentuais sobre a largura/altura do quadro.

| Elemento | Banda | x | y |
|---|---|---|---|
| Eyebrow `Gráfica · Brasília → todo o Brasil` | 0 | 7,8 %–31,6 % | 19,8 %–21,6 % |
| H1 `A sua ideia, impressa com peso e presença.` | 0 | 7,8 %–**69,4 %** | 25,8 %–63,3 % |
| Subtítulo | 0 | 7,8 %–45,7 % | 66,7 %–73,3 % |
| CTAs `Solicitar orçamento` / `Explorar soluções` | 0 | 7,8 %–35,3 % | 77,8 %–84,1 % |
| `Tinta, papel e acabamento tratados como projeto.` | 1 | 7,8 %–46,9 % | 40,6 %–58,9 % |
| `Do arquivo aprovado à entrega em todo o Brasil.` | 2 | 7,8 %–48,6 % | 38,9 %–51,1 % |
| CTA repetido | 2 | 7,8 %–21,4 % | 55,3 %–61,4 % |
| Chip `CMYK · 300 dpi · sangria 3 mm` | fixo | 2,2 %–21,2 % | 93,9 %–97,4 % |
| Chip `BSB → BR` | fixo | 90,6 %–97,8 % | 93,9 %–97,4 % |
| Header | fixo | 0 %–100 % | 0 %–8 % |

### 3.1 A zona livre — onde o interesse visual deve morar

Interseção do complemento de todas as zonas acima **com** o recorte central que sobrevive ao
`object-cover` em retrato (§15):

> **Centro de interesse em x ≈ 54 %, y ≈ 78 % do quadro.**
> Retângulo seguro: **x ∈ [46 %, 63 %], y ∈ [64 %, 92 %]**.

Verificação: livre das três bandas (todas terminam acima de y = 63 % ou à esquerda de
x = 49 %), livre dos chips (y ≥ 94 %), dentro dos 26 % centrais do recorte retrato, e dentro
de y ∈ [12,5 %, 87,5 %] — a faixa que sobrevive ao recorte ultrawide 21:9.

### 3.2 Luminância prevista por região

O scrim base do site (`globals.css`, `.hero-scrim`) é um gradiente 90° sobre `#0b0b0c`:

| x do quadro | alpha do scrim |
|---|---|
| 0 % | 0,80 |
| 36 % | 0,50 |
| 68 % | 0,08 |
| 100 % | 0,28 |

Somado a um radial `0 → 0,50`. Com texto `#fafaf7` e piso de contraste **3,5:1**, o limite
do pixel composto é luminância relativa ≤ 0,17 (≈ valor sRGB 115).

**Regra operacional para o gerador:**

- Sob a faixa de texto (x de 0 % a 47 %): o vídeo pode chegar a **valor sRGB ≤ 190** (75 %) e
  ainda passar, porque o scrim ali vale 0,80→0,43. Alvo confortável: **manter x < 40 % em
  penumbra, valor médio 25–90**.
- Faixa neutra (x 47 %–68 %): o scrim cai rápido. Alvo **valor médio 60–150**.
- Faixa clara (x 68 %–100 %): quase sem scrim. É onde a luz, o brilho do verniz e a tinta
  podem viver. Alvo **valor médio 90–200**, com especulares pontuais mais altos.
- **Alerta específico:** laranja `#ff4d00` puro contra `#fafaf7` dá **3,17:1 — abaixo do
  piso**. Cru, ele não pode ocupar a faixa de texto. Com scrim ≥ 0,43 ele compõe em 8,45:1 e
  fica seguro. Portanto: **massas de tinta laranja saturada só à direita de x = 50 %**, e à
  esquerda apenas como fio, respingo fino ou reflexo — nunca como área.

---

## 4. Duração recomendada

**6,0 segundos.**

- É o padrão comprovado da skill 10K (`prompt-laws.md`: image-to-video, 1080p, 6 s, standard,
  sem áudio) e o ponto exato onde a estimativa de ~54 créditos foi calibrada.
- Seedance 2.0 aceita 4–15 s; durações maiores multiplicam o custo e estouram o orçamento de
  uma tentativa.
- A página mapeia **scroll → progresso**, nunca → segundos. 6 s distribuídos em 2 700 px de
  range dão **450 px de scroll por segundo de vídeo** — ritmo premium, sem corrida.
- Se o *ending-rest check* (§25) mostrar deriva no fim, o conserto é o **tail trim** (cortar
  no último frame estável), não uma nova geração. Encurtar não custa nada à página.

---

## 5. Proporção e resolução recomendadas

| Item | Valor | Razão |
|---|---|---|
| Aspect ratio | **`16:9`** | O palco desktop é `h-svh` com `object-cover`; 16:9 é o enum nativo do Seedance 2.0 |
| Resolução de geração | **`1080p`** (1920×1080) | `prompt-laws.md` é explícito: *"Generate at 1080p, not 4K. The web version gets re-encoded and compressed anyway, and 4K only multiplies the cost"* |
| `bitrate_mode` | **`standard`** (padrão) | Comparar com `high` no preflight gratuito; só subir se o custo não mudar |
| Áudio | **nenhum** | Vídeo de scrub nunca toca; `-an` no re-encode de qualquer forma. `--generate-audio` não é suportado em `seedance_2_0` |
| Frame inicial | **2k, 16:9** (GPT Image 2) | §19 |

**Margem de recorte a respeitar:** em 1440×900 o `object-cover` corta ~5 % de cada lado; em
21:9 corta ~12,5 % de topo e base. Nada essencial fora de **x ∈ [6 %, 94 %], y ∈ [13 %, 87 %]**.

---

## 6. Frame rate recomendado

**24 fps** — o padrão cinematográfico e a saída nativa do modelo. 6,0 s × 24 = **144 frames**
(000–143).

O que importa para o scrub não é o fps e sim a **densidade de keyframes** no re-encode:
`-g 8 -keyint_min 8` dá um keyframe a cada 8 frames = **a cada 1/3 de segundo**, ou a cada
~150 px de scroll. É isso que faz o `currentTime` assentar sem engasgo. Sem esse flag o
scrub gagueja, independentemente do fps.

---

## 7. Tabela temporal completa

Intervalos de 0,5 s cobrindo os 6,0 s inteiros. `p` = progresso de scroll (0–1);
`t = p × 6,0`. Bandas conforme `HERO_BANDS` em `src/lib/hero-media.ts`.

| # | t (s) | p | frames | Beat | Banda ativa |
|---|---|---|---|---|---|
| 01 | 0,0–0,5 | 0,000–0,083 | 000–012 | 1 · fibras | 0 (assentada) |
| 02 | 0,5–1,0 | 0,083–0,167 | 012–024 | 1 · fibras | 0 |
| 03 | 1,0–1,5 | 0,167–0,250 | 024–036 | 1→2 · aproximação | 0 |
| 04 | 1,5–2,0 | 0,250–0,333 | 036–048 | 2 · tinta | 0 |
| 05 | 2,0–2,5 | 0,333–0,417 | 048–060 | 2 · tinta (pico) | **0→1 em t=2,16** |
| 06 | 2,5–3,0 | 0,417–0,500 | 060–072 | 3 · camadas | 1 |
| 07 | 3,0–3,5 | 0,500–0,583 | 072–084 | 3 · paralaxe | 1 |
| 08 | 3,5–4,0 | 0,583–0,667 | 084–096 | 3→4 · oclusão entra | 1 |
| 09 | 4,0–4,5 | 0,667–0,750 | 096–108 | 4→5 · oclusão sai, acabamento | **1→2 em t=4,08** |
| 10 | 4,5–5,0 | 0,750–0,833 | 108–120 | 5 · acabamento | 2 |
| 11 | 5,0–5,5 | 0,833–0,917 | 120–132 | 6 · assentamento | 2 |
| 12 | 5,5–6,0 | 0,917–1,000 | 132–144 | 6 · repouso | 2 |

**Os dois handoffs de texto são motivados visualmente, de propósito:**

- **t = 2,16 s** (banda 0 → 1) cai no **pico de espalhamento da tinta** — o acento visual mais
  forte da primeira metade.
- **t = 4,08 s** (banda 1 → 2) cai **dentro da oclusão** — a folha desfocada cruzando a lente
  esconde a troca de frase. É a *seam law* usada a favor do layout, não de uma emenda.

Nenhum beat depende de um único momento "mágico": cada banda tem 84–102vh de plateau, então
o leitor lê a frase ao longo de 7 a 15 flicks, não num instante.

---

## 8. Descrição visual por intervalo

**Beat 1 — fibras e textura de papel · t 0,0–1,4 s (frames 000–034)**
Macro extremo de papel off-white não revestido. Fibras individuais visíveis, relevo do grão
lendo como paisagem sob luz rasante vinda da direita a ~15° da superfície. Metade esquerda em
penumbra profunda. Poeira fina de papel em suspensão, quase parada. Nenhum objeto reconhecível.

**Beat 2 — tinta laranja em movimento controlado · t 1,4–2,6 s (frames 034–062)**
A câmera alcança uma zona onde tinta laranja densa se espalha e assenta na fibra em movimento
lento e físico — tensão superficial visível, a borda avançando devagar, absorção deixando um
halo mais escuro. **Ocupa o terço direito do quadro.** Nenhum rolo, nenhuma espátula, nenhuma
ferramenta. Pico de espalhamento em t ≈ 2,16 s.

**Beat 3 — camadas e paralaxe · t 2,6–3,9 s (frames 062–094)**
Pilhas de folhas refiladas entram por baixo e pela direita, criando três a quatro planos
nítidos de profundidade. O dolly revela a paralaxe: os planos próximos deslizam mais rápido
que os distantes. Bordas de corte limpas pegando luz especular fina. Oclusão natural entre as
pilhas escurece os vãos.

**Beat 4 — oclusão · t 3,9–4,3 s (frames 094–103)**
Uma única folha passa rente à lente, à direita, **fora de foco e subexposta**, ocluindo 60–70 %
do quadro por ~0,3 s. Não é flare, não é clarão: é uma varredura de sombra. Sai pela esquerda
alta. Do outro lado, a textura pode ser outra sem que se perceba.

**Beat 5 — acabamento · t 4,3–5,2 s (frames 103–125)**
Detalhes abstratos de acabamento em macro: um vinco marcado pegando luz na quina, relevo seco
projetando micro-sombra, verniz localizado devolvendo um reflexo alongado. **Sem faca, sem
guilhotina, sem vinco mecânico visível — só o resultado no material.**

**Beat 6 — composição final · t 5,2–6,0 s (frames 125–143)**
A câmera desacelera e assenta num still-life: um livro fechado, uma caixa de embalagem rígida
e um impresso corporativo empilhados em repouso sobre superfície escura. **Todos sem marca,
sem texto, sem logo.** Luz lateral esculpindo os três volumes. Centro de massa em
**x ≈ 54 %, y ≈ 78 %**. Terço esquerdo e faixa superior em penumbra calma.

---

## 9. Movimento de câmera por intervalo

| Beat | t (s) | Movimento | Velocidade | Observação |
|---|---|---|---|---|
| 1 | 0,0–1,4 | Truck lateral para a direita + micro push-in | Muito lenta, constante | Abre já em movimento; nunca parte do parado |
| 2 | 1,4–2,6 | Continua o truck, diagonal descendente leve | Lenta, sem aceleração | O vetor não quebra |
| 3 | 2,6–3,9 | Dolly para a frente + descida contínua | Lenta, ganho quase imperceptível | A paralaxe faz o trabalho |
| 4 | 3,9–4,3 | Mantém rigorosamente heading e velocidade | Idêntica ao beat 3 | **A oclusão não pode coincidir com mudança de trajetória** |
| 5 | 4,3–5,2 | Push-in desacelerando | Desaceleração suave | Começa a assentar |
| 6 | 5,2–6,0 | Chega ao repouso | → 0, com easing longo | Sem parada seca; sem drift residual |

**Proibido em todo o percurso:** corte, whip pan, zoom agressivo, mudança brusca de direção,
handheld/shake, roll de câmera, mudança de lente no meio da tomada.

---

## 10. Transições

Não há transição no sentido de corte — é uma tomada só. As passagens de beat são
**transições de conteúdo dentro do quadro**:

| Passagem | t | Mecanismo |
|---|---|---|
| 1 → 2 | ~1,4 s | A tinta simplesmente entra no quadro pela direita conforme a câmera avança |
| 2 → 3 | ~2,6 s | Planos de folha sobem no enquadramento; mudança de profundidade, não de assunto |
| 3 → 4 | ~3,9 s | Folha desfocada entra pela direita, próxima à lente |
| 4 → 5 | ~4,3 s | Folha sai pela esquerda alta; o quadro reabre já no mundo do acabamento |
| 5 → 6 | ~5,2 s | A desaceleração da câmera é a transição |

**Transições de texto (feitas em HTML, não no vídeo):** as bandas são adjacentes
(`[0, 0.36] → [0.36, 0.68] → [0.68, 1]`). Uma chega a 0 exatamente onde a próxima começa a
subir. Medido: **maior janela sem texto = 58 ms**, imperceptível a 120 px/flick.

---

## 11. Frame inicial (frame 000 · t = 0,0 s)

Macro extremo de fibra de papel off-white ocupando o quadro de borda a borda. Luz rasante da
direita, ~15° acima da superfície. Terço esquerdo em penumbra (valor sRGB 20–50), centro em
transição, terço direito o mais claro (valor 120–180) com o relevo do grão pegando a luz.
Poeira fina suspensa. Profundidade de campo curta: nítido numa faixa diagonal, desfocado nas
bordas superior e inferior. Nenhum objeto identificável, nenhum texto, nenhuma marca.

**É também o poster desktop** (§14), então precisa ser bonito parado, não só como frame 1.

---

## 12. Frame intermediário principal (frame 072 · t = 3,0 s · p = 0,50)

Meio do beat 3. Três a quatro planos de folhas refiladas em profundidade escalonada, entrando
por baixo e pela direita. Bordas de corte com especular fina. Um resto do laranja do beat 2
sobrevive como fio de cor no plano mais distante, à direita. Terço esquerdo — onde vive
`Tinta, papel e acabamento tratados como projeto.` — permanece calmo e escuro. É o frame de
referência para a auditoria worst-frame da banda 1, o mais crítico dos três.

---

## 13. Frame final (frame 143 · t = 6,0 s)

Still-life em repouso: livro fechado, caixa rígida e impresso corporativo empilhados sobre
superfície escura. Luz lateral esculpindo os três volumes; sombras longas e suaves à esquerda.
Centro de massa em **x ≈ 54 %, y ≈ 78 %**.

**Margens obrigatórias** (lei 4 — o header do site fica por cima do topo, e o `object-cover`
come as bordas):

- Nenhum objeto acima de **y = 15 %** nem abaixo de **y = 93 %**.
- Nenhum objeto essencial fora de **x ∈ [8 %, 92 %]**.
- Terço esquerdo (x < 33 %) e faixa y ∈ [35 %, 62 %] mantidos calmos: é onde vive a frase da
  banda 2 e o CTA repetido.

**Verificação antes de aprovar:** abrir o frame final com o header mockado por cima, em janela
larga (1920×1080) e curta (1440×720). Objeto com o topo cortado lê como acidente; espremido
contra a nav lê como bagunça.

---

## 14. Poster recomendado

| Arquivo | Origem | Uso | Formato |
|---|---|---|---|
| `hero-poster.jpg` | frame **000** | Poster desktop **por baixo do vídeo**, enquanto o blob carrega | 1920×1080, JPEG q2 |
| `hero-ending.jpg` | frame **143** | Asset de design reutilizável nas seções abaixo | 1920×1080, JPEG q2 |
| `hero-still-mobile.jpg` | frame **143**, recortado | Hero estático de mobile / reduced-motion / save-data | 9:16, JPEG q2 |

**Por que o poster desktop é o frame 000 e o still mobile é o 143:** no desktop, o vídeo entra
em `t = 0`; qualquer poster diferente do frame 000 produziria um salto visível na troca. No
mobile o vídeo **nunca** carrega — então o still deve ser a imagem mais bonita e mais
"chegada" que existe, que é a composição final.

```bash
ffmpeg -i public/media/hero/hero-scrub.mp4 -frames:v 1 -q:v 2 review/hero-poster.jpg
ffmpeg -sseof -0.1 -i public/media/hero/hero-scrub.mp4 -update 1 -frames:v 1 -q:v 2 review/hero-ending.jpg
```

---

## 15. Estratégia de crop desktop / mobile

### Desktop
`object-cover` num palco `h-svh`. Recortes calculados:

| Viewport | Aspect | O que sobrevive |
|---|---|---|
| 1440×900 | 1,60 | 90 % da largura (corta 5 % de cada lado) |
| 1920×1080 | 1,78 | 100 % — sem corte |
| 2560×1080 | 2,37 | 75 % da altura (corta 12,5 % topo e base) |
| 1440×720 | 2,00 | 89 % da altura |

→ **Área sempre visível: x ∈ [6 %, 94 %], y ∈ [13 %, 87 %].**

### Mobile
O vídeo **não é baixado** em mobile (gate ativo e verificado: 0 requests). O que aparece é o
still. Mas o still passa pelo mesmo `object-cover`:

Um 1920×1080 dentro de 390×844 (aspect 0,462) escala pela altura → **só os 26 % centrais da
largura sobrevivem** (x ∈ [37 %, 63 %]). Foi essa conta que fixou o centro de interesse em
x ≈ 54 % (§3.1): dentro do recorte retrato **e** fora de todas as zonas de texto do desktop.

**Produção do still mobile — recomendado (0 créditos):** recortar do master.

```bash
# 608×1080 a partir de 1920×1080, centrado em x=54%
ffmpeg -i review/hero-ending.jpg -vf "crop=608:1080:733:0" -q:v 2 review/hero-still-mobile.jpg
```

**Tradeoff honesto:** 608 px de largura exibidos num telefone 3× DPR ficam macios. Como o
still vive atrás de scrim pesado e de texto, é aceitável. Se ler mal na revisão humana, a
alternativa custa ~2 créditos: gerar um still 9:16 dedicado no mesmo mundo (GPT Image 2), ou
usar `reframe` sobre o vídeo aprovado. **Nenhuma das duas está no orçamento desta etapa.**

---

## 16. Estratégia para o scrub

O motor já está implementado e validado (`src/lib/scrub.ts`, `src/components/hero/`). O que o
**asset** precisa entregar para ele funcionar:

1. **Keyframe a cada 8 frames** (`-g 8 -keyint_min 8 -sc_threshold 0`). Sem isso o browser só
   consegue buscar keyframes esparsos e o scrub trava em degraus.
2. **`-movflags +faststart`** — os metadados na frente, para o objectURL tocar de imediato.
3. **`-pix_fmt yuv420p`** — compatibilidade universal de decodificação.
4. **Sem áudio** (`-an`).
5. **Sem detalhe fino com alta frequência temporal.** Grão que cintila entre frames vira
   flicker sob scrub reverso. O grão deve ser do *material*, estático na superfície, não um
   ruído aplicado por frame.
6. **Sem corte.** Um corte faz o `currentTime` saltar de mundo, e o scrub reverso expõe isso
   brutalmente.
7. **≤ 8 MB.** Acima disso, o download por blob precisaria de anel de carregamento visível.

Pipeline em execução, já verificado: `fetch → Blob → objectURL` (independe de HTTP Range),
watchdog de 20 s rearmado por chunk, seek-gate coalescido à prova de deadlock, lerp
independente de frame rate, rAF que dorme ao convergir, `IntersectionObserver` desarmando fora
da viewport, escrita de CSS var com delta-gate de 0,008, zero re-render de React por frame.

---

## 17. Prompt principal para Seedance 2.0

Escrito em inglês, ≤ ~200 tokens conforme `references/prompt-engineering.md` da skill oficial
("Keep it under ~200 tokens. Models distort with very long prompts"). Como o start frame é
passado em `--start-image`, o prompt **descreve o movimento**, não redescreve o quadro parado
— também instrução explícita da skill.

```text
One continuous macro shot, no cuts. The camera trucks slowly right and drifts
diagonally down across a dark studio bench of printing materials, then pushes in
and comes to rest. Premium cinematic macro product photography. Soft directional
studio light rakes across the surface from the right at a low angle.

It travels over raw off-white paper fibers, then reaches controlled orange
printing ink spreading and settling into the fiber with visible surface tension
and absorption, physically plausible, confined to the right third. Layered
trimmed printed sheets rise into frame in three depth planes and reveal parallax
and natural occlusion. At four seconds a single out-of-focus underexposed sheet
sweeps close past the lens from the right and exits upper left. Beyond it,
embossing, a creased fold catching light, and localized spot varnish returning a
long soft reflection.

The shot ends at rest: a closed book, a rigid box and a printed corporate piece
settled together on the dark surface, centered slightly right and low, sculpted
by side light, long soft shadows falling left. Fine paper dust drifts throughout.
Shallow depth of field, editorial composition, stable temporal consistency.

The left third of the frame stays in calm shadow, unlit and uncluttered,
continuous with the scene, reserved as negative space.

No text, no lettering, no logos, no brand marks, no machines, no equipment, no
factory, no hands, no people, no morphing, no melting, no cuts, no flicker, no
warped geometry.
```

**Nota sobre a armadilha de negative space** (`prompt-laws.md`): a última cláusula descreve a
faixa esquerda como *sombra calma e contínua com a cena*, jamais como "vazio" ou "escuridão".
Pedir "generous empty darkness on the left" faz o modelo pintar um painel preto literal e
custa um re-roll.

---

## 18. Negative prompt

⚠️ **Verificar primeiro, de graça:** `higgsfield model get seedance_2_0 --json` diz se o modelo
declara `negative_prompt`. A skill oficial avisa que *"most models don't expose a
negative_prompt"*. **Se não expuser, não passe o parâmetro** — o CLI devolve erro de validação
em parâmetro declarado desconhecido. As exclusões já estão embutidas positivamente no §17.

Se o schema aceitar:

```text
text, lettering, typography, watermark, subtitles, logo, brand mark, signage,
machine, printing press, printer, equipment, conveyor, factory, industrial plant,
hands, fingers, people, faces, morphing, melting, dissolving, shape-shifting,
transformation between objects, hard cut, jump cut, scene change, whip pan,
aggressive zoom, camera shake, handheld, flicker, temporal noise, strobing,
warped geometry, distorted perspective, plastic surface, CGI render look, 3D
render, AI demo aesthetic, oversaturated, excessive particles, sparkles, bokeh
balls, lens flare, black side panels, empty black bars, letterbox
```

Equivalentes positivos, caso `negative_prompt` não exista (já no §17): "physically plausible",
"stable temporal consistency", "one continuous shot, no cuts", "tack sharp where in focus",
"real paper fiber, matte uncoated surface", "uninhabited scene", "continuous scene filling the
frame edge to edge".

---

## 19. Prompt para a imagem inicial (start frame)

**Modelo:** GPT Image 2 — padrão da skill oficial para geração de alta fidelidade.
**Parâmetros:** `--aspect_ratio 16:9 --resolution 2k`. **~2 créditos.**

```text
Extreme macro photograph of raw off-white uncoated paper fiber filling the frame
edge to edge, composed as the first moment of a slow camera move that will travel
right and down across a dark studio bench of printing materials.

Soft directional studio light rakes the surface from the right at a low angle,
raising individual fibers and grain into relief like a landscape. The left third
of the frame recedes into calm continuous shadow, part of the same surface, plain
and uncluttered. The right side is the brightest, warm and dimensional. Fine
paper dust hangs in the air. Shallow depth of field: a sharp diagonal band across
the middle, softly out of focus at the top and bottom edges.

Palette: warm off-white paper, deep carbon shadow, a single distant hint of
orange ink far to the right. Premium cinematic macro product photography,
editorial composition, photorealistic, 16:9.

No text, no logos, no lettering anywhere. No machines, no hands, no people.
```

**Inspeção obrigatória antes de animar** (2 créditos de conserto agora contra 54 desperdiçados
depois): marca registrada infiltrada, texto que o modelo inventou, geometria torta, faixa
esquerda virou painel preto literal, laranja invadindo a faixa de texto, superfície com cara
de plástico ou de render 3D.

---

## 20. Parâmetros exatos recomendados pela skill oficial

### Modelo

`seedance_2_0` — *"Default all-purpose serious video (multi-shot, consistent identity,
motion-heavy, image-to-video, 4–15s requests) → Seedance 2.0. SOTA."*

Não confundir com `seedance_2_5`: a skill é explícita — **não é uma versão mais nova**, é outra
ferramenta (reference/edit/extension) e **limita em 720p**. Trabalho em 1080p fica no 2.0.

### Enums declarados (`references/model-catalog.md`)

| Parâmetro | Valores aceitos | Escolha |
|---|---|---|
| `aspect_ratio` | `auto`, `21:9`, `16:9`, `4:3`, `1:1`, `3:4`, `9:16` | **`16:9`** |
| `duration` | 4–15 s | **`6`** |
| `resolution` | `480p`, `720p`, `1080p`, `4k` | **`1080p`** |
| `bitrate_mode` | `standard`, `high` (padrão `standard`) | **`standard`** |
| Media roles | `image`, `start_image`, `end_image`, `video`, `audio` | **`start_image`** |

### Comandos (a executar **somente depois** da aprovação humana)

```bash
# 1) Start frame — GPT Image 2, ~2 créditos
higgsfield generate create gpt_image_2 \
  --prompt "<prompt do §19>" \
  --aspect_ratio 16:9 --resolution 2k --wait

# 2) Vídeo — Seedance 2.0, ~54 créditos, UMA tentativa
higgsfield generate create seedance_2_0 \
  --prompt "<prompt do §17>" \
  --start-image <caminho-ou-id-do-frame-aprovado> \
  --aspect_ratio 16:9 --duration 6 --resolution 1080p \
  --wait --wait-timeout 20m
```

Regras da skill oficial embutidas acima: `--wait` sempre (nunca o padrão de dois passos
`create` → `wait`); flags de mídia aceitam caminho local **ou** UUID, com upload automático —
não há necessidade de pré-upload; se o gerador oferecer um preset da casa em vez do shot
pedido, **recusar e repetir com o prompt literal**.

Equivalente via conector MCP: `mcp__higgsfield__generate_image` e
`mcp__higgsfield__generate_video`, com `get_cost: true` para o preflight gratuito.

---

## 21. Checklist de preflight gratuito

Nenhum destes passos gasta crédito. Todos devem passar **antes** de qualquer geração.

- [ ] `higgsfield account status` — sessão válida (se falhar: `higgsfield auth login`, interativo)
- [ ] `higgsfield workspace list` / `select_workspace` — workspace correto selecionado
- [ ] `higgsfield model list --json` — confirmar o id real de `seedance_2_0` e `gpt_image_2`
      (a skill avisa: não confiar em busca semântica nem em `--help`; listar sem filtro)
- [ ] `higgsfield model get seedance_2_0 --json` — confirmar enums de `duration`, `resolution`,
      `aspect_ratio`, `bitrate_mode` e **se `negative_prompt` existe** (§18)
- [ ] `higgsfield model get gpt_image_2 --json` — confirmar `aspect_ratio` / `resolution`
- [ ] Custo do frame: preflight de custo do comando exato do §20.1
- [ ] Custo do vídeo: preflight de custo do comando exato do §20.2
- [ ] Custo do **mesmo** shot em `kling3_0` e `seedance_1_5_pro`, para dar ao humano o número
      real da alternativa barata antes de decidir (`prompt-laws.md`: a escolha do modelo é do
      usuário, feita com números na mão)
- [ ] Saldo de créditos (`balance` / `show_plans_and_credits`) — confirmar que cobre o total
      **e** que sobra margem, ou registrar explicitamente que não sobra
- [ ] Confirmar que o prompt não dispara `nsfw` / `ip_detected` (sem figuras públicas, sem
      marcas registradas)
- [ ] ffmpeg completo disponível (`ffmpeg -encoders | grep libx264`). **Hoje não está** — ver §29

---

## 22. Estimativa de créditos (nada foi executado, nada foi consumido)

| Item | Modelo | Parâmetros | Estimativa |
|---|---|---|---|
| Start frame | GPT Image 2 | 16:9, 2k | **~2 créditos** |
| Vídeo do hero | Seedance 2.0 | i2v, 16:9, 6 s, 1080p, standard, sem áudio | **~54 créditos** |
| **Total do caminho recomendado** | | | **~56 créditos** |

**Sinalização honesta:** o teto informado para esta etapa é de **54 créditos, uma tentativa
planejada** — e isso cobre exatamente o vídeo. O start frame de ~2 créditos fica **por cima**
desse teto. A recomendação é gastá-lo mesmo assim: 2 créditos compram a inspeção que protege
os 54 (a skill chama de "cheap insurance"), e é o que permite recusar o shot **antes** da
geração cara. A decisão é do humano; a alternativa é text-to-video sem start frame, a
~54 créditos e com muito mais risco de re-roll.

**Fora do orçamento e não planejados:** re-roll do vídeo (~54), still 9:16 dedicado (~2),
imagens de apoio das seções inferiores (2–4 × ~2), OG image (~2).

Todos os números acima vêm da skill 10K (*"a hero image costs about 2 credits and a hero video
about 54"*) e **precisam ser confirmados pelo preflight gratuito do §21** antes de qualquer
gasto. Se o preflight divergir, o preflight manda.

---

## 23. Critérios objetivos de aprovação

**Do start frame** (antes de gastar os 54):

- [ ] Zero texto, letras, logos ou marcas em qualquer parte do quadro
- [ ] Faixa x < 40 % em penumbra contínua — e **não** um painel preto chapado
- [ ] Nenhuma massa de laranja saturado à esquerda de x = 50 %
- [ ] Superfície lê como papel real, não como plástico nem render 3D
- [ ] Geometria e perspectiva coerentes
- [ ] Composição funciona como frame 1 de um movimento (há para onde ir)

**Do vídeo** (⛔ VIDEO GATE — o humano assiste antes de qualquer integração):

- [ ] **Continuidade:** zero cortes, zero saltos, zero mudança de direção
- [ ] **Ausências:** nenhuma máquina, mão, pessoa, fábrica, texto, logo
- [ ] **Nada de morph:** nenhum objeto vira outro em nenhum momento
- [ ] **Final em repouso:** o *ending-rest check* (§25) mostra a curva `YAVG` caindo de volta
      ao nível inicial; não fica alta até o fim
- [ ] **Sem flicker:** varrer para frente e para trás quadro a quadro; textura não cintila
- [ ] **Legibilidade:** auditoria worst-frame de cada banda ≥ **3,5:1** (método do §25)
- [ ] **Margens do frame final:** verificado com o header mockado, em janela larga e curta
- [ ] **Recorte:** o interesse sobrevive ao corte retrato (26 % centrais) e ao 21:9
- [ ] **Tamanho:** o re-encode fecha em ≤ 8 MB sem sacrificar `-g 8`

## 24. Critérios de reprovação

Qualquer item abaixo **reprova**, sem discussão:

- Texto, letras ou logo gerados dentro do vídeo
- Máquina, prensa, equipamento, esteira ou fábrica visível — mesmo estilizado, mesmo desfocado
- Mão, dedo, braço ou pessoa
- Morph, derretimento ou qualquer objeto virando outro
- Corte, salto de continuidade, whip pan ou zoom agressivo
- Flicker temporal, textura fervendo, cintilação de grão
- Geometria deformada ou perspectiva impossível
- Superfície plástica, estética de demo de IA, excesso de partícula
- Painéis pretos literais nas laterais (armadilha do negative space)
- Massa de laranja saturada sob a faixa de texto reprovando o worst-frame
- Final à deriva (a curva `YAVG` não volta ao nível de repouso) **e** sem nenhum frame estável
  que salve via tail trim
- Qualquer banda abaixo de 3,5:1 de contraste que não seja resolvível por ajuste de scrim

**Regra de parada da skill:** se o conceito falhar **três** tentativas de vídeo, o problema é
de conceito, não de prompt — parar de iterar o prompt e mudar o conceito. Com o orçamento
desta etapa (uma tentativa), a reprovação leva o assunto de volta ao humano, não a um re-roll
automático.

---

## 25. Plano de re-encode

**Pré-requisito:** ffmpeg completo com `libx264`. O ffmpeg do Playwright **não serve** (só
`libvpx`). Instalação (`winget install ffmpeg`) exige aprovação humana explícita — ver §29.

### 25.1 Inspeção antes de tudo (grátis)

```bash
# frames de início, meio e fim do RAW, para inspeção visual
ffmpeg -ss 0 -i review/raw.mp4 -frames:v 1 -q:v 2 review/frame-start.jpg
ffmpeg -ss 3 -i review/raw.mp4 -frames:v 1 -q:v 2 review/frame-mid.jpg
ffmpeg -sseof -0.1 -i review/raw.mp4 -update 1 -frames:v 1 -q:v 2 review/frame-end.jpg

# ending-rest check objetivo: a curva de movimento por frame
ffmpeg -i review/raw.mp4 \
  -vf "tblend=all_mode=difference,signalstats,metadata=print:key=lavfi.signalstats.YAVG" \
  -f null -
```

Ler a cauda da curva `YAVG`: uma chegada **sobe e volta** ao nível inicial; uma deriva
permanece alta até o fim. Se derivar, aplicar o tail trim (§25.2) — não um re-roll.

### 25.2 Encode de scrub — MP4 H.264 (formato de produção)

```bash
ffmpeg -i review/raw.mp4 \
  -c:v libx264 -crf 20 -preset slow \
  -g 8 -keyint_min 8 -sc_threshold 0 \
  -pix_fmt yuv420p -movflags +faststart -an \
  public/media/hero/hero-scrub.mp4
```

**Por que `crf 20` e não o `18` padrão:** a *compression fork* da skill diz que textura
full-frame é a footage mais densa que existe e tolera crf mais alto, mas que **gradiente suave
faz banding** e quebra primeiro. Esta footage tem os dois: macro de fibra (densa) **e** a
penumbra lisa da esquerda (gradiente). `crf 20` é o meio-termo de partida.

**Método de calibração — mexer numa variável por vez:**

1. Encodar em `crf 20`, 1920 de largura. Medir o tamanho.
2. Se > 8 MB: subir para `crf 22`, medir de novo.
3. Se ainda > 8 MB: adicionar `-vf scale=1728:-2`, manter o crf.
4. **Nunca** sacrificar `-g 8` para caber no orçamento. A densidade de keyframe é o que faz o
   scrub existir.
5. Conferir **os frames escuros e lisos da esquerda** procurando banding — não os frames
   ocupados. Avaliar varrendo, não pausando: artefato que sobrevive ao freeze some em movimento.

Com tail trim, se necessário — num passo só:

```bash
ffmpeg -i review/raw.mp4 -t 5.4 \
  -c:v libx264 -crf 20 -preset slow -g 8 -keyint_min 8 -sc_threshold 0 \
  -pix_fmt yuv420p -movflags +faststart -an \
  public/media/hero/hero-scrub.mp4
```

Depois de trimar: **rederivar poster e frame final**, e reverificar as margens do novo frame de
repouso — ele passou a ser a composição em que a página descansa.

### 25.3 Gêmeo WebM VP9 (opcional)

```bash
ffmpeg -i review/raw.mp4 \
  -c:v libvpx-vp9 -crf 32 -b:v 0 -row-mt 1 \
  -g 8 -keyint_min 8 \
  -pix_fmt yuv420p -an \
  public/media/hero/hero-scrub.webm
```

**Recomendação: não enviar o WebM nesta rodada.** O MP4 H.264 toca em todo lugar, Safari
incluído — que é justamente o que o placeholder WebM VP8 atual **não** faz. Servir os dois
exigiria negociação de formato por `canPlayType()` antes do `fetch`, porque o pipeline usa
`fetch → Blob → objectURL` e elementos `<source>` não participam. Isso é mudança de código no
`HeroScrubVideo`, fora do escopo do Gate 2. Fica documentado como opção futura de peso, não
como requisito.

### 25.4 Verificação após cada encode

Extrair frames do arquivo final e olhar. Falha silenciosa de encode pega agora sai de graça.

---

## 26. Orçamento máximo de tamanho dos arquivos

| Arquivo | Teto | Nota |
|---|---|---|
| `hero-scrub.mp4` | **8 MB** | Alvo 4–6 MB. Acima de 8 MB o download por blob exigiria anel de carregamento visível |
| `hero-poster.jpg` | 250 KB | 1920×1080, JPEG q2 |
| `hero-ending.jpg` | 250 KB | 1920×1080, JPEG q2 |
| `hero-still-mobile.jpg` | 180 KB | 9:16 recortado |
| `hero-scrub.webm` (se existir) | 6 MB | Só se o §25.3 for adiante |
| **Total em `public/media/hero/`** | **9 MB** | |

Contexto: hoje o repositório carrega **168 648 bytes** de placeholder. O asset final é ~35–50×
maior — mas só é baixado por desktop elegível, depois do idle, com prioridade `low`, e nunca
por mobile, reduced-motion ou save-data (todos verificados com **0 requests**).

---

## 27. Integração no manifest atual

Um único arquivo muda: `src/lib/hero-media.ts`.

```ts
export const heroMedia: HeroMediaManifest = {
  videoSrc: "/media/hero/hero-scrub.mp4",
  videoBytes: 0,          // ← bytes reais do arquivo encodado
  videoDurationSeconds: 6, // ← duração real (menor, se houve tail trim)
  kind: "final",           // ← sai de "dev-placeholder"
};
```

`HERO_BANDS` e `HERO_SECTION_SVH` **não mudam**: foram calibrados por flick test contra o
motor, não contra o conteúdo do vídeo (o mapeamento progresso→tempo é linear e independente
da duração).

Mudanças acompanhantes, cada uma no seu commit:

1. `src/components/hero/HeroStill.tsx` — trocar o `HeroPoster` (composição CSS) por `<img>`
   do poster real, com `width`/`height` explícitos, `fetchpriority="high"` e `loading="eager"`
   no desktop. É o que remove a ressalva do relatório anterior sobre o subtítulo mobile
   cruzando a folha clara do poster CSS.
2. Excluir `public/media/hero/hero-scrub-placeholder.webm` e `scripts/make-hero-placeholder.mjs`
   — **só depois** de o asset final passar em toda a suíte.
3. `tests/hero.spec.ts` — o gate `placeholderExists` passa a apontar para `hero-scrub.mp4`.
4. Reexecutar a auditoria worst-frame contra o vídeo real (§25) e registrar os números.

**A flag continua desligada por padrão.** Trocar o default é o Gate 7, depois de revisão humana
no localhost.

---

## 28. Procedimento de rollback

Três níveis, do mais barato ao mais completo:

**Nível 1 — desligar a flag (segundos, sem git):**
```powershell
Remove-Item Env:NEXT_PUBLIC_HERO_SCRUB   # ou defina qualquer valor ≠ "1"
npm run build; npm run start
```
`Hero.tsx` volta a renderizar `HeroClassic`, preservado byte a byte. Verificado nesta rodada:
com a flag desligada, **60 passed / 18 skipped / 0 failed**.

**Nível 2 — voltar o manifest ao placeholder:**
```bash
git checkout HEAD~1 -- src/lib/hero-media.ts
```
O motor continua ligado, com a mídia técnica. Serve se o asset final tiver problema mas a
arquitetura estiver boa.

**Nível 3 — reverter o commit do asset:**
```bash
git revert <sha-do-commit-do-asset>
```

Em nenhum nível o `HeroClassic`, o Three.js/R3F ou qualquer outra seção são tocados. A remoção
do `HeroClassic` e das dependências 3D permanece adiada até depois de aprovação, deploy e
estabilização.

---

## 29. Riscos ainda existentes

| # | Risco | Impacto | Mitigação |
|---|---|---|---|
| 1 | **ffmpeg completo ausente** — só o build do Playwright (`libvpx`), sem `libx264` | **Bloqueante.** Sem ele não há MP4 H.264 com GOP 8, e sem GOP 8 não há scrub | Instalar (`winget install ffmpeg`) **com aprovação humana explícita** antes do Gate 6. Confirmar com `ffmpeg -encoders \| grep libx264` |
| 2 | **Uma tentativa só** de vídeo | Reprovação no gate para o pipeline | Gastar os ~2 créditos do start frame e inspecioná-lo a fundo (§19/§23). É o que a skill chama de seguro barato |
| 3 | **Fibra de papel é a textura mais frágil** que existe para consistência temporal | Flicker/fervura sob scrub reverso | Pedir grão *do material* e não ruído por frame (§17); reprovar por flicker (§24). É também o motivo de não encadear (§2) |
| 4 | **Laranja saturado é limítrofe** sob texto branco (3,17:1 cru) | Falha de legibilidade da banda 1 | Massas de laranja restritas a x > 50 % (§3.2); worst-frame ≥ 3,5:1 obrigatório (§23) |
| 5 | **Safari real não validado** | Comportamento desconhecido no motor de scrub | O MP4 H.264 resolve o formato (o placeholder WebM VP8 pode nem tocar). Validação em Safari real segue pendente — WebKit do Playwright não está instalado e não equivale a Safari |
| 6 | **Still mobile recortado fica macio** (608 px de largura em tela 3× DPR) | Cosmético | Aceitável atrás de scrim; alternativa de ~2 créditos documentada no §15 |
| 7 | **Hero cresceu de 300svh para 400svh** | ~1 viewport a mais de scroll antes de `#solucoes`, só em lg+ | Foi o que devolveu às bandas o plateau exigido (§22). CTA primário permanece visível no topo, no header e na barra mobile |
| 8 | **`NEXT_PUBLIC_WHATSAPP_NUMBER` vazio** | CTAs de WhatsApp degradam para `tel:` | Pendência de negócio, sem relação com este gate |
| 9 | **Números de crédito vêm da skill, não da conta** | Custo real pode divergir | O preflight do §21 é gratuito e manda sobre qualquer estimativa deste documento |
| 10 | **Cintilação por compressão em gradiente** na penumbra esquerda | Banding visível justamente sob o texto | Calibração de crf uma variável por vez, inspecionando os frames lisos e escuros (§25.2) |

---

## Apêndice — Validação local que fundamenta este documento

Executada nesta rodada com `NEXT_PUBLIC_HERO_SCRUB=1`, build de produção, Chromium.
**33 verificações, 33 PASS, 0 FAIL.**

### Defeitos encontrados e corrigidos (commit `3fe2549`)

O flick test com amostragem contínua por `requestAnimationFrame` — leituras só depois de cada
passo davam falso negativo, porque o Lenis ainda estava animando — expôs dois defeitos reais:

1. **Hero ficava sem texto nenhum por ~200 ms, duas vezes por passagem.** Os vãos entre as
   bandas (`[0, 0.34] → [0.4, 0.62] → [0.68, 1]`) deixavam 0,06 de progresso sem banda ativa.
   É exatamente o que a lei 11 proíbe.
2. **Plateau da banda 1 em 36vh (~3,2 flicks legíveis)**, contra os 5–6 exigidos. A 300svh o
   range era de apenas 200vh para três bandas.

Correção restrita a `src/lib/hero-media.ts`, sem tocar na matemática de `scrub.ts`: bandas
adjacentes (sem vão, e sem sobreposição — as bandas 1 e 2 ocupam a mesma faixa vertical, então
sobrepor imprimiria texto sobre texto) e seção de 400svh.

| Medida (1440×900, range 2 700 px) | Antes | Depois |
|---|---|---|
| Maior janela sem texto a 120 px/flick | ~200 ms / 108 px | **58 ms / 18 px** |
| Flicks legíveis (≥ 0,9) por banda | [8,3 · **3,2** · 15,1] | **[8,3 · 7,3 · 14,6]** |
| Opacidade máxima a 360 px/flick | — | **[1 · 0,999 · 1]** — nenhuma banda pulável |
| Plateaus | 64 / **36** / 60 vh | **102 / 84 / 90 vh** (faixa da skill: 80–130) |

### Auditoria worst-frame de legibilidade

Método preferido da skill: `visibility: hidden` nos glyphs, screenshot da página composta de
verdade na posição de scroll, pixel mais claro dentro da caixa do texto. Mede todas as camadas
de scrim exatamente como o visitante vê, e é conservador (esconder os glyphs remove também o
text-shadow). Piso: 3,5:1.

| Banda | Elemento | Pior pixel | Contraste |
|---|---|---|---|
| 0 | H1 | rgb(116, 45, 13) | **9,46:1** |
| 0 | Subtítulo | rgb(20, 19, 20) | **17,72:1** |
| 1 | Frase | rgb(192, 66, 8) | **4,99:1** |
| 2 | Frase | rgb(19, 19, 18) | **17,78:1** |
| mobile | H1 | rgb(108, 108, 101) | **5,06:1** |
| mobile | Subtítulo | rgb(109, 107, 101) | **5,10:1** |

A banda 1, a mais apertada, é a que tem o pior pixel laranja — origem direta da regra de §3.2.

### Matriz completa

| Cenário | Resultado |
|---|---|
| Desktop 1440×900 — vídeo monta e decodifica | `readyState=4`, 960 px, 6 s |
| Scrub início / meio / fim | `p=0 → t=0,000s` · `p=0,5 → t=3,000s` · `p=1 → t=6,000s` |
| Carregamento inicial | 86 cores distintas na primeira pintura — **sem tela vazia** |
| Layout shift | **CLS = 0,0000** |
| Rolagem reversa | `t` 6,00 s → 1,20 s; bandas revertem; banda 2 volta a `visibility:hidden` |
| Rolagem rápida (12 saltos extremos) | `t=5,700 s`, esperado 5,700 s — **seek-gate não travou** |
| Reload direto no meio do scrub | progresso 0,550 preservado, `t=3,300 s` = esperado |
| Transição hero → `#solucoes` | gap = **0 px** |
| Sem JavaScript | H1 + CTA + poster presentes, **0 requests de mídia** |
| `prefers-reduced-motion` | hero estático, **0 requests**, 0 elementos de vídeo |
| `Save-Data` | **0 requests**, 0 elementos de vídeo |
| Erro de mídia (rota abortada) | poster segura o hero, 0 erros de página, bandas seguem scroll-driven |
| CTAs desktop | `Solicitar orçamento` → `/orcamento` · `Explorar soluções` → `#solucoes` |
| CTA invisível da banda 2 | `visibility:hidden` e **não recebe foco de teclado** |
| Mobile 390×844 | hero = 844 px (sem pin), **0 requests de mídia** |
| CTAs mobile | hero + barra fixa, ambos `Solicitar orçamento` |
| Menu mobile | `aria-modal="true"`, foco entra, Escape fecha e devolve o foco |
| Console (desktop e mobile) | **0 erros** |

Capturas: `%LOCALAPPDATA%\Temp\claude\C--dev-14-site-fullgraph-fullgraph-site\a246b7ee-78cf-4322-b83a-9c6e0d897926\scratchpad\gate2\shots\`

### Suítes oficiais

| Verificação | Resultado |
|---|---|
| `npm run lint` | 0 erros (1 warning pré-existente do QuoteWizard) |
| `npm run typecheck` | limpo |
| `npm run build` (flag off) | verde, 28 páginas |
| `npm test` (flag off, suíte completa) | **60 passed / 18 skipped / 0 failed** |
| `HERO_SCRUB=1 npx playwright test tests/hero.spec.ts` (build flag on) | **9 passed / 11 skipped / 0 failed** |
| `git diff --check` | limpo |

---

## Próximo passo

Este documento é o **Gate 2**. Ele **precisa de aprovação humana** antes de qualquer comando
Higgsfield. Nenhum crédito foi consumido para produzi-lo, e nenhum será consumido até que a
aprovação exista e o preflight gratuito do §21 tenha passado.
