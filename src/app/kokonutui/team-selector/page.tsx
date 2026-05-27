"use client";

import TeamSelector from "@/components/kokonutui/team-selector";
import { BackLink } from "@/components/back-link";

export default function TeamSelectorPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Team Selector
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A team size picker with overlapping avatar stack, spring-animated
          counter with vertical slide transitions, and boundary shake
          feedback when hitting min/max limits.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            avatar stack
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            counter
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default (Start at 1)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <TeamSelector />
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Start at 3 Members
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <TeamSelector defaultValue={3} label="Project Team" />
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            With onChange Callback
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <TeamSelector
              defaultValue={2}
              label="Squad Size"
              onChange={(size) => console.log("Team size:", size)}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
