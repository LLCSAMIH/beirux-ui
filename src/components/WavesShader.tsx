'use client';

import { Waves as PaperWaves } from '@paper-design/shaders-react';
import type { CSSProperties } from 'react';

interface WavesShaderProps {
  colorFront?: string;
  colorBack?: string;
  shape?: number;
  frequency?: number;
  amplitude?: number;
  spacing?: number;
  proportion?: number;
  softness?: number;
  scale?: number;
  rotation?: number;
  className?: string;
  style?: CSSProperties;
}

export default function WavesShader({
  colorFront = '#22d3ee',
  colorBack = '#05080d',
  shape = 1,
  frequency = 0.6,
  amplitude = 0.5,
  spacing = 0.75,
  proportion = 0.5,
  softness = 0.3,
  scale = 1,
  rotation = 0,
  className,
  style,
}: WavesShaderProps) {
  return (
    <PaperWaves
      colorFront={colorFront}
      colorBack={colorBack}
      shape={shape}
      frequency={frequency}
      amplitude={amplitude}
      spacing={spacing}
      proportion={proportion}
      softness={softness}
      scale={scale}
      rotation={rotation}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
    />
  );
}
