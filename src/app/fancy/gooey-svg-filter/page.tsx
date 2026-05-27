"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { motion } from "motion/react";
import GooeySvgFilter from "@/components/fancy/filter/gooey-svg-filter";
import { BackLink } from "@/components/back-link";

function GooeyBlobDemo({ strength, label }: { strength: number; label: string }) {
  const [hovered, setHovered] = useState(false);
  const filterId = `gooey-${strength}`;

  return (
    <section>
      <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-4">
        {label}
      </p>
      <div
        className="relative h-40 flex items-center justify-center"
        style={{ filter: `url(#${filterId})` }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <GooeySvgFilter id={filterId} strength={strength} />
        <motion.div
          className="w-24 h-24 rounded-full bg-purple-500"
          animate={{ scale: hovered ? 1.2 : 1 }}
        />
        <motion.div
          className="w-16 h-16 rounded-full bg-purple-500 absolute"
          animate={{
            x: hovered ? 60 : 20,
            y: hovered ? -20 : 0,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        />
      </div>
    </section>
  );
}

export default function GooeySvgFilterPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Gooey SVG Filter
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            An SVG filter that creates a gooey blob effect. Hover the circles
            to see them merge and separate.
          </p>
        </div>

        <div className="space-y-16">
          <GooeyBlobDemo strength={10} label="Default strength (10)" />
          <GooeyBlobDemo strength={20} label="High strength (20)" />
          <GooeyBlobDemo strength={5} label="Low strength (5)" />
        </div>
      </div>
    </div>
  );
}
