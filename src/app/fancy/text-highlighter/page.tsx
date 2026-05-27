"use client";

import { TextHighlighter } from "@/components/fancy/text/text-highlighter";
import { BackLink } from "@/components/back-link";

export default function TextHighlighterPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Text Highlighter
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Animated text highlight that fills behind the text. Supports
            multiple trigger types, directions, and custom colors.
          </p>
        </div>

        <div className="space-y-24">
          {/* Demo 1: In-view trigger, left to right */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              In-view trigger / left-to-right / yellow highlight
            </p>
            <div className="flex justify-center">
              <p className="text-2xl md:text-3xl text-white/80 max-w-2xl text-center leading-relaxed">
                We believe in{" "}
                <TextHighlighter
                  triggerType="inView"
                  direction="ltr"
                  highlightColor="hsl(50, 90%, 65%)"
                  className="text-zinc-900 px-1"
                  transition={{ duration: 1.2, type: "spring", bounce: 0 }}
                >
                  design that moves
                </TextHighlighter>{" "}
                and code that endures.
              </p>
            </div>
          </section>

          {/* Demo 2: Hover trigger, multiple directions */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Hover trigger / four directions / colored highlights
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <TextHighlighter
                triggerType="hover"
                direction="ltr"
                highlightColor="hsl(150, 70%, 50%)"
                className="text-zinc-900 px-2"
              >
                <span className="text-2xl md:text-3xl font-medium text-white/80">
                  Left to Right
                </span>
              </TextHighlighter>

              <TextHighlighter
                triggerType="hover"
                direction="rtl"
                highlightColor="hsl(280, 70%, 60%)"
                className="text-zinc-900 px-2"
              >
                <span className="text-2xl md:text-3xl font-medium text-white/80">
                  Right to Left
                </span>
              </TextHighlighter>

              <TextHighlighter
                triggerType="hover"
                direction="ttb"
                highlightColor="hsl(200, 80%, 55%)"
                className="text-zinc-900 px-2"
              >
                <span className="text-2xl md:text-3xl font-medium text-white/80">
                  Top to Bottom
                </span>
              </TextHighlighter>

              <TextHighlighter
                triggerType="hover"
                direction="btt"
                highlightColor="hsl(15, 85%, 60%)"
                className="text-zinc-900 px-2"
              >
                <span className="text-2xl md:text-3xl font-medium text-white/80">
                  Bottom to Top
                </span>
              </TextHighlighter>
            </div>
          </section>

          {/* Demo 3: Auto trigger, paragraph highlight */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Auto trigger / slow spring / rose highlight
            </p>
            <div className="flex justify-center">
              <TextHighlighter
                triggerType="auto"
                direction="ltr"
                highlightColor="hsl(350, 70%, 55%)"
                className="text-white px-2"
                transition={{ duration: 2, type: "spring", bounce: 0, delay: 0.5 }}
              >
                <span className="text-3xl md:text-5xl font-bold">
                  Ship, Measure, Iterate
                </span>
              </TextHighlighter>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
