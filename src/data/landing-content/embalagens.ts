import type { PageContent } from "@/types";

/**
 * Copy aprovada pelo cliente — rascunhos/embalagens/embalagens.md.
 * Texto verbatim: não reescrever nem acrescentar afirmações sem nova
 * aprovação. Fonte única para a UI e para o JSON-LD (FAQPage).
 * Sacolas ficam sem link: ainda não há página de produto.
 */
export const embalagensContent: PageContent = {
  metaTitle: "Embalagens personalizadas sem pedido mínimo | FullGraph",
  metaDescription:
    "Embalagens personalizadas sem pedido mínimo: caixas, sacos kraft, papel de bandeja, sacolas e rótulos com a sua marca. Peça orçamento pelo WhatsApp.",
  h1: "Embalagens personalizadas para marcas, delivery e varejo",
  intro: [
    "A FullGraph produz embalagens personalizadas com a identidade da sua marca: caixas, embalagens para hambúrguer, sacos para delivery, papel de bandeja, sacolas, rótulos e adesivos.",
    "Não há quantidade mínima. O orçamento sai na quantidade que faz sentido para o seu negócio, e quanto maior a quantidade, menor o custo por unidade. Você escolhe o material, as cores e o acabamento. A gente envia a prova para aprovação antes de produzir.",
  ],
  introCta: "Pedir orçamento de embalagem pelo WhatsApp",
  sections: [
    {
      heading: "Quais embalagens personalizadas a sua marca precisa?",
      blocks: [
        {
          ul: [
            [
              { strong: "Caixas para marcas:" },
              " ",
              { link: "caixas personalizadas", href: "/produtos/caixas-personalizadas" },
              " rígidas, cartonadas, luvas, gavetas e modelos em papelão ondulado, com faca sob medida.",
            ],
            [
              { strong: "Embalagens para hambúrguer:" },
              " ",
              { link: "embalagens para hambúrguer", href: "/produtos/embalagens-para-hamburguer" },
              " em papel cartão, com formato conforme a arte.",
            ],
            [
              { strong: "Sacos para delivery:" },
              " ",
              { link: "sacos e embalagens para delivery", href: "/produtos/sacos-e-embalagens-delivery" },
              " em papel kraft ou offset, com ou sem alça.",
            ],
            [
              { strong: "Papel de bandeja:" },
              " ",
              {
                link: "papéis de bandeja personalizados",
                href: "/produtos/papeis-de-bandeja-personalizados",
              },
              " em formatos sob medida, normalmente em papel offset.",
            ],
            [
              { strong: "Sacolas:" },
              " todos os tipos de alça e de papel, com tamanhos e acabamentos personalizados.",
            ],
            [
              { strong: "Rótulos e adesivos:" },
              " ",
              { link: "rótulos e etiquetas", href: "/produtos/rotulos-e-etiquetas" },
              " em papel, vinil ou BOPP, com corte especial, em bobinas ou folhas planas.",
            ],
          ],
        },
        {
          p: "Cada item pode ser pedido sozinho ou como parte de um conjunto com a mesma identidade visual.",
        },
      ],
    },
    {
      heading: "Embalagens para alimentação e delivery",
      blocks: [
        {
          p: "Hamburguerias, restaurantes, confeitarias, cafeterias e dark kitchens costumam pedir as peças em conjunto: a caixa do lanche, o saco de entrega, o papel de bandeja e o adesivo que lacra o pacote. Com as cores e a marca padronizadas em todas as peças, o pedido chega ao cliente com a mesma apresentação da loja.",
        },
        {
          p: "Usamos matéria-prima apropriada para uso com alimentos. Informe o uso no pedido de orçamento.",
        },
        {
          p: "Normalmente o cliente envia a arte pronta. Quando necessário, a FullGraph cria a arte das embalagens de alimentação, dos sacos, das sacolas e dos rótulos.",
        },
      ],
    },
    {
      heading: "Caixas e embalagens premium para marcas",
      blocks: [
        {
          p: "Para marcas que vendem pela apresentação, a caixa faz parte do produto. Trabalhamos com caixa rígida, cartonada, luva, cinta, gaveta, tipo livro com ímã, caixa com janela e papelão ondulado.",
        },
        { p: "Os acabamentos valorizam a marca:" },
        {
          ul: [
            "hot stamping, com efeito metalizado em logotipos e detalhes;",
            "relevo seco, que dá textura sem tinta;",
            "verniz localizado;",
            "soft touch, com toque aveludado;",
            "cores Pantone e metálicas, para manter a cor exata da identidade.",
          ],
        },
        {
          p: [
            "A faca é desenvolvida sob medida e orçada à parte. O primeiro protótipo está incluso, e a caixa é entregue montada. Também montamos kits com vários produtos na mesma caixa. Nas caixas, trabalhamos com o arquivo finalizado enviado pela marca. Veja os modelos e materiais na página de ",
            { link: "caixas personalizadas", href: "/produtos/caixas-personalizadas" },
            ".",
          ],
        },
        { cta: "Enviar medidas e quantidade pelo WhatsApp" },
      ],
    },
    {
      heading: "Sem pedido mínimo: como a quantidade muda o preço",
      blocks: [
        {
          p: "Não há pedido mínimo para caixas, embalagens para hambúrguer, sacos, papel de bandeja, sacolas e rótulos. O que muda com a quantidade é o custo de cada unidade.",
        },
        {
          p: "Nos modelos que usam faca, como as caixas, a faca e o acerto de máquina custam o mesmo para 50 ou para 1.000 unidades. Em quantidades muito baixas, esse custo fixo pesa mais em cada peça. Por isso, quanto maior a quantidade, menor o custo por unidade. No orçamento, você pode comparar duas ou três quantidades e escolher a que fecha melhor a conta.",
        },
        { p: "O preço depende de:" },
        {
          ul: [
            "tipo de embalagem e medidas;",
            "material e gramatura;",
            "número de cores e uso de Pantone ou metálicas;",
            "acabamentos;",
            "necessidade de faca nova;",
            "quantidade.",
          ],
        },
      ],
    },
    {
      heading: "Como funciona o seu pedido de embalagem",
      blocks: [
        {
          ol: [
            [
              { strong: "Você envia a arte e as medidas." },
              " Se ainda não tiver a arte, avise no pedido.",
            ],
            [{ strong: "Definimos a especificação." }, " Material, cores, acabamento e quantidade."],
            [
              { strong: "Desenvolvemos a faca e o protótipo, quando o modelo pede." },
              " É o caso das caixas e de formatos especiais.",
            ],
            [{ strong: "Você aprova." }, " Nada vai para produção sem a sua aprovação."],
            [{ strong: "Produzimos." }, " Impressão, acabamento, corte e, nas caixas, montagem."],
            [
              { strong: "Entregamos ou você retira." },
              " O pedido segue para o endereço combinado ou fica disponível para retirada sob agendamento.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Segmentos que atendemos",
      blocks: [
        {
          ul: [
            [
              { strong: "Alimentação e delivery:" },
              " caixas para hambúrguer, sacos, papel de bandeja e adesivos de lacre.",
            ],
            [{ strong: "Confeitarias e cafés:" }, " caixas, sacos e rótulos para produtos e presentes."],
            [{ strong: "Cosméticos:" }, " cartuchos, caixas rígidas, rótulos e kits."],
            [
              { strong: "Moda e acessórios:" },
              " caixas de tampa e fundo, gavetas, luvas e sacolas.",
            ],
            [{ strong: "Joalherias:" }, " caixas rígidas e sacolas para presente."],
            [{ strong: "Presentes:" }, " caixas tipo livro, gavetas e kits."],
            [
              { strong: "Lojas virtuais:" },
              " caixas em papelão ondulado para envio e adesivos de identificação.",
            ],
            [{ strong: "Empresas:" }, " kits corporativos e de lançamento, montados na mesma caixa."],
          ],
        },
        {
          p: "Entre os clientes que já imprimiram com a FullGraph estão UZUK Comida Japonesa, SOHO Restaurante e Tete à Tete Restaurante.",
        },
      ],
    },
    {
      heading: "Prazo, entrega e regiões atendidas",
      blocks: [
        {
          p: "O prazo de produção varia conforme o tipo de embalagem, os acabamentos e a quantidade, e é informado no orçamento. Depois de pronto, o pedido é entregue no mesmo dia no Distrito Federal e em até 1 dia útil em Goiânia e nas cidades de Goiás que atendemos. Para outros estados, enviamos por frete, pago pelo cliente.",
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
    heading: "Orçamento de embalagens personalizadas",
    serifWord: "embalagens personalizadas",
    text: "Para orçar embalagens personalizadas, informe o tipo de embalagem, as medidas, o material, as cores, o acabamento e a quantidade. Diga também se a embalagem terá contato com alimentos e se você já tem a arte. Se ainda não tiver tudo definido, solicite o orçamento mesmo assim: a equipe ajuda a fechar as especificações.",
    whatsappLabel: "Falar com a gráfica pelo WhatsApp",
    quoteLabel: "Montar meu orçamento",
  },
  faq: [
    {
      question: "Tem quantidade mínima?",
      answer:
        "Não. Você pode pedir a quantidade que precisa. Quanto maior a quantidade, menor o custo por unidade.",
    },
    {
      question: "As embalagens podem ser usadas com alimentos?",
      answer:
        "Usamos matéria-prima apropriada para uso com alimentos. Informe esse uso no pedido de orçamento, porque ele define a especificação do material.",
    },
    {
      question: "Quanto custam embalagens personalizadas?",
      answer:
        "Depende do tipo, das medidas, do material, das cores, do acabamento, da faca e da quantidade. Cada pedido recebe orçamento próprio. Solicite pelo WhatsApp ou pelo formulário.",
    },
    {
      question: "Onde fazer embalagens personalizadas?",
      answer:
        "A FullGraph atende pelo WhatsApp e produz em Brasília. Entregamos no mesmo dia no DF, em até 1 dia útil em Goiás e enviamos para outros estados por frete.",
    },
    {
      question: "Quais materiais vocês usam?",
      answer:
        "Papel cartão, kraft e offset nas embalagens; duplex, triplex, cartão supremo e papelão nas caixas; papel, vinil e BOPP nos rótulos.",
    },
    {
      question: "Vocês fazem embalagem para hamburgueria e delivery?",
      answer:
        "Sim. Fazemos caixas para hambúrguer, sacos com ou sem alça, papel de bandeja e adesivos com a sua marca.",
    },
    {
      question: "Vocês montam kits?",
      answer: "Sim. Montamos kits com vários produtos na mesma caixa.",
    },
    {
      question: "Vocês criam a arte?",
      answer:
        "Normalmente o cliente envia a arte pronta. Quando necessário, criamos a arte de sacos, sacolas, rótulos e embalagens de alimentação. Nas caixas, trabalhamos com o arquivo finalizado da marca.",
    },
  ],
};
