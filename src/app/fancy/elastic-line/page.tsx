"use client";

import ElasticLine from "@/components/fancy/physics/elastic-line";
import { BackLink } from "@/components/back-link";

export default function ElasticLinePage() {
  return (
    <div className="min-h-screen w-full bg-[#09090b] flex flex-col">
      <BackLink href="/fancy" label="Fancy" />
      <div className="pt-16 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
          Elastic Line
        </h1>
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
          Fancy Components
        </p>
      </div>

      <div className="flex-1 px-6 md:px-16 lg:px-24 xl:px-32 pb-24">
        {/* Primary: horizontal, default spring */}
        <div className="mb-20">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
            Horizontal / default spring (stiffness 300, damping 5)
          </p>
          <p className="text-sm text-white/40 mb-4">
            Move your cursor across the line. It grabs when you get close,
            stretches as you pull, and snaps back with a springy bounce.
          </p>
          <div className="h-32 w-full text-white/70">
            <ElasticLine />
          </div>
        </div>

        {/* Vertical orientation */}
        <div className="mb-20">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
            Vertical / stiffness 200, damping 8
          </p>
          <div className="h-[400px] w-full flex items-center justify-center">
            <div className="h-full w-48 text-white/70">
              <ElasticLine
                isVertical
                transition={{ type: "spring", stiffness: 200, damping: 8 }}
              />
            </div>
          </div>
        </div>

        {/* Thick stroke, loose spring */}
        <div className="mb-20">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
            Thick stroke (3px) / loose spring (stiffness 120, damping 3)
          </p>
          <div className="h-32 w-full text-white/50">
            <ElasticLine
              strokeWidth={3}
              transition={{ type: "spring", stiffness: 120, damping: 3 }}
            />
          </div>
        </div>

        {/* Tight, responsive line */}
        <div className="mb-20">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
            Tight spring (stiffness 500, damping 15) / grab threshold 8
          </p>
          <div className="h-32 w-full text-white/70">
            <ElasticLine
              grabThreshold={8}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            />
          </div>
        </div>

        {/* Colored lines composition */}
        <div className="mb-20">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
            Stacked lines with varying damping
          </p>
          <div className="flex flex-col gap-0">
            <div className="h-24 w-full text-blue-400/60">
              <ElasticLine
                strokeWidth={1.5}
                transition={{ type: "spring", stiffness: 300, damping: 3 }}
              />
            </div>
            <div className="h-24 w-full text-purple-400/60">
              <ElasticLine
                strokeWidth={1.5}
                transition={{ type: "spring", stiffness: 300, damping: 6 }}
              />
            </div>
            <div className="h-24 w-full text-emerald-400/60">
              <ElasticLine
                strokeWidth={1.5}
                transition={{ type: "spring", stiffness: 300, damping: 12 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
