"use client";

export const dynamic = "force-dynamic";

import { BackLink } from "@/components/back-link";
import {
  MinimalCard,
  MinimalCardImage,
  MinimalCardTitle,
  MinimalCardDescription,
  MinimalCardContent,
  MinimalCardFooter,
} from "@/components/ui/minimal-card";

const cards = [
  {
    title: "Dashboard Redesign",
    description: "Modern analytics interface with real-time updates.",
    image: "https://placehold.co/400x300/1a1a2e/e0e0ff?text=Dashboard",
  },
  {
    title: "Mobile App",
    description: "Cross-platform app built with React Native.",
    image: "https://placehold.co/400x300/1a1a2e/e0e0ff?text=Mobile",
  },
  {
    title: "Brand Identity",
    description: "Complete visual system from logo to guidelines.",
    image: "https://placehold.co/400x300/1a1a2e/e0e0ff?text=Brand",
  },
];

export default function MinimalCardPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Minimal Card
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Theme-aware card with layered shadow depth and subtle hover
            transitions. Subcomponents for image, title, description, content,
            and footer.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Card grid
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <MinimalCard key={card.title}>
                <MinimalCardImage src={card.image} alt={card.title} />
                <MinimalCardContent>
                  <MinimalCardTitle>{card.title}</MinimalCardTitle>
                  <MinimalCardDescription>
                    {card.description}
                  </MinimalCardDescription>
                </MinimalCardContent>
              </MinimalCard>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            With footer
          </h2>
          <div className="max-w-sm mx-auto">
            <MinimalCard>
              <MinimalCardImage
                src="https://placehold.co/400x300/1a1a2e/e0e0ff?text=Featured"
                alt="Featured project"
              />
              <MinimalCardContent>
                <MinimalCardTitle>Featured Project</MinimalCardTitle>
                <MinimalCardDescription>
                  A showcase card with all subcomponents rendered.
                </MinimalCardDescription>
              </MinimalCardContent>
              <MinimalCardFooter>
                <span className="text-xs text-neutral-500">
                  Updated 2 days ago
                </span>
              </MinimalCardFooter>
            </MinimalCard>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Text-only (no image)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MinimalCard>
              <MinimalCardContent>
                <MinimalCardTitle>Simple note</MinimalCardTitle>
                <MinimalCardDescription>
                  Cards work without images too. The shadow depth and hover
                  effect carry the visual weight.
                </MinimalCardDescription>
              </MinimalCardContent>
            </MinimalCard>
            <MinimalCard>
              <MinimalCardContent>
                <MinimalCardTitle>Another note</MinimalCardTitle>
                <MinimalCardDescription>
                  Minimal but not empty. The layered shadows give it substance.
                </MinimalCardDescription>
              </MinimalCardContent>
            </MinimalCard>
          </div>
        </section>
      </div>
    </div>
  );
}
