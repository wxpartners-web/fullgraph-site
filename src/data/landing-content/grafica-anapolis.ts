import type { PageContent } from "@/types";

/**
 * Copy aprovada pelo cliente (Gate Humano 2, 05/10/2026) — rascunhos/grafica-anapolis/grafica-anapolis.md
 * (Lote 5). Texto verbatim: não reescrever nem acrescentar afirmações sem
 * nova aprovação. A FullGraph não tem loja em Anápolis — a produção é no SIBS,
 * em Brasília, e a entrega leva até 1 dia útil depois do pedido pronto.
 */
export const graficaAnapolisContent: PageContent = {
  metaTitle: "Gráfica em Anápolis para indústria e logística | FullGraph",
  metaDescription:
    "Gráfica para Anápolis (GO): rótulos, catálogos, caixas e papelaria para indústrias e centros de distribuição. Entrega em até 1 dia útil após pronto.",
  h1: "Gráfica para Anápolis: rótulos, catálogos e papelaria para indústria e logística",
  intro: [
    "Para indústrias e centros de distribuição que procuram gráfica em Anápolis, a FullGraph imprime rótulos e etiquetas, caixas sob medida, catálogos de produto e a papelaria do escritório comercial. A produção fica no SIBS, em Brasília, onde imprimimos desde 2012. Atenderemos também Anápolis, com entrega em até 1 dia útil a partir do momento em que o pedido está pronto.",
    "A FullGraph não tem loja nem endereço na cidade. Do primeiro orçamento à aprovação da prova, a conversa acontece pelo WhatsApp.",
  ],
  introCta: "Pedir orçamento para Anápolis pelo WhatsApp",
  sections: [
    {
      heading: "O que muda ao escolher uma gráfica em Anápolis que produz em Brasília?",
      blocks: [
        {
          p: "Muda o lugar da produção, não a forma de acompanhar o pedido. Orçamento, arquivo, prova e andamento ficam no WhatsApp; impressão e acabamento, no SIBS. Com o material pronto, a carga segue para Anápolis por carro próprio e/ou transportadora, dependendo do tipo de impresso, e chega em até 1 dia útil. O frete é pago pelo cliente.",
        },
      ],
    },
    {
      heading: "Rótulos e etiquetas para a linha de produção",
      blocks: [
        {
          p: [
            "Rótulo do produto, etiqueta da embalagem secundária e identificação da caixa de expedição podem sair do mesmo fornecedor. A base pode ser papel, vinil ou BOPP. O corte especial segue o desenho de cada peça. Bobina ou folha plana: o formato de fornecimento acompanha o jeito que a sua equipe aplica o rótulo. Veja ",
            { link: "rótulos e etiquetas", href: "/produtos/rotulos-e-etiquetas" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Caixas sob medida para o produto e para kits",
      blocks: [
        {
          p: [
            "Cada caixa parte das medidas do produto, com faca feita para aquele modelo. O valor da faca e do acerto de máquina é igual para 50 ou para 1.000 caixas, por isso uma tiragem maior baixa o preço de cada unidade. Quando o produto é vendido em conjunto, como kit promocional ou estojo de amostras, montamos os itens na mesma caixa. Veja ",
            { link: "caixas personalizadas", href: "/produtos/caixas-personalizadas" },
            " e ",
            { link: "embalagens", href: "/solucoes/embalagens" },
            ".",
          ],
        },
        { cta: "Enviar a especificação do rótulo ou da caixa pelo WhatsApp" },
      ],
    },
    {
      heading: "Catálogos de produto para os representantes da indústria",
      blocks: [
        {
          p: "O catálogo vai na pasta do representante e precisa acompanhar cada mudança da linha. Com impressão sob demanda, a tiragem é livre, de poucas unidades a uma edição inteira para o lançamento.",
        },
        {
          ul: [
            [
              { strong: "Formato de referência:" },
              " 200 × 280 mm.",
            ],
            [
              { strong: "Papel:" },
              " offset, reciclato, couché ou especiais; miolo também em 150 g ou 170 g e capa em 300 g.",
            ],
            [
              { strong: "Acabamento:" },
              " as encadernações e os acabamentos da linha de livros.",
            ],
            [
              { strong: "Prazo médio:" },
              " 5 dias úteis.",
            ],
          ],
        },
        {
          p: [
            "Mais detalhes em ",
            { link: "impressão de catálogos", href: "/produtos/impressao-de-catalogos" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Papel timbrado e envelopes para o escritório comercial da fábrica",
      blocks: [
        {
          p: [
            "O timbrado sai em offset 90 g em 4x0 cores, sem pedido mínimo, e quanto maior a tiragem, mais barata fica cada folha. Os envelopes vão do carta ao saco A4 ou A3, com ou sem janela, em offset ou couché 150 g. Prazo médio dos dois: 5 dias úteis. Modelos em ",
            { link: "papelaria institucional", href: "/produtos/papelaria-institucional" },
            " e ",
            { link: "envelopes personalizados", href: "/produtos/envelopes-personalizados" },
            ". Para blocos de requisição com vias e crachás de funcionário, veja a página de ",
            { link: "Senador Canedo", href: "/grafica-senador-canedo" },
            " e ",
            { link: "crachás e credenciais", href: "/produtos/crachas-e-credenciais" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Reposição sem refazer o pedido do zero",
      blocks: [
        {
          p: "Quem compra rótulo, envelope e timbrado de uma gráfica em Anápolis todo mês não quer repetir a especificação a cada pedido. Aprovada na primeira compra, ela vira a base das reposições.",
        },
        {
          table: {
            head: ["O que a sua empresa envia", "O que recebe"],
            rows: [
              ["Arquivo final e especificação (medida, material, quantidade)", "Orçamento e prova para conferir antes da impressão"],
              ["Pedido de reposição do mesmo item", "Atendimento a partir do estoque mantido para a empresa"],
              ["Dados para cadastro", "Compra faturada depois que o cadastro é aprovado"],
              ["Forma de pagamento", "PIX ou cartão (crédito e débito), com emissão de nota fiscal"],
            ],
          },
        },
        {
          p: [
            "Atendimento a licitações e a órgãos públicos está incluído. Para compras recorrentes, veja ",
            { link: "gráfica para empresas", href: "/solucoes/empresas" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Regiões que atendemos em Anápolis e no eixo Brasília–Goiânia",
      blocks: [
        {
          p: "Atendemos todos os bairros de Anápolis. Quem fecha o pedido de gráfica em Anápolis com a FullGraph recebe na fábrica, no depósito, no centro de distribuição ou no escritório, em até 1 dia útil depois de pronto. Fora da cidade:",
        },
        {
          ul: [
            [
              { link: "Goiânia", href: "/grafica-goiania" },
              " e ",
              { link: "Aparecida de Goiânia", href: "/grafica-aparecida-de-goiania" },
              ", também em até 1 dia útil;",
            ],
            [
              "Brasília e o Distrito Federal, no mesmo dia da conclusão do pedido, pela ",
              { link: "gráfica em Brasília", href: "/" },
              ";",
            ],
            "outras cidades de Goiás, em até 1 dia útil após pronto.",
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Orçamento de gráfica em Anápolis: a especificação que agiliza a cotação",
    serifWord: "Anápolis",
    text: "Para quem pesquisa gráfica Anápolis e já tem o impresso definido, a cotação anda mais rápido com estes dados na primeira mensagem:",
    items: [
      "produto e quantidade (ou duas quantidades, para comparar o preço unitário);",
      "medida final e material, como papel, vinil ou BOPP nos rótulos;",
      "dia em que o impresso precisa estar na empresa;",
      "endereço de entrega, na fábrica ou no centro de distribuição;",
      "dados para a nota fiscal ou para o cadastro de faturamento.",
    ],
    note: "Algum dado ainda em aberto? Envie a mensagem assim mesmo e a equipe completa a especificação com você.",
    whatsappLabel: "Falar com a gráfica pelo WhatsApp",
    quoteLabel: "Montar meu orçamento",
  },
  faqHeading: "Perguntas frequentes de indústrias que pedem impressos para Anápolis",
  faq: [
    {
      question: "Dá para retirar o pedido em Anápolis?",
      answer:
        "Não. A FullGraph não é uma gráfica em Anápolis com balcão: produzimos em Brasília e levamos o pedido até o endereço da sua empresa.",
    },
    {
      question: "Quanto tempo leva para o pedido chegar?",
      answer:
        "A produção varia conforme o material e vem informada no orçamento. Pronto o pedido, Anápolis recebe em até 1 dia útil.",
    },
    {
      question: "Vocês fazem rótulos em bobina?",
      answer:
        "Sim, em bobina ou em folha plana. Trabalhamos com papel, vinil e BOPP, e o corte acompanha o formato do rótulo.",
    },
    {
      question: "Dá para imprimir catálogo de produtos em pouca quantidade?",
      answer:
        "Sim. O catálogo é impresso sob demanda, sem quantidade fixa, e fica pronto em cerca de 5 dias úteis.",
    },
    {
      question: "Dá para fazer caixa sob medida em pouca quantidade?",
      answer:
        "Sim. Como a faca e o acerto de máquina custam o mesmo para 50 ou 1.000 caixas, a unidade sai mais cara em tiragens pequenas. Vale pedir o orçamento com duas quantidades.",
    },
    {
      question: "Como a empresa pode pagar?",
      answer:
        "PIX, cartão de crédito ou de débito, com nota fiscal. Com o cadastro aprovado, a compra pode ser faturada.",
    },
  ],
};
