"use client";

export const dynamic = "force-dynamic";

import MagnetLines from "@/components/MagnetLines";
import { BackLink } from "@/components/back-link";

export default function MagnetLinesPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Magnet Lines
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            A grid of lines that orient toward your cursor. Pure CSS transforms,
            no animation engine. Move your mouse across the grids.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-items-center">
          {/* Demo 1: Default white lines */}
          <div className="flex flex-col items-center gap-4">
            <MagnetLines
              rows={9}
              columns={9}
              containerSize="45vmin"
              lineColor="#efefef"
              lineWidth="1vmin"
              lineHeight="5vmin"
              baseAngle={-10}
            />
            <p className="text-xs text-neutral-500 text-center">
              Default (9x9, white lines)
            </p>
          </div>

          {/* Demo 2: Colored lines, larger grid */}
          <div className="flex flex-col items-center gap-4">
            <MagnetLines
              rows={12}
              columns={12}
              containerSize="45vmin"
              lineColor="#7C3AED"
              lineWidth="0.6vmin"
              lineHeight="4vmin"
              baseAngle={0}
            />
            <p className="text-xs text-neutral-500 text-center">
              Purple variant (12x12, thinner lines)
            </p>
          </div>

          {/* Demo 3: Sparse warm lines */}
          <div className="flex flex-col items-center gap-4 md:col-span-2">
            <MagnetLines
              rows={6}
              columns={16}
              containerSize="70vmin"
              lineColor="#F97316"
              lineWidth="1.2vmin"
              lineHeight="6vmin"
              baseAngle={45}
            />
            <p className="text-xs text-neutral-500 text-center">
              Wide orange variant (6x16, angled at 45 degrees)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
