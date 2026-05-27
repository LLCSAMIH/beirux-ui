"use client";

export const dynamic = "force-dynamic";

import {
  ChoicePoll,
  ChoicePollRoot,
  ChoicePollHeader,
  ChoicePollTitle,
  ChoicePollDescription,
  ChoicePollOptions,
  ChoicePollOption,
  ChoicePollIndicator,
  ChoicePollLabel,
  ChoicePollPercentage,
  ChoicePollFooter,
} from "@/components/ui/choice-poll"
import { BackLink } from "@/components/back-link"
import { useState } from "react"

const frameworkVotes: Record<string, number> = {
  next: 842,
  remix: 356,
  astro: 521,
  svelte: 289,
}

const designVotes: Record<string, number> = {
  neo: 215,
  glass: 487,
  clay: 163,
}

export default function ChoicePollPage() {
  const [selected1, setSelected1] = useState<string>("")
  const [voted1, setVoted1] = useState(false)
  const [selected2, setSelected2] = useState<string>("")
  const [voted2, setVoted2] = useState(false)

  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Choice Poll
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Animated voting/polling component with smooth bar transitions,
            keyboard navigation, and percentage reveals on submission.
          </p>
        </div>

        <div className="space-y-16">
          {/* Framework poll */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Framework Poll
            </h2>
            <ChoicePoll.Root
              value={selected1}
              onValueChange={(v) => setSelected1(v as string)}
              votes={frameworkVotes}
              showResults
              hasVoted={voted1}
            >
              <ChoicePoll.Header>
                <ChoicePoll.Title>
                  What is your preferred framework?
                </ChoicePoll.Title>
                <ChoicePoll.Description>
                  Select one option, then click Vote to see results.
                </ChoicePoll.Description>
              </ChoicePoll.Header>
              <ChoicePoll.Options>
                {[
                  { value: "next", label: "Next.js" },
                  { value: "remix", label: "Remix" },
                  { value: "astro", label: "Astro" },
                  { value: "svelte", label: "SvelteKit" },
                ].map((opt) => (
                  <ChoicePoll.Option key={opt.value} value={opt.value}>
                    <ChoicePoll.Indicator />
                    <ChoicePoll.Label>{opt.label}</ChoicePoll.Label>
                    <ChoicePoll.Percentage />
                  </ChoicePoll.Option>
                ))}
              </ChoicePoll.Options>
              {!voted1 && selected1 && (
                <button
                  onClick={() => setVoted1(true)}
                  className="mt-2 rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition-colors"
                >
                  Vote
                </button>
              )}
              <ChoicePoll.Footer />
            </ChoicePoll.Root>
          </section>

          {/* Design poll */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Design Preference
            </h2>
            <ChoicePoll.Root
              value={selected2}
              onValueChange={(v) => setSelected2(v as string)}
              votes={designVotes}
              showResults
              hasVoted={voted2}
            >
              <ChoicePoll.Header>
                <ChoicePoll.Title>
                  Which design trend will dominate 2026?
                </ChoicePoll.Title>
              </ChoicePoll.Header>
              <ChoicePoll.Options>
                {[
                  { value: "neo", label: "Neo-brutalism" },
                  { value: "glass", label: "Glassmorphism" },
                  { value: "clay", label: "Claymorphism" },
                ].map((opt) => (
                  <ChoicePoll.Option key={opt.value} value={opt.value}>
                    <ChoicePoll.Indicator />
                    <ChoicePoll.Label>{opt.label}</ChoicePoll.Label>
                    <ChoicePoll.Percentage />
                  </ChoicePoll.Option>
                ))}
              </ChoicePoll.Options>
              {!voted2 && selected2 && (
                <button
                  onClick={() => setVoted2(true)}
                  className="mt-2 rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition-colors"
                >
                  Vote
                </button>
              )}
              <ChoicePoll.Footer />
            </ChoicePoll.Root>
          </section>
        </div>
      </div>
    </div>
  )
}
