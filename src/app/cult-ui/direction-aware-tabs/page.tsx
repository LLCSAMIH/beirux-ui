"use client"

import { BackLink } from "@/components/back-link"
import { DirectionAwareTabs } from "@/components/ui/direction-aware-tabs"
import {
  Sparkles,
  Zap,
  Layers,
  BarChart3,
} from "lucide-react"

const tabs = [
  {
    id: 0,
    label: "Overview",
    content: (
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 mt-4">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/15">
            <Sparkles className="h-5 w-5 text-violet-400" />
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-white">
              Direction-Aware Animation
            </h3>
            <p className="text-sm leading-relaxed text-white/50">
              Content slides in from the direction of the selected tab. Click a
              tab to the right and content enters from the right. Click left and
              it mirrors. The transition uses spring physics with a subtle blur
              for a polished feel.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    label: "Features",
    content: (
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 mt-4">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15">
            <Zap className="h-5 w-5 text-cyan-400" />
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Key Features</h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-cyan-400" />
                Spring-based transitions with configurable bounce
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-cyan-400" />
                Automatic height animation via react-use-measure
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-cyan-400" />
                Shared layout animation on the active tab indicator
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-cyan-400" />
                Blur filter on enter/exit for depth
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    label: "Stack",
    content: (
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 mt-4">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/15">
            <Layers className="h-5 w-5 text-amber-400" />
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Built With</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Motion (Framer Motion)",
                "react-use-measure",
                "AnimatePresence",
                "MotionConfig",
                "layoutId animation",
                "Tailwind CSS",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-white/[0.04] px-3 py-2 text-xs text-white/60"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    label: "Usage",
    content: (
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 mt-4">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15">
            <BarChart3 className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Quick Start</h3>
            <div className="rounded-lg bg-black/40 p-4 font-mono text-xs leading-relaxed text-white/70">
              <pre>{`import { DirectionAwareTabs }
  from "@/components/ui/direction-aware-tabs"

const tabs = [
  { id: 0, label: "Tab 1", content: <div>...</div> },
  { id: 1, label: "Tab 2", content: <div>...</div> },
]

<DirectionAwareTabs tabs={tabs} />`}</pre>
            </div>
          </div>
        </div>
      </div>
    ),
  },
]

export default function DirectionAwareTabsPage() {
  return (
    <div className="dark min-h-screen bg-[#09090b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Direction Aware Tabs
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Tabs with direction-aware content transitions. Content slides in
            from the direction you navigate, with spring physics and a blur
            effect.
          </p>
        </div>

        {/* Primary demo */}
        <div className="space-y-16">
          <section>
            <DirectionAwareTabs tabs={tabs} />
          </section>

          {/* Rounded variant */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
              Rounded variant
            </h2>
            <DirectionAwareTabs
              tabs={tabs}
              rounded="rounded-xl"
              roundedInner="rounded-[10px]"
            />
          </section>
        </div>
      </div>
    </div>
  )
}
