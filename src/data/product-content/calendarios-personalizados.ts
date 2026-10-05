import type { ProductContent } from "@/types";

/**
 * Copy aprovada pelo cliente — rascunhos/calendarios-personalizados/calendarios-personalizados.md
 * (v2 do Lote 4 com o briefing 3, bloco U e R3 — Gate Humano 2, 05/10/2026). Texto verbatim:
 * não reescrever nem acrescentar afirmações sem nova aprovação. Prazo segue
 * "informado no orçamento" (U3 sem resposta). Os dois parágrafos do H2 de orçamento
 * entram juntos em closing.text. Fonte única para a UI e para o JSON-LD (FAQPage).
 */
export const calendariosPersonalizadosContent: ProductContent = {
  metaTitle: "Calendário personalizado 2027 para empresas | FullGraph",
  metaDescription:
    "Calendário personalizado 2027 com a marca da sua empresa: de mesa, com wire-o ou acabamento especial, a partir de 100 unidades. Entrega no DF e em Goiás.",
  h1: "Calendário personalizado 2027 para empresas e instituições",
  intro: [
    "A FullGraph imprime calendário personalizado com a marca da sua empresa para entregar a clientes, parceiros e equipe ao longo de 2027. Produzimos qualquer modelo de calendário, inclusive os especiais, em impressão offset e digital.",
    "O período certo para encomendar vai de outubro a dezembro. É quando a empresa ainda tem tempo de escolher o modelo, fechar a arte e distribuir os calendários antes do primeiro dia útil do ano. A gráfica funciona em Brasília desde 2012 e entrega no DF, no Entorno e em Goiás.",
  ],
  introCta: "Pedir orçamento de calendários 2027 pelo WhatsApp",
  sections: [
    {
      heading: "Por que pedir o calendário personalizado de 2027 entre outubro e dezembro?",
      blocks: [
        {
          p: "Um calendário com a marca só cumpre o papel se estiver na mesa ou na parede do cliente quando o ano começa. Se chega em fevereiro, outro calendário já ocupou aquele lugar.",
        },
        {
          p: "Encomendar entre outubro e dezembro dá folga para cada etapa do pedido:",
        },
        {
          ol: [
            [
              { strong: "Definir modelo e quantidade." },
              " Quantas unidades vão para clientes, quantas para parceiros e quantas ficam com a equipe. O pedido começa em 100 calendários.",
            ],
            [
              { strong: "Preparar a arte." },
              " A empresa envia o arquivo pronto ou deixa a arte completa por conta da gráfica.",
            ],
            [
              { strong: "Aprovar a prova." },
              " A primeira prova não é cobrada à parte, e nada entra em produção sem o seu de acordo.",
            ],
            [
              { strong: "Produzir e entregar." },
              " O prazo é informado no orçamento, a partir da data em que você precisa receber.",
            ],
            [
              { strong: "Distribuir." },
              " Em mãos, em visitas comerciais, dentro de um kit ou com envio direto para o endereço de cada cliente.",
            ],
          ],
        },
        {
          p: "Quanto mais cedo o pedido entra, mais tranquila fica a etapa de distribuição, que costuma coincidir com o fechamento do ano nas empresas.",
        },
      ],
    },
    {
      heading: "Modelos de calendário personalizado",
      blocks: [
        {
          p: "A FullGraph faz todos os modelos de calendário, inclusive os especiais. O mais pedido pelas empresas é o de mesa, e é por ele que a maior parte dos orçamentos começa.",
        },
        { h3: "Calendário de mesa personalizado" },
        {
          p: "O calendário de mesa fica na estação de trabalho, ao lado do computador e do telefone, e é consultado várias vezes por dia. Para a marca, é um dos lugares mais vistos do escritório do cliente.",
        },
        {
          p: "A FullGraph monta o calendário de mesa com base em cartão 350 g, lâminas em couché 150 g e acabamento com wire-o. A base firme mantém o calendário em pé sobre a mesa, e o wire-o deixa as folhas virarem sem soltar ao longo dos doze meses.",
        },
        { h3: "Calendário com acabamento especial" },
        {
          p: "Os \"especiais\" são os calendários com acabamento diferenciado. Entram aqui:",
        },
        {
          ul: [
            [
              { strong: "Base tipo capa dura" },
              ", mais rígida e com cara de peça de presente;",
            ],
            [
              { strong: "Laminações" },
              ", que protegem a superfície e mudam o toque do papel;",
            ],
            [
              { strong: "Vernizes" },
              ", que dão destaque ao logotipo ou a uma parte da arte.",
            ],
          ],
        },
        {
          p: "Esses acabamentos combinam bem com calendários para diretoria, clientes estratégicos e kits de fim de ano. Os demais formatos, como o de parede, também entram no orçamento: conte onde o calendário vai ficar e a equipe confirma como produzir.",
        },
      ],
    },
    {
      heading: "Arte, datas e identidade da empresa",
      blocks: [
        {
          p: "Se a empresa já tem a arte, basta enviar o arquivo. Se não tiver, a FullGraph faz a arte completa do calendário a partir do logotipo, das cores e dos dados de contato da marca.",
        },
        {
          p: "Em um calendário personalizado para empresa, a identidade visual aparece o ano inteiro. Por isso vale manter o mesmo padrão em todas as folhas: logotipo na mesma posição, cores da marca e contatos atualizados, como telefone, site e redes sociais.",
        },
        {
          p: "A primeira prova vem inclusa. Antes de aprovar, confira mês a mês os dias da semana, os números e os dados de contato. Um erro no arquivo se repete em todas as unidades da tiragem.",
        },
        { cta: "Enviar o logotipo e a quantidade pelo WhatsApp" },
      ],
    },
    {
      heading: "Calendário no kit de fim de ano",
      blocks: [
        {
          p: [
            "O calendário pode seguir sozinho ou dentro de um ",
            { link: "kit corporativo", href: "/produtos/kits-corporativos" },
            " de fim de ano.",
          ],
        },
        {
          p: "Sozinho, ele pode ser enviado direto ao endereço de cada cliente da sua empresa. Você passa a lista de destinatários, e a equipe da sua empresa não precisa embalar nem despachar nada.",
        },
        {
          p: "Nos kits, entra qualquer tipo de brinde: a FullGraph compra e sugere os itens e personaliza o conjunto inteiro, inclusive com um cartão com o nome de cada pessoa. Os kits são montados e enviados ao endereço de cada destinatário, em todo o Brasil, pelos Correios com código de rastreio ou por via aérea. Não há quantidade mínima de kits, e a empresa pode manter kits em estoque para envios aos poucos.",
        },
        {
          p: [
            "Para completar o presente, ",
            { link: "cadernos personalizados", href: "/produtos/cadernos-personalizados" },
            " entram no mesmo pedido.",
          ],
        },
      ],
    },
    {
      heading: "Para empresas, órgãos públicos e redes",
      blocks: [
        {
          p: "Empresas compram calendários todos os anos, e o processo de compra precisa funcionar do mesmo jeito. A FullGraph fatura após aprovação de cadastro, mantém estoque para atendimento a empresas, emite nota fiscal e aceita PIX e cartões de crédito e débito. Também atendemos órgãos públicos e licitações, inclusive prefeituras.",
        },
        {
          p: [
            "Para redes e empresas com várias unidades, o mesmo arquivo aprovado garante que o calendário personalizado saia igual para todas as filiais. Se a empresa também precisa repor papel timbrado, envelopes ou pastas, os itens podem entrar no mesmo pedido pela ",
            { link: "papelaria institucional", href: "/produtos/papelaria-institucional" },
            ". Veja tudo o que produzimos para o setor corporativo na página de ",
            { link: "gráfica para empresas", href: "/solucoes/empresas" },
            ".",
          ],
        },
        {
          p: "Quem já imprimiu com a FullGraph: Igreen, JHP Agroflorestal, EVOLVE, Multiplicidades e Ápice Assessoria Esportiva.",
        },
      ],
    },
    {
      heading: "Regiões que atendemos e entrega",
      blocks: [
        {
          p: "Atendemos empresas e instituições em:",
        },
        {
          ul: [
            [
              "Brasília e todo o Distrito Federal, inclusive ",
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
              ", ",
              { link: "Rio Verde", href: "/grafica-rio-verde" },
              " e demais cidades de Goiás",
            ],
            "Outros estados, por frete pago pelo cliente",
          ],
        },
        {
          p: "Depois que o pedido fica pronto, a entrega é no mesmo dia no DF, em Valparaíso de Goiás, Luziânia, Cidade Ocidental e Novo Gama. Em Goiânia e nas demais cidades de Goiás, a entrega leva até 1 dia útil.",
        },
        {
          p: "Se preferir retirar, agende a retirada no SIBS Quadra 03, Conjunto A, Lote 19/21, Núcleo Bandeirante, de segunda a sexta, das 8h às 18h.",
        },
      ],
    },
  ],
  closing: {
    heading: "Como pedir o orçamento do calendário personalizado para 2027",
    serifWord: "calendário personalizado",
    text: "A quantidade mínima é de 100 calendários. A partir daí, cada calendário sai mais barato conforme a quantidade sobe, o que costuma valer a pena para quem distribui a clientes, parceiros e equipe ao mesmo tempo. Para orçar calendários personalizados, envie:",
    items: [
      "o modelo que você procura (de mesa, com acabamento especial ou outro);",
      "a quantidade, a partir de 100 unidades;",
      "se a arte já está pronta ou se precisa ser criada;",
      "o logotipo e as cores da marca;",
      "a data em que precisa receber;",
      "a cidade de entrega;",
      "se o calendário vai dentro de um kit ou direto para cada cliente.",
    ],
    note: "Se algum item ainda não estiver definido, peça o orçamento mesmo assim. A equipe ajuda a fechar as especificações.",
    whatsappLabel: "Falar com a gráfica pelo WhatsApp",
    quoteLabel: "Montar meu orçamento",
  },
  faqHeading: "Perguntas frequentes sobre calendário personalizado",
  faq: [
    {
      question: "Quando pedir os calendários de 2027?",
      answer:
        "Entre outubro e dezembro de 2026. Pedindo nesse período, o calendário fica pronto a tempo de ser distribuído no começo do ano.",
    },
    {
      question: "Quais modelos de calendário personalizado a FullGraph faz?",
      answer:
        "Todos os modelos, inclusive os especiais. O mais pedido é o calendário de mesa, com base em cartão 350 g, lâminas em couché 150 g e wire-o. Os especiais levam base tipo capa dura, laminação ou verniz.",
    },
    {
      question: "Qual a quantidade mínima de calendários?",
      answer:
        "100 unidades. Quanto maior a quantidade, menor o custo por calendário.",
    },
    {
      question: "Vocês criam a arte do calendário?",
      answer:
        "Sim. Se a empresa não tiver a arte, a FullGraph faz a arte completa do calendário. A primeira prova está inclusa no pedido.",
    },
    {
      question: "Vocês enviam o calendário para cada cliente da empresa?",
      answer:
        "Sim. O calendário pode ser enviado direto ao endereço de cada cliente, sozinho ou dentro de um kit de fim de ano com outros brindes.",
    },
    {
      question: "Qual o prazo de produção?",
      answer:
        "O prazo é informado no orçamento, a partir da data em que você precisa receber os calendários.",
    },
    {
      question: "Vocês entregam fora de Brasília?",
      answer:
        "Sim. A entrega é no mesmo dia no DF e em Valparaíso de Goiás, Luziânia, Cidade Ocidental e Novo Gama, e em até 1 dia útil em Goiânia e nas demais cidades de Goiás, depois que o pedido fica pronto. Para outros estados, o frete é pago pelo cliente.",
    },
    {
      question: "Emitem nota fiscal e atendem órgão público?",
      answer:
        "Sim. Emitimos nota fiscal e atendemos órgãos públicos e licitações. Empresas são faturadas após aprovação de cadastro.",
    },
  ],
};
