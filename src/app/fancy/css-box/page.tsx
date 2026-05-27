"use client";

export const dynamic = "force-dynamic";

import { useRef } from "react";
import CSSBox, { type CSSBoxRef } from "@/components/fancy/blocks/css-box";
import { BackLink } from "@/components/back-link";

function FaceContent({ label, color }: { label: string; color: string }) {
  return (
    <div className={`w-full h-full ${color} flex items-center justify-center border border-white/10`}>
      <span className="text-white/80 text-sm font-medium">{label}</span>
    </div>
  );
}

export default function CSSBoxPage() {
  const boxRef = useRef<CSSBoxRef>(null);

  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            CSS Box
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            A 3D CSS cube with spring-animated rotations. Drag to rotate or use
            the buttons to snap to each face.
          </p>
        </div>

        <div className="space-y-20">
          {/* Interactive cube with face buttons */}
          <section className="flex flex-col items-center">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-8">
              Draggable with face controls
            </p>
            <CSSBox
              ref={boxRef}
              width={200}
              height={200}
              depth={200}
              perspective={800}
              faces={{
                front: <FaceContent label="Front" color="bg-blue-500/30" />,
                back: <FaceContent label="Back" color="bg-purple-500/30" />,
                left: <FaceContent label="Left" color="bg-emerald-500/30" />,
                right: <FaceContent label="Right" color="bg-orange-500/30" />,
                top: <FaceContent label="Top" color="bg-pink-500/30" />,
                bottom: <FaceContent label="Bottom" color="bg-cyan-500/30" />,
              }}
            />
            <div className="flex flex-wrap gap-2 mt-8 justify-center">
              {(["Front", "Back", "Left", "Right", "Top", "Bottom"] as const).map((face) => (
                <button
                  key={face}
                  onClick={() => boxRef.current?.[`show${face}`]()}
                  className="px-3 py-1.5 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {face}
                </button>
              ))}
            </div>
          </section>

          {/* Smaller cube, tighter spring */}
          <section className="flex flex-col items-center">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-8">
              Tight spring (stiffness 200, damping 15)
            </p>
            <CSSBox
              width={120}
              height={120}
              depth={120}
              perspective={600}
              stiffness={200}
              damping={15}
              faces={{
                front: <FaceContent label="A" color="bg-red-500/30" />,
                back: <FaceContent label="B" color="bg-red-500/20" />,
                left: <FaceContent label="C" color="bg-red-500/15" />,
                right: <FaceContent label="D" color="bg-red-500/10" />,
                top: <FaceContent label="E" color="bg-red-500/25" />,
                bottom: <FaceContent label="F" color="bg-red-500/35" />,
              }}
            />
          </section>

          {/* Non-cubic, show backface */}
          <section className="flex flex-col items-center">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-8">
              Non-cubic shape (300 x 160 x 80, backface visible)
            </p>
            <CSSBox
              width={300}
              height={160}
              depth={80}
              perspective={900}
              showBackface
              faces={{
                front: <FaceContent label="Wide Front" color="bg-indigo-500/30" />,
                back: <FaceContent label="Wide Back" color="bg-indigo-500/20" />,
                left: <FaceContent label="L" color="bg-indigo-500/15" />,
                right: <FaceContent label="R" color="bg-indigo-500/15" />,
                top: <FaceContent label="Top" color="bg-indigo-500/10" />,
                bottom: <FaceContent label="Bottom" color="bg-indigo-500/10" />,
              }}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
