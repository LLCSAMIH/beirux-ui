"use client";

export const dynamic = "force-dynamic";

import { PixelParagraph } from "@/components/ui/pixel-paragraph-words";
import { BackLink } from "@/components/back-link";

export default function PixelParagraphWordsPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Pixel Paragraph
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Words Mode
          </p>
        </div>

        <div className="space-y-12">
          {/* Default (square) */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Square Font
            </h2>
            <div className="bg-white/5 rounded-2xl p-8">
              <PixelParagraph
                text="54+ animated components and effects. Free, open source, and built to drop into any shadcn/ui project."
                pixelWords={["animated", "shadcn/ui"]}
                font="square"
                className="text-lg text-neutral-300 leading-relaxed"
              />
            </div>
          </section>

          {/* Circle font */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Circle Font
            </h2>
            <div className="bg-white/5 rounded-2xl p-8">
              <PixelParagraph
                text="Motion-powered interactions with zero runtime dependencies. Copy, paste, customize."
                pixelWords={["Motion-powered", "zero runtime", "customize"]}
                font="circle"
                className="text-lg text-neutral-300 leading-relaxed"
                pixelWordClassName="text-white"
              />
            </div>
          </section>

          {/* Multiple highlights */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Multiple Highlights
            </h2>
            <div className="bg-white/5 rounded-2xl p-8">
              <PixelParagraph
                text="Built with React, styled with Tailwind CSS, animated with Motion. The modern component stack."
                pixelWords={["React", "Tailwind CSS", "Motion", "modern"]}
                font="triangle"
                className="text-lg text-neutral-300 leading-relaxed"
                pixelWordClassName="text-blue-400"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
