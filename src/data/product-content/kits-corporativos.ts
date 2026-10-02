import type { ProductContent } from "@/types";

/**
 * Copy aprovada pelo cliente — rascunhos/kits-corporativos/kits-corporativos.md
 * (Lote 3, parte 2). Texto verbatim: não reescrever nem acrescentar afirmações
 * sem nova aprovação. Fonte única para a UI e para o JSON-LD (FAQPage).
 */
export const kitsCorporativosContent: ProductContent = {
  metaTitle: "Kit corporativo e kit onboarding personalizados | FullGraph",
  metaDescription:
    "Kit corporativo personalizado com brindes, caixa e impressos da sua marca, montado e enviado a cada pessoa em todo o Brasil. Sem quantidade mínima.",
  h1: "Kit corporativo e kit onboarding personalizados, montados e enviados",
  intro: [
    "A FullGraph monta kit corporativo personalizado do jeito que a ocasião pede: brindes de qualquer tipo, impressos com a sua marca e tudo reunido na mesma caixa. Se você ainda não definiu os itens, sugerimos e compramos os brindes. Personalizamos o kit inteiro, até o cartão com o nome de quem vai receber.",
    "O kit pode dar as boas-vindas a um novo colaborador, presentear clientes, apresentar um lançamento ou chegar a jornalistas e influenciadores. Cada caixa vai para o endereço de cada pessoa, em qualquer lugar do Brasil, e não há quantidade mínima. Somos uma gráfica de Brasília, desde 2012.",
  ],
  introCta: "Pedir orçamento de kits pelo WhatsApp",
  sections: [
    {
      heading: "O que vai dentro de um kit corporativo personalizado?",
      blocks: [
        {
          p: "Vale pensar no kit em duas camadas. A primeira são os brindes, e aqui entra qualquer tipo de item. Quem já sabe o que quer manda a lista. Quem ainda está em dúvida recebe sugestões da nossa equipe, e nós compramos os itens escolhidos.",
        },
        { p: "A segunda camada é a parte gráfica, que produzimos aqui:" },
        {
          ul: [
            [
              { link: "cadernos personalizados", href: "/produtos/cadernos-personalizados" },
              " com a capa da empresa;",
            ],
            [
              "blocos, envelopes e cartões da ",
              { link: "papelaria institucional", href: "/produtos/papelaria-institucional" },
              ";",
            ],
            "pasta com bolsa, orelha ou porta-cartão;",
            [
              "crachá com o nome da pessoa, cordão e porta-crachá, como nos ",
              { link: "crachás e credenciais", href: "/produtos/crachas-e-credenciais" },
              ";",
            ],
            "cartão de boas-vindas ou de apresentação com o nome de cada destinatário.",
          ],
        },
        {
          p: [
            "Brindes e impressos seguem juntos na mesma caixa. A embalagem é a primeira coisa que a pessoa vê, por isso merece o mesmo cuidado. As opções estão em ",
            { link: "caixas personalizadas", href: "/produtos/caixas-personalizadas" },
            ". Quando o kit é entregue em mãos, uma ",
            { link: "sacola personalizada", href: "/produtos/sacolas-personalizadas" },
            " fecha o conjunto.",
          ],
        },
      ],
    },
    {
      heading: "Kit onboarding e kit de boas-vindas para novos colaboradores",
      blocks: [
        {
          p: "O kit onboarding é o kit corporativo que a empresa prepara para quem acabou de ser contratado. Costuma levar caderno, crachá, materiais com a identidade visual e alguns brindes de uso diário. Na contratação presencial, ele pode estar esperando a pessoa no primeiro dia. Com a equipe remota, enviamos o kit para a casa de cada colaborador.",
        },
        {
          p: "Empresas que contratam ao longo do ano não precisam encomendar um lote a cada admissão. Guardamos os kits em estoque e enviamos aos poucos, conforme as pessoas entram. Como não existe pedido mínimo, também dá para começar com poucos kits e repetir depois.",
        },
        {
          p: "O cartão com o nome do colaborador e o crachá já impresso mostram que aquele kit foi preparado para ele, e não tirado de uma pilha.",
        },
      ],
    },
    {
      heading: "Press kit, kits para influenciadores e lançamentos",
      blocks: [
        {
          p: "No press kit e no kit para influenciadores, a forma de apresentar conta tanto quanto o conteúdo. A caixa, a disposição dos itens ao abrir, o cartão e os impressos aparecem antes de qualquer release.",
        },
        {
          p: "Em lançamentos imobiliários, o kit corporativo costuma reunir o material do empreendimento e brindes com a marca da construtora. Já fizemos kits de lançamento imobiliário para a HC Construtora e a EMPLAVI.",
        },
        {
          p: "Se a campanha ainda não tem arte para os impressos, nós criamos. Se a agência já mandou os arquivos, produzimos a partir deles.",
        },
      ],
    },
    {
      heading: "Kits para eventos e participantes",
      blocks: [
        {
          p: "Em congressos, convenções e treinamentos, o kit do participante costuma ser entregue no credenciamento. Montamos o conjunto com crachá personalizado, cordão, pasta, bloco ou caderno e os brindes do evento, e entregamos tudo no local.",
        },
        {
          p: "A data do evento não muda, então o cronograma parte dela. Feche o pedido com a folga do prazo médio de montagem.",
        },
        { cta: "Enviar a lista de endereços pelo WhatsApp" },
      ],
    },
    {
      heading: "Como montamos e enviamos cada kit",
      blocks: [
        {
          ol: [
            [
              { strong: "Briefing." },
              " Você diz para quem é o kit, quantas pessoas vão receber, a data e o que imagina dentro da caixa.",
            ],
            [
              { strong: "Sugestão dos itens." },
              " Indicamos brindes e impressos que combinam com a ocasião e compramos os itens aprovados.",
            ],
            [
              { strong: "Arte e personalização." },
              " Montamos a arte dos impressos quando necessário, incluindo o cartão com o nome de cada pessoa.",
            ],
            [
              { strong: "Aprovação." },
              " Você confere a composição e as artes antes de começarmos a produzir.",
            ],
            [
              { strong: "Produção e montagem." },
              " Imprimimos as peças e colocamos todos os itens na mesma caixa.",
            ],
            [
              { strong: "Envio." },
              " Cada kit segue para o endereço da pessoa, pelos Correios com código de rastreio ou por via aérea, ou é entregue no local do evento.",
            ],
          ],
        },
        {
          p: "O prazo médio para montar e enviar é de 10 a 15 dias. O prazo do seu pedido é confirmado no orçamento.",
        },
        {
          p: "Para envios individuais, mande a lista com o nome e o endereço completo de cada pessoa. Confira CEP, número e complemento antes de enviar: um endereço incompleto trava a entrega daquele kit.",
        },
      ],
    },
    {
      heading: "Sem quantidade mínima: de poucos kits a grandes envios",
      blocks: [
        {
          p: "Não trabalhamos com quantidade mínima. Dá para encomendar kit corporativo para a diretoria, para um grupo pequeno de clientes ou para a empresa inteira, e o processo é o mesmo.",
        },
        {
          p: "Os impressos têm um custo de preparação que se divide pela quantidade, então o valor por kit costuma cair conforme o pedido cresce. Se ainda estiver decidindo o tamanho do envio, peça o orçamento com duas ou três quantidades para comparar.",
        },
      ],
    },
    {
      heading: "Para empresas, agências e órgãos públicos",
      blocks: [
        {
          p: "O pedido de kit corporativo segue o fluxo de compras da empresa: faturamento após aprovação de cadastro, nota fiscal e pagamento por PIX ou cartões de crédito e débito. Atendemos órgãos públicos e licitações.",
        },
        {
          p: [
            "Agências que montam kits para os próprios clientes podem concentrar aqui a compra dos brindes, os impressos e o envio. Para papelaria e materiais de evento da empresa, veja a página de ",
            { link: "gráfica para empresas", href: "/solucoes/empresas" },
            ".",
          ],
        },
        {
          p: "Entre as empresas e instituições que já imprimiram com a FullGraph estão Lojas Blumenau, Dular, DOMANI, EMPLAVI, Colégio CIMAN, Supera, UZUK Comida Japonesa, SOHO Restaurante, Tete á Tete Restaurante, Ápice Assessoria Esportiva, BSB Bike Store, SESI, CNI, GWM, JORLAN - ev, Igreen, ASICS, EVOLVE, Centro Aretê, Multiplicidades, Bertoni Design, JHP Agroflorestal, Jota Design e JK Shopping.",
        },
      ],
    },
    {
      heading: "Regiões que atendemos e entrega",
      blocks: [
        {
          p: "Atendemos empresas de todo o Brasil. Depois que os kits ficam prontos, a entrega funciona assim:",
        },
        {
          ul: [
            [
              "Brasília e todo o Distrito Federal, incluindo ",
              { link: "Taguatinga", href: "/grafica-taguatinga" },
              " e ",
              { link: "Águas Claras", href: "/grafica-aguas-claras" },
              ": no mesmo dia;",
            ],
            [
              "Entorno, com ",
              { link: "Valparaíso de Goiás", href: "/grafica-valparaiso-de-goias" },
              ", ",
              { link: "Luziânia", href: "/grafica-luziania" },
              ", Cidade Ocidental e Novo Gama: no mesmo dia;",
            ],
            [
              { link: "Goiânia", href: "/grafica-goiania" },
              ", ",
              { link: "Rio Verde", href: "/grafica-rio-verde" },
              " e demais cidades de Goiás: em até 1 dia útil;",
            ],
            "Outros estados: envio individual para o endereço de cada pessoa, pelos Correios com código de rastreio ou por via aérea, com frete pago pelo cliente.",
          ],
        },
        {
          p: "A retirada pode ser agendada no SIBS Quadra 03, Conjunto A, Lote 19/21, Núcleo Bandeirante, de segunda a sexta, das 8h às 18h.",
        },
      ],
    },
  ],
  closing: {
    heading: "Orçamento de kit corporativo para a sua empresa",
    serifWord: "kit corporativo",
    text: "Para orçar, conte para a gente:",
    items: [
      "quem vai receber: colaboradores, clientes, imprensa, influenciadores ou participantes de evento;",
      "quantos kits e para quando;",
      "os itens que você já tem em mente;",
      "se os impressos já têm arte;",
      "onde entregar: um endereço, vários ou o local do evento;",
      "se parte dos kits fica guardada para envios futuros.",
    ],
    note: "Ainda não sabe o que colocar no kit? Diga a ocasião, o público e quanto pretende investir por kit, e a equipe prepara uma sugestão.",
    whatsappLabel: "Pedir sugestões de kit pelo WhatsApp",
    quoteLabel: "Montar meu orçamento",
  },
  faqHeading: "Perguntas frequentes sobre kits corporativos",
  faq: [
    {
      question: "O que é um kit corporativo?",
      answer:
        "É um conjunto de brindes e impressos com a marca da empresa, montado numa caixa e entregue a colaboradores, clientes, imprensa ou participantes de evento. O kit onboarding é a versão feita para receber novos colaboradores.",
    },
    {
      question: "Vocês sugerem e compram os brindes?",
      answer:
        "Sim. Sugerimos os itens de acordo com a ocasião e compramos os brindes. Se você já tiver uma lista, montamos a partir dela.",
    },
    {
      question: "Tem quantidade mínima?",
      answer: "Não. Montamos de poucos kits a grandes envios.",
    },
    {
      question: "Enviam o kit para a casa de cada pessoa, inclusive em outros estados?",
      answer: "Sim. Enviamos para todo o Brasil, pelos Correios com código de rastreio ou por via aérea.",
    },
    {
      question: "Qual é o prazo de um kit?",
      answer:
        "O prazo médio para montar e enviar é de 10 a 15 dias. O prazo de cada pedido é confirmado no orçamento.",
    },
    {
      question: "Dá para guardar kits e enviar aos poucos?",
      answer:
        "Sim. Mantemos os kits em estoque e enviamos conforme a necessidade, por exemplo a cada nova contratação.",
    },
    {
      question: "Fazem kit para evento com entrega no local?",
      answer:
        "Sim. O kit do participante pode levar crachá, cordão, pasta e brindes, e é entregue no local do evento.",
    },
    {
      question: "Emitem nota fiscal e atendem órgão público?",
      answer:
        "Sim. Emitimos nota fiscal e atendemos órgãos públicos e licitações. Empresas com cadastro aprovado podem ser faturadas.",
    },
  ],
};
