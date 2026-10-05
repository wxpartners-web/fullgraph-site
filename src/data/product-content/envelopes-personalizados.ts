import type { ProductContent } from "@/types";

/**
 * Copy aprovada pelo cliente — rascunhos/envelopes-personalizados/envelopes-personalizados.md
 * (Lote 4, onda 2 — Gate Humano 2, 05/10/2026; fatos F3 e briefing 3, bloco S). Texto verbatim:
 * não reescrever nem acrescentar afirmações sem nova aprovação. Envelope para convite
 * aparece só na FAQ, para formaturas (S3). Fonte única para a UI e para o JSON-LD (FAQPage).
 */
export const envelopesPersonalizadosContent: ProductContent = {
  metaTitle: "Envelope personalizado para empresas em Brasília | FullGraph",
  metaDescription:
    "Envelope personalizado carta, ofício, saco A4 e A3, com ou sem janela. Sem quantidade mínima, com nota fiscal e entrega no DF no mesmo dia após pronto.",
  h1: "Envelope personalizado para empresas: carta, ofício e saco A4 e A3",
  intro: [
    "O envelope é a primeira parte do documento que o cliente vê. A FullGraph imprime envelope personalizado com o logotipo, os dados e as cores da sua empresa, para correspondência, contratos, laudos e propostas.",
    "O pedido não tem quantidade mínima. A gráfica fica no SIBS, no Núcleo Bandeirante, em Brasília, imprime em offset e digital desde 2012 e atende escritórios, clínicas, escolas, empresas e órgãos públicos.",
  ],
  introCta: "Pedir orçamento de envelopes pelo WhatsApp",
  sections: [
    {
      heading: "Quais modelos de envelope personalizado a FullGraph faz?",
      blocks: [
        {
          p: "São quatro opções, e todas saem com a identidade da empresa. A medida é definida no pedido: fazemos todas as medidas, inclusive as personalizadas.",
        },
        { h3: "Envelope carta" },
        {
          p: "É o modelo da correspondência do dia a dia: cartas, comunicados, boletos e documentos dobrados.",
        },
        { h3: "Envelope ofício" },
        {
          p: "O ofício leva a folha dobrada em três partes. É o formato de ofícios, notificações e correspondência formal.",
        },
        { h3: "Envelope saco A4 e A3" },
        {
          p: "O envelope saco guarda a folha sem dobra. O envelope personalizado A4 serve para contratos, laudos, exames e propostas. O A3 recebe projetos, plantas e materiais em formato maior.",
        },
        { h3: "Envelope com janela ou sem janela" },
        {
          p: "No envelope com janela, o endereço impresso no próprio documento aparece pela abertura transparente, sem preencher o destinatário à mão. É comum em boletos, faturas e cartas emitidas em série.",
        },
      ],
    },
    {
      heading: "Envelope timbrado: a mesma identidade do papel timbrado e da pasta",
      blocks: [
        {
          p: [
            "Envelope timbrado é o envelope impresso com a marca e os dados de contato da empresa, no mesmo padrão do restante da papelaria. Quando o documento sai em ",
            { link: "papel timbrado", href: "/produtos/papelaria-institucional" },
            ", vai dentro de um envelope com a mesma marca e chega ao cliente em uma ",
            { link: "pasta personalizada", href: "/produtos/pastas-personalizadas" },
            ", o conjunto mostra cuidado com a apresentação.",
          ],
        },
        {
          p: "Com a papelaria toda na mesma gráfica, cores e logotipo ficam iguais em todas as peças. Se a arte já estiver pronta, basta enviar o arquivo. Se não estiver, a FullGraph cria a arte a partir do logotipo e da identidade visual da empresa.",
        },
      ],
    },
    {
      heading: "Papel, cores de impressão e fechamento",
      blocks: [
        {
          p: "Os envelopes são impressos em dois papéis:",
        },
        {
          ul: [
            [
              { strong: "Offset 150 g:" },
              " papel sem brilho, que aceita escrita à mão e carimbo.",
            ],
            [
              { strong: "Couché 150 g:" },
              " papel com acabamento liso, que realça cores e imagens.",
            ],
          ],
        },
        {
          p: [
            "A impressão pode ser ",
            { strong: "1x0" },
            ", em uma cor só na frente, para quem quer só o logotipo e o endereço, ou ",
            { strong: "4x0" },
            ", colorida na frente, para marcas com várias cores. O fechamento é com cola comum ou, se preferir, com fita dupla-face.",
          ],
        },
        { cta: "Enviar a arte ou o logotipo pelo WhatsApp" },
      ],
    },
    {
      heading: "Sem quantidade mínima, com prova inclusa e estoque para reposição",
      blocks: [
        {
          p: "Um escritório pequeno pode pedir só os envelopes do mês. Quanto maior a quantidade, menor o custo de cada envelope personalizado.",
        },
        {
          p: "A primeira prova está inclusa, e nada vai para impressão antes da sua aprovação. Depois disso, o prazo médio de produção é de 5 dias úteis.",
        },
        {
          p: "Para quem usa envelopes o ano inteiro, a FullGraph mantém estoque para atendimento. A empresa recebe conforme a necessidade, e a reposição sai com o mesmo papel e a mesma arte do pedido anterior.",
        },
      ],
    },
    {
      heading: "Envelopes personalizados para empresas, clínicas e órgãos públicos",
      blocks: [
        {
          p: "Escritórios de advocacia e contabilidade, clínicas, laboratórios e escolas enviam documentos todos os dias. Para eles, os envelopes personalizados fazem parte da rotina.",
        },
        {
          p: "A compra segue o processo da sua empresa: faturamento após aprovação do cadastro, nota fiscal, pagamento por PIX ou cartão de crédito e débito. A FullGraph atende órgãos públicos e licitações e tem prefeituras de Valparaíso de Goiás e Luziânia entre os clientes.",
        },
        {
          p: [
            "Entre as empresas que já imprimiram com a FullGraph estão Bertoni Design, Jota Design, Igreen e JHP Agroflorestal. Para ver os outros impressos para escritório, acesse a página de ",
            { link: "gráfica para empresas", href: "/solucoes/empresas" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Onde atendemos e como entregamos os envelopes",
      blocks: [
        {
          p: "Atendemos o Distrito Federal, o Entorno e Goiás. Depois que o pedido fica pronto, a entrega funciona assim:",
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
            "Outras cidades do Brasil: por frete pago pelo cliente",
          ],
        },
        {
          p: "Se preferir, agende a retirada no SIBS Quadra 03, Conjunto A, Lote 19/21, Núcleo Bandeirante, de segunda a sexta, das 8h às 18h.",
        },
      ],
    },
  ],
  closing: {
    heading: "Orçamento de envelope personalizado",
    serifWord: "envelope personalizado",
    text: "Para orçar o seu envelope personalizado, informe:",
    items: [
      "o modelo (carta, ofício, saco A4 ou A3), com ou sem janela;",
      "a quantidade e a impressão, 1x0 ou 4x0;",
      "se a arte está pronta e se combina com timbrado ou pasta;",
      "a cidade de entrega e se precisa de faturamento.",
    ],
    note: "Se ainda não decidiu o papel ou a medida, peça o orçamento mesmo assim.",
    whatsappLabel: "Falar com a gráfica pelo WhatsApp",
    quoteLabel: "Montar meu orçamento",
  },
  faqHeading: "Perguntas frequentes sobre envelopes personalizados",
  faq: [
    {
      question: "O que é envelope timbrado?",
      answer:
        "É o envelope impresso com o logotipo, os dados de contato e as cores da empresa. Ele acompanha o papel timbrado e a pasta na papelaria do escritório.",
    },
    {
      question: "Dá para pedir só 50 envelopes?",
      answer:
        "Sim. Não há quantidade mínima. Em tiragens maiores, o custo por envelope cai.",
    },
    {
      question: "Quais papéis e cores vocês usam?",
      answer:
        "Offset 150 g ou couché 150 g, com impressão 1x0 (uma cor na frente) ou 4x0 (colorida na frente).",
    },
    {
      question: "Vocês fazem envelope em medida personalizada?",
      answer:
        "Sim. Fazemos todas as medidas, inclusive as personalizadas.",
    },
    {
      question: "Qual o prazo de produção?",
      answer:
        "Em média, 5 dias úteis após a aprovação da prova. A primeira prova está inclusa.",
    },
    {
      question: "Fazem envelope para convite de formatura?",
      answer:
        "Sim. O foco da gráfica é o envelope para empresas, mas também produzimos envelopes para formaturas.",
    },
    {
      question: "Emitem nota fiscal e atendem órgão público?",
      answer:
        "Sim. Emitimos nota fiscal e atendemos órgãos públicos e licitações. Empresas são faturadas após a aprovação do cadastro.",
    },
  ],
};
