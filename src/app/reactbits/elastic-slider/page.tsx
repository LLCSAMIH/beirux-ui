"use client";

export const dynamic = "force-dynamic";

import ElasticSlider from "@/components/ElasticSlider";
import { BackLink } from "@/components/back-link";

export default function ElasticSliderPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Elastic Slider
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Draggable range slider with elastic overshoot animation.
            Pull past the bounds and release to see it snap back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
          {/* Default */}
          <div className="flex flex-col items-center gap-6">
            <ElasticSlider />
            <p className="text-xs text-neutral-500 text-center">
              Default (0-100, starting at 50)
            </p>
          </div>

          {/* Stepped */}
          <div className="flex flex-col items-center gap-6">
            <ElasticSlider
              defaultValue={5}
              startingValue={0}
              maxValue={10}
              isStepped
              stepSize={1}
            />
            <p className="text-xs text-neutral-500 text-center">
              Stepped (0-10, step size 1)
            </p>
          </div>

          {/* Custom icons */}
          <div className="flex flex-col items-center gap-6">
            <ElasticSlider
              defaultValue={50}
              startingValue={0}
              maxValue={100}
              leftIcon={<span className="text-neutral-400 text-sm">0%</span>}
              rightIcon={<span className="text-neutral-400 text-sm">100%</span>}
            />
            <p className="text-xs text-neutral-500 text-center">
              Custom label icons
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
