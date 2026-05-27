"use client";

import HoldButton from "@/components/kokonutui/hold-button";
import { BackLink } from "@/components/back-link";

export default function HoldButtonPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Hold Button
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A destructive action button that requires a sustained press to
          activate. A progress fill animates across the button while held,
          resetting on release. Five color variants for different severity
          levels.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            cva
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            touch support
          </span>
        </div>
      </div>

      {/* All variants */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Color Variants
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex flex-wrap items-center justify-center gap-4">
            <HoldButton variant="red" />
            <HoldButton variant="green" />
            <HoldButton variant="blue" />
            <HoldButton variant="orange" />
            <HoldButton variant="grey" />
          </div>
        </section>
      </div>

      {/* Custom duration */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Fast Hold (1s) vs Slow Hold (5s)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center gap-6">
            <HoldButton variant="red" holdDuration={1000} />
            <HoldButton variant="blue" holdDuration={5000} />
          </div>
        </section>
      </div>

      {/* Contextual usage */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Danger Zone
          </h2>
          <div className="rounded-xl border border-red-500/20 bg-red-500/[0.02] p-8">
            <h3 className="text-white font-medium mb-2">Delete Account</h3>
            <p className="text-sm text-neutral-500 mb-6">
              Hold the button for 3 seconds to permanently delete your account.
              This action cannot be undone.
            </p>
            <HoldButton variant="red" holdDuration={3000} />
          </div>
        </section>
      </div>
    </div>
  );
}
