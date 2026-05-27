"use client";

import dynamic from "next/dynamic";

import { BackLink } from "@/components/back-link";

const PixelTransition = dynamic(
  () => import("@/components/PixelTransition"),
  { ssr: false }
);

export default function PixelTransitionPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Pixel Transition
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            GSAP-powered pixel dissolve that reveals a second layer on hover.
            Configurable grid size, colors, and animation speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-items-center">
          {/* Demo 1: Default */}
          <div className="flex flex-col items-center gap-4">
            <PixelTransition
              firstContent={
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-600 to-fuchsia-500">
                  <span className="text-white text-xl font-bold">Hover me</span>
                </div>
              }
              secondContent={
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-emerald-500">
                  <span className="text-white text-xl font-bold">Revealed</span>
                </div>
              }
              gridSize={7}
              pixelColor="#fff"
              animationStepDuration={0.3}
              aspectRatio="100%"
            />
            <p className="text-xs text-neutral-500 text-center">
              Default (7x7 grid, white pixels)
            </p>
          </div>

          {/* Demo 2: Fine grid */}
          <div className="flex flex-col items-center gap-4">
            <PixelTransition
              firstContent={
                <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a2e]">
                  <span className="text-white/70 text-lg font-medium">Before</span>
                </div>
              }
              secondContent={
                <div className="absolute inset-0 flex items-center justify-center bg-[#e94560]">
                  <span className="text-white text-lg font-medium">After</span>
                </div>
              }
              gridSize={12}
              pixelColor="#e94560"
              animationStepDuration={0.5}
              aspectRatio="100%"
            />
            <p className="text-xs text-neutral-500 text-center">
              Fine grid (12x12, colored pixels, slower)
            </p>
          </div>

          {/* Demo 3: Once-only */}
          <div className="flex flex-col items-center gap-4">
            <PixelTransition
              firstContent={
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  <span className="text-white/40 text-lg font-medium">Peek once</span>
                </div>
              }
              secondContent={
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-amber-400 to-orange-600">
                  <span className="text-white text-lg font-bold">Locked</span>
                </div>
              }
              gridSize={5}
              pixelColor="#000"
              animationStepDuration={0.2}
              once
              aspectRatio="100%"
            />
            <p className="text-xs text-neutral-500 text-center">
              One-shot (5x5 grid, irreversible)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
