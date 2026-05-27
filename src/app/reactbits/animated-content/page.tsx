"use client";

import AnimatedContent from "@/components/AnimatedContent";
import { BackLink } from "@/components/back-link";

export default function AnimatedContentPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            AnimatedContent
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Scroll-triggered entrance animation powered by GSAP ScrollTrigger.
            Supports vertical/horizontal direction, scale, opacity, and
            configurable easing.
          </p>
        </div>

        <div className="space-y-48">
          {/* Default: slide up */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Default (slide up)
            </h2>
            <AnimatedContent distance={100} direction="vertical" duration={0.8}>
              <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <p className="text-2xl font-medium text-white/80">
                  Slides up into view
                </p>
              </div>
            </AnimatedContent>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">distance=100</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">direction=&quot;vertical&quot;</span>
            </div>
          </section>

          {/* Horizontal slide */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Horizontal slide
            </h2>
            <AnimatedContent distance={150} direction="horizontal" duration={1.0}>
              <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <p className="text-2xl font-medium text-white/80">
                  Slides in from the side
                </p>
              </div>
            </AnimatedContent>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">distance=150</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">direction=&quot;horizontal&quot;</span>
            </div>
          </section>

          {/* With scale */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              With scale + reverse
            </h2>
            <AnimatedContent distance={80} direction="vertical" reverse scale={0.8} duration={1.2} ease="power4.out">
              <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <p className="text-2xl font-medium text-white/80">
                  Scales up from 0.8
                </p>
              </div>
            </AnimatedContent>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">scale=0.8</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">reverse</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">ease=&quot;power4.out&quot;</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
