"use client";

import ScrollVelocity from "@/components/ScrollVelocity";
import { BackLink } from "@/components/back-link";

export default function ScrollVelocityPage() {
  return (
    <div className="min-h-[300vh] bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            ScrollVelocity
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Horizontal text marquee that reacts to scroll velocity. Text
            direction reverses when scrolling up. Powered by Motion.
          </p>
        </div>
      </div>

      <div className="space-y-32 pb-40">
        {/* Default: moderate speed */}
        <section>
          <div className="max-w-5xl mx-auto px-6 mb-8">
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500">
              Default (velocity=100)
            </h2>
          </div>
          <ScrollVelocity
            texts={["SCROLL VELOCITY", "REACT BITS"]}
            velocity={100}
            className="text-white"
          />
          <div className="max-w-5xl mx-auto px-6 mt-3 flex gap-3">
            <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">
              velocity=100
            </span>
            <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">
              numCopies=6
            </span>
          </div>
        </section>

        {/* Fast: high velocity */}
        <section>
          <div className="max-w-5xl mx-auto px-6 mb-8">
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500">
              Fast (velocity=300)
            </h2>
          </div>
          <ScrollVelocity
            texts={["SPEED", "MOTION", "VELOCITY"]}
            velocity={300}
            className="text-white"
          />
          <div className="max-w-5xl mx-auto px-6 mt-3 flex gap-3">
            <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">
              velocity=300
            </span>
            <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">
              3 text rows (alternating direction)
            </span>
          </div>
        </section>

        {/* Slow and smooth */}
        <section>
          <div className="max-w-5xl mx-auto px-6 mb-8">
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500">
              Slow and smooth (velocity=40, low stiffness)
            </h2>
          </div>
          <ScrollVelocity
            texts={["BEIRUX DIGITAL AGENCY", "DESIGN + ENGINEERING"]}
            velocity={40}
            damping={80}
            stiffness={200}
            className="text-white"
          />
          <div className="max-w-5xl mx-auto px-6 mt-3 flex gap-3">
            <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">
              velocity=40
            </span>
            <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">
              damping=80
            </span>
            <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">
              stiffness=200
            </span>
          </div>
        </section>

        {/* Props reference */}
        <section className="max-w-5xl mx-auto px-6">
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
                  <td className="px-4 py-3 text-white">texts</td>
                  <td className="px-4 py-3 text-neutral-500">ReactNode[]</td>
                  <td className="px-4 py-3 text-neutral-600">[]</td>
                  <td className="px-4 py-3 text-neutral-400 font-sans">Array of text/nodes; each becomes a row, alternating direction</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="px-4 py-3 text-white">velocity</td>
                  <td className="px-4 py-3 text-neutral-500">number</td>
                  <td className="px-4 py-3 text-neutral-600">100</td>
                  <td className="px-4 py-3 text-neutral-400 font-sans">Base scroll speed in px/s (even rows move opposite)</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="px-4 py-3 text-white">className</td>
                  <td className="px-4 py-3 text-neutral-500">string</td>
                  <td className="px-4 py-3 text-neutral-600">&quot;&quot;</td>
                  <td className="px-4 py-3 text-neutral-400 font-sans">Classes applied to each text span copy</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="px-4 py-3 text-white">damping</td>
                  <td className="px-4 py-3 text-neutral-500">number</td>
                  <td className="px-4 py-3 text-neutral-600">50</td>
                  <td className="px-4 py-3 text-neutral-400 font-sans">Spring damping for velocity smoothing</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="px-4 py-3 text-white">stiffness</td>
                  <td className="px-4 py-3 text-neutral-500">number</td>
                  <td className="px-4 py-3 text-neutral-600">400</td>
                  <td className="px-4 py-3 text-neutral-400 font-sans">Spring stiffness for velocity smoothing</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="px-4 py-3 text-white">numCopies</td>
                  <td className="px-4 py-3 text-neutral-500">number</td>
                  <td className="px-4 py-3 text-neutral-600">6</td>
                  <td className="px-4 py-3 text-neutral-400 font-sans">How many copies of the text to render (seamless loop)</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="px-4 py-3 text-white">velocityMapping</td>
                  <td className="px-4 py-3 text-neutral-500">{"{"} input: [n,n], output: [n,n] {"}"}</td>
                  <td className="px-4 py-3 text-neutral-600">{"{"} input: [0,1000], output: [0,5] {"}"}</td>
                  <td className="px-4 py-3 text-neutral-400 font-sans">Maps scroll velocity to speed multiplier</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="px-4 py-3 text-white">scrollContainerRef</td>
                  <td className="px-4 py-3 text-neutral-500">RefObject&lt;HTMLElement&gt;</td>
                  <td className="px-4 py-3 text-neutral-600">undefined</td>
                  <td className="px-4 py-3 text-neutral-400 font-sans">Custom scroll container (defaults to window)</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="px-4 py-3 text-white">parallaxClassName</td>
                  <td className="px-4 py-3 text-neutral-500">string</td>
                  <td className="px-4 py-3 text-neutral-600">undefined</td>
                  <td className="px-4 py-3 text-neutral-400 font-sans">Class for the outer overflow container</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="px-4 py-3 text-white">scrollerClassName</td>
                  <td className="px-4 py-3 text-neutral-500">string</td>
                  <td className="px-4 py-3 text-neutral-600">undefined</td>
                  <td className="px-4 py-3 text-neutral-400 font-sans">Class for the inner motion div</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="px-4 py-3 text-white">parallaxStyle</td>
                  <td className="px-4 py-3 text-neutral-500">CSSProperties</td>
                  <td className="px-4 py-3 text-neutral-600">undefined</td>
                  <td className="px-4 py-3 text-neutral-400 font-sans">Inline styles for outer container</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">scrollerStyle</td>
                  <td className="px-4 py-3 text-neutral-500">CSSProperties</td>
                  <td className="px-4 py-3 text-neutral-600">undefined</td>
                  <td className="px-4 py-3 text-neutral-400 font-sans">Inline styles for inner motion div</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
