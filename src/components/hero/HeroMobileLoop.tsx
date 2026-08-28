"use client";

import { useEffect, useRef, useState } from "react";
import { heroMedia } from "@/lib/hero-media";
import {
  useIsSmallScreen,
  useIsTouch,
  usePrefersReducedMotion,
  useSaveData,
} from "@/lib/hooks";
import { cn } from "@/lib/utils";

/**
 * Loop ambiente do hero mobile — o espelho do HeroScrubController:
 * onde o scrub exige desktop, o loop exige touch/small. Gates VIVOS
 * (re-avaliam em rotação/flip de preferência): elegível = (touch OU
 * <1024px) E sem reduced-motion E sem data-saver. Fora disso nada é
 * baixado e o still aprovado segue como hero.
 *
 * O <video> só fica visível depois do evento `playing`: se o autoplay
 * for bloqueado (ex.: iOS em modo de baixa energia), o still por baixo
 * continua sendo o hero — nenhum frame congelado alheio ao aprovado.
 */
export function HeroMobileLoop() {
  const isTouch = useIsTouch();
  const isSmall = useIsSmallScreen();
  const reduced = usePrefersReducedMotion();
  const saveData = useSaveData();
  const [armed, setArmed] = useState(false);

  // Adia a montagem para depois da primeira pintura (mesmo padrão do
  // controller do scrub)
  useEffect(() => {
    const arm = () => setArmed(true);
    const hasIdle = typeof window.requestIdleCallback === "function";
    const id = hasIdle
      ? window.requestIdleCallback(arm, { timeout: 1200 })
      : window.setTimeout(arm, 350);
    return () => {
      if (hasIdle) window.cancelIdleCallback(id as number);
      else window.clearTimeout(id as number);
    };
  }, []);

  const eligible =
    armed &&
    (isTouch || isSmall) &&
    !reduced &&
    !saveData &&
    Boolean(heroMedia.mobileLoopSrc);

  if (!eligible) return null;
  return <LoopVideo src={heroMedia.mobileLoopSrc as string} />;
}

function LoopVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    // play() explícito cobre navegadores que ignoram o atributo
    // autoplay em vídeo inserido pós-load; rejeição = still segura
    videoRef.current?.play().catch(() => {});
  }, []);

  if (failed) return null;
  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={heroMedia.mobileStillSrc}
      aria-hidden="true"
      tabIndex={-1}
      data-testid="hero-mobile-loop"
      onPlaying={() => setPlaying(true)}
      onError={() => setFailed(true)}
      className={cn(
        "absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700",
        playing && "opacity-100"
      )}
    />
  );
}
