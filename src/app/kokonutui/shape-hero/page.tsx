"use client";

export const dynamic = "force-dynamic";

import ShapeHero from "@/components/kokonutui/shape-hero";
import { BackLink } from "@/components/back-link";

export default function ShapeHeroPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Shape Hero
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A full-screen hero section with animated floating geometric shapes,
          gradient overlays, and staggered fade-in text. Uses the Pacifico
          Google Font for the accent line.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            google fonts
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            hero
          </span>
        </div>
      </div>

      {/* Default demo */}
      <div className="pb-16">
        <section className="max-w-4xl mx-auto px-6">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default
          </h2>
        </section>
        <div className="rounded-xl border border-white/[0.06] overflow-hidden mx-6">
          <ShapeHero />
        </div>
      </div>

      {/* Custom titles */}
      <div className="pb-16">
        <section className="max-w-4xl mx-auto px-6">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Custom Titles
          </h2>
        </section>
        <div className="rounded-xl border border-white/[0.06] overflow-hidden mx-6">
          <ShapeHero title1="Build Something" title2="Extraordinary" />
        </div>
      </div>

      <div className="h-32" />
    </div>
  );
}
