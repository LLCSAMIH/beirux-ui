'use client';

import { Spiral as PaperSpiral } from '@paper-design/shaders-react';
import type { CSSProperties } from 'react';

interface SpiralProps {
  colorBack?: string;
  colorFront?: string;
  density?: number;
  distortion?: number;
  strokeWidth?: number;
  strokeTaper?: number;
  strokeCap?: number;
  noise?: number;
  noiseFrequency?: number;
  softness?: number;
  scale?: number;
  rotation?: number;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}

export default function Spiral({
  colorBack = '#05080d',
  colorFront = '#22d3ee',
  density = 0.5,
  distortion = 0.2,
  strokeWidth = 0.4,
  strokeTaper = 0.3,
  strokeCap = 0.4,
  noise = 0.2,
  noiseFrequency = 0.3,
  softness = 0.5,
  scale = 1,
  rotation = 0,
  speed = 0.6,
  className,
  style,
}: SpiralProps) {
  return (
    <PaperSpiral
      colorBack={colorBack}
      colorFront={colorFront}
      density={density}
      distortion={distortion}
      strokeWidth={strokeWidth}
      strokeTaper={strokeTaper}
      strokeCap={strokeCap}
      noise={noise}
      noiseFrequency={noiseFrequency}
      softness={softness}
      scale={scale}
      rotation={rotation}
      speed={speed}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
    />
  );
}
