import type { ProductContent } from "@/types";

/**
 * Copy aprovada pelo cliente — rascunhos/impressao-de-revistas/impressao-de-revistas.md
 * (Lote 4, onda 3 — Gate Humano 2, 05/10/2026; fatos C3 e briefing 3, bloco N). Texto verbatim:
 * não reescrever nem acrescentar afirmações sem nova aprovação. Papel e formato são
 * definidos no orçamento (N2). Fonte única para a UI e para o JSON-LD (FAQPage).
 */
export const impressaoDeRevistasContent: ProductContent = {
  metaTitle: "Impressão de revistas com acabamento editorial | FullGraph",
  metaDescription:
    "Impressão de revistas para empresas, entidades e editoras: grampo ou lombada colada, laminação, verniz e hot stamping. Prova antes de imprimir.",
  h1: "Impressão de revistas institucionais, de entidades e editoras",
  intro: [
    "A FullGraph faz impressão de revistas para empresas, entidades, escolas e editoras, com os mesmos acabamentos que usamos nos livros: grampo, lombada colada, capa dura, laminação, verniz e hot stamping. Imprimimos em offset ou digital, conforme a quantidade, e você confere a prova antes de a revista entrar em máquina.",
    "Pode ser uma edição única ou uma revista que circula todo mês. Imprimimos a partir de 1 exemplar, com prazo médio de 5 dias úteis. Estamos em Brasília desde 2012, entregamos no DF e em Goiás e enviamos para outros estados.",
  ],
  introCta: "Pedir orçamento de revista pelo WhatsApp",
  sections: [
    {
      heading: "Como funciona a impressão de revista na FullGraph?",
      blocks: [
        {
          p: "Do arquivo à revista pronta, o pedido passa por seis etapas:",
        },
        {
          ol: [
            [
              { strong: "Arquivo." },
              " Você envia o PDF finalizado, de preferência em PDF/X-1a. Capa e miolo separados agilizam a conferência.",
            ],
            [
              { strong: "Especificação." },
              " Definimos juntos formato, número de páginas, papel, cores, acabamento e tiragem.",
            ],
            [
              { strong: "Prova." },
              " A revista só vai para a máquina depois que você libera a prova.",
            ],
            [
              { strong: "Impressão." },
              " Offset ou digital, de acordo com a tiragem.",
            ],
            [
              { strong: "Acabamento." },
              " Dobra, encadernação e tratamento da capa.",
            ],
            [
              { strong: "Entrega." },
              " No endereço combinado ou com retirada agendada na gráfica.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Revistas que imprimimos",
      blocks: [
        {
          ul: [
            [
              { strong: "Revista institucional de empresa" },
              ", para clientes, parceiros e comunicação interna. É o que muita gente procura como revista personalizada para empresa.",
            ],
            [
              { strong: "Revistas de associações, sindicatos, igrejas e entidades de classe" },
              ", feitas para os associados.",
            ],
            [
              { strong: "Revistas de escolas e faculdades." },
            ],
            [
              { strong: "Revistas de editoras" },
              ", em edição única ou periódica.",
            ],
          ],
        },
        {
          p: [
            "Para catálogos de produto, veja a página de ",
            { link: "impressão de catálogos", href: "/produtos/impressao-de-catalogos" },
            ". Informativos em formato jornal ficam em ",
            { link: "jornais e tabloides", href: "/produtos/jornais-e-tabloides" },
            ". Para publicações com cara de livro, veja ",
            { link: "impressão de livros", href: "/produtos/impressao-de-livros" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Acabamentos: grampo, lombada colada e capa",
      blocks: [
        {
          p: "A revista aceita qualquer acabamento da nossa linha de livros.",
        },
        {
          p: [
            { strong: "Encadernação:" },
            " grampo, lombada colada com cola PUR ou hot melt, capa dura, espiral e wire-o.",
          ],
        },
        {
          p: [
            { strong: "Capa:" },
            " laminação BOPP fosca ou brilho, laminação soft touch, verniz UV total ou localizado e hot stamping no título ou no logotipo.",
          ],
        },
        {
          p: "Como orientação geral, o grampo atende bem as revistas com menos páginas. A lombada colada funciona melhor nas mais grossas, porque forma um dorso reto, onde cabem o nome da revista e o número da edição. A escolha final é fechada no orçamento.",
        },
      ],
    },
    {
      heading: "Papéis e formatos",
      blocks: [
        {
          p: "Papel e formato são definidos no orçamento, de acordo com o conteúdo e o uso da revista. Em linhas gerais, o couché valoriza fotos e cores, e o offset deixa a leitura de textos longos mais confortável.",
        },
        {
          p: "Se ainda não sabe qual papel usar, mande uma revista de referência e a equipe ajuda a escolher.",
        },
        { cta: "Enviar o arquivo da revista pelo WhatsApp" },
      ],
    },
    {
      heading: "Diagramação, revisão e projeto gráfico junto com a impressão",
      blocks: [
        {
          p: [
            "Se a revista ainda não está pronta para imprimir, a FullGraph também cuida da diagramação, da revisão e do projeto gráfico. Esses serviços entram no mesmo pedido da impressão; não são vendidos à parte. Os detalhes estão na página de ",
            { link: "gráfica editorial", href: "/solucoes/livros-editorial" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Tiragem e edições periódicas",
      blocks: [
        {
          p: "Imprimimos revista em pouca quantidade, a partir de 1 exemplar, e também tiragens maiores. A impressão digital atende as quantidades pequenas, e a offset entra nas maiores.",
        },
        {
          p: "Na impressão de revistas periódicas, mensais ou trimestrais, guardamos o arquivo de cada edição, e a seguinte sai igual à anterior. O prazo médio de produção é de 5 dias úteis. Envie o arquivo da próxima edição com essa folga.",
        },
      ],
    },
    {
      heading: "Quanto custa imprimir uma revista?",
      blocks: [
        {
          p: "O preço é calculado revista a revista. Entram na conta:",
        },
        {
          ul: [
            "o formato;",
            "o número de páginas;",
            "o papel do miolo e da capa;",
            "as cores de impressão;",
            "a encadernação e o acabamento da capa;",
            "a quantidade de exemplares.",
          ],
        },
      ],
    },
    {
      heading: "Para empresas, entidades e órgãos públicos",
      blocks: [
        {
          p: "Emitimos nota fiscal, aceitamos PIX e cartões de crédito e débito e atendemos órgãos públicos e licitações. Empresas são faturadas após aprovação de cadastro. No Entorno do DF, prefeituras estão entre os nossos clientes.",
        },
        {
          p: "Entre os clientes que já imprimiram com a FullGraph estão SESI, CNI, Colégio CIMAN, Centro Aretê e Multiplicidades.",
        },
      ],
    },
    {
      heading: "Regiões que atendemos e entrega",
      blocks: [
        {
          p: "Atendemos pedidos de impressão de revistas em:",
        },
        {
          ul: [
            [
              "Brasília e todo o Distrito Federal, incluindo ",
              { link: "Taguatinga", href: "/grafica-taguatinga" },
              " e ",
              { link: "Águas Claras", href: "/grafica-aguas-claras" },
              ";",
            ],
            [
              { link: "Valparaíso de Goiás", href: "/grafica-valparaiso-de-goias" },
              ", ",
              { link: "Luziânia", href: "/grafica-luziania" },
              " e demais cidades do Entorno;",
            ],
            [
              { link: "Goiânia", href: "/grafica-goiania" },
              ", ",
              { link: "Rio Verde", href: "/grafica-rio-verde" },
              " e demais cidades de Goiás;",
            ],
            "outros estados, por frete pago pelo cliente.",
          ],
        },
        {
          p: "Com a revista pronta, a entrega é no mesmo dia no DF e no Entorno e em até 1 dia útil em Goiânia e nas cidades de Goiás. Se preferir, retire na gráfica com horário agendado: SIBS Quadra 03, Conjunto A, Lote 19/21, Núcleo Bandeirante, de segunda a sexta, das 8h às 18h.",
        },
      ],
    },
  ],
  closing: {
    heading: "Orçamento de impressão de revistas",
    serifWord: "impressão de revistas",
    text: "Para orçar a revista, informe:",
    items: [
      "o formato;",
      "o número de páginas;",
      "o papel e as cores, se já tiver definido;",
      "o acabamento: grampo, lombada colada ou outro;",
      "a tiragem;",
      "se é edição única ou periódica, e com que frequência;",
      "se precisa de diagramação ou revisão;",
      "a cidade de entrega.",
    ],
    note: "Faltou algum item? Peça o orçamento mesmo assim.",
    whatsappLabel: "Falar com a gráfica pelo WhatsApp",
    quoteLabel: "Montar meu orçamento",
  },
  faqHeading: "Perguntas frequentes sobre impressão de revistas",
  faq: [
    {
      question: "Vocês imprimem poucas revistas?",
      answer:
        "Sim. Imprimimos revista em pouca quantidade, a partir de 1 exemplar.",
    },
    {
      question: "Que acabamentos a revista pode ter?",
      answer:
        "Todos os da linha de livros: grampo, lombada colada, capa dura, espiral e wire-o, com laminação, verniz UV ou hot stamping na capa.",
    },
    {
      question: "Grampo ou lombada colada: qual escolher?",
      answer:
        "Em geral, o grampo serve para revistas mais finas, e a lombada colada para as mais grossas. A escolha é fechada no orçamento.",
    },
    {
      question: "Qual papel usar na revista?",
      answer:
        "O papel é definido no orçamento. Como referência, o couché valoriza fotos e o offset favorece a leitura de textos.",
    },
    {
      question: "Vocês fazem a diagramação e a revisão da revista?",
      answer:
        "Sim, junto com a impressão da revista, assim como o projeto gráfico.",
    },
    {
      question: "Imprimem revista mensal ou trimestral?",
      answer:
        "Sim. Guardamos o arquivo de cada edição para que a próxima saia igual.",
    },
    {
      question: "Qual o prazo e vocês entregam fora de Brasília?",
      answer:
        "O prazo médio de produção é de 5 dias úteis. Pronta, ela chega no mesmo dia no DF e no Entorno, em até 1 dia útil em Goiás e, nos outros estados, por frete pago pelo cliente.",
    },
    {
      question: "Emitem nota fiscal e atendem órgão público?",
      answer:
        "Sim. Emitimos nota fiscal e atendemos órgãos públicos e licitações.",
    },
  ],
};
