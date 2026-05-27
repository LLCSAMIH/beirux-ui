"use client";

export const dynamic = "force-dynamic";

import { GradientHeading } from "@/components/ui/gradient-heading";
import { BackLink } from "@/components/back-link";

export default function GradientHeadingPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Gradient Heading
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          {/* Default: neutral gradient, good for body headings */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Default (neutral gradient)
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8">
              <GradientHeading size="xl" weight="bold">
                Build something remarkable
              </GradientHeading>
            </div>
          </section>

          {/* Light: bright white-to-gray, high contrast on dark */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Light (white-to-gray, high contrast)
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8">
              <GradientHeading variant="light" size="lg" weight="semi">
                Clarity through simplicity
              </GradientHeading>
            </div>
          </section>

          {/* Pink: accent gradient, draws attention */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Pink (accent gradient)
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8">
              <GradientHeading variant="pink" size="lg" weight="black">
                Stand out from the noise
              </GradientHeading>
            </div>
          </section>

          {/* Secondary: muted neutral, for supporting text */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Secondary (muted neutral, supporting text)
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8">
              <GradientHeading variant="secondary" size="md" weight="semi">
                The details matter most
              </GradientHeading>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
