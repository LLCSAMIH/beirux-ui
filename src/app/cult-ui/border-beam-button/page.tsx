"use client";

export const dynamic = "force-dynamic";

import {
  BorderBeamButton,
  BorderBeamIconButton,
} from "@/components/ui/border-beam-button"
import { BackLink } from "@/components/back-link"
import { Sparkles, ArrowRight, Star } from "lucide-react"

export default function BorderBeamButtonPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Border Beam Button
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            A button wrapped with an animated beam of light that traces along
            the border. Supports standard button variants plus beam
            customization.
          </p>
        </div>

        <div className="space-y-16">
          {/* Variants */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Button Variants
            </h2>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <BorderBeamButton type="button">Default</BorderBeamButton>
              <BorderBeamButton type="button" variant="outline">
                Outline
              </BorderBeamButton>
              <BorderBeamButton type="button" variant="secondary">
                Secondary
              </BorderBeamButton>
            </div>
          </section>

          {/* Icon buttons */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Icon Buttons
            </h2>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <BorderBeamIconButton type="button">
                <Sparkles className="h-4 w-4" />
              </BorderBeamIconButton>
              <BorderBeamIconButton type="button">
                <Star className="h-4 w-4" />
              </BorderBeamIconButton>
              <BorderBeamIconButton type="button">
                <ArrowRight className="h-4 w-4" />
              </BorderBeamIconButton>
            </div>
          </section>

          {/* In context */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Hero CTA
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                Ready to ship?
              </h3>
              <p className="text-sm text-white/50 mb-6 max-w-sm mx-auto">
                Deploy your project in seconds with zero configuration.
              </p>
              <BorderBeamButton type="button">
                <Sparkles className="h-4 w-4 mr-2" />
                Deploy Now
              </BorderBeamButton>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
