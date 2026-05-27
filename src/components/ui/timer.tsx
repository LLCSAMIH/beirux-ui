"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Clock } from "lucide-react"

import { cn } from "@/lib/utils"

const timerVariants = cva(
  "inline-flex items-center gap-2 font-medium rounded-full transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border border-border shadow-sm",
        outline: "border border-input bg-background text-foreground",
        ghost: "bg-transparent text-foreground",
        destructive: "bg-destructive/10 text-destructive border border-destructive/20",
      },
      size: {
        sm: "text-xs px-2 py-1 h-6 gap-1.5",
        md: "text-sm px-2.5 py-1.5 h-7 gap-2",
        lg: "text-base px-3 py-2 h-8 gap-2.5",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  }
)

export type TimerProps = {
  loading?: boolean
  format?: "SS.MS" | "MM:SS" | "HH:MM:SS"
} & VariantProps<typeof timerVariants> &
  React.HTMLAttributes<HTMLDivElement>

export type UseTimerOptions = {
  loading?: boolean
  onTick?: (seconds: number, milliseconds: number) => void
  resetOnLoadingChange?: boolean
  format?: "SS.MS" | "MM:SS" | "HH:MM:SS"
}

export function useTimer({
  loading = false,
  onTick,
  resetOnLoadingChange = true,
  format = "SS.MS",
}: UseTimerOptions = {}) {
  const [elapsedTime, setElapsedTime] = useState(0)
  const [milliseconds, setMilliseconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const startTimeRef = useRef<number>(0)
  const rafRef = useRef<number | null>(null)

  const reset = useCallback(() => {
    setElapsedTime(0)
    setMilliseconds(0)
    startTimeRef.current = 0
  }, [])

  const start = useCallback(() => {
    setIsRunning(true)
    startTimeRef.current = performance.now()
  }, [])

  const stop = useCallback(() => {
    setIsRunning(false)
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
  }, [])

  useEffect(() => {
    if (!isRunning) return
    const updateTimer = () => {
      const elapsed = performance.now() - startTimeRef.current
      setElapsedTime(Math.floor(elapsed / 1000))
      setMilliseconds(Math.floor(elapsed % 1000))
      rafRef.current = requestAnimationFrame(updateTimer)
    }
    rafRef.current = requestAnimationFrame(updateTimer)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [isRunning])

  useEffect(() => {
    if (loading) {
      if (resetOnLoadingChange) reset()
      start()
    } else {
      stop()
    }
  }, [loading, resetOnLoadingChange, reset, start, stop])

  useEffect(() => {
    if (onTick) onTick(elapsedTime, milliseconds)
  }, [elapsedTime, milliseconds, onTick])

  const formatTime = useCallback(
    (totalSeconds: number, ms: number) => {
      const seconds = totalSeconds % 60
      switch (format) {
        case "HH:MM:SS": {
          const hours = Math.floor(totalSeconds / 3600)
          const minutes = Math.floor((totalSeconds % 3600) / 60)
          return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        }
        case "MM:SS": {
          const totalMinutes = Math.floor(totalSeconds / 60)
          const remainingSeconds = totalSeconds % 60
          return `${totalMinutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
        }
        default:
          return `${totalSeconds.toString().padStart(2, "0")}.${Math.floor(ms / 10).toString().padStart(2, "0")}`
      }
    },
    [format]
  )

  return {
    elapsedTime,
    milliseconds,
    formattedTime: formatTime(elapsedTime, milliseconds),
    isRunning,
    reset,
    start,
    stop,
  }
}

export const Timer = React.forwardRef<HTMLDivElement, TimerProps>(
  ({ loading = false, format = "SS.MS", variant, size, className, ...props }, ref) => {
    const { formattedTime } = useTimer({ loading, format })
    return (
      <div ref={ref} className={cn(timerVariants({ variant, size }), className)} role="timer" aria-live="polite" {...props}>
        <Clock className={cn("transition-transform", size === "sm" ? "w-3 h-3" : size === "lg" ? "w-4 h-4" : "w-3.5 h-3.5", loading && "animate-spin")} />
        <span className="font-mono tabular-nums tracking-tight">{formattedTime}</span>
      </div>
    )
  }
)
Timer.displayName = "Timer"
