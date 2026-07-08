'use client';

import { PulsingBorder as PaperPulsingBorder, type PulsingBorderProps } from '@paper-design/shaders-react';

/**
 * PulsingBorder — luminous trails of color merging into a glowing animated contour.
 * Paper Design WebGL shader. Tasteful dark/cyan defaults; all props passthrough.
 */
export default function PulsingBorder({
  colorBack = '#00000000',
  colors = ['#22d3ee', '#0891b2', '#67e8f9', '#3b82f6'],
  roundness = 0.18,
  thickness = 0.12,
  softness = 0.5,
  intensity = 0.45,
  bloom = 0.5,
  spots = 4,
  spotSize = 0.35,
  pulse = 0.25,
  smoke = 0.4,
  smokeSize = 0.5,
  speed = 1,
  className,
  style,
  ...rest
}: PulsingBorderProps) {
  return (
    <PaperPulsingBorder
      colorBack={colorBack}
      colors={colors}
      roundness={roundness}
      thickness={thickness}
      softness={softness}
      intensity={intensity}
      bloom={bloom}
      spots={spots}
      spotSize={spotSize}
      pulse={pulse}
      smoke={smoke}
      smokeSize={smokeSize}
      speed={speed}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
      {...rest}
    />
  );
}
