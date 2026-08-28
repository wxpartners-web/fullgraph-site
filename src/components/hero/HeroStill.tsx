import { HeroPoster } from "@/components/three/HeroPoster";

/**
 * Fallback visual estático do hero cinematográfico — sempre presente no
 * server render, por baixo do vídeo. Enquanto não existe um poster
 * fotográfico aprovado (Gates 2–6), reusa a composição CSS do
 * HeroPoster; a deriva sutil já é desligada em reduced-motion pelo CSS.
 */
export function HeroStill() {
  return (
    <div className="absolute inset-0" data-testid="hero-still">
      <HeroPoster animated />
    </div>
  );
}
