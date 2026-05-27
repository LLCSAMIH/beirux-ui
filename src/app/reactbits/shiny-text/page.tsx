"use client";

import ShinyText from "@/components/ShinyText";
import { BackLink } from "@/components/back-link";

export default function ShinyTextPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            <ShinyText text="ShinyText" speed={3} className="text-5xl md:text-7xl font-bold" />
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto mt-8">
            Metallic sheen sweeps across text producing a reflective
            highlight. Powered by Motion.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Default
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <ShinyText text="Shiny metallic text" speed={2} className="text-4xl font-bold" />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">speed=2</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Gold shine
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <ShinyText
                text="PREMIUM"
                speed={3}
                color="#8B6914"
                shineColor="#FFD700"
                className="text-5xl font-bold"
              />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">color=&quot;#8B6914&quot;</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">shineColor=&quot;#FFD700&quot;</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Yoyo + pause on hover
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <ShinyText
                text="Hover to pause"
                speed={2}
                yoyo={true}
                pauseOnHover={true}
                className="text-4xl font-bold"
              />
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">yoyo=true</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">pauseOnHover=true</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
