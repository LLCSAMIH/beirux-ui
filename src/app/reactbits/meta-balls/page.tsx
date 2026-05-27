"use client";

export const dynamic = "force-dynamic";

import MetaBalls from "@/components/MetaBalls";
import { BackLink } from "@/components/back-link";

export default function MetaBallsPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      {/* Demo: Full-screen white metaballs */}
      <div className="absolute inset-0">
        <MetaBalls
          color="#ffffff"
          cursorBallColor="#5227FF"
          speed={0.3}
          ballCount={15}
          animationSize={30}
          enableMouseInteraction
          cursorBallSize={3}
          clumpFactor={1}
          enableTransparency
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            MetaBalls
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50 mb-6">
            ReactBits
          </p>
          <p className="text-white/30 text-sm max-w-md mx-auto">
            OGL-powered metaball simulation. The cursor controls a distinct
            violet ball that merges with the swarm. Move your mouse to interact.
          </p>
        </div>
      </div>
    </div>
  );
}
