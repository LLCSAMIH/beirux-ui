"use client";

export const dynamic = "force-dynamic";

import Typewriter from "@/components/fancy/text/typewriter";
import { BackLink } from "@/components/back-link";

export default function FancyTypewriterPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Typewriter
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Classic typewriter effect with typing, deleting, and looping
            through multiple strings. Configurable speed, cursor, and timing.
          </p>
        </div>

        <div className="space-y-24">
          {/* Demo 1: Single string, blinking cursor */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Single string / 50ms speed / blinking cursor
            </p>
            <div className="flex justify-center">
              <Typewriter
                text="Design systems that scale."
                speed={50}
                className="text-3xl md:text-5xl font-semibold text-white/90"
                showCursor
                cursorChar="|"
                cursorClassName="ml-1 text-white/50"
              />
            </div>
          </section>

          {/* Demo 2: Multiple strings, looping */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Multiple strings / loop / 60ms type / 30ms delete
            </p>
            <div className="flex justify-center">
              <div className="text-2xl md:text-4xl font-medium">
                <span className="text-white/50">We build </span>
                <Typewriter
                  text={[
                    "web applications",
                    "design systems",
                    "agent workflows",
                    "digital products",
                  ]}
                  speed={60}
                  deleteSpeed={30}
                  waitTime={1500}
                  loop
                  className="text-emerald-400"
                  showCursor
                  cursorChar="_"
                  cursorClassName="ml-0.5 text-emerald-400/50"
                />
              </div>
            </div>
          </section>

          {/* Demo 3: Fast typing, no cursor, custom styling */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Fast (25ms) / no cursor / uppercase tracking
            </p>
            <div className="flex justify-center">
              <Typewriter
                text={["SHIP", "MEASURE", "ITERATE"]}
                speed={25}
                deleteSpeed={15}
                waitTime={2000}
                loop
                showCursor={false}
                className="text-4xl md:text-6xl font-bold tracking-[0.3em] uppercase text-purple-300/80"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
