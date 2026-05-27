"use client";

export const dynamic = "force-dynamic";

import TargetCursor from "@/components/TargetCursor";
import { BackLink } from "@/components/back-link";

export default function TargetCursorPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      {/* Custom cursor overlay */}
      <TargetCursor
        targetSelector=".cursor-target"
        spinDuration={2}
        hideDefaultCursor
        hoverDuration={0.2}
        parallaxOn
      />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Target Cursor
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            GSAP-powered custom cursor with spinning corner brackets. Corners
            snap to elements with the <code className="text-white/60">.cursor-target</code> class
            on hover. Click to see the press animation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Target 1 */}
          <div className="cursor-target flex flex-col items-center justify-center gap-4 p-8 rounded-xl border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500" />
            <span className="text-white text-sm font-medium">Target One</span>
            <span className="text-white/30 text-xs">Hover to lock cursor</span>
          </div>

          {/* Target 2 */}
          <div className="cursor-target flex flex-col items-center justify-center gap-4 p-8 rounded-xl border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
            <div className="w-24 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500" />
            <span className="text-white text-sm font-medium">Wide Target</span>
            <span className="text-white/30 text-xs">Corners stretch to fit</span>
          </div>

          {/* Target 3 */}
          <div className="cursor-target flex flex-col items-center justify-center gap-4 p-8 rounded-xl border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
            <div className="w-12 h-20 rounded-lg bg-gradient-to-b from-amber-400 to-orange-600" />
            <span className="text-white text-sm font-medium">Tall Target</span>
            <span className="text-white/30 text-xs">Adapts to any shape</span>
          </div>
        </div>

        {/* Large target */}
        <div className="cursor-target mt-12 p-12 rounded-xl border border-white/10 bg-white/5 text-center transition-colors hover:bg-white/10">
          <span className="text-white text-lg font-medium">Full-width target</span>
          <p className="text-white/30 text-sm mt-2">
            The cursor corners expand to match any element size
          </p>
        </div>
      </div>
    </div>
  );
}
