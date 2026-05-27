"use client";

import BentoGrid from "@/components/kokonutui/bento-grid";
import { BackLink } from "@/components/back-link";

export default function BentoGridPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Bento Grid
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A multi-feature bento grid with 3D card tilt, typing code animation,
          AI partner icons, innovation timeline, and a voice assistant cell.
          Each card uses staggered fade-in and spring hover effects.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            grid layout
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            multi-feature
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Full Layout
          </h2>
          <div className="rounded-xl border border-white/[0.06] overflow-hidden">
            <BentoGrid />
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Notes
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 space-y-3 text-sm text-neutral-400">
            <p>
              The Bento Grid ships as a self-contained component with hardcoded
              demo data (items, timeline, code snippet, AI partner logos).
            </p>
            <p>
              Each cell renders a different interactive feature: spotlight
              checklist, typing code terminal, AI partner icon grid, innovation
              timeline, and a voice assistant with auto-looping demo animation.
            </p>
            <p>
              The grid uses 3D perspective transforms on hover and staggered
              reveal animations via Motion variants.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
