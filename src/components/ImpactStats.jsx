'use client';

import { homeStats } from '@/lib/home';
import { useCountUp } from '@/hooks/useCountUp';
import AnimateIn from './AnimateIn';

function StatItem({ stat, delay }) {
  const { ref, display } = useCountUp(stat.value, stat.suffix);

  return (
    <AnimateIn delay={delay} className="es-stat-animate" variant="scale">
      <div ref={ref} className="es-stat-item es-stat-fun">
        <span className="es-stat-icon" aria-hidden="true">
          {stat.icon}
        </span>
        <span className="es-stat-value">{display}</span>
        <span className="es-stat-label">{stat.label}</span>
        <span className="es-stat-ring" aria-hidden="true" />
      </div>
    </AnimateIn>
  );
}

export default function ImpactStats() {
  return (
    <section className="es-stats-band es-stats-fun" aria-label="ES Energy at a glance">
      <div className="container">
        <div className="es-stats-grid">
          {homeStats.map((stat, i) => (
            <StatItem key={stat.id} stat={stat} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
