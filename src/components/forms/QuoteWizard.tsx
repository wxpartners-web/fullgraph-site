"use client";

import { useMemo, useRef, useState } from "react";
import { useForm, type UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, MessageCircle, Mail, Paperclip, Pencil } from "lucide-react";
import { quoteSchema, quoteDefaults, type QuoteSchema } from "@/lib/quote-schema";
import { buildQuoteSummary, buildWhatsAppMessage, submitQuote } from "@/lib/quote-submit";
import {
  segments,
  quoteProducts,
  formatsByProduct,
  quantities,
  pageCounts,
  colorOptions,
  materials,
  finishes,
  bindings,
  deadlines,
  PAGED_PRODUCTS,
  BOUND_PRODUCTS,
  type QuoteOption as Option,
} from "@/data/quote";
import { QuoteMockup } from "./QuoteMockup";
import { site } from "@/data/site";
import { hasWhatsApp, whatsappUrl } from "@/lib/whatsapp";
import { easeOutExpo } from "@/lib/motion-tokens";
import { cn } from "@/lib/utils";

interface StepDef {
  id: string;
  title: string;
  hint?: string;
  fields: (keyof QuoteSchema)[];
}

function buildSteps(produto: string): StepDef[] {
  const steps: StepDef[] = [
    { id: "segmento", title: "Quem é você no projeto?", fields: ["segmento"] },
    { id: "produto", title: "O que vamos imprimir?", fields: ["produto"] },
    {
      id: "formato",
      title: "Qual o formato?",
      hint: "Se ainda não sabe, escolha o mais próximo — ajustamos no orçamento.",
      fields: ["formato", "formatoCustom"],
    },
    { id: "quantidade", title: "Quantas unidades?", fields: ["quantidade"] },
  ];
  if (PAGED_PRODUCTS.has(produto))
    steps.push({ id: "paginas", title: "Quantas páginas?", fields: ["paginas"] });
  steps.push(
    { id: "cores", title: "Como será a impressão?", fields: ["cores"] },
    { id: "material", title: "Qual papel ou material?", fields: ["material"] },
    {
      id: "acabamento",
      title: "Algum acabamento especial?",
      hint: "Pode marcar mais de um.",
      fields: ["acabamento"],
    }
  );
  if (BOUND_PRODUCTS.has(produto))
    steps.push({ id: "encadernacao", title: "Encadernação ou dobra?", fields: ["encadernacao"] });
  steps.push(
    { id: "prazo", title: "Para quando você precisa?", fields: ["prazo"] },
    {
      id: "entrega",
      title: "Para onde entregamos?",
      hint: "Atendemos todo o Brasil a partir de Brasília-DF.",
      fields: ["cidadeUf", "cep"],
    },
    { id: "contato", title: "Como falamos com você?", fields: ["nome", "empresa", "email", "telefone", "observacoes"] },
    {
      id: "anexos",
      title: "Já tem o arquivo?",
      hint: "Opcional. Nesta versão o envio do arquivo acontece depois, pelo WhatsApp ou e-mail.",
      fields: ["anexos"],
    }
  );
  return steps;
}

/* ---------- blocos de opção ---------- */

function OptionCards({
  name,
  options,
  register,
  type = "radio",
  error,
  columns = 2,
}: {
  name: keyof QuoteSchema;
  options: Option[];
  register: UseFormRegister<QuoteSchema>;
  type?: "radio" | "checkbox";
  error?: string;
  columns?: 1 | 2 | 3;
}) {
  return (
    <fieldset aria-labelledby="quote-step-heading">
      <div
        className={cn(
          "grid gap-3",
          columns === 3 ? "sm:grid-cols-3" : columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"
        )}
      >
        {options.map((o) => (
          <label key={o.value} className="relative block cursor-pointer">
            <input
              type={type}
              value={o.value}
              {...register(name)}
              className="peer absolute inset-0 z-10 cursor-pointer appearance-none opacity-0"
              aria-describedby={error ? `${name}-error` : undefined}
            />
            <span className="flex min-h-14 items-center justify-between gap-3 border border-carbon/20 bg-white-tech px-4 py-3.5 transition-[border-color,background-color,box-shadow] duration-[var(--dur-micro)] peer-checked:border-carbon peer-checked:bg-carbon peer-checked:text-white-tech peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink peer-hover:border-carbon/50">
              <span>
                <span className="block text-sm font-medium">{o.label}</span>
                {o.hint && <span className="mt-0.5 block text-xs opacity-65">{o.hint}</span>}
              </span>
            </span>
          </label>
        ))}
      </div>
      {error && (
        <p id={`${name}-error`} className="mt-3 text-sm font-medium text-[#c53000]" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}

function TextField({
  label,
  name,
  register,
  error,
  optional,
  placeholder,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: keyof QuoteSchema;
  register: UseFormRegister<QuoteSchema>;
  error?: string;
  optional?: boolean;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
}) {
  const id = `field-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
        {optional && <span className="ml-1.5 text-xs font-normal text-carbon/60">(opcional)</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...register(name)}
        className="mt-2 h-12 w-full border border-carbon/25 bg-white-tech px-4 text-base outline-none transition-colors duration-[var(--dur-micro)] focus:border-carbon"
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-[#c53000]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

/* ---------- wizard ---------- */

export function QuoteWizard() {
  const reduced = useReducedMotion();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const {
    register,
    watch,
    trigger,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<QuoteSchema>({
    resolver: zodResolver(quoteSchema),
    defaultValues: quoteDefaults,
    mode: "onTouched",
  });

  const values = watch();
  const steps = useMemo(() => buildSteps(values.produto), [values.produto]);
  const step = steps[Math.min(stepIndex, steps.length - 1)];
  const progress = showSummary ? 1 : stepIndex / steps.length;

  const err = (name: keyof QuoteSchema) => errors[name]?.message as string | undefined;

  async function next() {
    const ok = await trigger(step.fields);
    if (!ok) return;
    if (stepIndex >= steps.length - 1) {
      const allOk = await trigger();
      if (!allOk) {
        const firstBad = steps.findIndex((s) => s.fields.some((f) => f in errors));
        if (firstBad >= 0) setStepIndex(firstBad);
        return;
      }
      setShowSummary(true);
    } else {
      setStepIndex((i) => i + 1);
    }
    headingRef.current?.focus();
  }

  function back() {
    if (showSummary) setShowSummary(false);
    else setStepIndex((i) => Math.max(0, i - 1));
    headingRef.current?.focus();
  }

  function jumpTo(stepId: string) {
    const idx = steps.findIndex((s) => s.id === stepId);
    if (idx >= 0) {
      setShowSummary(false);
      setStepIndex(idx);
      headingRef.current?.focus();
    }
  }

  const summaryLines = showSummary ? buildQuoteSummary(getValues()) : [];
  const waMessage = showSummary ? buildWhatsAppMessage(getValues()) : "";
  const mailBody = encodeURIComponent(waMessage.replace(/\*/g, ""));
  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent("Pedido de orçamento — site FullGraph")}&body=${mailBody}`;

  const motionProps = reduced
    ? {}
    : {
        initial: { opacity: 0, x: 32 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -24 },
        transition: { duration: 0.32, ease: easeOutExpo },
      };

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
      {/* Coluna do formulário */}
      <div>
        {/* progresso */}
        <div className="mb-8">
          <div className="flex items-baseline justify-between">
            <p className="text-spec text-carbon/60" aria-live="polite">
              {showSummary
                ? "Resumo do pedido"
                : `Etapa ${stepIndex + 1} de ${steps.length}`}
            </p>
            <p className="text-spec text-carbon/60">sem compromisso</p>
          </div>
          <div
            className="mt-3 h-1 w-full bg-carbon/10"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
            aria-label="Progresso do orçamento"
          >
            <div
              className="h-full bg-ink transition-[width] duration-[var(--dur-comp)] ease-[var(--ease-out-expo)]"
              style={{ width: `${Math.max(4, progress * 100)}%` }}
            />
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} noValidate data-testid="quote-form">
          <div className="min-h-[26rem]">
            <AnimatePresence mode="wait">
              {!showSummary ? (
                <motion.div key={step.id} {...motionProps}>
                  <h2
                    ref={headingRef}
                    tabIndex={-1}
                    id="quote-step-heading"
                    className="text-h3 font-semibold outline-none"
                    data-testid="quote-step-title"
                  >
                    {step.title}
                  </h2>
                  {step.hint && <p className="mt-2 text-sm text-carbon/65">{step.hint}</p>}

                  <div className="mt-7 space-y-5">
                    {step.id === "segmento" && (
                      <OptionCards name="segmento" options={segments} register={register} error={err("segmento")} />
                    )}
                    {step.id === "produto" && (
                      <OptionCards name="produto" options={quoteProducts} register={register} error={err("produto")} columns={3} />
                    )}
                    {step.id === "formato" && (
                      <>
                        <OptionCards
                          name="formato"
                          options={formatsByProduct[values.produto] ?? formatsByProduct.outro}
                          register={register}
                          error={err("formato")}
                        />
                        {values.formato === "custom" && (
                          <TextField
                            label="Descreva o formato"
                            name="formatoCustom"
                            register={register}
                            error={err("formatoCustom")}
                            placeholder="ex.: 20 × 20 cm fechado"
                          />
                        )}
                      </>
                    )}
                    {step.id === "quantidade" && (
                      <OptionCards name="quantidade" options={quantities} register={register} error={err("quantidade")} columns={3} />
                    )}
                    {step.id === "paginas" && (
                      <OptionCards name="paginas" options={pageCounts} register={register} error={err("paginas")} />
                    )}
                    {step.id === "cores" && (
                      <OptionCards name="cores" options={colorOptions} register={register} error={err("cores")} />
                    )}
                    {step.id === "material" && (
                      <OptionCards name="material" options={materials} register={register} error={err("material")} />
                    )}
                    {step.id === "acabamento" && (
                      <OptionCards
                        name="acabamento"
                        options={finishes}
                        register={register}
                        type="checkbox"
                        error={err("acabamento")}
                      />
                    )}
                    {step.id === "encadernacao" && (
                      <OptionCards name="encadernacao" options={bindings} register={register} error={err("encadernacao")} />
                    )}
                    {step.id === "prazo" && (
                      <OptionCards name="prazo" options={deadlines} register={register} error={err("prazo")} />
                    )}
                    {step.id === "entrega" && (
                      <div className="grid gap-5 sm:grid-cols-2">
                        <TextField
                          label="Cidade e UF"
                          name="cidadeUf"
                          register={register}
                          error={err("cidadeUf")}
                          placeholder="ex.: Goiânia - GO"
                          autoComplete="address-level2"
                        />
                        <TextField
                          label="CEP"
                          name="cep"
                          register={register}
                          error={err("cep")}
                          optional
                          placeholder="00000-000"
                          autoComplete="postal-code"
                        />
                      </div>
                    )}
                    {step.id === "contato" && (
                      <div className="grid gap-5 sm:grid-cols-2">
                        <TextField label="Seu nome" name="nome" register={register} error={err("nome")} autoComplete="name" />
                        <TextField label="Empresa" name="empresa" register={register} optional autoComplete="organization" />
                        <TextField label="E-mail" name="email" register={register} error={err("email")} type="email" autoComplete="email" />
                        <TextField
                          label="Telefone / WhatsApp"
                          name="telefone"
                          register={register}
                          error={err("telefone")}
                          type="tel"
                          placeholder="(61) 90000-0000"
                          autoComplete="tel"
                        />
                        <div className="sm:col-span-2">
                          <label htmlFor="field-observacoes" className="block text-sm font-medium">
                            Observações <span className="ml-1.5 text-xs font-normal text-carbon/60">(opcional)</span>
                          </label>
                          <textarea
                            id="field-observacoes"
                            rows={3}
                            {...register("observacoes")}
                            className="mt-2 w-full border border-carbon/25 bg-white-tech px-4 py-3 text-base outline-none transition-colors duration-[var(--dur-micro)] focus:border-carbon"
                            placeholder="Algo mais que devemos saber sobre o projeto?"
                          />
                        </div>
                      </div>
                    )}
                    {step.id === "anexos" && (
                      <div>
                        <label className="block cursor-pointer border-2 border-dashed border-carbon/25 bg-white-tech/60 p-8 text-center transition-colors duration-[var(--dur-micro)] hover:border-carbon/50">
                          <input
                            type="file"
                            multiple
                            className="sr-only"
                            accept=".pdf,.ai,.eps,.jpg,.jpeg,.png,.tif,.tiff,.zip"
                            onChange={(e) => {
                              const names = Array.from(e.target.files ?? []).map((f) => f.name);
                              setValue("anexos", names, { shouldDirty: true });
                            }}
                          />
                          <Paperclip aria-hidden="true" className="mx-auto size-6 text-carbon/50" />
                          <span className="mt-3 block text-sm font-medium">
                            Selecionar arquivos do projeto
                          </span>
                          <span className="mt-1 block text-xs text-carbon/65">
                            PDF, AI, EPS, imagens ou ZIP
                          </span>
                        </label>
                        {values.anexos.length > 0 && (
                          <ul className="mt-4 space-y-1.5" aria-label="Arquivos selecionados">
                            {values.anexos.map((name) => (
                              <li key={name} className="text-spec flex items-center gap-2 text-carbon/70">
                                <Paperclip aria-hidden="true" className="size-3.5" />
                                {name}
                              </li>
                            ))}
                          </ul>
                        )}
                        <p className="mt-4 text-xs leading-relaxed text-carbon/65">
                          Os nomes dos arquivos entram no resumo do pedido; o envio
                          em si acontece na conversa de WhatsApp ou por e-mail —
                          o upload direto pelo site chega com a próxima versão.
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div key="resumo" {...motionProps}>
                  <h2 ref={headingRef} tabIndex={-1} className="text-h3 font-semibold outline-none" data-testid="quote-step-title">
                    Confira e envie
                  </h2>
                  <p className="mt-2 text-sm text-carbon/65">
                    Revise as escolhas — dá para editar qualquer etapa antes de enviar.
                  </p>

                  <dl className="mt-7 divide-y divide-carbon/10 border-y border-carbon/15" data-testid="quote-summary">
                    {summaryLines.map((line) => (
                      <div key={line.label} className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-spec flex-none text-carbon/65">{line.label}</dt>
                        <dd className="flex min-w-0 items-center gap-3 text-right text-sm font-medium">
                          <span className="truncate">{line.value}</span>
                          <button
                            type="button"
                            onClick={() => jumpTo(labelToStep(line.label))}
                            className="text-carbon/65 transition-colors hover:text-ink-paper"
                            aria-label={`Editar ${line.label}`}
                          >
                            <Pencil aria-hidden="true" className="size-3.5" />
                          </button>
                        </dd>
                      </div>
                    ))}
                    <div className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-spec flex-none text-carbon/65">Contato</dt>
                      <dd className="text-right text-sm font-medium">
                        {values.nome} · {values.telefone}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-8 space-y-3">
                    {hasWhatsApp() ? (
                      <a
                        href={whatsappUrl(waMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => void submitQuote(getValues())}
                        className="ink-register-hover flex h-13 w-full items-center justify-center gap-2 bg-ink px-6 text-base font-medium text-carbon transition-colors duration-[var(--dur-micro)] hover:bg-carbon hover:text-white-tech"
                        data-testid="quote-send-whatsapp"
                      >
                        <MessageCircle aria-hidden="true" className="size-5" />
                        <span className="ink-register-target">Enviar pelo WhatsApp</span>
                      </a>
                    ) : (
                      <a
                        href={mailHref}
                        onClick={() => void submitQuote(getValues())}
                        className="ink-register-hover flex h-13 w-full items-center justify-center gap-2 bg-ink px-6 text-base font-medium text-carbon transition-colors duration-[var(--dur-micro)] hover:bg-carbon hover:text-white-tech"
                        data-testid="quote-send-email"
                      >
                        <Mail aria-hidden="true" className="size-5" />
                        <span className="ink-register-target">Enviar por e-mail</span>
                      </a>
                    )}
                    <a
                      href={mailHref}
                      className="flex h-12 w-full items-center justify-center gap-2 border border-carbon/25 px-6 text-sm font-medium transition-colors duration-[var(--dur-micro)] hover:border-carbon"
                    >
                      <Mail aria-hidden="true" className="size-4" />
                      Prefiro e-mail ({site.email})
                    </a>
                    <p className="text-center text-xs text-carbon/65">
                      A mensagem já vai com o resumo acima. Sem spam, sem compromisso.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* navegação */}
          {!showSummary && (
            <div className="mt-8 flex items-center justify-between border-t border-carbon/15 pt-6">
              <button
                type="button"
                onClick={back}
                disabled={stepIndex === 0}
                className="flex h-11 items-center gap-2 px-4 text-sm font-medium text-carbon/70 transition-colors duration-[var(--dur-micro)] hover:text-carbon disabled:invisible"
                data-testid="quote-back"
              >
                <ArrowLeft aria-hidden="true" className="size-4" />
                Voltar
              </button>
              <button
                type="button"
                onClick={next}
                className="ink-register-hover flex h-12 items-center gap-2 bg-carbon px-7 text-sm font-medium text-white-tech transition-colors duration-[var(--dur-micro)] hover:bg-ink hover:text-carbon"
                data-testid="quote-next"
              >
                <span className="ink-register-target">
                  {stepIndex >= steps.length - 1 ? "Revisar pedido" : "Continuar"}
                </span>
                <ArrowRight aria-hidden="true" className="size-4" />
              </button>
            </div>
          )}
          {showSummary && (
            <div className="mt-6">
              <button
                type="button"
                onClick={back}
                className="flex h-11 items-center gap-2 px-1 text-sm font-medium text-carbon/70 transition-colors duration-[var(--dur-micro)] hover:text-carbon"
              >
                <ArrowLeft aria-hidden="true" className="size-4" />
                Voltar às etapas
              </button>
            </div>
          )}
        </form>
      </div>

      {/* Prévia ilustrativa — barra fixa no topo (mobile) / coluna fixa (desktop) */}
      <aside
        className="sticky top-[var(--header-h)] z-30 order-first -mx-5 self-start border-b border-carbon/15 bg-paper/95 px-5 py-3 backdrop-blur-md md:-mx-8 md:px-8 lg:top-28 lg:order-none lg:mx-0 lg:border-b-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none"
        aria-label="Prévia do seu material"
      >
        <div className="lg:relative lg:border lg:border-carbon/15 lg:bg-paper-2/60 lg:p-6 lg:text-carbon/60">
          <p className="text-spec mb-2 hidden text-carbon/65 lg:mb-4 lg:block">Prévia · ilustrativa</p>
          <QuoteMockup
            segmento={values.segmento}
            produto={values.produto}
            formato={values.formato}
            quantidade={values.quantidade}
            paginas={values.paginas}
            cores={values.cores}
            material={values.material}
            acabamento={values.acabamento}
            encadernacao={values.encadernacao}
          />
          {/* resumo corrido para leitores de tela */}
          <p className="sr-only" aria-live="polite">
            {[
              values.produto && optionText(quoteProducts, values.produto),
              values.quantidade && optionText(quantities, values.quantidade),
              values.material && optionText(materials, values.material),
              values.prazo && optionText(deadlines, values.prazo),
            ]
              .filter(Boolean)
              .join(" · ") || "Suas escolhas aparecem aqui"}
          </p>
          <p className="text-spec mt-4 hidden border-t border-carbon/10 pt-3 text-carbon/50 lg:block">
            Imagem ilustrativa de referência — o orçamento considera suas escolhas.
          </p>
        </div>
      </aside>
    </div>
  );
}

function optionText(options: Option[], value: string): string {
  return options.find((o) => o.value === value)?.label ?? value;
}

/** Mapeia o rótulo do resumo de volta para a etapa correspondente */
function labelToStep(label: string): string {
  const map: Record<string, string> = {
    Segmento: "segmento",
    Produto: "produto",
    Formato: "formato",
    Quantidade: "quantidade",
    Páginas: "paginas",
    Cores: "cores",
    Material: "material",
    Acabamento: "acabamento",
    Encadernação: "encadernacao",
    Prazo: "prazo",
    Entrega: "entrega",
    Arquivos: "anexos",
  };
  return map[label] ?? "segmento";
}
