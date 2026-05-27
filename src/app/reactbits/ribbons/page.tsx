"use client";

import Ribbons from "@/components/Ribbons";
import { BackLink } from "@/components/back-link";

export default function RibbonsPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      {/* Demo: Full-screen ribbons */}
      <div className="absolute inset-0">
        <Ribbons
          colors={["#ff9346", "#7cff67", "#ffee51", "#5227FF"]}
          baseSpring={0.03}
          baseFriction={0.9}
          baseThickness={30}
          pointCount={50}
          speedMultiplier={0.6}
          maxAge={500}
          enableFade={false}
          enableShaderEffect={false}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Ribbons
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50 mb-6">
            ReactBits
          </p>
          <p className="text-white/30 text-sm max-w-md mx-auto">
            OGL polyline ribbons that follow your cursor with spring physics.
            Each ribbon has independent spring, friction, and color. Move your
            mouse or touch to interact.
          </p>
        </div>
      </div>
    </div>
  );
}
