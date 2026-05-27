"use client";

export const dynamic = "force-dynamic";

import { CanvasFractalGrid } from "@/components/ui/canvas-fractal-grid"
import { BackLink } from "@/components/back-link"

export default function CanvasFractalGridPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Canvas Fractal Grid
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            A canvas-rendered fractal dot grid that responds to mouse movement.
            Recursive subdivision with gradient glow and wave effects.
          </p>
        </div>

        <div className="space-y-16">
          {/* Default demo */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Default
            </h2>
            <div className="relative h-80 rounded-xl overflow-hidden border border-white/10">
              <CanvasFractalGrid
                dotSize={3}
                dotSpacing={20}
                dotOpacity={0.4}
                waveIntensity={60}
                waveRadius={250}
                enableGradient
                enableMouseGlow
                enableNoise
              />
            </div>
            <p className="text-center text-xs text-white/30 mt-3">
              Move your mouse over the grid to see the wave response
            </p>
          </section>

          {/* Dense grid */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Dense Grid
            </h2>
            <div className="relative h-64 rounded-xl overflow-hidden border border-white/10">
              <CanvasFractalGrid
                dotSize={2}
                dotSpacing={12}
                dotOpacity={0.6}
                waveIntensity={40}
                waveRadius={150}
                enableGradient
                enableMouseGlow
              />
            </div>
          </section>

          {/* Hero background */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Hero Background
            </h2>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <CanvasFractalGrid
                dotSize={4}
                dotSpacing={24}
                dotOpacity={0.3}
                gradientAnimationDuration={6}
                waveIntensity={80}
                waveRadius={300}
                enableGradient
                enableMouseGlow
                enableNoise
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Generative Art
                  </h3>
                  <p className="text-sm text-white/60">
                    Canvas-powered, highly configurable
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
