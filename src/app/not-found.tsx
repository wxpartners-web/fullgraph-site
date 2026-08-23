import { InkButton } from "@/components/ui/InkButton";

export default function NotFound() {
  return (
    <section className="grain flex min-h-svh flex-col items-center justify-center bg-carbon px-5 text-center">
      <p className="text-spec text-steel-2">Erro 404 · fora de registro</p>
      <h1 className="text-display mt-4 font-semibold text-white-tech">
        Página <em className="font-serif font-normal italic text-ink">fora do corte</em>
      </h1>
      <p className="text-lead mt-6 max-w-md text-steel">
        O endereço que você procurou ficou fora da área de impressão.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <InkButton href="/" size="lg">
          Voltar ao início
        </InkButton>
        <InkButton href="/produtos" variant="outline" size="lg">
          Ver o catálogo
        </InkButton>
      </div>
    </section>
  );
}
