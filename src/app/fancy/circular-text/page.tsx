"use client";

export const dynamic = "force-dynamic";

import CircularText from "@/components/CircularText";
import { BackLink } from "@/components/back-link";

export default function CircularTextPage() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="flex flex-col items-center justify-center gap-24 py-32 px-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Circular Text
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
        </div>

        {/* Demo 1: Default speed, speedUp on hover */}
        <div className="flex flex-col items-center gap-6">
          <CircularText
            text="BEIRUX * DIGITAL * AGENCY * "
            spinDuration={20}
            onHover="speedUp"
            className="text-white"
          />
          <p className="text-xs tracking-widest uppercase text-white/30">
            Hover to speed up
          </p>
        </div>

        {/* Demo 2: Slower spin, pause on hover */}
        <div className="flex flex-col items-center gap-6">
          <CircularText
            text="COMPONENTS * SHOWCASE * 2026 * "
            spinDuration={30}
            onHover="pause"
            className="text-emerald-400"
          />
          <p className="text-xs tracking-widest uppercase text-white/30">
            Hover to pause
          </p>
        </div>

        {/* Demo 3: Fast spin, goBonkers on hover */}
        <div className="flex flex-col items-center gap-6">
          <CircularText
            text="GO * BONKERS * ON * HOVER * "
            spinDuration={10}
            onHover="goBonkers"
            className="text-amber-400"
          />
          <p className="text-xs tracking-widest uppercase text-white/30">
            Hover to go bonkers
          </p>
        </div>
      </div>
    </div>
  );
}
