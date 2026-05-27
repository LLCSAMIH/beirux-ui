"use client"

import { AnimatedNumber } from "@/components/ui/animated-number"
import { BackLink } from "@/components/back-link"
import { useState } from "react"

export default function AnimatedNumberPage() {
  const [value, setValue] = useState(1234)

  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Animated Number
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Smooth spring-based number transitions. Each digit animates
            independently with configurable physics.
          </p>
        </div>

        <div className="space-y-16">
          {/* Interactive counter */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Interactive Counter
            </h2>
            <div className="flex flex-col items-center gap-6">
              <div className="text-6xl font-bold tabular-nums">
                <AnimatedNumber value={value} />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setValue((v) => Math.max(0, v - 100))}
                  className="rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition-colors"
                >
                  -100
                </button>
                <button
                  onClick={() => setValue((v) => v + 100)}
                  className="rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition-colors"
                >
                  +100
                </button>
                <button
                  onClick={() => setValue(Math.floor(Math.random() * 10000))}
                  className="rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition-colors"
                >
                  Random
                </button>
              </div>
            </div>
          </section>

          {/* Dashboard-style metrics */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Dashboard Metrics
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Revenue", val: 48250, prefix: "$" },
                { label: "Users", val: 3847, prefix: "" },
                { label: "Uptime", val: 99, suffix: "%" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-xs text-white/40 mb-2">{metric.label}</p>
                  <div className="text-2xl font-semibold tabular-nums">
                    {metric.prefix}
                    <AnimatedNumber value={metric.val} />
                    {metric.suffix}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
