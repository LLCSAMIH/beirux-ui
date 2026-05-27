"use client";

import {
  FloatingPanelRoot,
  FloatingPanelTrigger,
  FloatingPanelContent,
  FloatingPanelForm,
  FloatingPanelTextarea,
  FloatingPanelFooter,
  FloatingPanelCloseButton,
  FloatingPanelSubmitButton,
  FloatingPanelBody,
  FloatingPanelButton,
} from "@/components/ui/floating-panel";
import { BackLink } from "@/components/back-link";
import { FileText, MessageSquare, Pencil } from "lucide-react";

export default function FloatingPanelPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Floating Panel
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          {/* Note form */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Note Form
            </h2>
            <div className="flex justify-center">
              <FloatingPanelRoot>
                <FloatingPanelTrigger title="Add Note" className="rounded-lg">
                  <Pencil className="mr-2 h-4 w-4" />
                  Add Note
                </FloatingPanelTrigger>
                <FloatingPanelContent className="w-[320px]">
                  <FloatingPanelForm onSubmit={(note) => console.log("Note:", note)}>
                    <FloatingPanelTextarea className="min-h-[120px]" />
                    <FloatingPanelFooter>
                      <FloatingPanelCloseButton />
                      <FloatingPanelSubmitButton />
                    </FloatingPanelFooter>
                  </FloatingPanelForm>
                </FloatingPanelContent>
              </FloatingPanelRoot>
            </div>
          </section>

          {/* Menu panel */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Action Menu
            </h2>
            <div className="flex justify-center">
              <FloatingPanelRoot>
                <FloatingPanelTrigger title="Actions" className="rounded-lg">
                  Actions
                </FloatingPanelTrigger>
                <FloatingPanelContent className="w-[240px]">
                  <FloatingPanelBody>
                    <FloatingPanelButton onClick={() => console.log("New doc")}>
                      <FileText className="h-4 w-4" />
                      New Document
                    </FloatingPanelButton>
                    <FloatingPanelButton onClick={() => console.log("Comment")}>
                      <MessageSquare className="h-4 w-4" />
                      Add Comment
                    </FloatingPanelButton>
                    <FloatingPanelButton onClick={() => console.log("Edit")}>
                      <Pencil className="h-4 w-4" />
                      Edit
                    </FloatingPanelButton>
                  </FloatingPanelBody>
                </FloatingPanelContent>
              </FloatingPanelRoot>
            </div>
          </section>

          {/* Multiple triggers */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Multiple Panels
            </h2>
            <div className="flex justify-center gap-4 flex-wrap">
              {["Quick Note", "Feedback", "Bug Report"].map((label) => (
                <FloatingPanelRoot key={label}>
                  <FloatingPanelTrigger title={label} className="rounded-lg">
                    {label}
                  </FloatingPanelTrigger>
                  <FloatingPanelContent className="w-[280px]">
                    <FloatingPanelForm onSubmit={(note) => console.log(label, note)}>
                      <FloatingPanelTextarea className="min-h-[100px]" />
                      <FloatingPanelFooter>
                        <FloatingPanelCloseButton />
                        <FloatingPanelSubmitButton />
                      </FloatingPanelFooter>
                    </FloatingPanelForm>
                  </FloatingPanelContent>
                </FloatingPanelRoot>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
