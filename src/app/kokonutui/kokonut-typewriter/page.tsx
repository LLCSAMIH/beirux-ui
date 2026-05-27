"use client";

export const dynamic = "force-dynamic";

import TypewriterTitle from "@/components/kokonutui/type-writer";
import { BackLink } from "@/components/back-link";

export default function TypewriterPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Typewriter
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A typewriter text animation with configurable sequences, typing
          speed, delete speed, natural variance, and auto-loop. Each
          sequence can optionally delete before the next one types in.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            typing animation
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            sequences
          </span>
        </div>
      </div>

      {/* Demo: Default Sequences */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default Sequences
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <div className="text-4xl font-bold text-white">
              <TypewriterTitle />
            </div>
          </div>
        </section>
      </div>

      {/* Demo: Custom Sequences */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Custom Sequences
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <div className="text-4xl font-bold text-white">
              <TypewriterTitle
                sequences={[
                  { text: "Design.", deleteAfter: true },
                  { text: "Develop.", deleteAfter: true },
                  { text: "Deploy.", deleteAfter: false },
                ]}
                typingSpeed={80}
                deleteSpeed={40}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Demo: Slow with No Variance */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Slow, Mechanical (No Natural Variance)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <div className="text-4xl font-bold text-white">
              <TypewriterTitle
                sequences={[
                  { text: "Hello World", deleteAfter: true },
                  { text: "Goodbye World", deleteAfter: false },
                ]}
                typingSpeed={120}
                naturalVariance={false}
                autoLoop={false}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
