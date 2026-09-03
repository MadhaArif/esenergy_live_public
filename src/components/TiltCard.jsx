'use client';

import { useTilt3D } from '@/hooks/useTilt3D';

export default function TiltCard({
  children,
  className = '',
  intensity = 10,
  scale = 1.02,
  as: Tag = 'div',
  ...props
}) {
  const { ref, onMove, onLeave } = useTilt3D(intensity, scale);

  return (
    <Tag
      ref={ref}
      className={`es-tilt-card ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...props}
    >
      {children}
    </Tag>
  );
}
