"use client";

import { BackLink } from "@/components/back-link";
import dynamic from "next/dynamic";

const MagicBento = dynamic(() => import("@/components/MagicBento"), {
  ssr: false,
});

export default function MagicBentoPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Magic Bento
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            GSAP-animated bento grid with spotlight cursor, star particles,
            border glow, and tilt effects. Hover the cards to see the magic.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {/* Default */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full">
              <MagicBento />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Default (all effects enabled)
            </p>
          </div>

          {/* Minimal */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full">
              <MagicBento
                enableStars={false}
                enableTilt={false}
                enableMagnetism={false}
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Spotlight + glow only (no stars, tilt, or magnetism)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
