"use client";

import MatrixText from "@/components/kokonutui/matrix-text";
import { BackLink } from "@/components/back-link";

export default function MatrixTextPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Matrix Text
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          Each letter individually animates through random binary
          characters (0/1) before resolving to the target character.
          Green glow during the matrix phase, white when resolved.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            binary animation
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            staggered
          </span>
        </div>
      </div>

      {/* Demo: Default */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-[#18181b] overflow-hidden">
            <MatrixText text="HelloWorld!" />
          </div>
        </section>
      </div>

      {/* Demo: Custom Text */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Custom Text, Slower
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-[#18181b] overflow-hidden">
            <MatrixText
              text="BEIRUX DIGITAL"
              letterInterval={150}
              letterAnimationDuration={800}
            />
          </div>
        </section>
      </div>

      {/* Demo: Fast */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Fast Decode
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-[#18181b] overflow-hidden">
            <MatrixText
              text="ACCESS GRANTED"
              letterInterval={50}
              letterAnimationDuration={300}
              initialDelay={500}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
