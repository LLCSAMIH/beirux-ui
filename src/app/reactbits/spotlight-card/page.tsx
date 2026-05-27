"use client";

import SpotlightCard from "@/components/SpotlightCard";
import { BackLink } from "@/components/back-link";

export default function SpotlightCardPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Spotlight Card
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Card with a radial spotlight that follows the cursor. The glow
            reveals a subtle highlight effect on hover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Default white spotlight */}
          <div className="flex flex-col items-center gap-4">
            <SpotlightCard className="w-full aspect-[4/3] rounded-2xl bg-neutral-900 border border-white/10">
              <div className="flex flex-col items-center justify-center h-full p-6 text-center relative z-10">
                <h3 className="text-white text-lg font-semibold">Analytics</h3>
                <p className="text-neutral-400 text-sm mt-2">
                  Track user behavior in real-time
                </p>
              </div>
            </SpotlightCard>
            <p className="text-xs text-neutral-500 text-center">
              Default (white spotlight)
            </p>
          </div>

          {/* Blue spotlight */}
          <div className="flex flex-col items-center gap-4">
            <SpotlightCard
              className="w-full aspect-[4/3] rounded-2xl bg-neutral-900 border border-white/10"
              spotlightColor="rgba(82, 39, 255, 0.35)"
            >
              <div className="flex flex-col items-center justify-center h-full p-6 text-center relative z-10">
                <h3 className="text-white text-lg font-semibold">Security</h3>
                <p className="text-neutral-400 text-sm mt-2">
                  End-to-end encryption for all data
                </p>
              </div>
            </SpotlightCard>
            <p className="text-xs text-neutral-500 text-center">
              Purple spotlight
            </p>
          </div>

          {/* Green spotlight */}
          <div className="flex flex-col items-center gap-4">
            <SpotlightCard
              className="w-full aspect-[4/3] rounded-2xl bg-neutral-900 border border-white/10"
              spotlightColor="rgba(34, 197, 94, 0.3)"
            >
              <div className="flex flex-col items-center justify-center h-full p-6 text-center relative z-10">
                <h3 className="text-white text-lg font-semibold">Status</h3>
                <p className="text-neutral-400 text-sm mt-2">
                  99.9% uptime guaranteed SLA
                </p>
              </div>
            </SpotlightCard>
            <p className="text-xs text-neutral-500 text-center">
              Green spotlight
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
