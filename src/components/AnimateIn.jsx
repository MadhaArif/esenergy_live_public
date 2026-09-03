'use client';

import { useEffect, useRef, useState } from 'react';

const VARIANTS = {
  up: { hidden: 'es-animate-up', visible: 'is-in' },
  down: { hidden: 'es-animate-down', visible: 'is-in' },
  left: { hidden: 'es-animate-left', visible: 'is-in' },
  right: { hidden: 'es-animate-right', visible: 'is-in' },
  scale: { hidden: 'es-animate-scale', visible: 'is-in' },
  fade: { hidden: 'es-animate-fade', visible: 'is-in' },
};

export default function AnimateIn({
  children,
  className = '',
  delay = 0,
  variant = 'up',
  as: Tag = 'div',
  ...props
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const v = VARIANTS[variant] || VARIANTS.up;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`es-animate ${v.hidden} ${visible ? v.visible : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
