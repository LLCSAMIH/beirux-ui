"use client";

import dynamic from "next/dynamic";
import { BackLink } from "@/components/back-link";

const FaultyTerminal = dynamic(
  () => import("@/components/FaultyTerminal"),
  { ssr: false }
);

export default function FaultyTerminalPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="absolute inset-0">
        <FaultyTerminal
          glitchAmount={0.3}
          flickerAmount={0.1}
          scanlineIntensity={0.2}
          chromaticAberration={0.5}
          tint="#00FF41"
          mouseReact={true}
          brightness={1.0}
          curvature={0.05}
          className="w-full h-full"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            FaultyTerminal
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
        </div>
      </div>
    </div>
  );
}
