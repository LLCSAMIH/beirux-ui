'use client';

import { SimplexNoise as PaperSimplexNoise } from '@paper-design/shaders-react';
import type { CSSProperties } from 'react';

interface SimplexNoiseProps {
  colors?: string[];
  stepsPerColor?: number;
  softness?: number;
  scale?: number;
  rotation?: number;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}

export default function SimplexNoise({
  colors = ['#05080d', '#0e7490', '#22d3ee', '#67e8f9'],
  stepsPerColor = 2,
  softness = 0.8,
  scale = 1,
  rotation = 0,
  speed = 0.6,
  className,
  style,
}: SimplexNoiseProps) {
  return (
    <PaperSimplexNoise
      colors={colors}
      stepsPerColor={stepsPerColor}
      softness={softness}
      scale={scale}
      rotation={rotation}
      speed={speed}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
    />
  );
}
