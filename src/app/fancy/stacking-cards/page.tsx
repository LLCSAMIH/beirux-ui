"use client";

import StackingCards, {
  StackingCardItem,
} from "@/components/fancy/blocks/stacking-cards";
import { BackLink } from "@/components/back-link";

const cards = [
  {
    title: "Design",
    description:
      "Every pixel considered. Typography, spacing, and color working in concert to create something that feels inevitable.",
    gradient: "from-violet-600 to-indigo-600",
    accent: "bg-violet-400",
  },
  {
    title: "Engineer",
    description:
      "Clean architecture, zero compromise on performance. Code that reads like prose and runs like a machine.",
    gradient: "from-emerald-600 to-teal-600",
    accent: "bg-emerald-400",
  },
  {
    title: "Ship",
    description:
      "From concept to production in days, not months. Automated pipelines, instant previews, continuous delivery.",
    gradient: "from-amber-600 to-orange-600",
    accent: "bg-amber-400",
  },
  {
    title: "Iterate",
    description:
      "Data-driven refinement. Real user signals feed back into design, closing the loop between intention and impact.",
    gradient: "from-rose-600 to-pink-600",
    accent: "bg-rose-400",
  },
];

export default function StackingCardsPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Stacking Cards
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Scroll down. Cards stack on top of each other with a subtle scale
            reduction, creating a layered depth effect.
          </p>
        </div>
      </div>

      <StackingCards totalCards={cards.length} className="relative">
        {cards.map((card, i) => (
          <StackingCardItem key={i} index={i} className="h-screen px-6">
            <div className="max-w-4xl mx-auto h-full flex items-center justify-center">
              <div
                className={`w-full rounded-3xl bg-gradient-to-br ${card.gradient} p-10 md:p-16 shadow-2xl`}
              >
                <div
                  className={`${card.accent} w-10 h-1 rounded-full mb-6`}
                />
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {card.title}
                </h2>
                <p className="text-white/70 text-base md:text-lg max-w-lg leading-relaxed">
                  {card.description}
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <span className="text-sm font-mono text-white/40">
                    0{i + 1} / 0{cards.length}
                  </span>
                </div>
              </div>
            </div>
          </StackingCardItem>
        ))}
      </StackingCards>
    </div>
  );
}
