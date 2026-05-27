"use client";

import { BackLink } from "@/components/back-link";
import { HeroLiquidMetal } from "@/components/ui/hero-liquid-metal";

export default function HeroLiquidMetalPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Hero Liquid Metal
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Hero section with a liquid metal shader effect. Reflective,
            chrome-like visuals that respond to time and composition.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Default
          </h2>
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            <HeroLiquidMetal
              title="Chrome reflections"
              description="Liquid metal shader brings a premium, tactile feel to hero sections."
              showCta
              ctaProps={{
                label: "Get Started",
                href: "#",
              }}
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            With badges and subtitle
          </h2>
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            <HeroLiquidMetal
              title="Premium by default"
              subtitle="Liquid Metal"
              description="Pair the chrome shader with tech badges for a modern product hero."
              showBadges
              techStack={[
                { name: "React 19" },
                { name: "Next.js 16" },
                { name: "Shaders" },
              ]}
              showCta
              ctaProps={{
                label: "Start Building",
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
            <HeroLiquidMetal
              title="Pure metal"
              description="Let the shader do the talking."
            />
          </div>
        </section>
      </div>
    </div>
  );
}
