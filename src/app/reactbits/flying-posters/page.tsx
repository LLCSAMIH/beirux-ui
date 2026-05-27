"use client";

import dynamic from "next/dynamic";
import { BackLink } from "@/components/back-link";

const FlyingPosters = dynamic(() => import("@/components/FlyingPosters"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-neutral-500">
      Loading 3D scene...
    </div>
  ),
});

const posters = [
  "https://picsum.photos/seed/poster1/600/600",
  "https://picsum.photos/seed/poster2/600/600",
  "https://picsum.photos/seed/poster3/600/600",
  "https://picsum.photos/seed/poster4/600/600",
  "https://picsum.photos/seed/poster5/600/600",
  "https://picsum.photos/seed/poster6/600/600",
];

export default function FlyingPostersPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Flying Posters
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            OGL-powered 3D poster gallery that rotates on scroll. Drag or
            scroll to cycle through posters with GLSL distortion.
          </p>
        </div>

        <div className="flex flex-col items-center gap-16">
          {/* Default */}
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="w-full h-[600px] rounded-xl border border-white/10 overflow-hidden">
              <FlyingPosters items={posters} />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Default (scroll or drag to cycle)
            </p>
          </div>

          {/* Higher distortion */}
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="w-full h-[600px] rounded-xl border border-white/10 overflow-hidden">
              <FlyingPosters
                items={posters}
                distortion={8}
                scrollEase={0.02}
                planeWidth={400}
                planeHeight={400}
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Higher distortion (8), faster ease, larger planes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
