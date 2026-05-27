"use client";

import { BackLink } from "@/components/back-link";
import { FractalDotGrid } from "@/components/ui/bg-animated-fractal-dot-grid";

export default function BgAnimatedFractalGridPage() {
  return (
    <div className="dark relative min-h-screen bg-[#18181b] text-white overflow-hidden">
      <BackLink href="/cult-ui" label="Cult UI" />

      {/* Full-screen fractal dot grid background */}
      <FractalDotGrid
        dotColor="rgba(160, 140, 255, 1)"
        glowColor="rgba(160, 140, 255, 1)"
        dotSize={3}
        dotSpacing={22}
        dotOpacity={0.4}
        waveIntensity={35}
        waveRadius={250}
        enableNoise
        noiseOpacity={0.03}
        enableMouseGlow
        initialPerformance="high"
      />

      {/* Centered title overlay */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Fractal Dot Grid
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Interactive canvas background with mouse-reactive wave distortion,
            glow tracking, and adaptive performance scaling. Move your cursor to
            see the effect.
          </p>
        </div>
      </div>
    </div>
  );
}
