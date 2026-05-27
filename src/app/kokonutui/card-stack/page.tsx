"use client";

export const dynamic = "force-dynamic";

import CardStackExample from "@/components/kokonutui/card-stack";
import { BackLink } from "@/components/back-link";

export default function CardStackPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
            KokonutUI
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Card Stack
          </h1>
          <p className="mt-4 text-lg text-neutral-400 max-w-xl">
            Click the stack to fan out overlapping product cards with a spring
            animation. Click again to collapse them back into a neat pile.
          </p>
        </div>

        <CardStackExample />
      </div>
    </div>
  );
}
