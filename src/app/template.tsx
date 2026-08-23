import { PageTransition } from "@/components/motion/PageTransition";

/** Remonta a cada navegação — habilita a transição de rota autoral */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
