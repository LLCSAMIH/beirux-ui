"use client";

export const dynamic = "force-dynamic";

import { useRef } from "react";
import VariableFontAndCursor from "@/components/fancy/text/variable-font-and-cursor";
import { BackLink } from "@/components/back-link";

export default function VariableFontAndCursorPage() {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const containerRef3 = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Variable Font and Cursor
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Maps cursor X/Y position within a container to variable
            font axes. Move your cursor around each container to
            see the font weight and slant change in real time.
            Requires a variable font.
          </p>
        </div>

        <div className="space-y-16">
          {/* Weight controlled by X, slant by Y */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              X = weight (100 to 900), Y = slant (0 to -12)
            </p>
            <div
              ref={containerRef1}
              className="flex justify-center items-center min-h-[250px] border border-white/10 rounded-xl relative"
            >
              <VariableFontAndCursor
                containerRef={containerRef1}
                fontVariationMapping={{
                  x: { name: "wght", min: 100, max: 900 },
                  y: { name: "slnt", min: 0, max: -12 },
                }}
                className="text-5xl md:text-7xl text-white cursor-crosshair"
              >
                Move cursor
              </VariableFontAndCursor>
            </div>
          </section>

          {/* Narrow range, weight only */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              X = weight (300 to 700), Y = weight (300 to 700)
            </p>
            <div
              ref={containerRef2}
              className="flex justify-center items-center min-h-[250px] border border-white/10 rounded-xl relative"
            >
              <VariableFontAndCursor
                containerRef={containerRef2}
                fontVariationMapping={{
                  x: { name: "wght", min: 300, max: 700 },
                  y: { name: "wght", min: 300, max: 700 },
                }}
                className="text-5xl md:text-7xl text-emerald-400 cursor-crosshair"
              >
                BEIRUX
              </VariableFontAndCursor>
            </div>
          </section>

          {/* Full range both axes */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Full range: X = weight (100 to 900), Y = slant (12 to -12)
            </p>
            <div
              ref={containerRef3}
              className="flex justify-center items-center min-h-[250px] border border-white/10 rounded-xl relative"
            >
              <VariableFontAndCursor
                containerRef={containerRef3}
                fontVariationMapping={{
                  x: { name: "wght", min: 100, max: 900 },
                  y: { name: "slnt", min: 12, max: -12 },
                }}
                className="text-5xl md:text-7xl text-amber-400 cursor-crosshair"
              >
                Typography
              </VariableFontAndCursor>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
