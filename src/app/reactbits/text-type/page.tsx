"use client";

import TextType from "@/components/TextType";
import { BackLink } from "@/components/back-link";

export default function TextTypePage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            TextType
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Typewriter effect with blinking cursor, adjustable typing cadence,
            and multi-sentence cycling. Uses GSAP for cursor blink.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Single sentence
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <TextType
                text="Building the future, one line at a time."
                className="text-3xl font-bold"
                typingSpeed={60}
                loop={false}
              />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">typingSpeed=60</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">loop=false</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Multi-sentence loop
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <TextType
                text={["Design.", "Develop.", "Deploy.", "Repeat."]}
                className="text-5xl font-bold"
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={1500}
              />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">4 sentences</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">typingSpeed=80</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">deletingSpeed=40</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Variable speed + colored sentences
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <TextType
                text={["Fast and furious", "Slow and steady", "Just right"]}
                className="text-4xl font-bold"
                variableSpeed={{ min: 30, max: 120 }}
                textColors={["#FF3232", "#5227FF", "#00FF87"]}
                pauseDuration={2000}
              />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">variableSpeed: 30-120ms</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">textColors (per sentence)</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
