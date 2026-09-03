'use client';

import { trustStripItems } from '@/lib/home';

export default function TrustBar() {
  const items = [...trustStripItems, ...trustStripItems];

  return (
    <section className="es-trust-strip" aria-label="Credentials">
      <div className="es-marquee-wrap">
        <div className="es-marquee-track">
          {items.map((label, i) => (
            <span key={`${label}-${i}`} className="es-marquee-item">
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
