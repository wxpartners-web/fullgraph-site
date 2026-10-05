import type { PageContent } from "@/types";

/**
 * Copy aprovada pelo cliente (Gate Humano 2, 05/10/2026) — rascunhos/grafica-aparecida-de-goiania/grafica-aparecida-de-goiania.md
 * (Lote 5). Texto verbatim: não reescrever nem acrescentar afirmações sem
 * nova aprovação. A FullGraph não tem loja em Aparecida de Goiânia — a produção é no SIBS,
 * em Brasília, e a entrega leva até 1 dia útil depois do pedido pronto.
 */
export const graficaAparecidaDeGoianiaContent: PageContent = {
  metaTitle: "Gráfica em Aparecida de Goiânia para atacado | FullGraph",
  metaDescription:
    "Gráfica em Aparecida de Goiânia para o varejo e atacado: tabloides de ofertas, folhetos, catálogos e sacolas. Entrega em até 1 dia útil após pronto.",
  h1: "Gráfica para Aparecida de Goiânia: tabloides, folhetos e catálogos para atacado e varejo",
  intro: [
    "A oferta da semana tem dia para começar, e o impresso precisa estar na loja antes disso. Para atacados, distribuidoras e lojas que procuram uma gráfica em Aparecida de Goiânia, a FullGraph imprime tabloides, folhetos, folders e catálogos em Brasília. Pronto o pedido, a carga chega à cidade em até 1 dia útil.",
    "Não temos loja em Aparecida. Imprimimos desde 2012 no SIBS, no Núcleo Bandeirante, e o contato do orçamento à entrega passa pelo WhatsApp.",
  ],
  introCta: "Pedir orçamento para Aparecida de Goiânia pelo WhatsApp",
  sections: [
    {
      heading: "Gráfica em Aparecida de Goiânia: quanto tempo leva do pedido à loja?",
      blocks: [
        {
          p: "São dois prazos somados. O de produção varia com o material e a tiragem e vem escrito no orçamento. O transporte leva até 1 dia útil a partir da conclusão, por carro próprio ou transportadora, a depender do que vai na carga. O frete é pago pelo cliente.",
        },
        {
          p: "Da prova à saída da carga, tudo é acompanhado por mensagem. Se o projeto pedir conversa com o material na mesa, a reunião presencial acontece em Goiânia, caso a caso.",
        },
      ],
    },
    {
      heading: "Tabloides de ofertas com data marcada",
      blocks: [
        {
          p: "Tabloide que chega depois do início da promoção perde boa parte da função. Por isso a conta parte do primeiro dia da oferta e anda para trás: 1 dia útil de entrega, o prazo de produção e, antes disso, o tempo para fechar preços e aprovar a arte.",
        },
        {
          p: [
            "O papel dos ",
            { link: "jornais e tabloides", href: "/produtos/jornais-e-tabloides" },
            " costuma ser offset ou couché. Antes da tiragem, você recebe a prova para conferir preço, foto e validade de cada item.",
          ],
        },
      ],
    },
    {
      heading: "Folhetos, panfletos e folders para o ponto de venda",
      blocks: [
        {
          p: [
            "Em ação de loja, inauguração de filial ou fim de semana de atacarejo, o folheto vai para a mão do cliente. Os ",
            { link: "flyers e panfletos", href: "/produtos/flyers-e-panfletos" },
            " saem em formato padrão ou sob medida, geralmente em couché de 90 g ou de 115 g, sem limite de quantidade. Campanha decidida em cima da hora? Rodamos 5.000 unidades em 48 horas, só a impressão; para a panfletagem, indicamos distribuidores.",
          ],
        },
        {
          p: [
            "Os ",
            { link: "folders", href: "/produtos/folders-e-dobrados" },
            " usam os mesmos papéis e apresentam a linha de produtos da estação: A4 com duas ou três dobras, A3 aberto ou outro formato. No digital, a tiragem começa em 30 exemplares; acima de 500, vai para o offset. Display e wobbler completam a campanha no balcão e na gôndola.",
          ],
        },
        { cta: "Enviar a data da campanha pelo WhatsApp" },
      ],
    },
    {
      heading: "O que cinco anos com uma distribuidora ensinam sobre o calendário de impressos",
      blocks: [
        {
          p: "Por mais de cinco anos, a Real Distribuidora, cliente atendida na região de Goiânia e Aparecida, fez com a FullGraph folhetos, flyers, tabloides e catálogos de produtos. O tabloide acompanha o ciclo das ofertas. O catálogo muda quando entra ou sai produto da linha. Flyer e folheto aparecem em lançamentos e ações pontuais.",
        },
        {
          p: [
            "Com tudo no mesmo fornecedor, as datas de campanha viram uma agenda de pedidos, e um tabloide urgente não atropela o catálogo já programado. O ",
            { link: "catálogo de produtos", href: "/produtos/impressao-de-catalogos" },
            " entra nessa agenda sob demanda, do lote pequeno ao grande.",
          ],
        },
      ],
    },
    {
      heading: "Redes de lojas: o mesmo material em cada unidade",
      blocks: [
        {
          p: "Quem procura gráfica em Aparecida de Goiânia para uma rede tem um cuidado a mais: o cartaz da filial não pode sair com outra cor que não a da matriz. Para redes, padronizamos o material e organizamos a entrega por unidade, cuidando também da logística. Em pedidos que se repetem, mantemos estoque para atendimento e faturamos a empresa depois da aprovação do cadastro.",
        },
        {
          p: [
            "A ",
            { link: "sacola de compra", href: "/produtos/sacolas-personalizadas" },
            " pode entrar no mesmo pacote: reforço na boca e no fundo para aguentar peso, papel normalmente acima de 180 g, qualquer tipo de alça e nenhuma quantidade mínima. O prazo médio das sacolas é de 15 dias.",
          ],
        },
      ],
    },
    {
      heading: "Da data da oferta à entrega em cada loja: as etapas",
      blocks: [
        {
          ol: [
            [
              { strong: "A data vem primeiro." },
              " No WhatsApp, diga quando a oferta começa, o material, a quantidade e quantas lojas recebem.",
            ],
            [
              { strong: "Especificação." },
              " Formato, papel, acabamento e divisão da tiragem entre as lojas.",
            ],
            [
              { strong: "Prova aprovada." },
              " Sem o seu ok, nada vai para a máquina.",
            ],
            [
              { strong: "Produção." },
              " Corre o prazo combinado no orçamento.",
            ],
            [
              { strong: "Entrega." },
              " Num endereço só ou em cada unidade da rede.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Bairros de Aparecida de Goiânia e cidades vizinhas que atendemos",
      blocks: [
        {
          p: "Quem contrata a gráfica em Aparecida de Goiânia recebe o pedido em qualquer bairro, sem diferença de prazo. Nas cidades vizinhas, também atendemos:",
        },
        {
          ul: [
            [
              { link: "Goiânia", href: "/grafica-goiania" },
            ],
            [
              { link: "Senador Canedo", href: "/grafica-senador-canedo" },
            ],
            [
              { link: "Trindade", href: "/grafica-trindade" },
            ],
            [
              { link: "Anápolis", href: "/grafica-anapolis" },
            ],
            [
              "Brasília e o DF, pela ",
              { link: "gráfica em Brasília", href: "/" },
            ],
            "Outras cidades goianas, no mesmo prazo",
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Pedir orçamento à gráfica em Aparecida de Goiânia com a data da campanha",
    serifWord: "Aparecida de Goiânia",
    text: "Mande o que vai imprimir, quantas unidades, o dia em que a oferta começa, quantas lojas recebem (com o endereço de cada uma) e os dados da empresa para a nota fiscal. Se faltar definir papel ou formato, fechamos isso na conversa.",
    whatsappLabel: "Falar com a gráfica pelo WhatsApp",
    quoteLabel: "Montar meu orçamento",
  },
  faqHeading: "Perguntas frequentes de lojas e distribuidoras de Aparecida de Goiânia",
  faq: [
    {
      question: "A FullGraph é uma gráfica em Aparecida de Goiânia?",
      answer:
        "Não no endereço: somos de Brasília, produzimos no SIBS e enviamos o pedido pronto para a cidade. Orçamento e acompanhamento ficam no WhatsApp.",
    },
    {
      question: "Quanto tempo a entrega leva para chegar?",
      answer:
        "Some o prazo de produção do orçamento a até 1 dia útil de transporte. O frete corre por conta do cliente.",
    },
    {
      question: "O tabloide fica pronto antes do início da oferta?",
      answer:
        "O pedido é planejado a partir dessa data. Informe o dia de início no primeiro contato, e o orçamento já mostra se o prazo cabe.",
    },
    {
      question: "Vocês entregam o material separado para cada loja da rede?",
      answer:
        "Sim. Padronizamos o material da rede e organizamos a entrega por unidade, inclusive a logística.",
    },
    {
      question: "Existe quantidade mínima?",
      answer:
        "Panfletos não têm limite de quantidade. Folders começam em 30 exemplares no digital. Sacolas não têm mínimo, e o preço de cada unidade diminui quando a tiragem aumenta.",
    },
    {
      question: "Fazem catálogo de produtos para distribuidora?",
      answer:
        "Sim, de poucos exemplares a grandes tiragens. O prazo médio é de 5 dias úteis.",
    },
    {
      question: "A empresa pode ser faturada?",
      answer:
        "Sim, depois da aprovação do cadastro. Aceitamos PIX e cartão de crédito ou débito, e o pedido sai com nota fiscal.",
    },
  ],
};
