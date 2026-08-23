# Handoff para backend

O frontend foi construído frontend-only, mas com costuras claras para cada integração futura. Este documento lista **onde** cada uma se conecta.

## 1. Envio de orçamento (prioridade 1)

- **Ponto de integração:** `src/lib/quote-submit.ts` → `submitQuote(data: QuoteSchema)`. Hoje retorna `{ ok: true }` e loga em dev. Substituir o corpo por `POST /api/orcamento` mantendo a assinatura — o wizard já chama essa função no envio.
- **Payload tipado:** `QuoteSchema` (`src/lib/quote-schema.ts`), validado com Zod no cliente; reutilize o MESMO schema no route handler para validação server-side (`quoteSchema.safeParse`).
- **Mensagem WhatsApp:** `buildWhatsAppMessage()` já monta o resumo formatado — o backend pode reaproveitá-la para notificação interna (e-mail/Slack) ou API oficial do WhatsApp.
- Sugerido: rate-limit, honeypot e persistência do pedido antes do redirect ao WhatsApp.

## 2. WhatsApp / API oficial

- Toda a lógica de link vive em `src/lib/whatsapp.ts` (`whatsappUrl`, `hasWhatsApp`, `whatsappCtaLabel`). Número via `NEXT_PUBLIC_WHATSAPP_NUMBER`.
- Para migrar de `wa.me` para WhatsApp Business API: troque `whatsappUrl()` por chamada a um endpoint próprio; os CTAs (header, hero, footer, barra mobile, wizard, página de produto) consomem apenas essas funções.

## 3. Upload real de arquivos

- A etapa "anexos" do wizard (`QuoteWizard`, step `anexos`) hoje só captura **nomes** (`data.anexos: string[]`) e avisa o usuário disso.
- Para upload real: troque o `onChange` do input por upload direto (S3/R2 presigned URL ou route handler) e armazene as URLs em `anexos`. A UI (dropzone, lista, validação de extensão via `accept`) já existe.

## 4. CMS / catálogo administrável

- Todo o conteúdo estruturado está em `src/data/*.ts` com tipos em `src/types/index.ts` (`Product`, `Category`, `PortfolioItem`, `QuoteOption`). Esses tipos são o contrato: modele as coleções do CMS espelhando-os.
- As páginas consomem apenas os helpers (`getProduct`, `getProductsByCategory`, `getFeaturedProducts`, etc. em `products.ts`) — troque a implementação dos helpers por fetch do CMS sem tocar em componente.
- `generateStaticParams` em `app/produtos/[slug]/page.tsx` deriva do array de produtos; com CMS, use a listagem remota + ISR (`revalidate`).
- Portfolio: substituir itens `placeholder: true` por cases reais (título, segmento, tipo, e futuramente imagens próprias).

## 5. E-commerce / compra online (fase futura)

- A página de produto já separa specs, formatos, materiais, acabamentos e tiragens — os mesmos eixos viram opções de SKU/configurador.
- O `QuoteMockup` reativo é a semente do configurador visual (livro engrossa, caixa muda proporção, etc.).
- "Sob consulta" centralizado: quando houver preço, os pontos a alterar são `ProductDrawerCard`, página de produto e wizard (busque por `Sob consulta`).

## 6. Pagamento e frete

- Nenhum acoplamento existente. O passo "entrega" do wizard já coleta `cidadeUf` + `cep` — o backend de frete pode cotar a partir do CEP (o campo valida `00000-000`).
- Fluxo sugerido: orçamento → proposta com preço → link de pagamento (Pix/cartão) → pedido.

## 7. Formulário de contato

- `app/contato/page.tsx` deliberadamente NÃO tem formulário fake — aponta para o wizard, telefone e e-mail reais. Se quiserem formulário próprio, reutilize `TextField` do wizard e crie `POST /api/contato`.

## 8. SEO programático

- `sitemap.ts` e `robots.ts` derivam de `src/data` — com CMS, passarão a derivar da API automaticamente.
- JSON-LD central em `src/lib/seo.ts` (LocalBusiness, Product, FAQPage) — adicione `AggregateRating`/`Offer` reais quando existirem.

## Dados a confirmar com a Fullgraph antes do go-live

1. Número de WhatsApp comercial (env).
2. Especificações técnicas dos produtos (`data/products.ts`) — gramaturas, formatos e faixas de tiragem são provisórios.
3. Opções do wizard (`data/quote.ts`).
4. Versão oficial negativa do logotipo (hoje gerada por script).
5. Cases reais para o portfolio.
