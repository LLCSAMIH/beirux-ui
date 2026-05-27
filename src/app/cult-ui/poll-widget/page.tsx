"use client";

import { useState, useCallback } from "react";
import { PollWidget, type PollOption } from "@/components/ui/poll-widget";
import { BackLink } from "@/components/back-link";
import { Zap, Palette, Code } from "lucide-react";

const frameworkOptions: PollOption[] = [
  { id: "next", label: "Next.js", description: "React framework" },
  { id: "remix", label: "Remix", description: "Full stack web framework" },
  { id: "astro", label: "Astro", description: "Content-first framework" },
  {
    id: "svelte",
    label: "SvelteKit",
    description: "Cybernetically enhanced",
  },
];

const featureOptions: PollOption[] = [
  {
    id: "speed",
    label: "Performance",
    icon: <Zap className="h-4 w-4" />,
  },
  {
    id: "design",
    label: "Design system",
    icon: <Palette className="h-4 w-4" />,
  },
  {
    id: "dx",
    label: "Developer experience",
    icon: <Code className="h-4 w-4" />,
  },
];

function InlinePollDemo() {
  const [votes, setVotes] = useState<Record<string, number>>({
    next: 42,
    remix: 18,
    astro: 25,
    svelte: 15,
  });
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = useCallback((selectedIds: string[]) => {
    setVotes((prev) => {
      const next = { ...prev };
      selectedIds.forEach((id) => {
        next[id] = (next[id] || 0) + 1;
      });
      return next;
    });
    setHasVoted(true);
  }, []);

  return (
    <PollWidget
      question="What is your favorite framework?"
      description="Pick one."
      options={frameworkOptions}
      votes={votes}
      hasVoted={hasVoted}
      onVote={handleVote}
      mode="inline"
    >
      <PollWidget.Content />
    </PollWidget>
  );
}

function MultiSelectPollDemo() {
  const [votes, setVotes] = useState<Record<string, number>>({
    speed: 31,
    design: 27,
    dx: 44,
  });
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = useCallback((selectedIds: string[]) => {
    setVotes((prev) => {
      const next = { ...prev };
      selectedIds.forEach((id) => {
        next[id] = (next[id] || 0) + 1;
      });
      return next;
    });
    setHasVoted(true);
  }, []);

  return (
    <PollWidget
      question="What matters most to you?"
      description="Select all that apply."
      options={featureOptions}
      votes={votes}
      hasVoted={hasVoted}
      onVote={handleVote}
      mode="inline"
      multiple
    >
      <PollWidget.Content />
    </PollWidget>
  );
}

export default function PollWidgetPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Poll Widget
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Single Select (Inline)
            </h2>
            <div className="bg-white/5 rounded-2xl p-8">
              <InlinePollDemo />
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Multi Select with Icons
            </h2>
            <div className="bg-white/5 rounded-2xl p-8">
              <MultiSelectPollDemo />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
