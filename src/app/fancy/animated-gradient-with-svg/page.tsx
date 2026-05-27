"use client";

export const dynamic = "force-dynamic";

import AnimatedGradient from "@/components/fancy/background/animated-gradient-with-svg";
import { BackLink } from "@/components/back-link";

export default function AnimatedGradientPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Animated Gradient (SVG)
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Animated gradient background using SVG circles with blur.
            Circles drift through random positions on a loop.
          </p>
        </div>

        <div className="space-y-24">
          {/* Demo 1: Warm tones, light blur */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Warm palette / light blur / 5s speed
            </p>
            <div className="relative w-full h-72 rounded-xl border border-white/10 overflow-hidden">
              <AnimatedGradient
                colors={["#ff6b35", "#f7c59f", "#e84855", "#ffe066"]}
                speed={5}
                blur="light"
              />
              <div className="relative z-10 flex items-center justify-center h-full">
                <p className="text-2xl font-semibold text-white drop-shadow-lg">
                  Warm Gradient
                </p>
              </div>
            </div>
          </section>

          {/* Demo 2: Cool tones, medium blur */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Cool palette / medium blur / 8s slow drift
            </p>
            <div className="relative w-full h-72 rounded-xl border border-white/10 overflow-hidden">
              <AnimatedGradient
                colors={["#4361ee", "#3a0ca3", "#7209b7", "#48bfe3"]}
                speed={8}
                blur="medium"
              />
              <div className="relative z-10 flex items-center justify-center h-full">
                <p className="text-2xl font-semibold text-white drop-shadow-lg">
                  Cool Gradient
                </p>
              </div>
            </div>
          </section>

          {/* Demo 3: Emerald/dark, heavy blur, hero-style */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Emerald / heavy blur / 6s / hero overlay
            </p>
            <div className="relative w-full h-96 rounded-xl border border-white/10 overflow-hidden">
              <AnimatedGradient
                colors={["#10b981", "#064e3b", "#34d399", "#059669"]}
                speed={6}
                blur="heavy"
              />
              <div className="relative z-10 flex flex-col items-center justify-center h-full gap-3">
                <p className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                  BEIRUX
                </p>
                <p className="text-sm tracking-[0.2em] uppercase text-white/60">
                  Craft meets code
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
