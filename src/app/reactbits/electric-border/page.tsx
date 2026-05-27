"use client";

export const dynamic = "force-dynamic";

import ElectricBorder from "@/components/ElectricBorder";
import { BackLink } from "@/components/back-link";

export default function ElectricBorderPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            ElectricBorder
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Animated noisy border drawn on canvas around any content. Adjustable
            color, speed, chaos, and border radius.
          </p>
        </div>

        <div className="space-y-24">
          {/* Default purple */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Default (purple)
            </h2>
            <div className="flex justify-center">
              <ElectricBorder color="#5227FF" speed={1} chaos={0.12} borderRadius={24}>
                <div className="px-12 py-10 bg-[#18181b]">
                  <p className="text-xl font-medium text-center">Electric border card</p>
                  <p className="text-sm text-neutral-500 text-center mt-2">
                    Hover and watch the noise animate
                  </p>
                </div>
              </ElectricBorder>
            </div>
          </section>

          {/* High chaos, red */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              High chaos (red, fast)
            </h2>
            <div className="flex justify-center">
              <ElectricBorder color="#FF3232" speed={2} chaos={0.3} borderRadius={16}>
                <div className="px-12 py-10 bg-[#18181b]">
                  <p className="text-xl font-medium text-center">Danger zone</p>
                  <p className="text-sm text-neutral-500 text-center mt-2">
                    chaos=0.3, speed=2
                  </p>
                </div>
              </ElectricBorder>
            </div>
          </section>

          {/* Subtle, rounded */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Subtle (cyan, pill shape)
            </h2>
            <div className="flex justify-center">
              <ElectricBorder color="#22d3ee" speed={0.5} chaos={0.06} borderRadius={999}>
                <div className="px-8 py-4 bg-[#18181b]">
                  <p className="text-lg font-medium text-center">Pill button</p>
                </div>
              </ElectricBorder>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
