"use client";

import GradualBlur from "@/components/GradualBlur";
import { BackLink } from "@/components/back-link";

export default function GradualBlurPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            GradualBlur
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Progressive backdrop-blur layers that fade content out at the
            edges. Supports presets, responsive sizing, and scroll animation.
          </p>
        </div>

        <div className="space-y-16">
          {/* Bottom blur (default) */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Bottom blur (scrollable content)
            </h2>
            <div className="relative h-[400px] overflow-y-auto rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <div className="p-8 space-y-4">
                {Array.from({ length: 20 }, (_, i) => (
                  <p key={i} className="text-neutral-400 text-sm">
                    Line {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum at ligula quis nunc scelerisque hendrerit a eu sapien.
                  </p>
                ))}
              </div>
              <GradualBlur position="bottom" strength={3} height="6rem" />
            </div>
          </section>

          {/* Top blur */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Top blur (intense preset)
            </h2>
            <div className="relative h-[400px] overflow-y-auto rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <div className="p-8 space-y-4">
                {Array.from({ length: 20 }, (_, i) => (
                  <p key={i} className="text-neutral-400 text-sm">
                    Line {i + 1}: Sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam.
                  </p>
                ))}
              </div>
              <GradualBlur preset="intense" position="top" />
            </div>
          </section>

          {/* Both edges */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Both edges (stacked)
            </h2>
            <div className="relative h-[400px] overflow-y-auto rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <div className="p-8 space-y-4">
                {Array.from({ length: 20 }, (_, i) => (
                  <p key={i} className="text-neutral-400 text-sm">
                    Line {i + 1}: Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                ))}
              </div>
              <GradualBlur preset="smooth" position="top" />
              <GradualBlur preset="smooth" position="bottom" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
