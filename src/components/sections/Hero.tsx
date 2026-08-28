import { HeroClassic } from "./HeroClassic";
import { HeroCinema } from "@/components/hero/HeroCinema";

/**
 * Switcher do hero, controlado por NEXT_PUBLIC_HERO_SCRUB (inlined no
 * build). Desligada (padrão): HeroClassic, idêntico ao comportamento
 * anterior. Ligada ("1"): hero cinematográfico com scroll-scrub.
 * Rollback instantâneo = flag off + rebuild.
 */
const scrubEnabled = process.env.NEXT_PUBLIC_HERO_SCRUB === "1";

export function Hero() {
  return scrubEnabled ? <HeroCinema /> : <HeroClassic />;
}
