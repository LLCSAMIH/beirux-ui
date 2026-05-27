"use client";

import CirclingElements from "@/components/fancy/blocks/circling-elements";
import { BackLink } from "@/components/back-link";

const icons = ["🔵", "🟣", "🟢", "🟠", "🔴", "⚪"];

export default function CirclingElementsPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Circling Elements
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Children orbit in a circle around a center point. Configurable
            radius, speed, direction, and pause-on-hover.
          </p>
        </div>

        <div className="space-y-24">
          {/* Default orbit */}
          <section className="flex flex-col items-center">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-8">
              Default (radius 100, 10s, normal)
            </p>
            <div className="relative w-[280px] h-[280px] flex items-center justify-center">
              <CirclingElements radius={100} duration={10}>
                {icons.map((icon, i) => (
                  <span key={i} className="text-2xl select-none">{icon}</span>
                ))}
              </CirclingElements>
              <span className="text-white/20 text-sm absolute">center</span>
            </div>
          </section>

          {/* Fast, reverse, small radius */}
          <section className="flex flex-col items-center">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-8">
              Fast reverse (radius 60, 4s, reverse)
            </p>
            <div className="relative w-[200px] h-[200px] flex items-center justify-center">
              <CirclingElements radius={60} duration={4} direction="reverse">
                {["A", "B", "C", "D"].map((letter) => (
                  <span
                    key={letter}
                    className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-mono text-white/60"
                  >
                    {letter}
                  </span>
                ))}
              </CirclingElements>
              <span className="text-white/20 text-sm absolute">center</span>
            </div>
          </section>

          {/* Pause on hover, large */}
          <section className="flex flex-col items-center">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-8">
              Pause on hover (radius 140, 15s)
            </p>
            <div className="relative w-[360px] h-[360px] flex items-center justify-center">
              <CirclingElements radius={140} duration={15} pauseOnHover>
                {["Next.js", "React", "Tailwind", "Motion", "shadcn", "Vercel", "TypeScript", "Node"].map((label) => (
                  <span
                    key={label}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 whitespace-nowrap"
                  >
                    {label}
                  </span>
                ))}
              </CirclingElements>
              <span className="text-white/20 text-xs absolute">hover to pause</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
