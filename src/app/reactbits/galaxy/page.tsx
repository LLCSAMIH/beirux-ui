"use client";

export const dynamic = "force-dynamic";

import Galaxy from "@/components/Galaxy";
import { BackLink } from "@/components/back-link";

export default function GalaxyPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="absolute inset-0">
        <Galaxy
          starSpeed={0.5}
          density={1}
          hueShift={140}
          speed={0.5}
          mouseInteraction={true}
          glowIntensity={1.0}
          saturation={1.0}
          twinkleIntensity={0.5}
          rotationSpeed={0.3}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Galaxy
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
        </div>
      </div>
    </div>
  );
}
