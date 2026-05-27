"use client";

import ChromaGrid from "@/components/ChromaGrid";
import { BackLink } from "@/components/back-link";

export default function ChromaGridPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Chroma Grid
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Profile card grid with GSAP-driven cursor proximity lighting.
            Move your mouse over the cards to see the chromatic reveal.
          </p>
        </div>

        <div className="flex flex-col items-center gap-16">
          {/* Default */}
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="w-full rounded-xl border border-white/10 overflow-hidden p-4">
              <ChromaGrid />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Default team grid (radius 300, damping 0.45)
            </p>
          </div>

          {/* Tighter radius */}
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="w-full rounded-xl border border-white/10 overflow-hidden p-4">
              <ChromaGrid radius={150} damping={0.3} fadeOut={0.4} />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Tighter spotlight (radius 150, faster damping)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
