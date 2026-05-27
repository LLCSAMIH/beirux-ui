import { cn } from "@/lib/utils"

const shapeSvgClass = "w-full  text-foreground stroke-2"

const flipClasses = {
  none: "",
  vertical: "origin-center -scale-y-100",
  horizontal: "origin-center -scale-x-100",
  both: "origin-center -scale-x-100 -scale-y-100",
} as const

export type ShapeShapeFlip = keyof typeof flipClasses

export interface ShapeSvgProps {
  className?: string
  flip?: ShapeShapeFlip
}

function shapeSvgClassName(
  flip: ShapeShapeFlip | undefined,
  className: string | undefined
) {
  return cn(shapeSvgClass, flip ? flipClasses[flip] : null, className)
}

function lineArtShapeSvgClassName(
  flip: ShapeShapeFlip | undefined,
  className: string | undefined
) {
  return cn(
    "w-full fill-none stroke-2",
    flip ? flipClasses[flip] : null,
    className
  )
}

export function TriangleShapeSvg({ className, flip = "none" }: ShapeSvgProps) {
  return (
    <svg className={shapeSvgClassName(flip, className)} fill="none" viewBox="0 0 2400 1000" xmlns="http://www.w3.org/2000/svg">
      <title>Equilateral triangle shape</title>
      <path d="M1200 2L2398 998H2Z" stroke="currentColor" />
    </svg>
  )
}

export function CircleShapeSvg({ className, flip = "none" }: ShapeSvgProps) {
  return (
    <svg className={shapeSvgClassName(flip, className)} fill="none" viewBox="0 0 2400 1000" xmlns="http://www.w3.org/2000/svg">
      <title>Circular shape</title>
      <circle cx={1200} cy={500} r={498} stroke="currentColor" />
    </svg>
  )
}

export function EllipseShapeSvg({ className, flip = "none" }: ShapeSvgProps) {
  return (
    <svg className={shapeSvgClassName(flip, className)} fill="none" viewBox="0 0 2400 800" xmlns="http://www.w3.org/2000/svg">
      <title>Horizontal ellipse shape</title>
      <ellipse cx={1200} cy={400} rx={1000} ry={398} stroke="currentColor" />
    </svg>
  )
}

export function SemicircleShapeSvg({ className, flip = "none" }: ShapeSvgProps) {
  return (
    <svg className={shapeSvgClassName(flip, className)} fill="none" viewBox="0 0 2400 1000" xmlns="http://www.w3.org/2000/svg">
      <title>Semicircle D-shape with flat left edge</title>
      <path d="M1 2H1200A498 498 0 0 1 1200 998H1Z" stroke="currentColor" />
    </svg>
  )
}

export function RightTriangleShapeSvg({ className, flip = "none" }: ShapeSvgProps) {
  return (
    <svg className={shapeSvgClassName(flip, className)} fill="none" viewBox="0 0 2400 1000" xmlns="http://www.w3.org/2000/svg">
      <title>Right triangle shape</title>
      <path d="M2 2L2398 998H2Z" stroke="currentColor" />
    </svg>
  )
}

export function KiteShapeSvg({ className, flip = "none" }: ShapeSvgProps) {
  return (
    <svg className={shapeSvgClassName(flip, className)} fill="none" viewBox="0 0 2400 1000" xmlns="http://www.w3.org/2000/svg">
      <title>Kite shape</title>
      <path d="M1200 2L1700 400L1200 998L700 400Z" stroke="currentColor" />
    </svg>
  )
}

export function PennantShapeSvg({ className, flip = "none" }: ShapeSvgProps) {
  return (
    <svg className={shapeSvgClassName(flip, className)} fill="none" viewBox="0 0 2400 600" xmlns="http://www.w3.org/2000/svg">
      <title>Pennant flag shape tapering to a point</title>
      <path d="M1 1H1800L2399 300L1800 599H1Z" stroke="currentColor" />
    </svg>
  )
}

export function RoundedSquareShapeSvg({ className, flip = "none" }: ShapeSvgProps) {
  return (
    <svg className={shapeSvgClassName(flip, className)} fill="none" viewBox="0 0 2400 900" xmlns="http://www.w3.org/2000/svg">
      <title>Rounded square shape</title>
      <rect height={898} rx={80} stroke="currentColor" width={2398} x={1} y={1} />
    </svg>
  )
}

export function GothicArchPanelSvg({ className, flip = "none" }: ShapeSvgProps) {
  return (
    <svg className={shapeSvgClassName(flip, className)} fill="none" viewBox="0 0 2400 1200" xmlns="http://www.w3.org/2000/svg">
      <title>Gothic pointed arch panel</title>
      <path d="M1 1199V500 C1 200 600 2 1200 2 C1800 2 2399 200 2399 500 V1199H1Z" stroke="currentColor" />
    </svg>
  )
}

export function QuarterCircleShapeSvg({ className, flip = "none" }: ShapeSvgProps) {
  return (
    <svg className={shapeSvgClassName(flip, className)} fill="none" viewBox="0 0 2400 1000" xmlns="http://www.w3.org/2000/svg">
      <title>Quarter circle fan wedge</title>
      <path d="M2 998V2A996 996 0 0 1 998 998Z" stroke="currentColor" />
    </svg>
  )
}

export function ArrowPentagonShapeSvg({ className, flip = "none" }: ShapeSvgProps) {
  return (
    <svg className={shapeSvgClassName(flip, className)} fill="none" viewBox="0 0 2400 600" xmlns="http://www.w3.org/2000/svg">
      <title>Arrow pentagon shape</title>
      <path d="M1 1H2000L2399 300L2000 599H1Z" stroke="currentColor" />
    </svg>
  )
}

export function VesicaPiscisSvg({ className, flip = "none" }: ShapeSvgProps) {
  const cx = 1200, cy = 500, r = 300, offset = r / 2
  return (
    <svg className={lineArtShapeSvgClassName(flip, className)} fill="none" viewBox="0 0 2400 1000" xmlns="http://www.w3.org/2000/svg">
      <title>Vesica Piscis</title>
      <circle cx={cx - offset} cy={cy} r={r} stroke="currentColor" />
      <circle cx={cx + offset} cy={cy} r={r} stroke="currentColor" />
    </svg>
  )
}

export function SeedOfLifeSvg({ className, flip = "none" }: ShapeSvgProps) {
  const cx = 1200, cy = 500, r = 200
  const petals = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * 60 * Math.PI) / 180
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) }
  })
  return (
    <svg className={lineArtShapeSvgClassName(flip, className)} fill="none" viewBox="0 0 2400 1000" xmlns="http://www.w3.org/2000/svg">
      <title>Seed of Life</title>
      <circle cx={cx} cy={cy} r={r} stroke="currentColor" />
      {petals.map((p) => (
        <circle cx={p.x} cy={p.y} key={`seed-${p.x}-${p.y}`} r={r} stroke="currentColor" />
      ))}
    </svg>
  )
}
