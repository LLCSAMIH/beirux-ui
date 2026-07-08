'use client';

import { GodRays as PaperGodRays, type GodRaysProps } from '@paper-design/shaders-react';

/**
 * GodRays — animated rays of light radiating from a central glow.
 * Paper Design WebGL shader. Tasteful dark/cyan defaults; all props passthrough.
 */
export default function GodRays({
  colorBack = '#05070d',
  colorBloom = '#0a1622',
  colors = ['#22d3ee', '#0891b2', '#67e8f9'],
  bloom = 0.4,
  intensity = 0.55,
  density = 0.55,
  spotty = 0.25,
  midSize = 0.6,
  midIntensity = 0.35,
  speed = 0.8,
  className,
  style,
  ...rest
}: GodRaysProps) {
  return (
    <PaperGodRays
      colorBack={colorBack}
      colorBloom={colorBloom}
      colors={colors}
      bloom={bloom}
      intensity={intensity}
      density={density}
      spotty={spotty}
      midSize={midSize}
      midIntensity={midIntensity}
      speed={speed}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
      {...rest}
    />
  );
}
