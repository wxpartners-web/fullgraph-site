import type { ProductContent } from "@/types";

/**
 * Copy aprovada pelo cliente — rascunhos/papelaria-institucional/papelaria-institucional.md
 * (Lote 4, onda 2 — Gate Humano 2, 05/10/2026; fatos do briefing 3, bloco Q). Texto verbatim:
 * não reescrever nem acrescentar afirmações sem nova aprovação. Receituário e
 * formulário contínuo não aparecem (Q5). Fonte única para a UI e para o JSON-LD (FAQPage).
 */
export const papelariaInstitucionalContent: ProductContent = {
  metaTitle: "Papel timbrado, blocos e formulários numerados | FullGraph",
  metaDescription:
    "Papel timbrado em offset 90 g, sem quantidade mínima, e blocos com numeração, picote e várias vias. Nota fiscal, licitações e entrega no DF e em Goiás.",
  h1: "Papel timbrado personalizado, blocos e formulários para a sua empresa",
  intro: [
    "A FullGraph imprime papel timbrado com a identidade da sua empresa e, no mesmo pedido, os blocos e formulários que o escritório usa no dia a dia. O timbrado sai em offset 90 g, com impressão colorida na frente, e não tem quantidade mínima.",
    "Os blocos podem ter numeração sequencial, picote e várias vias em papel autocopiativo. Para compras recorrentes, mantemos estoque para atendimento e faturamos após a aprovação do cadastro. Emitimos nota fiscal e atendemos órgãos públicos e licitações. A gráfica fica no SIBS, no Núcleo Bandeirante, em Brasília, e imprime em offset e digital desde 2012.",
  ],
  introCta: "Pedir orçamento de papel timbrado pelo WhatsApp",
  sections: [
    {
      heading: "Como pedir papel timbrado para a sua empresa?",
      blocks: [
        {
          p: "O pedido tem cinco etapas. A ordem é a mesma na primeira compra e na reposição.",
        },
        {
          ol: [
            [
              { strong: "Arte." },
              " Você envia a arte pronta ou o logotipo. Se a empresa ainda não tem o layout do timbrado, a FullGraph cria a arte.",
            ],
            [
              { strong: "Papel e quantidade." },
              " O padrão é offset 90 g, com impressão 4x0. A quantidade é livre, sem mínimo.",
            ],
            [
              { strong: "Prova." },
              " Você confere e aprova a prova. Nada vai para a impressão sem a sua aprovação.",
            ],
            [
              { strong: "Impressão." },
              " Tiragens maiores costumam ir para o offset, e as menores, para a impressão digital. O prazo médio de produção é de 5 dias úteis.",
            ],
            [
              { strong: "Entrega ou retirada." },
              " Entregamos no endereço da empresa, ou você agenda a retirada no SIBS.",
            ],
          ],
        },
        {
          p: "Antes de aprovar a arte, pense em como a folha vai ser usada. Deixe espaço livre para o texto, a assinatura e o carimbo. No rodapé, endereço, telefone e site precisam estar legíveis. Se o papel timbrado vai voltar à impressora do escritório para receber cartas, ofícios e contratos, confira a margem que a impressora deixa nas bordas, para o texto não invadir o cabeçalho.",
        },
      ],
    },
    {
      heading: "Papéis, formatos e impressão do timbrado",
      blocks: [
        {
          p: "O papel timbrado da FullGraph sai em offset 90 g, o papel mais pedido pelas empresas para cartas, ofícios, propostas e contratos. A impressão é 4x0: a frente sai em quatro cores, e o verso fica em branco, livre para o que for escrito ou impresso depois.",
        },
        {
          p: "Se a empresa precisar de outro papel, a especificação entra no orçamento. A FullGraph imprime papelaria em todos os tipos de papel. O formato também é definido no orçamento, junto com a quantidade.",
        },
        {
          p: "Não há quantidade mínima. Dá para pedir pouco para um escritório que está começando ou um volume maior para vários departamentos. Quanto maior a quantidade, menor o custo de cada folha.",
        },
        { cta: "Enviar a arte do timbrado pelo WhatsApp" },
      ],
    },
    {
      heading: "Blocos personalizados com a marca da empresa",
      blocks: [
        {
          p: "O bloco personalizado leva o mesmo logotipo e as mesmas cores do timbrado, para os impressos da empresa conversarem entre si. Fazemos:",
        },
        {
          ul: [
            [
              { strong: "Bloco simples:" },
              " folhas com a marca, para anotações, recados e uso interno.",
            ],
            [
              { strong: "Bloco de requisição:" },
              " para pedidos de material, de compra ou de serviço entre setores.",
            ],
            [
              { strong: "Bloco de orçamento:" },
              " para a equipe comercial preencher à mão e entregar ao cliente na hora.",
            ],
            [
              { strong: "Bloco com vias:" },
              " em papel autocopiativo, com várias vias. O que se escreve na primeira folha passa para as de baixo, sem carbono.",
            ],
          ],
        },
        {
          p: "O bloco de pedido personalizado segue a mesma lógica. Uma via fica com o cliente, outra com a empresa, e a numeração ajuda a conferir cada pedido. Os blocos com via saem em todos os tipos e modelos, então o layout acompanha os campos que a sua operação usa.",
        },
        {
          p: [
            "Bloco de anotações para dar de brinde em evento ou em kit é outro produto. Veja ",
            { link: "cadernos personalizados", href: "/produtos/cadernos-personalizados" },
            " e ",
            { link: "kits corporativos", href: "/produtos/kits-corporativos" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Formulários com numeração sequencial, picote e vias",
      blocks: [
        {
          p: "Quando o documento precisa de controle, o formulário pode combinar três recursos:",
        },
        {
          ul: [
            [
              { strong: "Numeração sequencial:" },
              " cada folha tem um número único. Fica fácil conferir o que foi emitido e localizar um documento depois.",
            ],
            [
              { strong: "Picote:" },
              " a folha se destaca do bloco sem rasgar, e o canhoto pode ficar preso como registro.",
            ],
            [
              { strong: "Vias:" },
              " em papel autocopiativo, uma para cada destino, como cliente, setor e arquivo.",
            ],
          ],
        },
        {
          p: "Esses recursos aparecem em requisições internas, protocolos de entrega e controles de estoque. Também fazemos certificados numerados para cursos, treinamentos e eventos.",
        },
        {
          p: "Órgãos públicos usam muito esse tipo de formulário. A FullGraph emite nota fiscal, atende licitações e tem prefeituras do Entorno do DF entre os clientes.",
        },
      ],
    },
    {
      heading: "Reposição sem falta: estoque e faturamento para empresas",
      blocks: [
        {
          p: "Timbrado e blocos são itens de consumo. Acabam todo mês e precisam voltar iguais. Para empresas com compra recorrente, a FullGraph mantém estoque para atendimento e fatura após a aprovação do cadastro. Na reposição, o pedido repete o papel, as cores e a arte já aprovados, e a folha nova chega igual à que está na gaveta.",
        },
        {
          p: [
            "O pagamento pode ser por PIX ou cartão de crédito e débito. Para ver o atendimento a empresas como um todo, com a ",
            { link: "papelaria corporativa", href: "/solucoes/empresas" },
            ", os materiais de evento e os kits, acesse a página de gráfica para empresas.",
          ],
        },
        {
          p: [
            { strong: "Quem já imprimiu com a FullGraph:" },
            " SESI, CNI, GWM, ASICS, EMPLAVI, JK Shopping, Colégio CIMAN, Lojas Blumenau, Dular, DOMANI, Supera, UZUK Comida Japonesa, SOHO Restaurante, Tete á Tete Restaurante, Ápice Assessoria Esportiva, BSB Bike Store, JORLAN - ev, Igreen, EVOLVE, Centro Aretê, Multiplicidades, Bertoni Design, JHP Agroflorestal e Jota Design.",
          ],
        },
      ],
    },
    {
      heading: "Timbrado, envelope, pasta e cartão com a mesma identidade",
      blocks: [
        {
          p: "Quando as peças saem da mesma gráfica, a cor e o logotipo ficam iguais em todas elas.",
        },
        {
          ul: [
            [
              { strong: "Envelopes:" },
              " para enviar o documento impresso no timbrado. Veja ",
              { link: "envelopes personalizados", href: "/produtos/envelopes-personalizados" },
              ".",
            ],
            [
              { strong: "Pastas:" },
              " para entregar propostas e contratos em reuniões. Veja ",
              { link: "pastas personalizadas", href: "/produtos/pastas-personalizadas" },
              ".",
            ],
            [
              { strong: "Cartão de visitas:" },
              " com a mesma marca, entra no mesmo orçamento.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Regiões que atendemos e prazo de entrega",
      blocks: [
        {
          p: "O prazo médio de produção do timbrado e dos blocos é de 5 dias úteis. Atendemos empresas e órgãos públicos no Distrito Federal e em Goiás. Depois que o pedido fica pronto, a entrega funciona assim:",
        },
        {
          ul: [
            [
              "Brasília e todo o Distrito Federal, inclusive ",
              { link: "Taguatinga", href: "/grafica-taguatinga" },
              " e ",
              { link: "Águas Claras", href: "/grafica-aguas-claras" },
              ": no mesmo dia",
            ],
            [
              { link: "Valparaíso de Goiás", href: "/grafica-valparaiso-de-goias" },
              ", ",
              { link: "Luziânia", href: "/grafica-luziania" },
              ", Cidade Ocidental e Novo Gama: no mesmo dia",
            ],
            [
              { link: "Goiânia", href: "/grafica-goiania" },
              ", ",
              { link: "Rio Verde", href: "/grafica-rio-verde" },
              " e demais cidades de Goiás: em até 1 dia útil",
            ],
            "Outros estados: por frete pago pelo cliente",
          ],
        },
        {
          p: "Se preferir buscar o pedido, agende a retirada no SIBS Quadra 03, Conjunto A, Lote 19/21, Núcleo Bandeirante, de segunda a sexta, das 8h às 18h.",
        },
      ],
    },
  ],
  closing: {
    heading: "Orçamento de papel timbrado e blocos para a sua empresa",
    serifWord: "papel timbrado e blocos",
    text: "Para orçar papel timbrado, blocos e formulários, informe:",
    items: [
      "os itens: timbrado, blocos, formulários ou certificados;",
      "a quantidade de cada um;",
      "se a arte está pronta ou se a FullGraph vai criar;",
      "nos blocos, o número de vias e se precisa de numeração e picote;",
      "se é uma primeira compra ou uma reposição;",
      "o CNPJ, se a empresa quer faturamento;",
      "a data em que precisa receber e o endereço de entrega.",
    ],
    note: "Não precisa ter tudo decidido. O que faltar, a equipe define com você na conversa.",
    whatsappLabel: "Falar com a gráfica pelo WhatsApp",
    quoteLabel: "Montar meu orçamento",
  },
  faqHeading: "Perguntas frequentes sobre papel timbrado e blocos",
  faq: [
    {
      question: "Em qual papel vocês imprimem o papel timbrado?",
      answer:
        "Em offset 90 g, com impressão 4x0: frente colorida e verso em branco. Outros papéis podem ser orçados.",
    },
    {
      question: "Qual a quantidade mínima de papel timbrado e de blocos?",
      answer:
        "Não há quantidade mínima. Quanto maior a quantidade, menor o custo por unidade.",
    },
    {
      question: "Qual o prazo de produção?",
      answer:
        "O prazo médio é de 5 dias úteis. Depois de pronto, entregamos no mesmo dia no DF, em Valparaíso de Goiás, Luziânia, Cidade Ocidental e Novo Gama, e em até 1 dia útil em Goiânia e nas demais cidades de Goiás.",
    },
    {
      question: "Vocês fazem blocos com várias vias?",
      answer:
        "Sim. Os blocos com via saem em papel autocopiativo, com várias vias, e podem ter numeração sequencial e picote.",
    },
    {
      question: "Que tipos de bloco vocês fazem?",
      answer:
        "Blocos simples, de requisição e de orçamento, além de blocos com vias para pedidos e controles internos, sempre com a marca da empresa.",
    },
    {
      question: "Vocês criam a arte do timbrado?",
      answer:
        "Sim, quando necessário. Se a empresa já tiver a arte, é só enviar o arquivo.",
    },
    {
      question: "Dá para manter estoque e repetir o mesmo timbrado na reposição?",
      answer:
        "Sim. Mantemos estoque para atendimento das empresas, e a reposição repete o papel, as cores e a arte aprovados.",
    },
    {
      question: "Emitem nota fiscal e atendem órgão público?",
      answer:
        "Sim. Emitimos nota fiscal e atendemos órgãos públicos e licitações. Empresas são faturadas após a aprovação do cadastro.",
    },
  ],
};
