"use client";

export const dynamic = "force-dynamic";

import TextRotate from "@/components/fancy/text/text-rotate";
import { BackLink } from "@/components/back-link";

export default function TextRotatePage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Text Rotate
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Cycles through an array of text strings with animated
            transitions. Supports per-character stagger, custom
            enter/exit animations, and configurable intervals.
          </p>
        </div>

        <div className="space-y-16">
          {/* Default rotation */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Default (slide up, 2s interval)
            </p>
            <div className="flex justify-center">
              <TextRotate
                texts={["Creative", "Beautiful", "Powerful", "Modern"]}
                mainClassName="text-5xl md:text-7xl font-bold text-white"
              />
            </div>
          </section>

          {/* With character stagger */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Per-character stagger (0.03s, 3s interval)
            </p>
            <div className="flex justify-center">
              <TextRotate
                texts={["BEIRUX", "Agency", "Digital", "Design"]}
                splitBy="characters"
                staggerDuration={0.03}
                staggerFrom="first"
                rotationInterval={3000}
                mainClassName="text-5xl md:text-7xl font-bold text-emerald-400"
              />
            </div>
          </section>

          {/* Fast rotation with custom transition */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Fast rotation (1.5s) / stagger from center
            </p>
            <div className="flex justify-center">
              <TextRotate
                texts={["Build", "Ship", "Scale", "Grow"]}
                splitBy="characters"
                staggerDuration={0.02}
                staggerFrom="center"
                rotationInterval={1500}
                mainClassName="text-5xl md:text-7xl font-bold text-purple-400"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
