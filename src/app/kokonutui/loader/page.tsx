"use client";

export const dynamic = "force-dynamic";

import Loader from "@/components/kokonutui/loader";
import { BackLink } from "@/components/back-link";

export default function LoaderPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Loader
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A multi-ring animated loader with conic gradient rings
          rotating in different directions and speeds. Includes title
          and subtitle with breathing opacity animation. Three size
          variants: sm, md, lg.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            conic-gradient
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            dark mode
          </span>
        </div>
      </div>

      {/* Demo: Default (md) */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default (md)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center min-h-[300px]">
            <Loader />
          </div>
        </section>
      </div>

      {/* Demo: Small */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Small
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center min-h-[200px]">
            <Loader
              size="sm"
              title="Loading..."
              subtitle="Just a moment"
            />
          </div>
        </section>
      </div>

      {/* Demo: Large with custom text */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Large, Custom Text
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center min-h-[400px]">
            <Loader
              size="lg"
              title="Deploying to production..."
              subtitle="Building, optimizing, and distributing your application"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
