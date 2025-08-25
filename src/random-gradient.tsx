import React, { useState } from 'react';
import PreviewGradient from './preview-gradient';
import { randomHex } from './lib/grad';
import { GradType } from './types';

export default function RandomGradient() {
  const [gradient] = useState(() => {
    // Random gradient type
    const types: GradType[] = ['linear', 'radial', 'conic'];
    const type = types[Math.floor(Math.random() * types.length)];

    // Random stop count (2 or 3)
    const count = Math.random() < 0.5 ? 2 : 3;
    const stops = Array.from({ length: count }, () => randomHex());

    // Random angle for linear gradients
    const angle =
      type === 'linear' ? Math.floor(Math.random() * 360) : undefined;

    return { type, angle, stops };
  });

  return <PreviewGradient {...gradient} />;
}
