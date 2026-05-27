"use client";

import ClickSpark from "@/components/ClickSpark";
import { BackLink } from "@/components/back-link";

export default function ClickSparkPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            ClickSpark
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Canvas-based spark burst on click. Lightweight, no animation
            runtime needed.
          </p>
        </div>

        <div className="space-y-16">
          {/* Default white sparks */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Default (white, 8 sparks)
            </h2>
            <ClickSpark sparkColor="#fff" sparkCount={8} sparkRadius={15} sparkSize={10} duration={400}>
              <div className="flex items-center justify-center min-h-[300px] rounded-xl border border-white/[0.06] bg-white/[0.02] cursor-pointer select-none">
                <p className="text-xl text-neutral-400">Click anywhere in this area</p>
              </div>
            </ClickSpark>
          </section>

          {/* Colored sparks */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Colored (12 sparks, larger radius)
            </h2>
            <ClickSpark sparkColor="#FF9FFC" sparkCount={12} sparkRadius={25} sparkSize={14} duration={600}>
              <div className="flex items-center justify-center min-h-[300px] rounded-xl border border-purple-500/20 bg-purple-500/[0.03] cursor-pointer select-none">
                <p className="text-xl text-neutral-400">Click for purple sparks</p>
              </div>
            </ClickSpark>
          </section>

          {/* Fast, many sparks */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Fast burst (16 sparks, short duration)
            </h2>
            <ClickSpark sparkColor="#3A29FF" sparkCount={16} sparkRadius={20} sparkSize={8} duration={250} extraScale={1.5}>
              <div className="flex items-center justify-center min-h-[300px] rounded-xl border border-blue-500/20 bg-blue-500/[0.03] cursor-pointer select-none">
                <p className="text-xl text-neutral-400">Click for blue burst</p>
              </div>
            </ClickSpark>
          </section>
        </div>
      </div>
    </div>
  );
}
