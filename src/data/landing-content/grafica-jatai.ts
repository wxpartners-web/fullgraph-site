import type { PageContent } from "@/types";

/**
 * Copy aprovada pelo cliente (Gate Humano 2, 05/10/2026) — rascunhos/grafica-jatai/grafica-jatai.md
 * (Lote 5). Texto verbatim: não reescrever nem acrescentar afirmações sem
 * nova aprovação. A FullGraph não tem loja em Jataí — a produção é no SIBS,
 * em Brasília, e a entrega leva até 1 dia útil depois do pedido pronto.
 */
export const graficaJataiContent: PageContent = {
  metaTitle: "Gráfica Jataí (GO): livros, revistas e anais | FullGraph",
  metaDescription:
    "Gráfica que atende Jataí (GO): livros a partir de 1 exemplar, revistas, anais e materiais de congresso. Entrega em até 1 dia útil após pronto.",
  h1: "Gráfica para Jataí: livros, revistas e materiais para congressos",
  intro: [
    "Um livro de autor, a próxima edição de uma revista, o material de um simpósio. Para quem pesquisa gráfica Jataí com um desses trabalhos na mão, a FullGraph imprime em Brasília e a encomenda chega à cidade até 1 dia útil depois de pronta.",
    "Em atividade desde 2012, a gráfica produz tudo no SIBS. Em Jataí não há loja: conversa, arquivos e prova passam pelo WhatsApp.",
  ],
  introCta: "Pedir orçamento para Jataí pelo WhatsApp",
  sections: [
    {
      heading: "Uma gráfica em Jataí que imprime a partir de 1 exemplar: como funciona?",
      blocks: [
        {
          p: "Ninguém precisa fechar tiragem grande para começar. Quatro regras valem para todo pedido:",
        },
        {
          ul: [
            [
              { strong: "Tiragem a partir de 1 exemplar." },
              " Vale para livros e para revistas.",
            ],
            [
              { strong: "Um só lugar de produção." },
              " Impressão e acabamento saem do SIBS, em Brasília.",
            ],
            [
              { strong: "Prova antes de imprimir." },
              " A prova chega pelo WhatsApp, e a produção só começa quando você libera.",
            ],
            [
              { strong: "Entrega em 1 dia útil, no máximo." },
              " O transporte usa carro próprio e/ou transportadora, segundo o tipo de impresso, e quem paga o frete é o cliente.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Livros e revistas a partir de 1 exemplar",
      blocks: [
        {
          p: [
            "Autores, editoras, universidades, programas de pós-graduação e associações lidam com tiragens muito diferentes entre si. Na ",
            { link: "impressão de livros", href: "/produtos/impressao-de-livros" },
            ", as encadernações vão de capa dura, cola PUR e hot melt a grampo, espiral e wire-o, com miolo em offset, pólen, couché, reciclato ou papel especial. O arquivo ideal é o PDF/X-1a finalizado.",
          ],
        },
        {
          p: [
            "Na ",
            { link: "impressão de revistas", href: "/produtos/impressao-de-revistas" },
            ", a produção leva 5 dias úteis em média. Em revista periódica, o arquivo fica guardado conosco até a edição seguinte.",
          ],
        },
      ],
    },
    {
      heading: "Anais e materiais para congressos e simpósios",
      blocks: [
        {
          p: "Os anais podem sair como livro ou como revista, com as mesmas opções de papel e encadernação. Para a comissão organizadora, a FullGraph também produz:",
        },
        {
          ul: [
            [
              { link: "crachás e credenciais", href: "/produtos/crachas-e-credenciais" },
              " personalizados por inscrito, com cordão e porta-crachá;",
            ],
            [
              { link: "pastas personalizadas", href: "/produtos/pastas-personalizadas" },
              " de 220 × 310 mm fechadas, com laminação, verniz localizado ou hot stamping;",
            ],
            "banners sob medida, roll-up e wind banner.",
          ],
        },
        {
          p: "Aceitamos pedidos urgentes e levamos o material direto ao espaço do congresso. Informe a data de abertura no orçamento: o cronograma parte dela.",
        },
        { cta: "Enviar a programação do evento pelo WhatsApp" },
      ],
    },
    {
      heading: "Diagramação, revisão, ficha catalográfica e ISBN junto com a impressão",
      blocks: [
        {
          p: [
            "Quem chega só com o texto pode contratar diagramação, revisão, projeto gráfico, ficha catalográfica e ISBN no mesmo pedido da impressão. Esses serviços não são vendidos à parte. Os detalhes estão na página de ",
            { link: "gráfica editorial", href: "/solucoes/livros-editorial" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Do PDF ao exemplar impresso: o pedido a partir de Jataí",
      blocks: [
        {
          p: "Tudo começa com uma mensagem: tipo de publicação, páginas, formato e quantidade. A equipe fecha papel e acabamento, envia a prova e, com o seu ok, a publicação entra em produção. Impressa, segue para o endereço indicado em Jataí. Recebemos via PIX, crédito ou débito e emitimos nota. Também trabalhamos com licitações e órgãos públicos, e o faturamento para empresas depende de cadastro aprovado.",
        },
      ],
    },
    {
      heading: "Cidades que atendemos em volta de Jataí",
      blocks: [
        {
          p: "A gráfica para Jataí entrega em qualquer bairro da cidade. Fora dela:",
        },
        {
          ul: [
            [
              { link: "Rio Verde", href: "/grafica-rio-verde" },
              " e ",
              { link: "Itumbiara", href: "/grafica-itumbiara" },
              ", com a mesma regra de 1 dia útil após pronto",
            ],
            "qualquer outra cidade goiana, nas mesmas condições",
            [
              "Brasília e o DF, na ",
              { link: "página da gráfica em Brasília", href: "/" },
            ],
          ],
        },
        {
          p: "Esta página trata de Jataí, em Goiás, e não de Jataizinho, no Paraná. Pedidos de outros estados viajam por frete, pago por quem encomenda.",
        },
      ],
    },
  ],
  closing: {
    heading: "Orçamento de gráfica em Jataí para livro, revista ou evento",
    serifWord: "Jataí",
    text: "Mande o tipo de publicação, o número de páginas, o formato, a quantidade, o prazo que você tem, o endereço de entrega e o CNPJ ou CPF da nota. Se for congresso, inclua a lista de itens e o número de participantes. Faltou algum dado? Mande o que tem, e a especificação é fechada na conversa.",
    whatsappLabel: "Falar com a gráfica pelo WhatsApp",
    quoteLabel: "Montar meu orçamento",
  },
  faqHeading: "Perguntas frequentes de autores, editoras e organizadores de Jataí",
  faq: [
    {
      question: "A FullGraph tem loja em Jataí?",
      answer:
        "Não. Produzimos no SIBS, em Brasília, e todo o contato é pelo WhatsApp.",
    },
    {
      question: "Quanto tempo leva até o material chegar?",
      answer:
        "Cada material tem seu prazo de produção, que vem no orçamento; uma revista costuma levar 5 dias úteis. Depois, a entrega em Jataí leva no máximo 1 dia útil.",
    },
    {
      question: "Dá para imprimir um livro só?",
      answer:
        "Sim. Livros e revistas saem a partir de 1 exemplar.",
    },
    {
      question: "Como fica a próxima edição da revista?",
      answer:
        "Guardamos o arquivo de uma edição para a outra, o que ajuda a manter o mesmo padrão.",
    },
    {
      question: "Vocês cuidam do ISBN e da diagramação?",
      answer:
        "Sim, quando contratados junto com a impressão. No mesmo pedido entram também revisão, projeto gráfico e ficha catalográfica.",
    },
    {
      question: "Vocês fazem o material completo de um congresso?",
      answer:
        "Sim. Anais, crachás com nome, cordão, porta-crachá, pastas e banners, com urgência atendida e entrega no local.",
    },
  ],
};
