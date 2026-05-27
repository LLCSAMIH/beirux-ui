"use client";

export const dynamic = "force-dynamic";

import ScrollFloat from "@/components/ScrollFloat";
import { BackLink } from "@/components/back-link";

export default function ScrollFloatPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            ScrollFloat
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Characters float up with elastic scaling on scroll. Each letter
            animates independently via GSAP ScrollTrigger.
          </p>
        </div>

        <div className="space-y-24">
          <div className="h-[30vh]" />

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Default
            </h2>
            <div className="rounded-xl border border-white/[0.06] bg-[#18181b] p-10">
              <ScrollFloat>
                Scroll to reveal this text
              </ScrollFloat>
            </div>
          </section>

          <div className="h-[20vh]" />

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Custom ease and stagger
            </h2>
            <div className="rounded-xl border border-white/[0.06] bg-[#18181b] p-10">
              <ScrollFloat stagger={0.06} ease="power4.inOut(2)">
                Custom animation timing
              </ScrollFloat>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">stagger=0.06</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">ease=&quot;power4.inOut(2)&quot;</span>
            </div>
          </section>

          <div className="h-[30vh]" />
        </div>
      </div>
    </div>
  );
}
