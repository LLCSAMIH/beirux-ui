'use client';

import { NeuroNoise as PaperNeuroNoise } from '@paper-design/shaders-react';
import type { CSSProperties } from 'react';

interface NeuroNoiseProps {
  colorFront?: string;
  colorMid?: string;
  colorBack?: string;
  brightness?: number;
  contrast?: number;
  scale?: number;
  rotation?: number;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}

export default function NeuroNoise({
  colorFront = '#22d3ee',
  colorMid = '#0e7490',
  colorBack = '#05080d',
  brightness = 1.1,
  contrast = 0.7,
  scale = 1,
  rotation = 0,
  speed = 0.8,
  className,
  style,
}: NeuroNoiseProps) {
  return (
    <PaperNeuroNoise
      colorFront={colorFront}
      colorMid={colorMid}
      colorBack={colorBack}
      brightness={brightness}
      contrast={contrast}
      scale={scale}
      rotation={rotation}
      speed={speed}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
    />
  );
}
