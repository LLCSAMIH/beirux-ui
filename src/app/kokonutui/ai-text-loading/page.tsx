"use client";

export const dynamic = "force-dynamic";

import AITextLoading from "@/components/kokonutui/ai-text-loading";
import { BackLink } from "@/components/back-link";

export default function AITextLoadingPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          AI Text Loading
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          Animated text cycling with a shimmer gradient effect. Each text fades
          in from below and out to above, with a continuous background gradient
          sweep for a polished loading state.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            gradient text
          </span>
        </div>
      </div>

      {/* Default demo */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <AITextLoading />
          </div>
        </section>
      </div>

      {/* Custom texts */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Custom Texts (Fast Interval)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <AITextLoading
              texts={[
                "Searching the web...",
                "Reading documents...",
                "Generating response...",
              ]}
              interval={1000}
            />
          </div>
        </section>
      </div>

      {/* Slow cycle */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Slow Cycle (3s Interval)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <AITextLoading
              texts={[
                "Compiling code...",
                "Running tests...",
                "Deploying to production...",
                "Done!",
              ]}
              interval={3000}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
