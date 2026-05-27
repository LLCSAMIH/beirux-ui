"use client";

import ParticleButton from "@/components/kokonutui/particle-button";
import { BackLink } from "@/components/back-link";

export default function ParticleButtonPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Particle Button
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A click-to-confirm button that bursts particles outward from its
          center on press. The button scales down on click while six particles
          animate radially with staggered delays.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            click effect
          </span>
        </div>
      </div>

      {/* Default */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default (Click Me)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <ParticleButton>Click Me</ParticleButton>
          </div>
        </section>
      </div>

      {/* Different labels */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Different Labels
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center gap-4">
            <ParticleButton>Confirm</ParticleButton>
            <ParticleButton>Submit</ParticleButton>
            <ParticleButton>Send</ParticleButton>
          </div>
        </section>
      </div>

      {/* Custom success duration */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Long Particle Duration (2s)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <ParticleButton successDuration={2000}>
              Celebrate
            </ParticleButton>
          </div>
        </section>
      </div>
    </div>
  );
}
