"use client";

export const dynamic = "force-dynamic";

import { BackLink } from "@/components/back-link";
import { HeroStaticRadialGradient } from "@/components/ui/hero-static-radial-gradient";

export default function HeroStaticRadialGradientPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Hero Static Radial Gradient
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Hero section with a static radial gradient background. Lightweight
            alternative to shader-based heroes with no WebGL dependency.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Default
          </h2>
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            <HeroStaticRadialGradient
              title="Subtle elegance"
              description="A radial gradient hero that loads instantly with zero JavaScript overhead."
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
            With badges
          </h2>
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            <HeroStaticRadialGradient
              title="Zero bundle cost"
              subtitle="CSS-only"
              description="Radial gradients work everywhere, no shader compilation needed."
              showBadges
              techStack={[
                { name: "CSS" },
                { name: "Tailwind" },
                { name: "Zero JS" },
              ]}
              showCta
              ctaProps={{
                label: "View Source",
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
            <HeroStaticRadialGradient
              title="Clean gradient"
              description="Sometimes simple is best."
            />
          </div>
        </section>
      </div>
    </div>
  );
}
