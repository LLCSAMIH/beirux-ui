"use client";

export const dynamic = "force-dynamic";

import MagicRings from "@/components/MagicRings";
import { BackLink } from "@/components/back-link";

export default function MagicRingsPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      {/* Demo 1: Default pink/cyan rings */}
      <div className="absolute inset-0">
        <MagicRings
          color="#fc42ff"
          colorTwo="#42fcff"
          ringCount={6}
          followMouse
          clickBurst
          speed={1}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Magic Rings
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50 mb-6">
            ReactBits
          </p>
          <p className="text-white/30 text-sm max-w-md mx-auto">
            Move your mouse and click for burst effect. Three.js shader rings
            with configurable color, count, and mouse interaction.
          </p>
        </div>
      </div>
    </div>
  );
}
