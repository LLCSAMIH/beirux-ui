"use client";

export const dynamic = "force-dynamic";

import GhostCursor from "@/components/GhostCursor";
import { BackLink } from "@/components/back-link";

export default function GhostCursorPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0a0a0a]">
      <BackLink href="/reactbits" label="ReactBits" />

      <GhostCursor
        trailLength={50}
        inertia={0.5}
        grainIntensity={0.05}
        bloomStrength={0.1}
        bloomRadius={1.0}
        color="#B497CF"
        brightness={1}
        mixBlendMode="screen"
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            GhostCursor
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto text-sm">
            Three.js smoke trail that follows the cursor with fbm noise,
            bloom, and film grain. Fades out when idle.
          </p>
        </div>
      </div>
    </div>
  );
}
