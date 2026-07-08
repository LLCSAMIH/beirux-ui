'use client';

import { PerlinNoise as PaperPerlinNoise } from '@paper-design/shaders-react';
import type { CSSProperties } from 'react';

interface PerlinNoiseProps {
  colorFront?: string;
  colorBack?: string;
  proportion?: number;
  softness?: number;
  octaveCount?: number;
  persistence?: number;
  lacunarity?: number;
  scale?: number;
  rotation?: number;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}

export default function PerlinNoise({
  colorFront = '#22d3ee',
  colorBack = '#05080d',
  proportion = 0.5,
  softness = 0.7,
  octaveCount = 4,
  persistence = 0.6,
  lacunarity = 2.2,
  scale = 1,
  rotation = 0,
  speed = 0.5,
  className,
  style,
}: PerlinNoiseProps) {
  return (
    <PaperPerlinNoise
      colorFront={colorFront}
      colorBack={colorBack}
      proportion={proportion}
      softness={softness}
      octaveCount={octaveCount}
      persistence={persistence}
      lacunarity={lacunarity}
      scale={scale}
      rotation={rotation}
      speed={speed}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
    />
  );
}
