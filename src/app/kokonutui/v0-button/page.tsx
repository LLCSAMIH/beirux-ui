"use client";

export const dynamic = "force-dynamic";

import V0Button from "@/components/kokonutui/v0-button";
import { BackLink } from "@/components/back-link";

export default function V0ButtonPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          v0 Button
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          An &quot;Open in v0&quot; link button with the v0 logo SVG. Links to
          v0.dev chat with a component registry JSON URL pre-filled. Dark/light
          mode aware with inverted color schemes.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            v0.dev
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            link button
          </span>
        </div>
      </div>

      {/* Default */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <V0Button />
          </div>
        </section>
      </div>

      {/* Custom component names */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Different Component Names
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center gap-4">
            <V0Button name="particle-button" />
            <V0Button name="gradient-button" />
            <V0Button name="hold-button" />
          </div>
        </section>
      </div>

      {/* In card context */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            In Component Card
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-white font-medium">Liquid Glass Card</h3>
                <p className="text-sm text-neutral-500">
                  A glassmorphism card with liquid distortion
                </p>
              </div>
              <V0Button name="liquid-glass-card" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
