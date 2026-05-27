"use client";

export const dynamic = "force-dynamic";

import { PixelHeading } from "@/components/ui/pixel-heading-character";
import { BackLink } from "@/components/back-link";

export default function PixelHeadingCharacterPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Pixel Heading
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Character Mode
          </p>
        </div>

        <div className="space-y-16">
          {/* Uniform mode */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Uniform Mode
            </h2>
            <p className="text-sm text-neutral-400 mb-6">
              All characters share the same pixel font. Hover to cycle.
            </p>
            <PixelHeading
              as="h2"
              mode="uniform"
              className="text-4xl md:text-6xl font-bold text-white"
            >
              HELLO WORLD
            </PixelHeading>
          </section>

          {/* Multi mode */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Multi Mode
            </h2>
            <p className="text-sm text-neutral-400 mb-6">
              Each character gets a different pixel font via golden-ratio distribution.
            </p>
            <PixelHeading
              as="h2"
              mode="multi"
              className="text-4xl md:text-6xl font-bold text-white"
            >
              PIXEL FONTS
            </PixelHeading>
          </section>

          {/* Wave mode */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Wave Mode
            </h2>
            <p className="text-sm text-neutral-400 mb-6">
              Characters animate in a staggered wave on hover.
            </p>
            <PixelHeading
              as="h2"
              mode="wave"
              className="text-4xl md:text-6xl font-bold text-white"
            >
              WAVE EFFECT
            </PixelHeading>
          </section>
        </div>
      </div>
    </div>
  );
}
