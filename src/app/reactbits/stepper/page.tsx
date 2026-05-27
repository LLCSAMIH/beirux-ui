"use client";

import { BackLink } from "@/components/back-link";
import dynamic from "next/dynamic";

const Stepper = dynamic(() => import("@/components/Stepper"), {
  ssr: false,
});

function StepContent({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center py-8">
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-400 text-sm max-w-md mx-auto">{description}</p>
    </div>
  );
}

export default function StepperPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Stepper
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Multi-step wizard with Motion (Framer Motion) slide transitions,
            step indicators, and directional animation.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {/* Default 4-step */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-neutral-900/50 overflow-hidden">
              <Stepper
                initialStep={1}
                onStepChange={(step: number) => console.log("Step:", step)}
                onFinalStepCompleted={() => console.log("Complete!")}
                backButtonText="Back"
                nextButtonText="Continue"
              >
                <StepContent
                  title="Account Details"
                  description="Enter your email and choose a password to create your account."
                />
                <StepContent
                  title="Personal Info"
                  description="Tell us about yourself so we can personalize your experience."
                />
                <StepContent
                  title="Preferences"
                  description="Choose your notification preferences and display settings."
                />
                <StepContent
                  title="Confirmation"
                  description="Review your information and confirm to complete setup."
                />
              </Stepper>
            </div>
            <p className="text-xs text-neutral-500 text-center">
              4-step wizard with slide transitions
            </p>
          </div>

          {/* Minimal 2-step */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-neutral-900/50 overflow-hidden">
              <Stepper
                initialStep={1}
                backButtonText="Previous"
                nextButtonText="Next"
              >
                <StepContent
                  title="Step One"
                  description="A minimal two-step flow."
                />
                <StepContent
                  title="Step Two"
                  description="That is all there is to it."
                />
              </Stepper>
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Minimal 2-step flow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
