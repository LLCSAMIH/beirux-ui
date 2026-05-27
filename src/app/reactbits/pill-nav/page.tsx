"use client";

import { BackLink } from "@/components/back-link";
import dynamic from "next/dynamic";

const PillNav = dynamic(() => import("@/components/PillNav"), {
  ssr: false,
});

export default function PillNavPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Pill Nav
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            GSAP-animated navigation bar with pill-shaped hover indicators,
            circle expansion effect, and responsive mobile hamburger menu.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {/* Default white */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full rounded-2xl bg-[#120F17] p-6 overflow-hidden">
              <PillNav
                logo="https://picsum.photos/seed/logo1/48/48"
                items={[
                  { label: "Home", href: "#" },
                  { label: "About", href: "#" },
                  { label: "Work", href: "#" },
                  { label: "Contact", href: "#" },
                ]}
                activeHref="#"
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Default (white base, dark pills)
            </p>
          </div>

          {/* Custom colors */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full rounded-2xl bg-[#0a0a0a] p-6 overflow-hidden">
              <PillNav
                logo="https://picsum.photos/seed/logo2/48/48"
                items={[
                  { label: "Dashboard", href: "#" },
                  { label: "Projects", href: "#" },
                  { label: "Team", href: "#" },
                ]}
                activeHref="#"
                baseColor="#e0e0e0"
                pillColor="#5227FF"
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Custom colors (light text, purple pills)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
