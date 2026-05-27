"use client";

import {
  ExpandableScreen,
  ExpandableScreenTrigger,
  ExpandableScreenContent,
} from "@/components/ui/expandable-screen";
import { BackLink } from "@/components/back-link";

export default function ExpandableScreenPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Expandable Screen
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-12">
          {/* Basic */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Basic
            </h2>
            <ExpandableScreen>
              <ExpandableScreenTrigger>
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                  <h3 className="text-lg font-semibold">Click to expand fullscreen</h3>
                  <p className="text-sm text-neutral-400 mt-1">
                    This card will expand to fill the entire screen with a smooth animation.
                  </p>
                </div>
              </ExpandableScreenTrigger>
              <ExpandableScreenContent>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Expanded View</h3>
                  <p className="text-neutral-300 max-w-lg">
                    This content is shown in the expanded fullscreen view.
                    Click outside or press Escape to close.
                  </p>
                </div>
              </ExpandableScreenContent>
            </ExpandableScreen>
          </section>

          {/* Grid of expandables */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Grid Layout
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {["Analytics", "Settings", "Reports", "Users"].map((label) => (
                <ExpandableScreen key={label}>
                  <ExpandableScreenTrigger>
                    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors aspect-square flex items-center justify-center">
                      <span className="text-lg font-semibold">{label}</span>
                    </div>
                  </ExpandableScreenTrigger>
                  <ExpandableScreenContent>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4">{label}</h3>
                      <p className="text-neutral-300">
                        Full screen content for the {label.toLowerCase()} section.
                      </p>
                    </div>
                  </ExpandableScreenContent>
                </ExpandableScreen>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
