import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Dev-only: permite testar no celular via IP da rede local
     (o Next 16 bloqueia origens fora de localhost no `next dev`).
     Ignorado em produção. */
  allowedDevOrigins: ["192.168.1.10"],
};

export default nextConfig;
