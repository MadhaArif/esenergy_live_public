'use client';

import { useCallback, useRef } from 'react';
import Link from 'next/link';
import { siteImages } from '@/lib/images';
import { heroContent } from '@/lib/home';
import RotatingText from './RotatingText';
import HeroParticles from './HeroParticles';
import HeroScrollCue from './HeroScrollCue';
import MagneticLink from './MagneticLink';

export default function HeroBanner() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  const onMouseMove = useCallback((e) => {
    if (!heroRef.current || !bgRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    bgRef.current.style.transform = `scale(1.08) translate(${x * -22}px, ${y * -14}px)`;

    if (contentRef.current) {
      contentRef.current.style.transform = `translate(${x * 8}px, ${y * 5}px)`;
    }
  }, []);

  const onMouseLeave = useCallback(() => {
    if (bgRef.current) bgRef.current.style.transform = 'scale(1.03)';
    if (contentRef.current) contentRef.current.style.transform = '';
  }, []);

  return (
    <section
      className="es-hero"
      ref={heroRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <HeroParticles />

      <div className="es-hero-orbs" aria-hidden="true">
        <span className="es-orb es-orb-1" />
        <span className="es-orb es-orb-2" />
        <span className="es-orb es-orb-3" />
      </div>

      <div
        ref={bgRef}
        className="es-hero-bg"
        style={{ backgroundImage: `url(${siteImages.hero})` }}
        aria-hidden="true"
      />
      <div className="es-hero-overlay" aria-hidden="true" />
      <div className="es-hero-grid-lines" aria-hidden="true" />
      <div className="es-hero-vignette" aria-hidden="true" />

      <div className="container es-hero-inner" ref={contentRef}>
        <div className="es-hero-content">
          <p className="es-hero-kicker">
            <span className="es-kicker-dot" />
            {heroContent.kicker}
          </p>
          <h1 className="es-hero-title">
            {heroContent.titlePrefix}{' '}
            <RotatingText words={heroContent.rotatingWords} className="es-hero-accent" />
            <br />
            <span className="es-hero-title-suffix">{heroContent.titleSuffix}</span>
          </h1>
          <p className="es-hero-lead">{heroContent.lead}</p>
          <div className="es-hero-actions">
            <MagneticLink href="/contact#contact-form" className="es-btn-primary es-btn-shine es-btn-glow">
              Request a free quote
            </MagneticLink>
            <MagneticLink href="/calculator" className="es-btn-secondary es-btn-glass">
              Calculate savings
            </MagneticLink>
          </div>
          <ul className="es-hero-trust">
            {heroContent.trustBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="es-hero-panel" aria-label="ES Energy highlights">
          <div className="es-hero-panel-card es-glass-card es-border-glow">
            <div className="es-panel-sparkle" aria-hidden="true" />
            <p className="es-hero-panel-label">{heroContent.panelLabel}</p>
            <ul className="es-hero-panel-list">
              {heroContent.panelItems.map((item, i) => (
                <li key={item.title} style={{ '--item-i': i }}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="es-hero-panel-link">
              About ES Energy →
            </Link>
          </div>
        </div>
      </div>

      <HeroScrollCue />
    </section>
  );
}
