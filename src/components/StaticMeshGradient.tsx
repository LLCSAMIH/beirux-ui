'use client';

import {
  StaticMeshGradient as PaperStaticMeshGradient,
  type StaticMeshGradientProps,
} from '@paper-design/shaders-react';

/**
 * BEIRUX wrapper around Paper Shaders StaticMeshGradient.
 * Frozen (non-animated) mesh blend, cheap to render. Full-bleed background by default.
 */
export default function StaticMeshGradient({
  colors = ['#0a0a0a', '#00373f', '#00e5ff', '#0a0a0a'],
  positions = 7,
  waveX = 0.5,
  waveY = 0.5,
  mixing = 0.7,
  grainOverlay = 0,
  speed = 0,
  style,
  className,
  ...rest
}: StaticMeshGradientProps) {
  return (
    <PaperStaticMeshGradient
      colors={colors}
      positions={positions}
      waveX={waveX}
      waveY={waveY}
      mixing={mixing}
      grainOverlay={grainOverlay}
      speed={speed}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
      {...rest}
    />
  );
}
