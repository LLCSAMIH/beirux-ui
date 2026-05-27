"use client";

import {
  Dock,
  DockCard,
  DockCardInner,
  DockDivider,
} from "@/components/ui/dock";
import { BackLink } from "@/components/back-link";
import {
  Home,
  MessageSquare,
  Music,
  Settings,
  Camera,
  Mail,
  Calendar,
  Globe,
} from "lucide-react";

const macApps = [
  {
    name: "Finder",
    icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvXz0Ybyb6boa2SmXDY4xv/a3ef06e7a5ed68a974c2f54222ac3cfb_finder.png",
  },
  {
    name: "Safari",
    icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvXz0Ybyb6boa2SmXDY4xv/d8891e843ed4e1e9e51a0c1da4bc645a_safari.png",
  },
  {
    name: "Messages",
    icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvXz0Ybyb6boa2SmXDY4xv/7c75cfa0be0acb84fbdb08e71fbe63e9_messages.png",
  },
  {
    name: "Mail",
    icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvXz0Ybyb6boa2SmXDY4xv/1eb9bf85f55c39e0bd7e2de42ceeedc2_mail.png",
  },
  {
    name: "Music",
    icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvXz0Ybyb6boa2SmXDY4xv/f9ab157b00584e9c8f93e2d1e3d32ff3_music.png",
  },
  {
    name: "Photos",
    icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvXz0Ybyb6boa2SmXDY4xv/e5abe4ad33b2e5d96a05f44c88b72921_photos.png",
  },
];

const utilityItems = [
  { name: "Home", Icon: Home },
  { name: "Messages", Icon: MessageSquare },
  { name: "Music", Icon: Music },
  { name: "Camera", Icon: Camera },
  { name: "Mail", Icon: Mail },
  { name: "Calendar", Icon: Calendar },
  { name: "Browse", Icon: Globe },
  { name: "Settings", Icon: Settings },
];

export default function DockPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Dock
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-32">
          {/* macOS-style Dock with App Icons */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              macOS-style App Dock
            </h2>
            <p className="text-sm text-neutral-400 mb-8">
              Hover over the dock to see the magnification effect. Click an icon
              to toggle its bounce animation.
            </p>
            <div className="relative h-[140px] flex items-end justify-center">
              <Dock className="left-1/2">
                {macApps.map((app, i) => (
                  <DockCard key={app.name} id={String(i)}>
                    <DockCardInner src={app.icon} id={String(i)} />
                  </DockCard>
                ))}
              </Dock>
            </div>
          </section>

          {/* Utility Dock with Lucide Icons */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Icon Dock with Divider
            </h2>
            <p className="text-sm text-neutral-400 mb-8">
              Custom content inside dock cards with a divider separator. The
              magnification scales each item based on cursor proximity.
            </p>
            <div className="relative h-[140px] flex items-end justify-center">
              <Dock className="left-1/2">
                {utilityItems.slice(0, 4).map((item, i) => (
                  <DockCard key={item.name} id={String(i + 100)}>
                    <div className="flex items-center justify-center w-full h-full">
                      <item.Icon className="w-1/2 h-1/2 text-neutral-400" />
                    </div>
                  </DockCard>
                ))}
                <DockDivider />
                {utilityItems.slice(4).map((item, i) => (
                  <DockCard key={item.name} id={String(i + 200)}>
                    <div className="flex items-center justify-center w-full h-full">
                      <item.Icon className="w-1/2 h-1/2 text-neutral-400" />
                    </div>
                  </DockCard>
                ))}
              </Dock>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
