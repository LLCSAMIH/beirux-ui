"use client";

export const dynamic = "force-dynamic";

import { DistortedGlass } from "@/components/ui/distorted-glass"
import { BackLink } from "@/components/back-link"

export default function DistortedGlassPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Distorted Glass
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            SVG filter-based glass distortion effect. Creates a frosted,
            refracted transition between sections using displacement mapping.
          </p>
        </div>

        <div className="space-y-16">
          {/* Gradient to content transition */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Section Transition
            </h2>
            <div className="relative rounded-xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-400 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">
                  Hero Section
                </h3>
              </div>
              <div className="relative w-full -mt-[17px]">
                <DistortedGlass />
              </div>
              <div className="p-8 bg-neutral-900">
                <p className="text-sm text-white/60">
                  The glass distortion creates a smooth visual transition
                  between two sections, like looking through textured glass at
                  the boundary.
                </p>
              </div>
            </div>
          </section>

          {/* Blue gradient transition */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Cool Gradient Transition
            </h2>
            <div className="relative rounded-xl overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">
                  Feature Highlight
                </h3>
              </div>
              <div className="relative w-full -mt-[17px]">
                <DistortedGlass />
              </div>
              <div className="p-8 bg-neutral-900">
                <p className="text-sm text-white/60">
                  Unlike CSS backdrop-filter blur, this creates actual
                  displacement distortion similar to looking through textured
                  glass.
                </p>
              </div>
            </div>
          </section>

          {/* Dark to dark */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Subtle Dark Transition
            </h2>
            <div className="relative rounded-xl overflow-hidden border border-white/10">
              <div className="h-32 bg-neutral-800 flex items-center justify-center">
                <p className="text-sm text-white/50">Above the glass</p>
              </div>
              <div className="relative w-full -mt-[17px]">
                <DistortedGlass />
              </div>
              <div className="h-32 bg-neutral-900 flex items-center justify-center">
                <p className="text-sm text-white/50">Below the glass</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
