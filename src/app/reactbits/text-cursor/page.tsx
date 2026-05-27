"use client";

import TextCursor from "@/components/TextCursor";
import { BackLink } from "@/components/back-link";

export default function TextCursorPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            TextCursor
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Any text or emoji follows your cursor, leaving a fading trail
            of copies. Powered by Motion.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Default (emoji trail)
            </h2>
            <div className="relative min-h-[400px] rounded-xl border border-white/[0.06] bg-[#18181b] overflow-hidden cursor-none">
              <TextCursor text="*" spacing={80} maxPoints={8} />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="text-neutral-600 text-lg">Move your mouse here</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Custom text, no float
            </h2>
            <div className="relative min-h-[400px] rounded-xl border border-white/[0.06] bg-[#18181b] overflow-hidden cursor-none">
              <TextCursor text="BEIRUX" spacing={120} randomFloat={false} maxPoints={4} />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="text-neutral-600 text-lg">Move your mouse here</p>
              </div>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">text=&quot;BEIRUX&quot;</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">randomFloat=false</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">maxPoints=4</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
