"use client";

export const dynamic = "force-dynamic";

import BorderGlow from "@/components/BorderGlow";
import { BackLink } from "@/components/back-link";

export default function BorderGlowPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Border Glow
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Edge-detecting glow follows the cursor around a container. Hover
            near the border to see the effect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Default warm glow */}
          <div className="flex flex-col items-center gap-4">
            <BorderGlow className="w-full h-48 flex items-center justify-center">
              <span className="text-white text-lg font-medium">
                Warm Glow
              </span>
            </BorderGlow>
            <p className="text-xs text-neutral-500 text-center">
              Default (amber glow)
            </p>
          </div>

          {/* Blue glow */}
          <div className="flex flex-col items-center gap-4">
            <BorderGlow
              glowColor="220 80 70"
              className="w-full h-48 flex items-center justify-center"
            >
              <span className="text-white text-lg font-medium">
                Blue Glow
              </span>
            </BorderGlow>
            <p className="text-xs text-neutral-500 text-center">
              Blue (hsl 220)
            </p>
          </div>

          {/* Animated rainbow */}
          <div className="flex flex-col items-center gap-4">
            <BorderGlow
              animated
              colors={["#ff0000", "#00ff00", "#0000ff"]}
              className="w-full h-48 flex items-center justify-center"
            >
              <span className="text-white text-lg font-medium">
                Animated
              </span>
            </BorderGlow>
            <p className="text-xs text-neutral-500 text-center">
              Animated color cycle
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
