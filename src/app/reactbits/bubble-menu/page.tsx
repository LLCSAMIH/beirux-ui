"use client";

export const dynamic = "force-dynamic";

import BubbleMenu from "@/components/BubbleMenu";
import { BackLink } from "@/components/back-link";

export default function BubbleMenuPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Bubble Menu
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Expanding bubble navigation with GSAP-animated menu items.
            Click the logo to toggle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Default */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-full h-[400px] rounded-xl border border-white/10 overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
              <BubbleMenu
                logo="B"
                useFixedPosition={false}
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Default items and colors
            </p>
          </div>

          {/* Custom items */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-full h-[400px] rounded-xl border border-white/10 overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
              <BubbleMenu
                logo="X"
                menuBg="#1e1e2e"
                menuContentColor="#cdd6f4"
                useFixedPosition={false}
                items={[
                  { label: "dashboard", href: "#", rotation: -6, hoverStyles: { bgColor: "#89b4fa", textColor: "#1e1e2e" } },
                  { label: "settings", href: "#", rotation: 4, hoverStyles: { bgColor: "#a6e3a1", textColor: "#1e1e2e" } },
                  { label: "logout", href: "#", rotation: -3, hoverStyles: { bgColor: "#f38ba8", textColor: "#1e1e2e" } },
                ]}
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Custom items, Catppuccin-style colors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
