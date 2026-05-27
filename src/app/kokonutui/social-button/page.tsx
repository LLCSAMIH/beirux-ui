"use client";

export const dynamic = "force-dynamic";

import SocialButton from "@/components/kokonutui/social-button";
import { BackLink } from "@/components/back-link";
import { Code, Mail, Send } from "lucide-react";

export default function SocialButtonPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Social Button
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A share button that expands into social platform icons on hover. Icons
          slide in with staggered delays and flash on click. The original button
          fades out as the icon row takes over.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            lucide
          </span>
        </div>
      </div>

      {/* Default */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default (Hover to Expand)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <SocialButton />
          </div>
        </section>
      </div>

      {/* Custom label */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Custom Label
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <SocialButton label="Connect" />
          </div>
        </section>
      </div>

      {/* Custom items */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Custom Icons
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <SocialButton
              label="Reach Out"
              items={[
                { icon: Mail, label: "Email" },
                { icon: Code, label: "GitHub" },
                { icon: Send, label: "Telegram" },
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
