"use client";

export const dynamic = "force-dynamic";

import TrueFocus from "@/components/TrueFocus";
import { BackLink } from "@/components/back-link";

export default function TrueFocusPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            TrueFocus
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Applies dynamic blur and focus brackets over a series of words,
            cycling automatically or on hover. Powered by Motion.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Auto cycle (default)
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <TrueFocus
                sentence="True Focus Effect"
                borderColor="#5227FF"
                glowColor="rgba(82, 39, 255, 0.6)"
              />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">borderColor=&quot;#5227FF&quot;</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Manual mode (hover to focus)
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <TrueFocus
                sentence="Hover Each Word"
                manualMode={true}
                blurAmount={8}
                borderColor="#FF3232"
                glowColor="rgba(255, 50, 50, 0.6)"
              />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">manualMode=true</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">blurAmount=8</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Fast cycle, subtle blur
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <TrueFocus
                sentence="Design Develop Deploy Ship"
                blurAmount={3}
                animationDuration={0.3}
                pauseBetweenAnimations={0.5}
                borderColor="#00FF87"
                glowColor="rgba(0, 255, 135, 0.6)"
              />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">animationDuration=0.3</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">pauseBetweenAnimations=0.5</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
