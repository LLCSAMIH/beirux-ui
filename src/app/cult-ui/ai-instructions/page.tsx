"use client";

export const dynamic = "force-dynamic";

import { BackLink } from "@/components/back-link"
import {
  Instructions,
  InstructionsTrigger,
  InstructionsContent,
  InstructionsSearch,
  InstructionsList,
  InstructionsEmpty,
  InstructionsGroup,
  InstructionsItem,
  InstructionsFooter,
  InstructionsCreateTrigger,
  InstructionsCreateDialog,
  type Instruction,
} from "@/components/ui/ai-instructions"
import { useState } from "react"

const sampleInstructions: Instruction[] = [
  {
    id: "concise",
    title: "Be Concise",
    description: "Keep responses short and focused",
    content:
      "Respond with the minimum words needed to fully answer the question. Avoid filler phrases, preamble, and unnecessary qualifiers.",
  },
  {
    id: "technical",
    title: "Technical Detail",
    description: "Include implementation specifics",
    content:
      "When discussing code or architecture, include concrete examples, exact function signatures, and relevant configuration. Cite file paths when referencing project code.",
  },
  {
    id: "creative",
    title: "Creative Mode",
    description: "Prioritize novel and surprising ideas",
    content:
      "Generate at least 3 distinct directions before settling. Pull references from outside the obvious domain. If two ideas feel similar, push harder.",
  },
  {
    id: "formal",
    title: "Formal Tone",
    description: "Use professional, structured language",
    content:
      "Write in a professional register. Use complete sentences, proper grammar, and structured formatting with headers and bullet points where appropriate.",
  },
]

export default function AIInstructionsPage() {
  const [activeIds, setActiveIds] = useState<string[]>(["concise"])

  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            AI Instructions
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            A compound component for managing AI behavior instructions. Includes
            search, toggle, hover preview, and custom instruction creation.
          </p>
        </div>

        <div className="space-y-16">
          {/* Default demo */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Interactive Demo
            </h2>
            <div className="flex items-center justify-center">
              <Instructions
                instructions={sampleInstructions}
                value={activeIds}
                onValueChange={setActiveIds}
              >
                <InstructionsTrigger />
                <InstructionsContent>
                  <InstructionsSearch />
                  <InstructionsList>
                    <InstructionsEmpty />
                    <InstructionsGroup heading="Presets">
                      {sampleInstructions.map((instruction) => (
                        <InstructionsItem
                          key={instruction.id}
                          instruction={instruction}
                        />
                      ))}
                    </InstructionsGroup>
                  </InstructionsList>
                  <InstructionsFooter>
                    <InstructionsCreateTrigger />
                  </InstructionsFooter>
                </InstructionsContent>
                <InstructionsCreateDialog />
              </Instructions>
            </div>
            <p className="text-center text-xs text-white/30 mt-4">
              Click the trigger above to open the instruction picker
            </p>
          </section>

          {/* Active state display */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Active Instructions
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              {activeIds.length === 0 ? (
                <p className="text-sm text-white/30">
                  No instructions selected
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {activeIds.map((id) => {
                    const inst = sampleInstructions.find((i) => i.id === id)
                    return (
                      <span
                        key={id}
                        className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white/70"
                      >
                        {inst?.title ?? id}
                      </span>
                    )
                  })}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
