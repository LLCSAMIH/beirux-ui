'use client';

import { Heatmap as PaperHeatmap, type HeatmapProps } from '@paper-design/shaders-react';

/**
 * Heatmap — a glowing gradient of colors flowing through an input image/shape.
 * Paper Design WebGL shader. Requires an `image` source (logo, silhouette, mask).
 * Tasteful dark/cyan thermal defaults; all props passthrough.
 */
export default function Heatmap({
  colorBack = '#05070d',
  colors = ['#0e7490', '#22d3ee', '#67e8f9', '#a5f3fc'],
  contour = 0.5,
  angle = 0,
  noise = 0.2,
  innerGlow = 0.4,
  outerGlow = 0.3,
  speed = 0.6,
  className,
  style,
  ...rest
}: HeatmapProps) {
  return (
    <PaperHeatmap
      colorBack={colorBack}
      colors={colors}
      contour={contour}
      angle={angle}
      noise={noise}
      innerGlow={innerGlow}
      outerGlow={outerGlow}
      speed={speed}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
      {...rest}
    />
  );
}
