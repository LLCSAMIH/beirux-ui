"use client";

import ElasticLine from "@/components/fancy/physics/elastic-line";
import { BackLink } from "@/components/back-link";

export default function ElasticLinePage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Elastic Line
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Move your cursor across the line. It grabs when close, stretches as
            you pull, and snaps back with spring physics.
          </p>
        </div>

        <div className="space-y-16">
          {/* Default spring */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-4">
              Default spring (stiffness 300, damping 5)
            </p>
            <div className="h-20 w-full text-white/70">
              <ElasticLine />
            </div>
          </section>

          {/* Thick stroke, loose spring */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-4">
              Thick (3px) / loose spring (stiffness 120, damping 3)
            </p>
            <div className="h-20 w-full text-white/50">
              <ElasticLine
                strokeWidth={3}
                transition={{ type: "spring", stiffness: 120, damping: 3 }}
              />
            </div>
          </section>

          {/* Tight spring */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-4">
              Tight spring (stiffness 500, damping 15) / grab threshold 8
            </p>
            <div className="h-20 w-full text-white/70">
              <ElasticLine
                grabThreshold={8}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              />
            </div>
          </section>

          {/* Stacked colored lines */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-4">
              Stacked lines with varying damping
            </p>
            <div className="flex flex-col">
              <div className="h-16 w-full text-blue-400/60">
                <ElasticLine
                  strokeWidth={1.5}
                  transition={{ type: "spring", stiffness: 300, damping: 3 }}
                />
              </div>
              <div className="h-16 w-full text-purple-400/60">
                <ElasticLine
                  strokeWidth={1.5}
                  transition={{ type: "spring", stiffness: 300, damping: 6 }}
                />
              </div>
              <div className="h-16 w-full text-emerald-400/60">
                <ElasticLine
                  strokeWidth={1.5}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                />
              </div>
            </div>
          </section>

          {/* Vertical */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-4">
              Vertical / stiffness 200, damping 8
            </p>
            <div className="h-[240px] w-full flex items-center justify-center">
              <div className="h-full w-32 text-white/70">
                <ElasticLine
                  isVertical
                  transition={{ type: "spring", stiffness: 200, damping: 8 }}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
