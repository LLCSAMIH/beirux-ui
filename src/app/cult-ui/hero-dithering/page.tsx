"use client";

import { BackLink } from "@/components/back-link";
import { HeroDithering } from "@/components/ui/hero-dithering";

export default function HeroDitheringPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Hero Dithering
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            A full-bleed hero section with a real-time dithering shader
            background. Compound API with heading, description, badges, and CTA.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Default
          </h2>
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            <HeroDithering
              title="Build faster with dithering"
              description="A hero section that combines real-time shader effects with marketing layout patterns."
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
            <HeroDithering
              title="Ship with confidence"
              subtitle="Next-gen UI"
              description="Dithering shaders meet modern web development for hero sections that stand out."
              showBadges
              techStack={[
                { name: "React" },
                { name: "Next.js" },
                { name: "Tailwind" },
              ]}
              showCta
              ctaProps={{
                label: "Learn More",
                href: "#",
              }}
            />
          </div>
        </section>

        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Minimal (no CTA, no badges)
          </h2>
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            <HeroDithering
              title="Pure visual impact"
              description="Sometimes the shader speaks for itself."
            />
          </div>
        </section>
      </div>
    </div>
  );
}
