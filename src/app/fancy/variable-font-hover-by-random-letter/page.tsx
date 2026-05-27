"use client";

export const dynamic = "force-dynamic";

import VariableFontHoverByRandomLetter from "@/components/fancy/text/variable-font-hover-by-random-letter";
import { BackLink } from "@/components/back-link";

export default function VariableFontHoverByRandomLetterPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Variable Font Hover by Random Letter
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Same as Variable Font Hover by Letter, but the animation
            order is randomized for each letter. Creates a more
            organic, chaotic effect. Requires a variable font.
          </p>
        </div>

        <div className="space-y-16">
          {/* Default: weight shift */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Weight 400 to 900 (random stagger order)
            </p>
            <div className="flex justify-center">
              <VariableFontHoverByRandomLetter
                label="Hover me"
                fromFontVariationSettings="'wght' 400, 'slnt' 0"
                toFontVariationSettings="'wght' 900, 'slnt' 0"
                className="text-5xl md:text-7xl text-white cursor-pointer"
              />
            </div>
          </section>

          {/* Weight + slant, fast stagger */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Weight + slant / fast stagger (0.02s)
            </p>
            <div className="flex justify-center">
              <VariableFontHoverByRandomLetter
                label="BEIRUX"
                fromFontVariationSettings="'wght' 300, 'slnt' 0"
                toFontVariationSettings="'wght' 900, 'slnt' -10"
                staggerDuration={0.02}
                className="text-5xl md:text-7xl text-emerald-400 cursor-pointer"
              />
            </div>
          </section>

          {/* Slow dramatic shift */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Slow dramatic shift (0.08s stagger, 1.5s spring)
            </p>
            <div className="flex justify-center">
              <VariableFontHoverByRandomLetter
                label="Random"
                fromFontVariationSettings="'wght' 100, 'slnt' 0"
                toFontVariationSettings="'wght' 900, 'slnt' -15"
                staggerDuration={0.08}
                transition={{ type: "spring", duration: 1.5 }}
                className="text-5xl md:text-7xl text-purple-400 cursor-pointer"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
