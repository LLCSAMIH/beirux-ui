"use client";

import PlasmaWave from "@/components/PlasmaWave";
import { BackLink } from "@/components/back-link";

export default function PlasmaWavePage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="absolute inset-0">
        <PlasmaWave colors={["#A855F7", "#06B6D4"]} speed1={0.05} speed2={0.05} />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Plasma Wave
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
        </div>
      </div>
    </div>
  );
}
