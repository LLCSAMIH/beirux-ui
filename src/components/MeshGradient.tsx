'use client';

import { MeshGradient as PaperMeshGradient, type MeshGradientProps } from '@paper-design/shaders-react';

/**
 * BEIRUX wrapper around Paper Shaders MeshGradient.
 * Animated multi-color mesh blend. Full-bleed background by default.
 */
export default function MeshGradient({
  colors = ['#0a0a0a', '#00373f', '#00e5ff', '#0a0a0a'],
  distortion = 0.8,
  swirl = 0.6,
  speed = 0.3,
  grainOverlay = 0,
  style,
  className,
  ...rest
}: MeshGradientProps) {
  return (
    <PaperMeshGradient
      colors={colors}
      distortion={distortion}
      swirl={swirl}
      speed={speed}
      grainOverlay={grainOverlay}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
      {...rest}
    />
  );
}
