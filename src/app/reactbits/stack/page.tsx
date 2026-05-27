"use client";

import { BackLink } from "@/components/back-link";
import dynamic from "next/dynamic";

const Stack = dynamic(() => import("@/components/Stack"), {
  ssr: false,
});

export default function StackPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Stack
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Draggable card stack with 3D rotation. Fling cards to send them to
            the back. Supports autoplay and random rotation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Drag to dismiss */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-[300px] h-[400px]">
              <Stack
                randomRotation={true}
                sensitivity={180}
                cards={[
                  <div key="1" className="w-full h-full rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">Card 1</span>
                  </div>,
                  <div key="2" className="w-full h-full rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">Card 2</span>
                  </div>,
                  <div key="3" className="w-full h-full rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">Card 3</span>
                  </div>,
                  <div key="4" className="w-full h-full rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">Card 4</span>
                  </div>,
                ]}
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Drag to fling (random rotation)
            </p>
          </div>

          {/* Autoplay + click to dismiss */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-[300px] h-[400px]">
              <Stack
                randomRotation={false}
                sendToBackOnClick={true}
                autoplay={true}
                autoplayDelay={2500}
                pauseOnHover={true}
                cards={[
                  <div key="1" className="w-full h-full rounded-2xl bg-gradient-to-br from-pink-500 to-rose-700 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">Slide A</span>
                  </div>,
                  <div key="2" className="w-full h-full rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">Slide B</span>
                  </div>,
                  <div key="3" className="w-full h-full rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-800 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">Slide C</span>
                  </div>,
                ]}
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Autoplay (2.5s), click to dismiss, pause on hover
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
