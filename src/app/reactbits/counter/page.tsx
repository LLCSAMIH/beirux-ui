"use client";

import { useState } from "react";
import Counter from "@/components/Counter";
import { BackLink } from "@/components/back-link";

export default function CounterPage() {
  const [value, setValue] = useState(1234);

  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Counter
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Spring-animated rolling digit counter. Each digit independently
            animates to its target with configurable spring physics.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12">
          {/* Interactive */}
          <div className="flex flex-col items-center gap-6">
            <Counter value={value} fontSize={64} textColor="#ffffff" />
            <div className="flex gap-3">
              <button
                onClick={() => setValue((v) => Math.max(0, v - 100))}
                className="px-4 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
              >
                -100
              </button>
              <button
                onClick={() => setValue((v) => v + 1)}
                className="px-4 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
              >
                +1
              </button>
              <button
                onClick={() => setValue((v) => v + 100)}
                className="px-4 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
              >
                +100
              </button>
              <button
                onClick={() => setValue(Math.floor(Math.random() * 99999))}
                className="px-4 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
              >
                Random
              </button>
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Interactive (fontSize 64, click buttons to change)
            </p>
          </div>

          {/* Small + large side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
            <div className="flex flex-col items-center gap-4">
              <Counter value={42} fontSize={32} textColor="#a78bfa" />
              <p className="text-xs text-neutral-500 text-center">
                Small (fontSize 32, purple)
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Counter value={99999} fontSize={80} textColor="#34d399" />
              <p className="text-xs text-neutral-500 text-center">
                Large (fontSize 80, green)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
