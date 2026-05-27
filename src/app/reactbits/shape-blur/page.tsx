"use client";

export const dynamic = "force-dynamic";

import ShapeBlur from "@/components/ShapeBlur";
import { BackLink } from "@/components/back-link";

export default function ShapeBlurPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Shape Blur
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Three.js shader shapes that blur and distort near your cursor.
            Four shape variations: rounded rect, filled circle, ring, and
            triangle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Demo 1: Rounded rectangle (variation 0) */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full aspect-square rounded-xl overflow-hidden border border-white/10">
              <ShapeBlur
                variation={0}
                shapeSize={1.2}
                roundness={0.4}
                borderSize={0.05}
                circleSize={0.3}
                circleEdge={0.5}
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Rounded rectangle (variation 0)
            </p>
          </div>

          {/* Demo 2: Filled circle (variation 1) */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full aspect-square rounded-xl overflow-hidden border border-white/10">
              <ShapeBlur
                variation={1}
                circleSize={0.4}
                circleEdge={0.6}
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Filled circle (variation 1)
            </p>
          </div>

          {/* Demo 3: Ring (variation 2) */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full aspect-square rounded-xl overflow-hidden border border-white/10">
              <ShapeBlur
                variation={2}
                circleSize={0.35}
                circleEdge={0.5}
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Ring stroke (variation 2)
            </p>
          </div>

          {/* Demo 4: Triangle (variation 3) */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full aspect-square rounded-xl overflow-hidden border border-white/10">
              <ShapeBlur
                variation={3}
                circleSize={0.3}
                circleEdge={0.4}
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Triangle fill (variation 3)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
