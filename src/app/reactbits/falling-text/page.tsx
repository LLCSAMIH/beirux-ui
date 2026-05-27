"use client";

export const dynamic = "force-dynamic";

import FallingText from "@/components/FallingText";
import { BackLink } from "@/components/back-link";

export default function FallingTextPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            FallingText
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Words fall with physics-based gravity using Matter.js.
            Click or hover to interact with the fallen words.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Default
            </h2>
            <div className="relative min-h-[400px] rounded-xl border border-white/[0.06] bg-[#18181b] overflow-hidden">
              <FallingText
                text={`Gravity pulls these words down one by one. Each word becomes a physics body that collides and stacks.`}
              />
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Custom trigger (hover)
            </h2>
            <div className="relative min-h-[400px] rounded-xl border border-white/[0.06] bg-[#18181b] overflow-hidden">
              <FallingText
                text={`Hover over the container to trigger the falling animation with Matter.js physics.`}
                trigger="hover"
              />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">trigger=&quot;hover&quot;</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
