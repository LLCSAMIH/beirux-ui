"use client"

import { GradientAnimation } from "@/components/ui/bg-animated-gradient"
import { BackLink } from "@/components/back-link"

export default function BgAnimatedGradientPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            BG Animated Gradient
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Smooth, looping gradient backgrounds that shift colors continuously.
            Uses radial gradients with configurable color stops and animation
            duration.
          </p>
        </div>

        <div className="space-y-16">
          {/* Default */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Default Gradient
            </h2>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <GradientAnimation animationDuration={10} />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-lg font-semibold text-white drop-shadow-lg">
                  Pastel Radial Gradients
                </p>
              </div>
            </div>
          </section>

          {/* Custom gradients */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Custom Colors
            </h2>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <GradientAnimation
                gradients={[
                  {
                    stops: [
                      { color: "#6366f1", position: 0 },
                      { color: "#8b5cf6", position: 30 },
                      { color: "transparent", position: 70 },
                    ],
                    centerX: 30,
                    centerY: 40,
                  },
                  {
                    stops: [
                      { color: "#ec4899", position: 0 },
                      { color: "#f43f5e", position: 30 },
                      { color: "transparent", position: 70 },
                    ],
                    centerX: 70,
                    centerY: 60,
                  },
                ]}
                animationDuration={8}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-lg font-semibold text-white drop-shadow-lg">
                  Indigo / Rose
                </p>
              </div>
            </div>
          </section>

          {/* Card overlay */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Card with Gradient Background
            </h2>
            <div className="relative rounded-xl overflow-hidden">
              <GradientAnimation animationDuration={15} />
              <div className="relative z-10 p-8">
                <h3 className="text-xl font-bold text-white mb-2">
                  Gradient Card
                </h3>
                <p className="text-sm text-white/70">
                  Layer content on top of the animated gradient for eye-catching
                  hero sections and feature cards.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
