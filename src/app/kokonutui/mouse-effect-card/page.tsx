"use client";

export const dynamic = "force-dynamic";

import MouseEffectCard from "@/components/kokonutui/mouse-effect-card";
import { BackLink } from "@/components/back-link";

const cards = [
  {
    title: "Quantum",
    subtitle: "Next-generation computing infrastructure for the enterprise.",
    topText: "Featured",
    topSubtext: "Explore the platform",
    primaryCtaText: "Get Access",
    secondaryCtaText: "Documentation",
    footerText: "Trusted by 500+ teams",
    dotSpacing: 16,
    repulsionRadius: 80,
  },
  {
    title: "Neural",
    subtitle: "Adaptive AI systems that learn from every interaction.",
    topText: "New Release",
    topSubtext: "v4.0 now available",
    primaryCtaText: "Try It Free",
    secondaryCtaText: "Watch Demo",
    footerText: "Built for scale",
    dotSpacing: 12,
    repulsionRadius: 100,
    repulsionStrength: 30,
  },
  {
    title: "Cipher",
    subtitle: "Zero-knowledge encryption for sensitive data pipelines.",
    topText: "Security",
    topSubtext: "SOC 2 certified",
    primaryCtaText: "Start Trial",
    secondaryCtaText: undefined,
    footerText: "End-to-end encrypted",
    dotSpacing: 20,
    repulsionRadius: 60,
    dotSize: 3,
  },
];

export default function MouseEffectCardPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
            KokonutUI
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Mouse Effect Card
          </h1>
          <p className="mt-4 text-lg text-neutral-400 max-w-xl">
            Interactive cards with animated dot patterns that respond to mouse
            movement. Dots ripple away from the cursor and glow brighter near
            it, creating a living particle field effect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {cards.map((card) => (
            <MouseEffectCard
              key={card.title}
              title={card.title}
              subtitle={card.subtitle}
              topText={card.topText}
              topSubtext={card.topSubtext}
              primaryCtaText={card.primaryCtaText}
              secondaryCtaText={card.secondaryCtaText}
              footerText={card.footerText}
              dotSpacing={card.dotSpacing}
              repulsionRadius={card.repulsionRadius}
              repulsionStrength={card.repulsionStrength}
              dotSize={card.dotSize}
            />
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-neutral-500">
          <div className="border border-white/5 rounded-xl p-5">
            <p className="text-white font-medium mb-1">Default density</p>
            <p>16px dot spacing, 80px repulsion radius. Balanced look.</p>
          </div>
          <div className="border border-white/5 rounded-xl p-5">
            <p className="text-white font-medium mb-1">Dense + strong</p>
            <p>12px spacing, 100px radius, 30 strength. More particles, bigger ripple.</p>
          </div>
          <div className="border border-white/5 rounded-xl p-5">
            <p className="text-white font-medium mb-1">Sparse + subtle</p>
            <p>20px spacing, 60px radius, 3px dots. Minimalist, gentle effect.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
