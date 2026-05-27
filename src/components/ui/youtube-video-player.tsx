"use client"

import { useEffect, useState } from "react"
import { Maximize2, Minimize2, Play } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface YouTubePlayerProps {
  videoId: string
  title?: string
  defaultExpanded?: boolean
  customThumbnail?: string
  className?: string
}

export function YouTubePlayer({
  videoId,
  title,
  defaultExpanded = false,
  customThumbnail,
  className,
}: YouTubePlayerProps) {
  const [expanded, setExpanded] = useState(defaultExpanded)
  const [playing, setPlaying] = useState(false)

  const extractVideoId = (id: string) => {
    if (id.includes("youtube.com") || id.includes("youtu.be")) {
      try {
        const url = new URL(id)
        if (id.includes("youtube.com")) return url.searchParams.get("v") || ""
        return url.pathname.substring(1)
      } catch { return id }
    }
    return id
  }

  const actualVideoId = extractVideoId(videoId)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && expanded) setExpanded(false)
    }
    if (expanded) document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [expanded])

  const getThumbnailUrl = () => {
    if (customThumbnail) return customThumbnail
    return actualVideoId ? `https://i.ytimg.com/vi/${actualVideoId}/hqdefault.jpg` : ""
  }

  return (
    <>
      <div className={cn("relative", expanded ? "invisible" : "visible", className)}>
        <motion.div layoutId={`youtube-player-${videoId}`} className="overflow-hidden border bg-card text-card-foreground shadow-lg rounded-xl">
          <motion.div layoutId={`youtube-player-content-${videoId}`} className="relative aspect-video bg-muted">
            {!playing && (
              <>
                <motion.div layoutId={`youtube-player-thumbnail-container-${videoId}`} className="absolute inset-0 bg-gradient-to-br from-muted to-muted/80">
                  {getThumbnailUrl() && (
                    <motion.img layoutId={`youtube-player-thumbnail-${videoId}`} src={getThumbnailUrl()} alt={title || "Video thumbnail"} className="absolute inset-0 h-full w-full object-cover opacity-70" />
                  )}
                </motion.div>
                <motion.div layoutId={`youtube-player-content-overlay-${videoId}`} className="absolute inset-0 flex flex-col items-center justify-center z-10">
                  <Button size="lg" variant="secondary" className="relative h-16 w-16 rounded-full border border-border/20 bg-background/80 backdrop-blur-sm md:h-20 md:w-20 p-0" onClick={() => setPlaying(true)} aria-label="Play video">
                    <Play className="h-6 w-6 translate-x-[2px] fill-primary text-primary md:h-8 md:w-8" />
                  </Button>
                  {title && (
                    <motion.h3 layoutId={`youtube-player-title-${videoId}`} className="mt-4 max-w-xs text-center text-sm font-medium text-secondary/90 md:max-w-md md:text-base">{title}</motion.h3>
                  )}
                </motion.div>
              </>
            )}
            {playing && (
              <iframe src={`https://www.youtube.com/embed/${actualVideoId}?autoplay=1&rel=0`} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="h-full w-full border-0" />
            )}
            <AnimatePresence>
              {(!playing || expanded) && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute right-2 top-2 z-20">
                  <Button variant="secondary" size="icon" onClick={() => setExpanded(!expanded)} className="h-8 w-8 rounded-full bg-background/40 backdrop-blur-sm hover:bg-background/60" aria-label={expanded ? "Minimize video" : "Maximize video"}>
                    {expanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {expanded && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm" onClick={() => setExpanded(false)} />
            <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
              <motion.div layoutId={`youtube-player-${videoId}`} className="overflow-hidden border bg-card shadow-xl rounded-lg pointer-events-auto w-[90vw] max-w-[1200px] max-h-[90vh] aspect-video">
                <motion.div layoutId={`youtube-player-content-${videoId}`} className="relative aspect-video bg-muted">
                  {!playing && (
                    <>
                      <motion.div layoutId={`youtube-player-thumbnail-container-${videoId}`} className="absolute inset-0 bg-gradient-to-br from-muted to-muted/80">
                        {getThumbnailUrl() && <motion.img layoutId={`youtube-player-thumbnail-${videoId}`} src={getThumbnailUrl()} alt={title || ""} className="absolute inset-0 h-full w-full object-cover opacity-70" />}
                      </motion.div>
                      <motion.div layoutId={`youtube-player-content-overlay-${videoId}`} className="absolute inset-0 flex flex-col items-center justify-center z-10">
                        <Button size="lg" variant="secondary" className="relative h-16 w-16 rounded-full border border-border/20 bg-background/80 backdrop-blur-sm md:h-20 md:w-20 p-0" onClick={() => setPlaying(true)} aria-label="Play video">
                          <Play className="h-6 w-6 translate-x-[2px] fill-primary text-primary md:h-8 md:w-8" />
                        </Button>
                      </motion.div>
                    </>
                  )}
                  {playing && (
                    <iframe src={`https://www.youtube.com/embed/${actualVideoId}?autoplay=1&rel=0`} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="h-full w-full border-0" />
                  )}
                  <motion.div className="absolute right-2 top-2 z-20">
                    <Button variant="secondary" size="icon" onClick={() => setExpanded(false)} className="h-8 w-8 rounded-full bg-background/40 backdrop-blur-sm hover:bg-background/60" aria-label="Minimize video">
                      <Minimize2 className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
