'use client';

import AnimateIn from './AnimateIn';

const STEPS = [
  { id: 'sun', label: 'Sunlight', icon: '☀️' },
  { id: 'panel', label: 'Solar panels', icon: '⚡' },
  { id: 'inverter', label: 'Inverter', icon: '🔌' },
  { id: 'home', label: 'Your property', icon: '🏠' },
];

export default function EnergyPulseStrip() {
  return (
    <section className="es-energy-pulse" aria-label="How solar energy flows">
      <div className="container">
        <AnimateIn variant="fade">
          <div className="es-energy-pulse-inner">
            <p className="es-energy-pulse-label">Energy in motion</p>
            <div className="es-energy-track">
              {STEPS.map((step, i) => (
                <div key={step.id} className="es-energy-node" style={{ '--node-i': i }}>
                  <span className="es-energy-icon" aria-hidden="true">
                    {step.icon}
                  </span>
                  <span className="es-energy-name">{step.label}</span>
                  {i < STEPS.length - 1 && (
                    <span className="es-energy-connector" aria-hidden="true">
                      <span className="es-energy-dot" />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
