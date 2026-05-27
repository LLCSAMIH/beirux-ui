"use client";

import VerticalCutReveal from "@/components/fancy/text/vertical-cut-reveal";
import { BackLink } from "@/components/back-link";

export default function VerticalCutRevealPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Vertical Cut Reveal
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Text reveals with a vertical cut/clip animation. Split by
            words, characters, or lines with configurable stagger
            and spring physics.
          </p>
        </div>

        <div className="space-y-16">
          {/* Default: split by words */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Default (split by words, stagger 0.2s)
            </p>
            <div className="flex justify-center">
              <VerticalCutReveal
                containerClassName="text-4xl md:text-6xl font-bold text-white"
              >
                Welcome to BEIRUX
              </VerticalCutReveal>
            </div>
          </section>

          {/* Split by characters */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Split by characters / stagger from center
            </p>
            <div className="flex justify-center">
              <VerticalCutReveal
                splitBy="characters"
                staggerFrom="center"
                staggerDuration={0.04}
                containerClassName="text-4xl md:text-6xl font-bold text-emerald-400"
              >
                Character reveal
              </VerticalCutReveal>
            </div>
          </section>

          {/* Reverse direction, stagger from last */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Reverse direction / stagger from last / lines
            </p>
            <div className="flex justify-center">
              <VerticalCutReveal
                splitBy="lines"
                reverse
                staggerFrom="last"
                staggerDuration={0.3}
                containerClassName="text-4xl md:text-6xl font-bold text-amber-400"
              >
                Slide up from below
              </VerticalCutReveal>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
