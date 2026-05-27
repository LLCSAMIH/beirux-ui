"use client";

import { PromptLibraryWidget, type Prompt } from "@/components/ui/prompt-library";
import { BackLink } from "@/components/back-link";

const samplePrompts: Prompt[] = [
  {
    id: "1",
    title: "Code Review",
    description: "Review code for bugs and best practices",
    prompt:
      "Review this code for bugs, performance issues, and best practices. Suggest specific improvements.",
    category: "Development",
  },
  {
    id: "2",
    title: "Write Documentation",
    description: "Generate clear API documentation",
    prompt:
      "Write clear, concise documentation for this API endpoint. Include request/response examples.",
    category: "Writing",
  },
  {
    id: "3",
    title: "Brainstorm Ideas",
    description: "Generate creative project ideas",
    prompt:
      "Generate 10 creative ideas for this project. Focus on feasibility and user impact.",
    category: "Creative",
  },
  {
    id: "4",
    title: "Debug Error",
    description: "Analyze errors and suggest fixes",
    prompt:
      "Analyze this error message and stack trace. Explain the root cause and provide a fix.",
    category: "Development",
  },
  {
    id: "5",
    title: "Summarize Content",
    description: "Create concise summaries",
    prompt:
      "Summarize this content into 3 key bullet points. Keep it under 100 words total.",
    category: "Writing",
  },
];

function PromptLibraryDemo() {
  return (
    <PromptLibraryWidget
      prompts={samplePrompts}
      onSelect={(prompt) => console.log("Selected:", prompt.title)}
    >
      <PromptLibraryWidget.Trigger />
      <PromptLibraryWidget.Content>
        <PromptLibraryWidget.Search placeholder="Search prompts..." />
        <PromptLibraryWidget.List>
          <PromptLibraryWidget.Empty>
            No prompts found
          </PromptLibraryWidget.Empty>
          <PromptLibraryWidget.Group heading="All Prompts">
            {samplePrompts.map((prompt) => (
              <PromptLibraryWidget.Item key={prompt.id} prompt={prompt}>
                <PromptLibraryWidget.ItemTitle>
                  {prompt.title}
                </PromptLibraryWidget.ItemTitle>
                <PromptLibraryWidget.ItemDescription>
                  {prompt.description}
                </PromptLibraryWidget.ItemDescription>
              </PromptLibraryWidget.Item>
            ))}
          </PromptLibraryWidget.Group>
        </PromptLibraryWidget.List>
        <PromptLibraryWidget.Footer>
          <PromptLibraryWidget.CreateTrigger />
          <PromptLibraryWidget.CreateDialog />
        </PromptLibraryWidget.Footer>
      </PromptLibraryWidget.Content>
    </PromptLibraryWidget>
  );
}

export default function PromptLibraryPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Prompt Library
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Prompt Library Widget
            </h2>
            <p className="text-sm text-neutral-400 mb-8">
              Searchable prompt library with categories, hover previews, and a
              create dialog. Click the trigger button to open.
            </p>
            <div className="flex justify-center">
              <PromptLibraryDemo />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
