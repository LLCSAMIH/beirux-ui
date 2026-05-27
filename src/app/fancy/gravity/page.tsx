"use client";

import Gravity, {
  MatterBody,
} from "@/components/fancy/physics/gravity";
import { BackLink } from "@/components/back-link";

const items = [
  { emoji: "🪨", x: "15%", y: "5%", size: "text-5xl" },
  { emoji: "🔮", x: "35%", y: "10%", size: "text-6xl" },
  { emoji: "⚡", x: "55%", y: "3%", size: "text-5xl" },
  { emoji: "🌀", x: "75%", y: "8%", size: "text-6xl" },
  { emoji: "💎", x: "25%", y: "15%", size: "text-4xl" },
  { emoji: "🧲", x: "65%", y: "12%", size: "text-5xl" },
  { emoji: "🪐", x: "45%", y: "2%", size: "text-6xl" },
  { emoji: "🌕", x: "85%", y: "6%", size: "text-5xl" },
];

export default function FancyPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />
      <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
        {items.map((item, i) => (
          <MatterBody
            key={i}
            x={item.x}
            y={item.y}
            matterBodyOptions={{
              friction: 0.3,
              restitution: 0.6,
              density: 0.002,
            }}
          >
            <span className={`${item.size} select-none block`}>
              {item.emoji}
            </span>
          </MatterBody>
        ))}
      </Gravity>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Gravity
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
        </div>
      </div>
    </div>
  );
}
