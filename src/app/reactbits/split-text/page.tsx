"use client";

import SplitText from "@/components/SplitText";
import { BackLink } from "@/components/back-link";

export default function SplitTextPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            SplitText
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Splits text into characters, words, or lines with staggered
            entrance animation on scroll. Powered by GSAP SplitText.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Characters (default)
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <SplitText
                text="Character entrance"
                className="text-4xl font-bold"
                splitType="chars"
                delay={30}
              />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">splitType=&quot;chars&quot;</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">delay=30</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Words
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <SplitText
                text="Each word animates in separately"
                className="text-3xl font-bold"
                splitType="words"
                delay={100}
                from={{ opacity: 0, y: 60 }}
                to={{ opacity: 1, y: 0 }}
              />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">splitType=&quot;words&quot;</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">delay=100</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Custom from/to (scale + rotation)
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <SplitText
                text="DRAMATIC ENTRANCE"
                className="text-5xl font-bold"
                splitType="chars"
                delay={40}
                duration={1.5}
                from={{ opacity: 0, scale: 0.5, rotationZ: -10 }}
                to={{ opacity: 1, scale: 1, rotationZ: 0 }}
              />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">from: scale 0.5, rotationZ -10</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">duration=1.5</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
