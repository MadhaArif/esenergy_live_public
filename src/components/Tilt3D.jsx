'use client';

import { useTilt3D } from '@/hooks/useTilt3D';

export default function Tilt3D({
  children,
  className = '',
  intensity = 14,
  scale = 1.03,
  as: Tag = 'div',
  ...props
}) {
  const { ref, onMove, onLeave } = useTilt3D(intensity, scale);

  return (
    <Tag
      ref={ref}
      className={`tilt-3d ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...props}
    >
      <div className="tilt-3d-inner">{children}</div>
    </Tag>
  );
}
