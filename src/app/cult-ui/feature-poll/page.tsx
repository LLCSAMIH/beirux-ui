"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import {
  FeaturePoll,
  FeaturePollRoot,
  FeaturePollHeader,
  FeaturePollTitle,
  FeaturePollDescription,
  FeaturePollOptions,
  FeaturePollOption,
  FeaturePollIndicator,
  FeaturePollLabel,
  FeaturePollPercentage,
  FeaturePollFooter,
} from "@/components/ui/feature-poll";
import { BackLink } from "@/components/back-link";

export default function FeaturePollPage() {
  const [selected, setSelected] = useState<string>("");
  const [hasVoted, setHasVoted] = useState(false);

  const votes: Record<string, number> = {
    "dark-mode": 342,
    "ai-assist": 289,
    "offline": 156,
    "collab": 213,
  };

  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Feature Poll
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          {/* Interactive poll */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Interactive Poll
            </h2>
            <div className="max-w-md mx-auto">
              <FeaturePollRoot
                value={selected}
                onValueChange={(v) => setSelected(v as string)}
                votes={votes}
                hasVoted={hasVoted}
                showResults={hasVoted}
              >
                <FeaturePollHeader>
                  <FeaturePollTitle>What feature should we build next?</FeaturePollTitle>
                  <FeaturePollDescription>
                    Vote for your most wanted feature
                  </FeaturePollDescription>
                </FeaturePollHeader>
                <FeaturePollOptions>
                  {[
                    { value: "dark-mode", label: "Dark Mode Everywhere" },
                    { value: "ai-assist", label: "AI Assistant" },
                    { value: "offline", label: "Offline Support" },
                    { value: "collab", label: "Real-time Collaboration" },
                  ].map((option) => (
                    <FeaturePollOption key={option.value} value={option.value}>
                      <FeaturePollIndicator />
                      <FeaturePollLabel>{option.label}</FeaturePollLabel>
                      <FeaturePollPercentage />
                    </FeaturePollOption>
                  ))}
                </FeaturePollOptions>
                <FeaturePollFooter />
              </FeaturePollRoot>
              {!hasVoted && selected && (
                <button
                  onClick={() => setHasVoted(true)}
                  className="mt-4 w-full rounded-xl bg-white/10 py-2.5 text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  Submit Vote
                </button>
              )}
            </div>
          </section>

          {/* Pre-voted state */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Results View
            </h2>
            <div className="max-w-md mx-auto">
              <FeaturePollRoot
                value="ai-assist"
                votes={votes}
                hasVoted={true}
                showResults={true}
              >
                <FeaturePollHeader>
                  <FeaturePollTitle>Previous poll results</FeaturePollTitle>
                </FeaturePollHeader>
                <FeaturePollOptions>
                  {[
                    { value: "dark-mode", label: "Dark Mode" },
                    { value: "ai-assist", label: "AI Assistant" },
                    { value: "offline", label: "Offline Mode" },
                    { value: "collab", label: "Collaboration" },
                  ].map((option) => (
                    <FeaturePollOption key={option.value} value={option.value}>
                      <FeaturePollIndicator />
                      <FeaturePollLabel>{option.label}</FeaturePollLabel>
                      <FeaturePollPercentage />
                    </FeaturePollOption>
                  ))}
                </FeaturePollOptions>
                <FeaturePollFooter />
              </FeaturePollRoot>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
