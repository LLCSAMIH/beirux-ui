"use client";

import { useRef } from "react";
import VariableProximity from "@/components/VariableProximity";
import { BackLink } from "@/components/back-link";

export default function VariableProximityPage() {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const containerRef3 = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            VariableProximity
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Letter styling (weight, width) changes continuously based on
            pointer distance. Uses variable font axes. Powered by Motion.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Default (weight axis)
            </h2>
            <div
              ref={containerRef1}
              className="flex items-center justify-center min-h-[250px] rounded-xl border border-white/[0.06] bg-[#18181b]"
            >
              <VariableProximity
                label="Move your cursor"
                fromFontVariationSettings="'wght' 300"
                toFontVariationSettings="'wght' 900"
                containerRef={containerRef1}
                radius={200}
                className="text-5xl font-bold"
              />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">wght 300 to 900</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">radius=200</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Weight + width axes
            </h2>
            <div
              ref={containerRef2}
              className="flex items-center justify-center min-h-[250px] rounded-xl border border-white/[0.06] bg-[#18181b]"
            >
              <VariableProximity
                label="Proximity Effect"
                fromFontVariationSettings="'wght' 200, 'wdth' 75"
                toFontVariationSettings="'wght' 900, 'wdth' 125"
                containerRef={containerRef2}
                radius={250}
                falloff="exponential"
                className="text-5xl"
              />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">wght + wdth axes</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">falloff=&quot;exponential&quot;</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Gaussian falloff, tight radius
            </h2>
            <div
              ref={containerRef3}
              className="flex items-center justify-center min-h-[250px] rounded-xl border border-white/[0.06] bg-[#18181b]"
            >
              <VariableProximity
                label="Tight Focus"
                fromFontVariationSettings="'wght' 100"
                toFontVariationSettings="'wght' 900"
                containerRef={containerRef3}
                radius={100}
                falloff="gaussian"
                className="text-6xl"
              />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">radius=100</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">falloff=&quot;gaussian&quot;</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
