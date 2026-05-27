"use client";

import { BackLink } from "@/components/back-link";
import { HeroHeatmap } from "@/components/ui/hero-heatmap";

export default function HeroHeatmapPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Hero Heatmap
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Hero section with a real-time heatmap shader background. Same
            compound API as the other hero variants, swapping only the visual
            layer.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Default
          </h2>
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            <HeroHeatmap
              title="Data-driven design"
              description="A heatmap shader that brings warmth and motion to your hero section."
              showCta
              ctaProps={{
                label: "Explore",
                href: "#",
              }}
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            With tech badges
          </h2>
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            <HeroHeatmap
              title="Analytics at scale"
              subtitle="Real-time"
              description="Combine thermal visual patterns with clear messaging for maximum impact."
              showBadges
              techStack={[
                { name: "TypeScript" },
                { name: "Motion" },
                { name: "WebGL" },
              ]}
              showCta
              ctaProps={{
                label: "View Demo",
                href: "#",
              }}
            />
          </div>
        </section>

        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Minimal
          </h2>
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            <HeroHeatmap
              title="Feel the heat"
              description="Pure shader, no distractions."
            />
          </div>
        </section>
      </div>
    </div>
  );
}
