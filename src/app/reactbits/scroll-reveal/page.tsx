"use client";

export const dynamic = "force-dynamic";

import ScrollReveal from "@/components/ScrollReveal";
import { BackLink } from "@/components/back-link";

export default function ScrollRevealPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            ScrollReveal
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Words unblur and fade in as you scroll, with subtle rotation.
            Powered by GSAP ScrollTrigger.
          </p>
        </div>

        <div className="space-y-24">
          <div className="h-[30vh]" />

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Default (blur + rotation)
            </h2>
            <div className="rounded-xl border border-white/[0.06] bg-[#18181b] p-10">
              <ScrollReveal>
                Scroll down to reveal this text word by word with a soft blur and rotation effect
              </ScrollReveal>
            </div>
          </section>

          <div className="h-[20vh]" />

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              No blur (opacity only)
            </h2>
            <div className="rounded-xl border border-white/[0.06] bg-[#18181b] p-10">
              <ScrollReveal enableBlur={false} baseRotation={0}>
                This variant uses only opacity fading without blur or rotation for a cleaner reveal
              </ScrollReveal>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">enableBlur=false</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">baseRotation=0</span>
            </div>
          </section>

          <div className="h-[20vh]" />

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Heavy blur
            </h2>
            <div className="rounded-xl border border-white/[0.06] bg-[#18181b] p-10">
              <ScrollReveal blurStrength={10} baseRotation={5}>
                Heavy blur strength creates a more dramatic reveal effect as you scroll through the content
              </ScrollReveal>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">blurStrength=10</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">baseRotation=5</span>
            </div>
          </section>

          <div className="h-[30vh]" />
        </div>
      </div>
    </div>
  );
}
