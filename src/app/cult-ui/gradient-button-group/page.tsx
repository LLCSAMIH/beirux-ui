"use client";

import { GradientButtonGroup } from "@/components/ui/gradient-button-group";
import { BackLink } from "@/components/back-link";

export default function GradientButtonGroupPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Gradient Button Group
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          {/* Default */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Default (with Theme Toggle)
            </h2>
            <GradientButtonGroup />
          </section>

          {/* Description */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              About
            </h2>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 max-w-lg mx-auto">
              <p className="text-neutral-300 text-sm leading-relaxed">
                A premium navigation button group with layered depth effects, animated gradient
                ring accent on the active state, and an integrated theme toggle. The active
                button features a spinning conic gradient ring with a recessed well effect.
                Click any icon to switch, and use the sun/moon icon to toggle dark/light mode.
              </p>
            </div>
          </section>

          {/* Second instance */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Second Instance
            </h2>
            <GradientButtonGroup />
          </section>
        </div>
      </div>
    </div>
  );
}
