"use client";

import CurrencyTransfer from "@/components/kokonutui/currency-transfer";
import { BackLink } from "@/components/back-link";

export default function CurrencyTransferPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Currency Transfer
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          An animated currency transfer card that transitions from
          "processing" to "completed" with spring animations, a spinning
          progress indicator, an animated checkmark, and collapsing
          from/to sections.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            fintech
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            animated checkmark
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Demo (Auto-Completes)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <CurrencyTransfer />
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Notes
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 space-y-3 text-sm text-neutral-400">
            <p>
              The component auto-transitions from "Transfer in Progress" to
              "Transfer Completed" after 1.5 seconds. The from/to sections
              collapse together with a spring animation when completed.
            </p>
            <p>
              Hardcoded demo data: USD 500 to EUR 460 at 1:0.92 exchange rate.
              Uses shadcn Card, Tooltip, and Lucide icons internally.
            </p>
            <p>
              Wrap your layout with{" "}
              <code className="text-neutral-300 bg-white/5 px-1.5 py-0.5 rounded text-xs">
                TooltipProvider
              </code>{" "}
              if you haven't already, since the info icon uses the tooltip
              component.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
