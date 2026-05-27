"use client";

import AI_Input_Search from "@/components/kokonutui/ai-input-search";
import { BackLink } from "@/components/back-link";

export default function AIInputSearchPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />
      <div className="flex min-h-screen flex-col items-center justify-center px-6">
        <div className="w-full max-w-xl text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-neutral-500">
            KokonutUI
          </p>
          <h1 className="mb-8 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Ask anything
          </h1>
          <AI_Input_Search
            placeholder="Search the web..."
            searchLabel="Search"
            onSubmit={(value) => console.log("Submitted:", value)}
          />
          <p className="mt-6 text-xs text-neutral-600">
            Textarea auto-resizes. Toggle search mode with the globe button.
            Press Enter to submit.
          </p>
        </div>
      </div>
    </div>
  );
}
