import type { ProductContent } from "@/types";

/**
 * Copy aprovada pelo cliente — rascunhos/sacolas-personalizadas/sacolas-personalizadas.md
 * (Lote 3, parte 2). Texto verbatim: não reescrever nem acrescentar afirmações
 * sem nova aprovação (sem medidas e sem gramatura de kraft). Fonte única para
 * a UI e para o JSON-LD (FAQPage).
 */
export const sacolasPersonalizadasContent: ProductContent = {
  metaTitle: "Sacolas personalizadas para lojas e marcas | FullGraph",
  metaDescription:
    "Sacolas personalizadas de papel, plástico, TNT ou ecobag, com alça, tamanho e acabamento sob medida e sem quantidade mínima. Orçamento pelo WhatsApp.",
  h1: "Sacolas personalizadas para lojas e marcas",
  intro: [
    "A FullGraph faz sacolas personalizadas com a marca da sua loja, do seu evento ou da sua empresa. Você define o tipo de sacola, o papel, a alça, o tamanho e o acabamento. Não existe quantidade mínima, e o custo de cada unidade cai à medida que a quantidade sobe.",
    "O pedido começa pelo produto que vai dentro da sacola e pela forma como ele chega às mãos do cliente. Pode mandar a arte pronta ou pedir que a FullGraph desenvolva a arte da sacola. Atendemos lojas de roupa e calçado, boutiques, joalherias, óticas, marcas de cosméticos, eventos e empresas.",
  ],
  introCta: "Pedir orçamento de sacolas pelo WhatsApp",
  sections: [
    {
      heading: "Para que a sua loja ou marca vai usar sacolas personalizadas?",
      blocks: [
        {
          p: "O uso define quase tudo na especificação. Antes de pensar em papel e acabamento, vale responder o que a sacola vai carregar e quanto tempo ela fica com o cliente.",
        },
        {
          ul: [
            [
              { strong: "Roupas e calçados:" },
              " a sacola precisa aguentar peso e volume. Reforço na boca e no fundo e uma alça firme contam mais que o enfeite.",
            ],
            [
              { strong: "Joalherias, óticas e cosméticos:" },
              " a peça é pequena e o valor é alto. Aqui a apresentação pesa mais: papel encorpado, acabamento no logotipo e tamanho justo para a caixa.",
            ],
            [
              { strong: "Presentes e datas comemorativas:" },
              " a sacola chega fechada a quem vai ganhar o presente. É a primeira coisa que a pessoa vê da sua marca.",
            ],
            [
              { strong: "Eventos, feiras e congressos:" },
              " quantidade maior e uma arte que funcione para todos os participantes.",
            ],
            [
              { strong: "Kits para clientes e equipes:" },
              " a sacola é a embalagem externa do kit e leva o conjunto até o destino.",
            ],
            [
              { strong: "Confeitarias e cafés:" },
              " sacolas para presente com matéria-prima apropriada para uso com alimentos. Informe esse uso no pedido.",
            ],
          ],
        },
        {
          p: [
            "Para entrega de comida e pedidos de balcão, o item certo é outro: veja os ",
            { link: "sacos e embalagens para delivery", href: "/produtos/sacos-e-embalagens-delivery" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Papel, alça e tamanho: o que muda em cada escolha",
      blocks: [
        {
          p: "O papel é escolhido de acordo com o projeto. Nas sacolas personalizadas de papel, a gramatura costuma ficar acima de 180 g, o que dá corpo à sacola. O kraft entra quando a marca quer um visual mais natural: quem procura uma sacola kraft personalizada geralmente busca esse efeito.",
        },
        {
          p: "Fazemos todos os tipos de alça. A alça é a parte que o cliente segura durante todo o trajeto, então ela precisa combinar com o peso do produto e com o estilo da marca. No orçamento, diga o que vai dentro da sacola, e a alça é definida junto com o papel.",
        },
        {
          p: "Para quem carrega produtos mais pesados, a sacola pode levar reforço na boca e no fundo. O ilhós, a argola que protege o furo por onde passa a alça, também está disponível.",
        },
        {
          p: "O tamanho é sempre sob medida. Em vez de escolher entre P, M e G de uma tabela, a sacola é dimensionada pelo que vai dentro dela.",
        },
      ],
    },
    {
      heading: "Acabamentos para a sacola ficar à altura do produto",
      blocks: [
        { p: "Os mesmos acabamentos usados em embalagens premium valem para as sacolas:" },
        {
          ul: [
            [{ strong: "Hot stamping:" }, " deixa o logotipo ou um detalhe da arte com brilho de metal."],
            [
              { strong: "Relevo seco:" },
              " o desenho fica em alto-relevo no próprio papel, sem impressão por cima.",
            ],
            [
              { strong: "Verniz localizado:" },
              " cria contraste de brilho só nas partes escolhidas da arte, como o nome da marca.",
            ],
            [
              { strong: "Laminação:" },
              " uma película sobre a impressão que deixa a superfície mais resistente ao manuseio.",
            ],
            [{ strong: "Soft touch:" }, " a superfície fica macia ao toque, com aspecto fosco."],
            [
              { strong: "Cores Pantone e metálicas:" },
              " para que o tom da marca na sacola acompanhe o da caixa e do rótulo.",
            ],
          ],
        },
        {
          p: "Você pode combinar mais de um acabamento na mesma sacola. Cada um entra no orçamento, então vale escolher onde ele aparece mais.",
        },
      ],
    },
    {
      heading: "Sacolas de plástico, TNT e ecobag",
      blocks: [
        {
          p: "Além do papel, a FullGraph faz todos os tipos de sacola, inclusive de plástico, de TNT e ecobag. A escolha depende do uso, do tempo que a sacola fica com o cliente e da imagem que a marca quer passar. Conte no pedido qual modelo você procura, e o orçamento sai com a especificação completa.",
        },
      ],
    },
    {
      heading: "Sacola, caixa e rótulo com a mesma identidade",
      blocks: [
        {
          p: [
            "Uma sacola bem dimensionada começa pela embalagem que vai dentro dela. Se a sua marca usa ",
            { link: "caixas personalizadas", href: "/produtos/caixas-personalizadas" },
            ", a sacola pode ser medida a partir da caixa, para que ela entre sem folga e sem aperto.",
          ],
        },
        {
          p: [
            "O mesmo vale para os ",
            { link: "kits corporativos", href: "/produtos/kits-corporativos" },
            ": a sacola é a última camada do kit e carrega a identidade até quem recebe. Para fechar o conjunto, os ",
            { link: "rótulos e etiquetas", href: "/produtos/rotulos-e-etiquetas" },
            " entram como lacre ou tag. Todas as peças estão reunidas na página de ",
            { link: "embalagens personalizadas", href: "/solucoes/embalagens" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Como funciona o pedido de sacolas personalizadas",
      blocks: [
        {
          ol: [
            [
              { strong: "Briefing." },
              " Você conta o uso, as medidas do produto ou da caixa, a quantidade e o tipo de sacola.",
            ],
            [{ strong: "Arte." }, " Você manda o arquivo pronto ou a FullGraph cria a arte da sacola."],
            [
              { strong: "Prova digital e amostra física." },
              " Você recebe a prova digital e uma amostra física, chamada de boneca, para conferir formato, alça e acabamento. A primeira prova já está inclusa no custo.",
            ],
            [{ strong: "Aprovação." }, " A produção só começa depois do seu OK."],
            [{ strong: "Produção." }, " O prazo médio é de 15 dias."],
            [
              { strong: "Entrega ou retirada." },
              " A sacola segue para o endereço combinado ou fica disponível para retirada com horário marcado.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Quantidade mínima e preço das sacolas",
      blocks: [
        {
          p: "Não pedimos quantidade mínima para sacolas: dá para encomendar um lote pequeno para uma ação pontual ou uma tiragem grande para o ano inteiro. O que muda com a quantidade é o valor de cada sacola, que diminui conforme o volume aumenta.",
        },
        {
          p: "O preço depende do tipo de sacola e do papel, da alça, do tamanho, das cores de impressão, dos acabamentos e da quantidade. Para decidir com calma, peça o orçamento em duas ou três quantidades diferentes e compare o custo unitário de cada uma.",
        },
        { cta: "Enviar medidas e quantidade de sacolas pelo WhatsApp" },
      ],
    },
    {
      heading: "Regiões que atendemos com sacolas personalizadas",
      blocks: [
        {
          p: [
            "Atendemos Brasília e todo o Distrito Federal, incluindo ",
            { link: "Taguatinga", href: "/grafica-taguatinga" },
            " e ",
            { link: "Águas Claras", href: "/grafica-aguas-claras" },
            ". Depois de pronta, a sacola é entregue no mesmo dia no DF e também em ",
            { link: "Valparaíso de Goiás", href: "/grafica-valparaiso-de-goias" },
            ", ",
            { link: "Luziânia", href: "/grafica-luziania" },
            ", Cidade Ocidental e Novo Gama.",
          ],
        },
        {
          p: [
            "Em ",
            { link: "Goiânia", href: "/grafica-goiania" },
            ", ",
            { link: "Rio Verde", href: "/grafica-rio-verde" },
            " e nas demais cidades de Goiás, a entrega leva até 1 dia útil. Para outros estados, enviamos por frete pago pelo cliente.",
          ],
        },
        {
          p: "Quem preferir buscar pode agendar a retirada no SIBS Quadra 03, Conjunto A, Lote 19/21, Núcleo Bandeirante, de segunda a sexta, das 8h às 18h.",
        },
      ],
    },
  ],
  closing: {
    heading: "Orçamento de sacolas personalizadas no DF",
    serifWord: "sacolas personalizadas",
    text: "Para orçar, mande o uso da sacola, as medidas do produto ou da caixa, a quantidade, o tipo de sacola, o papel e a alça que você imagina, e a arte, se já tiver. Se alguma escolha ainda estiver em aberto, envie o que já sabe e a gente define o restante com você.",
    note: "Aceitamos PIX e cartões de crédito e débito, emitimos nota fiscal e atendemos órgãos públicos e licitações. A FullGraph é gráfica em Brasília desde 2012.",
    whatsappLabel: "Pedir orçamento de sacolas personalizadas pelo WhatsApp",
    // O rascunho traz só o CTA de WhatsApp; o botão do formulário segue o padrão das Money Pages
    quoteLabel: "Montar meu orçamento",
  },
  faqHeading: "Perguntas frequentes sobre sacolas personalizadas",
  faq: [
    {
      question: "Quanto custa uma sacola personalizada?",
      answer:
        "Depende do tipo de sacola, do papel, da alça, do tamanho, das cores, dos acabamentos e da quantidade. Cada pedido tem orçamento próprio, feito pelo WhatsApp ou pelo formulário.",
    },
    {
      question: "Tem quantidade mínima de sacolas?",
      answer:
        "Não. Você encomenda a quantidade que precisa. Quanto maior o volume, menor o custo por unidade.",
    },
    {
      question: "Qual papel vocês usam nas sacolas?",
      answer:
        "O papel é escolhido conforme o projeto. Nas sacolas de papel, a gramatura costuma ficar acima de 180 g.",
    },
    {
      question: "Quais tipos de alça vocês fazem?",
      answer:
        "Todos os tipos. A alça é definida junto com o papel, de acordo com o peso do produto e o estilo da marca.",
    },
    {
      question: "Qual o prazo para ficar pronta?",
      answer:
        "O prazo médio de produção é de 15 dias. Depois de pronta, a entrega é no mesmo dia no DF e no Entorno e em até 1 dia útil em Goiás.",
    },
    {
      question: "Dá para ver a sacola antes da produção?",
      answer:
        "Sim. Você recebe a prova digital e uma amostra física (a boneca). A primeira prova já está inclusa no custo.",
    },
    {
      question: "Vocês criam a arte da sacola?",
      answer: "Sim, quando o cliente precisa. Se a sua marca já tem o arquivo pronto, é só enviar.",
    },
    {
      question: "Onde fazer sacolas personalizadas no DF?",
      answer:
        "Na FullGraph, no SIBS, Núcleo Bandeirante. O pedido é feito pelo WhatsApp, com entrega no DF e em Goiás ou retirada agendada.",
    },
  ],
};
