import type { Category, Product } from "@/types";

/**
 * Catálogo mockado tipado — reagrupa as ~24 categorias do site antigo
 * em 9 famílias claras. Conteúdo técnico é provisório e revisável;
 * substituir/administrar via CMS no futuro (docs/BACKEND-HANDOFF.md).
 * Preços nunca aparecem: tudo é "sob consulta".
 */

export const categories: Category[] = [
  {
    slug: "livros-e-publicacoes",
    name: "Livros e publicações",
    shortName: "Livros",
    description:
      "Impressão de livros, apostilas e publicações com encadernação e acabamento editorial.",
    audiences: ["livros"],
    index: "01",
  },
  {
    slug: "catalogos-e-revistas",
    name: "Catálogos e revistas",
    shortName: "Catálogos",
    description:
      "Catálogos de produto, revistas e jornais corporativos em tiragens médias e altas.",
    audiences: ["empresas", "livros"],
    index: "02",
  },
  {
    slug: "materiais-corporativos",
    name: "Materiais corporativos",
    shortName: "Corporativo",
    description:
      "Papelaria institucional: timbrados, envelopes, pastas, receituários e cartões.",
    audiences: ["empresas"],
    index: "03",
  },
  {
    slug: "flyers-folders-tabloides",
    name: "Flyers, folders e tabloides",
    shortName: "Divulgação",
    description:
      "Materiais de divulgação em volume: flyers, folders dobrados e tabloides de ofertas.",
    audiences: ["empresas"],
    index: "04",
  },
  {
    slug: "embalagens-alimentos",
    name: "Embalagens para alimentos",
    shortName: "Embalagens",
    description:
      "Embalagens impressas para hambúrguer, delivery e food service.",
    audiences: ["embalagens"],
    index: "05",
  },
  {
    slug: "papeis-de-bandeja",
    name: "Papéis de bandeja",
    shortName: "Bandeja",
    description:
      "Forros de bandeja personalizados para restaurantes e redes de alimentação.",
    audiences: ["embalagens"],
    index: "06",
  },
  {
    slug: "rotulos-e-adesivos",
    name: "Rótulos e adesivos",
    shortName: "Rótulos",
    description:
      "Rótulos, etiquetas e adesivos para produtos, embalagens e comunicação.",
    audiences: ["embalagens", "empresas"],
    index: "07",
  },
  {
    slug: "cadernos-e-agendas",
    name: "Cadernos e agendas",
    shortName: "Cadernos",
    description:
      "Cadernos, agendas e planners personalizados para marcas e eventos.",
    audiences: ["empresas"],
    index: "08",
  },
  {
    slug: "comunicacao-visual",
    name: "Comunicação visual",
    shortName: "Com. visual",
    description:
      "Banners, placas e materiais de grande formato para pontos de venda e eventos.",
    audiences: ["empresas"],
    index: "09",
  },
];

const OFFSET_PAPERS = [
  "Offset 75 g/m²",
  "Offset 90 g/m²",
  "Couché fosco 115 g/m²",
  "Couché brilho 115 g/m²",
  "Couché 150 g/m²",
];

export const products: Product[] = [
  /* ---------- Livros e publicações ---------- */
  {
    slug: "impressao-de-livros",
    name: "Impressão de livros",
    category: "livros-e-publicacoes",
    audiences: ["livros"],
    tagline: "Do arquivo fechado ao livro encadernado, em qualquer tiragem.",
    description:
      "Impressão de livros para autores, editoras e projetos independentes: miolo em papel offset ou pólen, capa com laminação e encadernação à sua escolha. Acompanhamos o arquivo desde a pré-impressão até o acabamento.",
    applications: [
      "Romances, poesia e não ficção",
      "Livros acadêmicos e anais",
      "Publicações independentes",
      "Edições comemorativas",
    ],
    formats: ["14 × 21 cm", "16 × 23 cm", "A5 (14,8 × 21 cm)", "Formato fechado sob medida"],
    materials: ["Pólen soft 80 g/m²", "Offset 75 g/m²", "Offset 90 g/m²", "Capa em cartão 250 g/m²"],
    finishes: ["Laminação fosca", "Laminação brilho", "Verniz localizado na capa", "Orelhas na capa"],
    runRanges: ["A partir de 50 exemplares", "300 a 1.000", "Acima de 1.000"],
    specs: [
      { label: "Miolo", value: "1×1 ou 4×4 cores" },
      { label: "Capa", value: "4×0 cores" },
      { label: "Encadernação", value: "Brochura (cola PUR), lombada quadrada" },
    ],
    faq: [
      {
        question: "Qual a tiragem mínima para imprimir um livro?",
        answer:
          "Trabalhamos tiragens a partir de pequenas quantidades para autores independentes. O valor por exemplar diminui conforme a tiragem aumenta — peça um comparativo no orçamento.",
      },
      {
        question: "Como devo enviar o arquivo do livro?",
        answer:
          "PDF fechado com sangria de 3 mm, fontes incorporadas e imagens em 300 dpi. Miolo e capa em arquivos separados. Nossa equipe confere o arquivo antes de imprimir.",
      },
      {
        question: "Vocês calculam a lombada da capa?",
        answer:
          "Sim. Com o número de páginas e o papel do miolo definidos, informamos a medida exata da lombada para o fechamento da capa.",
      },
    ],
    related: ["impressao-de-revistas", "impressao-de-catalogos", "apostilas-e-espirais"],
    mockup: "book",
    featured: true,
  },
  {
    slug: "apostilas-e-espirais",
    name: "Apostilas e encadernados",
    category: "livros-e-publicacoes",
    audiences: ["livros", "empresas"],
    tagline: "Conteúdo didático impresso com encadernação prática.",
    description:
      "Apostilas, manuais e materiais de treinamento com encadernação em espiral, wire-o ou brochura. Ideais para cursos, empresas e instituições de ensino.",
    applications: ["Cursos e treinamentos", "Manuais técnicos", "Material de concurso", "Guias internos"],
    formats: ["A4 (21 × 29,7 cm)", "A5 (14,8 × 21 cm)"],
    materials: OFFSET_PAPERS.slice(0, 3),
    finishes: ["Capa em cartão com laminação", "Contracapa rígida", "Bolsa plástica opcional"],
    runRanges: ["A partir de 20 unidades", "100 a 500", "Acima de 500"],
    specs: [
      { label: "Miolo", value: "1×1 ou 4×4 cores" },
      { label: "Encadernação", value: "Espiral, wire-o ou brochura" },
    ],
    faq: [
      {
        question: "Qual encadernação escolher para apostilas?",
        answer:
          "Espiral e wire-o abrem 360° e são ideais para uso em mesa. Brochura tem acabamento mais editorial. Indicamos a melhor opção conforme o uso e a quantidade de páginas.",
      },
    ],
    related: ["impressao-de-livros", "impressao-de-catalogos"],
    mockup: "book",
  },

  /* ---------- Catálogos e revistas ---------- */
  {
    slug: "impressao-de-catalogos",
    name: "Impressão de catálogos",
    category: "catalogos-e-revistas",
    audiences: ["empresas"],
    tagline: "Seu portfólio de produtos com cor fiel e acabamento consistente.",
    description:
      "Catálogos de produtos e serviços com reprodução de cor controlada, papel couché e acabamento grampeado ou colado. Padronização entre tiragens para campanhas recorrentes.",
    applications: ["Catálogos de produto", "Lookbooks", "Tabelas técnicas", "Kits comerciais"],
    formats: ["A4", "21 × 21 cm", "A5", "Formato sob medida"],
    materials: ["Couché brilho 115 g/m²", "Couché fosco 150 g/m²", "Capa em couché 250 g/m²"],
    finishes: ["Laminação na capa", "Verniz localizado", "Grampo canoa", "Lombada colada"],
    runRanges: ["A partir de 100 unidades", "500 a 2.000", "Acima de 2.000"],
    specs: [
      { label: "Cores", value: "4×4 (CMYK frente e verso)" },
      { label: "Páginas", value: "8 a 96 + capa" },
    ],
    faq: [
      {
        question: "Grampo ou lombada colada?",
        answer:
          "Até cerca de 64 páginas o grampo canoa é econômico e eficiente. Acima disso, ou para um acabamento mais premium, recomendamos lombada colada.",
      },
    ],
    related: ["impressao-de-revistas", "folders-e-dobrados", "impressao-de-livros"],
    mockup: "stack",
    featured: true,
  },
  {
    slug: "impressao-de-revistas",
    name: "Impressão de revistas",
    category: "catalogos-e-revistas",
    audiences: ["empresas", "livros"],
    tagline: "Publicações periódicas com padrão editorial.",
    description:
      "Revistas institucionais, publicações de associações e periódicos com impressão em couché e fechamento grampeado ou colado, em tiragens médias e altas.",
    applications: ["Revistas institucionais", "Publicações de entidades", "Anuários", "Revistas de bairro"],
    formats: ["20,2 × 26,6 cm", "A4", "Formato sob medida"],
    materials: ["Couché brilho 90 g/m²", "Couché 115 g/m²", "Capa 150–250 g/m²"],
    finishes: ["Grampo canoa", "Lombada colada", "Laminação na capa"],
    runRanges: ["A partir de 300 unidades", "1.000 a 5.000", "Acima de 5.000"],
    specs: [
      { label: "Cores", value: "4×4" },
      { label: "Periodicidade", value: "Reimpressão com padrão de cor" },
    ],
    faq: [
      {
        question: "Vocês mantêm o padrão de cor entre edições?",
        answer:
          "Sim. Guardamos o perfil do trabalho para que edições futuras saiam com a mesma aparência de cor e papel.",
      },
    ],
    related: ["impressao-de-catalogos", "jornais-e-tabloides"],
    mockup: "stack",
  },
  {
    slug: "jornais-e-tabloides",
    name: "Jornais e tabloides",
    category: "catalogos-e-revistas",
    audiences: ["empresas"],
    tagline: "Alto volume, baixo custo por unidade, entrega rápida.",
    description:
      "Jornais de ofertas, tabloides promocionais e informativos em papel jornal ou offset leve — o formato clássico para varejo e campanhas de grande alcance.",
    applications: ["Ofertas de supermercado", "Informativos sindicais", "Jornais de campanha", "Encartes"],
    formats: ["Tabloide (28 × 35 cm)", "Standard", "Formato sob medida"],
    materials: ["Papel jornal 45 g/m²", "Offset 56 g/m²", "Offset 75 g/m²"],
    finishes: ["Dobra simples", "Alceamento"],
    runRanges: ["A partir de 1.000 unidades", "10.000 a 50.000", "Acima de 50.000"],
    specs: [
      { label: "Cores", value: "4×4 ou 1×1" },
      { label: "Páginas", value: "4 a 32" },
    ],
    faq: [
      {
        question: "Qual o prazo típico para tabloides de oferta?",
        answer:
          "Tabloides são produzidos em fluxo rápido. Informe a data da campanha no orçamento e confirmamos o cronograma de produção e entrega.",
      },
    ],
    related: ["flyers-e-panfletos", "impressao-de-revistas"],
    mockup: "sheet",
  },

  /* ---------- Materiais corporativos ---------- */
  {
    slug: "papelaria-institucional",
    name: "Papelaria institucional",
    category: "materiais-corporativos",
    audiences: ["empresas"],
    tagline: "Timbrados, envelopes e pastas com a cara da sua marca.",
    description:
      "O conjunto completo de papelaria da empresa: papel timbrado, envelopes, pastas com bolsa, cartões e receituários — produzidos com consistência de cor e papel.",
    applications: ["Kits corporativos", "Departamentos administrativos", "Clínicas e consultórios", "Escritórios"],
    formats: ["A4 timbrado", "Envelope ofício e saco", "Pasta com bolsa 31 × 46 cm aberta"],
    materials: ["Offset 90 g/m²", "Offset 120 g/m²", "Cartão 300 g/m² (pastas)"],
    finishes: ["Laminação fosca (pastas)", "Verniz localizado", "Faca especial"],
    runRanges: ["A partir de 100 unidades", "500 a 2.000", "Acima de 2.000"],
    specs: [
      { label: "Cores", value: "4×0 ou 4×4" },
      { label: "Itens", value: "Timbrado, envelope, pasta, cartão, receituário" },
    ],
    faq: [
      {
        question: "Posso pedir o kit completo em um orçamento só?",
        answer:
          "Sim — e é o mais vantajoso. Cotamos timbrado, envelope, pasta e cartão juntos, com a mesma referência de cor.",
      },
    ],
    related: ["flyers-e-panfletos", "cadernos-personalizados"],
    mockup: "sheet",
  },

  /* ---------- Flyers, folders e tabloides ---------- */
  {
    slug: "flyers-e-panfletos",
    name: "Flyers e panfletos",
    category: "flyers-folders-tabloides",
    audiences: ["empresas"],
    tagline: "Divulgação direta, impressa em volume.",
    description:
      "Flyers e panfletos para distribuição em massa, com impressão frente e verso em couché e cortes precisos. A forma mais rápida de colocar sua oferta na rua.",
    applications: ["Promoções de varejo", "Eventos", "Delivery e cardápios simples", "Lançamentos"],
    formats: ["10 × 15 cm", "15 × 21 cm (A5)", "21 × 29,7 cm (A4)"],
    materials: ["Couché brilho 115 g/m²", "Couché 150 g/m²", "Offset 90 g/m²"],
    finishes: ["Corte reto", "Cantos arredondados", "Verniz total"],
    runRanges: ["A partir de 1.000 unidades", "5.000 a 20.000", "Acima de 20.000"],
    specs: [
      { label: "Cores", value: "4×4 ou 4×0" },
      { label: "Prazo", value: "Produção em fluxo rápido" },
    ],
    faq: [
      {
        question: "Qual quantidade tem melhor custo-benefício?",
        answer:
          "O custo por unidade cai bastante a partir de 5.000 unidades, porque o acerto de máquina se dilui. Pedimos sempre um comparativo de faixas no orçamento.",
      },
    ],
    related: ["folders-e-dobrados", "jornais-e-tabloides"],
    mockup: "stack",
    featured: true,
  },
  {
    slug: "folders-e-dobrados",
    name: "Folders e dobrados",
    category: "flyers-folders-tabloides",
    audiences: ["empresas"],
    tagline: "Sua apresentação organizada em dobras.",
    description:
      "Folders com uma, duas ou três dobras para apresentar produtos e serviços com hierarquia. Papel firme, vinco preciso e dobra sem craquelar a tinta.",
    applications: ["Apresentações comerciais", "Cardápios", "Programas de eventos", "Mapas e guias"],
    formats: ["A4 aberto (2 ou 3 dobras)", "A3 aberto", "Formato sob medida"],
    materials: ["Couché fosco 150 g/m²", "Couché 170 g/m²", "Cartão 250 g/m² com vinco"],
    finishes: ["Vinco", "Dobra carta ou sanfona", "Laminação fosca"],
    runRanges: ["A partir de 500 unidades", "2.000 a 10.000", "Acima de 10.000"],
    specs: [
      { label: "Cores", value: "4×4" },
      { label: "Dobras", value: "Meia dobra, carta, sanfona, janela" },
    ],
    faq: [
      {
        question: "O que evita a tinta craquelar na dobra?",
        answer:
          "Em papéis a partir de 170 g/m² aplicamos vinco antes da dobra — isso preserva a impressão e deixa o fechamento alinhado.",
      },
    ],
    related: ["flyers-e-panfletos", "impressao-de-catalogos"],
    mockup: "sheet",
  },

  /* ---------- Embalagens ---------- */
  {
    slug: "embalagens-para-hamburguer",
    name: "Embalagens para hambúrguer",
    category: "embalagens-alimentos",
    audiences: ["embalagens"],
    tagline: "Sua marca na mão do cliente, do balcão ao delivery.",
    description:
      "Caixas e envoltórios para hambúrguer impressos com sua identidade, em papel-cartão apto para contato com alimentos. Estrutura firme para balcão e delivery.",
    applications: ["Hamburguerias", "Food trucks", "Delivery", "Redes de alimentação"],
    formats: ["Caixa 12 × 12 × 8 cm", "Caixa 14 × 14 × 8 cm", "Envoltório / wrap", "Faca sob medida"],
    materials: ["Papel-cartão 250 g/m²", "Papel-cartão 300 g/m²", "Kraft natural"],
    finishes: ["Faca especial", "Vinco e colagem", "Impressão externa 4×0"],
    runRanges: ["A partir de 500 unidades", "2.000 a 10.000", "Acima de 10.000"],
    specs: [
      { label: "Contato alimentar", value: "Materiais aptos para alimentos" },
      { label: "Montagem", value: "Enviada plana, montagem por encaixe" },
    ],
    faq: [
      {
        question: "A embalagem vai montada?",
        answer:
          "As caixas seguem planas (facilita transporte e estoque) e montam por encaixe em segundos, sem cola no ponto de venda.",
      },
      {
        question: "Posso personalizar o tamanho?",
        answer:
          "Sim. Desenvolvemos faca sob medida para o seu produto — envie as dimensões do lanche ou da caixa atual no orçamento.",
      },
    ],
    related: ["papeis-de-bandeja-personalizados", "rotulos-e-etiquetas", "sacos-e-embalagens-delivery"],
    mockup: "box",
    featured: true,
  },
  {
    slug: "sacos-e-embalagens-delivery",
    name: "Sacos e embalagens para delivery",
    category: "embalagens-alimentos",
    audiences: ["embalagens"],
    tagline: "A experiência da entrega começa na embalagem.",
    description:
      "Sacos de papel, cintas e embalagens de transporte impressas para delivery e balcão — a extensão da sua marca fora do restaurante.",
    applications: ["Delivery próprio e apps", "Padarias e confeitarias", "Dark kitchens", "Eventos"],
    formats: ["Saco SOS pequeno/médio/grande", "Cinta para copo e pote", "Formato sob medida"],
    materials: ["Kraft 80–110 g/m²", "Papel branco 90 g/m²"],
    finishes: ["Impressão 1×0 a 4×0", "Alça opcional"],
    runRanges: ["A partir de 1.000 unidades", "5.000 a 20.000", "Acima de 20.000"],
    specs: [
      { label: "Contato alimentar", value: "Materiais aptos para alimentos" },
    ],
    faq: [
      {
        question: "Uma cor ou quatro cores?",
        answer:
          "Impressão em 1 cor sobre kraft tem ótimo custo e visual artesanal. Para identidade colorida, o papel branco com 4 cores reproduz melhor a marca.",
      },
    ],
    related: ["embalagens-para-hamburguer", "papeis-de-bandeja-personalizados"],
    mockup: "box",
  },
  {
    slug: "papeis-de-bandeja-personalizados",
    name: "Papéis de bandeja",
    category: "papeis-de-bandeja",
    audiences: ["embalagens"],
    tagline: "O forro da bandeja como espaço de marca.",
    description:
      "Forros de bandeja impressos para restaurantes, lanchonetes e redes: higiene, padronização e um espaço publicitário que o cliente lê à mesa.",
    applications: ["Redes de fast food", "Praças de alimentação", "Restaurantes self-service", "Eventos"],
    formats: ["30 × 40 cm", "31,5 × 44 cm", "Formato sob medida"],
    materials: ["Offset 56 g/m²", "Offset 75 g/m²", "Papel acetinado"],
    finishes: ["Impressão 1×0 a 4×0", "Refile preciso"],
    runRanges: ["A partir de 5.000 unidades", "20.000 a 100.000", "Acima de 100.000"],
    specs: [
      { label: "Uso", value: "Forro descartável de bandeja" },
      { label: "Volume", value: "Otimizado para grandes tiragens" },
    ],
    faq: [
      {
        question: "Por que a tiragem mínima é maior?",
        answer:
          "Papel de bandeja é um item de reposição contínua — imprimir em volume derruba o custo por folha e garante estoque para a operação.",
      },
    ],
    related: ["embalagens-para-hamburguer", "sacos-e-embalagens-delivery"],
    mockup: "sheet",
    featured: true,
  },
  {
    slug: "rotulos-e-etiquetas",
    name: "Rótulos e etiquetas",
    category: "rotulos-e-adesivos",
    audiences: ["embalagens", "empresas"],
    tagline: "Identificação adesiva com corte preciso.",
    description:
      "Rótulos e etiquetas adesivas para potes, garrafas, caixas e produtos — em papel ou vinil, com corte eletrônico ou faca, prontos para aplicação.",
    applications: ["Alimentos e bebidas", "Cosméticos", "Logística e caixas", "Brindes"],
    formats: ["Redondo, quadrado, retangular", "Recorte especial", "Rolo ou folha"],
    materials: ["Papel adesivo brilho", "Papel adesivo fosco", "Vinil branco", "BOPP transparente"],
    finishes: ["Laminação protetora", "Corte eletrônico", "Meio corte em folha"],
    runRanges: ["A partir de 100 unidades", "1.000 a 10.000", "Acima de 10.000"],
    specs: [
      { label: "Aplicação", value: "Manual ou automática (rolo)" },
      { label: "Resistência", value: "Opções para umidade e refrigeração" },
    ],
    faq: [
      {
        question: "Qual material resiste à geladeira e umidade?",
        answer:
          "Para potes refrigerados ou garrafas geladas, indicamos vinil ou BOPP com laminação — papel comum pode enrugar com a condensação.",
      },
    ],
    related: ["embalagens-para-hamburguer", "papelaria-institucional"],
    mockup: "roll",
  },

  /* ---------- Cadernos e agendas ---------- */
  {
    slug: "cadernos-personalizados",
    name: "Cadernos personalizados",
    category: "cadernos-e-agendas",
    audiences: ["empresas"],
    tagline: "Um brinde que fica na mesa o ano inteiro.",
    description:
      "Cadernos e agendas com capa personalizada, miolo pautado ou pontilhado e encadernação wire-o ou costurada. Para brindes corporativos, eventos e vendas.",
    applications: ["Brindes corporativos", "Eventos e conferências", "Kits de boas-vindas", "Papelaria de marca"],
    formats: ["A5 (14,8 × 21 cm)", "17 × 24 cm", "A4"],
    materials: ["Capa em cartão 300 g/m²", "Capa dura revestida", "Miolo offset 75–90 g/m²"],
    finishes: ["Wire-o", "Costura aparente", "Laminação fosca", "Hot stamping"],
    runRanges: ["A partir de 50 unidades", "300 a 1.000", "Acima de 1.000"],
    specs: [
      { label: "Miolo", value: "Pautado, pontilhado, liso ou datado" },
      { label: "Páginas", value: "80 a 200" },
    ],
    faq: [
      {
        question: "Dá para incluir páginas institucionais?",
        answer:
          "Sim — abertura com apresentação da empresa, calendário ou páginas de dados personalizadas entram no mesmo miolo.",
      },
    ],
    related: ["papelaria-institucional", "impressao-de-catalogos"],
    mockup: "book",
  },

  /* ---------- Comunicação visual ---------- */
  {
    slug: "banners-e-grandes-formatos",
    name: "Banners e grandes formatos",
    category: "comunicacao-visual",
    audiences: ["empresas"],
    tagline: "Sua mensagem em escala de parede.",
    description:
      "Banners, faixas e impressos de grande formato para pontos de venda, fachadas e eventos, com lona ou papel e acabamento para instalação.",
    applications: ["Pontos de venda", "Eventos e feiras", "Fachadas temporárias", "Sinalização interna"],
    formats: ["60 × 90 cm", "80 × 120 cm", "Medida sob demanda"],
    materials: ["Lona 440 g", "Papel fotográfico", "Adesivo vinílico"],
    finishes: ["Bastão e corda", "Ilhós", "Refile"],
    runRanges: ["Unidade", "Kits para redes de lojas"],
    specs: [
      { label: "Impressão", value: "Alta resolução para leitura próxima" },
      { label: "Uso", value: "Interno e externo" },
    ],
    faq: [
      {
        question: "Vocês produzem kits para várias lojas?",
        answer:
          "Sim. Para redes, padronizamos o material e organizamos a entrega por unidade — informe as cidades no orçamento.",
      },
    ],
    related: ["flyers-e-panfletos", "rotulos-e-etiquetas"],
    mockup: "sign",
  },
];

/* ---------- Helpers de consulta (substituíveis por API/CMS) ---------- */

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}

export function getProductsByAudience(audience: Product["audiences"][number]): Product[] {
  return products.filter((p) => p.audiences.includes(audience));
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product): Product[] {
  return product.related
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => Boolean(p));
}
