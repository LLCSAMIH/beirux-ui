"use client";

export const dynamic = "force-dynamic";

import Gravity, {
  MatterBody,
} from "@/components/fancy/physics/cursor-attractor-and-gravity";
import { BackLink } from "@/components/back-link";

const pills = [
  { label: "Design", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
  { label: "Motion", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  { label: "Physics", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
  { label: "React", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
  { label: "Creative", color: "bg-pink-500/20 text-pink-300 border-pink-500/30" },
  { label: "Interactive", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
  { label: "Matter.js", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
  { label: "Gravity", color: "bg-red-500/20 text-red-300 border-red-500/30" },
  { label: "Cursor", color: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30" },
  { label: "Force", color: "bg-teal-500/20 text-teal-300 border-teal-500/30" },
];

export default function CursorAttractorPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      {/* Attractor demo: pills orbit a center point and repel from cursor */}
      <Gravity
        attractorPoint={{ x: "50%", y: "50%" }}
        attractorStrength={0.0006}
        cursorStrength={-0.005}
        cursorFieldRadius={200}
        className="w-full h-full"
      >
        {pills.map((pill, i) => (
          <MatterBody
            key={i}
            x={`${15 + (i % 5) * 18}%`}
            y={`${20 + Math.floor(i / 5) * 25}%`}
            matterBodyOptions={{
              friction: 0.05,
              restitution: 0.4,
              density: 0.001,
            }}
          >
            <span
              className={`${pill.color} border rounded-full px-4 py-2 text-sm font-medium select-none whitespace-nowrap block`}
            >
              {pill.label}
            </span>
          </MatterBody>
        ))}
      </Gravity>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Cursor Attractor
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50 mb-2">
            Fancy Components
          </p>
          <p className="text-xs text-white/30 max-w-xs mx-auto">
            Pills orbit the center point. Move your cursor to repel them.
          </p>
        </div>
      </div>
    </div>
  );
}
