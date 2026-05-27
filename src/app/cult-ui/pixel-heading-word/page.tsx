"use client";

export const dynamic = "force-dynamic";

import { PixelHeading } from "@/components/ui/pixel-heading-word";
import { BackLink } from "@/components/back-link";

export default function PixelHeadingWordPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Pixel Heading
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Word Mode
          </p>
        </div>

        <div className="space-y-16">
          {/* Default */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Default (Square)
            </h2>
            <p className="text-sm text-neutral-400 mb-6">
              Whole words swap pixel fonts on hover. The entire word transitions together.
            </p>
            <PixelHeading
              as="h2"
              initialFont="square"
              className="text-4xl md:text-6xl font-bold text-white"
            >
              CULT UI
            </PixelHeading>
          </section>

          {/* With hover font */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Hover Font (Circle)
            </h2>
            <p className="text-sm text-neutral-400 mb-6">
              Swaps between square and circle font on hover.
            </p>
            <PixelHeading
              as="h2"
              initialFont="square"
              hoverFont="circle"
              className="text-4xl md:text-6xl font-bold text-white"
            >
              PIXEL WORDS
            </PixelHeading>
          </section>

          {/* Cycling through all fonts */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Cycling (All Fonts)
            </h2>
            <p className="text-sm text-neutral-400 mb-6">
              Without a hover font set, hovering cycles through all pixel fonts.
            </p>
            <PixelHeading
              as="h2"
              cycleInterval={200}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              HOVER ME
            </PixelHeading>
          </section>
        </div>
      </div>
    </div>
  );
}
