"use client";

export const dynamic = "force-dynamic";

import { BackLink } from "@/components/back-link"
import { useState } from "react"
import {
  DynamicIslandProvider,
  DynamicIsland,
  DynamicContainer,
  DynamicTitle,
  DynamicDescription,
  DynamicDiv,
  useDynamicIslandSize,
  SIZE_PRESETS,
  type SizePresets,
} from "@/components/ui/dynamic-island"
import {
  Phone,
  PhoneOff,
  Mic,
  MicOff,
  Music,
  Pause,
  SkipForward,
  Timer,
  MessageSquare,
  Bell,
  Wifi,
  ChevronRight,
} from "lucide-react"

// ---- State definitions ----

const STATES = [
  "default",
  "compact",
  "compactLong",
  "long",
  "large",
  "medium",
  "tall",
  "ultra",
] as const

type DemoState = (typeof STATES)[number]

const STATE_LABELS: Record<DemoState, string> = {
  default: "Default",
  compact: "Compact",
  compactLong: "Compact Long",
  long: "Long",
  large: "Large",
  medium: "Medium",
  tall: "Tall",
  ultra: "Ultra",
}

const STATE_DESCRIPTIONS: Record<DemoState, string> = {
  default: "Idle pill, the resting state",
  compact: "Now playing indicator",
  compactLong: "Incoming call banner",
  long: "Timer running",
  large: "Phone call active",
  medium: "Music player expanded",
  tall: "Notification detail",
  ultra: "Full widget surface",
}

// ---- Content components (rendered inside the island) ----

function DefaultContent() {
  return (
    <DynamicContainer className="flex h-full w-full items-center justify-center">
      <DynamicDiv className="relative flex h-full w-full items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
      </DynamicDiv>
    </DynamicContainer>
  )
}

function CompactContent() {
  return (
    <DynamicContainer className="flex h-full w-full items-center justify-between px-4">
      <DynamicDiv className="flex items-center gap-2">
        <Music className="h-3.5 w-3.5 text-cyan-400" />
        <span className="text-[11px] font-medium text-white/90 whitespace-nowrap">
          Cult FM
        </span>
      </DynamicDiv>
      <DynamicDiv className="flex items-center">
        <div className="flex items-end gap-[2px]">
          {[0.4, 0.7, 0.5, 0.8, 0.3].map((h, i) => (
            <div
              key={i}
              className="w-[2px] rounded-full bg-cyan-400"
              style={{
                height: `${h * 14}px`,
                animation: `barPulse 1.2s ease-in-out ${i * 0.15}s infinite alternate`,
              }}
            />
          ))}
        </div>
      </DynamicDiv>
    </DynamicContainer>
  )
}

function CompactLongContent() {
  return (
    <DynamicContainer className="flex h-full w-full items-center justify-between px-4">
      <DynamicDiv className="flex items-center gap-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500">
          <Phone className="h-3.5 w-3.5 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] font-semibold text-white leading-tight">
            Sarah Chen
          </span>
          <span className="text-[10px] text-white/50 leading-tight">
            mobile
          </span>
        </div>
      </DynamicDiv>
      <DynamicDiv className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500">
          <PhoneOff className="h-3.5 w-3.5 text-white" />
        </div>
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500">
          <Phone className="h-3.5 w-3.5 text-white" />
        </div>
      </DynamicDiv>
    </DynamicContainer>
  )
}

function LongContent() {
  return (
    <DynamicContainer className="flex h-full w-full items-center justify-between px-5">
      <DynamicDiv className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20">
          <Timer className="h-4 w-4 text-orange-400" />
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] font-medium text-white/60 leading-tight">
            Timer
          </span>
          <span className="text-sm font-semibold text-orange-400 tabular-nums leading-tight">
            04:32
          </span>
        </div>
      </DynamicDiv>
      <DynamicDiv className="flex items-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20">
          <Pause className="h-4 w-4 text-orange-400" />
        </div>
      </DynamicDiv>
    </DynamicContainer>
  )
}

function LargeContent() {
  return (
    <DynamicContainer className="flex h-full w-full items-center justify-between px-5">
      <DynamicDiv className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
          <Phone className="h-5 w-5 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-white leading-tight">
            Sarah Chen
          </span>
          <span className="text-[11px] text-green-400 tabular-nums leading-tight">
            12:34
          </span>
        </div>
      </DynamicDiv>
      <DynamicDiv className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
          <MicOff className="h-4 w-4 text-white/70" />
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500">
          <PhoneOff className="h-5 w-5 text-white" />
        </div>
      </DynamicDiv>
    </DynamicContainer>
  )
}

function MediumContent() {
  return (
    <DynamicContainer className="flex h-full w-full flex-col justify-between p-5">
      <DynamicDiv className="flex items-start gap-3">
        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center shrink-0">
          <Music className="h-6 w-6 text-white" />
        </div>
        <div className="flex flex-col gap-0.5 min-w-0">
          <DynamicTitle className="text-sm font-semibold text-white truncate">
            Midnight City
          </DynamicTitle>
          <DynamicDescription className="text-xs text-white/50 truncate">
            M83
          </DynamicDescription>
        </div>
      </DynamicDiv>

      <DynamicDiv className="flex flex-col gap-3 mt-2">
        {/* Progress bar */}
        <div className="flex flex-col gap-1.5">
          <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-white/80"
              style={{ width: "62%" }}
            />
          </div>
          <div className="flex justify-between">
            <span className="text-[10px] text-white/40 tabular-nums">
              2:34
            </span>
            <span className="text-[10px] text-white/40 tabular-nums">
              4:07
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button className="text-white/60 hover:text-white transition-colors">
            <SkipForward className="h-4 w-4 rotate-180" />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
            <Pause className="h-4 w-4" />
          </button>
          <button className="text-white/60 hover:text-white transition-colors">
            <SkipForward className="h-4 w-4" />
          </button>
        </div>
      </DynamicDiv>
    </DynamicContainer>
  )
}

function TallContent() {
  return (
    <DynamicContainer className="flex h-full w-full flex-col p-5">
      <DynamicDiv className="flex items-start gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 shrink-0">
          <MessageSquare className="h-5 w-5 text-white" />
        </div>
        <div className="flex flex-col gap-0.5 min-w-0">
          <DynamicTitle className="text-sm font-semibold text-white">
            New Message
          </DynamicTitle>
          <DynamicDescription className="text-xs text-white/40">
            Design Team
          </DynamicDescription>
        </div>
      </DynamicDiv>

      <DynamicDiv className="flex flex-col gap-3">
        <div className="rounded-xl bg-white/5 p-3">
          <p className="text-xs text-white/70 leading-relaxed">
            Hey! The new dynamic island components are looking great. Can you
            review the animation timing before we ship?
          </p>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 rounded-xl bg-white/10 py-2.5 text-xs font-medium text-white/70 hover:bg-white/15 transition-colors">
            Dismiss
          </button>
          <button className="flex-1 rounded-xl bg-blue-500 py-2.5 text-xs font-medium text-white hover:bg-blue-400 transition-colors">
            Reply
          </button>
        </div>
      </DynamicDiv>
    </DynamicContainer>
  )
}

function UltraContent() {
  return (
    <DynamicContainer className="flex h-full w-full flex-col p-6">
      <DynamicDiv className="flex items-center justify-between mb-5">
        <DynamicTitle className="text-lg font-semibold text-white">
          Activity
        </DynamicTitle>
        <span className="text-xs text-white/40">Just now</span>
      </DynamicDiv>

      <DynamicDiv className="flex flex-col gap-3 flex-1">
        {/* Notification items */}
        {[
          {
            icon: Bell,
            color: "text-yellow-400",
            bg: "bg-yellow-500/15",
            title: "Reminder",
            desc: "Team standup in 15 minutes",
            time: "2m ago",
          },
          {
            icon: MessageSquare,
            color: "text-blue-400",
            bg: "bg-blue-500/15",
            title: "Sarah Chen",
            desc: "Sent you a design review",
            time: "5m ago",
          },
          {
            icon: Wifi,
            color: "text-green-400",
            bg: "bg-green-500/15",
            title: "Connected",
            desc: 'Joined "BEIRUX Office" network',
            time: "12m ago",
          },
          {
            icon: Music,
            color: "text-purple-400",
            bg: "bg-purple-500/15",
            title: "Now Playing",
            desc: "Midnight City by M83",
            time: "18m ago",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl bg-white/[0.03] p-3 hover:bg-white/[0.06] transition-colors"
          >
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full ${item.bg} shrink-0`}
            >
              <item.icon className={`h-4 w-4 ${item.color}`} />
            </div>
            <div className="flex flex-col gap-0.5 min-w-0 flex-1">
              <span className="text-xs font-medium text-white truncate">
                {item.title}
              </span>
              <span className="text-[11px] text-white/40 truncate">
                {item.desc}
              </span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <span className="text-[10px] text-white/30">{item.time}</span>
              <ChevronRight className="h-3 w-3 text-white/20" />
            </div>
          </div>
        ))}
      </DynamicDiv>
    </DynamicContainer>
  )
}

// ---- Content router ----

function IslandContent({ activeState }: { activeState: DemoState }) {
  switch (activeState) {
    case "default":
      return <DefaultContent key="default" />
    case "compact":
      return <CompactContent key="compact" />
    case "compactLong":
      return <CompactLongContent key="compactLong" />
    case "long":
      return <LongContent key="long" />
    case "large":
      return <LargeContent key="large" />
    case "medium":
      return <MediumContent key="medium" />
    case "tall":
      return <TallContent key="tall" />
    case "ultra":
      return <UltraContent key="ultra" />
  }
}

// ---- Island wrapper (uses the hook) ----

function IslandDemo() {
  const { setSize } = useDynamicIslandSize()
  const [activeState, setActiveState] = useState<DemoState>("default")

  const cycleState = () => {
    const currentIndex = STATES.indexOf(activeState)
    const nextIndex = (currentIndex + 1) % STATES.length
    const next = STATES[nextIndex]
    setActiveState(next)
    setSize(next as SizePresets)
  }

  const goToState = (state: DemoState) => {
    setActiveState(state)
    setSize(state as SizePresets)
  }

  return (
    <div className="flex flex-col items-center gap-16">
      {/* Island area */}
      <div className="h-[500px] w-full flex items-start justify-center pt-8">
        <DynamicIsland id="dynamic-island-demo">
          <IslandContent activeState={activeState} />
        </DynamicIsland>
      </div>

      {/* Controls */}
      <div className="w-full max-w-xl space-y-6">
        {/* Cycle button */}
        <div className="flex justify-center">
          <button
            onClick={cycleState}
            className="rounded-full bg-white/10 px-6 py-2.5 text-sm font-medium text-white hover:bg-white/15 active:scale-95 transition-all"
          >
            Cycle State
          </button>
        </div>

        {/* State grid */}
        <div className="grid grid-cols-4 gap-2">
          {STATES.map((state) => (
            <button
              key={state}
              onClick={() => goToState(state)}
              className={`
                flex flex-col items-center gap-1 rounded-xl px-3 py-3 text-center transition-all
                ${
                  activeState === state
                    ? "bg-white/10 ring-1 ring-white/20"
                    : "bg-white/[0.03] hover:bg-white/[0.06]"
                }
              `}
            >
              <span
                className={`text-xs font-medium ${activeState === state ? "text-white" : "text-white/60"}`}
              >
                {STATE_LABELS[state]}
              </span>
              <span className="text-[10px] text-white/30 leading-tight">
                {STATE_DESCRIPTIONS[state]}
              </span>
            </button>
          ))}
        </div>

        {/* Active state indicator */}
        <div className="text-center">
          <span className="text-xs text-white/30">
            Active: <span className="text-white/60 font-medium">{STATE_LABELS[activeState]}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

// ---- Page ----

export default function DynamicIslandPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Dynamic Island
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Composable, animated primitives for building adaptive notification,
            status, and action surfaces. Click a state or cycle through them.
          </p>
        </div>

        <DynamicIslandProvider initialSize="default">
          <IslandDemo />
        </DynamicIslandProvider>
      </div>

      {/* Keyframe for audio bars animation */}
      <style>{`
        @keyframes barPulse {
          0% { transform: scaleY(0.4); }
          100% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  )
}
