import React, { useState, useEffect, useMemo, useRef } from 'react';
import ScrollReveal from './ScrollReveal';

const BEFORE_BILL_DEFAULT = 65000;
const AFTER_BILL_DEFAULT = 6500;

const formatPKR = (num) => 'PKR ' + Math.round(num).toLocaleString('en-PK');

const BeforeAfterBill = () => {
  const containerRef = useRef(null);
  const [split, setSplit] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [billTick, setBillTick] = useState(false);
  const dragActiveRef = useRef(false);
  const tickTimerRef = useRef(null);
  const lastSplitBucketRef = useRef(-1);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const onChange = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const solarOffsetPercent = useMemo(() => {
    const delta = BEFORE_BILL_DEFAULT - AFTER_BILL_DEFAULT;
    return Math.round((delta / BEFORE_BILL_DEFAULT) * 100);
  }, []);

  const monthlyReduction = BEFORE_BILL_DEFAULT - AFTER_BILL_DEFAULT;
  const annualSaving = monthlyReduction * 12;

  const splitRatio = split / 100;
  const displayBillBefore = prefersReducedMotion
    ? BEFORE_BILL_DEFAULT
    : Math.round(BEFORE_BILL_DEFAULT - (BEFORE_BILL_DEFAULT - AFTER_BILL_DEFAULT) * Math.pow(splitRatio, 0.85) * 0.92);
  const displayBillAfter = prefersReducedMotion
    ? AFTER_BILL_DEFAULT
    : Math.round(AFTER_BILL_DEFAULT + (BEFORE_BILL_DEFAULT - AFTER_BILL_DEFAULT) * Math.pow(1 - splitRatio, 0.85) * 0.08);

  useEffect(() => {
    if (isDragging) {
      window.dispatchEvent(new CustomEvent('cursor-dragging-start'));
    } else {
      window.dispatchEvent(new CustomEvent('cursor-dragging-end'));
    }
  }, [isDragging]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const bucket = Math.floor(split / 8);
    if (bucket !== lastSplitBucketRef.current) {
      lastSplitBucketRef.current = bucket;
      if (tickTimerRef.current) clearTimeout(tickTimerRef.current);
      setBillTick(true);
      tickTimerRef.current = setTimeout(() => setBillTick(false), 200);
    }
  }, [split, prefersReducedMotion]);

  useEffect(() => {
    return () => {
      if (tickTimerRef.current) clearTimeout(tickTimerRef.current);
      window.dispatchEvent(new CustomEvent('cursor-dragging-end'));
    };
  }, []);

  const clampSplit = (val) => Math.min(100, Math.max(0, val));

  const updateSplitFromClientX = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setSplit(clampSplit(raw));
  };

  useEffect(() => {
    const handleMove = (e) => {
      if (!dragActiveRef.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      updateSplitFromClientX(clientX);
    };
    const handleUp = () => {
      dragActiveRef.current = false;
      setIsDragging(false);
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchmove', handleMove, { passive: true });
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  const handleStart = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    dragActiveRef.current = true;
    setIsDragging(true);
    updateSplitFromClientX(clientX);
    if (e.cancelable) e.preventDefault();
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        setSplit((s) => clampSplit(s - 5));
        break;
      case 'ArrowRight':
        e.preventDefault();
        setSplit((s) => clampSplit(s + 5));
        break;
      case 'Home':
        e.preventDefault();
        setSplit(0);
        break;
      case 'End':
        e.preventDefault();
        setSplit(100);
        break;
      default:
        break;
    }
  };

  const beforeClip = `inset(0 ${100 - split}% 0 0)`;
  const afterClip = `inset(0 0 0 ${split}%)`;

  const dynamicOffset = Math.round(solarOffsetPercent * (split / 100));
  const dynamicReduction = Math.round(monthlyReduction * (split / 100));

  const handleAriaText = `Split at ${Math.round(split)} percent. Before solar bill ${formatPKR(BEFORE_BILL_DEFAULT)}. After solar bill ${formatPKR(AFTER_BILL_DEFAULT)}.`;

  return (
    <section className="before-after-bill-section" aria-labelledby="before-after-heading">
      <div className="container">
        <ScrollReveal>
          <div className="before-after-bill-header">
            <span className="before-after-bill-eyebrow">02 / SOLAR IMPACT</span>
            <h2 id="before-after-heading" className="before-after-bill-heading">
              See What Changes After Solar.
            </h2>
            <p className="before-after-bill-description">
              Compare a conventional electricity bill with an engineered solar configuration and see how dramatically your monthly energy cost can change.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div
            ref={containerRef}
            className={`bill-comparison ${isDragging ? 'is-dragging' : ''}`}
            role="application"
            aria-label="Before and after solar electricity bill comparison"
          >
            <div className="bill-comparison-inner">
              <div
                className={`bill-side bill-before ${prefersReducedMotion ? '' : ''}`}
                style={{ clipPath: beforeClip }}
                aria-hidden="true"
              >
                <div className="bill-side-label-rail">
                  <span className="bill-side-label">BEFORE SOLAR</span>
                  <span className="bill-side-tag bill-tag-warning">GRID DEPENDENCY</span>
                </div>
                <div className="bill-side-content">
                  <span className="bill-value-label">Monthly Electricity Bill</span>
                  <div className="bill-value-row">
                    <span className="bill-value-prefix">PKR</span>
                    <span className={`bill-value bill-value-before ${billTick ? 'tick' : ''}`}>{displayBillBefore.toLocaleString('en-PK')}</span>
                  </div>
                  <div className="bill-side-meta">
                    <span className="bill-meta-item">
                      <span className="bill-meta-dot bill-dot-warning" aria-hidden="true" />
                      HIGH MONTHLY COST
                    </span>
                    <span className="bill-meta-item">
                      <span className="bill-meta-dot bill-dot-warning" aria-hidden="true" />
                      NO ON-SITE GENERATION
                    </span>
                  </div>
                </div>
                <div className="bill-coord-mark bill-coord-tl" aria-hidden="true">X 0.00 / Y 0.00</div>
                <div className="bill-coord-mark bill-coord-bl" aria-hidden="true">X 0.00 / Y 1.00</div>
                <div className="bill-watermark" aria-hidden="true">EN ENERGY / SYSTEM IMPACT</div>
              </div>

              <div
                className="bill-side bill-after"
                style={{ clipPath: afterClip }}
                aria-hidden="true"
              >
                <div className="bill-side-label-rail">
                  <span className="bill-side-label bill-side-label-gold">AFTER SOLAR</span>
                  <span className="bill-side-tag bill-tag-success">SOLAR OFFSET</span>
                </div>
                <div className="bill-side-content">
                  <span className="bill-value-label">Monthly Electricity Bill</span>
                  <div className="bill-value-row">
                    <span className="bill-value-prefix">PKR</span>
                    <span className={`bill-value bill-value-after ${billTick ? 'tick' : ''}`}>{displayBillAfter.toLocaleString('en-PK')}</span>
                  </div>
                  <div className="bill-side-meta">
                    <span className="bill-meta-item">
                      <span className="bill-meta-dot bill-dot-gold" aria-hidden="true" />
                      LOWER MONTHLY COST
                    </span>
                    <span className="bill-meta-item">
                      <span className="bill-meta-dot bill-dot-gold" aria-hidden="true" />
                      ON-SITE GENERATION
                    </span>
                  </div>
                </div>
                <div className="bill-coord-mark bill-coord-tr" aria-hidden="true">X 1.00 / Y 0.00</div>
                <div className="bill-coord-mark bill-coord-br" aria-hidden="true">X 1.00 / Y 1.00</div>
                <div className="bill-watermark bill-watermark-right" aria-hidden="true">EN ENERGY / SYSTEM IMPACT</div>
              </div>

              <div className="bill-comparison-divider" style={{ left: `${split}%` }} aria-hidden="true" />

              <div
                className={`bill-comparison-handle ${isDragging ? 'is-active' : ''}`}
                style={{ left: `${split}%` }}
                role="slider"
                tabIndex={0}
                aria-label="Before and after solar electricity bill comparison slider"
                aria-orientation="horizontal"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(split)}
                aria-valuetext={handleAriaText}
                onKeyDown={handleKeyDown}
                onMouseDown={handleStart}
                onTouchStart={handleStart}
              >
                <div className="bill-handle-ring" aria-hidden="true">
                  <svg className="bill-handle-arrows" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="15 6 9 12 15 18" />
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </div>
                <div className="bill-handle-glow" aria-hidden="true" />
              </div>

              <div className="bill-tech-overlay" aria-hidden="true">
                <span className="bill-tech-label">DYNAMIC SPLIT</span>
                <span className="bill-tech-value">{Math.round(split)}%</span>
              </div>

              <div className="bill-live-metrics" aria-hidden="true">
                <div className="bill-live-item">
                  <span className="bill-live-label">SOLAR OFFSET</span>
                  <span className="bill-live-value">{Math.round(solarOffsetPercent * (split / 100 + 0.0))}%</span>
                </div>
                <div className="bill-live-item">
                  <span className="bill-live-label">MONTHLY REDUCTION</span>
                  <span className="bill-live-value">{formatPKR(dynamicReduction)}</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <div className="bill-metrics" role="list" aria-label="Bill comparison summary metrics">
            <div className="bill-metric-card" role="listitem" style={{ transitionDelay: '0ms' }}>
              <span className="bill-metric-label">MONTHLY REDUCTION</span>
              <span className="bill-metric-value" aria-live="polite">{formatPKR(monthlyReduction)}</span>
              <span className="bill-metric-accent" aria-hidden="true" />
            </div>
            <div className="bill-metric-card" role="listitem" style={{ transitionDelay: '80ms' }}>
              <span className="bill-metric-label">ANNUAL SAVING</span>
              <span className="bill-metric-value" aria-live="polite">{formatPKR(annualSaving)}</span>
              <span className="bill-metric-accent" aria-hidden="true" />
            </div>
            <div className="bill-metric-card" role="listitem" style={{ transitionDelay: '160ms' }}>
              <span className="bill-metric-label">ESTIMATED OFFSET</span>
              <span className="bill-metric-value" aria-live="polite">{solarOffsetPercent}%</span>
              <span className="bill-metric-accent" aria-hidden="true" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BeforeAfterBill;
