'use client';

import { useRef, useCallback } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function useTilt3D(intensity = 14, scale = 1.03) {
  const ref = useRef(null);

  const onMove = useCallback(
    (e) => {
      if (prefersReducedMotion() || !ref.current) return;
      const el = ref.current;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale3d(${scale},${scale},${scale})`;
    },
    [intensity, scale]
  );

  const onLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform =
      'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)';
  }, []);

  return { ref, onMove, onLeave };
}
