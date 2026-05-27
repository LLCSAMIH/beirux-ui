"use client";

export const dynamic = "force-dynamic";

import { Toolbar } from "@/components/kokonutui/toolbar";
import { BackLink } from "@/components/back-link";
import { Bold, Italic, Strikethrough, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";

export default function ToolbarPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Toolbar
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          An animated toolbar with expanding selected items, notification
          toasts on click, and a lock/edit toggle button. Each item
          reveals its label with a spring animation when active.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            toolbar
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            expandable
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default (Design Tools)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center overflow-x-auto">
            <Toolbar />
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Custom Items (Text Formatting)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <Toolbar
              items={[
                { id: "bold", title: "Bold", icon: Bold },
                { id: "italic", title: "Italic", icon: Italic },
                { id: "underline", title: "Underline", icon: Underline },
                { id: "strike", title: "Strikethrough", icon: Strikethrough },
                { id: "align-left", title: "Left", icon: AlignLeft },
                { id: "align-center", title: "Center", icon: AlignCenter },
                { id: "align-right", title: "Right", icon: AlignRight },
              ]}
              defaultSelected="bold"
            />
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            With Callback
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center overflow-x-auto">
            <Toolbar onSelect={(id) => console.log("Selected:", id)} />
          </div>
        </section>
      </div>
    </div>
  );
}
