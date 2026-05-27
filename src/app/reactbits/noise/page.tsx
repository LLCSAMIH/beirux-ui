"use client";

export const dynamic = "force-dynamic";

import Noise from "@/components/Noise";
import { BackLink } from "@/components/back-link";

export default function NoisePage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      {/* Noise overlay */}
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-12 px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Noise
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50 mb-6">
            ReactBits
          </p>
          <p className="text-white/30 text-sm max-w-md mx-auto">
            Full-screen animated film grain overlay using canvas. Lightweight
            texture that adds analog warmth to any background. Configurable
            alpha, refresh rate, and scale.
          </p>
        </div>

        {/* Color swatches to show the noise effect over different backgrounds */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
          <div className="aspect-square rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center">
            <span className="text-white/60 text-xs font-medium">Gradient</span>
          </div>
          <div className="aspect-square rounded-xl bg-white flex items-center justify-center">
            <span className="text-black/40 text-xs font-medium">Light</span>
          </div>
          <div className="aspect-square rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center">
            <span className="text-white/60 text-xs font-medium">Cool</span>
          </div>
        </div>
      </div>
    </div>
  );
}
