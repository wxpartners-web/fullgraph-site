import { site } from "@/data/site";
import { categories, getProductsByCategory } from "@/data/products";

/**
 * /llms.txt — convenção llmstxt.org: um resumo em Markdown simples,
 * na raiz do domínio, que orienta agentes de IA sobre o conteúdo do site.
 *
 * É um Route Handler (e não um arquivo em public/) para que domínio,
 * catálogo e dados comerciais venham das mesmas fontes usadas pelas
 * páginas — src/data/site.ts e src/data/products.ts — evitando que o
 * arquivo descreva rotas ou contatos desatualizados.
 *
 * Regra editorial: só entra aqui o que o site realmente publica.
 * Nada de prazos, preços, certificações ou diferenciais inventados.
 */

export const dynamic = "force-static";

const SOLUTION_PAGES = [
  {
    path: "/solucoes/empresas",
    title: "Gráfica para empresas",
    note: "Papelaria corporativa (cartões, timbrados, envelopes, pastas, blocos e formulários), materiais de comunicação, crachás e materiais de evento e kits corporativos, com estoque para reposição e faturamento após aprovação de cadastro.",
  },
  {
    path: "/solucoes/livros-editorial",
    title: "Livros e editorial",
    note: "Livros, revistas e publicações para autores independentes, editoras e projetos especiais, do arquivo ao acabamento.",
  },
  {
    path: "/solucoes/embalagens",
    title: "Embalagens",
    note: "Caixas personalizadas, caixas para hambúrguer, sacos, papéis de bandeja e rótulos para marcas, restaurantes, hamburguerias e redes de alimentação.",
  },
] as const;

/** Cidades com página própria — atendidas a partir de Brasília, sem endereço local */
const CITY_PAGES = [
  {
    path: "/grafica-goiania",
    title: "Gráfica em Goiânia",
    note: "Atendimento a empresas de Goiânia e Aparecida de Goiânia, com produção em Brasília e entrega em até 1 dia útil depois que o pedido fica pronto. Não há loja em Goiânia.",
  },
  {
    path: "/grafica-rio-verde",
    title: "Gráfica para Rio Verde (GO)",
    note: "Catálogos, rótulos, calendários e materiais de feira para empresas do agronegócio de Rio Verde, com produção em Brasília e entrega em até 1 dia útil depois que o pedido fica pronto. Não há endereço em Rio Verde.",
  },
  {
    path: "/grafica-valparaiso-de-goias",
    title: "Gráfica para Valparaíso de Goiás",
    note: "Panfletos, papelaria, crachás e comunicação visual com instalação para empresas, comércio e prefeituras de Valparaíso de Goiás, com produção em Brasília e entrega no mesmo dia depois que o pedido fica pronto. Não há endereço em Valparaíso de Goiás.",
  },
  {
    path: "/grafica-luziania",
    title: "Gráfica para Luziânia (GO)",
    note: "Apostilas, formulários numerados, certificados, calendários e materiais de evento para prefeituras, escolas e empresas de Luziânia, com nota fiscal, atendimento a licitações e entrega no mesmo dia depois que o pedido fica pronto. Não há endereço em Luziânia.",
  },
] as const;

const INSTITUTIONAL_PAGES = [
  {
    path: "/produtos",
    title: "Catálogo de produtos",
    note: "Mostruário completo agrupado em famílias de produto. Todos os valores são sob consulta.",
  },
  {
    path: "/portfolio",
    title: "Portfolio",
    note: "Projetos conceituais com marcas fictícias criadas para mostrar o potencial de cada material, formato e acabamento — não são trabalhos de clientes.",
  },
  {
    path: "/sobre",
    title: "Sobre a FullGraph",
    note: "Apresentação da gráfica (fundada em 2012), forma de trabalho, pagamento e nota fiscal, clientes e dados de localização.",
  },
  {
    path: "/contato",
    title: "Contato",
    note: "Telefone, e-mail, endereço e informação de atendimento.",
  },
] as const;

function link(path: string, title: string, note: string): string {
  return `- [${title}](${site.url}${path}): ${note}`;
}

/**
 * Primeira frase da descrição do produto. Preferimos a descrição à
 * `tagline` porque a tagline é um slogan de página — aqui interessa a
 * definição factual do que o produto é.
 */
function firstSentence(text: string): string {
  const end = text.indexOf(". ");
  return end === -1 ? text : `${text.slice(0, end)}.`;
}

function productCatalogSection(): string {
  return categories
    .map((category) => {
      const items = getProductsByCategory(category.slug);
      if (items.length === 0) return null;
      const lines = items.map((product) =>
        link(`/produtos/${product.slug}`, product.name, firstSentence(product.description))
      );
      return [`### ${category.name}`, "", ...lines].join("\n");
    })
    .filter((block): block is string => block !== null)
    .join("\n\n");
}

function buildLlmsTxt(): string {
  return `# ${site.name}

> Gráfica sediada em ${site.address.city}-${site.address.state} que atende três públicos: empresas com grandes tiragens, autores e editoras, e restaurantes e redes de alimentação. Produz livros, catálogos, revistas, materiais de divulgação, papelaria corporativa, embalagens para alimentos, rótulos e comunicação visual, com produção em ${site.address.city} e entrega em todo o Brasil.

O site é uma vitrine institucional e de catálogo, em português do Brasil. Ele não é uma loja: não há carrinho, checkout nem preço publicado. Todo material é cotado sob medida — formato, papel, acabamento, tiragem e prazo entram no orçamento personalizado.

Observações importantes para interpretar o conteúdo corretamente:

- Nenhuma página publica preços, tabelas de valores ou prazos fechados. Onde aparece "sob consulta", o valor depende do orçamento.
- As faixas de tiragem e as especificações técnicas listadas nas páginas de produto são pontos de partida para a cotação, não um catálogo fechado de opções.
- As imagens do portfolio, das páginas de produto e da seção de processo são fotografias conceituais geradas para o site, com marcas fictícias. Não são registros de trabalhos entregues a clientes nem fotos da fábrica ou da equipe da FullGraph.
- Os nomes em "Quem já imprimiu com a FullGraph" (página inicial e /sobre) são clientes atendidos pela gráfica, citados só pelo nome, sem logotipos nem depoimentos.
- O site não divulga certificações, prêmios, número de clientes nem capacidade instalada. Ausência de menção significa ausência de dado público, não negação.

## Públicos e linhas de negócio

${SOLUTION_PAGES.map((page) => link(page.path, page.title, page.note)).join("\n")}

## Cidades atendidas

${CITY_PAGES.map((page) => link(page.path, page.title, page.note)).join("\n")}

## Como solicitar orçamento

O canal principal é o formulário guiado de orçamento, que reúne produto, formato, quantidade, cores, material, acabamento, prazo e cidade de entrega antes do envio.

${link("/orcamento", "Orçamento personalizado", "Formulário em etapas; caminho recomendado para qualquer pedido de cotação.")}

Canais diretos publicados na página de contato:

- Telefone: ${site.phone.display}
- E-mail: ${site.email}
- Endereço: ${site.address.full}

- Horário presencial (retirada e visitas): ${site.hours.display}
- ${site.autoService}
- Área de atendimento: Distrito Federal e Goiás, com entrega para todo o Brasil

## Páginas institucionais

${INSTITUTIONAL_PAGES.map((page) => link(page.path, page.title, page.note)).join("\n")}

## Catálogo de produtos

${productCatalogSection()}

## Referências do site

- [Página inicial](${site.url}): visão geral das três linhas de negócio e chamada para orçamento.
- [Sitemap](${site.url}/sitemap.xml): lista completa das URLs públicas indexáveis.
- [robots.txt](${site.url}/robots.txt): regras de rastreamento.
`;
}

export function GET(): Response {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
