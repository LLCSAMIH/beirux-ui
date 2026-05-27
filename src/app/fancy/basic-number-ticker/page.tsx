"use client";

import NumberTicker from "@/components/fancy/text/basic-number-ticker";
import { BackLink } from "@/components/back-link";

export default function BasicNumberTickerPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Basic Number Ticker
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Animated number counter that tweens between values. Supports
            configurable duration, easing, and external ref control.
          </p>
        </div>

        <div className="space-y-24">
          {/* Demo 1: Simple count up */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              0 to 100 / 3s ease-in-out / auto start
            </p>
            <div className="flex justify-center items-baseline gap-2">
              <NumberTicker
                from={0}
                target={100}
                className="text-7xl md:text-9xl font-bold text-white tabular-nums"
              />
              <span className="text-2xl text-white/30">%</span>
            </div>
          </section>

          {/* Demo 2: Stats row */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Stats layout / different targets / 4s duration
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <NumberTicker
                  from={0}
                  target={47}
                  transition={{ duration: 4, type: "tween", ease: "easeOut" }}
                  className="text-5xl md:text-6xl font-bold text-emerald-400 tabular-nums"
                />
                <p className="text-sm text-white/40 mt-2">Projects</p>
              </div>
              <div className="text-center">
                <NumberTicker
                  from={0}
                  target={1200}
                  transition={{ duration: 4, type: "tween", ease: "easeOut" }}
                  className="text-5xl md:text-6xl font-bold text-purple-400 tabular-nums"
                />
                <p className="text-sm text-white/40 mt-2">Commits</p>
              </div>
              <div className="text-center">
                <NumberTicker
                  from={0}
                  target={99}
                  transition={{ duration: 4, type: "tween", ease: "easeOut" }}
                  className="text-5xl md:text-6xl font-bold text-amber-400 tabular-nums"
                />
                <p className="text-sm text-white/40 mt-2">Uptime %</p>
              </div>
            </div>
          </section>

          {/* Demo 3: Counting down */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Countdown: 500 to 0 / 5s / spring ease
            </p>
            <div className="flex justify-center items-baseline gap-2">
              <NumberTicker
                from={500}
                target={0}
                transition={{ duration: 5, type: "tween", ease: "easeInOut" }}
                className="text-6xl md:text-8xl font-bold text-rose-400 tabular-nums"
              />
              <span className="text-xl text-white/30">remaining</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
