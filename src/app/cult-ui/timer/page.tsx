"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { Timer } from "@/components/ui/timer";
import { BackLink } from "@/components/back-link";

export default function TimerPage() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Timer
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Variants (click to start/stop)
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 flex flex-wrap gap-4 items-center">
              <div className="cursor-pointer" onClick={() => setLoading1(!loading1)}>
                <Timer loading={loading1} variant="default" size="md" />
              </div>
              <div className="cursor-pointer" onClick={() => setLoading2(!loading2)}>
                <Timer loading={loading2} variant="outline" size="md" />
              </div>
              <div className="cursor-pointer" onClick={() => setLoading3(!loading3)}>
                <Timer loading={loading3} variant="destructive" size="md" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Sizes
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 flex flex-wrap gap-4 items-center">
              <Timer loading={true} variant="default" size="sm" />
              <Timer loading={true} variant="default" size="md" />
              <Timer loading={true} variant="default" size="lg" />
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Formats
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 flex flex-wrap gap-4 items-center">
              <Timer loading={true} format="SS.MS" variant="outline" />
              <Timer loading={true} format="MM:SS" variant="outline" />
              <Timer loading={true} format="HH:MM:SS" variant="outline" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
