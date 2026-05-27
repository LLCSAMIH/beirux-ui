"use client";

import SmoothDrawer from "@/components/kokonutui/smooth-drawer";
import { BackLink } from "@/components/back-link";

export default function SmoothDrawerPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Smooth Drawer
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A bottom drawer (powered by Vaul) with spring-animated entry,
          staggered child reveals, a pricing tag, shimmer CTA button,
          and a dismiss option. Built on top of shadcn Drawer primitives.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            vaul
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            drawer
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center min-h-[200px]">
            <SmoothDrawer />
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Custom Price
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center min-h-[200px]">
            <SmoothDrawer
              title="BEIRUX Pro"
              description="Full-stack digital agency toolkit. Client portals, automated workflows, and AI-powered operations."
              price={299}
              discountedPrice={179}
              primaryButtonText="Get Access"
              secondaryButtonText="Not Now"
            />
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Notes
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 space-y-3 text-sm text-neutral-400">
            <p>
              Click the "Open Drawer" button above to trigger the drawer.
              It slides up from the bottom with spring physics and staggers
              each content section into view.
            </p>
            <p>
              The primary CTA has a shimmer hover animation. The drawer
              uses Vaul under the hood via shadcn's Drawer component.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
