"use client";

import { BackLink } from "@/components/back-link";
import dynamic from "next/dynamic";

const ProfileCard = dynamic(() => import("@/components/ProfileCard"), {
  ssr: false,
});

export default function ProfileCardPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Profile Card
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Holographic profile card with 3D tilt, rainbow gradient overlay,
            behind-glow effect, and device orientation support on mobile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start justify-items-center">
          {/* Default */}
          <div className="flex flex-col items-center gap-4">
            <ProfileCard
              name="Alex Rivera"
              title="Creative Director"
              handle="@arivera"
              status="Available for work"
              avatarUrl="https://picsum.photos/seed/profile1/400/400"
              enableTilt={true}
              behindGlowEnabled={true}
            />
            <p className="text-xs text-neutral-500 text-center">
              Default with tilt and glow
            </p>
          </div>

          {/* Custom glow color */}
          <div className="flex flex-col items-center gap-4">
            <ProfileCard
              name="Maya Chen"
              title="Lead Engineer"
              handle="@mayac"
              status="In a meeting"
              avatarUrl="https://picsum.photos/seed/profile2/400/400"
              enableTilt={true}
              behindGlowEnabled={true}
              behindGlowColor="rgba(82, 39, 255, 0.4)"
            />
            <p className="text-xs text-neutral-500 text-center">
              Custom purple glow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
