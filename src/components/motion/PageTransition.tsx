"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";

/** Primeira montagem da sessão fica com a BrandIntro; navegações
 *  seguintes ganham a "folha" atravessando a tela (corte de guilhotina). */
let hasNavigatedOnce = false;

/**
 * Transição de rota autoral: uma folha de papel com fio de corte
 * varre a tela para cima enquanto o conteúdo novo entra (~750 ms).
 * Implementada com animações CSS (compositor) — continua fluida
 * mesmo com a main thread ocupada (ex.: WebGL desmontando) e o
 * `forwards` garante o estado final ainda que frames sejam pulados.
 * Montada via template.tsx (remonta a cada navegação).
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const [isFirst] = useState(() => !hasNavigatedOnce);
  const [sheetDone, setSheetDone] = useState(false);

  useEffect(() => {
    hasNavigatedOnce = true;
  }, []);

  if (reduced || isFirst) return <>{children}</>;

  return (
    <>
      {!sheetDone && (
        <div
          aria-hidden="true"
          className="page-sheet surface-paper grain pointer-events-none fixed inset-0 z-[80]"
          onAnimationEnd={() => setSheetDone(true)}
        >
          <div className="absolute bottom-0 left-0 right-0 h-px bg-carbon/40" />
          <div className="absolute bottom-2 left-0 right-0 rule-dotted opacity-50" />
        </div>
      )}
      <div className="page-enter">{children}</div>
    </>
  );
}
