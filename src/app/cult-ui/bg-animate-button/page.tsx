"use client"

import { BgAnimateButton } from "@/components/ui/bg-animate-button"
import { BackLink } from "@/components/back-link"

export default function BgAnimateButtonPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            BG Animate Button
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Buttons with animated conic gradient backgrounds. Spin, pulse, and
            glow effects with multiple color presets.
          </p>
        </div>

        <div className="space-y-16">
          {/* Gradient presets */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Gradient Presets
            </h2>
            <div className="flex flex-wrap gap-4 items-center">
              <BgAnimateButton gradient="forest" animation="spin">
                Forest
              </BgAnimateButton>
              <BgAnimateButton gradient="ocean" animation="spin">
                Ocean
              </BgAnimateButton>
              <BgAnimateButton gradient="sunset" animation="spin">
                Sunset
              </BgAnimateButton>
              <BgAnimateButton gradient="nebula" animation="spin">
                Nebula
              </BgAnimateButton>
              <BgAnimateButton gradient="candy" animation="spin">
                Candy
              </BgAnimateButton>
            </div>
          </section>

          {/* Animation speeds */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Animation Speeds
            </h2>
            <div className="flex flex-wrap gap-4 items-center">
              <BgAnimateButton gradient="nebula" animation="spin-fast">
                Fast Spin
              </BgAnimateButton>
              <BgAnimateButton gradient="nebula" animation="spin">
                Normal Spin
              </BgAnimateButton>
              <BgAnimateButton gradient="nebula" animation="spin-slow">
                Slow Spin
              </BgAnimateButton>
              <BgAnimateButton gradient="nebula" animation="pulse">
                Pulse
              </BgAnimateButton>
            </div>
          </section>

          {/* Sizes and shadows */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Sizes and Shadows
            </h2>
            <div className="flex flex-wrap gap-4 items-center">
              <BgAnimateButton gradient="default" animation="spin" size="sm" shadow="flat">
                Small / Flat
              </BgAnimateButton>
              <BgAnimateButton gradient="default" animation="spin" size="default" shadow="base">
                Default / Base
              </BgAnimateButton>
              <BgAnimateButton gradient="default" animation="spin" size="lg" shadow="deeper">
                Large / Deeper
              </BgAnimateButton>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
