"use client";

import AnimatedList from "@/components/AnimatedList";
import { BackLink } from "@/components/back-link";

const notifications = [
  "New deployment successful",
  "3 new pull requests need review",
  "Build pipeline completed in 2m 34s",
  "Server health check passed",
  "Database backup completed",
  "SSL certificate renewed",
  "New team member joined #engineering",
  "Sprint retrospective scheduled for Friday",
];

const shortList = [
  "Task completed",
  "New message received",
  "Reminder: standup in 10 min",
];

export default function AnimatedListPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Animated List
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Items animate in on scroll with scale and fade. Supports keyboard
            navigation and gradient overlays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Default */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full h-[400px] rounded-xl border border-white/10 overflow-hidden">
              <AnimatedList items={notifications} />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Default (8 items, gradients on)
            </p>
          </div>

          {/* Compact, no gradients */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full h-[400px] rounded-xl border border-white/10 overflow-hidden">
              <AnimatedList
                items={shortList}
                showGradients={false}
                displayScrollbar={false}
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Short list, no gradients, no scrollbar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
