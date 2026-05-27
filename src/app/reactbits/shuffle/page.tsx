"use client";

export const dynamic = "force-dynamic";

import Shuffle from "@/components/Shuffle";
import { BackLink } from "@/components/back-link";

export default function ShufflePage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Shuffle
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Animated text reveal where characters shuffle through a slot-machine
            roll before settling. Powered by GSAP SplitText.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Default (scroll to trigger)
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <Shuffle text="SHUFFLE" className="text-4xl" />
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Direction: up, with color transition
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <Shuffle
                text="UPWARD"
                shuffleDirection="up"
                colorFrom="#666"
                colorTo="#fff"
                className="text-4xl"
              />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">shuffleDirection=&quot;up&quot;</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">colorFrom/colorTo</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Scramble charset + loop
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <Shuffle
                text="LOOPING"
                scrambleCharset="!@#$%"
                loop={true}
                loopDelay={1}
                className="text-4xl"
              />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">scrambleCharset=&quot;!@#$%&quot;</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">loop=true</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
