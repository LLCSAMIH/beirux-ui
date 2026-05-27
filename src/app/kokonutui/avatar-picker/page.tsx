"use client";

export const dynamic = "force-dynamic";

import AvatarPicker from "@/components/kokonutui/avatar-picker";
import { BackLink } from "@/components/back-link";

export default function AvatarPickerPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Avatar Picker
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A profile setup card with 4 SVG Boringavatar-style faces, a
          large preview stage with per-avatar color ring, thumbnail strip
          with selection indicator, username input with validation, and a
          submit button. Respects reduced-motion preferences.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            form
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            avatar selection
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <AvatarPicker />
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            With onComplete Callback
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <AvatarPicker
              onComplete={(data) =>
                console.log("Profile:", data.username, "Avatar:", data.avatarId)
              }
            />
          </div>
        </section>
      </div>
    </div>
  );
}
