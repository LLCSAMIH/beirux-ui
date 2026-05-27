"use client";

import ASCIIText from "@/components/ASCIIText";
import { BackLink } from "@/components/back-link";

export default function ASCIITextPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            ASCIIText
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Renders text as 3D ASCII art using Three.js. Each character is
            converted to a dot-matrix style representation in WebGL.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Default
            </h2>
            <div className="flex items-center justify-center min-h-[400px] rounded-xl border border-white/[0.06] bg-[#18181b] overflow-hidden">
              <ASCIIText text="HELLO" />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">text=&quot;HELLO&quot;</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Custom text (shorter)
            </h2>
            <div className="flex items-center justify-center min-h-[400px] rounded-xl border border-white/[0.06] bg-[#18181b] overflow-hidden">
              <ASCIIText text="BEIRUX" enableWaves={false} />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">text=&quot;BEIRUX&quot;</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">enableWaves=false</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
