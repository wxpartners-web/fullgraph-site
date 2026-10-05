import type { ProductContent } from "@/types";

/**
 * Copy aprovada pelo cliente — rascunhos/folders-e-dobrados/folders-e-dobrados.md
 * (Lote 4, onda 3 — Gate Humano 2, 05/10/2026; fatos do briefing 3, bloco P). Texto verbatim:
 * não reescrever nem acrescentar afirmações sem nova aprovação. Fonte única para a UI
 * e para o JSON-LD (FAQPage).
 */
export const foldersEDobradosContent: ProductContent = {
  metaTitle: "Impressão de folders: todos os tipos de dobra | FullGraph",
  metaDescription:
    "Impressão de folders personalizados com 1, 2 ou 3 dobras, sanfona, carteira ou janela. Gráfica em Brasília desde 2012, entrega no DF e em Goiás.",
  h1: "Impressão de folders personalizados com todos os tipos de dobra",
  intro: [
    "A FullGraph faz a impressão de folders personalizados com todos os tipos de dobra, no formato padrão ou no tamanho que o projeto pedir. O folder organiza a apresentação de uma empresa, de um produto, de um empreendimento ou da programação de um evento em painéis, na ordem em que a pessoa vai ler.",
    "Imprimimos em Brasília desde 2012, a partir de 30 unidades na impressão digital; acima de 500 unidades, em offset. A entrega é no Distrito Federal e em Goiás.",
  ],
  introCta: "Pedir orçamento de folders pelo WhatsApp",
  sections: [
    {
      heading: "Qual dobra escolher na impressão de folders?",
      blocks: [
        {
          p: "Comece pelo conteúdo, não pelo nome da dobra. Conte quantos blocos de informação o folder terá (capa, apresentação, produtos, mapa, contato) e em que ordem. O número de painéis e o jeito de abrir vêm daí.",
        },
        { h3: "Folder 1 dobra, folder 2 dobras ou folder 3 dobras" },
        {
          ul: [
            [
              { strong: "1 dobra:" },
              " 4 painéis. Abre ao meio, como um cartão. Bom para cardápio curto ou apresentação rápida.",
            ],
            [
              { strong: "2 dobras:" },
              " 6 painéis. O modelo mais comum para apresentar empresa, serviço ou empreendimento.",
            ],
            [
              { strong: "3 dobras:" },
              " 8 painéis. Cabe mais conteúdo, como tabela, mapa ou etapas de um processo, sem passar para um catálogo.",
            ],
          ],
        },
        { h3: "Carteira, sanfona, janela ou cruz" },
        {
          ul: [
            [
              { strong: "Sanfona:" },
              " abre em zigue-zague e mostra os painéis lado a lado, como uma linha do tempo.",
            ],
            [
              { strong: "Carteira:" },
              " os painéis se fecham um dentro do outro e a leitura acontece em sequência, um de cada vez.",
            ],
            [
              { strong: "Janela:" },
              " as duas abas laterais fecham sobre o centro, que aparece inteiro quando o folder abre. Serve bem para revelar uma imagem ou uma planta.",
            ],
            [
              { strong: "Cruz:" },
              " uma dobra vertical e outra horizontal. Abre como um mapa.",
            ],
          ],
        },
        {
          p: "Na impressão de folders da FullGraph entram todos os tipos de dobra. Na dúvida, mande o conteúdo e a equipe indica a dobra.",
        },
      ],
    },
    {
      heading: "Formatos e papéis",
      blocks: [
        {
          p: "Os formatos padrão são o A4 aberto, com 2 ou 3 dobras, e o A3 aberto. Fora deles, imprimimos em qualquer formato, inclusive quadrado ou do tamanho de um envelope específico.",
        },
        {
          p: "Os papéis são os mesmos dos panfletos: couché 90 g e couché 115 g. O 90 g é mais leve e dobra com facilidade. O 115 g é mais encorpado e aguenta mais manuseio.",
        },
      ],
    },
    {
      heading: "Frente e verso, vinco e acabamento",
      blocks: [
        {
          p: "Folder é impresso dos dois lados, porque cada face vira painel depois da dobra. Por isso, a montagem do arquivo precisa respeitar a posição de cada painel na folha aberta.",
        },
        {
          p: "Quando o papel pede, aplicamos vinco antes da dobra. O vinco marca a linha onde o papel vai dobrar e evita que a impressão rache no ponto da dobra. Também fazemos laminação e verniz localizado, que protegem a capa ou destacam um logotipo, uma foto ou o nome do empreendimento.",
        },
        { cta: "Enviar meu arquivo e o tipo de dobra pelo WhatsApp" },
      ],
    },
    {
      heading: "Folder ou panfleto: quando a dobra faz diferença",
      blocks: [
        {
          p: "O folder é para quem vai guardar e consultar depois. Ele é entregue em reunião, no plantão de vendas, no balcão ou dentro de um kit, e a pessoa lê com calma. O panfleto é feito para circular em volume, com uma mensagem só.",
        },
        {
          p: [
            "Se a campanha precisa de uma peça rápida e sem dobra, veja os ",
            { link: "flyers e panfletos", href: "/produtos/flyers-e-panfletos" },
            ". Se o conteúdo já não cabe em 8 painéis, como uma lista de produtos com fotos e preços, o caminho é a ",
            { link: "impressão de catálogos", href: "/produtos/impressao-de-catalogos" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Folders para lançamento imobiliário, eventos e apresentação comercial",
      blocks: [
        {
          ul: [
            [
              { strong: "Construtoras e incorporadoras:" },
              " o folder do lançamento vai para o corretor e para o plantão, com a planta na dobra janela e o mapa de acesso no verso. Stand, banner e display saem junto, na linha de ",
              { link: "comunicação visual", href: "/produtos/comunicacao-visual" },
              ", como fazemos para lançamentos em ",
              { link: "Águas Claras", href: "/grafica-aguas-claras" },
              ".",
            ],
            [
              { strong: "Empresas:" },
              " apresentação institucional e material para visita comercial. Veja o que mais imprimimos para ",
              { link: "empresas", href: "/solucoes/empresas" },
              ".",
            ],
            [
              { strong: "Eventos e feiras:" },
              " programação, mapa do espaço e lista de expositores.",
            ],
            [
              { strong: "Restaurantes:" },
              " cardápio dobrado para mesa ou balcão.",
            ],
            [
              { strong: "Escolas e clínicas:" },
              " cursos, serviços, horários e convênios.",
            ],
            [
              { strong: "Franquias e redes:" },
              " o mesmo folder, no mesmo padrão, para todas as unidades.",
            ],
            [
              { strong: "Órgãos públicos:" },
              " campanhas e cartilhas, com nota fiscal e atendimento a licitações.",
            ],
          ],
        },
        {
          p: "Também já imprimiram com a FullGraph: BSB Bike Store, Colégio CIMAN, Centro Aretê, JORLAN - ev e Jota Design.",
        },
      ],
    },
    {
      heading: "Arte, arquivo e prova antes de imprimir",
      blocks: [
        {
          p: "Normalmente o cliente envia a arte pronta. Quando necessário, a FullGraph cria a arte do folder.",
        },
        {
          p: "No folder, o arquivo tem um cuidado a mais: ele vai aberto, com as linhas de dobra marcadas e cada painel na posição certa. Mantenha textos longe das dobras, use cores em CMYK e deixe sangria nas bordas. Antes de imprimir, você recebe a prova para conferir a ordem dos painéis e aprovar.",
        },
      ],
    },
    {
      heading: "Quantidade, prazo e preço",
      blocks: [
        {
          p: "A impressão de folders começa em 30 unidades na impressão digital; acima de 500 unidades, é feita em offset. Não há limite máximo.",
        },
        {
          p: "O preço da impressão de folders depende da quantidade, do formato, do número e do tipo de dobra, do papel, do acabamento e do prazo. Quanto maior a tiragem, menor tende a ser o custo de cada unidade.",
        },
        {
          p: "Quando a data aperta, os folders podem sair no mesmo prazo expresso dos panfletos: 5.000 unidades em 48 horas. Para outras quantidades e acabamentos, o prazo é informado no orçamento. Para empresas, a FullGraph mantém estoque para atendimento e fatura após a aprovação do cadastro.",
        },
      ],
    },
    {
      heading: "Entrega e regiões que atendemos",
      blocks: [
        {
          p: "Atendemos pedidos de folders personalizados em:",
        },
        {
          ul: [
            [
              "Brasília e todo o Distrito Federal, incluindo ",
              { link: "Taguatinga", href: "/grafica-taguatinga" },
              " e ",
              { link: "Águas Claras", href: "/grafica-aguas-claras" },
              ", no mesmo dia após pronto",
            ],
            [
              { link: "Valparaíso de Goiás", href: "/grafica-valparaiso-de-goias" },
              ", ",
              { link: "Luziânia", href: "/grafica-luziania" },
              ", Cidade Ocidental e Novo Gama, também no mesmo dia",
            ],
            [
              { link: "Goiânia", href: "/grafica-goiania" },
              " e Aparecida de Goiânia, em até 1 dia útil",
            ],
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
    heading: "Orçamento de impressão de folders personalizados",
    serifWord: "folders personalizados",
    text: "Para orçar a impressão de folders, informe a quantidade, o formato aberto, o tipo de dobra, o papel (se já tiver escolhido), o acabamento, a data em que precisa do material e o endereço de entrega. Se ainda faltar alguma definição, peça o orçamento assim mesmo: a equipe ajuda a fechar a especificação.",
    whatsappLabel: "Orçar meus folders pelo WhatsApp",
    quoteLabel: "Montar meu orçamento",
  },
  faqHeading: "Perguntas frequentes sobre impressão de folders",
  faq: [
    {
      question: "Quais tipos de dobra vocês fazem?",
      answer:
        "Todos: 1, 2 ou 3 dobras, sanfona, carteira, janela, cruz e outros.",
    },
    {
      question: "Qual o melhor papel para folder?",
      answer:
        "Couché 90 g ou couché 115 g. O 115 g é indicado quando o folder vai ser manuseado várias vezes.",
    },
    {
      question: "Qual o tamanho padrão de um folder?",
      answer:
        "Os formatos padrão são A4 aberto, com 2 ou 3 dobras, e A3 aberto. Também imprimimos em qualquer outro formato.",
    },
    {
      question: "Tem quantidade mínima?",
      answer:
        "Sim: a partir de 30 unidades na impressão digital. Acima de 500 unidades, a impressão é em offset, sem limite máximo de quantidade.",
    },
    {
      question: "Em quanto tempo os folders ficam prontos?",
      answer:
        "No prazo expresso, 5.000 folders em 48 horas. Nos demais pedidos, o prazo é informado no orçamento. No DF e no Entorno, a entrega é no mesmo dia depois que o pedido fica pronto.",
    },
    {
      question: "Vocês criam a arte do folder?",
      answer:
        "Sim, quando necessário. Se você já tiver a arte, envie o arquivo aberto, com as dobras marcadas.",
    },
    {
      question: "Folder ou panfleto: qual escolher?",
      answer:
        "Folder, quando o conteúdo tem várias partes e a pessoa vai guardar a peça. Panfleto, quando a mensagem é curta e circula em volume.",
    },
    {
      question: "Emitem nota fiscal e faturam para empresas?",
      answer:
        "Sim. Emitimos nota fiscal, aceitamos PIX e cartões e atendemos órgãos públicos e licitações. Empresas são faturadas após a aprovação do cadastro.",
    },
  ],
};
