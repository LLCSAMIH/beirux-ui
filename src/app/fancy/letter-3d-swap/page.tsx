"use client";

export const dynamic = "force-dynamic";

import Letter3DSwap from "@/components/fancy/text/letter-3d-swap";
import { BackLink } from "@/components/back-link";

export default function Letter3DSwapPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Letter 3D Swap
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            3D cube-style letter rotation on hover. Each character
            rotates to reveal a second face, with configurable
            direction, stagger, and spring physics.
          </p>
        </div>

        <div className="space-y-16">
          {/* Default: rotate right */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Default (rotate right, stagger 0.05s)
            </p>
            <div className="flex justify-center">
              <Letter3DSwap
                mainClassName="text-5xl md:text-7xl font-bold text-white cursor-pointer"
              >
                Hover me
              </Letter3DSwap>
            </div>
          </section>

          {/* Rotate top */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Rotate top / stagger from center
            </p>
            <div className="flex justify-center">
              <Letter3DSwap
                rotateDirection="top"
                staggerFrom="center"
                staggerDuration={0.04}
                mainClassName="text-5xl md:text-7xl font-bold text-emerald-400 cursor-pointer"
              >
                BEIRUX
              </Letter3DSwap>
            </div>
          </section>

          {/* Rotate bottom, stagger from last */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Rotate bottom / stagger from last / slow spring
            </p>
            <div className="flex justify-center">
              <Letter3DSwap
                rotateDirection="bottom"
                staggerFrom="last"
                staggerDuration={0.07}
                transition={{ type: "spring", damping: 20, stiffness: 200 }}
                mainClassName="text-5xl md:text-7xl font-bold text-amber-400 cursor-pointer"
              >
                Fancy text
              </Letter3DSwap>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
