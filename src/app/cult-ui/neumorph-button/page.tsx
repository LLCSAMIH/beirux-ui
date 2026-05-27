"use client";

import { BackLink } from "@/components/back-link";
import NeumorphButton from "@/components/ui/neumorph-button";

export default function NeumorphButtonPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Neumorph Button
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Neumorphic button with inset shadows, spring tap/hover animations,
            and loading state. Four intent variants and three sizes.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
            Default
          </h2>
          <div className="flex flex-wrap gap-4">
            <NeumorphButton intent="default" size="small">
              Small
            </NeumorphButton>
            <NeumorphButton intent="default" size="medium">
              Medium
            </NeumorphButton>
            <NeumorphButton intent="default" size="large">
              Large
            </NeumorphButton>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
            Primary
          </h2>
          <div className="flex flex-wrap gap-4">
            <NeumorphButton intent="primary" size="small">
              Small
            </NeumorphButton>
            <NeumorphButton intent="primary" size="medium">
              Continue
            </NeumorphButton>
            <NeumorphButton intent="primary" size="large">
              Get Started
            </NeumorphButton>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
            Secondary and Danger
          </h2>
          <div className="flex flex-wrap gap-4">
            <NeumorphButton intent="secondary" size="medium">
              Cancel
            </NeumorphButton>
            <NeumorphButton intent="danger" size="medium">
              Delete
            </NeumorphButton>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
            Loading state
          </h2>
          <div className="flex flex-wrap gap-4">
            <NeumorphButton intent="default" loading>
              Loading...
            </NeumorphButton>
            <NeumorphButton intent="primary" loading>
              Saving...
            </NeumorphButton>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
            Disabled
          </h2>
          <div className="flex flex-wrap gap-4">
            <NeumorphButton intent="default" disabled>
              Disabled
            </NeumorphButton>
            <NeumorphButton intent="primary" disabled>
              Disabled
            </NeumorphButton>
            <NeumorphButton intent="danger" disabled>
              Disabled
            </NeumorphButton>
          </div>
        </section>
      </div>
    </div>
  );
}
