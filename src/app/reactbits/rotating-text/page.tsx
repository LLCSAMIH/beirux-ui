"use client";

import RotatingText from "@/components/RotatingText";
import { BackLink } from "@/components/back-link";

export default function RotatingTextPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            RotatingText
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Cycles through multiple phrases with 3D rotate / flip transitions
            and character-level stagger. Powered by Motion.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Default (character split)
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <span className="text-5xl font-bold">
                We build{" "}
                <RotatingText
                  texts={["websites", "apps", "brands", "systems"]}
                  mainClassName="text-purple-400"
                  rotationInterval={2000}
                />
              </span>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">rotationInterval=2000</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">splitBy=&quot;characters&quot;</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Word split with stagger
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <span className="text-4xl font-bold">
                <RotatingText
                  texts={["Move fast", "Ship daily", "Stay sharp"]}
                  mainClassName="text-emerald-400"
                  splitBy="words"
                  staggerDuration={0.05}
                  rotationInterval={2500}
                />
              </span>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">splitBy=&quot;words&quot;</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">staggerDuration=0.05</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Custom transition (flip)
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <span className="text-5xl font-bold">
                <RotatingText
                  texts={["DESIGN", "DEVELOP", "DEPLOY"]}
                  mainClassName="text-amber-400"
                  initial={{ y: "100%", opacity: 0, rotateX: 90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: "-100%", opacity: 0, rotateX: -90 }}
                  staggerDuration={0.03}
                  rotationInterval={1800}
                />
              </span>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">rotateX transition</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">staggerDuration=0.03</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
