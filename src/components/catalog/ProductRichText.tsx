import Link from "next/link";
import { InkButton } from "@/components/ui/InkButton";
import { hasWhatsApp, whatsappUrl, whatsappCtaLabel } from "@/lib/whatsapp";
import type { ContentBlock, RichText } from "@/types";

/**
 * Renderização da copy estruturada das Money Pages — sem parser de
 * markdown: negrito e links internos chegam como dados tipados.
 */
export function RichTextInline({ value }: { value: RichText }) {
  if (typeof value === "string") return <>{value}</>;
  return (
    <>
      {value.map((node, i) => {
        if (typeof node === "string") return <span key={i}>{node}</span>;
        if ("strong" in node) {
          return (
            <strong key={i} className="font-semibold text-carbon">
              {node.strong}
            </strong>
          );
        }
        return (
          <Link
            key={i}
            href={node.href}
            className="font-medium text-ink-paper underline decoration-1 underline-offset-4 transition-colors hover:text-carbon"
          >
            {node.link}
          </Link>
        );
      })}
    </>
  );
}

/** Itens curtos (ex.: medidas de formato) viram fichas em linha */
const CHIP_MAX_LENGTH = 16;

function isChipList(items: readonly RichText[]): boolean {
  return items.every((item) => typeof item === "string" && item.length <= CHIP_MAX_LENGTH);
}

function BulletList({ items }: { items: readonly RichText[] }) {
  if (isChipList(items)) {
    return (
      <ul className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <li key={i} className="text-spec border border-carbon/20 px-3 py-2 text-carbon/80">
            <RichTextInline value={item} />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 leading-relaxed text-carbon/80">
          <span aria-hidden="true" className="mt-2.5 inline-block size-1.5 flex-none bg-ink" />
          <span>
            <RichTextInline value={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function OrderedList({ items }: { items: readonly RichText[] }) {
  return (
    <ol className="space-y-6">
      {items.map((item, i) => (
        <li key={i} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-t border-carbon/10 pt-5 first:border-t-0 first:pt-0">
          <span aria-hidden="true" className="text-spec pt-1 text-ink-paper">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="leading-relaxed text-carbon/80">
            <RichTextInline value={item} />
          </p>
        </li>
      ))}
    </ol>
  );
}

export function ContentBlocks({
  blocks,
  whatsappMessage,
}: {
  blocks: readonly ContentBlock[];
  /** Mensagem pré-preenchida dos CTAs de WhatsApp no meio da copy */
  whatsappMessage?: string;
}) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        if ("cta" in block) {
          return (
            <div key={i} className="pt-2">
              <InkButton
                href={whatsappUrl(whatsappMessage)}
                external={hasWhatsApp()}
                variant="paper"
                size="lg"
                withArrow
                data-testid="content-whatsapp"
              >
                {whatsappCtaLabel(block.cta)}
              </InkButton>
            </div>
          );
        }
        if ("p" in block) {
          return (
            <p key={i} className="leading-relaxed text-carbon/80">
              <RichTextInline value={block.p} />
            </p>
          );
        }
        if ("ol" in block) return <OrderedList key={i} items={block.ol} />;
        return <BulletList key={i} items={block.ul} />;
      })}
    </div>
  );
}
