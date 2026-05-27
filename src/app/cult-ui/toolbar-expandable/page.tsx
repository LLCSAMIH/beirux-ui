"use client";

import ToolbarExpandable from "@/components/ui/toolbar-expandable";
import { BackLink } from "@/components/back-link";
import { Code, Palette, Zap } from "lucide-react";

const demoSteps = [
  {
    id: "design",
    title: "Design",
    description: "Create your visual identity and component library",
    icon: Palette,
    content: (
      <div className="space-y-2 text-sm text-muted-foreground">
        <p>Pick a color palette, define spacing tokens, and establish typography scales.</p>
        <div className="h-2 w-3/4 rounded bg-muted" />
        <div className="h-2 w-1/2 rounded bg-muted" />
      </div>
    ),
  },
  {
    id: "develop",
    title: "Develop",
    description: "Build components with React and TypeScript",
    icon: Code,
    content: (
      <div className="space-y-2 text-sm text-muted-foreground">
        <p>Compose primitives into reusable, accessible components.</p>
        <pre className="bg-muted/50 rounded p-2 text-xs font-mono">npx shadcn@latest add button</pre>
      </div>
    ),
  },
  {
    id: "deploy",
    title: "Deploy",
    description: "Ship to production with confidence",
    icon: Zap,
    content: (
      <div className="space-y-2 text-sm text-muted-foreground">
        <p>Run tests, build, and deploy to Vercel in one push.</p>
        <div className="flex gap-2">
          <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded">Tests passing</span>
          <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-0.5 rounded">Build OK</span>
        </div>
      </div>
    ),
  },
];

export default function ToolbarExpandablePage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Toolbar Expandable
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Step-based navigation
            </h2>
            <ToolbarExpandable steps={demoSteps} />
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Two steps
            </h2>
            <ToolbarExpandable steps={demoSteps.slice(0, 2)} />
          </section>
        </div>
      </div>
    </div>
  );
}
