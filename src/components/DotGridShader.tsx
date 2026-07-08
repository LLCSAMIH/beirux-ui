'use client';

import { DotGrid as PaperDotGrid, type DotGridProps } from '@paper-design/shaders-react';

/**
 * DotGridShader — a static patterned grid of shapes (circles, diamonds, squares,
 * triangles) with per-cell size and opacity variation. Paper Design WebGL shader.
 *
 * Named DotGridShader to avoid colliding with the existing ReactBits DotGrid
 * (canvas + GSAP cursor-reactive component). Tasteful dark/cyan defaults; all
 * props passthrough.
 */
export default function DotGridShader({
  colorBack = '#05070d',
  colorFill = '#22d3ee',
  colorStroke = '#0891b2',
  size = 2,
  gapX = 28,
  gapY = 28,
  strokeWidth = 0,
  sizeRange = 0,
  opacityRange = 0.4,
  shape = 'circle',
  className,
  style,
  ...rest
}: DotGridProps) {
  return (
    <PaperDotGrid
      colorBack={colorBack}
      colorFill={colorFill}
      colorStroke={colorStroke}
      size={size}
      gapX={gapX}
      gapY={gapY}
      strokeWidth={strokeWidth}
      sizeRange={sizeRange}
      opacityRange={opacityRange}
      shape={shape}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
      {...rest}
    />
  );
}
