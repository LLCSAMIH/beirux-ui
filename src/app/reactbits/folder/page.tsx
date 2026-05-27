"use client";

import Folder from "@/components/Folder";
import { BackLink } from "@/components/back-link";

export default function FolderPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Folder
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Interactive folder icon that opens on click to reveal paper items
            inside. Supports custom colors, sizes, and content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center justify-items-center">
          {/* Default */}
          <div className="flex flex-col items-center gap-6">
            <Folder color="#5227FF" size={1.5} />
            <p className="text-xs text-neutral-500 text-center">
              Default (purple, size 1.5)
            </p>
          </div>

          {/* Custom color with items */}
          <div className="flex flex-col items-center gap-6">
            <Folder
              color="#FF6B35"
              size={1.5}
              items={[
                <div key="1" className="flex items-center justify-center h-full text-xs text-neutral-600 p-2">Draft</div>,
                <div key="2" className="flex items-center justify-center h-full text-xs text-neutral-600 p-2">Notes</div>,
                <div key="3" className="flex items-center justify-center h-full text-xs text-neutral-600 p-2">Ideas</div>,
              ]}
            />
            <p className="text-xs text-neutral-500 text-center">
              Orange with paper items (click to open)
            </p>
          </div>

          {/* Large green */}
          <div className="flex flex-col items-center gap-6">
            <Folder color="#22C55E" size={2} />
            <p className="text-xs text-neutral-500 text-center">
              Green, size 2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
