"use client";

export const dynamic = "force-dynamic";

import VariableFontHoverByLetter from "@/components/fancy/text/variable-font-hover-by-letter";
import { BackLink } from "@/components/back-link";

export default function VariableFontHoverByLetterPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Variable Font Hover by Letter
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Animates variable font settings per-letter on hover.
            Each letter transitions from one font variation to
            another with configurable stagger and spring physics.
            Requires a variable font.
          </p>
        </div>

        <div className="space-y-16">
          {/* Default: weight shift */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Weight 400 to 900 (default stagger)
            </p>
            <div className="flex justify-center">
              <VariableFontHoverByLetter
                label="Hover me"
                fromFontVariationSettings="'wght' 400, 'slnt' 0"
                toFontVariationSettings="'wght' 900, 'slnt' 0"
                className="text-5xl md:text-7xl text-white cursor-pointer"
              />
            </div>
          </section>

          {/* Weight + slant */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Weight 300 to 800 + slant 0 to -10 / stagger from center
            </p>
            <div className="flex justify-center">
              <VariableFontHoverByLetter
                label="BEIRUX"
                fromFontVariationSettings="'wght' 300, 'slnt' 0"
                toFontVariationSettings="'wght' 800, 'slnt' -10"
                staggerFrom="center"
                staggerDuration={0.04}
                className="text-5xl md:text-7xl text-emerald-400 cursor-pointer"
              />
            </div>
          </section>

          {/* Reverse stagger, slow spring */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Stagger from last / slow spring (1.2s)
            </p>
            <div className="flex justify-center">
              <VariableFontHoverByLetter
                label="Typography"
                fromFontVariationSettings="'wght' 200, 'slnt' 0"
                toFontVariationSettings="'wght' 900, 'slnt' -12"
                staggerFrom="last"
                staggerDuration={0.05}
                transition={{ type: "spring", duration: 1.2 }}
                className="text-5xl md:text-7xl text-amber-400 cursor-pointer"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
