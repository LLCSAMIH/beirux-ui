"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import {
  PopoverForm,
  PopoverFormButton,
  PopoverFormSuccess,
  PopoverFormSeparator,
} from "@/components/ui/popover-form";
import { BackLink } from "@/components/back-link";

function FeedbackFormDemo() {
  const [open, setOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setOpen(false);
      }, 2000);
    }, 800);
  };

  return (
    <PopoverForm
      title="Feedback"
      open={open}
      setOpen={setOpen}
      showSuccess={showSuccess}
      openChild={
        <div className="p-3">
          <textarea
            className="w-full h-24 bg-transparent text-sm text-foreground placeholder:text-muted-foreground resize-none outline-none"
            placeholder="What can we improve?"
            autoFocus
          />
          <PopoverFormSeparator />
          <div className="flex justify-end gap-2 pt-2">
            <PopoverFormButton loading={loading} text="Submit" />
          </div>
        </div>
      }
      successChild={
        <PopoverFormSuccess
          title="Thanks!"
          description="Your feedback has been received."
        />
      }
    />
  );
}

function ContactFormDemo() {
  const [open, setOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setOpen(false);
      }, 2000);
    }, 800);
  };

  return (
    <PopoverForm
      title="Contact"
      open={open}
      setOpen={setOpen}
      showSuccess={showSuccess}
      width="400px"
      height="240px"
      openChild={
        <div className="p-3 space-y-3">
          <input
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground border-b border-border pb-2 outline-none"
            placeholder="Your email"
            type="email"
          />
          <textarea
            className="w-full h-20 bg-transparent text-sm text-foreground placeholder:text-muted-foreground resize-none outline-none"
            placeholder="Your message..."
          />
          <PopoverFormSeparator />
          <div className="flex justify-end gap-2">
            <PopoverFormButton loading={loading} text="Send" />
          </div>
        </div>
      }
      successChild={
        <PopoverFormSuccess
          title="Sent!"
          description="We will get back to you soon."
        />
      }
    />
  );
}

export default function PopoverFormPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Popover Form
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Feedback Form
            </h2>
            <p className="text-sm text-neutral-400 mb-8">
              Click the button to expand into an inline form with layout
              animation. Shows a success state after submit.
            </p>
            <FeedbackFormDemo />
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Contact Form
            </h2>
            <p className="text-sm text-neutral-400 mb-8">
              Larger form with email input and custom dimensions.
            </p>
            <ContactFormDemo />
          </section>
        </div>
      </div>
    </div>
  );
}
