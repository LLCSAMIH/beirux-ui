"use client";

export const dynamic = "force-dynamic";

import AI_Voice from "@/components/kokonutui/ai-voice";
import { BackLink } from "@/components/back-link";

export default function AIVoicePage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          AI Voice
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A voice input UI with a mic toggle, live waveform visualizer, and
          elapsed-time counter. Starts in demo mode with an auto-looping
          animation, then switches to manual toggle on first click.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            voice input
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            waveform
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
            <div className="w-full max-w-md">
              <AI_Voice />
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
                title: "Demo Mode Auto-Loop",
                desc: "On mount, the component cycles between listening and idle states automatically. The first click exits demo mode and hands control to the user.",
              },
              {
                title: "48-Bar Waveform Visualizer",
                desc: "Animated bars pulse with randomized heights and staggered delays when active, collapsing to minimal pips when idle.",
              },
              {
                title: "Elapsed Time Counter",
                desc: "A mono-spaced MM:SS timer ticks while recording is active and resets to 00:00 when stopped.",
              },
              {
                title: "Mic / Stop Toggle",
                desc: "Idle state shows a mic icon. Active state shows a slowly spinning square stop indicator, providing clear visual feedback for the current state.",
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
              It renders a self-contained voice input UI with internal state
              management.
            </p>
            <p>
              The waveform bar heights are generated with{" "}
              <code className="text-neutral-300 bg-white/5 px-1.5 py-0.5 rounded text-xs">
                Math.random()
              </code>{" "}
              on mount, so the pattern differs on each render. This is purely
              visual and does not reflect real audio data.
            </p>
            <p>
              No actual Web Audio or microphone APIs are wired up. This is a UI
              shell. To add real voice capture, hook into the{" "}
              <code className="text-neutral-300 bg-white/5 px-1.5 py-0.5 rounded text-xs">
                handleClick
              </code>{" "}
              function and replace the demo logic with{" "}
              <code className="text-neutral-300 bg-white/5 px-1.5 py-0.5 rounded text-xs">
                navigator.mediaDevices.getUserMedia()
              </code>
              .
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
