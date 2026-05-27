"use client";

import CardFlip from "@/components/kokonutui/card-flip";
import { BackLink } from "@/components/back-link";

const cards = [
  {
    title: "Design Systems",
    subtitle: "Explore the fundamentals",
    description: "Dive deep into the world of modern UI/UX design.",
    features: ["UI/UX", "Modern Design", "Tailwind CSS", "Kokonut UI"],
  },
  {
    title: "AI Engineering",
    subtitle: "Build intelligent agents",
    description: "Ship production-grade AI systems that learn and adapt.",
    features: ["LLM Agents", "RAG Pipelines", "Tool Use", "Eval Loops"],
  },
  {
    title: "Edge Computing",
    subtitle: "Deploy at the edge",
    description:
      "Sub-millisecond responses with globally distributed infrastructure.",
    features: [
      "CDN Routing",
      "Serverless Functions",
      "WebSocket Streams",
      "Auto Scaling",
    ],
  },
];

export default function CardFlipPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
            KokonutUI
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Card Flip
          </h1>
          <p className="mt-4 text-lg text-neutral-400 max-w-xl">
            Hover over each card to reveal additional details on the back. A
            smooth 3D flip transition powered by CSS perspective transforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {cards.map((card) => (
            <CardFlip
              key={card.title}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              features={card.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
