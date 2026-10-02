import type { ProductContent } from "@/types";

/**
 * Copy aprovada pelo cliente — rascunhos/comunicacao-visual/comunicacao-visual.md
 * (Lote 3). Texto verbatim: não reescrever nem acrescentar afirmações sem
 * nova aprovação (sem gramaturas, espessuras ou medidas: J1–J7 pendentes).
 * Fonte única para a UI e para o JSON-LD (FAQPage).
 */
export const comunicacaoVisualContent: ProductContent = {
  metaTitle: "Empresa de comunicação visual em Brasília | FullGraph",
  metaDescription:
    "Empresa de comunicação visual em Brasília: fachada, placa em ACM ou PVC, banner, adesivo, totem, display e wobbler, com instalação em todo o Brasil.",
  h1: "Empresa de comunicação visual em Brasília: fachadas, placas, banners e PDV",
  intro: [
    "A FullGraph é uma empresa de comunicação visual e gráfica em Brasília desde 2012. Produzimos banner, lona, adesivo, fachada, placa em ACM ou PVC, totem, display e wobbler, e fazemos a instalação no Brasil.",
    "Trabalhamos com impressão offset, impressão digital e grandes formatos. Para varejo, franquias, construtoras, eventos e órgãos públicos, a fachada, o material de ponto de venda e os impressos da campanha podem ser orçados juntos.",
  ],
  introCta: "Pedir orçamento de comunicação visual pelo WhatsApp",
  sections: [
    {
      heading: "O que faz uma empresa de comunicação visual?",
      blocks: [
        {
          p: "Uma empresa de comunicação visual produz as peças físicas que mostram a marca no ponto de venda. Elas se dividem em dois grupos. O primeiro identifica o lugar: fachada, placa e adesivo de porta ou vitrine. O segundo fica dentro da loja, perto do produto: display, totem, wobbler e banner.",
        },
        {
          p: "É um trabalho diferente do de uma agência de propaganda. A agência cria a campanha e define a mensagem. A empresa de comunicação visual transforma essa mensagem em peça, no tamanho e no material adequados ao espaço, e cuida da instalação.",
        },
      ],
    },
    {
      heading: "Fachadas e placas em ACM ou PVC",
      blocks: [
        {
          p: "A FullGraph produz fachada e placa em ACM ou PVC. A escolha do material depende de onde a peça vai ficar.",
        },
        {
          ul: [
            [
              { strong: "ACM:" },
              " chapa de alumínio composto, rígida e de acabamento liso. Em geral, é o material escolhido para fachadas e placas externas, que ficam expostas ao sol e à chuva.",
            ],
            [
              { strong: "PVC:" },
              " chapa plástica mais leve e simples de fixar. Costuma aparecer em placas internas, como identificação de sala, setor ou balcão.",
            ],
          ],
        },
        {
          p: "Essa é uma orientação geral de mercado. Medidas, acabamento e fixação de cada peça são definidos no orçamento, a partir das fotos do local.",
        },
      ],
    },
    {
      heading: "Banners, lonas e adesivos",
      blocks: [
        {
          p: "Banner e lona servem para divulgar uma oferta, sinalizar uma obra ou ocupar uma área grande com pouca estrutura. O adesivo vai em vitrine, porta, parede ou balcão. Na vitrine, é a forma mais direta de mostrar a promoção para quem passa na calçada.",
        },
        {
          p: [
            "Se você precisa de um ",
            { link: "banner personalizado", href: "/produtos/banners-e-grandes-formatos" },
            " avulso, para uma loja ou um evento, veja a página de banners e grandes formatos.",
          ],
        },
      ],
    },
    {
      heading: "Material de PDV: totem, display e wobbler",
      blocks: [
        {
          p: "Material de PDV é tudo o que fica dentro da loja para chamar a atenção para um produto ou uma oferta. Numa campanha com data de início, ele precisa estar no lugar antes de a promoção começar.",
        },
        { h3: "O que é wobbler" },
        {
          p: "Wobbler é uma peça pequena presa à gôndola ou à prateleira por uma haste flexível. Ela balança com o movimento do ar e destaca um produto específico no meio dos outros.",
        },
        { h3: "Totem" },
        {
          p: "O totem é uma peça vertical, de pé, usada na entrada da loja, no corredor ou num estande. Leva a marca, a oferta ou uma indicação de caminho.",
        },
        { h3: "Display" },
        {
          p: "O display apoia ou expõe o produto e pode ficar no chão, no balcão ou junto ao caixa.",
        },
        {
          p: [
            "A campanha costuma pedir também material de mão. A FullGraph imprime os ",
            { link: "panfletos da campanha", href: "/produtos/flyers-e-panfletos" },
            " e os ",
            { link: "folders", href: "/produtos/folders-e-dobrados" },
            " no mesmo atendimento, a partir da mesma arte do PDV.",
          ],
        },
        { cta: "Enviar medidas e fotos do local pelo WhatsApp" },
      ],
    },
    {
      heading: "Instalação em Brasília e em outras cidades",
      blocks: [
        {
          p: "A FullGraph faz a instalação das peças de comunicação visual no Brasil, não só em Brasília. O prazo de instalação e as condições de cada local são combinados no orçamento.",
        },
        {
          p: "Quando a peça não precisa ser instalada, a entrega segue a regra da gráfica, contada a partir do pedido pronto:",
        },
        {
          ul: [
            "Distrito Federal, Valparaíso de Goiás, Luziânia, Cidade Ocidental e Novo Gama: no mesmo dia;",
            "Goiânia e demais cidades de Goiás: em até 1 dia útil;",
            "outros estados: por frete pago pelo cliente.",
          ],
        },
      ],
    },
    {
      heading: "Eventos, feiras e lançamentos",
      blocks: [
        {
          p: "Em evento, a data não muda. Banners, lonas, totens e displays de estande, feira ou lançamento imobiliário precisam chegar antes da abertura. Para eventos, a FullGraph atende pedidos com urgência e entrega o material no local.",
        },
        {
          p: [
            "Se o evento também tem credenciamento, os ",
            { link: "crachás e credenciais", href: "/produtos/crachas-e-credenciais" },
            " podem entrar no mesmo pedido.",
          ],
        },
      ],
    },
    {
      heading: "Arte, arquivo e aprovação",
      blocks: [
        {
          p: "Na maior parte dos pedidos, o cliente envia a arte pronta. Quando necessário, a FullGraph cria a arte.",
        },
        {
          p: "Em fachada e placa, a arte só fecha com as medidas exatas do espaço. Para agilizar o orçamento, envie:",
        },
        {
          ul: [
            "largura e altura da área, em centímetros ou metros;",
            "fotos do local, de frente e de perto;",
            "o logotipo em arquivo vetorial, se tiver.",
          ],
        },
        {
          p: "Antes da produção, você recebe a prova para conferir textos, cores e proporções. A peça só entra em produção depois do seu OK.",
        },
      ],
    },
    {
      heading: "Para empresas, redes e órgãos públicos",
      blocks: [
        {
          p: "A FullGraph emite nota fiscal, aceita PIX e cartões de crédito e débito e atende órgãos públicos e licitações. Empresas podem ser faturadas após aprovação de cadastro. Em Valparaíso de Goiás e Luziânia, prefeituras estão entre os nossos clientes.",
        },
        {
          p: [
            "Para papelaria e materiais corporativos, veja a página de ",
            { link: "gráfica para empresas", href: "/solucoes/empresas" },
            ".",
          ],
        },
        {
          p: "Entre as marcas que já trabalharam com a FullGraph estão GWM, ASICS, BSB Bike Store, Centro Aretê, Colégio CIMAN e SOHO Restaurante.",
        },
      ],
    },
    {
      heading: "Regiões que atendemos",
      blocks: [
        {
          p: [
            "Atendemos Brasília e todo o Distrito Federal, incluindo ",
            { link: "Taguatinga", href: "/grafica-taguatinga" },
            " e ",
            { link: "Águas Claras", href: "/grafica-aguas-claras" },
            ". Em Goiás, atendemos ",
            { link: "Valparaíso de Goiás", href: "/grafica-valparaiso-de-goias" },
            ", ",
            { link: "Luziânia", href: "/grafica-luziania" },
            ", ",
            { link: "Goiânia", href: "/grafica-goiania" },
            ", ",
            { link: "Rio Verde", href: "/grafica-rio-verde" },
            " e as demais cidades do estado.",
          ],
        },
        {
          p: "Para retirar o pedido, agende o horário. A retirada é no SIBS Quadra 03, Conjunto A, Lote 19/21, Núcleo Bandeirante, de segunda a sexta, das 8h às 18h.",
        },
      ],
    },
  ],
  closing: {
    heading: "Orçamento com a empresa de comunicação visual",
    serifWord: "comunicação visual",
    text: "Para o orçamento sair completo, informe:",
    items: [
      "quais peças você precisa (fachada, placa, banner, adesivo, totem, display, wobbler);",
      "as medidas de cada uma;",
      "quantas lojas ou unidades vão receber o material;",
      "as cidades de entrega ou de instalação;",
      "se precisa de instalação;",
      "a data de início da campanha ou do evento;",
      "se a arte já está pronta.",
    ],
    whatsappLabel: "Falar com a gráfica pelo WhatsApp",
    quoteLabel: "Montar meu orçamento",
  },
  faqHeading: "Perguntas frequentes sobre comunicação visual",
  faq: [
    {
      question: "O que uma empresa de comunicação visual faz?",
      answer:
        "Produz e instala as peças que identificam e divulgam a marca. Na FullGraph: banner, lona, adesivo, fachada, placa em ACM ou PVC, totem, display e wobbler.",
    },
    {
      question: "Vocês instalam fora de Brasília?",
      answer:
        "Sim. A instalação é feita no Brasil. Prazo e condições são combinados no orçamento.",
    },
    {
      question: "Fazem fachada em ACM?",
      answer: "Sim. Fazemos fachada e placa em ACM ou em PVC.",
    },
    {
      question: "Vocês criam a arte?",
      answer:
        "Normalmente o cliente envia a arte pronta. Quando necessário, a FullGraph cria a arte.",
    },
    {
      question: "Fazem material para eventos e entregam no local?",
      answer:
        "Sim. Para eventos, atendemos com urgência e entregamos o material no local do evento.",
    },
    {
      question: "Atendem órgãos públicos e emitem nota fiscal?",
      answer:
        "Sim. Atendemos órgãos públicos e licitações, emitimos nota fiscal e aceitamos PIX e cartões. Para empresas, o faturamento depende de aprovação de cadastro.",
    },
    {
      question: "Quanto custa e qual é o prazo?",
      answer:
        "Depende das peças, das medidas, do número de unidades, da instalação e da cidade. Valor e prazo são informados no orçamento.",
    },
  ],
};
