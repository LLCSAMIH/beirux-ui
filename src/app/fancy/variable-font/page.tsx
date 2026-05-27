"use client";

import { useRef } from "react";
import VariableFontCursorProximity from "@/components/fancy/text/variable-font-cursor-proximity";
import { BackLink } from "@/components/back-link";

export default function VariableFontPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen w-full bg-[#18181b] flex flex-col">
      <BackLink href="/fancy" label="Fancy" />
      <div className="pt-16 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
          Variable Font Cursor Proximity
        </h1>
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
          Fancy Components
        </p>
      </div>

      {/* Main demo area */}
      <div
        ref={containerRef}
        className="flex-1 px-6 md:px-16 lg:px-24 xl:px-32 pb-24"
      >
        {/* Primary showcase: large paragraph, linear falloff, wide radius */}
        <div className="mb-20">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
            Linear falloff / radius 200 / wght 100 to 900
          </p>
          <VariableFontCursorProximity
            as="p"
            containerRef={containerRef}
            fromFontVariationSettings="'wght' 300"
            toFontVariationSettings="'wght' 900"
            radius={200}
            falloff="linear"
            className="text-white/90 text-2xl md:text-4xl lg:text-5xl leading-relaxed -mx-2"
          >
            Modern typography is based primarily on the theories and principles of design evolved in the twenties and thirties of our century. It was a time of great experimentation, new ideas, and radical thinking about the role of type in visual communication.
          </VariableFontCursorProximity>
        </div>

        {/* Secondary showcase: gaussian falloff */}
        <div className="mb-20">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
            Gaussian falloff / radius 150 / wght 100 to 900
          </p>
          <VariableFontCursorProximity
            as="p"
            containerRef={containerRef}
            fromFontVariationSettings="'wght' 100"
            toFontVariationSettings="'wght' 900"
            radius={150}
            falloff="gaussian"
            className="text-white/70 text-xl md:text-3xl lg:text-4xl leading-relaxed -mx-2"
          >
            The weight of each letter shifts as your cursor moves across the text. The gaussian curve creates a smooth, natural bloom of heavy strokes that fades gently at the edges, like a spotlight illuminating the page.
          </VariableFontCursorProximity>
        </div>

        {/* Tertiary showcase: exponential falloff, tighter radius */}
        <div className="mb-20">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
            Exponential falloff / radius 100 / wght 200 to 900
          </p>
          <VariableFontCursorProximity
            as="p"
            containerRef={containerRef}
            fromFontVariationSettings="'wght' 200"
            toFontVariationSettings="'wght' 900"
            radius={100}
            falloff="exponential"
            className="text-white/60 text-lg md:text-2xl lg:text-3xl leading-relaxed -mx-2"
          >
            Exponential falloff concentrates the effect tightly around the cursor. Only letters directly beneath the pointer reach full weight, creating a precise, focused interaction that rewards deliberate exploration of the text.
          </VariableFontCursorProximity>
        </div>
      </div>
    </div>
  );
}
