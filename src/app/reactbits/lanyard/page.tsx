"use client";

export const dynamic = "force-dynamic";

import { BackLink } from "@/components/back-link";

export default function LanyardPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Lanyard
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Physics-based 3D lanyard/badge simulation using React Three Fiber
            and Rapier. Drag the card to interact with the rope physics.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-neutral-400 text-sm">
              This component requires custom 3D assets (card.glb, lanyard.png)
              that must be provided per project. The component source is
              installed at{" "}
              <code className="text-white/70 bg-white/10 px-1.5 py-0.5 rounded text-xs">
                src/components/Lanyard.tsx
              </code>
              .
            </p>
            <p className="text-neutral-500 text-xs mt-4">
              To use: replace the card.glb and lanyard.png imports with your own
              3D model and texture assets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
