'use client';

import { Warp as PaperWarp, type WarpProps } from '@paper-design/shaders-react';

/**
 * BEIRUX wrapper around Paper Shaders Warp.
 * Animated warped flow field of stripes/checks/edges. Full-bleed background by default.
 */
export default function Warp({
  colors = ['#0a0a0a', '#00373f', '#00e5ff'],
  shape = 'stripes',
  rotation = 0,
  proportion = 0.5,
  softness = 1,
  shapeScale = 0.5,
  distortion = 0.25,
  swirl = 0.8,
  swirlIterations = 10,
  speed = 0.4,
  style,
  className,
  ...rest
}: WarpProps) {
  return (
    <PaperWarp
      colors={colors}
      shape={shape}
      rotation={rotation}
      proportion={proportion}
      softness={softness}
      shapeScale={shapeScale}
      distortion={distortion}
      swirl={swirl}
      swirlIterations={swirlIterations}
      speed={speed}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
      {...rest}
    />
  );
}
