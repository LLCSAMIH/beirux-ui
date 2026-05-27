import { cn } from "@/lib/utils"

const shapeSvgClass = "w-full fill-background text-foreground"

const flipClasses = {
  none: "",
  /** Center origin keeps flips inside the viewBox; edge origins mirror the path out of frame. */
  vertical: "origin-center -scale-y-100",
  horizontal: "origin-center -scale-x-100",
  both: "origin-center -scale-x-100 -scale-y-100",
} as const

export type BandShapeFlip = keyof typeof flipClasses

export interface BandShapeProps {
  path: string
  viewBox: string
  flip?: BandShapeFlip
  className?: string
  /** Accessible name; defaults to a generic label when omitted. */
  title?: string
}

/**
 * Generic section ornament: pass a closed clockwise `path` plus `viewBox`.
 * Use `flip` for mirrored top/bottom or left/right trims (mirrors around the viewBox center).
 */
export function BandShape({
  path,
  viewBox,
  flip = "none",
  className,
  title = "Decorative section shape",
}: BandShapeProps) {
  return (
    <svg
      className={cn(shapeSvgClass, flipClasses[flip], className)}
      fill="none"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path d={path} stroke="currentColor" />
    </svg>
  )
}

/** Band: flat top with a single downward angle on the right. Flip vertical for a bottom trim. */
export function FlatSingleAngleBandSvg({ className }: { className?: string }) {
  return (
    <svg
      className={cn(shapeSvgClass, className)}
      fill="none"
      viewBox="0 0 2400 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Flat top band with single right-side angle</title>
      <path
        d="M1 199V6C1 3 3 1 6 1H1792C1796 1 1800 2 1802 5L2395 193C2397 196 2398 198 2399 199H1Z"
        stroke="currentColor"
      />
    </svg>
  )
}

/** Band: symmetric shallow "V" on top; mirror vertically for an inverted profile. */
export function SymmetricVBandSvg({ className }: { className?: string }) {
  return (
    <svg
      className={cn(shapeSvgClass, className)}
      fill="none"
      viewBox="0 0 2400 300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Symmetric V-profile top band</title>
      <path
        d="M1 299H2399V15C2399 9 2394 4 2388 4L2006 246C2003 249 1998 250 1993 250H407C402 250 397 249 394 246L12 4C6 4 1 9 1 15V299Z"
        stroke="currentColor"
      />
    </svg>
  )
}

/** Band: zigzag / sawtooth profile (sharp peaks & valleys). */
export function ZigzagSawtoothBandSvg({
  className,
  teeth = 12,
}: {
  className?: string
  teeth?: number
}) {
  const period = 2400 / teeth
  const parts = [`M1 199`, `V100`]
  for (let i = 0; i < teeth - 1; i++) {
    const peakX = Math.round((i + 0.5) * period)
    const valleyX = Math.round((i + 1) * period)
    parts.push(`L${peakX} 2`, `L${valleyX} 100`)
  }
  const lastPeak = Math.round((teeth - 0.5) * period)
  parts.push(`L${lastPeak} 2`, `L2399 100`, `V199`, `H1`, "Z")

  return (
    <svg
      className={cn(shapeSvgClass, className)}
      fill="none"
      viewBox="0 0 2400 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Zigzag sawtooth section band</title>
      <path d={parts.join("")} stroke="currentColor" />
    </svg>
  )
}

/** Band: right-pointing arrow / chevron (flat top & bottom, tip at right center). */
export function ArrowChevronBandSvg({ className }: { className?: string }) {
  return (
    <svg
      className={cn(shapeSvgClass, className)}
      fill="none"
      viewBox="0 0 2400 300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Right-pointing arrow chevron band</title>
      <path
        d="M1 298V2H2094C2098 2 2102 3 2105 6L2399 144C2399 148 2399 152 2399 156L2105 294C2102 297 2098 298 2094 298H1Z"
        stroke="currentColor"
      />
    </svg>
  )
}

/** Band: five equal steps descending along the top edge. */
export function StaircaseBandSvg({ className }: { className?: string }) {
  return (
    <svg
      className={cn(shapeSvgClass, className)}
      fill="none"
      viewBox="0 0 2400 350"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Descending staircase section band</title>
      <path
        d="M1 349V2H474C478 2 480 4 480 8V56C480 60 482 62 486 62H954C958 62 960 64 960 68V116C960 120 962 122 966 122H1434C1438 122 1440 124 1440 128V176C1440 180 1442 182 1446 182H1914C1918 182 1920 184 1920 188V236C1920 240 1922 242 1926 242H2399V349H1Z"
        stroke="currentColor"
      />
    </svg>
  )
}
