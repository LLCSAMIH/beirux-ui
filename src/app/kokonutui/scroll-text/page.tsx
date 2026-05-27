"use client";

import ScrollText from "@/components/kokonutui/scroll-text";
import { BackLink } from "@/components/back-link";

export default function ScrollTextPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Scroll Text
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A vertically scrollable list where the active item scales up
          and gets full opacity, while surrounding items fade. Uses
          IntersectionObserver for scroll-driven active state detection.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            IntersectionObserver
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            scroll-driven
          </span>
        </div>
      </div>

      {/* Demo: Default */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default (Tech Stack)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <ScrollText />
          </div>
        </section>
      </div>

      {/* Demo: Custom Texts */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Custom Texts
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <ScrollText
              texts={[
                "Strategy",
                "Design",
                "Development",
                "Marketing",
                "Analytics",
                "Automation",
                "Growth",
              ]}
            />
          </div>
        </section>
      </div>

      {/* Demo: Another variant */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Client Names
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <ScrollText
              texts={[
                "Acme Corp",
                "Globex Inc",
                "Initech",
                "Umbrella Co",
                "Wayne Enterprises",
                "Stark Industries",
                "Oscorp",
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
