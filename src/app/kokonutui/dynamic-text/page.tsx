"use client";

export const dynamic = "force-dynamic";

import DynamicText from "@/components/kokonutui/dynamic-text";
import { BackLink } from "@/components/back-link";

export default function DynamicTextPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Dynamic Text
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A greeting carousel that cycles through "Hello" in multiple
          languages with vertical slide and fade transitions. Stops on
          the last greeting. Self-contained with no configurable props.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            AnimatePresence
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            i18n greetings
          </span>
        </div>
      </div>

      {/* Demo */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Demo
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center min-h-[200px]">
            <DynamicText />
          </div>
        </section>
      </div>

      {/* Notes */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Languages
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 space-y-2">
            {[
              "English", "Japanese", "French", "Spanish",
              "Korean", "Italian", "German"
            ].map((lang) => (
              <span
                key={lang}
                className="inline-block mr-2 text-xs px-3 py-1 rounded-full bg-white/5 text-neutral-400"
              >
                {lang}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Vertical Slide Transition",
                desc: "Each greeting slides up and fades in from below, then exits upward with a fade out.",
              },
              {
                title: "Dot Indicator",
                desc: "A small dot appears next to the text that pulses in sync with the language transitions.",
              },
              {
                title: "Auto-Stop",
                desc: "The animation runs through all greetings once and stops on the last one. It does not loop.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
              >
                <h3 className="text-base font-medium text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
