"use client";

export const dynamic = "force-dynamic";

import GradientText from "@/components/GradientText";
import { BackLink } from "@/components/back-link";

export default function GradientTextPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            <GradientText colors={["#5227FF", "#FF94B4", "#FF3232"]} animationSpeed={4}>
              GradientText
            </GradientText>
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto mt-8">
            Animated gradient sweep across text with speed, direction, and
            color control. Powered by Motion.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Default (horizontal)
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <span className="text-5xl font-bold">
                <GradientText colors={["#5227FF", "#FF9FFC", "#B497CF"]} animationSpeed={6}>
                  GRADIENT
                </GradientText>
              </span>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">animationSpeed=6</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">direction=&quot;horizontal&quot;</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              With border
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <span className="text-3xl font-bold">
                <GradientText
                  colors={["#FF3232", "#FF9FFC", "#5227FF"]}
                  animationSpeed={3}
                  showBorder={true}
                >
                  Bordered Gradient
                </GradientText>
              </span>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">showBorder=true</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">animationSpeed=3</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Diagonal, pause on hover
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <span className="text-5xl font-bold">
                <GradientText
                  colors={["#00FF87", "#60EFFF", "#0061FF"]}
                  animationSpeed={5}
                  direction="diagonal"
                  pauseOnHover={true}
                >
                  HOVER ME
                </GradientText>
              </span>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">direction=&quot;diagonal&quot;</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">pauseOnHover=true</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
