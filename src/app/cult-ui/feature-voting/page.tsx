"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import {
  FeatureVoting,
  FeatureVotingRoot,
  FeatureVotingItem,
  FeatureVotingTrigger,
  FeatureVotingCount,
  FeatureVotingTitle,
  FeatureVotingDescription,
  FeatureVotingGroup,
} from "@/components/ui/feature-voting";
import { BackLink } from "@/components/back-link";
import { ChevronUp } from "lucide-react";

const features = [
  { id: "api-v2", title: "API v2", description: "New REST API with GraphQL support", votes: 42 },
  { id: "webhooks", title: "Webhooks", description: "Real-time event notifications", votes: 38 },
  { id: "dark-theme", title: "Dark Theme", description: "System-wide dark mode support", votes: 67 },
  { id: "mobile-app", title: "Mobile App", description: "Native iOS and Android apps", votes: 55 },
  { id: "sso", title: "SSO", description: "Single sign-on with SAML and OAuth", votes: 23 },
];

export default function FeatureVotingPage() {
  const [votes, setVotes] = useState<Record<string, number>>(
    Object.fromEntries(features.map((f) => [f.id, f.votes]))
  );
  const [voted, setVoted] = useState<Set<string>>(new Set());

  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Feature Voting
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          {/* Sorted by votes */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Feature Board (Sorted by Votes)
            </h2>
            <div className="max-w-lg mx-auto">
              <FeatureVotingRoot
                value={votes}
                onValueChange={setVotes}
                votedFeatures={voted}
                onVotedFeaturesChange={setVoted}
              >
                <FeatureVotingGroup sortBy="votes-desc" className="space-y-3">
                  {features.map((feature) => (
                    <FeatureVotingItem
                      key={feature.id}
                      value={feature.id}
                      className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                    >
                      <FeatureVotingTrigger className="flex flex-col items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/15 transition-colors data-[state=voted]:border-blue-500/50 data-[state=voted]:bg-blue-500/10 data-[state=voted]:text-blue-400">
                        <ChevronUp className="h-4 w-4" />
                        <FeatureVotingCount className="text-sm font-bold tabular-nums" />
                      </FeatureVotingTrigger>
                      <div className="flex-1">
                        <FeatureVotingTitle className="font-semibold">{feature.title}</FeatureVotingTitle>
                        <FeatureVotingDescription className="text-sm text-neutral-400 block mt-0.5">
                          {feature.description}
                        </FeatureVotingDescription>
                      </div>
                    </FeatureVotingItem>
                  ))}
                </FeatureVotingGroup>
              </FeatureVotingRoot>
            </div>
          </section>

          {/* Unsorted */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Simple List
            </h2>
            <div className="max-w-lg mx-auto">
              <FeatureVotingRoot
                defaultValue={{ feat1: 12, feat2: 8, feat3: 24 }}
              >
                <div className="space-y-2">
                  {[
                    { id: "feat1", title: "Export to PDF" },
                    { id: "feat2", title: "Bulk actions" },
                    { id: "feat3", title: "Custom fields" },
                  ].map((f) => (
                    <FeatureVotingItem
                      key={f.id}
                      value={f.id}
                      className="flex items-center gap-3 rounded-lg border border-white/10 p-3"
                    >
                      <FeatureVotingTrigger className="rounded-md border border-white/10 px-2 py-1 text-xs hover:bg-white/10 transition-colors data-[state=voted]:text-green-400">
                        <FeatureVotingCount />
                      </FeatureVotingTrigger>
                      <FeatureVotingTitle className="text-sm">{f.title}</FeatureVotingTitle>
                    </FeatureVotingItem>
                  ))}
                </div>
              </FeatureVotingRoot>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
