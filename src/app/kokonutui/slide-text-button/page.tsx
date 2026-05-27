"use client";

import SlideTextButton from "@/components/kokonutui/slide-text-button";
import { BackLink } from "@/components/back-link";

export default function SlideTextButtonPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Slide Text Button
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          An animated link button that slides the text vertically on hover,
          revealing a second label underneath. Supports default and ghost
          variants.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            button
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            hover animation
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default Variant
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <SlideTextButton
              text="Browse Components"
              hoverText="Let's Go"
              href="#"
            />
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Ghost Variant
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <SlideTextButton
              text="Learn More"
              hoverText="Read the Docs"
              href="#"
              variant="ghost"
            />
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Same Text (No Hover Text)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center gap-6">
            <SlideTextButton text="Get Started" href="#" />
            <SlideTextButton text="View Pricing" href="#" variant="ghost" />
          </div>
        </section>
      </div>
    </div>
  );
}
