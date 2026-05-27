"use client";

export const dynamic = "force-dynamic";

import FadeContent from "@/components/FadeContent";
import { BackLink } from "@/components/back-link";

export default function FadeContentPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            FadeContent
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Scroll-triggered fade-in with optional blur. Uses GSAP
            ScrollTrigger. Supports delayed disappearance.
          </p>
        </div>

        <div className="space-y-48">
          {/* Simple fade */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Simple fade
            </h2>
            <FadeContent duration={1} blur={false}>
              <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <p className="text-2xl font-medium text-white/80">
                  Fades in on scroll
                </p>
              </div>
            </FadeContent>
          </section>

          {/* Fade with blur */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Fade + blur
            </h2>
            <FadeContent duration={1.2} blur>
              <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <p className="text-2xl font-medium text-white/80">
                  Blurs in from nothing
                </p>
              </div>
            </FadeContent>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">blur=true</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">duration=1.2</span>
            </div>
          </section>

          {/* Delayed */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Delayed entrance (0.5s)
            </h2>
            <FadeContent duration={0.8} blur delay={500}>
              <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <p className="text-2xl font-medium text-white/80">
                  Appears after a short delay
                </p>
              </div>
            </FadeContent>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">delay=500</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">blur=true</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
