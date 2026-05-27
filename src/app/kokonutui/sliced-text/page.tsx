"use client";

import SlicedText from "@/components/kokonutui/sliced-text";
import { BackLink } from "@/components/back-link";

export default function SlicedTextPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Sliced Text
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          Text split horizontally into top and bottom halves. On hover,
          the halves merge back together with a clip-path animation.
          Configurable split spacing and styling.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            clip-path
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            hover effect
          </span>
        </div>
      </div>

      {/* Demo: Default */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default (Hover to merge)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-12 flex items-center justify-center">
            <SlicedText
              text="Sliced Text"
              className="font-bold text-white"
            />
          </div>
        </section>
      </div>

      {/* Demo: Wide Split */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Wide Split (8px spacing)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-12 flex items-center justify-center">
            <SlicedText
              text="SPLIT WIDE"
              splitSpacing={8}
              className="font-bold text-white"
            />
          </div>
        </section>
      </div>

      {/* Demo: Custom Styling */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Large with Color
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-12 flex items-center justify-center">
            <SlicedText
              text="BEIRUX"
              splitSpacing={4}
              className="font-black text-6xl text-amber-400"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
