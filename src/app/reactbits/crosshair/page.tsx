"use client";

import { useRef } from "react";
import Crosshair from "@/components/Crosshair";
import { BackLink } from "@/components/back-link";

export default function CrosshairPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Crosshair
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Full-width crosshair cursor lines that follow the mouse with GSAP
            lerp. Adds SVG turbulence noise on link hover.
          </p>
        </div>

        <div className="space-y-16">
          {/* Fullscreen crosshair */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Page-level (white)
            </h2>
            <div className="relative min-h-[400px] rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
              <Crosshair color="white" />
              <div className="flex flex-col items-center justify-center min-h-[400px] gap-6">
                <p className="text-xl text-neutral-400">Move your mouse around</p>
                <a href="#" className="text-blue-400 hover:text-blue-300 underline" onClick={(e) => e.preventDefault()}>
                  Hover this link for glitch effect
                </a>
              </div>
            </div>
          </section>

          {/* Contained crosshair */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Contained (colored, scoped to container)
            </h2>
            <div
              ref={containerRef}
              className="relative min-h-[400px] rounded-xl border border-purple-500/20 bg-purple-500/[0.03] overflow-hidden"
            >
              <Crosshair color="#FF9FFC" containerRef={containerRef} />
              <div className="flex flex-col items-center justify-center min-h-[400px] gap-6">
                <p className="text-xl text-neutral-400">Scoped to this box only</p>
                <a href="#" className="text-purple-400 hover:text-purple-300 underline" onClick={(e) => e.preventDefault()}>
                  Link hover triggers noise
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
