"use client";

export const dynamic = "force-dynamic";

import CurvedLoop from "@/components/CurvedLoop";
import { BackLink } from "@/components/back-link";

export default function CurvedLoopPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            CurvedLoop
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Text loops along a curved SVG path, creating a marquee-like
            circular animation. Pure CSS/SVG, no animation library.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Default
            </h2>
            <div className="flex items-center justify-center min-h-[300px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <CurvedLoop marqueeText="BEIRUX DIGITAL AGENCY  ·  " />
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Slower, larger
            </h2>
            <div className="flex items-center justify-center min-h-[400px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <CurvedLoop marqueeText="CREATIVE  ·  CODE  ·  DESIGN  ·  " speed={0.3} />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">speed=0.3</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
