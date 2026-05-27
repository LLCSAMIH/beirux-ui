"use client";

export const dynamic = "force-dynamic";

import { TweetGrid } from "@/components/ui/tweet-grid";
import { BackLink } from "@/components/back-link";

const sampleTweets = [
  "1234567890", "2345678901", "3456789012",
  "4567890123", "5678901234", "6789012345",
  "7890123456", "8901234567", "9012345678",
];

export default function TweetGridPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Tweet Grid
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              3 columns (default)
            </h2>
            <TweetGrid tweets={sampleTweets} columns={3} spacing="md" />
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              2 columns, large spacing
            </h2>
            <TweetGrid tweets={sampleTweets.slice(0, 4)} columns={2} spacing="lg" />
          </section>
        </div>
      </div>
    </div>
  );
}
