"use client";

export const dynamic = "force-dynamic";

import AILoadingState from "@/components/kokonutui/ai-loading";
import { BackLink } from "@/components/back-link";

export default function AILoadingPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          AI Loading
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A multi-phase loading state that simulates AI task progress. Cycles
          through task sequences with auto-scrolling code lines, a colorful
          spinning progress indicator, and gradient fade overlays.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            svg animation
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            auto-scroll
          </span>
        </div>
      </div>

      {/* Live demo */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Demo
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <div className="w-full max-w-md h-[200px]">
              <AILoadingState />
            </div>
          </div>
        </section>
      </div>

      {/* Features section */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Multi-Phase Task Sequences",
                desc: "Cycles through three built-in phases: web searching, result analysis, and UI/UX enhancement, each with its own status label and log lines.",
              },
              {
                title: "Auto-Scrolling Code Lines",
                desc: "Lines appear incrementally in a fixed-height container with smooth scroll behavior, mimicking a live terminal or agent log output.",
              },
              {
                title: "Animated SVG Progress Ring",
                desc: "Six concentric colored circles rotate in alternating directions with staggered delays, masked by a radial progress fill.",
              },
              {
                title: "Gradient Fade Overlay",
                desc: "A top-to-bottom gradient overlay fades older lines, drawing attention to the newest output while keeping the log readable.",
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

      {/* Component notes */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Notes
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 space-y-3 text-sm text-neutral-400">
            <p>
              This component has <span className="text-white">no props</span>.
              It renders a self-contained loading animation with hardcoded task
              sequences.
            </p>
            <p>
              Task sequences, line content, and timing are defined as constants
              inside the component file. To customize, edit{" "}
              <code className="text-neutral-300 bg-white/5 px-1.5 py-0.5 rounded text-xs">
                TASK_SEQUENCES
              </code>{" "}
              in the source.
            </p>
            <p>
              The progress ring advances per-sequence (not per-line), so the
              visual progress maps to phase completion rather than individual log
              entries.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
