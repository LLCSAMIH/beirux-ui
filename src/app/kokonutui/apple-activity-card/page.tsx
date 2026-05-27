"use client";

import AppleActivityCard from "@/components/kokonutui/apple-activity-card";
import { BackLink } from "@/components/back-link";

export default function AppleActivityCardPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Apple Activity Card
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          Apple Watch-style activity rings with animated SVG progress circles,
          gradient strokes, and detailed stats. Three concentric rings for Move,
          Exercise, and Stand goals.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            SVG
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            activity rings
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <AppleActivityCard />
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Custom Title
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <AppleActivityCard title="Today's Progress" />
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            With Background
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <AppleActivityCard
              title="Weekly Summary"
              className="bg-zinc-900 rounded-3xl"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
