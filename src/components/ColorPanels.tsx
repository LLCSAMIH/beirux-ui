'use client';

import { ColorPanels as PaperColorPanels, type ColorPanelsProps } from '@paper-design/shaders-react';

/**
 * BEIRUX wrapper around Paper Shaders ColorPanels.
 * Animated translucent glass panels sliding through space. Full-bleed background by default.
 */
export default function ColorPanels({
  colors = ['#00e5ff', '#00373f', '#0a3a44', '#0a0a0a'],
  colorBack = '#0a0a0a',
  angle1 = 0,
  angle2 = 0.5,
  length = 1.2,
  edges = false,
  blur = 0.1,
  fadeIn = 0.2,
  fadeOut = 0.8,
  density = 0.7,
  gradient = 0.4,
  speed = 0.4,
  style,
  className,
  ...rest
}: ColorPanelsProps) {
  return (
    <PaperColorPanels
      colors={colors}
      colorBack={colorBack}
      angle1={angle1}
      angle2={angle2}
      length={length}
      edges={edges}
      blur={blur}
      fadeIn={fadeIn}
      fadeOut={fadeOut}
      density={density}
      gradient={gradient}
      speed={speed}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
      {...rest}
    />
  );
}
