import React, { useState } from 'react';
import PreviewGradient from './preview-gradient';
import { randomHex } from './lib/grad';

export default function RandomGradient2() {
  const [stops] = useState<string[]>(() => {
    // Always generate exactly 2 color stops
    return Array.from({ length: 2 }, () => randomHex());
  });

  return <PreviewGradient type="linear" angle={90} stops={stops} />;
}
