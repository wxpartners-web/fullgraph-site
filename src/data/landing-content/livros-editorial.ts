import type { PageContent } from "@/types";

/**
 * Copy aprovada pelo cliente — rascunhos/livros-editorial/livros-editorial.md.
 * Texto verbatim: não reescrever nem acrescentar afirmações sem nova
 * aprovação. Fonte única para a UI e para o JSON-LD (FAQPage).
 */
export const livrosEditorialContent: PageContent = {
  metaTitle: "Gráfica editorial com diagramação, revisão e ISBN | FullGraph",
  metaDescription:
    "Gráfica editorial em Brasília: diagramação, revisão, ficha catalográfica e ISBN junto com a produção de livros, revistas, catálogos e apostilas.",
  h1: "Gráfica editorial: do original revisado à publicação impressa",
  intro: [
    "A FullGraph é uma gráfica editorial em Brasília que produz livros, revistas, catálogos, jornais e apostilas e oferece, junto com a impressão, os serviços editoriais que o projeto precisa: diagramação, revisão, projeto gráfico, ficha catalográfica, ISBN e e-book.",
    "Trabalhamos com editoras, autores, escolas, instituições e órgãos públicos desde 2012. Você chega com o original ou com o arquivo pronto. A gente define a especificação, envia a prova para aprovação e só então imprime.",
  ],
  introCta: "Pedir orçamento editorial pelo WhatsApp",
  sections: [
    {
      heading: "O que faz uma gráfica editorial?",
      blocks: [
        {
          p: "A editora cuida do conteúdo: seleciona a obra, edita o texto e decide como e quando publicar. A gráfica cuida da produção: transforma o arquivo em exemplares impressos, com o papel, a encadernação e o acabamento certos.",
        },
        {
          p: "Uma gráfica editorial trabalha entre os dois lados. Ela conhece as exigências de uma publicação, como lombada, cadernos, papel de miolo e padrão de cor, e entrega o material pronto para circular. Na FullGraph, além da produção, você pode contratar a preparação do original quando o projeto é impresso aqui.",
        },
      ],
    },
    {
      heading: "Serviços editoriais junto com a impressão",
      blocks: [
        {
          ul: [
            [
              { strong: "Diagramação:" },
              " organização do texto e das imagens nas páginas, no formato escolhido.",
            ],
            [{ strong: "Revisão:" }, " correção do texto antes da diagramação final."],
            [{ strong: "Projeto gráfico:" }, " definição visual do miolo e da capa."],
            [
              { strong: "Ficha catalográfica:" },
              " dados de catalogação impressos no verso da folha de rosto.",
            ],
            [{ strong: "ISBN:" }, " registro do número que identifica a obra."],
            [{ strong: "E-book:" }, " versão digital da publicação."],
          ],
        },
        {
          p: "Os serviços editoriais são contratados junto com a impressão do material na FullGraph. Não oferecemos diagramação, revisão ou ISBN de forma avulsa.",
        },
      ],
    },
    {
      heading: "Publicações que produzimos",
      blocks: [
        {
          ul: [
            [
              { strong: "Livros:" },
              " ",
              { link: "impressão de livros sob demanda e em tiragem", href: "/produtos/impressao-de-livros" },
              ", com capa dura, brochura, grampo, espiral ou wire-o.",
            ],
            [
              { strong: "Revistas:" },
              " ",
              { link: "impressão de revistas", href: "/produtos/impressao-de-revistas" },
              " com todos os tipos de acabamento da linha editorial.",
            ],
            [
              { strong: "Catálogos:" },
              " ",
              { link: "impressão de catálogos", href: "/produtos/impressao-de-catalogos" },
              " em offset, reciclato, couché ou papéis especiais, sob demanda e em qualquer quantidade.",
            ],
            [
              { strong: "Jornais e tabloides:" },
              " ",
              { link: "jornais e tabloides", href: "/produtos/jornais-e-tabloides" },
              " normalmente em papel offset ou couché.",
            ],
            [
              { strong: "Apostilas:" },
              " ",
              { link: "apostilas e espirais", href: "/produtos/apostilas-e-espirais" },
              " com acabamento em grampo, cola, espiral ou wire-o.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Como funciona um projeto editorial na FullGraph",
      blocks: [
        {
          ol: [
            [
              { strong: "Você envia o original ou o arquivo." },
              " Pode ser o texto ainda sem diagramação ou o PDF finalizado.",
            ],
            [
              { strong: "Preparamos o original, se o projeto precisar." },
              " Diagramação, revisão, projeto gráfico, ficha, ISBN ou e-book, conforme o que for contratado.",
            ],
            [
              { strong: "Definimos a especificação." },
              " Formato, papel do miolo e da capa, encadernação, acabamento e tiragem.",
            ],
            [{ strong: "Você aprova a prova." }, " Nada vai para impressão sem a sua aprovação."],
            [{ strong: "Produzimos." }, " Impressão offset ou digital, encadernação e acabamento."],
            [
              { strong: "Entregamos ou você retira." },
              " O material segue para o endereço combinado ou fica disponível para retirada sob agendamento.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Para quem trabalhamos",
      blocks: [
        {
          ul: [
            [{ strong: "Editoras:" }, " lançamentos, reimpressões e reposição de estoque."],
            [
              { strong: "Autores independentes:" },
              " o livro com acabamento de editora, a partir de 1 exemplar.",
            ],
            [
              { strong: "Escolas e faculdades:" },
              " apostilas, anuários e publicações institucionais.",
            ],
            [
              { strong: "Igrejas, associações, sindicatos e entidades de classe:" },
              " revistas, livros comemorativos e materiais de formação.",
            ],
            [
              { strong: "Empresas e órgãos públicos:" },
              " catálogos e publicações institucionais, com nota fiscal. Atendemos licitações.",
            ],
          ],
        },
        {
          p: "Quem já imprimiu com a FullGraph: SESI, CNI, Colégio CIMAN, Centro Aretê, Multiplicidades, Supera e Bertoni Design.",
        },
        { cta: "Enviar meu projeto editorial pelo WhatsApp" },
      ],
    },
    {
      heading: "Tiragem: do exemplar único à edição completa",
      blocks: [
        {
          p: "Livros podem ser impressos sob demanda a partir de 1 exemplar. Serve para prova de autor, lançamento, reposição sem encalhe ou edição para um evento. Catálogos também saem em qualquer quantidade.",
        },
        {
          p: "Nas tiragens maiores, a produção mantém o mesmo padrão de cor do primeiro ao último exemplar. O processo de impressão, offset ou digital, é definido no orçamento, junto com o prazo.",
        },
      ],
    },
    {
      heading: "Prazo, entrega e regiões atendidas",
      blocks: [
        {
          p: "O prazo de produção varia conforme o material, os serviços contratados e a quantidade, e é informado no orçamento. Depois de pronto, o pedido é entregue no mesmo dia no Distrito Federal e em até 1 dia útil em Goiânia e nas cidades de Goiás que atendemos. Para outros estados, enviamos por frete, pago pelo cliente.",
        },
        {
          p: "A retirada é feita sob agendamento no SIBS Quadra 03, Conjunto A, Lote 19/21, Núcleo Bandeirante, de segunda a sexta, das 8h às 18h.",
        },
        {
          ul: [
            "Brasília e todo o Distrito Federal",
            [{ link: "Goiânia", href: "/grafica-goiania" }, " e Aparecida de Goiânia"],
            [{ link: "Rio Verde", href: "/grafica-rio-verde" }],
            "Valparaíso de Goiás e Luziânia",
            "Demais estados, por frete",
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Peça orçamento à gráfica editorial da FullGraph",
    serifWord: "gráfica editorial",
    text: "Para receber o orçamento da gráfica editorial, informe o tipo de publicação, o formato, o número de páginas, o papel, a encadernação e a tiragem. Diga também quais serviços editoriais o projeto precisa. Se ainda não tiver tudo definido, solicite o orçamento mesmo assim: a equipe ajuda a fechar as especificações.",
    whatsappLabel: "Falar com a gráfica pelo WhatsApp",
    quoteLabel: "Montar meu orçamento",
  },
  faq: [
    {
      question: "Qual a diferença entre gráfica e editora?",
      answer:
        "A editora cuida do conteúdo e da publicação da obra. A gráfica produz os exemplares. Uma gráfica editorial como a FullGraph faz a produção e oferece serviços de preparação do original junto com a impressão.",
    },
    {
      question: "Vocês fazem diagramação e revisão do livro?",
      answer:
        "Sim, quando o livro é impresso na FullGraph. Também oferecemos projeto gráfico de miolo e capa.",
    },
    {
      question: "Vocês cuidam do ISBN e da ficha catalográfica?",
      answer:
        "Sim. Os dois serviços são contratados junto com a impressão da obra na FullGraph.",
    },
    {
      question: "Posso contratar só a diagramação ou só o ISBN?",
      answer:
        "Não. Os serviços editoriais são oferecidos apenas junto com a impressão do material na FullGraph.",
    },
    {
      question: "Vocês fazem e-book?",
      answer: "Sim. A versão digital é contratada junto com a impressão da publicação.",
    },
    {
      question: "Quais publicações vocês imprimem?",
      answer:
        "Livros, revistas, catálogos, jornais, tabloides e apostilas, em impressão offset ou digital.",
    },
    {
      question: "Atendem editoras, escolas e órgãos públicos?",
      answer:
        "Sim. Emitimos nota fiscal, aceitamos PIX e cartões e atendemos órgãos públicos e licitações.",
    },
    {
      question: "Qual o prazo e vocês entregam fora de Brasília?",
      answer:
        "O prazo de produção é informado no orçamento. Depois de pronto, entregamos no mesmo dia no DF e em até 1 dia útil em Goiás. Para outros estados, o envio é por frete pago pelo cliente.",
    },
  ],
};
