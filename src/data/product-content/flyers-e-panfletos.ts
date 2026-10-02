import type { ProductContent } from "@/types";

/**
 * Copy aprovada pelo cliente — rascunhos/flyers-e-panfletos/flyers-e-panfletos.md
 * (Lote 2). Texto verbatim: não reescrever nem acrescentar afirmações sem
 * nova aprovação. Fonte única para a UI e para o JSON-LD (FAQPage).
 */
export const flyersEPanfletosContent: ProductContent = {
  metaTitle: "Impressão de panfletos: 5.000 em 48 horas | FullGraph",
  metaDescription:
    "Impressão de panfletos personalizados em couché 90 g ou 115 g, formato padrão ou sob medida, sem limite de quantidade. 5.000 unidades em 48 horas.",
  h1: "Impressão de panfletos personalizados e flyers para campanhas",
  intro: [
    "A FullGraph faz a impressão de panfletos personalizados e flyers em formatos padrão ou sob medida, sem limite de quantidade. Os papéis mais pedidos são o couché 90 g e o couché 115 g. No prazo expresso, imprimimos 5.000 panfletos em 48 horas.",
    "Atendemos varejo, franquias, construtoras, eventos e campanhas que precisam de volume, prazo e o mesmo padrão em todas as lojas. Imprimimos em Brasília desde 2012, com entrega no Distrito Federal e em Goiás.",
  ],
  introCta: "Pedir orçamento de panfletos pelo WhatsApp",
  sections: [
    {
      heading: "Quanto tempo leva a impressão de panfletos personalizados?",
      blocks: [
        {
          p: "Depende da quantidade, do papel e do acabamento. Para campanhas com data marcada, há um prazo expresso: 5.000 panfletos em 48 horas. Esse prazo é só da impressão.",
        },
        {
          p: "Para outros volumes e acabamentos, o prazo de produção é informado no orçamento. Depois que o pedido fica pronto, a entrega é no mesmo dia no Distrito Federal, em Valparaíso de Goiás e em Luziânia, e em até 1 dia útil em Goiânia e nas demais cidades de Goiás.",
        },
        {
          p: "Para não apertar o cronograma, conte de trás para frente: a data em que o panfleto precisa estar na rua, menos o prazo de entrega, menos o prazo de produção, menos o tempo de aprovação da arte. Informe a data de uso já no pedido de orçamento.",
        },
      ],
    },
    {
      heading: "Formatos e papéis",
      blocks: [
        {
          p: "Imprimimos panfletos personalizados em todos os formatos, dos padrões aos sob medida. O formato sob medida serve quando o panfleto precisa caber em um envelope, em um display ou junto com uma embalagem.",
        },
        { h3: "Panfleto 10×15, A5 ou A4: qual escolher" },
        {
          ul: [
            [
              { strong: "10×15 cm:" },
              " compacto, fácil de entregar na mão e de colocar na sacola ou no pedido de delivery.",
            ],
            [
              { strong: "A5 (14,8×21 cm):" },
              " mais espaço para ofertas, cardápio ou mapa, sem ficar grande demais.",
            ],
            [{ strong: "A4 (21×29,7 cm):" }, " comporta tabela de preços, lista de produtos e mais texto."],
          ],
        },
        {
          p: "Os papéis mais pedidos são o couché 90 g e o couché 115 g. O 90 g é mais leve e costuma ser escolhido para grandes volumes de distribuição. O 115 g é mais encorpado e dá outra sensação na mão. Outros papéis podem ser orçados sob consulta.",
        },
      ],
    },
    {
      heading: "Impressão frente e verso, cores e acabamento",
      blocks: [
        {
          p: "O panfleto pode ser impresso em cores só na frente (4×0) ou na frente e no verso (4×4). A frente e verso dá espaço para a oferta de um lado e para o contato, o mapa ou as condições do outro.",
        },
        {
          p: "Depois da impressão, os panfletos são cortados no formato final. Acabamentos especiais são definidos conforme a necessidade do projeto. Conte no pedido o que a campanha pede, e o orçamento já sai com a especificação completa.",
        },
        { cta: "Enviar meu arquivo e a quantidade pelo WhatsApp" },
      ],
    },
    {
      heading: "Quantidade e preço: o que muda o valor",
      blocks: [
        {
          p: "Não há limite de quantidade para panfletos personalizados: você pede a tiragem que a campanha precisa. O preço da impressão de panfletos depende de:",
        },
        {
          ul: [
            "quantidade;",
            "formato;",
            "papel e gramatura;",
            "impressão só na frente ou frente e verso;",
            "acabamento;",
            "prazo.",
          ],
        },
        {
          p: "Em geral, quanto maior a tiragem, menor o custo por unidade. Por isso vale pedir o orçamento em duas ou três quantidades e comparar. O valor de cada pedido é passado no orçamento.",
        },
      ],
    },
    {
      heading: "Panfleto, flyer ou folder?",
      blocks: [
        {
          p: "Na prática, panfleto e flyer são a mesma peça: uma folha solta, sem dobra, impressa de um ou dos dois lados. O nome flyer costuma ser usado para festas, eventos e lançamentos. O folder tem dobras e organiza mais conteúdo em painéis.",
        },
        {
          p: [
            "Para peças dobradas, veja os ",
            { link: "folders", href: "/produtos/folders-e-dobrados" },
            ", com todos os tipos de dobra. Para encartes e ofertas em várias páginas, veja ",
            { link: "jornais e tabloides", href: "/produtos/jornais-e-tabloides" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Arte, arquivo e prova antes de imprimir",
      blocks: [
        { p: "Normalmente o cliente envia a arte pronta. Quando necessário, a FullGraph cria a arte do panfleto." },
        {
          p: "Ao preparar o arquivo, siga a orientação geral para impressão gráfica: cores em CMYK, sangria nas bordas e imagens em alta resolução. Antes de imprimir, você recebe a prova para aprovação. Nada vai para produção sem a sua aprovação.",
        },
      ],
    },
    {
      heading: "Só impressão: a distribuição fica com parceiros indicados",
      blocks: [
        {
          p: "A FullGraph imprime os panfletos, mas não faz a distribuição. Quando a campanha precisa de entrega nas ruas, em semáforos ou de porta em porta, indicamos distribuidores. Assim, você recebe o material pronto e combina a distribuição direto com quem faz esse trabalho.",
        },
      ],
    },
    {
      heading: "Para quem imprimimos panfletos",
      blocks: [
        {
          ul: [
            [{ strong: "Varejo e supermercados:" }, " ofertas da semana e datas promocionais."],
            [{ strong: "Franquias:" }, " a mesma peça, no mesmo padrão, para todas as lojas da rede."],
            [{ strong: "Construtoras e incorporadoras:" }, " lançamentos e plantões de venda."],
            [
              { strong: "Restaurantes e delivery:" },
              " cardápios e promoções que seguem junto com o pedido.",
            ],
            [{ strong: "Eventos:" }, " programação e divulgação."],
            [
              { strong: "Órgãos públicos:" },
              " campanhas e comunicados, com nota fiscal e atendimento a licitações.",
            ],
          ],
        },
        {
          p: "A Real Distribuidora, de Goiânia, imprimiu flyers e folhetos com a FullGraph por mais de 5 anos. Também já imprimiram com a FullGraph: Lojas Blumenau, Dular, DOMANI, EMPLAVI, Supera, SESI, CNI e JK Shopping.",
        },
      ],
    },
    {
      heading: "Entrega e regiões atendidas",
      blocks: [
        { p: "Atendemos pedidos de panfletos personalizados em:" },
        {
          ul: [
            "Brasília e todo o Distrito Federal, no mesmo dia após pronto",
            [
              { link: "Valparaíso de Goiás", href: "/grafica-valparaiso-de-goias" },
              " e ",
              { link: "Luziânia", href: "/grafica-luziania" },
              ", também no mesmo dia",
            ],
            [{ link: "Goiânia", href: "/grafica-goiania" }, " e Aparecida de Goiânia, em até 1 dia útil"],
            [
              { link: "Rio Verde", href: "/grafica-rio-verde" },
              " e demais cidades de Goiás, em até 1 dia útil",
            ],
            "Outros estados, por frete pago pelo cliente",
          ],
        },
        {
          p: "A retirada pode ser feita sob agendamento no SIBS Quadra 03, Conjunto A, Lote 19/21, Núcleo Bandeirante, de segunda a sexta, das 8h às 18h.",
        },
      ],
    },
  ],
  closing: {
    heading: "Orçamento de impressão de panfletos personalizados",
    serifWord: "panfletos personalizados",
    text: "Para orçar a impressão de panfletos, informe a quantidade, o formato, o papel, se a impressão é só na frente ou frente e verso, a data em que precisa do material e o endereço de entrega. Se ainda não tiver tudo definido, solicite o orçamento mesmo assim: a equipe ajuda a fechar a especificação.",
    whatsappLabel: "Falar com a gráfica pelo WhatsApp",
    quoteLabel: "Montar meu orçamento",
  },
  faqHeading: "Perguntas frequentes sobre impressão de panfletos",
  faq: [
    {
      question: "Qual o melhor papel para panfletos?",
      answer:
        "Os mais pedidos são o couché 90 g e o couché 115 g. O 90 g é mais leve e comum em grandes volumes; o 115 g é mais encorpado. Outros papéis sob consulta.",
    },
    {
      question: "Qual o tamanho padrão de panfleto?",
      answer:
        "Os formatos mais comuns são 10×15 cm, A5 e A4. Imprimimos em todos os formatos, inclusive sob medida.",
    },
    {
      question: "Tem quantidade mínima?",
      answer: "Não. Não há limite de quantidade: o orçamento sai na tiragem que você precisa.",
    },
    {
      question: "Em quanto tempo os panfletos ficam prontos?",
      answer:
        "No prazo expresso, imprimimos 5.000 panfletos em 48 horas. Para outros volumes, o prazo é informado no orçamento.",
    },
    {
      question: "Vocês distribuem os panfletos?",
      answer: "Não. A FullGraph faz somente a impressão e indica distribuidores.",
    },
    {
      question: "Vocês criam a arte?",
      answer: "Normalmente o cliente envia a arte pronta. Quando necessário, a FullGraph cria a arte.",
    },
    {
      question: "Emitem nota fiscal e faturam para empresas?",
      answer:
        "Sim. Emitimos nota fiscal, aceitamos PIX e cartões e atendemos órgãos públicos e licitações. Empresas são faturadas após aprovação de cadastro.",
    },
  ],
};
