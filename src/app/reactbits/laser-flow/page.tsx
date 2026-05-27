"use client";

export const dynamic = "force-dynamic";

import LaserFlow from "@/components/LaserFlow";
import { BackLink } from "@/components/back-link";

export default function LaserFlowPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="absolute inset-0">
        <LaserFlow
          color="#FF79C6"
          flowSpeed={0.35}
          verticalSizing={2.0}
          horizontalSizing={0.5}
          fogIntensity={0.45}
          wispDensity={1}
          wispSpeed={15}
          wispIntensity={5}
          decay={1.1}
          falloffStart={1.2}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            LaserFlow
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto text-sm">
            WebGL laser beam with volumetric fog, animated wisps, and mouse
            tilt. Adaptive DPR for smooth performance.
          </p>
        </div>
      </div>
    </div>
  );
}
