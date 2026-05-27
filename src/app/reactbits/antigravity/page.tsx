"use client";

import Antigravity from "@/components/Antigravity";
import { BackLink } from "@/components/back-link";

export default function AntigravityPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="absolute inset-0">
        <Antigravity
          count={300}
          magnetRadius={10}
          ringRadius={10}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={2}
          color="#FF9FFC"
          autoAnimate
          particleShape="capsule"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Antigravity
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto text-sm">
            Move your mouse to attract particles into a ring. Uses R3F with
            instanced meshes for performance.
          </p>
        </div>
      </div>
    </div>
  );
}
