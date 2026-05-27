"use client";

export const dynamic = "force-dynamic";

import SwooshText from "@/components/kokonutui/swoosh-text";
import { BackLink } from "@/components/back-link";

export default function SwooshTextPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Swoosh Text
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A hover-activated text effect with layered color shadows that
          expand outward on hover, creating a dramatic swoosh trail
          behind the text. The shadows collapse back on mouse leave.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            hover effect
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            text-shadow
          </span>
        </div>
      </div>

      {/* Demo: Default */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default (Hover to activate)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-12 flex items-center justify-center">
            <SwooshText text="Hover Me" />
          </div>
        </section>
      </div>

      {/* Demo: Custom Text */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Custom Text
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-12 flex items-center justify-center">
            <SwooshText text="BEIRUX" />
          </div>
        </section>
      </div>

      {/* Demo: Custom Shadow Colors */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Custom Shadow Colors (Blue/Purple)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-12 flex items-center justify-center">
            <SwooshText
              text="Electric"
              shadowColors={{
                first: "#3b82f6",
                second: "#8b5cf6",
                third: "#6366f1",
                fourth: "#a855f7",
                glow: "#7c3aed",
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
