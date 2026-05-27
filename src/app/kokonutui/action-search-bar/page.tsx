"use client";

import ActionSearchBar from "@/components/kokonutui/action-search-bar";
import { BackLink } from "@/components/back-link";
import {
  FileText,
  Globe,
  Mail,
  Settings,
  Terminal,
  Users,
  Zap,
} from "lucide-react";

const demoActions = [
  {
    id: "1",
    label: "Deploy to production",
    icon: <Zap className="h-4 w-4 text-amber-500" />,
    description: "Vercel",
    short: "⌘D",
    end: "Action",
  },
  {
    id: "2",
    label: "Open terminal",
    icon: <Terminal className="h-4 w-4 text-green-500" />,
    description: "System",
    short: "⌘T",
    end: "Application",
  },
  {
    id: "3",
    label: "Compose email",
    icon: <Mail className="h-4 w-4 text-blue-500" />,
    description: "Gmail",
    short: "⌘E",
    end: "Action",
  },
  {
    id: "4",
    label: "Browse documentation",
    icon: <FileText className="h-4 w-4 text-purple-500" />,
    description: "Docs",
    short: "",
    end: "Link",
  },
  {
    id: "5",
    label: "Team members",
    icon: <Users className="h-4 w-4 text-cyan-500" />,
    description: "People",
    short: "",
    end: "Page",
  },
  {
    id: "6",
    label: "Settings",
    icon: <Settings className="h-4 w-4 text-neutral-400" />,
    description: "Preferences",
    short: "⌘,",
    end: "Page",
  },
  {
    id: "7",
    label: "Connect domain",
    icon: <Globe className="h-4 w-4 text-orange-500" />,
    description: "DNS",
    short: "",
    end: "Action",
  },
];

export default function ActionSearchBarPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      {/* Hero section */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Action Search Bar
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A command palette-style search bar with filterable actions,
          keyboard navigation, and staggered motion animations. Click the
          input below to see the action list, then type to filter.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            debounce
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            a11y
          </span>
        </div>
      </div>

      {/* Demo */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Demo
          </h2>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-start justify-center min-h-[420px]">
            <ActionSearchBar actions={demoActions} defaultOpen />
          </div>
        </section>
      </div>

      {/* Props reference */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Props
          </h2>
          <div className="rounded-xl border border-white/[0.06] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                  <th className="text-left px-6 py-3 text-neutral-400 font-medium">
                    Prop
                  </th>
                  <th className="text-left px-6 py-3 text-neutral-400 font-medium">
                    Type
                  </th>
                  <th className="text-left px-6 py-3 text-neutral-400 font-medium">
                    Default
                  </th>
                </tr>
              </thead>
              <tbody className="text-neutral-300">
                <tr className="border-b border-white/[0.04]">
                  <td className="px-6 py-3 font-mono text-xs text-white">
                    actions
                  </td>
                  <td className="px-6 py-3 font-mono text-xs text-neutral-500">
                    {"Action[]"}
                  </td>
                  <td className="px-6 py-3 text-neutral-500">
                    5 sample actions (Book tickets, Summarize, etc.)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-mono text-xs text-white">
                    defaultOpen
                  </td>
                  <td className="px-6 py-3 font-mono text-xs text-neutral-500">
                    boolean
                  </td>
                  <td className="px-6 py-3 text-neutral-500">false</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Action interface */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Action Interface
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <pre className="text-sm text-neutral-300 font-mono leading-relaxed overflow-x-auto">
{`interface Action {
  id: string;          // Unique identifier
  label: string;       // Display text
  icon: ReactNode;     // Lucide icon or any JSX
  description?: string; // Subtitle text (e.g. "gpt-5")
  short?: string;      // Keyboard shortcut label
  end?: string;        // Right-aligned tag (e.g. "Agent")
}`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
