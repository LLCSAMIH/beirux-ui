"use client";

import ScrambleIn from "@/components/fancy/text/scramble-in";
import { BackLink } from "@/components/back-link";

export default function ScrambleInPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Scramble In
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Text scrambles into view letter by letter, with a leading edge
            of randomized characters that resolve into the final text.
          </p>
        </div>

        <div className="space-y-24">
          {/* Demo 1: Default auto-start */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Auto start / 50ms speed / 2 scrambled letters
            </p>
            <div className="flex justify-center">
              <span className="text-3xl md:text-5xl font-semibold">
                <ScrambleIn
                  text="BEIRUX Digital Agency"
                  scrambleSpeed={50}
                  scrambledLetterCount={2}
                  className="text-white/90"
                  scrambledClassName="text-white/30"
                  autoStart
                />
              </span>
            </div>
          </section>

          {/* Demo 2: Faster, more scramble chars */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Fast (30ms) / 4 scrambled letters / numbers charset
            </p>
            <div className="flex justify-center">
              <span className="text-2xl md:text-4xl font-mono">
                <ScrambleIn
                  text="Performance-first architecture"
                  scrambleSpeed={30}
                  scrambledLetterCount={4}
                  characters="0123456789"
                  className="text-emerald-400/90"
                  scrambledClassName="text-emerald-400/30"
                  autoStart
                />
              </span>
            </div>
          </section>

          {/* Demo 3: Slow reveal, symbols */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Slow (80ms) / 3 scrambled letters / symbol charset
            </p>
            <div className="flex justify-center">
              <span className="text-3xl md:text-5xl font-bold tracking-wider uppercase">
                <ScrambleIn
                  text="CRAFT MEETS CODE"
                  scrambleSpeed={80}
                  scrambledLetterCount={3}
                  characters="!@#$%^&*<>{}[]|/\"
                  className="text-purple-300/90"
                  scrambledClassName="text-purple-300/20"
                  autoStart
                />
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
