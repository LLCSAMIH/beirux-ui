"use client";

import {
  FamilyDrawerRoot,
  FamilyDrawerTrigger,
  FamilyDrawerPortal,
  FamilyDrawerOverlay,
  FamilyDrawerContent,
  FamilyDrawerAnimatedWrapper,
  FamilyDrawerAnimatedContent,
  FamilyDrawerClose,
  FamilyDrawerHeader,
  FamilyDrawerButton,
  useFamilyDrawer,
} from "@/components/ui/family-drawer";
import { BackLink } from "@/components/back-link";
import { Settings, Bell, User } from "lucide-react";

function DefaultView() {
  const { setView } = useFamilyDrawer();
  return (
    <>
      <FamilyDrawerHeader
        icon={<Settings className="h-8 w-8 text-neutral-400" />}
        title="Quick Actions"
        description="Choose an action to get started."
      />
      <div className="mt-6 space-y-2">
        <FamilyDrawerButton onClick={() => setView("notifications")}>
          <Bell className="h-5 w-5" />
          Notifications
        </FamilyDrawerButton>
        <FamilyDrawerButton onClick={() => setView("profile")}>
          <User className="h-5 w-5" />
          Profile
        </FamilyDrawerButton>
      </div>
    </>
  );
}

function NotificationsView() {
  const { setView } = useFamilyDrawer();
  return (
    <>
      <FamilyDrawerHeader
        icon={<Bell className="h-8 w-8 text-blue-400" />}
        title="Notifications"
        description="You have 3 unread notifications."
      />
      <div className="mt-6 space-y-3">
        {["New comment on your post", "Team invite from BEIRUX", "Build succeeded"].map(
          (msg) => (
            <div
              key={msg}
              className="rounded-xl bg-muted/50 p-3 text-sm text-foreground"
            >
              {msg}
            </div>
          )
        )}
      </div>
      <button
        onClick={() => setView("default")}
        className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        Back
      </button>
    </>
  );
}

function ProfileView() {
  const { setView } = useFamilyDrawer();
  return (
    <>
      <FamilyDrawerHeader
        icon={<User className="h-8 w-8 text-emerald-400" />}
        title="Profile"
        description="Manage your account settings."
      />
      <div className="mt-6 space-y-2 text-sm text-muted-foreground">
        <p>Name: Samih Mansour</p>
        <p>Role: Owner</p>
        <p>Plan: Pro</p>
      </div>
      <button
        onClick={() => setView("default")}
        className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        Back
      </button>
    </>
  );
}

export default function FamilyDrawerPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Family Drawer
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-12">
          {/* Multi-view drawer */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Multi-View Drawer
            </h2>
            <div className="flex justify-center">
              <FamilyDrawerRoot
                views={{
                  default: DefaultView,
                  notifications: NotificationsView,
                  profile: ProfileView,
                }}
              >
                <FamilyDrawerTrigger>Open Drawer</FamilyDrawerTrigger>
                <FamilyDrawerPortal>
                  <FamilyDrawerOverlay />
                  <FamilyDrawerContent>
                    <FamilyDrawerAnimatedWrapper>
                      <FamilyDrawerClose />
                      <FamilyDrawerAnimatedContent>
                        <DrawerViewRenderer />
                      </FamilyDrawerAnimatedContent>
                    </FamilyDrawerAnimatedWrapper>
                  </FamilyDrawerContent>
                </FamilyDrawerPortal>
              </FamilyDrawerRoot>
            </div>
            <p className="text-center text-sm text-neutral-500 mt-4">
              Click the button above to open the drawer, then navigate between views.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

function DrawerViewRenderer() {
  const { view, views } = useFamilyDrawer();
  if (!views) return null;
  const ViewComponent = views[view] || views.default;
  if (!ViewComponent) return null;
  return <ViewComponent />;
}
