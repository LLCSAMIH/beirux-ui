"use client";

import {
  Expandable,
  ExpandableCard,
  ExpandableCardHeader,
  ExpandableCardContent,
  ExpandableCardFooter,
  ExpandableTrigger,
  ExpandableContent,
} from "@/components/ui/expandable";
import { BackLink } from "@/components/back-link";

export default function ExpandablePage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Expandable
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-12">
          {/* Card expandable */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Expandable Card
            </h2>
            <Expandable>
              <ExpandableCard>
                <ExpandableCardHeader>
                  <h3 className="text-lg font-semibold">Project Update</h3>
                  <p className="text-sm text-neutral-400">Click to expand details</p>
                </ExpandableCardHeader>
                <ExpandableContent>
                  <ExpandableCardContent>
                    <p className="text-neutral-300">
                      The project is progressing well. We have completed the initial design phase
                      and are moving into development. The team has been working on the core
                      features and we expect to have a beta version ready by next month.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-neutral-400">
                      <li>Design phase: Complete</li>
                      <li>Development: In progress</li>
                      <li>Testing: Scheduled</li>
                    </ul>
                  </ExpandableCardContent>
                  <ExpandableCardFooter>
                    <span className="text-xs text-neutral-500">Last updated 2 hours ago</span>
                  </ExpandableCardFooter>
                </ExpandableContent>
                <ExpandableTrigger>
                  <span className="text-sm text-blue-400">Toggle details</span>
                </ExpandableTrigger>
              </ExpandableCard>
            </Expandable>
          </section>

          {/* Multiple cards */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Multiple Cards
            </h2>
            <div className="space-y-4">
              {["Design System", "API Integration", "Performance"].map((title) => (
                <Expandable key={title}>
                  <ExpandableCard>
                    <ExpandableCardHeader>
                      <h3 className="text-lg font-semibold">{title}</h3>
                    </ExpandableCardHeader>
                    <ExpandableContent>
                      <ExpandableCardContent>
                        <p className="text-neutral-300">
                          Detailed information about {title.toLowerCase()} goes here.
                          This section expands and collapses with a smooth animation.
                        </p>
                      </ExpandableCardContent>
                    </ExpandableContent>
                    <ExpandableTrigger>
                      <span className="text-sm text-blue-400">Show more</span>
                    </ExpandableTrigger>
                  </ExpandableCard>
                </Expandable>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
