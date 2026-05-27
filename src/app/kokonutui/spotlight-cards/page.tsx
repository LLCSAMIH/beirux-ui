"use client";

export const dynamic = "force-dynamic";

import SpotlightCards from "@/components/kokonutui/spotlight-cards";
import { BackLink } from "@/components/back-link";
import { Brush, Database, Rocket } from "lucide-react";

export default function SpotlightCardsPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Spotlight Cards
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A feature grid with magnetic 3D tilt, aurora ambient glow,
          focus-dimming of sibling cards, and a shimmer sweep on hover.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            3D tilt
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            feature grid
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default (6 Cards)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <SpotlightCards />
          </div>
        </section>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Custom Items (3 Cards)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <SpotlightCards
              eyebrow="Services"
              heading="What we build"
              items={[
                {
                  icon: Rocket,
                  title: "Launch",
                  description: "Go from zero to production in weeks, not months.",
                  color: "#f97316",
                },
                {
                  icon: Brush,
                  title: "Design",
                  description: "Pixel-perfect interfaces that feel alive.",
                  color: "#ec4899",
                },
                {
                  icon: Database,
                  title: "Scale",
                  description: "Infrastructure that grows with your business.",
                  color: "#06b6d4",
                },
              ]}
            />
          </div>
        </section>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Custom Header
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <SpotlightCards
              eyebrow="Why us"
              heading="Built different"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
