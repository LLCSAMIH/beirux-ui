"use client";

import { LiquidGlassCard } from "@/components/kokonutui/liquid-glass-card";
import { BackLink } from "@/components/back-link";
import { Zap, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Sub-millisecond response times powered by edge computing and intelligent caching layers.",
    accent: "text-amber-400",
    border: "border-amber-500/20",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "End-to-end encryption with zero-knowledge architecture. Your data never leaves your control.",
    accent: "text-blue-400",
    border: "border-blue-500/20",
  },
  {
    icon: Sparkles,
    title: "AI Native",
    description:
      "Built from the ground up with intelligent agents that learn and adapt to your workflow.",
    accent: "text-purple-400",
    border: "border-purple-500/20",
  },
];

export default function KokonutUIPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
            KokonutUI
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Liquid Glass Card
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <LiquidGlassCard
              key={feature.title}
              glassSize="lg"
              className={`rounded-2xl border ${feature.border} bg-white/[0.03]`}
            >
              <div className="flex flex-col gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ${feature.accent}`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {feature.description}
                </p>
              </div>
            </LiquidGlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
