"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef } from "react";
import imagePlaceholders from "@/data/image-placeholders.json";

const previews: Record<string, string> = imagePlaceholders;

/** Mantém o mesmo <img>, srcset, tamanho e alt; antecipa só as fotos próximas. */
export function ProgressiveImage({
  warmNearby = false,
  ...props
}: ImageProps & { warmNearby?: boolean }) {
  const imageRef = useRef<HTMLImageElement>(null);
  const { src, loading, preload, priority } = props;

  useEffect(() => {
    const image = imageRef.current;
    if (!warmNearby || !image || loading === "eager" || preload || priority) return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      image.loading = "eager";
      observer.disconnect();
    }, { rootMargin: "3000px 0px" });
    observer.observe(image);
    return () => observer.disconnect();
  }, [warmNearby, src, loading, preload, priority]);

  const preview = props.blurDataURL ?? (typeof src === "string" ? previews[src] : undefined);
  return (
    <Image
      {...props}
      alt={props.alt}
      ref={imageRef}
      placeholder={props.placeholder ?? (preview ? "blur" : "empty")}
      blurDataURL={preview}
    />
  );
}
