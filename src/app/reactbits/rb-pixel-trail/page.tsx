"use client";

import PixelTrail from "@/components/PixelTrail";
import { BackLink } from "@/components/back-link";

export default function RbPixelTrailPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      {/* Demo: Full-screen pixel trail */}
      <div className="absolute inset-0 pointer-events-none">
        <PixelTrail
          gridSize={40}
          trailSize={0.1}
          maxAge={250}
          interpolate={5}
          color="#7C3AED"
          gooeyFilter={{ id: "pixel-goo", strength: 8 }}
        />
      </div>

      {/* Second layer with different color */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <PixelTrail
          gridSize={25}
          trailSize={0.15}
          maxAge={400}
          interpolate={3}
          color="#EC4899"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Pixel Trail
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50 mb-6">
            ReactBits
          </p>
          <p className="text-white/30 text-sm max-w-md mx-auto">
            R3F shader trail that renders pixelated dots following your cursor.
            Supports gooey SVG filter for organic blob merging. Move your mouse.
          </p>
        </div>
      </div>
    </div>
  );
}
