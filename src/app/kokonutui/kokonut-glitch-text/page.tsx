"use client";

export const dynamic = "force-dynamic";

import GlitchText from "@/components/kokonutui/glitch-text";
import { BackLink } from "@/components/back-link";

export default function GlitchTextPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Glitch Text
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          Animated glitch effect with configurable intensity, color
          schemes, and layered pseudo-element offsets. Supports rainbow,
          blue, purple, cyan, pink, orange, and gradient-orange palettes.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            glitch effect
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            color schemes
          </span>
        </div>
      </div>

      {/* Demo: Default (gradient-orange, medium) */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default (gradient-orange, medium intensity)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-[#18181b] p-8 flex items-center justify-center">
            <GlitchText text="Glitch Text" />
          </div>
        </section>
      </div>

      {/* Demo: Cyan, Heavy */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Cyan, Heavy Intensity
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-[#18181b] p-8 flex items-center justify-center">
            <GlitchText
              text="SYSTEM ERROR"
              color="cyan"
              glitchIntensity="heavy"
              size="lg"
            />
          </div>
        </section>
      </div>

      {/* Demo: Rainbow, Extreme */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Rainbow, Extreme Intensity
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-[#18181b] p-8 flex items-center justify-center">
            <GlitchText
              text="BEIRUX"
              color="rainbow"
              glitchIntensity="extreme"
              size="xl"
              fontWeight={900}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
