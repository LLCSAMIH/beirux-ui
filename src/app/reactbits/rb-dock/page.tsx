"use client";

import Dock from "@/components/Dock";
import { BackLink } from "@/components/back-link";

export default function DockPage() {
  const defaultItems = [
    { icon: <span className="text-xl">🏠</span>, label: "Home", onClick: () => {} },
    { icon: <span className="text-xl">📊</span>, label: "Analytics", onClick: () => {} },
    { icon: <span className="text-xl">💬</span>, label: "Messages", onClick: () => {} },
    { icon: <span className="text-xl">⚙️</span>, label: "Settings", onClick: () => {} },
    { icon: <span className="text-xl">👤</span>, label: "Profile", onClick: () => {} },
  ];

  const miniItems = [
    { icon: <span className="text-lg">▶</span>, label: "Play", onClick: () => {} },
    { icon: <span className="text-lg">⏸</span>, label: "Pause", onClick: () => {} },
    { icon: <span className="text-lg">⏭</span>, label: "Next", onClick: () => {} },
  ];

  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Dock
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            macOS-style dock with magnification on hover. Spring physics
            scale items based on cursor proximity.
          </p>
        </div>

        <div className="flex flex-col items-center gap-20">
          {/* Default */}
          <div className="flex flex-col items-center gap-4">
            <Dock items={defaultItems} />
            <p className="text-xs text-neutral-500 text-center mt-4">
              Default (5 items, default magnification)
            </p>
          </div>

          {/* Higher magnification */}
          <div className="flex flex-col items-center gap-4">
            <Dock
              items={defaultItems}
              magnification={80}
              distance={200}
              panelHeight={72}
              baseItemSize={50}
              dockHeight={64}
            />
            <p className="text-xs text-neutral-500 text-center mt-4">
              High magnification (80px, wider range)
            </p>
          </div>

          {/* Compact */}
          <div className="flex flex-col items-center gap-4">
            <Dock
              items={miniItems}
              baseItemSize={36}
              dockHeight={48}
              panelHeight={56}
              magnification={56}
            />
            <p className="text-xs text-neutral-500 text-center mt-4">
              Compact (3 items, smaller base)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
