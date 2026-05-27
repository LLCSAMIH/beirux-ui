"use client";

export const dynamic = "force-dynamic";

import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import { BackLink } from "@/components/back-link";

export default function LetterSwapPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Letter Swap Forward
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Hover over the text to trigger a forward letter-swap animation.
            Each letter slides out and a duplicate slides in, with configurable
            stagger, direction, and spring physics.
          </p>
        </div>

        <div className="space-y-16">
          {/* Default */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Default (spring 0.7s, stagger 0.03s, reverse)
            </p>
            <div className="flex justify-center">
              <LetterSwapForward
                label="Hover me"
                className="text-5xl md:text-7xl font-bold text-white cursor-pointer"
              />
            </div>
          </section>

          {/* Slow stagger, forward direction */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Slow stagger (0.08s) / forward direction (reverse off)
            </p>
            <div className="flex justify-center">
              <LetterSwapForward
                label="BEIRUX"
                reverse={false}
                staggerDuration={0.08}
                className="text-5xl md:text-7xl font-bold text-emerald-400 cursor-pointer"
              />
            </div>
          </section>

          {/* Line swap (zero stagger) + center origin */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Line swap (stagger 0) / stagger from center
            </p>
            <div className="flex justify-center">
              <LetterSwapForward
                label="All at once"
                staggerDuration={0}
                staggerFrom="center"
                className="text-5xl md:text-7xl font-bold text-purple-400 cursor-pointer"
              />
            </div>
          </section>

          {/* Stagger from last */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Stagger from last / bouncy spring (duration 1.2s)
            </p>
            <div className="flex justify-center">
              <LetterSwapForward
                label="Reverse wave"
                staggerFrom="last"
                staggerDuration={0.05}
                transition={{ type: "spring", duration: 1.2 }}
                className="text-5xl md:text-7xl font-bold text-amber-400 cursor-pointer"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
