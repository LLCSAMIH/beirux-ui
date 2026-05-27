"use client";

export const dynamic = "force-dynamic";

import TextPressure from "@/components/TextPressure";
import { BackLink } from "@/components/back-link";

export default function TextPressurePage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            TextPressure
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Variable font characters scale and warp interactively based on
            pointer proximity. Uses font-variation-settings for width, weight,
            and italic axes. No animation library.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Default (move cursor near text)
            </h2>
            <div className="min-h-[300px] rounded-xl border border-white/[0.06] bg-[#18181b] overflow-hidden">
              <TextPressure text="Pressure" />
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Weight + width only (no italic)
            </h2>
            <div className="min-h-[300px] rounded-xl border border-white/[0.06] bg-[#18181b] overflow-hidden">
              <TextPressure text="BOLD" italic={false} textColor="#5227FF" />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">italic=false</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">textColor=&quot;#5227FF&quot;</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              With stroke
            </h2>
            <div className="min-h-[300px] rounded-xl border border-white/[0.06] bg-[#18181b] overflow-hidden">
              <TextPressure
                text="STROKE"
                stroke={true}
                strokeColor="#FF3232"
                strokeWidth={3}
                textColor="#FFFFFF"
              />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">stroke=true</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">strokeColor=&quot;#FF3232&quot;</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
