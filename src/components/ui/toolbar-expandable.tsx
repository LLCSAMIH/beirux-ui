"use client"

import React, { useCallback, useEffect, useMemo, useRef, useState, type RefObject } from "react"
import { AnimatePresence, motion, MotionConfig } from "motion/react"

import { cn } from "@/lib/utils"

const transition = { type: "spring" as const, bounce: 0.1, duration: 0.25 }

interface DynamicStep {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }> | React.ReactElement<{ className?: string }>
  content: React.ReactNode
}

interface DynamicToolbarExpandableProps {
  steps: DynamicStep[]
  badgeText?: string
  className?: string
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  activeStep?: string | null
  onActiveStepChange?: (stepId: string | null) => void
}

function useMeasure(): [(node: HTMLElement | null) => void, { left: number; top: number; width: number; height: number }, () => void] {
  const [bounds, setBounds] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [node, setNode] = useState<HTMLElement | null>(null)
  const observer = useRef<ResizeObserver | null>(null)
  const disconnect = useCallback(() => { if (observer.current) observer.current.disconnect() }, [])
  const ref = useCallback((node: HTMLElement | null) => { setNode(node) }, [])
  useEffect(() => {
    if (!node) return
    if (observer.current) observer.current.disconnect()
    observer.current = new ResizeObserver(([entry]) => {
      if (entry?.contentRect) {
        const { left, top, width, height } = entry.contentRect
        setBounds({ left, top, width, height })
      }
    })
    observer.current.observe(node)
    return () => { if (observer.current) observer.current.disconnect() }
  }, [node])
  return [ref, bounds, disconnect]
}

function useClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T | null>, handler: (event: MouseEvent | TouchEvent) => void) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current
      if (!el || el.contains((event?.target as Node) || null)) return
      handler(event)
    }
    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)
    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}

const DynamicToolbarExpandable = React.memo<DynamicToolbarExpandableProps>(
  function DynamicToolbarExpandable({ steps, badgeText, className, expanded: controlledExpanded, onExpandedChange, activeStep: controlledActiveStep, onActiveStepChange }) {
    const [internalActive, setInternalActive] = useState<string | null>(null)
    const [internalIsOpen, setInternalIsOpen] = useState(false)
    const active = controlledActiveStep !== undefined ? controlledActiveStep : internalActive
    const isOpen = controlledExpanded !== undefined ? controlledExpanded : internalIsOpen
    const setActive = useCallback((value: string | null) => { onActiveStepChange ? onActiveStepChange(value) : setInternalActive(value) }, [onActiveStepChange])
    const setIsOpen = useCallback((value: boolean) => { onExpandedChange ? onExpandedChange(value) : setInternalIsOpen(value) }, [onExpandedChange])
    const [contentRef, contentBounds] = useMeasure()
    const ref = useRef<HTMLDivElement>(null)
    const heightContent = contentBounds.height
    const handleClickOutside = useCallback(() => { setIsOpen(false); setActive(null) }, [setIsOpen, setActive])
    useClickOutside(ref, handleClickOutside)

    const handleNavClick = useCallback((item: string) => {
      if (active === item && isOpen) { setIsOpen(false); setActive(null); return }
      setActive(item); setIsOpen(true)
    }, [active, isOpen, setActive, setIsOpen])

    const renderContent = useCallback(() => {
      if (!active) return null
      const step = steps.find((s) => s.id === active)
      if (!step) return null
      return (
        <div className="space-y-4 pb-3">
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-foreground">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
          {step.content}
        </div>
      )
    }, [active, steps])

    const activeTitle = useMemo(() => {
      if (!active) return ""
      const step = steps.find((s) => s.id === active)
      return step?.title || ""
    }, [active, steps])

    return (
      <div className={cn("space-y-2 w-full max-w-sm sm:max-w-lg mx-auto px-2 sm:px-0", className)}>
        <MotionConfig transition={transition}>
          <div className="w-full rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.08),0px_2px_2px_rgba(0,0,0,0.04),0px_8px_16px_-4px_rgba(0,0,0,0.04)] dark:shadow-[0_0_0_1px_rgba(255,252,240,0.08),0px_2px_2px_rgba(0,0,0,0.2),0px_8px_16px_-4px_rgba(0,0,0,0.3)] bg-background overflow-hidden" ref={ref}>
            <div className="rounded-2xl">
              <div className="overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  {isOpen ? (
                    <motion.div key="expanded-content" initial={{ height: 0 }} animate={{ height: heightContent || 0 }} exit={{ height: 0 }}>
                      <div ref={contentRef} className="pt-2 px-2 sm:px-2">
                        <h4 className="text-sm font-medium text-foreground px-2">{activeTitle}</h4>
                        <div className="pb-1">
                          <div className="bg-muted/50 rounded-[0.8rem] px-3 py-4 mt-3 mb-2">
                            {renderContent()}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
              <div className="relative z-10">
                <div className="flex items-center p-[1px] w-max min-w-full overflow-x-auto">
                  {steps.map((step, index) => (
                    <button
                      key={step.id}
                      onClick={() => handleNavClick(step.id)}
                      className={cn(
                        "text-sm text-muted-foreground transition-colors py-3 px-3 sm:py-4 sm:px-4 whitespace-nowrap shrink-0 flex items-center gap-2",
                        active === step.id ? "text-foreground font-medium bg-muted/50" : "hover:bg-muted/60"
                      )}
                    >
                      <div className="text-[10px] w-5 h-5 flex items-center justify-center font-bold rounded-md">
                        <span className={cn("w-full rounded-md", active === step.id ? "bg-blue-300/20 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400" : "bg-muted/50 text-muted-foreground")}>
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-foreground">{step.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MotionConfig>
      </div>
    )
  }
)

export default function ToolbarExpandable(props: DynamicToolbarExpandableProps) {
  return <DynamicToolbarExpandable {...props} />
}
