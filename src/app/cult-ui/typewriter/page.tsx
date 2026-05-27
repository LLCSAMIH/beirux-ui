"use client";

import { Typewriter } from "@/components/ui/typewriter";
import { BackLink } from "@/components/back-link";

export default function TypewriterPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Typewriter
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          {/* Default: base text + cycling texts */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Base Text + Cycling Texts
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8">
              <div className="text-2xl font-medium text-white">
                <Typewriter
                  delay={0.5}
                  baseText="Build a "
                  texts={[
                    "landing page with hero and pricing",
                    "dashboard with analytics charts",
                    "portfolio with project galleries",
                    "blog with markdown support",
                  ]}
                />
              </div>
            </div>
          </section>

          {/* No base text, cycling only */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Cycling Texts Only (No Base Text)
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8">
              <div className="text-2xl font-medium text-white">
                <Typewriter
                  delay={1}
                  texts={[
                    "Design is intelligence made visible.",
                    "Less is more.",
                    "Good design is obvious. Great design is transparent.",
                    "Simplicity is the ultimate sophistication.",
                  ]}
                />
              </div>
            </div>
          </section>

          {/* Longer delay */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Delayed Start (3s delay)
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8">
              <div className="text-2xl font-medium text-white">
                <Typewriter
                  delay={3}
                  baseText="After a pause... "
                  texts={[
                    "the animation begins",
                    "and cycles through options",
                    "with a smooth transition",
                  ]}
                />
              </div>
            </div>
          </section>

          {/* Compact / inline usage */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Inline Usage
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8">
              <div className="text-lg text-neutral-400">
                We specialize in{" "}
                <span className="text-white font-medium">
                  <Typewriter
                    delay={0}
                    texts={[
                      "web development",
                      "brand identity",
                      "digital marketing",
                      "UI/UX design",
                    ]}
                  />
                </span>
              </div>
            </div>
          </section>

          {/* Single long text */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Single Cycling Text
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8">
              <div className="text-2xl font-medium text-white">
                <Typewriter
                  delay={0.5}
                  baseText="$ "
                  texts={[
                    "npx create-next-app@latest my-project",
                    "npm run dev",
                    "git push origin main",
                  ]}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
