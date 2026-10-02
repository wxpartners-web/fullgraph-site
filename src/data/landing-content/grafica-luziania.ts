import type { PageContent } from "@/types";

/**
 * Copy aprovada pelo cliente — rascunhos/grafica-luziania/grafica-luziania.md
 * (Lote 2). Texto verbatim: não reescrever nem acrescentar afirmações sem
 * nova aprovação. A FullGraph não tem endereço em Luziânia — nunca
 * incluir um; sem distâncias em km.
 */
export const graficaLuzianiaContent: PageContent = {
  metaTitle: "Gráfica Luziânia (GO) para empresas e prefeituras | FullGraph",
  metaDescription:
    "Gráfica para Luziânia (GO): apostilas, formulários numerados, certificados e materiais de evento. Nota fiscal, licitações e entrega no mesmo dia.",
  h1: "Gráfica para Luziânia: impressos para prefeituras, escolas e empresas",
  intro: [
    "Para quem procura gráfica Luziânia com nota fiscal, atendimento a licitações e prazo de entrega previsível, a FullGraph produz em Brasília e já atende empresas e prefeituras da região. Depois que o pedido fica pronto, a entrega em Luziânia é feita no mesmo dia, como no Distrito Federal.",
    "Não temos endereço em Luziânia. A produção fica no SIBS, no Núcleo Bandeirante, e orçamento, prova e acompanhamento são feitos pelo WhatsApp. Imprimimos desde 2012.",
  ],
  introCta: "Pedir orçamento para Luziânia pelo WhatsApp",
  sections: [
    {
      heading: "Como a FullGraph atende quem procura gráfica em Luziânia?",
      blocks: [
        {
          p: "Luziânia está no Entorno Sul do DF, ligada a Brasília pela BR-040. O atendimento a quem pesquisa gráfica Luziânia se apoia em quatro pontos:",
        },
        {
          ul: [
            [
              { strong: "Um único ponto de produção." },
              " Os pedidos são produzidos em Brasília e seguem prontos para Luziânia.",
            ],
            [
              { strong: "Mesmo dia após pronto." },
              " A entrega segue o prazo do DF, com carro próprio e/ou transportadora, conforme o material.",
            ],
            [
              { strong: "Tudo pelo WhatsApp." },
              " Orçamento, envio de arquivos, aprovação da prova e acompanhamento do pedido.",
            ],
            [{ strong: "Frete pago pelo cliente." }, " Combinado junto com o endereço de entrega."],
          ],
        },
      ],
    },
    {
      heading: "Impressos para prefeituras e órgãos públicos",
      blocks: [
        {
          p: "A FullGraph atende vários clientes na região de Luziânia, inclusive prefeituras. O setor público pede impressos de rotina, que precisam sair sempre no mesmo padrão:",
        },
        {
          ul: [
            "formulários e requerimentos com numeração sequencial;",
            "blocos com via e picote;",
            "certificados numerados para cursos e solenidades;",
            "comunicação visual para prédios e campanhas, como banners, placas em ACM ou PVC e adesivos, com instalação.",
          ],
        },
        {
          p: [
            "Emitimos nota fiscal e atendemos órgãos públicos e licitações. Formulários, blocos e certificados estão na ",
            { link: "papelaria institucional", href: "/produtos/papelaria-institucional" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Apostilas e materiais para escolas",
      blocks: [
        {
          p: [
            "Escolas e cursos usam apostilas ao longo de todo o ano letivo. Fazemos ",
            { link: "apostilas", href: "/produtos/apostilas-e-espirais" },
            " com acabamento em grampo, cola, espiral ou wire-o, para escolas e empresas. Em geral, espiral e wire-o deixam a apostila abrir por completo sobre a mesa; grampo e cola deixam o material mais compacto.",
          ],
        },
        {
          p: [
            "Para catálogos e revistas institucionais, veja a ",
            { link: "gráfica editorial", href: "/solucoes/livros-editorial" },
            ".",
          ],
        },
        { cta: "Enviar a especificação do material pelo WhatsApp" },
      ],
    },
    {
      heading: "Calendários e materiais de fim de ano",
      blocks: [
        {
          p: "O calendário de mesa ou de parede é um impresso que instituições e comércios costumam distribuir no fim do ano. Fazemos todos os modelos, inclusive especiais. A melhor época para pedir é de outubro a dezembro: assim sobra tempo para conferir as datas, aprovar a prova e receber antes de janeiro.",
        },
      ],
    },
    {
      heading: "Eventos, solenidades e treinamentos",
      blocks: [
        {
          p: [
            "Em formatura, posse, seminário ou treinamento, a data não muda. Produzimos ",
            { link: "crachás e credenciais", href: "/produtos/crachas-e-credenciais" },
            " com o nome de cada participante, cordão personalizado e porta-crachá, além dos demais materiais do evento. Atendemos urgências e entregamos no local do evento.",
          ],
        },
      ],
    },
    {
      heading: "Como funciona o pedido a partir de Luziânia",
      blocks: [
        {
          ol: [
            [
              { strong: "Mensagem no WhatsApp." },
              " Conte o material, a quantidade e quando ele precisa chegar.",
            ],
            [
              { strong: "Especificação." },
              " Definimos formato, papel, acabamento e, quando houver, a numeração.",
            ],
            [{ strong: "Prova para aprovação." }, " A produção começa só depois do seu ok."],
            [{ strong: "Produção." }, " Impressão e acabamento em Brasília."],
            [
              { strong: "Entrega." },
              " No endereço combinado em Luziânia, no mesmo dia em que o pedido fica pronto.",
            ],
          ],
        },
        {
          p: [
            "Para empresas com compras recorrentes, mantemos estoque para atendimento e faturamos após aprovação de cadastro. Veja a página de ",
            { link: "gráfica para empresas", href: "/solucoes/empresas" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Regiões atendidas em Luziânia e no Entorno Sul",
      blocks: [
        { p: "Atendemos toda a cidade de Luziânia, incluindo:" },
        { ul: ["Centro", "Jardim Ingá", "Demais bairros da cidade"] },
        { p: "Também atendemos:" },
        {
          ul: [
            [
              { link: "Valparaíso de Goiás", href: "/grafica-valparaiso-de-goias" },
              ", no mesmo dia após pronto",
            ],
            "Cidade Ocidental e Novo Gama, no mesmo dia após pronto",
            [
              "Brasília e todo o Distrito Federal, na ",
              { link: "gráfica em Brasília", href: "/" },
            ],
            "Demais cidades de Goiás, em até 1 dia útil após pronto",
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Orçamento de gráfica em Luziânia pelo WhatsApp",
    serifWord: "Luziânia",
    text: "Para orçar, informe o material, a quantidade, a data em que precisa e o endereço de entrega em Luziânia. Em compras públicas, envie também os dados para a nota fiscal e as informações do processo de compra. Se ainda não tiver tudo definido, solicite o orçamento mesmo assim: a equipe ajuda a fechar as especificações.",
    whatsappLabel: "Falar com a gráfica pelo WhatsApp",
    quoteLabel: "Montar meu orçamento",
  },
  faqHeading: "Perguntas frequentes sobre a gráfica para Luziânia",
  faq: [
    {
      question: "A FullGraph tem loja em Luziânia?",
      answer:
        "Não. A produção é em Brasília, e a entrega em Luziânia é feita no mesmo dia em que o pedido fica pronto.",
    },
    {
      question: "Qual o prazo de entrega em Luziânia e no Jardim Ingá?",
      answer:
        "O prazo de produção é informado no orçamento. Depois de pronto, entregamos no mesmo dia, como no DF.",
    },
    {
      question: "Vocês atendem prefeituras e licitações?",
      answer:
        "Sim. Já atendemos prefeituras da região, emitimos nota fiscal e atendemos órgãos públicos e licitações.",
    },
    {
      question: "Fazem apostilas para escolas?",
      answer: "Sim. Com grampo, cola, espiral ou wire-o, para escolas e empresas.",
    },
    {
      question: "Fazem formulários com numeração e blocos com via?",
      answer: "Sim. Formulários e certificados com numeração sequencial, picote e blocos com via.",
    },
    {
      question: "Quando pedir calendários para o próximo ano?",
      answer: "De outubro a dezembro. Fazemos todos os modelos, inclusive especiais.",
    },
    {
      question: "Entregam material de evento no local?",
      answer: "Sim. Atendemos urgências e entregamos no local do evento.",
    },
    {
      question: "Como pagar?",
      answer:
        "PIX e cartões de crédito e débito, com nota fiscal. Empresas são faturadas após aprovação de cadastro.",
    },
  ],
};
