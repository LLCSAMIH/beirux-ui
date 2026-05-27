"use client";

import ProfileDropdown from "@/components/kokonutui/profile-dropdown";
import { BackLink } from "@/components/back-link";

export default function ProfileDropdownPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Profile Dropdown
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A polished dropdown menu triggered from a user profile card.
          Includes avatar, name, subscription badge, and sign-out action
          with smooth open/close animations.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            radix dropdown
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            next/image
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            lucide icons
          </span>
        </div>
      </div>

      {/* Demo: Default */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <ProfileDropdown />
          </div>
        </section>
      </div>

      {/* Demo: Custom Profile */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Custom Profile Data
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <ProfileDropdown
              data={{
                name: "Samih Mansour",
                email: "samih@beirux.com",
                avatar:
                  "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/profile-mjss82WnWBRO86MHHGxvJ2TVZuyrDv.jpeg",
                subscription: "AGENCY",
                model: "Claude Opus 4",
              }}
            />
          </div>
        </section>
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Animated Indicator",
                desc: "A bending line indicator on the right side of the trigger animates and changes color when the dropdown opens.",
              },
              {
                title: "Gradient Avatar Ring",
                desc: "The avatar is wrapped in a purple-to-orange gradient ring that provides visual depth.",
              },
              {
                title: "Badge System",
                desc: "Model and subscription values render as color-coded badges (blue for model, purple for subscription).",
              },
              {
                title: "Sign Out Action",
                desc: "A distinct red-tinted sign out button is separated from the menu items for clear destructive action visibility.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
              >
                <h3 className="text-base font-medium text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
