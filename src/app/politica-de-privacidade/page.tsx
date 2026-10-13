import { pageMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = pageMetadata({
  title: "Política de privacidade",
  description:
    "Como o site da FullGraph trata os dados de quem visita: medição de acessos sem cookies, mensagens de WhatsApp e pedidos de orçamento.",
  path: "/politica-de-privacidade",
});

const ULTIMA_ATUALIZACAO = "outubro de 2026";

/** Cada item descreve só o que o site faz de fato — ver src/lib/analytics.ts,
    WhatsAppOrigin.tsx e quote-submit.ts antes de alterar. */
const sections: { title: string; paragraphs: string[] }[] = [
  {
    title: "Quem responde pelos dados",
    paragraphs: [`${site.legalName}, com sede em ${site.address.full}.`],
  },
  {
    title: "Medição de acessos",
    paragraphs: [
      "Usamos a ferramenta Umami para saber quantas visitas o site recebe, quais páginas são vistas e de onde os visitantes chegam. Ela não usa cookies, não identifica quem visita e não acompanha ninguém em outros sites.",
      "O que fica registrado, de forma anônima: página visitada, site de origem, navegador, sistema operacional, tipo de aparelho e localização aproximada (país, estado e cidade).",
      "Também contamos os cliques nos botões de WhatsApp, telefone e e-mail e o envio do pedido de orçamento. Só o clique é contado; o conteúdo da mensagem não é registrado.",
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      "O site não usa cookies de publicidade nem de medição. Por isso não exibimos aviso de cookies.",
    ],
  },
  {
    title: "Mensagens pelo WhatsApp",
    paragraphs: [
      "Quando você clica em um botão de WhatsApp, a mensagem já sai com uma linha que informa a página em que você estava, a primeira página que visitou e o site que trouxe você até aqui (só o domínio, como google.com). Essa linha aparece na mensagem antes do envio, e você pode apagá-la.",
      "Para montar essa linha, o navegador guarda a página de entrada e o site de origem apenas durante a visita. Esses dados somem quando a aba é fechada.",
    ],
  },
  {
    title: "Pedido de orçamento",
    paragraphs: [
      "O que você preenche no formulário de orçamento (nome, empresa, e-mail, telefone, cidade e detalhes do pedido) não é enviado nem guardado pelo site. Os dados montam a mensagem que você mesmo envia pelo WhatsApp ou por e-mail.",
      "Depois que a mensagem chega, usamos essas informações para responder ao pedido e preparar o orçamento.",
    ],
  },
  {
    title: "Fornecedores",
    paragraphs: [
      "O site é hospedado pela Vercel, que registra dados técnicos de acesso, como o endereço IP, para o funcionamento e a segurança do serviço. A medição de acessos é processada pela Umami. Esses fornecedores podem tratar dados fora do Brasil.",
    ],
  },
  {
    title: "Seus direitos",
    paragraphs: [
      "A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) garante a você confirmar se tratamos seus dados, acessá-los, corrigi-los e pedir a exclusão. Para exercer esses direitos ou tirar dúvidas, escreva para o e-mail abaixo.",
    ],
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <section className="grain relative bg-carbon pb-20 pt-40 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-spec mb-6 flex items-center gap-3 text-steel">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-ink" />
              Privacidade
            </p>
          </Reveal>
          <Reveal kind="clip">
            <h1 className="text-h1 max-w-4xl font-semibold text-white-tech text-balance">
              Política de <em className="font-serif font-normal italic text-ink">privacidade</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lead mt-6 max-w-2xl text-steel">
              Em linguagem direta: quais informações o site da FullGraph usa, para
              quê, e o que fica de fora.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="surface-paper grain on-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="grid grid-cols-1 gap-3 border-t-2 border-carbon/15 py-7 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10"
            >
              <h2 className="font-semibold">{section.title}</h2>
              <div className="space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-carbon/70">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="grid grid-cols-1 gap-3 border-t-2 border-carbon/15 pt-7 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10">
            <h2 className="font-semibold">Contato</h2>
            <div>
              <a
                href={`mailto:${site.email}`}
                className="break-all text-lg font-semibold hover:text-ink-paper"
              >
                {site.email}
              </a>
              <p className="text-spec mt-4 text-carbon/60">
                Última atualização: {ULTIMA_ATUALIZACAO}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
