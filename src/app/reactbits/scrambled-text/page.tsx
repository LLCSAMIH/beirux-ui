"use client";

export const dynamic = "force-dynamic";

import ScrambledText from "@/components/ScrambledText";
import { BackLink } from "@/components/back-link";

export default function ScrambledTextPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            ScrambledText
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Detects cursor proximity and scrambles nearby characters using
            GSAP ScrambleTextPlugin. Move your mouse over the text.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Default (move cursor over text)
            </h2>
            <div className="flex items-center justify-center min-h-[300px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <ScrambledText radius={100} duration={1.2} speed={0.5}>
                Move your cursor over this text to see the scramble
                effect in action. Each character near the pointer
                distorts and reforms.
              </ScrambledText>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">radius=100</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">duration=1.2</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Wide radius, custom chars
            </h2>
            <div className="flex items-center justify-center min-h-[300px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <ScrambledText radius={200} duration={0.8} speed={1} scrambleChars="01">
                Binary scramble with a wider detection radius. The
                distortion zone is 200px around your cursor. Characters
                resolve to zeros and ones before settling.
              </ScrambledText>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">radius=200</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">scrambleChars=&quot;01&quot;</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
