"use client";

export const dynamic = "force-dynamic";

import { BackLink } from "@/components/back-link";

export default function AuroraBackgroundPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Aurora Background
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-32">
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.03] p-8">
          <h3 className="text-amber-400 font-medium mb-2">
            Not Available in Registry
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            <code className="text-neutral-300 bg-white/5 px-1.5 py-0.5 rounded text-xs">
              aurora-background
            </code>{" "}
            does not exist in the KokonutUI shadcn registry (returns 404). This
            may be a pro-only component or it may have been renamed. KokonutUI's
            available background components are:{" "}
            <code className="text-neutral-300 bg-white/5 px-1.5 py-0.5 rounded text-xs">
              beams-background
            </code>
            ,{" "}
            <code className="text-neutral-300 bg-white/5 px-1.5 py-0.5 rounded text-xs">
              background-paths
            </code>
            ,{" "}
            <code className="text-neutral-300 bg-white/5 px-1.5 py-0.5 rounded text-xs">
              flow-field
            </code>
            , and{" "}
            <code className="text-neutral-300 bg-white/5 px-1.5 py-0.5 rounded text-xs">
              shape-hero
            </code>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
