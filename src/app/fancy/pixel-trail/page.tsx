"use client";

import PixelTrail from "@/components/fancy/background/pixel-trail";
import { BackLink } from "@/components/back-link";

export default function PixelTrailPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <PixelTrail
        pixelSize={24}
        fadeDuration={600}
        delay={0}
        pixelClassName="bg-white/30 rounded-sm"
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Pixel Trail
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50 mb-2">
            Fancy Components
          </p>
          <p className="text-xs text-white/30 max-w-xs mx-auto">
            Move your cursor to light up pixels. They fade after a short delay.
          </p>
        </div>
      </div>
    </div>
  );
}
