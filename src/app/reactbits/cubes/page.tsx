"use client";

export const dynamic = "force-dynamic";

import Cubes from "@/components/Cubes";
import { BackLink } from "@/components/back-link";

export default function CubesPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Cubes
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            3D CSS cube grid that tilts toward the cursor with GSAP. Supports
            auto-animation, ripple on click, and customizable grid size.
          </p>
        </div>

        <div className="space-y-24">
          {/* Default */}
          <section className="flex flex-col items-center">
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Default (10x10, auto-animate)
            </h2>
            <Cubes
              gridSize={10}
              maxAngle={45}
              radius={3}
              faceColor="#18181b"
              borderStyle="1px solid rgba(255,255,255,0.15)"
              autoAnimate
              rippleOnClick
              rippleColor="#fff"
            />
          </section>

          {/* Smaller grid, colored ripple */}
          <section className="flex flex-col items-center">
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              6x6, purple ripple, larger radius
            </h2>
            <Cubes
              gridSize={6}
              maxAngle={60}
              radius={4}
              faceColor="#1a1025"
              borderStyle="1px solid rgba(160,100,255,0.25)"
              autoAnimate
              rippleOnClick
              rippleColor="#a855f7"
              rippleSpeed={3}
            />
          </section>

          {/* Dense grid, no auto-animate */}
          <section className="flex flex-col items-center">
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              15x15, mouse-only, subtle tilt
            </h2>
            <Cubes
              gridSize={15}
              maxAngle={25}
              radius={2}
              faceColor="#18181b"
              borderStyle="1px solid rgba(255,255,255,0.08)"
              autoAnimate={false}
              rippleOnClick
              rippleColor="#3b82f6"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
