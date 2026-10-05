import type { ProductContent } from "@/types";

/**
 * Copy aprovada pelo cliente — rascunhos/impressao-de-catalogos/impressao-de-catalogos.md
 * (Lote 4, onda 3 — Gate Humano 2, 05/10/2026; fatos C4 e briefing 3, blocos O e N4). Texto
 * verbatim: não reescrever nem acrescentar afirmações sem nova aprovação. Sem encarte de
 * preços avulso (O3). Fonte única para a UI e para o JSON-LD (FAQPage).
 */
export const impressaoDeCatalogosContent: ProductContent = {
  metaTitle: "Impressão de catálogos sob demanda em Brasília | FullGraph",
  metaDescription:
    "Impressão de catálogos de produtos sob demanda, em qualquer quantidade. Couché, reciclato e papéis especiais, com entrega no DF no mesmo dia após pronto.",
  h1: "Impressão de catálogos de produtos, sob demanda e em qualquer quantidade",
  intro: [
    "A FullGraph faz impressão de catálogos de produtos e serviços para distribuidoras, indústrias, lojas e redes. Não existe quantidade mínima: o pedido pode ter poucos exemplares para uma feira ou milhares para a equipe de vendas. O papel é escolhido entre offset, reciclato, couché e papéis especiais.",
    "Imprimimos em offset e em digital, conforme a tiragem. Se o catálogo ainda não tem arte, a diagramação e o projeto gráfico entram no mesmo pedido. Somos uma gráfica em Brasília desde 2012, com entrega no Distrito Federal e em Goiás.",
  ],
  introCta: "Pedir orçamento de catálogo pelo WhatsApp",
  sections: [
    {
      heading: "Como funciona a impressão de catálogos na FullGraph?",
      blocks: [
        {
          p: "O pedido segue seis etapas:",
        },
        {
          ol: [
            [
              { strong: "Você conta o que precisa." },
              " Quantidade, número de páginas, formato, papel, acabamento e a data em que o catálogo vai ser usado.",
            ],
            [
              { strong: "Recebemos o arquivo ou cuidamos da arte." },
              " Quem tem o material pronto envia em PDF/X-1a. Quem não tem pode contratar a diagramação junto com a impressão.",
            ],
            [
              { strong: "Você aprova a prova." },
              " Nada vai para a máquina antes da sua aprovação.",
            ],
            [
              { strong: "Imprimimos em offset ou em digital." },
              " A escolha depende da quantidade.",
            ],
            [
              { strong: "Fazemos o acabamento." },
              " Encadernação e, se você quiser, laminação, verniz ou hot stamping na capa.",
            ],
            [
              { strong: "Entregamos ou você retira." },
              " Entrega no endereço combinado ou retirada agendada no SIBS.",
            ],
          ],
        },
        {
          p: "O prazo médio de produção é de 5 dias úteis. O prazo de cada pedido é confirmado no orçamento.",
        },
      ],
    },
    {
      heading: "Papéis e gramaturas para miolo e capa",
      blocks: [
        {
          p: "Na impressão de catálogos, trabalhamos com todos os tipos de papel: offset, reciclato, couché e papéis especiais. A escolha muda a cara do material:",
        },
        {
          ul: [
            [
              { strong: "Couché, brilho ou fosco:" },
              " valoriza foto de produto, cor de tecido e acabamento de móvel. Costuma ser a escolha do catálogo de vitrine.",
            ],
            [
              { strong: "Offset:" },
              " aceita caneta, por isso funciona bem em catálogo técnico, com tabela de medidas e espaço para anotação do vendedor.",
            ],
            [
              { strong: "Reciclato:" },
              " combina com marcas que querem mostrar a escolha do material no próprio impresso.",
            ],
            [
              { strong: "Papéis especiais:" },
              " texturas e cores para coleções e linhas de alto valor.",
            ],
          ],
        },
        {
          p: "O formato mais pedido aqui é 200 × 280 mm. O miolo também sai em 150 g e 170 g, e a capa mais pedida é a de 300 g, que segura bem o manuseio de balcão e de mala de representante.",
        },
      ],
    },
    {
      heading: "Formato, número de páginas e encadernação",
      blocks: [
        {
          p: "O formato é livre. Além do 200 × 280 mm, imprimimos catálogo quadrado, horizontal ou em medida sob encomenda.",
        },
        {
          p: "As encadernações da nossa linha de livros também valem para catálogo: grampo, hot melt, cola PUR, espiral, wire-o e capa dura. Como orientação geral:",
        },
        {
          ul: [
            [
              { strong: "Grampo:" },
              " para catálogos mais finos. O número de páginas precisa ser múltiplo de 4.",
            ],
            [
              { strong: "Lombada colada (hot melt ou PUR):" },
              " para volumes maiores, com lombada que permite imprimir o nome da coleção.",
            ],
            [
              { strong: "Wire-o ou espiral:" },
              " abre totalmente na mesa, útil para catálogo técnico e de consulta.",
            ],
            [
              { strong: "Capa dura:" },
              " para catálogo de apresentação, que fica com o cliente por muito tempo.",
            ],
          ],
        },
        {
          p: "Se você estiver em dúvida, informe o número de páginas no orçamento e indicamos a encadernação que faz sentido.",
        },
      ],
    },
    {
      heading: "Acabamentos de capa",
      blocks: [
        {
          p: "A capa é a parte que mais sofre: passa de mão em mão, vai para a mala do vendedor e fica no balcão. Os acabamentos da linha editorial também servem para catálogo:",
        },
        {
          ul: [
            "laminação BOPP fosca ou brilho;",
            "laminação soft touch, com toque aveludado;",
            "verniz UV brilho ou localizado, para destacar o logotipo ou um produto;",
            "hot stamping, com aplicação metalizada.",
          ],
        },
        { cta: "Enviar o arquivo do catálogo pelo WhatsApp" },
      ],
    },
    {
      heading: "Catálogo impresso sob demanda ou em tiragem maior",
      blocks: [
        {
          p: "A impressão de catálogo com poucos exemplares resolve situações em que a tiragem grande não faz sentido: uma feira, um teste de coleção, a apresentação para um cliente grande ou um kit para cada representante. Nesses casos, a impressão digital entrega o lote pequeno sem desperdício.",
        },
        {
          p: "Quando a impressão de catálogos atende toda a rede de vendas ou a base inteira de clientes, o offset fica mais vantajoso por unidade.",
        },
      ],
    },
    {
      heading: "Catálogos para distribuidoras, indústrias e redes",
      blocks: [
        {
          p: "Para quem vende por catálogo, a impressão de catálogos faz parte da rotina comercial: o impresso é ferramenta de trabalho. O representante abre o catálogo na frente do lojista, o vendedor de balcão mostra a linha completa e o cliente leva para casa a referência do produto.",
        },
        {
          p: [
            "Em Goiânia, a Real Distribuidora trabalhou com a FullGraph por mais de cinco anos. Nesse período, os catálogos de produtos dividiram a produção com os tabloides, os flyers e os folhetos da empresa. Veja mais sobre o atendimento na ",
            { link: "gráfica em Goiânia", href: "/grafica-goiania" },
            ".",
          ],
        },
        {
          p: [
            "O mesmo atendimento vale para empresas do agronegócio em ",
            { link: "Rio Verde", href: "/grafica-rio-verde" },
            ", que recebem o catálogo em até 1 dia útil depois de pronto, e para lançamentos imobiliários em ",
            { link: "Águas Claras", href: "/grafica-aguas-claras" },
            ". Se a campanha pede outros impressos, o mesmo pedido pode incluir ",
            { link: "flyers e panfletos", href: "/produtos/flyers-e-panfletos" },
            " e ",
            { link: "folders com todos os tipos de dobra", href: "/produtos/folders-e-dobrados" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Diagramação, projeto gráfico e arquivo",
      blocks: [
        {
          p: [
            "A diagramação, a revisão e o projeto gráfico do catálogo são feitos por profissionais contratados pela FullGraph e vendidos junto com a impressão. Você envia as fotos, os textos e a lista de produtos, e recebe a prova para aprovar. Os serviços editoriais completos estão na página de ",
            { link: "gráfica editorial", href: "/solucoes/livros-editorial" },
            ".",
          ],
        },
        {
          p: "Se o catálogo personalizado já está diagramado, envie o arquivo em PDF/X-1a. Como orientação geral, confira antes de enviar:",
        },
        {
          ul: [
            "cores em CMYK;",
            "sangria nas páginas com foto até a borda;",
            "fontes incorporadas;",
            "capa e miolo em arquivos separados.",
          ],
        },
        {
          p: [
            "Para publicações com mais texto, como manuais e livros, veja a ",
            { link: "impressão de livros", href: "/produtos/impressao-de-livros" },
            ". Revistas institucionais e de entidades estão na ",
            { link: "impressão de revistas", href: "/produtos/impressao-de-revistas" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Quanto custa imprimir um catálogo?",
      blocks: [
        {
          p: "O valor sai sob medida para cada pedido, a partir de seis pontos:",
        },
        {
          ul: [
            "quantidade de exemplares;",
            "número de páginas;",
            "formato;",
            "papel e gramatura do miolo e da capa;",
            "as cores da impressão;",
            "encadernação e acabamento de capa.",
          ],
        },
        {
          p: "Quanto maior a quantidade, menor o custo de cada exemplar.",
        },
      ],
    },
    {
      heading: "Regiões que atendemos e entrega",
      blocks: [
        {
          p: "Atendemos empresas em:",
        },
        {
          ul: [
            [
              "Brasília e todo o Distrito Federal, incluindo ",
              { link: "Taguatinga", href: "/grafica-taguatinga" },
              " e ",
              { link: "Águas Claras", href: "/grafica-aguas-claras" },
            ],
            [
              { link: "Valparaíso de Goiás", href: "/grafica-valparaiso-de-goias" },
              ", ",
              { link: "Luziânia", href: "/grafica-luziania" },
              ", Cidade Ocidental e Novo Gama",
            ],
            [
              { link: "Goiânia", href: "/grafica-goiania" },
              " e Aparecida de Goiânia",
            ],
            [
              { link: "Rio Verde", href: "/grafica-rio-verde" },
              " e demais cidades de Goiás",
            ],
            "Outros estados, com frete pago pelo cliente",
          ],
        },
        {
          p: "Depois que o catálogo fica pronto, a entrega é no mesmo dia no Distrito Federal e no Entorno, e em até 1 dia útil em Goiânia e nas demais cidades de Goiás. A retirada é agendada no SIBS Quadra 03, Conjunto A, Lote 19/21, Núcleo Bandeirante, de segunda a sexta, das 8h às 18h.",
        },
      ],
    },
  ],
  closing: {
    heading: "Orçamento de impressão de catálogos",
    serifWord: "impressão de catálogos",
    text: "Para pedir o orçamento de impressão de catálogos, informe:",
    items: [
      "a quantidade;",
      "o número de páginas;",
      "o formato;",
      "o papel do miolo e da capa;",
      "a encadernação e o acabamento;",
      "se precisa de diagramação;",
      "a data em que o catálogo vai ser usado;",
      "a cidade de entrega.",
    ],
    note: "Para empresas, o pedido segue o processo de compras: faturamento após aprovação de cadastro, nota fiscal e pagamento por PIX ou cartões de crédito e débito. Atendemos órgãos públicos e licitações.",
    whatsappLabel: "Falar com a gráfica pelo WhatsApp",
    quoteLabel: "Montar meu orçamento",
  },
  faqHeading: "Perguntas frequentes sobre impressão de catálogos",
  faq: [
    {
      question: "Qual a quantidade mínima para imprimir catálogo?",
      answer:
        "Não há mínimo. O catálogo é impresso sob demanda: dá para pedir poucos exemplares ou uma tiragem grande.",
    },
    {
      question: "Qual o melhor papel para catálogo?",
      answer:
        "Depende do uso. Couché valoriza fotos, offset aceita anotação e reciclato reforça a escolha do material. Também trabalhamos com papéis especiais.",
    },
    {
      question: "Qual o formato de catálogo mais pedido?",
      answer:
        "O 200 × 280 mm. Também imprimimos em formato sob medida.",
    },
    {
      question: "Grampo ou lombada colada?",
      answer:
        "Como orientação geral, grampo para catálogos mais finos e lombada colada para volumes maiores. Indicamos a melhor opção a partir do número de páginas.",
    },
    {
      question: "Qual o prazo de produção?",
      answer:
        "O prazo médio é de 5 dias úteis. O prazo de cada pedido é confirmado no orçamento.",
    },
    {
      question: "Vocês fazem a diagramação do catálogo?",
      answer:
        "Sim. Diagramação, revisão e projeto gráfico são vendidos junto com a impressão.",
    },
    {
      question: "Vocês entregam fora de Brasília?",
      answer:
        "Sim. No Distrito Federal e no Entorno, a entrega é no mesmo dia após pronto. Em Goiânia e nas demais cidades de Goiás, em até 1 dia útil. Outros estados recebem com frete pago pelo cliente.",
    },
    {
      question: "Emitem nota fiscal e atendem órgão público?",
      answer:
        "Sim. Emitimos nota fiscal e atendemos órgãos públicos e licitações. Empresas são faturadas após aprovação de cadastro.",
    },
  ],
};
