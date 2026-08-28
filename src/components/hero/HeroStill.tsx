import { heroMedia } from "@/lib/hero-media";

/**
 * Fallback visual estático do hero cinematográfico — sempre presente no
 * server render, por baixo do vídeo. Desktop recebe o poster (frame 000
 * do encode: a troca poster→vídeo acontece sem salto); mobile/touch
 * recebe o still 9:16 do frame de repouso (frame 096), que é a
 * composição mais "chegada" — no mobile o vídeo nunca carrega.
 *
 * <img> deliberado em vez de next/image: o poster precisa bater byte a
 * byte com o frame 000 do vídeo (o otimizador re-encodaria e criaria um
 * salto visível na troca) e o <picture> faz o swap de crop por media
 * query no próprio HTML, sem JS. Se a imagem falhar, o bg-carbon da
 * seção + scrim seguram a legibilidade do texto.
 */
export function HeroStill() {
  return (
    <div className="absolute inset-0" data-testid="hero-still">
      <picture>
        <source media="(max-width: 1023px)" srcSet={heroMedia.mobileStillSrc} />
        <img
          src={heroMedia.posterSrc}
          alt=""
          width={heroMedia.videoWidth}
          height={heroMedia.videoHeight}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </picture>
    </div>
  );
}
