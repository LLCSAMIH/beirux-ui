"use client";

export const dynamic = "force-dynamic";

import CountUp from "@/components/CountUp";
import { BackLink } from "@/components/back-link";

export default function CountUpPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            CountUp
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Animated number counter that springs to a target value when
            scrolled into view. Powered by Motion.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Large number
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <span className="text-7xl font-bold tabular-nums">
                <CountUp to={10000} separator="," />
              </span>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">to=10000</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">separator=&quot;,&quot;</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Stats row
            </h2>
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: "Projects", value: 42 },
                { label: "Clients", value: 128 },
                { label: "Revenue", value: 99, prefix: "$", suffix: "K" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center min-h-[160px] rounded-xl border border-white/[0.06] bg-[#18181b]"
                >
                  <span className="text-5xl font-bold tabular-nums">
                    {stat.prefix}
                    <CountUp to={stat.value} />
                    {stat.suffix}
                  </span>
                  <span className="text-sm text-neutral-500 mt-2">{stat.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Custom range (from 500)
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <span className="text-7xl font-bold tabular-nums">
                <CountUp from={500} to={1000} separator="," />
              </span>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">from=500</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">to=1000</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
