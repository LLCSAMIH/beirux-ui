"use client";

export const dynamic = "force-dynamic";

import GradientButton from "@/components/kokonutui/gradient-button";
import { BackLink } from "@/components/back-link";

export default function GradientButtonPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Gradient Button
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A layered gradient button with glowing border, inner shadow, and
          gradient text. Three color variants (emerald, purple, orange) with
          both light and dark mode support. Hover reveals an additional gradient
          overlay.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            gradient layers
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            glow
          </span>
        </div>
      </div>

      {/* All variants */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Color Variants
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center gap-6">
            <GradientButton variant="emerald" label="Emerald" />
            <GradientButton variant="purple" label="Purple" />
            <GradientButton variant="orange" label="Orange" />
          </div>
        </section>
      </div>

      {/* Custom labels */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            CTA Context
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex flex-col items-center justify-center gap-4">
            <GradientButton variant="emerald" label="Get Started" />
            <GradientButton variant="purple" label="Upgrade to Pro" />
            <GradientButton variant="orange" label="Deploy Now" />
          </div>
        </section>
      </div>

      {/* Side by side comparison */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default Label
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <GradientButton />
          </div>
        </section>
      </div>
    </div>
  );
}
