"use client";

import GooeyNav from "@/components/GooeyNav";
import { BackLink } from "@/components/back-link";

export default function GooeyNavPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Gooey Nav
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Navigation with gooey particle burst effect on tab switch. Uses SVG
            filter contrast trick for the liquid morphing.
          </p>
        </div>

        <div className="flex flex-col gap-16 items-center">
          {/* Default */}
          <div className="flex flex-col items-center gap-6">
            <GooeyNav
              items={[
                { label: "Home", href: "#" },
                { label: "About", href: "#" },
                { label: "Contact", href: "#" },
              ]}
            />
            <p className="text-xs text-neutral-500 text-center">
              Default (3 items, 15 particles)
            </p>
          </div>

          {/* More items, custom colors */}
          <div className="flex flex-col items-center gap-6">
            <GooeyNav
              items={[
                { label: "Dashboard", href: "#" },
                { label: "Projects", href: "#" },
                { label: "Tasks", href: "#" },
                { label: "Settings", href: "#" },
              ]}
              particleCount={20}
              animationTime={800}
              colors={[1, 2, 3, 4]}
              initialActiveIndex={1}
            />
            <p className="text-xs text-neutral-500 text-center">
              4 items, 20 particles, slower animation
            </p>
          </div>

          {/* Minimal */}
          <div className="flex flex-col items-center gap-6">
            <GooeyNav
              items={[
                { label: "Work", href: "#" },
                { label: "Play", href: "#" },
              ]}
              particleCount={8}
              animationTime={400}
              particleR={60}
            />
            <p className="text-xs text-neutral-500 text-center">
              Minimal (2 items, 8 particles, tight radius)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
