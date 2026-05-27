"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { BackLink } from "@/components/back-link";
import IntroDisclosure from "@/components/ui/intro-disclosure";

const sampleSteps = [
  {
    title: "Welcome to the app",
    short_description: "Get started with a guided walkthrough.",
    full_description:
      "This is a guided walkthrough to help you get started quickly. Follow each step to learn the core features.",
    media: {
      type: "image" as const,
      src: "https://placehold.co/600x400/1a1a2e/e0e0ff?text=Step+1",
      alt: "Welcome step",
    },
  },
  {
    title: "Create your first project",
    short_description: "Projects organize your work.",
    full_description:
      "Projects organize your work into manageable pieces with clear goals. Create one now to get started.",
    media: {
      type: "image" as const,
      src: "https://placehold.co/600x400/1a1a2e/e0e0ff?text=Step+2",
      alt: "Create project step",
    },
  },
  {
    title: "Invite your team",
    short_description: "Collaboration is key.",
    full_description:
      "Add team members to start working together. Collaboration is key to building great things.",
    media: {
      type: "image" as const,
      src: "https://placehold.co/600x400/1a1a2e/e0e0ff?text=Step+3",
      alt: "Invite team step",
    },
  },
];

function IntroDemo() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm transition-colors"
        >
          Reopen disclosure
        </button>
      )}
      <IntroDisclosure
        steps={sampleSteps}
        open={open}
        setOpen={setOpen}
        featureId="demo-intro"
        onComplete={() => console.log("Completed")}
        onSkip={() => console.log("Skipped")}
      />
    </div>
  );
}

function IntroDesktopDemo() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm transition-colors"
        >
          Reopen (desktop variant)
        </button>
      )}
      <IntroDisclosure
        steps={sampleSteps}
        open={open}
        setOpen={setOpen}
        featureId="demo-intro-desktop"
        forceVariant="desktop"
        showProgressBar
      />
    </div>
  );
}

export default function IntroDisclosurePage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Intro Disclosure
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Multi-step onboarding disclosure with swipeable steps, progress
            tracking, and responsive desktop/mobile variants.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Responsive (auto-detects variant)
          </h2>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center min-h-[120px]">
            <IntroDemo />
          </div>
        </section>

        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Forced desktop variant
          </h2>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center min-h-[120px]">
            <IntroDesktopDemo />
          </div>
        </section>
      </div>
    </div>
  );
}
