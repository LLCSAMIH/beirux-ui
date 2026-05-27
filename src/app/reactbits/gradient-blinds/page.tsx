"use client";

export const dynamic = "force-dynamic";

import GradientBlinds from "@/components/GradientBlinds";
import { BackLink } from "@/components/back-link";

export default function GradientBlindsPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="absolute inset-0">
        <GradientBlinds
          gradientColors={["#FF3CAC", "#784BA0", "#2B86C5"]}
          blindCount={5}
          noise={0.1}
          spotlightRadius={0.4}
          spotlightSoftness={0.5}
          spotlightOpacity={0.6}
          distortAmount={0.1}
          className="w-full h-full"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            GradientBlinds
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
        </div>
      </div>
    </div>
  );
}
