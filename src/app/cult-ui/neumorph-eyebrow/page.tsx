"use client";

export const dynamic = "force-dynamic";

import { NeumorphEyebrow } from "@/components/ui/neumorph-eyebrow";
import { BackLink } from "@/components/back-link";

export default function NeumorphEyebrowPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Neumorph Eyebrow
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-12">
          {/* Default */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Default
            </h2>
            <div className="flex flex-wrap gap-4 bg-white/5 rounded-2xl p-8">
              <NeumorphEyebrow>New feature</NeumorphEyebrow>
              <NeumorphEyebrow>v2.0 released</NeumorphEyebrow>
              <NeumorphEyebrow>Beta access</NeumorphEyebrow>
            </div>
          </section>

          {/* Primary */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Primary
            </h2>
            <div className="flex flex-wrap gap-4 bg-white/5 rounded-2xl p-8">
              <NeumorphEyebrow intent="primary">Launching soon</NeumorphEyebrow>
              <NeumorphEyebrow intent="primary">AI-powered</NeumorphEyebrow>
            </div>
          </section>

          {/* Secondary */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Secondary
            </h2>
            <div className="flex flex-wrap gap-4 bg-white/5 rounded-2xl p-8">
              <NeumorphEyebrow intent="secondary">Open source</NeumorphEyebrow>
              <NeumorphEyebrow intent="secondary">Free forever</NeumorphEyebrow>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
