import React, { useState } from 'react';
import PreviewGradient from './preview-gradient';
import { randomHex } from './lib/grad';

export default function RandomGradient3() {
  const [stops] = useState<string[]>(() => {
    // Always generate exactly 3 color stops
    return Array.from({ length: 3 }, () => randomHex());
  });

  return <PreviewGradient type="linear" angle={90} stops={stops} />;
}
