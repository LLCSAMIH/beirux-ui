"use client";

export const dynamic = "force-dynamic";

import Magnet from "@/components/Magnet";
import { BackLink } from "@/components/back-link";

export default function MagnetPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Magnet
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Elements that follow the cursor when it enters their proximity
            zone. Pure CSS transforms, no physics engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center justify-items-center">
          {/* Default magnet */}
          <div className="flex flex-col items-center gap-6">
            <Magnet padding={100} magnetStrength={2}>
              <button className="px-6 py-3 rounded-xl bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors">
                Hover near me
              </button>
            </Magnet>
            <p className="text-xs text-neutral-500 text-center">
              Default (padding 100, strength 2)
            </p>
          </div>

          {/* Strong magnet with large padding */}
          <div className="flex flex-col items-center gap-6">
            <Magnet padding={150} magnetStrength={1}>
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/25">
                <span className="text-white text-2xl">&#x2731;</span>
              </div>
            </Magnet>
            <p className="text-xs text-neutral-500 text-center">
              Strong pull (padding 150, strength 1)
            </p>
          </div>

          {/* Subtle magnet, disabled toggle demo */}
          <div className="flex flex-col items-center gap-6">
            <Magnet
              padding={80}
              magnetStrength={4}
              activeTransition="transform 0.15s ease-out"
              inactiveTransition="transform 0.8s ease-in-out"
            >
              <div className="px-5 py-2.5 rounded-lg border border-white/20 text-white text-sm font-medium backdrop-blur-sm bg-white/5">
                Gentle drift
              </div>
            </Magnet>
            <p className="text-xs text-neutral-500 text-center">
              Gentle (strength 4, snappy in, slow out)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
