"use client";

export const dynamic = "force-dynamic";

import {
  Onboarding,
  ChoiceGroup,
  FeatureCarousel,
  TipsList,
} from "@/components/ui/onboarding";
import { BackLink } from "@/components/back-link";

function OnboardingDemo() {
  return (
    <Onboarding totalSteps={3} className="w-full max-w-lg mx-auto">
      <Onboarding.Step step={1}>
        <Onboarding.Header
          title="What brings you here?"
          description="Help us personalize your experience."
        />
        <ChoiceGroup name="purpose" onValueChange={(v) => console.log(v)}>
          <ChoiceGroup.Item value="build">Build something new</ChoiceGroup.Item>
          <ChoiceGroup.Item value="explore">
            Explore components
          </ChoiceGroup.Item>
          <ChoiceGroup.Item value="learn">
            Learn and experiment
          </ChoiceGroup.Item>
        </ChoiceGroup>
      </Onboarding.Step>

      <Onboarding.Step step={2}>
        <Onboarding.Header
          title="Key features"
          description="Here is what you can do."
        />
        <FeatureCarousel>
          <FeatureCarousel.Item index={0}>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Lightning fast</h3>
              <p className="text-sm text-neutral-400">
                Optimized animations with Motion.
              </p>
            </div>
          </FeatureCarousel.Item>
          <FeatureCarousel.Item index={1}>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Accessible</h3>
              <p className="text-sm text-neutral-400">
                Built on Radix UI primitives.
              </p>
            </div>
          </FeatureCarousel.Item>
          <FeatureCarousel.Item index={2}>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Customizable</h3>
              <p className="text-sm text-neutral-400">
                Tailwind CSS for full control.
              </p>
            </div>
          </FeatureCarousel.Item>
        </FeatureCarousel>
      </Onboarding.Step>

      <Onboarding.Step step={3}>
        <Onboarding.Header
          title="Quick tips"
          description="Get started with these pointers."
        />
        <TipsList>
          <TipsList.Item>Copy-paste components into your project</TipsList.Item>
          <TipsList.Item>Customize colors via Tailwind config</TipsList.Item>
          <TipsList.Item>All components are fully typed</TipsList.Item>
        </TipsList>
      </Onboarding.Step>

      <Onboarding.StepIndicator variant="dots" className="mt-6" />
      <Onboarding.Navigation className="mt-4" />
    </Onboarding>
  );
}

export default function OnboardingPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Onboarding
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Multi-step Onboarding
            </h2>
            <div className="bg-white/5 rounded-2xl p-8">
              <OnboardingDemo />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
