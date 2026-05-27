"use client";

export const dynamic = "force-dynamic";

import EvilEye from "@/components/EvilEye";
import { BackLink } from "@/components/back-link";

export default function EvilEyePage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="absolute inset-0">
        <EvilEye
          eyeColor="#FF4444"
          intensity={1.0}
          pupilSize={0.35}
          irisWidth={0.2}
          glowIntensity={0.8}
          scale={1.0}
          pupilFollow={1.0}
          flameSpeed={1.0}
          backgroundColor="#18181b"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            EvilEye
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
        </div>
      </div>
    </div>
  );
}
