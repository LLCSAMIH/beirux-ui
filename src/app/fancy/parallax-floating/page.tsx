"use client";

export const dynamic = "force-dynamic";

import Floating, {
  FloatingElement,
} from "@/components/fancy/image/parallax-floating";
import { BackLink } from "@/components/back-link";

export default function ParallaxFloatingPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <Floating sensitivity={1} easingFactor={0.05} className="w-full h-full">
        <FloatingElement depth={0.5} className="top-[10%] left-[10%]">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-600/10 border border-blue-500/20 flex items-center justify-center">
            <span className="text-3xl">1</span>
          </div>
        </FloatingElement>

        <FloatingElement depth={1} className="top-[20%] left-[60%]">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-600/10 border border-purple-500/20 flex items-center justify-center">
            <span className="text-4xl">2</span>
          </div>
        </FloatingElement>

        <FloatingElement depth={2} className="top-[55%] left-[25%]">
          <div className="w-40 h-28 rounded-xl bg-gradient-to-br from-emerald-500/30 to-emerald-600/10 border border-emerald-500/20 flex items-center justify-center">
            <span className="text-3xl">3</span>
          </div>
        </FloatingElement>

        <FloatingElement depth={3} className="top-[40%] left-[75%]">
          <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-orange-500/30 to-orange-600/10 border border-orange-500/20 flex items-center justify-center">
            <span className="text-2xl">4</span>
          </div>
        </FloatingElement>

        <FloatingElement depth={1.5} className="top-[70%] left-[55%]">
          <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-pink-500/30 to-pink-600/10 border border-pink-500/20 flex items-center justify-center">
            <span className="text-4xl">5</span>
          </div>
        </FloatingElement>

        <FloatingElement depth={0.8} className="top-[65%] left-[85%]">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/30 to-cyan-600/10 border border-cyan-500/20 flex items-center justify-center">
            <span className="text-xl">6</span>
          </div>
        </FloatingElement>
      </Floating>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Parallax Floating
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50 mb-2">
            Fancy Components
          </p>
          <p className="text-xs text-white/30 max-w-xs mx-auto">
            Move your mouse. Elements float at different depths based on their
            parallax depth value.
          </p>
        </div>
      </div>
    </div>
  );
}
