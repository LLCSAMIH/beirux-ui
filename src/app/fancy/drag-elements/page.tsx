"use client";

export const dynamic = "force-dynamic";

import DragElements from "@/components/fancy/blocks/drag-elements";
import { BackLink } from "@/components/back-link";

const blocks = [
  {
    label: "Drag me",
    color: "bg-violet-500",
    style: { top: "15%", left: "10%" },
    size: "w-28 h-28",
  },
  {
    label: "Physics",
    color: "bg-emerald-500",
    style: { top: "30%", left: "55%" },
    size: "w-32 h-20",
  },
  {
    label: "Motion",
    color: "bg-amber-400 text-black",
    style: { top: "50%", left: "25%" },
    size: "w-24 h-24",
  },
  {
    label: "Fancy",
    color: "bg-rose-500",
    style: { top: "10%", left: "70%" },
    size: "w-36 h-16",
  },
  {
    label: "Stack",
    color: "bg-cyan-500",
    style: { top: "60%", left: "60%" },
    size: "w-20 h-28",
  },
  {
    label: "Elastic",
    color: "bg-fuchsia-500",
    style: { top: "40%", left: "40%" },
    size: "w-28 h-20",
  },
];

export default function DragElementsPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <DragElements
        dragMomentum
        dragElastic={0.35}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        selectedOnTop
        className="h-full w-full"
      >
        {blocks.map((block) => (
          <div
            key={block.label}
            style={block.style}
            className={`${block.size} ${block.color} rounded-2xl flex items-center justify-center text-white font-semibold text-sm shadow-lg select-none`}
          >
            {block.label}
          </div>
        ))}
      </DragElements>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Drag Elements
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="mt-4 max-w-md mx-auto text-sm text-white/40 leading-relaxed">
            Grab and toss the colored blocks around. They snap back with elastic
            momentum, and the last one you touch rises to the top of the stack.
          </p>
        </div>
      </div>
    </div>
  );
}
