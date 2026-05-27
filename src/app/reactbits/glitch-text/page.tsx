"use client";

import GlitchText from "@/components/GlitchText";
import { BackLink } from "@/components/back-link";

export default function GlitchTextPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <GlitchText speed={0.5} enableShadows={true}>
            GlitchText
          </GlitchText>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto mt-8">
            CSS-only glitch effect with red/cyan offset layers, clip-path
            animation, and configurable speed. No JS animation runtime.
          </p>
        </div>

        <div className="space-y-24">
          {/* Hero: Large, slow, dramatic */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Hero (slow, dramatic)
            </h2>
            <div className="flex items-center justify-center min-h-[280px] rounded-xl border border-white/[0.06] bg-[#09090b]">
              <GlitchText speed={1.2} enableShadows={true}>
                BEIRUX
              </GlitchText>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">speed=1.2</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">enableShadows=true</span>
            </div>
          </section>

          {/* Default speed */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Default speed
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#09090b]">
              <GlitchText speed={0.5} enableShadows={true}>
                GLITCH
              </GlitchText>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">speed=0.5 (default)</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">enableShadows=true</span>
            </div>
          </section>

          {/* Fast and aggressive */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Fast (aggressive)
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#09090b]">
              <GlitchText speed={0.2} enableShadows={true}>
                ERROR
              </GlitchText>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">speed=0.2</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">enableShadows=true</span>
            </div>
          </section>

          {/* No shadows (clean glitch) */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              No shadows (clean offset)
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#09090b]">
              <GlitchText speed={0.5} enableShadows={false}>
                CLEAN
              </GlitchText>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">speed=0.5</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">enableShadows=false</span>
            </div>
          </section>

          {/* Hover only */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Hover to glitch
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#09090b]">
              <GlitchText speed={0.4} enableShadows={true} enableOnHover={true}>
                HOVER ME
              </GlitchText>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">speed=0.4</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">enableOnHover=true</span>
            </div>
          </section>

          {/* Inline / smaller text */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Inline (smaller, custom className)
            </h2>
            <div className="rounded-xl border border-white/[0.06] bg-[#09090b] p-10">
              <div className="text-neutral-400 text-lg leading-relaxed">
                The system encountered a{" "}
                <span className="inline-block align-middle">
                  <GlitchText
                    speed={0.3}
                    enableShadows={true}
                    className="!text-2xl !mx-0 inline-block"
                  >
                    FATAL
                  </GlitchText>
                </span>{" "}
                error during the last transmission. All nodes have been
                disconnected. Please{" "}
                <span className="inline-block align-middle">
                  <GlitchText
                    speed={0.6}
                    enableShadows={false}
                    className="!text-2xl !mx-0 inline-block"
                  >
                    REBOOT
                  </GlitchText>
                </span>{" "}
                to restore the connection.
              </div>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">className=&quot;!text-2xl !mx-0 inline-block&quot;</span>
            </div>
          </section>

          {/* Props reference */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Props
            </h2>
            <div className="rounded-xl border border-white/[0.06] overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                    <th className="text-left px-4 py-3 text-neutral-400 font-medium">Prop</th>
                    <th className="text-left px-4 py-3 text-neutral-400 font-medium">Type</th>
                    <th className="text-left px-4 py-3 text-neutral-400 font-medium">Default</th>
                    <th className="text-left px-4 py-3 text-neutral-400 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-neutral-300">
                  <tr className="border-b border-white/[0.04]">
                    <td className="px-4 py-3 text-white">children</td>
                    <td className="px-4 py-3 text-neutral-500">string</td>
                    <td className="px-4 py-3 text-neutral-600">required</td>
                    <td className="px-4 py-3 text-neutral-400 font-sans">Text to display</td>
                  </tr>
                  <tr className="border-b border-white/[0.04]">
                    <td className="px-4 py-3 text-white">speed</td>
                    <td className="px-4 py-3 text-neutral-500">number</td>
                    <td className="px-4 py-3 text-neutral-600">0.5</td>
                    <td className="px-4 py-3 text-neutral-400 font-sans">Base animation speed in seconds (lower = faster)</td>
                  </tr>
                  <tr className="border-b border-white/[0.04]">
                    <td className="px-4 py-3 text-white">enableShadows</td>
                    <td className="px-4 py-3 text-neutral-500">boolean</td>
                    <td className="px-4 py-3 text-neutral-600">true</td>
                    <td className="px-4 py-3 text-neutral-400 font-sans">Show red/cyan color offset shadows</td>
                  </tr>
                  <tr className="border-b border-white/[0.04]">
                    <td className="px-4 py-3 text-white">enableOnHover</td>
                    <td className="px-4 py-3 text-neutral-500">boolean</td>
                    <td className="px-4 py-3 text-neutral-600">false</td>
                    <td className="px-4 py-3 text-neutral-400 font-sans">Only animate on hover (static until hovered)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-white">className</td>
                    <td className="px-4 py-3 text-neutral-500">string</td>
                    <td className="px-4 py-3 text-neutral-600">&quot;&quot;</td>
                    <td className="px-4 py-3 text-neutral-400 font-sans">Additional Tailwind classes (use ! for overrides)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
