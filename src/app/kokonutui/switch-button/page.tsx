"use client";

import SwitchButton from "@/components/kokonutui/switch-button";
import { BackLink } from "@/components/back-link";

export default function SwitchButtonPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Switch Button
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A theme toggle button with rotating sun icon, gradient background,
          shimmer sweep, and radial glow on hover. Integrates with next-themes
          for automatic dark/light switching.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            next-themes
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            lucide
          </span>
        </div>
      </div>

      {/* Size variants */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Size Variants
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center gap-6">
            <SwitchButton size="sm" />
            <SwitchButton size="default" />
            <SwitchButton size="lg" />
          </div>
        </section>
      </div>

      {/* Without label */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Icon Only (No Label)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center gap-6">
            <SwitchButton showLabel={false} size="sm" />
            <SwitchButton showLabel={false} size="default" />
            <SwitchButton showLabel={false} size="lg" />
          </div>
        </section>
      </div>

      {/* In a nav bar context */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            In Navigation Context
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 flex items-center justify-between">
            <span className="text-white font-medium px-4">My App</span>
            <SwitchButton />
          </div>
        </section>
      </div>
    </div>
  );
}
