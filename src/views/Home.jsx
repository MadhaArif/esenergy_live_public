'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { howItWorksSteps, faqsData } from '../data';
import {
  homeSectors,
  homePillars,
  brandIntro,
} from '@/lib/home';
import AnimateIn from '../components/AnimateIn';
import TiltCard from '../components/TiltCard';
import FeaturedProjectsStrip from '../components/FeaturedProjectsStrip';
import TestimonialsTicker from '../components/TestimonialsTicker';
import SectionWave from '../components/SectionWave';
import FAQAccordion from '../components/FAQAccordion';
import SolarCalculatorPromo from '../components/SolarCalculatorPromo';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <section className="es-sectors">
        <div className="container">
          <AnimateIn className="es-section-head" variant="left">
            <p className="es-eyebrow">Solutions by sector</p>
            <h2 className="es-section-title">Solar for every scale</h2>
            <p className="es-section-desc">
              Residential rooftops, commercial buildings, and industrial plants — each engineered for the load it serves.
            </p>
          </AnimateIn>

          <div className="es-sector-grid">
            {homeSectors.map((sector, i) => (
              <AnimateIn key={sector.id} delay={i * 90} variant="scale">
                <TiltCard
                  as="article"
                  className="es-sector-card"
                  intensity={6}
                  scale={1.01}
                  onClick={() => router.push(sector.link)}
                  role="link"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && router.push(sector.link)}
                >
                  <img
                    src={sector.image}
                    alt=""
                    className="es-sector-img"
                    loading="lazy"
                  />
                  <div className="es-sector-overlay" aria-hidden="true" />
                  <span className="es-sector-badge">{sector.stat}</span>
                  <div className="es-sector-content">
                    <h3 className="es-sector-title">{sector.title}</h3>
                    <p className="es-sector-desc">{sector.desc}</p>
                    <span className="es-sector-cta">Explore →</span>
                  </div>
                </TiltCard>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <SectionWave variant="dark" />

      <FeaturedProjectsStrip />

      <section className="es-pillars">
        <div className="container">
          <AnimateIn className="es-section-head es-section-head-split" variant="right">
            <div>
              <p className="es-eyebrow">Why ES Energy</p>
              <h2 className="es-section-title">Solar done properly — not as a quick fix</h2>
            </div>
            <p className="es-section-desc">
              We focus on engineering and installation quality so your system performs reliably for years — for homes, businesses, and factories in Pakistan.
            </p>
          </AnimateIn>

          <div className="es-pillars-grid">
            {homePillars.map((pillar, i) => (
              <AnimateIn key={pillar.number} delay={i * 70} variant="up">
                <article className="es-pillar-card es-card-shine">
                  <span className="es-pillar-num">{pillar.number}</span>
                  <h3 className="es-pillar-title">{pillar.title}</h3>
                  <p className="es-pillar-text">{pillar.text}</p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsTicker />

      <section className="es-brand-intro">
        <div className="container es-brand-grid">
          <AnimateIn className="es-brand-text" variant="left">
            <p className="es-eyebrow">{brandIntro.eyebrow}</p>
            <h2 className="es-section-title">{brandIntro.title}</h2>
            <p className="es-section-desc">{brandIntro.description}</p>
            <Link href={brandIntro.cta.href} className="es-btn-outline">
              {brandIntro.cta.label}
            </Link>
          </AnimateIn>
          <AnimateIn delay={120} className="es-brand-media" variant="right">
            <div className="es-brand-img-wrap es-img-reveal">
              <img
                src={brandIntro.image}
                alt="ES Energy commercial solar installation"
                className="es-brand-img"
                loading="lazy"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="es-process">
        <div className="container">
          <AnimateIn className="es-section-head" variant="fade">
            <p className="es-eyebrow">Process</p>
            <h2 className="es-section-title">How a project works</h2>
            <p className="es-section-desc">
              A clear step-by-step path from first call to a working system.
            </p>
          </AnimateIn>

          <div className="es-process-list">
            {howItWorksSteps.map((step, i) => (
              <AnimateIn key={step.step} delay={i * 60} variant="left">
                <div className="es-process-step">
                  <span className="es-process-num">{step.step}</span>
                  <div className="es-process-body">
                    <h3 className="es-process-title">{step.title}</h3>
                    <p className="es-process-desc">{step.description}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <SolarCalculatorPromo />

      <SectionWave variant="light" />

      <section className="es-faq">
        <div className="container">
          <AnimateIn className="es-section-head es-section-head-center" variant="up">
            <p className="es-eyebrow">FAQ</p>
            <h2 className="es-section-title">Common questions</h2>
            <p className="es-section-desc">
              Straight answers before you start your solar project.
            </p>
          </AnimateIn>
          <AnimateIn delay={80} variant="fade">
            <FAQAccordion items={faqsData} />
          </AnimateIn>
        </div>
      </section>

      <section className="es-final-cta es-cta-party">
        <div className="container es-final-cta-inner">
          <AnimateIn variant="scale">
            <h2 className="es-final-cta-title">Ready to discuss your site?</h2>
            <p className="es-final-cta-desc">
              Send your bill and basic site details. We will advise on system size and next steps.
            </p>
            <div className="es-final-cta-actions">
              <Link href="/contact#contact-form" className="es-btn-primary es-btn-light es-btn-shine">
                Contact us
              </Link>
              <Link href="/calculator" className="es-btn-secondary es-btn-ghost">
                Use calculator
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
