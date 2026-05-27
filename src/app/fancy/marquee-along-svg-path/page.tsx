"use client";

export const dynamic = "force-dynamic";

import MarqueeAlongSvgPath from "@/components/fancy/blocks/marquee-along-svg-path";
import { BackLink } from "@/components/back-link";

const circlePath = "M 50 10 A 40 40 0 1 1 49.99 10";
const wavePath =
  "M 0 50 Q 25 20, 50 50 Q 75 80, 100 50";
const figurePath =
  "M 10 80 C 10 10, 90 10, 90 80 C 90 100, 10 100, 10 80";

export default function MarqueeAlongSvgPathPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Marquee Along SVG Path
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Items follow any SVG path in a continuous marquee loop.
            Supports scroll velocity, drag, and hover slowdown.
          </p>
        </div>

        <div className="space-y-24">
          {/* Circle path */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Circular path (velocity 5)
            </p>
            <div className="h-[300px] relative">
              <MarqueeAlongSvgPath
                path={circlePath}
                viewBox="0 0 100 100"
                baseVelocity={5}
                repeat={6}
                showPath
                className="w-full h-full text-white/10"
              >
                <div className="px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-medium whitespace-nowrap">
                  Orbiting
                </div>
              </MarqueeAlongSvgPath>
            </div>
          </section>

          {/* Wave path */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Wave path (slow, hover to slow down)
            </p>
            <div className="h-[200px] relative">
              <MarqueeAlongSvgPath
                path={wavePath}
                viewBox="0 0 100 100"
                baseVelocity={3}
                repeat={4}
                showPath
                slowdownOnHover
                slowDownFactor={0.1}
                className="w-full h-full text-white/10"
              >
                <span className="text-2xl">✦</span>
                <span className="text-2xl">◆</span>
                <span className="text-2xl">●</span>
              </MarqueeAlongSvgPath>
            </div>
          </section>

          {/* Figure-8 path */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Custom closed path (velocity 8, reverse)
            </p>
            <div className="h-[300px] relative">
              <MarqueeAlongSvgPath
                path={figurePath}
                viewBox="0 0 100 110"
                baseVelocity={8}
                direction="reverse"
                repeat={5}
                showPath
                className="w-full h-full text-white/10"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/40 border border-emerald-500/40" />
                <div className="w-4 h-4 rounded-full bg-purple-500/40 border border-purple-500/40" />
              </MarqueeAlongSvgPath>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
