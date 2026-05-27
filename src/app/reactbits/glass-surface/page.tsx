"use client";

import GlassSurface from "@/components/GlassSurface";
import { BackLink } from "@/components/back-link";

export default function GlassSurfacePage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Glass Surface
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Advanced glassmorphic container with SVG displacement map filters,
            chromatic aberration, and adaptive dark/light mode.
          </p>
        </div>

        {/* Colorful background to demonstrate glass effect */}
        <div className="relative rounded-3xl overflow-hidden p-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
          <div className="flex flex-wrap gap-8 justify-center items-center">
            {/* Default glass surface */}
            <div className="flex flex-col items-center gap-4">
              <GlassSurface width={280} height={120} borderRadius={20}>
                <span className="text-white text-sm font-medium">
                  Default Glass
                </span>
              </GlassSurface>
              <p className="text-xs text-white/60 text-center">
                Default settings
              </p>
            </div>

            {/* High blur */}
            <div className="flex flex-col items-center gap-4">
              <GlassSurface
                width={280}
                height={120}
                borderRadius={30}
                blur={20}
                brightness={60}
                opacity={0.8}
              >
                <span className="text-white text-sm font-medium">
                  Heavy Blur
                </span>
              </GlassSurface>
              <p className="text-xs text-white/60 text-center">
                blur=20, brightness=60
              </p>
            </div>

            {/* Wide with content */}
            <div className="flex flex-col items-center gap-4">
              <GlassSurface
                width={400}
                height={160}
                borderRadius={24}
                borderWidth={0.12}
                saturation={1.5}
              >
                <div className="text-center">
                  <p className="text-white text-lg font-semibold">Card Title</p>
                  <p className="text-white/70 text-sm mt-1">
                    Glass surfaces can hold any content
                  </p>
                </div>
              </GlassSurface>
              <p className="text-xs text-white/60 text-center">
                Wider card, thicker border, saturation=1.5
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
