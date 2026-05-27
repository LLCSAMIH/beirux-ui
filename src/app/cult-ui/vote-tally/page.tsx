"use client";

export const dynamic = "force-dynamic";

import { VoteTally } from "@/components/ui/vote-tally";
import { BackLink } from "@/components/back-link";

const features = [
  { id: "dark-mode", title: "Dark Mode", description: "System-wide dark theme", votes: 42 },
  { id: "ai-assist", title: "AI Assistant", description: "In-app coding companion", votes: 38 },
  { id: "collab", title: "Real-time Collaboration", description: "Multi-cursor editing", votes: 27 },
  { id: "plugins", title: "Plugin System", description: "Extensible architecture", votes: 19 },
];

export default function VoteTallyPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Vote Tally
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Feature voting (sorted by votes)
            </h2>
            <VoteTally.Root
              defaultValue={Object.fromEntries(features.map((f) => [f.id, f.votes]))}
              className="space-y-2"
            >
              <VoteTally.Group sortBy="votes-desc" className="space-y-2">
                {features.map((feature) => (
                  <VoteTally.Item
                    key={feature.id}
                    value={feature.id}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 data-[voted]:border-blue-500/30 data-[voted]:bg-blue-500/5 transition-colors"
                  >
                    <VoteTally.Trigger className="flex flex-col items-center gap-1 rounded-lg border border-white/10 px-3 py-2 hover:bg-white/5 transition-colors data-[state=voted]:border-blue-500/50 data-[state=voted]:text-blue-400">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-current">
                        <path d="M6 0L12 8H0L6 0Z" fill="currentColor" />
                      </svg>
                      <VoteTally.Count className="text-sm font-mono tabular-nums" />
                    </VoteTally.Trigger>
                    <div>
                      <VoteTally.Title className="font-medium text-white block">{feature.title}</VoteTally.Title>
                      <VoteTally.Description className="text-sm text-neutral-400">{feature.description}</VoteTally.Description>
                    </div>
                  </VoteTally.Item>
                ))}
              </VoteTally.Group>
            </VoteTally.Root>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Simple unsorted list
            </h2>
            <VoteTally.Root className="space-y-2">
              {["Option A", "Option B", "Option C"].map((label, i) => (
                <VoteTally.Item
                  key={label}
                  value={label}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-3 data-[voted]:border-emerald-500/30 transition-colors"
                >
                  <VoteTally.Trigger className="text-xs border border-white/10 rounded px-2 py-1 hover:bg-white/5 data-[state=voted]:text-emerald-400 data-[state=voted]:border-emerald-500/50 transition-colors">
                    <VoteTally.Count />
                  </VoteTally.Trigger>
                  <VoteTally.Title className="text-sm text-white">{label}</VoteTally.Title>
                </VoteTally.Item>
              ))}
            </VoteTally.Root>
          </section>
        </div>
      </div>
    </div>
  );
}
