import type { ProductContent } from "@/types";

/**
 * Copy aprovada pelo cliente — rascunhos/impressao-de-livros/impressao-de-livros.md.
 * Texto verbatim: não reescrever nem acrescentar afirmações sem nova
 * aprovação. Fonte única para a UI e para o JSON-LD (FAQPage).
 */
export const impressaoDeLivrosContent: ProductContent = {
  metaTitle: "Impressão de livros a partir de 1 exemplar, capa dura e brochura | FullGraph",
  metaDescription:
    "Impressão de livros sob demanda ou em grandes tiragens: formatos livres, papel pólen, offset ou couché, capa dura, cola PUR e acabamentos especiais. Envio para todo o Brasil.",
  h1: "Impressão de livros com acabamento editorial, a partir de 1 exemplar",
  intro: [
    "A FullGraph faz impressão de livros sob demanda ou em grandes tiragens, com produção própria em Brasília e envio para todo o Brasil. Do exemplar único para o lançamento do autor independente à edição completa de uma editora, cada livro passa pela mesma linha: pré-impressão, impressão, encadernação e acabamento sob o mesmo controle.",
    "Você escolhe formato, papel, encadernação e acabamento de capa. A gente confere o arquivo, envia a prova para aprovação e só então imprime.",
  ],
  introCta: "Pedir orçamento pelo WhatsApp",
  sections: [
    {
      heading: "Como funciona a impressão de livros na FullGraph?",
      blocks: [
        {
          ol: [
            [
              { strong: "Você envia o arquivo." },
              " O ideal é um PDF/X-1a finalizado. Para impressão de livros, recomendamos preparar miolo e capa em PDFs separados. A capa deve seguir o gabarito do projeto, com lombada dimensionada conforme o papel e a quantidade de páginas. Confirme as orientações de envio antes de finalizar os arquivos.",
            ],
            [
              { strong: "Definimos as especificações." },
              " Formato, papel do miolo e da capa, encadernação, acabamento e tiragem.",
            ],
            [{ strong: "Você aprova a prova." }, " Nada vai para impressão sem a sua aprovação."],
            [
              { strong: "Produzimos e entregamos." },
              " O livro é impresso, encadernado, acabado e enviado, ou fica disponível para retirada sob agendamento.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Formatos de livro",
      blocks: [
        { p: "O formato é livre. Os tamanhos mais pedidos são:" },
        {
          ul: [
            "140 × 200 mm",
            "148 × 210 mm",
            "160 × 230 mm",
            "170 × 240 mm",
            "200 × 200 mm",
            "200 × 280 mm",
            "210 × 297 mm",
          ],
        },
        { p: "Precisa de um tamanho fora da lista? Fazemos formatos especiais sob consulta." },
      ],
    },
    {
      heading: "Papéis para miolo e capa",
      blocks: [
        {
          p: [
            { strong: "Miolo:" },
            " offset, pólen, couché, reciclato e papéis especiais. O papel pólen, especialmente nas versões de tonalidade creme, é comumente utilizado em romances e outros livros de leitura prolongada. O offset branco é indicado para apostilas e livros técnicos. O couché valoriza fotos e cores e é comumente utilizado em catálogos, livros de arte e portfólios. A escolha final depende do projeto.",
          ],
        },
        {
          p: [
            { strong: "Capa:" },
            " offset, couché e cartão supremo, escolhidos conforme o peso e a rigidez que o livro precisa.",
          ],
        },
      ],
    },
    {
      heading: "Acabamentos de capa",
      blocks: [
        {
          ul: [
            "Laminação BOPP fosca ou brilho, que protege a capa contra umidade e desgaste",
            "Laminação soft touch, com toque aveludado",
            "Verniz UV brilho, aplicado em toda a capa ou localizado em títulos e imagens",
            "Hot stamping, para títulos e logotipos com efeito metalizado",
          ],
        },
      ],
    },
    {
      heading: "Encadernação",
      blocks: [
        {
          ul: [
            [
              { strong: "Capa dura:" },
              " o acabamento mais resistente, indicado para edições especiais, livros de arte e obras de consulta frequente.",
            ],
            [
              { strong: "Cola PUR:" },
              " oferece resistência e flexibilidade, sendo especialmente indicada para papéis revestidos, como o couché, e para livros manuseados com frequência.",
            ],
            [{ strong: "Hot melt:" }, " brochura colada, para edições de leitura corrente."],
            [{ strong: "Grampo:" }, " para livretos e publicações com poucas páginas."],
            [
              { strong: "Espiral e wire-o:" },
              " abertura completa das páginas, comum em apostilas, cadernos de exercícios e manuais.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Sob demanda e grandes tiragens",
      blocks: [
        {
          p: "Na impressão de livros sob demanda, você imprime a partir de 1 exemplar: serve para prova de autor, lançamento, presente ou reposição de estoque sem encalhe. Em grandes tiragens, a produção mantém o mesmo padrão de cor do primeiro ao último exemplar, no prazo combinado.",
        },
      ],
    },
    {
      heading: "Miolo em cores ou em preto?",
      blocks: [
        {
          p: "A escolha entre miolo colorido e miolo em preto muda o resultado e o orçamento. Romances, livros acadêmicos e obras de leitura corrida costumam ter o miolo em preto, com capa colorida. Livros infantis, de receitas, de arte e de fotografia pedem miolo em cores, de preferência em couché, que reproduz melhor as imagens.",
        },
        {
          p: "Também é possível combinar: miolo em preto com um caderno de fotos colorido no meio do livro. Na hora do orçamento, informe quantas páginas são coloridas e em que posição ficam. Assim a especificação sai certa desde o início.",
        },
      ],
    },
    {
      heading: "Quanto custa imprimir um livro?",
      blocks: [
        {
          p: "Não trabalhamos com tabela fixa, porque o valor muda muito de um projeto para outro. O preço depende de:",
        },
        {
          ul: [
            "formato e número de páginas;",
            "papel do miolo e da capa;",
            "impressão em cores ou em preto;",
            "tipo de encadernação;",
            "acabamentos de capa;",
            "quantidade de exemplares.",
          ],
        },
        {
          p: "Com essas informações, você recebe um orçamento sob medida para o seu livro. Solicite pelo WhatsApp ou pelo formulário.",
        },
      ],
    },
    {
      heading: "Para quem imprimimos",
      blocks: [
        {
          ul: [
            [
              { strong: "Autores independentes" },
              " que querem o próprio livro com acabamento de editora.",
            ],
            [
              { strong: "Editoras" },
              " que precisam de lançamentos, reimpressões e reposição de estoque.",
            ],
            [
              { strong: "Escolas e faculdades" },
              ", para apostilas, anuários e publicações institucionais.",
            ],
            [
              { strong: "Igrejas, associações, sindicatos e entidades de classe" },
              ", para revistas, livros comemorativos e materiais de formação.",
            ],
          ],
        },
        {
          p: [
            "Se o seu livro ainda precisa de diagramação, revisão, ficha catalográfica ou ISBN, conheça as ",
            { link: "soluções editoriais da FullGraph", href: "/solucoes/livros-editorial" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Prazo, entrega e regiões atendidas",
      blocks: [
        {
          p: "O prazo de produção varia conforme o material e a quantidade, e é informado no orçamento. Depois de pronto, o pedido é entregue no mesmo dia em Brasília e no Distrito Federal, e em até 1 dia útil em Goiânia e nas cidades de Goiás que atendemos. Para os outros estados, enviamos por frete, pago pelo cliente.",
        },
      ],
    },
  ],
  closing: {
    heading: "Solicite o orçamento de impressão de livros",
    serifWord: "impressão de livros",
    text: "Conte o formato, o número de páginas, o papel, a encadernação e a quantidade. Se ainda não tiver tudo definido, a equipe ajuda a fechar as especificações e envia o orçamento com o prazo de produção.",
    whatsappLabel: "Falar com a gráfica pelo WhatsApp",
    quoteLabel: "Montar meu orçamento",
  },
  faq: [
    {
      question: "Quanto custa imprimir um livro?",
      answer:
        "Depende do formato, do número de páginas, do papel, das cores, da encadernação, do acabamento e da quantidade. Por isso cada livro recebe orçamento próprio. Solicite pelo WhatsApp ou pelo formulário.",
    },
    {
      question: "Vocês imprimem só 1 exemplar?",
      answer: "Sim. A impressão de livros sob demanda começa em 1 exemplar.",
    },
    {
      question: "Vocês fazem livro de capa dura?",
      answer: "Sim. Além da capa dura, fazemos brochura com cola PUR ou hot melt, grampo, espiral e wire-o.",
    },
    {
      question: "Qual a diferença entre cola PUR e hot melt?",
      answer:
        "As duas são brochuras coladas. A cola PUR oferece resistência e flexibilidade e é especialmente indicada para papéis revestidos, como o couché. O hot melt atende bem edições de leitura corrente. A escolha depende das características do projeto.",
    },
    {
      question: "Que arquivo devo enviar?",
      answer:
        "O ideal é um PDF/X-1a finalizado. Recomendamos miolo e capa em PDFs separados, com a capa no gabarito do projeto: contracapa, lombada, frente e orelhas, quando houver. Antes de imprimir, enviamos a prova para a sua aprovação.",
    },
    {
      question: "Qual o prazo de impressão?",
      answer:
        "Varia conforme o material e a quantidade, e é informado no orçamento. Depois de pronto, a entrega é no mesmo dia no DF e em até 1 dia útil em Goiás.",
    },
    {
      question: "Vocês enviam para todo o Brasil?",
      answer: "Sim. Para fora do DF e de Goiás, o envio é por frete, pago pelo cliente.",
    },
  ],
};
