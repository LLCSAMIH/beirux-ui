"use client";

export const dynamic = "force-dynamic";

import CardSwap, { Card } from "@/components/CardSwap";
import { BackLink } from "@/components/back-link";

export default function CardSwapPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Card Swap
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Stacked cards auto-rotate with GSAP. Pause on hover, click to cycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start justify-items-center">
          {/* Default */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-[400px] h-[500px] overflow-visible">
              <CardSwap
                width={280}
                height={360}
                cardDistance={40}
                verticalDistance={16}
                delay={3000}
                pauseOnHover
              >
                <Card className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-600 to-indigo-900">
                  <span className="text-white text-xl font-bold">Card 1</span>
                </Card>
                <Card className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-600 to-emerald-900">
                  <span className="text-white text-xl font-bold">Card 2</span>
                </Card>
                <Card className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-600 to-rose-900">
                  <span className="text-white text-xl font-bold">Card 3</span>
                </Card>
              </CardSwap>
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Default (3s delay, pause on hover)
            </p>
          </div>

          {/* Elastic with skew */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-[400px] h-[500px] overflow-visible">
              <CardSwap
                width={280}
                height={360}
                cardDistance={30}
                verticalDistance={12}
                delay={2000}
                easing="elastic"
                skewAmount={4}
                pauseOnHover
              >
                <Card className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-700">
                  <span className="text-white text-xl font-bold">A</span>
                </Card>
                <Card className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-700">
                  <span className="text-white text-xl font-bold">B</span>
                </Card>
                <Card className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-fuchsia-700">
                  <span className="text-white text-xl font-bold">C</span>
                </Card>
                <Card className="w-full h-full flex items-center justify-center bg-gradient-to-br from-lime-500 to-green-700">
                  <span className="text-white text-xl font-bold">D</span>
                </Card>
              </CardSwap>
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Elastic easing, 4 cards, skew 4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
