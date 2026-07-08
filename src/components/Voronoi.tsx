'use client';

import { Voronoi as PaperVoronoi, type VoronoiProps } from '@paper-design/shaders-react';

/**
 * BEIRUX wrapper around Paper Shaders Voronoi.
 * Animated cellular mosaic with glowing seams. Full-bleed background by default.
 */
export default function Voronoi({
  colors = ['#0a0a0a', '#00373f', '#00e5ff', '#0a3a44'],
  colorGap = '#0a0a0a',
  colorGlow = '#00e5ff',
  stepsPerColor = 1,
  distortion = 0.35,
  gap = 0.05,
  glow = 0.4,
  speed = 0.3,
  style,
  className,
  ...rest
}: VoronoiProps) {
  return (
    <PaperVoronoi
      colors={colors}
      colorGap={colorGap}
      colorGlow={colorGlow}
      stepsPerColor={stepsPerColor}
      distortion={distortion}
      gap={gap}
      glow={glow}
      speed={speed}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
      {...rest}
    />
  );
}
