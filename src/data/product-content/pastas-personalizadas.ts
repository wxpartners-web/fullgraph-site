import type { ProductContent } from "@/types";

/**
 * Copy aprovada pelo cliente — rascunhos/pastas-personalizadas/pastas-personalizadas.md
 * (Lote 4, onda 1 — Gate Humano 2, 04/10/2026). Texto verbatim: não reescrever
 * nem acrescentar afirmações sem nova aprovação. Medidas, laminação, verniz,
 * prova e prazo médio dependem do briefing 3 (bloco R e Q4).
 * /produtos/envelopes-personalizados ainda não existe: a frase fica sem link
 * até a página ser publicada. Fonte única para a UI e para o JSON-LD (FAQPage).
 */
export const pastasPersonalizadasContent: ProductContent = {
  metaTitle: "Pastas personalizadas para empresas e eventos | FullGraph",
  metaDescription:
    "Pastas personalizadas com bolsa, orelha, porta-cartão ou lombada, em cartão 250 g ou 300 g. Sem quantidade mínima, com entrega em Brasília e Goiás.",
  h1: "Pastas personalizadas para empresas e eventos",
  intro: [
    "A FullGraph imprime pastas personalizadas em papel cartão, com a marca da empresa ou do evento, para guardar propostas, contratos, documentos e o material que cada participante recebe.",
    "São quatro modelos: pasta com bolsa, com orelha, com porta-cartão e com lombada. O papel mais usado é o cartão 250 g ou 300 g, e o pedido não tem quantidade mínima. A gráfica fica no SIBS, no Núcleo Bandeirante, em Brasília, e imprime desde 2012.",
  ],
  introCta: "Pedir orçamento de pastas pelo WhatsApp",
  sections: [
    {
      heading: "Que modelos de pastas personalizadas a FullGraph produz?",
      blocks: [
        {
          p: "Uma pasta personalizada protege os papéis e apresenta a marca de quem entrega. O modelo certo depende da quantidade de folhas e de como a pasta vai ser usada.",
        },
        { h3: "Pasta com bolsa personalizada" },
        {
          p: "A bolsa é uma aba interna que forma um bolso. Ela segura folhas soltas, folhetos e documentos, que ficam no lugar quando a pasta é aberta. É o modelo que muita gente procura como \"pasta personalizada com bolso\", usado em propostas comerciais, contratos e material de apresentação.",
        },
        { h3: "Pasta com orelha" },
        {
          p: "Na pasta com orelha, as abas laterais são dobradas para dentro e prendem o conteúdo. Costuma ser escolhida para entregas mais simples, como documentos avulsos e materiais de consulta rápida.",
        },
        { h3: "Pasta com porta-cartão" },
        {
          p: "O porta-cartão é um encaixe para o cartão de visitas. Assim, quem recebe a pasta fica com o contato do responsável pela proposta, pelo atendimento ou pelo evento.",
        },
        { h3: "Pasta com lombada" },
        {
          p: "A lombada dá espessura à pasta, que passa a comportar mais folhas. Serve para propostas extensas, relatórios e conjuntos de documentos com mais volume.",
        },
        {
          p: "O formato de cada modelo é definido no orçamento, de acordo com o que vai dentro da pasta.",
        },
      ],
    },
    {
      heading: "Papel, impressão e arte",
      blocks: [
        {
          p: "Normalmente, as pastas são impressas em papel cartão 250 g ou 300 g, gramaturas firmes para uma peça que vai ser manuseada e transportada. Se o projeto pedir outro papel, vale perguntar: a FullGraph imprime a papelaria da empresa em todos os tipos de papel.",
        },
        {
          p: "A gráfica trabalha com impressão offset e digital, e o processo de cada pedido é escolhido no orçamento, assim como o acabamento da pasta.",
        },
        {
          p: "Se a sua empresa já tem a arte pronta, basta enviar o arquivo. Se não tiver, a FullGraph cria a arte a partir do logotipo e da identidade visual da marca. Para adiantar essa etapa, separe o logotipo em boa resolução, as cores da marca e os dados de contato que devem aparecer na capa.",
        },
        { cta: "Enviar a arte ou o logotipo pelo WhatsApp" },
      ],
    },
    {
      heading: "Pastas para empresas, escritórios e órgãos públicos",
      blocks: [
        {
          p: "Escritórios de advocacia e de contabilidade, clínicas, laboratórios e construtoras usam a pasta institucional para entregar contratos, laudos, propostas e documentos. Para o cliente, a pasta é a primeira coisa que aparece quando o documento chega.",
        },
        {
          // "envelopes personalizados" fica sem link até /produtos/envelopes-personalizados existir
          p: [
            "Impressas junto com o ",
            { link: "papel timbrado", href: "/produtos/papelaria-institucional" },
            " e os envelopes personalizados, as pastas seguem a mesma identidade visual das outras peças da empresa.",
          ],
        },
        {
          p: "Para quem usa pastas personalizadas o ano inteiro, a FullGraph mantém estoque para atendimento. A empresa recebe as pastas conforme precisa, sem guardar a tiragem inteira no escritório.",
        },
        {
          p: "O pedido também segue o processo de compras: faturamento depois da aprovação do cadastro, nota fiscal, pagamento por PIX ou cartão de crédito e débito e atendimento a órgãos públicos e licitações. A gráfica já atende prefeituras da região.",
        },
        {
          p: [
            "Entre as empresas e instituições que já imprimiram com a FullGraph estão SESI, CNI, GWM, ASICS, EMPLAVI e JK Shopping. Para ver os outros impressos do escritório, acesse a página de ",
            { link: "gráfica para empresas", href: "/solucoes/empresas" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Pastas para congressos, convenções e treinamentos",
      blocks: [
        {
          p: "Em congressos, convenções e treinamentos, a pasta do participante reúne a programação, o bloco de anotações e o certificado. A FullGraph produz a pasta e o que vai dentro dela no mesmo pedido.",
        },
        {
          p: "A data do evento não muda, então o prazo é planejado a partir dela. A gráfica atende pedidos de urgência, e o prazo de cada pedido é informado no orçamento. As pastas personalizadas podem ser entregues direto no local do evento.",
        },
        {
          p: [
            "A pasta também pode sair junto com os ",
            { link: "crachás e credenciais", href: "/produtos/crachas-e-credenciais" },
            " e o cordão personalizado, o que concentra a identificação e o material do participante em um fornecedor só. Quando o público está espalhado por várias cidades, a pasta entra nos ",
            { link: "kits corporativos", href: "/produtos/kits-corporativos" },
            ", montados pela FullGraph e enviados para o endereço de cada pessoa.",
          ],
        },
        {
          p: "Uma recomendação para eventos: some à quantidade de inscritos algumas pastas para palestrantes, convidados e inscrições feitas na última semana.",
        },
      ],
    },
    {
      heading: "Sem quantidade mínima, da primeira tiragem à reposição",
      blocks: [
        {
          p: "A pasta personalizada não exige pedido mínimo. Um escritório que precisa de poucas unidades para uma reunião com cliente pede só o que vai usar. Uma empresa que consome pastas todo mês pode deixar parte da produção em estoque na gráfica e receber aos poucos.",
        },
        {
          p: "Na reposição, modelo, papel e arte já estão definidos, e o orçamento parte do pedido anterior. Isso ajuda a manter as pastas iguais de uma remessa para outra.",
        },
      ],
    },
    {
      heading: "Onde atendemos e como entregamos as pastas",
      blocks: [
        {
          p: "Atendemos empresas, órgãos públicos e eventos no Distrito Federal e em Goiás. Depois que o pedido fica pronto, a entrega funciona assim:",
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
          p: "Se preferir retirar, agende a retirada no SIBS Quadra 03, Conjunto A, Lote 19/21, Núcleo Bandeirante, de segunda a sexta, das 8h às 18h.",
        },
      ],
    },
  ],
  closing: {
    heading: "Orçamento de pastas personalizadas",
    serifWord: "pastas personalizadas",
    text: "Para orçar pastas personalizadas, informe:",
    items: [
      "a quantidade;",
      "o modelo: com bolsa, com orelha, com porta-cartão ou com lombada;",
      "o papel, se já tiver preferência;",
      "se a arte está pronta ou se precisa ser criada;",
      "a data de entrega ou a data do evento;",
      "o local de entrega;",
      "outros itens do mesmo pedido, como timbrado, envelopes ou crachás.",
    ],
    note: "Não precisa ter tudo decidido para pedir o orçamento. O que faltar, a equipe da gráfica define com você na conversa.",
    whatsappLabel: "Falar com a gráfica pelo WhatsApp",
    quoteLabel: "Montar meu orçamento",
  },
  faqHeading: "Perguntas frequentes sobre pastas personalizadas",
  faq: [
    {
      question: "Qual a diferença entre pasta com bolsa e pasta com orelha?",
      answer:
        "A pasta com bolsa tem uma aba interna que forma um bolso e segura folhas soltas. Na pasta com orelha, as abas laterais são dobradas para dentro. A FullGraph faz os dois modelos, além da pasta com porta-cartão e da pasta com lombada.",
    },
    {
      question: "Preciso pedir uma quantidade mínima de pastas?",
      answer: "Não. Você pede a quantidade que vai usar, seja para uma reunião ou para o ano inteiro.",
    },
    {
      question: "Qual papel é usado nas pastas?",
      answer: "Normalmente cartão 250 g ou 300 g. Outros papéis podem ser orçados conforme o projeto.",
    },
    {
      question: "Vocês criam a arte da pasta?",
      answer: "Sim, quando necessário. Se a empresa já tiver a arte, é só enviar o arquivo.",
    },
    {
      question: "Fazem pastas para congresso com entrega no local do evento?",
      answer:
        "Sim. Produzimos a pasta do participante e os demais materiais do evento, atendemos urgência e entregamos no local.",
    },
    {
      question: "A empresa pode deixar pastas em estoque na gráfica?",
      answer:
        "Sim. A FullGraph mantém estoque para atendimento, e a empresa recebe as pastas conforme a necessidade.",
    },
    {
      question: "Emitem nota fiscal e atendem órgão público?",
      answer:
        "Sim. Emitimos nota fiscal e atendemos órgãos públicos e licitações. Empresas são faturadas depois da aprovação do cadastro.",
    },
    {
      question: "Entregam pastas fora de Brasília?",
      answer:
        "Sim. No Entorno, a entrega é no mesmo dia depois que o pedido fica pronto. Em Goiânia e nas demais cidades de Goiás, em até 1 dia útil. Para outros estados, o envio é por frete pago pelo cliente.",
    },
  ],
};
