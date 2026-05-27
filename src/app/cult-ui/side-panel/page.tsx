"use client";

import { useState } from "react";
import { SidePanel } from "@/components/ui/side-panel";
import { BackLink } from "@/components/back-link";
import { ChevronRight, Home, Settings, User, Mail, Bell } from "lucide-react";

function SidePanelDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-4">
      <SidePanel
        panelOpen={open}
        handlePanelOpen={() => setOpen(!open)}
        renderButton={(toggle) => (
          <button
            onClick={toggle}
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <ChevronRight
              className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            />
            {!open && <span className="hidden md:inline">Menu</span>}
          </button>
        )}
      >
        <div className="px-4 pb-4 space-y-1">
          <NavItem icon={<Home className="h-4 w-4" />} label="Home" />
          <NavItem icon={<User className="h-4 w-4" />} label="Profile" />
          <NavItem icon={<Mail className="h-4 w-4" />} label="Messages" />
          <NavItem icon={<Bell className="h-4 w-4" />} label="Notifications" />
          <NavItem icon={<Settings className="h-4 w-4" />} label="Settings" />
        </div>
      </SidePanel>

      <div className="flex-1 p-8 bg-white/5 rounded-2xl">
        <p className="text-sm text-neutral-400">
          {open
            ? "Panel is open. Click the arrow to collapse."
            : "Click the arrow to expand the side panel."}
        </p>
      </div>
    </div>
  );
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">
      {icon}
      <span>{label}</span>
    </button>
  );
}

function CompactPanelDemo() {
  const [open, setOpen] = useState(true);

  return (
    <SidePanel
      panelOpen={open}
      handlePanelOpen={() => setOpen(!open)}
      renderButton={(toggle) => (
        <button
          onClick={toggle}
          className="text-xs text-neutral-500 hover:text-white transition-colors"
        >
          {open ? "Close" : "Open"}
        </button>
      )}
    >
      <div className="px-4 pb-4">
        <p className="text-sm text-neutral-400 mb-3">Quick actions</p>
        <div className="flex flex-wrap gap-2">
          {["Draft", "Review", "Deploy", "Monitor"].map((action) => (
            <button
              key={action}
              className="px-3 py-1.5 text-xs rounded-lg bg-white/5 text-neutral-300 hover:bg-white/10 transition-colors"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </SidePanel>
  );
}

export default function SidePanelPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Side Panel
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          {/* Navigation panel */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Navigation Panel
            </h2>
            <p className="text-sm text-neutral-400 mb-8">
              Animated side panel with spring-based resize. Content flows
              in with staggered transitions.
            </p>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/20">
              <SidePanelDemo />
            </div>
          </section>

          {/* Compact panel */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Compact Panel
            </h2>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/20 p-4">
              <CompactPanelDemo />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
