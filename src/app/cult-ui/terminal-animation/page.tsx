"use client";

export const dynamic = "force-dynamic";

import {
  TerminalAnimationRoot,
  TerminalAnimationWindow,
  TerminalAnimationContent,
  TerminalAnimationCommandBar,
  TerminalAnimationOutput,
  TerminalAnimationTabList,
  TerminalAnimationTabTrigger,
  defaultTerminalTabs,
} from "@/components/ui/terminal-animation";
import { BackLink } from "@/components/back-link";

export default function TerminalAnimationPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Terminal Animation
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Default terminal with tabs
            </h2>
            <TerminalAnimationRoot tabs={defaultTerminalTabs} alwaysDark className="relative">
              <TerminalAnimationWindow className="bg-neutral-950 border border-white/10">
                <TerminalAnimationContent>
                  <div className="font-mono text-sm">
                    <div className="flex items-center gap-2 text-neutral-400 mb-2">
                      <span className="text-green-400">$</span>
                      <TerminalAnimationCommandBar className="text-white" />
                    </div>
                    <TerminalAnimationOutput />
                  </div>
                </TerminalAnimationContent>
                <TerminalAnimationTabList className="flex border-t border-white/10">
                  {defaultTerminalTabs.map((tab, i) => (
                    <TerminalAnimationTabTrigger
                      key={tab.label}
                      index={i}
                      className="px-4 py-2 text-xs font-mono text-neutral-500 hover:text-white transition-colors data-[state=active]:text-white data-[state=active]:bg-white/5"
                    >
                      {tab.label}
                    </TerminalAnimationTabTrigger>
                  ))}
                </TerminalAnimationTabList>
              </TerminalAnimationWindow>
            </TerminalAnimationRoot>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Custom single command
            </h2>
            <TerminalAnimationRoot
              tabs={[{
                label: "deploy",
                command: "git push origin main",
                lines: [
                  { text: "", delay: 80 },
                  { text: "  Enumerating objects: 42, done.", color: "text-neutral-400", delay: 200 },
                  { text: "  Counting objects: 100% (42/42), done.", color: "text-neutral-400", delay: 150 },
                  { text: "  Compressing objects: 100% (28/28), done.", color: "text-neutral-400", delay: 150 },
                  { text: "", delay: 100 },
                  { text: "  To github.com:user/project.git", color: "text-neutral-500", delay: 200 },
                  { text: "     abc1234..def5678  main -> main", color: "text-green-400", delay: 100 },
                ],
              }]}
              alwaysDark
              className="relative"
            >
              <TerminalAnimationWindow className="bg-neutral-950 border border-white/10" minHeight="16rem">
                <TerminalAnimationContent>
                  <div className="font-mono text-sm">
                    <div className="flex items-center gap-2 text-neutral-400 mb-2">
                      <span className="text-green-400">$</span>
                      <TerminalAnimationCommandBar className="text-white" />
                    </div>
                    <TerminalAnimationOutput />
                  </div>
                </TerminalAnimationContent>
              </TerminalAnimationWindow>
            </TerminalAnimationRoot>
          </section>
        </div>
      </div>
    </div>
  );
}
