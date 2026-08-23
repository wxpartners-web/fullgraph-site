"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/**
 * Cena do hero — "bancada de estúdio gráfico":
 * livro, caixa de embalagem, pilha de impressos e folhas soltas,
 * todos procedurais (sem modelos externos). Flutuação lenta,
 * parallax de cursor limitado e leve reorganização no scroll.
 * Uma única cena WebGL ativa; DPR limitado; pausa fora de vista.
 */

const PAPER = "#f0ebdd";
const PAPER_EDGE = "#e0d9c4";
const CARBON = "#161618";
const ORANGE = "#ff4d00";
const CYAN = "#00c2ff";
const MAGENTA = "#ff2d78";

function useScrollProgress() {
  const ref = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      ref.current = Math.min(1, window.scrollY / (window.innerHeight * 0.9));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return ref;
}

/** Livro fechado: capa laranja + miolo de páginas claras */
function Book(props: { position: [number, number, number]; rotation?: [number, number, number] }) {
  return (
    <group {...props}>
      {/* miolo */}
      <mesh position={[0.02, 0, 0]}>
        <boxGeometry args={[1.04, 1.5, 0.22]} />
        <meshStandardMaterial color={PAPER} roughness={0.85} />
      </mesh>
      {/* capa */}
      <mesh position={[0, 0, 0.135]}>
        <boxGeometry args={[1.1, 1.56, 0.035]} />
        <meshStandardMaterial color={ORANGE} roughness={0.55} />
      </mesh>
      <mesh position={[0, 0, -0.135]}>
        <boxGeometry args={[1.1, 1.56, 0.035]} />
        <meshStandardMaterial color={ORANGE} roughness={0.55} />
      </mesh>
      {/* lombada */}
      <mesh position={[-0.55, 0, 0]}>
        <boxGeometry args={[0.035, 1.56, 0.3]} />
        <meshStandardMaterial color={ORANGE} roughness={0.55} />
      </mesh>
    </group>
  );
}

/** Caixa de embalagem com tampa entreaberta */
function PackBox(props: { position: [number, number, number]; rotation?: [number, number, number] }) {
  return (
    <group {...props}>
      <mesh>
        <boxGeometry args={[1.0, 0.62, 1.0]} />
        <meshStandardMaterial color={CARBON} roughness={0.7} />
      </mesh>
      {/* faixa de marca */}
      <mesh position={[0, -0.06, 0.503]}>
        <planeGeometry args={[1.0, 0.16]} />
        <meshStandardMaterial color={ORANGE} roughness={0.6} />
      </mesh>
      {/* tampa entreaberta */}
      <mesh position={[0, 0.36, -0.22]} rotation={[-0.5, 0, 0]}>
        <boxGeometry args={[1.0, 0.02, 0.62]} />
        <meshStandardMaterial color={CARBON} roughness={0.7} />
      </mesh>
    </group>
  );
}

/** Pilha de impressos: folhas finas levemente giradas */
function Stack(props: { position: [number, number, number] }) {
  const sheets = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => ({
        y: i * 0.055,
        rot: (Math.sin(i * 12.9898) * 0.5) * 0.22,
        tone: i % 3 === 0 ? PAPER_EDGE : PAPER,
      })),
    []
  );
  return (
    <group {...props}>
      {sheets.map((s, i) => (
        <mesh key={i} position={[0, s.y, 0]} rotation={[0, s.rot, 0]}>
          <boxGeometry args={[1.15, 0.035, 0.82]} />
          <meshStandardMaterial color={s.tone} roughness={0.9} />
        </mesh>
      ))}
      {/* folha de topo com mancha gráfica */}
      <mesh position={[0, sheets.length * 0.055 + 0.005, 0]} rotation={[-Math.PI / 2, 0, 0.1]}>
        <planeGeometry args={[1.05, 0.72]} />
        <meshStandardMaterial color={ORANGE} roughness={0.7} />
      </mesh>
    </group>
  );
}

/** Folha solta flutuante */
function Sheet({
  position,
  rotation,
  color,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  color?: string;
}) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[0.72, 1.02]} />
      <meshStandardMaterial color={color ?? PAPER} roughness={0.9} side={THREE.DoubleSide} />
    </mesh>
  );
}

/** Barras finas de "registro" cyan/magenta */
function RegBars() {
  return (
    <group>
      <mesh position={[1.75, 1.15, -0.6]} rotation={[0, 0, 0.4]}>
        <boxGeometry args={[0.5, 0.02, 0.02]} />
        <meshBasicMaterial color={CYAN} />
      </mesh>
      <mesh position={[-1.9, -1.05, -0.4]} rotation={[0, 0, -0.35]}>
        <boxGeometry args={[0.4, 0.02, 0.02]} />
        <meshBasicMaterial color={MAGENTA} />
      </mesh>
    </group>
  );
}

function FloatGroup({
  children,
  amp = 0.07,
  speed = 0.6,
  phase = 0,
  position,
  spread,
}: {
  children: React.ReactNode;
  amp?: number;
  speed?: number;
  phase?: number;
  position: [number, number, number];
  /** deslocamento aplicado conforme o scroll (reorganização) */
  spread: [number, number, number];
}) {
  const ref = useRef<THREE.Group>(null);
  const scroll = useScrollProgress();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    const s = scroll.current;
    ref.current.position.set(
      position[0] + spread[0] * s,
      position[1] + Math.sin(t * speed + phase) * amp + spread[1] * s,
      position[2] + spread[2] * s
    );
    ref.current.rotation.y = Math.sin(t * speed * 0.5 + phase) * 0.06 + s * 0.35;
  });
  return (
    <group ref={ref} position={position}>
      {children}
    </group>
  );
}

/** Parallax de cursor limitado sobre o conjunto */
function CursorRig({
  children,
  enabled,
  offsetX = 0,
}: {
  children: React.ReactNode;
  enabled: boolean;
  offsetX?: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  useFrame(() => {
    if (!ref.current) return;
    const tx = enabled ? pointer.y * 0.06 : 0;
    const ty = enabled ? pointer.x * 0.1 : 0;
    ref.current.rotation.x += (tx - ref.current.rotation.x) * 0.05;
    ref.current.rotation.y += (ty - ref.current.rotation.y) * 0.05;
  });
  return (
    <group position={[offsetX, 0, 0]} ref={ref}>
      {children}
    </group>
  );
}

function SceneContents({ parallax }: { parallax: boolean }) {
  return (
    <>
      {/* iluminação de estúdio: chave + preenchimento + recorte */}
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} />
      <directionalLight position={[-5, 2, -3]} intensity={0.35} color={"#cfd6e0"} />

      <CursorRig enabled={parallax} offsetX={1.0}>
        <FloatGroup position={[1.15, 0.25, 0]} spread={[0.9, 0.5, -0.4]} phase={0} speed={0.55}>
          <Book position={[0, 0, 0]} rotation={[0.12, -0.5, 0.06]} />
        </FloatGroup>
        <FloatGroup position={[-1.25, -0.75, 0.2]} spread={[-1.1, -0.3, 0]} phase={1.7} speed={0.5}>
          <PackBox position={[0, 0, 0]} rotation={[0.15, 0.6, 0]} />
        </FloatGroup>
        <FloatGroup position={[-0.15, 0.85, -0.7]} spread={[-0.3, 1.0, -0.5]} phase={3.1} speed={0.65}>
          <Stack position={[0, 0, 0]} />
        </FloatGroup>
        <FloatGroup position={[2.05, -0.7, -0.5]} spread={[1.2, -0.6, 0]} phase={4.4} speed={0.75} amp={0.1}>
          <Sheet position={[0, 0, 0]} rotation={[-0.4, 0.5, 0.3]} />
        </FloatGroup>
        <FloatGroup position={[-2.2, 0.7, -0.9]} spread={[-0.8, 0.8, 0]} phase={5.6} speed={0.7} amp={0.09}>
          <Sheet position={[0, 0, 0]} rotation={[0.3, -0.4, -0.25]} color={PAPER_EDGE} />
        </FloatGroup>
        <RegBars />
      </CursorRig>
    </>
  );
}

export default function HeroScene({
  parallax = true,
  onReady,
}: {
  parallax?: boolean;
  onReady?: () => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  // Pausa o loop quando o hero sai de vista (e a aba oculta já
  // suspende o rAF nativamente)
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.05,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        frameloop={inView ? "always" : "never"}
        camera={{ position: [0, 0, 6], fov: 42 }}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        style={{ pointerEvents: "none" }}
        onCreated={() => onReady?.()}
      >
        <SceneContents parallax={parallax} />
      </Canvas>
    </div>
  );
}
