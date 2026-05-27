"use client";

import dynamic from "next/dynamic";
import { BackLink } from "@/components/back-link";

const FluidGlass = dynamic(() => import("@/components/FluidGlass"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-neutral-500">
      Loading 3D scene...
    </div>
  ),
});

export default function FluidGlassPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Fluid Glass
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Three.js glassmorphism with MeshTransmissionMaterial. Requires
            .glb assets in /public/assets/3d/ and demo images in
            /public/assets/demo/.
          </p>
        </div>

        <div className="flex flex-col items-center gap-16">
          {/* Lens mode */}
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="w-full h-[500px] rounded-xl border border-white/10 overflow-hidden bg-[#5227ff]">
              <FluidGlass mode="lens" />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Lens mode (follows pointer, default)
            </p>
          </div>

          {/* Cube mode */}
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="w-full h-[500px] rounded-xl border border-white/10 overflow-hidden bg-[#5227ff]">
              <FluidGlass mode="cube" />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Cube mode (follows pointer)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
