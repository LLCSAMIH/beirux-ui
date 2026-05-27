"use client";

import { PixelParagraphInverse } from "@/components/ui/pixel-paragraph-words-inverse";
import { BackLink } from "@/components/back-link";

export default function PixelParagraphWordsInversePage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Pixel Paragraph
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Inverse Mode
          </p>
        </div>

        <div className="space-y-12">
          {/* Default inverse */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Sans Escape
            </h2>
            <p className="text-sm text-neutral-400 mb-4">
              Base text is pixel font. Specified words escape to sans-serif.
            </p>
            <div className="bg-white/5 rounded-2xl p-8">
              <PixelParagraphInverse
                text="54+ animated components and effects. Free, open source, and built to drop into any shadcn/ui project."
                plainWords={["animated", "shadcn/ui"]}
                plainFont="sans"
                pixelFont="square"
                className="text-lg text-neutral-300 leading-relaxed"
              />
            </div>
          </section>

          {/* Mono escape */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Mono Escape
            </h2>
            <p className="text-sm text-neutral-400 mb-4">
              Plain words render in monospace for a code-like contrast.
            </p>
            <div className="bg-white/5 rounded-2xl p-8">
              <PixelParagraphInverse
                text="Install with npx shadcn add, configure your theme, and start building."
                plainWords={["npx shadcn add", "configure", "building"]}
                plainFont="mono"
                pixelFont="grid"
                className="text-lg text-neutral-300 leading-relaxed"
                plainWordClassName="text-green-400"
              />
            </div>
          </section>

          {/* Triangle base */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Triangle Base
            </h2>
            <div className="bg-white/5 rounded-2xl p-8">
              <PixelParagraphInverse
                text="The creative component library for developers who want something different."
                plainWords={["creative", "developers", "different"]}
                pixelFont="triangle"
                plainFont="sans"
                className="text-lg text-neutral-300 leading-relaxed"
                plainWordClassName="text-purple-400 font-semibold"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
