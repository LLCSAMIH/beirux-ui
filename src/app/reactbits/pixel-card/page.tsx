"use client";

export const dynamic = "force-dynamic";

import PixelCard from "@/components/PixelCard";
import { BackLink } from "@/components/back-link";

export default function PixelCardPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Pixel Card
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Canvas-based pixel shimmer effect on hover. Pixels radiate outward
            from center with configurable speed, gap, and color palettes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Default variant */}
          <div className="flex flex-col items-center gap-4">
            <PixelCard variant="default">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-white text-lg font-semibold tracking-wide">
                  Default
                </span>
              </div>
            </PixelCard>
            <p className="text-xs text-neutral-500 text-center">
              Default variant (slate tones, gap 5, speed 35)
            </p>
          </div>

          {/* Blue variant */}
          <div className="flex flex-col items-center gap-4">
            <PixelCard variant="blue">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-white text-lg font-semibold tracking-wide">
                  Blue
                </span>
              </div>
            </PixelCard>
            <p className="text-xs text-neutral-500 text-center">
              Blue variant (sky tones, gap 10, speed 25)
            </p>
          </div>

          {/* Pink variant */}
          <div className="flex flex-col items-center gap-4">
            <PixelCard variant="pink">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-white text-lg font-semibold tracking-wide">
                  Pink
                </span>
              </div>
            </PixelCard>
            <p className="text-xs text-neutral-500 text-center">
              Pink variant (rose tones, gap 6, speed 80, no focus)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
