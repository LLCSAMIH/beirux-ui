"use client";

import ShimmerText from "@/components/kokonutui/shimmer-text";
import { BackLink } from "@/components/back-link";

export default function ShimmerTextPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Shimmer Text
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A text component with a continuous shimmer gradient animation.
          The highlight sweeps across the text in an infinite loop,
          creating a metallic sheen effect.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            gradient
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            text effect
          </span>
        </div>
      </div>

      {/* Demo: Default */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <ShimmerText text="Text Shimmer" />
          </div>
        </section>
      </div>

      {/* Demo: Custom Text */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Custom Text
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <ShimmerText text="BEIRUX Digital Agency" />
          </div>
        </section>
      </div>

      {/* Demo: Custom Size */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Custom ClassName (larger)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <ShimmerText text="Premium" className="text-6xl" />
          </div>
        </section>
      </div>
    </div>
  );
}
