'use client';

import { Swirl as PaperSwirl } from '@paper-design/shaders-react';
import type { CSSProperties } from 'react';

interface SwirlProps {
  colorBack?: string;
  colors?: string[];
  bandCount?: number;
  twist?: number;
  center?: number;
  proportion?: number;
  softness?: number;
  noise?: number;
  noiseFrequency?: number;
  scale?: number;
  rotation?: number;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}

export default function Swirl({
  colorBack = '#05080d',
  colors = ['#0e7490', '#22d3ee', '#67e8f9'],
  bandCount = 4,
  twist = 0.5,
  center = 0.2,
  proportion = 0.5,
  softness = 0.6,
  noise = 0.15,
  noiseFrequency = 0.3,
  scale = 1,
  rotation = 0,
  speed = 0.6,
  className,
  style,
}: SwirlProps) {
  return (
    <PaperSwirl
      colorBack={colorBack}
      colors={colors}
      bandCount={bandCount}
      twist={twist}
      center={center}
      proportion={proportion}
      softness={softness}
      noise={noise}
      noiseFrequency={noiseFrequency}
      scale={scale}
      rotation={rotation}
      speed={speed}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
    />
  );
}
