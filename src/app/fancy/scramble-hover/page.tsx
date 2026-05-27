"use client";

export const dynamic = "force-dynamic";

import ScrambleHover from "@/components/fancy/text/scramble-hover";
import { BackLink } from "@/components/back-link";

export default function ScrambleHoverPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Scramble Hover
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Text scrambles on hover, then resolves back to the original.
            Supports sequential reveal, direction control, and custom character sets.
          </p>
        </div>

        <div className="space-y-24">
          {/* Demo 1: Default random scramble */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Default random / 50ms / 10 iterations
            </p>
            <div className="flex flex-wrap gap-8 justify-center">
              <ScrambleHover
                text="BEIRUX"
                className="text-4xl md:text-6xl font-bold text-white/90"
                scrambledClassName="text-white/30"
              />
              <ScrambleHover
                text="Digital"
                className="text-4xl md:text-6xl font-bold text-emerald-400/80"
                scrambledClassName="text-emerald-400/30"
              />
              <ScrambleHover
                text="Agency"
                className="text-4xl md:text-6xl font-bold text-purple-400/80"
                scrambledClassName="text-purple-400/30"
              />
            </div>
          </section>

          {/* Demo 2: Sequential reveal from start */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Sequential / reveal from start / 40ms speed
            </p>
            <div className="flex justify-center">
              <ScrambleHover
                text="Hover to decode this message"
                sequential
                revealDirection="start"
                scrambleSpeed={40}
                className="text-2xl md:text-3xl text-white/80"
                scrambledClassName="text-amber-400/50"
              />
            </div>
          </section>

          {/* Demo 3: Sequential from center, original chars only */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Sequential / center reveal / original chars only
            </p>
            <div className="flex justify-center">
              <ScrambleHover
                text="CRAFT MEETS CODE"
                sequential
                revealDirection="center"
                useOriginalCharsOnly
                scrambleSpeed={35}
                className="text-3xl md:text-5xl font-semibold tracking-[0.2em] text-rose-400/80"
                scrambledClassName="text-rose-400/30"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
