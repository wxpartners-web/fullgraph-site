import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { clients } from "@/data/clients";

/**
 * Parede tipográfica de clientes — só nomes, sem logotipos. Lista
 * corrida com fios de registro entre os nomes; compacta no mobile.
 */
export function ClientsWall() {
  return (
    <section
      className="relative border-y border-white-tech/10 bg-carbon-2 py-20 md:py-28"
      data-testid="clients-wall"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Clientes" title="Quem já imprimiu com a FullGraph" />
        <Reveal delay={0.08}>
          <ul className="mt-10 flex flex-wrap items-baseline gap-x-3 gap-y-2 md:mt-14 md:gap-x-5 md:gap-y-4">
            {clients.map((name, i) => (
              <li key={name} className="flex items-baseline gap-x-3 md:gap-x-5">
                <span
                  className={
                    i % 3 === 1
                      ? "font-serif text-base italic text-white-tech/70 transition-colors duration-[var(--dur-micro)] hover:text-white-tech md:text-3xl"
                      : "text-base font-semibold tracking-tight text-white-tech/85 transition-colors duration-[var(--dur-micro)] hover:text-white-tech md:text-3xl"
                  }
                >
                  {name}
                </span>
                {i < clients.length - 1 && (
                  <span aria-hidden="true" className="inline-block size-1.5 translate-y-[-0.2em] bg-ink/70 md:size-2" />
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
