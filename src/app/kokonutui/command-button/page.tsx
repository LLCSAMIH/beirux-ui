"use client";

export const dynamic = "force-dynamic";

import CommandButton from "@/components/kokonutui/command-button";
import { BackLink } from "@/components/back-link";

export default function CommandButtonPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Command Button
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A subtle keyboard shortcut button with a gradient shimmer on hover,
          icon rotation, and press scale. Ideal for triggering command palettes
          or search modals.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            lucide
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            shimmer
          </span>
        </div>
      </div>

      {/* Default */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center gap-6">
            <CommandButton />
          </div>
        </section>
      </div>

      {/* Custom labels */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Custom Labels
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center gap-6">
            <CommandButton>CMD + P</CommandButton>
            <CommandButton>CMD + S</CommandButton>
            <CommandButton>CMD + /</CommandButton>
          </div>
        </section>
      </div>

      {/* In context */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Search Trigger
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <div className="flex items-center gap-3 text-neutral-400 text-sm">
              <span>Press</span>
              <CommandButton />
              <span>to search</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
