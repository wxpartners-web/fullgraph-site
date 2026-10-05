import type { Category, Product } from "@/types";
import { caixasPersonalizadasContent } from "@/data/product-content/caixas-personalizadas";
import { impressaoDeLivrosContent } from "@/data/product-content/impressao-de-livros";
import { flyersEPanfletosContent } from "@/data/product-content/flyers-e-panfletos";
import { crachasECredenciaisContent } from "@/data/product-content/crachas-e-credenciais";
import { comunicacaoVisualContent } from "@/data/product-content/comunicacao-visual";
import { sacolasPersonalizadasContent } from "@/data/product-content/sacolas-personalizadas";
import { kitsCorporativosContent } from "@/data/product-content/kits-corporativos";
import { calendariosPersonalizadosContent } from "@/data/product-content/calendarios-personalizados";
import { pastasPersonalizadasContent } from "@/data/product-content/pastas-personalizadas";
import { papelariaInstitucionalContent } from "@/data/product-content/papelaria-institucional";
import { envelopesPersonalizadosContent } from "@/data/product-content/envelopes-personalizados";
import { bannersEGrandesFormatosContent } from "@/data/product-content/banners-e-grandes-formatos";
import { foldersEDobradosContent } from "@/data/product-content/folders-e-dobrados";
import { impressaoDeCatalogosContent } from "@/data/product-content/impressao-de-catalogos";
import { impressaoDeRevistasContent } from "@/data/product-content/impressao-de-revistas";

/**
 * Catálogo mockado tipado — reagrupa as ~24 categorias do site antigo
 * em 9 famílias claras. Conteúdo técnico é provisório e revisável
 * (exceto impressao-de-livros, caixas-personalizadas, flyers-e-panfletos,
 * crachas-e-credenciais, comunicacao-visual, sacolas-personalizadas,
 * kits-corporativos, calendarios-personalizados, pastas-personalizadas,
 * papelaria-institucional, envelopes-personalizados, banners-e-grandes-formatos,
 * folders-e-dobrados, impressao-de-catalogos e impressao-de-revistas, com
 * especificações só da copy aprovada e das respostas do proprietário);
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
      "Catálogos de produto, revistas e jornais corporativos, sob demanda ou em tiragem.",
    audiences: ["empresas", "livros"],
    index: "02",
  },
  {
    slug: "materiais-corporativos",
    name: "Materiais corporativos",
    shortName: "Corporativo",
    description:
      "Papelaria institucional, envelopes, pastas, crachás, calendários e kits corporativos: timbrados, blocos, formulários, cartões, credenciais e kits montados e enviados.",
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
    name: "Embalagens e caixas",
    shortName: "Embalagens",
    description:
      "Caixas e sacolas personalizadas para marcas e embalagens impressas para hambúrguer, delivery e food service.",
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
      "Fachadas, placas, banners, materiais de PDV e grandes formatos para pontos de venda e eventos.",
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
    formats: [
      "140 × 200 mm",
      "148 × 210 mm",
      "160 × 230 mm",
      "170 × 240 mm",
      "200 × 200 mm",
      "200 × 280 mm",
      "210 × 297 mm",
      "Formatos especiais sob consulta",
    ],
    materials: [
      "Miolo: offset, pólen, couché, reciclato e papéis especiais",
      "Capa: offset, couché e cartão supremo",
    ],
    finishes: [
      "Laminação BOPP fosca ou brilho",
      "Laminação soft touch",
      "Verniz UV brilho, total ou localizado",
      "Hot stamping",
    ],
    runRanges: ["A partir de 1 exemplar (sob demanda)", "Grandes tiragens"],
    specs: [
      { label: "Tiragem", value: "A partir de 1 exemplar (sob demanda)" },
      { label: "Encadernação", value: "Capa dura, cola PUR, hot melt, grampo, espiral e wire-o" },
      { label: "Miolo", value: "Em cores ou em preto" },
    ],
    // Copy aprovada (Money Page) — mesma fonte do FAQ da página e do JSON-LD
    faq: impressaoDeLivrosContent.faq,
    related: ["impressao-de-revistas", "impressao-de-catalogos", "apostilas-e-espirais"],
    mockup: "book",
    image: {
      src: "/images/products/livros-editora-pequi.webp",
      alt: "Três romances da Coleção Cerrado Adentro, da editora fictícia Editora Pequi, com capas em linogravura de plantas do cerrado; um aberto mostra o miolo em papel pólen",
    },
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
    image: {
      src: "/images/products/apostilas-instituto-vertice.webp",
      alt: "Apostilas A4 com encadernação wire-o do curso fictício Instituto Vértice, capas azul-marinho e amarelo, uma aberta em página de exercícios de geometria",
    },
  },

  /* ---------- Catálogos e revistas ---------- */
  {
    slug: "impressao-de-catalogos",
    name: "Impressão de catálogos",
    category: "catalogos-e-revistas",
    audiences: ["empresas"],
    tagline: "Catálogos de produtos sob demanda, em qualquer quantidade.",
    description:
      "Catálogos de produtos e serviços em offset, reciclato, couché ou papéis especiais, impressos em offset ou digital, com encadernação e acabamentos da linha editorial.",
    applications: [
      "Catálogos de produtos",
      "Catálogos para distribuidoras e redes",
      "Catálogos para feiras e representantes",
    ],
    formats: ["200 × 280 mm (mais pedido)", "Formato sob medida"],
    materials: [
      "Offset",
      "Reciclato",
      "Couché",
      "Papéis especiais",
      "Miolo também em 150 g e 170 g",
      "Capa 300 g",
    ],
    finishes: [
      "Grampo",
      "Hot melt",
      "Cola PUR",
      "Espiral e wire-o",
      "Capa dura",
      "Laminação BOPP fosca ou brilho",
      "Soft touch",
      "Verniz UV brilho ou localizado",
      "Hot stamping",
    ],
    runRanges: ["Sob demanda, em qualquer quantidade"],
    specs: [
      { label: "Prazo médio", value: "5 dias úteis" },
      { label: "Arquivo", value: "PDF/X-1a" },
    ],
    // Copy aprovada (Money Page) — mesma fonte do FAQ da página e do JSON-LD
    faq: impressaoDeCatalogosContent.faq,
    related: ["impressao-de-revistas", "folders-e-dobrados", "impressao-de-livros"],
    mockup: "stack",
    image: {
      src: "/images/products/catalogos-taia-moveis.webp",
      alt: "Catálogo da marca fictícia Taiá Móveis, Coleção Aurora 2027: exemplar aberto em página dupla com mesa de madeira e desenho técnico, outro fechado ao lado",
    },
    featured: true,
  },
  {
    slug: "impressao-de-revistas",
    name: "Impressão de revistas",
    category: "catalogos-e-revistas",
    audiences: ["empresas", "livros"],
    tagline: "Revistas a partir de 1 exemplar, com acabamento editorial.",
    description:
      "Revistas institucionais, de entidades, escolas e editoras, com os acabamentos da linha de livros, impressas em offset ou digital a partir de 1 exemplar. Papel e formato são definidos no orçamento.",
    applications: [
      "Revistas institucionais de empresa",
      "Associações, sindicatos e entidades",
      "Escolas e faculdades",
      "Editoras",
    ],
    formats: ["Definido no orçamento"],
    materials: ["Papel definido no orçamento"],
    finishes: [
      "Grampo",
      "Lombada colada (PUR ou hot melt)",
      "Capa dura",
      "Espiral e wire-o",
      "Laminação BOPP fosca ou brilho",
      "Soft touch",
      "Verniz UV total ou localizado",
      "Hot stamping",
    ],
    runRanges: ["A partir de 1 exemplar", "Edição única ou periódica"],
    specs: [
      { label: "Tiragem", value: "A partir de 1 exemplar" },
      { label: "Prazo médio", value: "5 dias úteis" },
      { label: "Periódicas", value: "Arquivo guardado para a próxima edição" },
    ],
    // Copy aprovada (Money Page) — mesma fonte do FAQ da página e do JSON-LD
    faq: impressaoDeRevistasContent.faq,
    related: ["impressao-de-catalogos", "jornais-e-tabloides", "impressao-de-livros"],
    mockup: "stack",
    image: {
      src: "/images/products/revistas-planalto.webp",
      alt: "Quatro edições grampeadas da revista fictícia Planalto em leque, com capas coloridas de arquitetura modernista e uma aberta em matéria",
    },
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
    runRanges: ["Tiragem sob consulta", "10.000 a 50.000", "Acima de 50.000"],
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
    image: {
      src: "/images/products/tabloides-vila-nova.webp",
      alt: "Pilha de tabloides em papel jornal do supermercado fictício Vila Nova, capa com ofertas da semana e selos de preço amarelos",
    },
  },

  /* ---------- Materiais corporativos ---------- */
  {
    slug: "papelaria-institucional",
    name: "Papelaria institucional",
    category: "materiais-corporativos",
    audiences: ["empresas"],
    tagline: "Timbrado, blocos e formulários numerados com a sua marca.",
    description:
      "Papel timbrado em offset 90 g 4x0, sem quantidade mínima, e blocos e formulários com numeração sequencial, picote e várias vias em papel autocopiativo.",
    applications: [
      "Escritórios",
      "Departamentos e setores internos",
      "Equipes comerciais",
      "Órgãos públicos e licitações",
      "Certificados de cursos, treinamentos e eventos",
    ],
    formats: [
      "Formato definido no orçamento",
      "Blocos simples, de requisição e de orçamento",
      "Blocos com várias vias",
    ],
    materials: ["Offset 90 g/m²", "Papel autocopiativo (blocos com vias)", "Outros papéis sob orçamento"],
    finishes: ["Numeração sequencial", "Picote", "Várias vias"],
    runRanges: ["Sem quantidade mínima; custo unitário menor em quantidade maior"],
    specs: [
      { label: "Cores", value: "4x0 (frente colorida, verso em branco)" },
      { label: "Itens", value: "Timbrado, blocos, formulários e certificados numerados" },
      { label: "Prazo médio", value: "5 dias úteis" },
    ],
    // Copy aprovada (Money Page) — mesma fonte do FAQ da página e do JSON-LD
    faq: papelariaInstitucionalContent.faq,
    related: ["envelopes-personalizados", "pastas-personalizadas", "cadernos-personalizados"],
    mockup: "sheet",
    image: {
      src: "/images/products/papelaria-almeida-sato.webp",
      alt: "Kit de papelaria do escritório fictício Almeida & Sato Advocacia em verde-escuro e branco: timbrado, envelope, pasta com monograma dourado e cartões de visita",
    },
    featured: true,
  },
  {
    slug: "envelopes-personalizados",
    name: "Envelopes personalizados",
    category: "materiais-corporativos",
    audiences: ["empresas"],
    tagline: "Carta, ofício e saco A4 e A3, com ou sem janela, sem mínimo.",
    description:
      "Envelope personalizado com o logotipo, os dados e as cores da sua empresa, para correspondência, contratos, laudos e propostas. Modelos carta, ofício e saco A4 e A3, com ou sem janela, em offset 150 g ou couché 150 g, com impressão 1x0 ou 4x0.",
    applications: [
      "Correspondência e comunicados",
      "Contratos, laudos e propostas",
      "Escritórios de advocacia e contabilidade",
      "Clínicas, laboratórios e escolas",
      "Órgãos públicos",
    ],
    formats: ["Carta", "Ofício", "Saco A4", "Saco A3", "Com ou sem janela", "Medidas personalizadas"],
    materials: ["Offset 150 g", "Couché 150 g"],
    finishes: [
      "Impressão 1x0 ou 4x0",
      "Fechamento com cola comum",
      "Fita dupla-face (opcional)",
      "Arte criada quando necessário",
      "Primeira prova inclusa",
      "Estoque para atendimento e reposição",
    ],
    runRanges: ["Sem quantidade mínima; custo unitário menor em quantidade maior"],
    specs: [
      { label: "Modelos", value: "Carta, ofício, saco A4 e A3, com ou sem janela" },
      { label: "Papel", value: "Offset 150 g ou couché 150 g" },
      { label: "Quantidade mínima", value: "Sem quantidade mínima" },
      { label: "Prazo médio", value: "5 dias úteis" },
    ],
    // Copy aprovada (Money Page) — mesma fonte do FAQ da página e do JSON-LD
    faq: envelopesPersonalizadosContent.faq,
    related: ["papelaria-institucional", "pastas-personalizadas", "kits-corporativos"],
    mockup: "sheet",
    image: {
      src: "/images/products/envelopes-personalizados.webp",
      alt: "Envelopes do escritório fictício Murici Engenharia com logotipo azul-cobalto: um envelope carta sem janela, dois envelopes carta com janela e um envelope saco A4 cor areia com faixa azul e aba aberta, ao lado de uma folha de papel timbrado com o mesmo logotipo e uma caneta",
    },
  },
  {
    slug: "crachas-e-credenciais",
    name: "Crachás e credenciais",
    category: "materiais-corporativos",
    audiences: ["empresas"],
    tagline: "Com o nome de cada participante, cordão e porta-crachá.",
    description:
      "Crachás personalizados e credenciais com o nome de cada participante, junto com o cordão e o porta-crachá personalizados. Os crachás saem em papel cartão ou PVC, do formato padrão ao personalizado.",
    applications: ["Congressos e convenções", "Feiras", "Treinamentos", "Equipes de empresas"],
    formats: ["Do formato padrão ao personalizado"],
    materials: ["Papel cartão", "PVC"],
    finishes: [
      "Nome de cada participante",
      "Cordão personalizado",
      "Porta-crachá",
      "Crachá fixo de funcionário em PVC, com foto",
    ],
    runRanges: ["Quantidade informada no orçamento"],
    specs: [
      { label: "Materiais", value: "Papel cartão ou PVC" },
      { label: "Personalização", value: "Nome de cada participante" },
      { label: "Entrega", value: "No local do evento" },
    ],
    // Copy aprovada (Money Page) — mesma fonte do FAQ da página e do JSON-LD
    faq: crachasECredenciaisContent.faq,
    related: ["papelaria-institucional", "banners-e-grandes-formatos", "folders-e-dobrados"],
    mockup: "sheet",
    image: {
      src: "/images/products/crachas-e-credenciais.webp",
      alt: "Crachás do evento fictício Congresso Cerrado de Inovação 2026 com nomes de participantes e faixas Participante, Palestrante e Staff em cordões verdes e amarelos, crachá de funcionário em PVC da empresa fictícia Grupo Ipê Serviços com avatar genérico e um porta-crachá transparente",
    },
  },
  {
    slug: "kits-corporativos",
    name: "Kits corporativos",
    category: "materiais-corporativos",
    audiences: ["empresas"],
    tagline: "Brindes, caixa e impressos, montados e enviados a cada pessoa.",
    description:
      "Kit corporativo personalizado com brindes de qualquer tipo, impressos com a sua marca e tudo reunido na mesma caixa. Sugerimos e compramos os brindes, personalizamos até o cartão com o nome de quem vai receber e enviamos cada kit para o endereço de cada pessoa, em todo o Brasil.",
    applications: [
      "Kit onboarding",
      "Presentes para clientes",
      "Press kit e influenciadores",
      "Lançamentos imobiliários",
      "Eventos e participantes",
    ],
    formats: ["Brindes e impressos na mesma caixa"],
    materials: ["Cadernos", "Blocos, envelopes e cartões", "Pastas", "Crachá, cordão e porta-crachá"],
    finishes: [
      "Cartão com o nome de cada destinatário",
      "Sugestão e compra dos brindes",
      "Arte criada quando necessário",
      "Kits em estoque para envio aos poucos",
    ],
    runRanges: ["Sem quantidade mínima"],
    specs: [
      { label: "Quantidade mínima", value: "Sem quantidade mínima" },
      { label: "Prazo médio", value: "10 a 15 dias para montar e enviar" },
      { label: "Envio", value: "Todo o Brasil, pelos Correios com rastreio ou por via aérea" },
    ],
    // Copy aprovada (Money Page) — mesma fonte do FAQ da página e do JSON-LD
    faq: kitsCorporativosContent.faq,
    related: [
      "caixas-personalizadas",
      "sacolas-personalizadas",
      "crachas-e-credenciais",
      "cadernos-personalizados",
    ],
    mockup: "box",
    image: {
      src: "/images/products/kits-corporativos.webp",
      alt: "Kit de boas-vindas da empresa fictícia Ondina Sistemas em azul-noite e coral: caixa rígida com logotipo prateado, caderno, crachá de Mariana Lopes com cordão, cartão de boas-vindas, garrafa térmica, caneca e caneta sobre papel de seda",
    },
  },
  {
    slug: "pastas-personalizadas",
    name: "Pastas personalizadas",
    category: "materiais-corporativos",
    audiences: ["empresas"],
    tagline: "Com bolsa, orelha, porta-cartão ou lombada, para folhas A4, sem mínimo.",
    description:
      "Pastas personalizadas em papel cartão, com a marca da empresa ou do evento, para guardar propostas, contratos, documentos e o material de cada participante. São quatro modelos: com bolsa, com orelha, com porta-cartão e com lombada.",
    applications: [
      "Propostas comerciais e contratos",
      "Escritórios, clínicas e laboratórios",
      "Construtoras",
      "Congressos, convenções e treinamentos",
      "Órgãos públicos",
    ],
    formats: ["Com bolsa", "Com orelha", "Com porta-cartão", "Com lombada"],
    materials: ["Cartão 250 g", "Cartão 300 g", "Outros papéis conforme o projeto"],
    finishes: [
      "Impressão offset e digital",
      "Laminação",
      "Verniz localizado",
      "Hot stamping",
      "Arte criada quando necessário",
      "Primeira prova inclusa",
      "Estoque para atendimento e reposição",
      "Entrega no local do evento",
    ],
    runRanges: ["Sem quantidade mínima; custo unitário menor em quantidade maior"],
    specs: [
      { label: "Modelos", value: "Com bolsa, com orelha, com porta-cartão ou com lombada" },
      { label: "Tamanho padrão", value: "220 × 310 mm fechada; 440 × 310 mm aberta (cabe A4)" },
      { label: "Papel", value: "Normalmente cartão 250 g ou 300 g" },
      { label: "Acabamentos", value: "Laminação, verniz localizado, hot stamping" },
      { label: "Quantidade mínima", value: "Sem quantidade mínima" },
      { label: "Prazo médio", value: "5 dias úteis" },
    ],
    // Copy aprovada (Money Page) — mesma fonte do FAQ da página e do JSON-LD
    faq: pastasPersonalizadasContent.faq,
    related: ["envelopes-personalizados", "papelaria-institucional", "crachas-e-credenciais"],
    mockup: "sheet",
    image: {
      src: "/images/products/pastas-personalizadas.webp",
      alt: "Pastas em cartão roxo do evento fictício Simpósio Sucupira de Saúde 2027: pasta fechada com a capa Material do participante, pasta aberta com bolsa, porta-cartão, programação e bloco de anotações, pasta com orelhas segurando documentos e pasta com lombada, ao lado de um crachá de participante com cordão e uma caneta",
    },
  },
  {
    slug: "calendarios-personalizados",
    name: "Calendários personalizados",
    category: "materiais-corporativos",
    audiences: ["empresas"],
    tagline: "Calendários 2027 com a marca, para o ano inteiro à vista.",
    description:
      "Calendário personalizado com a marca da sua empresa para entregar a clientes, parceiros e equipe ao longo de 2027. Produzimos qualquer modelo de calendário, inclusive os especiais, em impressão offset e digital.",
    applications: [
      "Clientes e parceiros",
      "Equipes",
      "Kits de fim de ano",
      "Redes e empresas com várias unidades",
      "Órgãos públicos",
    ],
    formats: [
      "De mesa",
      "Com acabamento especial (capa dura, laminação, verniz)",
      "Outros modelos sob orçamento",
    ],
    materials: ["Base em cartão 350 g", "Lâminas em couché 150 g"],
    finishes: [
      "Impressão offset e digital",
      "Wire-o",
      "Laminação e verniz",
      "Base tipo capa dura",
      "Arte completa feita pela gráfica",
      "Primeira prova inclusa",
      "Calendário sozinho ou dentro de um kit",
      "Envio direto a cada cliente",
    ],
    runRanges: ["A partir de 100 unidades"],
    specs: [
      { label: "Modelos", value: "De mesa e especiais" },
      { label: "Quantidade mínima", value: "100 unidades" },
      { label: "Papel", value: "Base cartão 350 g, lâminas couché 150 g, wire-o" },
      { label: "Melhor época para pedir", value: "De outubro a dezembro" },
      { label: "Prazo", value: "Informado no orçamento, a partir da data em que você precisa receber" },
    ],
    // Copy aprovada (Money Page) — mesma fonte do FAQ da página e do JSON-LD
    faq: calendariosPersonalizadosContent.faq,
    related: ["kits-corporativos", "cadernos-personalizados", "papelaria-institucional"],
    mockup: "sheet",
    image: {
      src: "/images/products/calendarios-personalizados.webp",
      alt: "Calendários 2027 do escritório fictício Carnaúba Contabilidade em verde-petróleo: calendário de mesa aberto em janeiro de 2027, calendário de parede em fevereiro de 2027 com foto de um ipê-amarelo no cerrado, calendários de mesa empilhados e um calendário de bolso sobre a mesa",
    },
  },

  /* ---------- Flyers, folders e tabloides ---------- */
  {
    slug: "flyers-e-panfletos",
    name: "Flyers e panfletos",
    category: "flyers-folders-tabloides",
    audiences: ["empresas"],
    tagline: "Divulgação direta, impressa em volume.",
    description:
      "Impressão de panfletos personalizados e flyers em formatos padrão ou sob medida, sem limite de quantidade. Os papéis mais pedidos são o couché 90 g e o couché 115 g. No prazo expresso, imprimimos 5.000 panfletos em 48 horas.",
    applications: ["Promoções de varejo", "Eventos", "Delivery e cardápios simples", "Lançamentos"],
    formats: [
      "Todos os formatos, inclusive personalizados",
      "10 × 15 cm",
      "A5 (14,8 × 21 cm)",
      "A4 (21 × 29,7 cm)",
    ],
    materials: ["Couché 90 g e 115 g (mais pedidos)", "Outros papéis sob consulta"],
    finishes: [
      "Corte no formato final",
      "Acabamentos especiais conforme a necessidade do projeto",
    ],
    runRanges: ["Sem limite de quantidade"],
    specs: [
      { label: "Quantidade", value: "Sem limite de quantidade" },
      { label: "Cores", value: "4×4 ou 4×0" },
      { label: "Prazo expresso", value: "5.000 panfletos em 48 horas (somente impressão)" },
    ],
    // Copy aprovada (Money Page) — mesma fonte do FAQ da página e do JSON-LD
    faq: flyersEPanfletosContent.faq,
    related: ["folders-e-dobrados", "jornais-e-tabloides"],
    mockup: "stack",
    image: {
      src: "/images/products/flyers-sonora.webp",
      alt: "Flyers do festival fictício Sonora no Parque em rosa fluorescente e azul, espalhados em leque e empilhados sobre concreto claro",
    },
    featured: true,
  },
  {
    slug: "folders-e-dobrados",
    name: "Folders e dobrados",
    category: "flyers-folders-tabloides",
    audiences: ["empresas"],
    tagline: "Sua apresentação organizada em dobras.",
    description:
      "Folders com todos os tipos de dobra, de 1, 2 ou 3 dobras a sanfona, carteira, janela e cruz, para apresentar produtos, serviços e empreendimentos em painéis. Vinco antes da dobra, laminação e verniz localizado.",
    applications: [
      "Lançamentos imobiliários",
      "Apresentações comerciais",
      "Programação de eventos e feiras",
      "Cardápios",
      "Escolas e clínicas",
      "Campanhas de órgãos públicos",
    ],
    formats: ["A4 aberto (2 ou 3 dobras)", "A3 aberto", "Formato sob medida"],
    materials: ["Couché 90 g/m²", "Couché 115 g/m²"],
    finishes: ["Vinco antes da dobra", "Todos os tipos de dobra", "Laminação", "Verniz localizado"],
    runRanges: ["A partir de 30 unidades (digital)", "Acima de 500 unidades (offset)", "Sem limite máximo"],
    specs: [
      { label: "Dobras", value: "Todos os tipos" },
      { label: "Prazo expresso", value: "5.000 em 48 horas" },
    ],
    // Copy aprovada (Money Page) — mesma fonte do FAQ da página e do JSON-LD
    faq: foldersEDobradosContent.faq,
    related: ["flyers-e-panfletos", "impressao-de-catalogos", "comunicacao-visual"],
    mockup: "sheet",
    image: {
      src: "/images/products/folders-serra-do-mel.webp",
      alt: "Folders de três dobras da pousada fictícia Serra do Mel em verde-sálvia e mel: um aberto em sanfona com fotos dos quartos, outro fechado com a capa",
    },
  },

  /* ---------- Embalagens ---------- */
  {
    slug: "embalagens-para-hamburguer",
    name: "Embalagens para hambúrguer",
    category: "embalagens-alimentos",
    audiences: ["embalagens"],
    tagline: "Sua marca na mão do cliente, do balcão ao delivery.",
    description:
      "Caixas e envoltórios para hambúrguer impressos com sua identidade, em papel-cartão de matéria-prima apropriada para uso com alimentos. Estrutura firme para balcão e delivery.",
    applications: ["Hamburguerias", "Food trucks", "Delivery", "Redes de alimentação"],
    formats: ["Caixa 12 × 12 × 8 cm", "Caixa 14 × 14 × 8 cm", "Envoltório / wrap", "Faca sob medida"],
    materials: ["Papel-cartão 250 g/m²", "Papel-cartão 300 g/m²", "Kraft natural"],
    finishes: ["Faca especial", "Vinco e colagem", "Impressão externa 4×0"],
    runRanges: ["A partir de 500 unidades", "2.000 a 10.000", "Acima de 10.000"],
    specs: [
      { label: "Contato alimentar", value: "Matéria-prima apropriada para uso com alimentos" },
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
    image: {
      src: "/images/products/hamburguer-brasa-bruta.webp",
      alt: "Caixas de hambúrguer em papel-cartão kraft da hamburgueria fictícia Brasa Bruta, impressas em preto e vermelho, uma fechada e outra aberta com o lanche",
    },
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
    runRanges: ["Sem quantidade mínima", "5.000 a 20.000", "Acima de 20.000"],
    specs: [
      { label: "Contato alimentar", value: "Matéria-prima apropriada para uso com alimentos" },
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
    image: {
      src: "/images/products/delivery-trigo-fermento.webp",
      alt: "Sacos kraft da padaria fictícia Trigo & Fermento impressos em azul-marinho, um com pães e baguetes, outro fechado com adesivo",
    },
  },
  {
    slug: "caixas-personalizadas",
    name: "Caixas personalizadas",
    category: "embalagens-alimentos",
    audiences: ["embalagens"],
    tagline: "Da faca sob medida à caixa montada.",
    description:
      "Caixas personalizadas para marcas que vendem pela apresentação: cosméticos, moda, joias, confeitaria, cafés, presentes e lojas virtuais. Você escolhe o tipo de caixa, o cartão e os acabamentos. A gente desenvolve a faca sob medida, envia o protótipo para aprovação e entrega a caixa montada.",
    applications: [
      "Cosméticos e perfumaria",
      "Moda e acessórios",
      "Joalherias",
      "Confeitarias e cafés",
      "Presentes e datas comemorativas",
      "Lojas virtuais",
      "Empresas",
    ],
    formats: [
      "Caixa rígida",
      "Caixa cartonada (cartucho)",
      "Luva e cinta",
      "Tampa e fundo",
      "Gaveta",
      "Tipo livro com ímã",
      "Caixa com janela",
      "Papelão ondulado",
    ],
    materials: ["Duplex", "Triplex", "Cartão supremo", "Kraft", "Papelão revestido", "Papel reciclado"],
    finishes: [
      "Cores Pantone e metálicas",
      "Hot stamping",
      "Relevo seco",
      "Verniz localizado",
      "Laminação e soft touch",
      "Corte especial",
    ],
    runRanges: ["Sem pedido mínimo"],
    specs: [
      { label: "Pedido mínimo", value: "Sem pedido mínimo" },
      { label: "Protótipo", value: "Protótipo incluso" },
      { label: "Entrega", value: "Caixa entregue montada" },
    ],
    // Copy aprovada (Money Page) — mesma fonte do FAQ da página e do JSON-LD
    faq: caixasPersonalizadasContent.faq,
    related: ["embalagens-para-hamburguer", "sacos-e-embalagens-delivery", "rotulos-e-etiquetas"],
    mockup: "box",
    image: {
      src: "/images/products/caixas-personalizadas.webp",
      alt: "Caixas da marca fictícia Atelier Pequi: caixa rígida verde com tampa, caixa tipo livro com ímã entreaberta, caixa creme com luva e caixa kraft, com logotipo em hot stamping dourado e folhas em relevo seco",
    },
  },
  {
    slug: "sacolas-personalizadas",
    name: "Sacolas personalizadas",
    category: "embalagens-alimentos",
    audiences: ["embalagens"],
    tagline: "Papel, alça, tamanho e acabamento sob medida, sem mínimo.",
    description:
      "Sacolas personalizadas com a marca da sua loja, do seu evento ou da sua empresa. Você define o tipo de sacola, o papel, a alça, o tamanho e o acabamento. Não existe quantidade mínima, e o custo de cada unidade cai à medida que a quantidade sobe.",
    applications: [
      "Roupas e calçados",
      "Joalherias, óticas e cosméticos",
      "Presentes e datas comemorativas",
      "Eventos, feiras e congressos",
      "Kits para clientes e equipes",
      "Confeitarias e cafés",
    ],
    formats: ["Tamanho sob medida, dimensionado pelo que vai dentro"],
    materials: [
      "Papel conforme o projeto, normalmente acima de 180 g",
      "Kraft",
      "Plástico",
      "TNT",
      "Ecobag",
    ],
    finishes: [
      "Hot stamping",
      "Relevo seco",
      "Verniz localizado",
      "Laminação",
      "Soft touch",
      "Cores Pantone e metálicas",
      "Reforço na boca e no fundo",
      "Ilhós",
    ],
    runRanges: ["Sem quantidade mínima"],
    specs: [
      { label: "Quantidade mínima", value: "Sem quantidade mínima" },
      { label: "Alça", value: "Todos os tipos" },
      { label: "Prova", value: "Prova digital e boneca; a primeira prova está inclusa" },
      { label: "Prazo médio", value: "15 dias de produção" },
    ],
    // Copy aprovada (Money Page) — mesma fonte do FAQ da página e do JSON-LD
    faq: sacolasPersonalizadasContent.faq,
    related: [
      "caixas-personalizadas",
      "sacos-e-embalagens-delivery",
      "rotulos-e-etiquetas",
      "kits-corporativos",
    ],
    mockup: "box",
    image: {
      src: "/images/products/sacolas-personalizadas.webp",
      alt: "Três sacolas da boutique fictícia Aroeira Ateliê sobre o balcão da loja: sacola verde-musgo com logotipo em hot stamping dourado e alça de cordão, sacola creme com logotipo em relevo seco e alça de fita, e sacola kraft com logotipo verde e alça de papel torcido, todas com ilhós",
    },
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
    runRanges: ["Sem quantidade mínima", "20.000 a 100.000", "Acima de 100.000"],
    specs: [
      { label: "Uso", value: "Forro descartável de bandeja" },
      { label: "Volume", value: "Otimizado para grandes tiragens" },
    ],
    faq: [
      {
        question: "Tem quantidade mínima?",
        answer:
          "Não. Quanto maior a quantidade, menor o custo por folha — por isso o papel de bandeja costuma ser pedido em volume, como item de reposição.",
      },
    ],
    related: ["embalagens-para-hamburguer", "sacos-e-embalagens-delivery"],
    mockup: "sheet",
    image: {
      src: "/images/products/bandeja-frango-dourado.webp",
      alt: "Bandeja vermelha com papel impresso da rede fictícia Frango Dourado, ilustrado com mapa de fazenda e labirinto, lanche e fritas por cima e pilha de forros ao lado",
    },
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
    image: {
      src: "/images/products/rotulos-sete-serras.webp",
      alt: "Rolo de rótulos hexagonais do apiário fictício Sete Serras com hot stamping dourado e três potes de mel com o rótulo aplicado",
    },
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
    image: {
      src: "/images/products/cadernos-vale-verde.webp",
      alt: "Agendas 2027 de capa dura verde-oliva com hot stamping cobre da cooperativa fictícia Vale Verde, uma aberta em página semanal, e caderno wire-o creme",
    },
  },

  /* ---------- Comunicação visual ---------- */
  {
    slug: "comunicacao-visual",
    name: "Comunicação visual",
    category: "comunicacao-visual",
    audiences: ["empresas"],
    tagline: "Fachadas, placas, banners e PDV, com instalação no Brasil.",
    description:
      "Fachada, letra-caixa, luminoso, placa em ACM ou PVC, banner, lona, adesivo, totem, display e wobbler, com instalação no Brasil por instaladores parceiros credenciados. A fachada, o material de ponto de venda e os impressos da campanha podem ser orçados juntos.",
    applications: ["Varejo", "Franquias e redes", "Construtoras", "Eventos", "Órgãos públicos", "Frotas"],
    formats: ["Medidas definidas no orçamento, pela visita técnica ou pelas medidas que você enviar"],
    materials: ["ACM", "PVC", "Lona", "Adesivo"],
    finishes: [
      "Instalação no Brasil, com instaladores parceiros credenciados",
      "Visita técnica e medição (cobrada)",
      "Envelopamento de veículos",
      "Arte criada quando necessário",
    ],
    runRanges: ["Sem quantidade mínima para banner, adesivo e placa"],
    specs: [
      {
        label: "Peças",
        value:
          "Fachada, letra-caixa, luminoso, placa, banner, lona, adesivo, faixa, roll-up, wind banner, backdrop, totem, display e wobbler",
      },
      { label: "Materiais", value: "Placa em ACM ou PVC" },
      { label: "Instalação", value: "No Brasil, com prazo definido no orçamento" },
    ],
    // Copy aprovada (Money Page) — mesma fonte do FAQ da página e do JSON-LD
    faq: comunicacaoVisualContent.faq,
    related: ["banners-e-grandes-formatos", "flyers-e-panfletos", "folders-e-dobrados"],
    mockup: "sign",
    image: {
      src: "/images/products/comunicacao-visual.webp",
      alt: "Fachada da loja fictícia Passo Leve Calçados com letreiro em ACM terracota e grafite, adesivo de vitrine Coleção de Verão, display de chão Tênis Leveza e wobbler amarelo Lançamento preso à prateleira de tênis",
    },
  },
  {
    slug: "banners-e-grandes-formatos",
    name: "Banners e grandes formatos",
    category: "comunicacao-visual",
    audiences: ["empresas"],
    tagline: "Sua mensagem em escala de parede.",
    description:
      "Banner personalizado sob medida em lona, tecido ou papel fotográfico, faixa, roll-up, wind banner e backdrop, para pontos de venda, redes e eventos.",
    seeAlso: [
      "Para fachada, placa em ACM ou PVC, totem, display e wobbler, com instalação, fale com a nossa ",
      { link: "empresa de comunicação visual", href: "/produtos/comunicacao-visual" },
      ".",
    ],
    applications: [
      "Pontos de venda e vitrines",
      "Redes e franquias",
      "Eventos, feiras e lançamentos",
      "Fachadas temporárias e obras",
    ],
    formats: ["Sob medida"],
    materials: ["Lona (todos os tipos)", "Tecido", "Papel fotográfico"],
    finishes: [
      "Bastão e cordinha",
      "Estrutura de roll-up",
      "Estrutura de wind banner",
      "Impressão frente e verso",
    ],
    runRanges: ["Unidade", "Kits para redes de lojas"],
    specs: [
      { label: "Prazo expresso", value: "24 horas para banners padrão" },
      { label: "Quantidade mínima", value: "Sem quantidade mínima" },
      { label: "Uso", value: "Interno e externo" },
    ],
    // Copy aprovada (Money Page) — mesma fonte do FAQ da página e do JSON-LD
    faq: bannersEGrandesFormatosContent.faq,
    related: ["comunicacao-visual", "flyers-e-panfletos", "crachas-e-credenciais"],
    mockup: "sign",
    image: {
      src: "/images/products/banners-sabores-cerrado.webp",
      alt: "Banner roll-up e banner suspenso por cordinha da feira fictícia Sabores do Cerrado, em terracota, mostarda e verde, montados em pavilhão de eventos",
    },
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
