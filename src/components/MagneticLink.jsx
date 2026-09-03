'use client';

import { useRef, useCallback } from 'react';
import Link from 'next/link';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function MagneticLink({ href, className = '', children, strength = 0.28 }) {
  const ref = useRef(null);

  const onMove = useCallback(
    (e) => {
      if (prefersReducedMotion() || !ref.current) return;
      const el = ref.current;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    },
    [strength]
  );

  const onLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = '';
  }, []);

  return (
    <Link
      ref={ref}
      href={href}
      className={`es-magnetic ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </Link>
  );
}
