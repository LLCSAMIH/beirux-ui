'use client';

import {
  StaticRadialGradient as PaperStaticRadialGradient,
  type StaticRadialGradientProps,
} from '@paper-design/shaders-react';

/**
 * BEIRUX wrapper around Paper Shaders StaticRadialGradient.
 * Frozen radial spotlight / vignette. Full-bleed background by default.
 */
export default function StaticRadialGradient({
  colorBack = '#0a0a0a',
  colors = ['#00e5ff', '#00373f', '#0a0a0a'],
  radius = 0.7,
  focalDistance = 0,
  falloff = 0.3,
  mixing = 0.8,
  distortion = 0,
  speed = 0,
  style,
  className,
  ...rest
}: StaticRadialGradientProps) {
  return (
    <PaperStaticRadialGradient
      colorBack={colorBack}
      colors={colors}
      radius={radius}
      focalDistance={focalDistance}
      falloff={falloff}
      mixing={mixing}
      distortion={distortion}
      speed={speed}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
      {...rest}
    />
  );
}
