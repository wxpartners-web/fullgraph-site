import type { PageContent } from "@/types";

/**
 * Copy aprovada pelo cliente — rascunhos/grafica-aguas-claras/grafica-aguas-claras.md
 * (Lote 3). Texto verbatim: não reescrever nem acrescentar afirmações sem
 * nova aprovação. A FullGraph não tem loja em Águas Claras — a produção e a
 * retirada são no SIBS.
 */
export const graficaAguasClarasContent: PageContent = {
  metaTitle: "Gráfica Águas Claras: papelaria, folders e kits | FullGraph",
  metaDescription:
    "Gráfica para Águas Claras (DF): papelaria de escritório, folders de lançamento, placas e kits. Entrega no mesmo dia após pronto ou retirada agendada.",
  h1: "Gráfica para Águas Claras: papelaria, lançamentos imobiliários e condomínios",
  intro: [
    "Escritório em prédio comercial, clínica, stand de vendas, administração de condomínio. Quem procura uma gráfica Águas Claras quase sempre precisa que o material chegue à portaria certa, no dia combinado. A FullGraph atende clientes de vários perfis no bairro, com trabalhos variados, e entrega no Distrito Federal no mesmo dia em que o pedido fica pronto.",
    "A produção fica no SIBS, no Núcleo Bandeirante. Ali também dá para retirar o pedido, com horário agendado, de segunda a sexta, das 8h às 18h. Orçamento, envio de arquivo e aprovação da prova são feitos pelo WhatsApp. A FullGraph imprime desde 2012.",
  ],
  introCta: "Pedir orçamento para Águas Claras pelo WhatsApp",
  sections: [
    {
      heading: "Como a FullGraph entrega para quem procura gráfica em Águas Claras?",
      blocks: [
        {
          p: "Num bairro de prédios, rua e número não bastam. Para quem busca gráfica Águas Claras com entrega no prédio, funciona assim:",
        },
        {
          ul: [
            [
              { strong: "Mesmo dia após pronto." },
              " A entrega vai ao endereço informado, com torre, recepção ou portaria.",
            ],
            [
              { strong: "Retirada com hora marcada." },
              " Prefere buscar? Combine o horário antes e retire no SIBS, de segunda a sexta, entre 8h e 18h.",
            ],
            [
              { strong: "Arquivo, prova e acompanhamento por mensagem." },
              " Tudo passa pelo WhatsApp, sem visita à gráfica.",
            ],
            [
              { strong: "Frete pago pelo cliente." },
              " O valor aparece no orçamento, já com o endereço.",
            ],
          ],
        },
        {
          p: "Ao fazer o pedido, informe bloco ou torre, o nome de quem recebe e o horário em que a portaria aceita encomendas. Assim o entregador não precisa voltar outro dia.",
        },
      ],
    },
    {
      heading: "Papelaria para escritórios, clínicas e consultórios",
      blocks: [
        {
          p: "Escritórios de advocacia e contabilidade, clínicas e consultórios usam a mesma papelaria mês após mês. Fazemos cartão de visitas, papel timbrado, envelopes, pastas, blocos e formulários, em todos os tipos de papel.",
        },
        { p: "Para quem pede pouco de cada vez:" },
        {
          ul: [
            [
              { link: "Envelopes sem quantidade mínima", href: "/produtos/envelopes-personalizados" },
              ". Carta, ofício, saco A4 e saco A3, com ou sem janela.",
            ],
            [
              { link: "Pastas sem quantidade mínima", href: "/produtos/pastas-personalizadas" },
              ". Com bolsa, orelha, porta-cartão ou lombada, em geral no cartão 250 g ou 300 g.",
            ],
          ],
        },
        {
          p: [
            "Quem compra com frequência conta com estoque para atendimento e faturamento após aprovação de cadastro. A reposição segue o mesmo padrão. Veja a ",
            { link: "papelaria institucional", href: "/produtos/papelaria-institucional" },
            " e a página de ",
            { link: "gráfica para empresas", href: "/solucoes/empresas" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Folders, catálogos e stand para lançamentos imobiliários",
      blocks: [
        {
          p: "Um lançamento imobiliário pede impresso em várias frentes ao mesmo tempo. O corretor precisa de folder, o empreendimento precisa de catálogo e o stand precisa de sinalização.",
        },
        {
          ul: [
            [
              { link: "Folders", href: "/produtos/folders-e-dobrados" },
              " com todos os tipos de dobra, para planta, localização e ficha técnica.",
            ],
            [
              { link: "Catálogos", href: "/produtos/impressao-de-catalogos" },
              " em qualquer quantidade, com impressão sob demanda, em papel offset, reciclato, couché ou especial.",
            ],
            [
              { strong: "Display, totem, banner, wobbler e adesivo" },
              " para o stand, com instalação, na linha de ",
              { link: "comunicação visual", href: "/produtos/comunicacao-visual" },
              ".",
            ],
            [
              { link: "Sacolas personalizadas", href: "/produtos/sacolas-personalizadas" },
              " para o visitante levar o material para casa, sem quantidade mínima.",
            ],
          ],
        },
        { p: "Sem arte pronta? A FullGraph cria quando necessário." },
        { cta: "Enviar o material do lançamento pelo WhatsApp" },
      ],
    },
    {
      heading: "Placas e comunicados para condomínios e prédios comerciais",
      blocks: [
        {
          p: "Síndicos, administradoras e gerentes de prédio precisam avisar e orientar o tempo todo. Para as áreas comuns, fazemos placas em ACM ou PVC, adesivos e banners, com instalação. Servem para identificar garagem, academia, salão de festas, elevadores e acessos, ou para deixar à vista as regras de uso de cada espaço.",
        },
        { p: "O foco aqui é a sinalização de dentro do prédio." },
        {
          p: "Comunicados de assembleia, obra ou mudança de regra podem sair em flyer, no formato padrão ou em formato personalizado, sem limite de quantidade. Um por apartamento, um por sala ou o total que a administração definir.",
        },
      ],
    },
    {
      heading: "Kits para clientes e equipes, entregues em cada endereço",
      blocks: [
        {
          p: [
            "Kit de boas-vindas para quem entra na empresa, kit de entrega das chaves para o novo morador, kit de fim de ano para clientes. A FullGraph monta o kit com qualquer tipo de brinde e envia para o endereço de cada pessoa. Não há quantidade mínima. Os detalhes estão em ",
            { link: "kits corporativos", href: "/produtos/kits-corporativos" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Como funciona o pedido a partir de Águas Claras",
      blocks: [
        {
          ol: [
            [
              { strong: "Primeira mensagem." },
              " No WhatsApp, diga o que vai imprimir, quantas unidades e para quando.",
            ],
            [
              { strong: "Orçamento." },
              " Com formato, papel, acabamento, prazo de produção e frete.",
            ],
            [{ strong: "Prova." }, " Nada vai para a máquina antes da sua aprovação."],
            [{ strong: "Impressão e acabamento." }, " No SIBS, em Brasília."],
            [
              { strong: "Entrega ou retirada." },
              " No seu endereço em Águas Claras, no mesmo dia em que o pedido fica pronto, ou no SIBS, com hora marcada.",
            ],
          ],
        },
        {
          p: "EMPLAVI, Bertoni Design e Jota Design estão entre os clientes que usam a FullGraph como gráfica em Águas Claras.",
        },
      ],
    },
    {
      heading: "Regiões que atendemos perto de Águas Claras",
      blocks: [
        {
          p: "Atendemos Águas Claras inteira, dos prédios residenciais aos comerciais, em todas as quadras do bairro.",
        },
        { p: "Fora dele, também atendemos:" },
        {
          ul: [
            [{ link: "Taguatinga", href: "/grafica-taguatinga" }, ", vizinha de Águas Claras"],
            [
              "Vicente Pires, Guará, Núcleo Bandeirante e o restante do DF, pela ",
              { link: "gráfica em Brasília", href: "/" },
            ],
            [
              { link: "Valparaíso de Goiás", href: "/grafica-valparaiso-de-goias" },
              " e ",
              { link: "Luziânia", href: "/grafica-luziania" },
              ", no mesmo dia após pronto",
            ],
            [
              { link: "Goiânia", href: "/grafica-goiania" },
              " e as demais cidades de Goiás, em até 1 dia útil após pronto",
            ],
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Orçamento de gráfica em Águas Claras pelo WhatsApp",
    serifWord: "Águas Claras",
    text: "Um orçamento sai mais rápido quando a primeira mensagem já traz:",
    items: [
      "o material e a quantidade;",
      "formato e papel, se já estiverem definidos;",
      "a data em que o material precisa chegar;",
      "o endereço com torre, bloco ou sala, ou a opção de retirada no SIBS;",
      "o CNPJ, se a compra for de empresa.",
    ],
    note: "Aceitamos PIX e cartões de crédito e débito, com nota fiscal. Falta alguma definição? Mande assim mesmo, e a equipe ajuda a completar.",
    whatsappLabel: "Falar com a gráfica pelo WhatsApp",
    quoteLabel: "Montar meu orçamento",
  },
  faqHeading: "Perguntas frequentes sobre a gráfica para Águas Claras",
  faq: [
    {
      question: "A FullGraph tem loja em Águas Claras?",
      answer:
        "Não. Produzimos no SIBS, no Núcleo Bandeirante. O atendimento é pelo WhatsApp, e o pedido chega por entrega ou por retirada agendada.",
    },
    {
      question: "Dá para retirar o pedido perto de Águas Claras?",
      answer:
        "Sim, no SIBS, com horário combinado antes. A retirada funciona de segunda a sexta, das 8h às 18h.",
    },
    {
      question: "Em quanto tempo o pedido chega em Águas Claras?",
      answer:
        "O prazo de produção depende do material e vem no orçamento. Depois de pronto, a entrega é no mesmo dia, com frete pago pelo cliente.",
    },
    {
      question: "Esta página é de Águas Claras, no Distrito Federal?",
      answer:
        "Sim. É a região administrativa de Águas Claras, no DF. Para outros estados, enviamos por frete pago pelo cliente.",
    },
    {
      question: "Fazem pastas e envelopes em pouca quantidade?",
      answer: "Sim. Pastas e envelopes não têm quantidade mínima.",
    },
    {
      question: "Atendem stand de lançamento imobiliário?",
      answer:
        "Sim. Fazemos folders com todos os tipos de dobra, catálogos e também displays, totens, banners e wobblers, com instalação.",
    },
    {
      question: "Montam kits e enviam para cada pessoa?",
      answer:
        "Sim. Com qualquer tipo de brinde, sem quantidade mínima, e com envio para o endereço de cada um.",
    },
    {
      question: "Como funciona o faturamento para empresas?",
      answer: "Faturamos após aprovação de cadastro e mantemos estoque para reposição.",
    },
  ],
};
