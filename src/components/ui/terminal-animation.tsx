"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { Slot } from "@radix-ui/react-slot"
import { useControllableState } from "@radix-ui/react-use-controllable-state"

import { cn } from "@/lib/utils"

export interface TerminalLine {
  text: string
  color?: string
  delay?: number
}

export interface TabContent {
  label: string
  command: string
  lines: TerminalLine[]
}

export type TerminalAnimationRootProps = React.ComponentProps<"div"> & {
  tabs: TabContent[]
  defaultActiveTab?: number
  activeTab?: number
  onActiveTabChange?: (index: number) => void
  backgroundImage?: string
  alwaysDark?: boolean
  hideCursorOnComplete?: boolean
}

interface TerminalAnimationContextValue {
  activeTab: number
  setActiveTab: (index: number) => void
  commandTyped: string
  isTypingCommand: boolean
  showCursor: boolean
  visibleLines: number
  currentTab: TabContent
  tabs: TabContent[]
}

const TerminalAnimationContext = createContext<TerminalAnimationContextValue | undefined>(undefined)

function useTerminalAnimationContext() {
  const ctx = useContext(TerminalAnimationContext)
  if (!ctx) throw new Error("TerminalAnimation components must be used within TerminalAnimationRoot")
  return ctx
}

export const defaultTerminalTabs: TabContent[] = [
  {
    label: "dev",
    command: "vite dev",
    lines: [
      { text: "", delay: 80 },
      { text: "  VITE v6.3.0  ready in 124 ms", color: "text-[#b39aff]", delay: 400 },
      { text: "", delay: 80 },
      { text: "  >  Local:   http://localhost:5173/", color: "text-[#32f3e9]", delay: 200 },
      { text: "  >  Network: http://192.168.1.42:5173/", color: "text-neutral-500", delay: 100 },
    ],
  },
  {
    label: "build",
    command: "vite build",
    lines: [
      { text: "", delay: 80 },
      { text: "  vite v6.3.0 building for production...", color: "text-[#b39aff]", delay: 400 },
      { text: "", delay: 80 },
      { text: "  ✓ 42 modules transformed.", color: "text-[#22ff73]", delay: 300 },
      { text: "  ✓ built in 218ms", color: "text-[#22ff73]", delay: 300 },
    ],
  },
  {
    label: "test",
    command: "vite test",
    lines: [
      { text: "", delay: 80 },
      { text: "  RUN  v6.3.0", color: "text-[#b39aff]", delay: 300 },
      { text: "    ✓ formats currency correctly", color: "text-[#22ff73]", delay: 150 },
      { text: "    ✓ parses date strings", color: "text-[#22ff73]", delay: 100 },
      { text: "  Tests  2 passed (2)", color: "text-[#22ff73]", delay: 200 },
    ],
  },
]

export function TerminalAnimationRoot({
  tabs,
  defaultActiveTab = 0,
  activeTab: activeTabProp,
  onActiveTabChange,
  backgroundImage,
  alwaysDark = false,
  hideCursorOnComplete = true,
  className,
  children,
  ...props
}: TerminalAnimationRootProps) {
  const [activeTab, setActiveTab] = useControllableState({
    prop: activeTabProp,
    defaultProp: defaultActiveTab,
    onChange: onActiveTabChange,
  })

  const [visibleLines, setVisibleLines] = useState(0)
  const [commandTyped, setCommandTyped] = useState("")
  const [isTypingCommand, setIsTypingCommand] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearTimeouts = useCallback(() => {
    timeoutRef.current.forEach(clearTimeout)
    timeoutRef.current = []
  }, [])

  const animateTab = useCallback(
    (tabIndex: number) => {
      clearTimeouts()
      setVisibleLines(0)
      setCommandTyped("")
      setIsTypingCommand(true)
      setShowCursor(true)

      const tab = tabs[tabIndex]
      if (!tab) return

      const command = tab.command
      let charIndex = 0

      const typeCommand = () => {
        if (charIndex <= command.length) {
          setCommandTyped(command.slice(0, charIndex))
          charIndex++
          const t = setTimeout(typeCommand, 25 + Math.random() * 35)
          timeoutRef.current.push(t)
        } else {
          const t = setTimeout(() => {
            setIsTypingCommand(false)
            showLines(0)
          }, 250)
          timeoutRef.current.push(t)
        }
      }

      const showLines = (lineIndex: number) => {
        if (lineIndex <= tab.lines.length) {
          setVisibleLines(lineIndex)
          if (lineIndex < tab.lines.length) {
            const delay = tab.lines[lineIndex].delay ?? 100
            const t = setTimeout(() => showLines(lineIndex + 1), delay)
            timeoutRef.current.push(t)
          } else if (hideCursorOnComplete) {
            const t = setTimeout(() => setShowCursor(false), 600)
            timeoutRef.current.push(t)
          }
        }
      }

      const t = setTimeout(typeCommand, 300)
      timeoutRef.current.push(t)
    },
    [clearTimeouts, hideCursorOnComplete, tabs]
  )

  useEffect(() => {
    animateTab(activeTab)
    return clearTimeouts
  }, [activeTab, animateTab, clearTimeouts])

  const currentTab = tabs[activeTab] ?? tabs[0]

  const value: TerminalAnimationContextValue = {
    activeTab,
    setActiveTab,
    commandTyped,
    isTypingCommand,
    showCursor,
    visibleLines,
    currentTab,
    tabs,
  }

  return (
    <TerminalAnimationContext.Provider value={value}>
      <div className={cn(alwaysDark && "dark", className)} data-slot="terminal-animation-root" {...props}>
        {backgroundImage && (
          <div aria-hidden className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }} />
        )}
        {children}
      </div>
    </TerminalAnimationContext.Provider>
  )
}

export function TerminalAnimationWindow({
  className,
  minHeight = "28rem",
  style,
  ...props
}: React.ComponentProps<"div"> & { minHeight?: string }) {
  return (
    <div
      className={cn("relative flex flex-col overflow-hidden rounded-t-xl bg-card", className)}
      style={{ minHeight, ...style }}
      {...props}
    />
  )
}

export function TerminalAnimationContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex-1 px-6 py-6 sm:px-10 sm:py-8", className)} {...props} />
}

export function TerminalAnimationCommandBar({ className, ...props }: React.ComponentProps<"div">) {
  const { commandTyped, isTypingCommand, showCursor } = useTerminalAnimationContext()
  return (
    <div className={className} {...props}>
      {commandTyped}
      {isTypingCommand && showCursor && <span aria-hidden="true">▌</span>}
    </div>
  )
}

export function TerminalAnimationOutput({ className, ...props }: React.ComponentProps<"div">) {
  const { isTypingCommand, visibleLines, currentTab, activeTab } = useTerminalAnimationContext()
  if (isTypingCommand) return null
  return (
    <div aria-live="polite" className={className} role="log" {...props}>
      {currentTab.lines.map((line, i) => {
        if (i >= visibleLines) return null
        return (
          <div key={`${activeTab}-${i}`}>
            <span className={line.color}>{line.text || " "}</span>
          </div>
        )
      })}
    </div>
  )
}

export function TerminalAnimationTabList({ className, ...props }: React.ComponentProps<"div">) {
  return <div aria-label="Terminal commands" className={className} role="tablist" {...props} />
}

export function TerminalAnimationTabTrigger({
  index,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"button"> & { index: number }) {
  const { activeTab, setActiveTab } = useTerminalAnimationContext()
  const isActive = activeTab === index
  return (
    <button
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? "active" : "inactive"}
      onClick={() => setActiveTab(index)}
      type="button"
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}

export function useTerminalAnimation() {
  return useTerminalAnimationContext()
}
