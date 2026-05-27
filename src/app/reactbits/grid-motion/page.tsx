"use client";

import GridMotion from "@/components/GridMotion";
import { BackLink } from "@/components/back-link";

export default function GridMotionPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="absolute inset-0">
        <GridMotion
          items={[
            "Design",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80",
            "Create",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&q=80",
            "Build",
            "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&q=80",
            "Ship",
          ]}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3 drop-shadow-lg">
            Grid Motion
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
        </div>
      </div>
    </div>
  );
}
