"use client";

export const dynamic = "force-dynamic";

import AttractButton from "@/components/kokonutui/attract-button";
import { BackLink } from "@/components/back-link";

export default function AttractButtonPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Attract Button
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A magnetic button that attracts floating particles on hover.
          Particles spring toward the button center and scatter back to their
          random positions on mouse leave. Uses a magnet icon for visual
          reinforcement.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            spring physics
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            touch support
          </span>
        </div>
      </div>

      {/* Default */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default (12 Particles)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-16 flex items-center justify-center">
            <AttractButton />
          </div>
        </section>
      </div>

      {/* Particle count variations */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Particle Count Variations
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-16 flex items-center justify-center gap-12">
            <AttractButton particleCount={6} />
            <AttractButton particleCount={24} />
          </div>
        </section>
      </div>

      {/* Custom attract radius */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Wide Scatter (attractRadius=100)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-24 flex items-center justify-center">
            <AttractButton particleCount={20} attractRadius={100} />
          </div>
        </section>
      </div>
    </div>
  );
}
