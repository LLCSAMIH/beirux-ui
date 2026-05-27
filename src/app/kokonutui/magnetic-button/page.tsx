"use client";

export const dynamic = "force-dynamic";

import AttractButton from "@/components/kokonutui/attract-button";
import { BackLink } from "@/components/back-link";

export default function MagneticButtonPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Magnetic Button
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          KokonutUI ships this as <code className="text-neutral-300 bg-white/5 px-1.5 py-0.5 rounded text-xs">attract-button</code> in
          the registry. Same component: a magnet-themed button that attracts
          floating particles on hover using spring physics.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            spring physics
          </span>
        </div>
      </div>

      {/* Default */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-16 flex items-center justify-center">
            <AttractButton />
          </div>
        </section>
      </div>

      {/* Dense particles */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Dense Particles (24)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-16 flex items-center justify-center">
            <AttractButton particleCount={24} />
          </div>
        </section>
      </div>

      {/* Minimal */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Minimal (6 Particles)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-16 flex items-center justify-center">
            <AttractButton particleCount={6} />
          </div>
        </section>
      </div>
    </div>
  );
}
