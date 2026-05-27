"use client"

import { CosmicButton } from "@/components/ui/cosmic-button"
import { BackLink } from "@/components/back-link"

export default function CosmicButtonPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Cosmic Button
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            An animated button with a cosmic gradient border effect. Renders as
            a link by default, or as a button with the as="button" prop.
          </p>
        </div>

        <div className="space-y-16">
          {/* As button */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              As Button
            </h2>
            <div className="flex flex-wrap gap-6 items-center justify-center">
              <CosmicButton as="button">Launch</CosmicButton>
              <CosmicButton as="button">Explore</CosmicButton>
            </div>
          </section>

          {/* As link */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              As Link (default)
            </h2>
            <div className="flex flex-wrap gap-6 items-center justify-center">
              <CosmicButton href="#">Get Started</CosmicButton>
              <CosmicButton href="#">Documentation</CosmicButton>
            </div>
          </section>

          {/* Hero CTA */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Hero CTA
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-3">
                Into the cosmos
              </h3>
              <p className="text-sm text-white/50 mb-8 max-w-sm mx-auto">
                Experience the next generation of interactive design, powered by
                physics and light.
              </p>
              <CosmicButton as="button">Begin Journey</CosmicButton>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
