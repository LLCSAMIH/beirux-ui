"use client";

import {
  PopoverRoot,
  PopoverTrigger,
  PopoverContent,
  PopoverForm,
  PopoverFooter,
  PopoverCloseButton,
  PopoverSubmitButton,
  PopoverHeader,
  PopoverBody,
  PopoverButton,
} from "@/components/ui/popover";
import { BackLink } from "@/components/back-link";
import { MessageSquare, Settings, Bell, User } from "lucide-react";

export default function CultPopoverPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Popover
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-24">
          {/* Note popover with form */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Note Form
            </h2>
            <p className="text-sm text-neutral-400 mb-8">
              Click the trigger to open a popover with a textarea form. Animated
              with Motion layout transitions.
            </p>
            <div className="flex justify-center">
              <PopoverRoot>
                <PopoverTrigger>
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Add a note
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverForm>
                    <PopoverFooter>
                      <PopoverCloseButton />
                      <PopoverSubmitButton />
                    </PopoverFooter>
                  </PopoverForm>
                </PopoverContent>
              </PopoverRoot>
            </div>
          </section>

          {/* Menu popover */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Menu Style
            </h2>
            <p className="text-sm text-neutral-400 mb-8">
              Popover content with button items for a dropdown-menu-like
              experience.
            </p>
            <div className="flex justify-center">
              <PopoverRoot>
                <PopoverTrigger>
                  <Settings className="h-4 w-4 mr-2" />
                  Options
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader>Settings</PopoverHeader>
                  <PopoverBody>
                    <PopoverButton>
                      <User className="h-4 w-4" /> Profile
                    </PopoverButton>
                    <PopoverButton>
                      <Bell className="h-4 w-4" /> Notifications
                    </PopoverButton>
                    <PopoverButton>
                      <Settings className="h-4 w-4" /> Preferences
                    </PopoverButton>
                  </PopoverBody>
                </PopoverContent>
              </PopoverRoot>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
