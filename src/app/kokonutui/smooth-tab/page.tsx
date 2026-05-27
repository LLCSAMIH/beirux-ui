"use client";

import SmoothTab from "@/components/kokonutui/smooth-tab";
import { BackLink } from "@/components/back-link";

const tabItems = [
  {
    id: "overview",
    title: "Overview",
    description:
      "A tabbed interface with a spring-animated sliding indicator and directional content transitions.",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    id: "features",
    title: "Features",
    description:
      "Smooth spring physics on the active pill, blur + scale enter/exit on content panels, keyboard accessible.",
    color: "bg-violet-500 hover:bg-violet-600",
  },
  {
    id: "usage",
    title: "Usage",
    description:
      "Pass an array of TabItem objects with id, title, description, and color. Optional cardContent for custom panels.",
    color: "bg-emerald-500 hover:bg-emerald-600",
  },
  {
    id: "config",
    title: "Config",
    description:
      "Control the active color, default tab, and listen for changes via the onChange callback.",
    color: "bg-amber-500 hover:bg-amber-600",
  },
];

export default function SmoothTabPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Smooth Tab
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          Navigation tabs with a spring-animated sliding indicator and
          directional blur transitions between content panels. Click the tabs
          below to see the pill slide and the content cross-fade with motion
          blur.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            lucide-react
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            spring physics
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
            <div className="w-full max-w-md h-[280px]">
              <SmoothTab items={tabItems} defaultTabId="overview" />
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
                title: "Spring-Animated Pill",
                desc: "The active indicator slides between tabs using a spring with stiffness 400 and damping 30 for a snappy, organic feel.",
              },
              {
                title: "Directional Content Transitions",
                desc: "Content panels enter and exit with directional slide, blur, and scale. Moving right slides content left, and vice versa.",
              },
              {
                title: "Custom Card Content",
                desc: "Each tab accepts optional cardContent for fully custom panel rendering, or falls back to the built-in waveform layout.",
              },
              {
                title: "Keyboard Accessible",
                desc: "Full keyboard navigation with proper ARIA roles, tab indices, and focus-visible ring for screen reader compatibility.",
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

      {/* Props reference */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Props
          </h2>
          <div className="rounded-xl border border-white/[0.06] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                  <th className="text-left px-6 py-3 text-neutral-400 font-medium">
                    Prop
                  </th>
                  <th className="text-left px-6 py-3 text-neutral-400 font-medium">
                    Type
                  </th>
                  <th className="text-left px-6 py-3 text-neutral-400 font-medium">
                    Default
                  </th>
                </tr>
              </thead>
              <tbody className="text-neutral-300">
                <tr className="border-b border-white/[0.04]">
                  <td className="px-6 py-3 font-mono text-xs text-white">
                    items
                  </td>
                  <td className="px-6 py-3 font-mono text-xs text-neutral-500">
                    TabItem[]
                  </td>
                  <td className="px-6 py-3 text-neutral-500">
                    4 default tabs (Models, MCPs, Agents, Users)
                  </td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="px-6 py-3 font-mono text-xs text-white">
                    defaultTabId
                  </td>
                  <td className="px-6 py-3 font-mono text-xs text-neutral-500">
                    string
                  </td>
                  <td className="px-6 py-3 text-neutral-500">
                    first item id
                  </td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="px-6 py-3 font-mono text-xs text-white">
                    className
                  </td>
                  <td className="px-6 py-3 font-mono text-xs text-neutral-500">
                    string
                  </td>
                  <td className="px-6 py-3 text-neutral-500">undefined</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="px-6 py-3 font-mono text-xs text-white">
                    activeColor
                  </td>
                  <td className="px-6 py-3 font-mono text-xs text-neutral-500">
                    string
                  </td>
                  <td className="px-6 py-3 text-neutral-500">
                    bg-[#1F9CFE]
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-mono text-xs text-white">
                    onChange
                  </td>
                  <td className="px-6 py-3 font-mono text-xs text-neutral-500">
                    {"(tabId: string) => void"}
                  </td>
                  <td className="px-6 py-3 text-neutral-500">undefined</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-xl border border-white/[0.06] overflow-hidden">
            <div className="px-6 py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <h3 className="text-neutral-400 font-medium text-sm">
                TabItem Interface
              </h3>
            </div>
            <div className="px-6 py-4 text-sm font-mono text-neutral-400 space-y-1">
              <p>
                <span className="text-white">id</span>: string
              </p>
              <p>
                <span className="text-white">title</span>: string
              </p>
              <p>
                <span className="text-white">description</span>?: string
              </p>
              <p>
                <span className="text-white">icon</span>?: LucideIcon
              </p>
              <p>
                <span className="text-white">content</span>?: ReactNode
              </p>
              <p>
                <span className="text-white">cardContent</span>?: ReactNode
              </p>
              <p>
                <span className="text-white">color</span>: string
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
