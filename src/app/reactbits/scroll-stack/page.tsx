"use client";

import { BackLink } from "@/components/back-link";
import dynamic from "next/dynamic";

const ScrollStack = dynamic(
  () => import("@/components/ScrollStack").then((mod) => ({ default: mod.default })),
  { ssr: false }
);

const ScrollStackItem = dynamic(
  () => import("@/components/ScrollStack").then((mod) => ({ default: mod.ScrollStackItem })),
  { ssr: false }
);

const colors = [
  "bg-gradient-to-br from-violet-500 to-purple-700",
  "bg-gradient-to-br from-cyan-500 to-blue-700",
  "bg-gradient-to-br from-orange-500 to-red-600",
  "bg-gradient-to-br from-emerald-500 to-teal-700",
  "bg-gradient-to-br from-pink-500 to-rose-700",
];

export default function ScrollStackPage() {
  return (
    <div className="min-h-[300vh] w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Scroll Stack
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Scroll-driven card stacking animation using Lenis smooth scroll.
            Cards scale down and stack as you scroll past them.
          </p>
          <p className="mt-2 text-neutral-500 text-xs">
            Scroll down to see the stacking effect
          </p>
        </div>

        <ScrollStack>
          {colors.map((color, i) => (
            <ScrollStackItem key={i} itemClassName={color}>
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold">
                    Card {i + 1}
                  </h3>
                  <p className="text-white/70 text-sm mt-2">
                    Scroll to stack this card
                  </p>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </div>
  );
}
