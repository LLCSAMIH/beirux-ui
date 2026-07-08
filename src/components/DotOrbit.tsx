'use client';

import { DotOrbit as PaperDotOrbit, type DotOrbitProps } from '@paper-design/shaders-react';

/**
 * DotOrbit — animated multi-color dots, each orbiting its own cell center.
 * Paper Design WebGL shader. Tasteful dark/cyan defaults; all props passthrough.
 */
export default function DotOrbit({
  colorBack = '#05070d',
  colors = ['#22d3ee', '#0891b2', '#67e8f9'],
  size = 0.4,
  sizeRange = 0.3,
  spreading = 0.45,
  stepsPerColor = 2,
  speed = 1,
  className,
  style,
  ...rest
}: DotOrbitProps) {
  return (
    <PaperDotOrbit
      colorBack={colorBack}
      colors={colors}
      size={size}
      sizeRange={sizeRange}
      spreading={spreading}
      stepsPerColor={stepsPerColor}
      speed={speed}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
      {...rest}
    />
  );
}
