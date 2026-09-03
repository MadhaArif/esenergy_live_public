'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import SolarSavingsCalculator from '@/components/SolarSavingsCalculator';
import BeforeAfterBill from '@/components/BeforeAfterBill';

const STEPS = [
  {
    num: '01',
    title: 'Enter your bill',
    text: 'Type the monthly amount from your electricity bill, or tap a quick amount.',
  },
  {
    num: '02',
    title: 'See the difference',
    text: 'Compare today’s bill with your estimated bill after solar — using your own numbers.',
  },
  {
    num: '03',
    title: 'Talk to our team',
    text: 'Send the estimate for a free site review. Final design is based on your property.',
  },
];

export default function Calculator() {
  return (
    <div className="calculator-page es-calculator-page">
      <div className="page-hero calculator-page-hero es-calculator-hero">
        <div className="container">
          <Breadcrumbs
            variant="light"
            paths={[{ label: 'Solar Calculator', url: '/calculator' }]}
          />
          <p className="es-calculator-kicker">Free solar savings tool</p>
          <h1>Know your solar numbers in under a minute</h1>
          <p>
            Type your monthly electricity bill — get a clear system size, savings estimate, and next steps.
            No signup required.
          </p>
          <div className="es-calculator-hero-actions">
            <a href="#solar-calculator" className="es-btn-primary es-btn-shine">
              Type my bill amount
            </a>
            <Link href="/contact#contact-form" className="es-btn-secondary es-btn-glass">
              Prefer a human? Contact us
            </Link>
          </div>
        </div>
      </div>

      <section className="es-calc-howto" aria-label="How the calculator works">
        <div className="container">
          <div className="es-calc-howto-grid">
            {STEPS.map((step) => (
              <article key={step.num} className="es-calc-howto-card">
                <span className="es-calc-howto-num">{step.num}</span>
                <h2 className="es-calc-howto-title">{step.title}</h2>
                <p className="es-calc-howto-text">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SolarSavingsCalculator standalone />
      <BeforeAfterBill />

      <section className="es-final-cta es-calculator-cta">
        <div className="container es-final-cta-inner">
          <h2 className="es-final-cta-title">Want numbers checked for your roof?</h2>
          <p className="es-final-cta-desc">
            This tool is a starting point. Our engineers size systems from your load, roof space, and goals.
          </p>
          <div className="es-final-cta-actions">
            <Link href="/contact#contact-form" className="es-btn-primary es-btn-light">
              Request a free quote
            </Link>
            <Link href="/projects" className="es-btn-secondary es-btn-ghost">
              See real projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
