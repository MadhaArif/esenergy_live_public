'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { GripVertical, ArrowRight } from 'lucide-react';

const DEFAULT_BEFORE = 45000;
const DEFAULT_RATIO = 0.7;

const formatPKR = (num) => `PKR ${Math.round(num).toLocaleString('en-PK')}`;
const formatNum = (num) => Math.round(num).toLocaleString('en-PK');

/**
 * Before / after bill comparison — designed for average users:
 * personal numbers from the calculator, clear labels, taught drag interaction.
 */
export default function BeforeAfterBill() {
  const containerRef = useRef(null);
  const taughtRef = useRef(false);
  const dragActiveRef = useRef(false);

  const [beforeBill, setBeforeBill] = useState(DEFAULT_BEFORE);
  const [ratio, setRatio] = useState(DEFAULT_RATIO);
  const [systemLabel, setSystemLabel] = useState('6.2 kW');
  const [sector, setSector] = useState('residential');
  const [split, setSplit] = useState(42);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [view, setView] = useState('compare'); // today | solar | compare

  const afterBill = useMemo(
    () => Math.max(0, Math.round(beforeBill * (1 - ratio))),
    [beforeBill, ratio]
  );
  const monthlySave = beforeBill - afterBill;
  const yearlySave = monthlySave * 12;
  const savePercent = Math.round(ratio * 100);

  // Sync with calculator above
  useEffect(() => {
    const apply = (d = {}) => {
      if (typeof d.bill === 'number' && d.bill > 0) setBeforeBill(d.bill);
      if (typeof d.ratio === 'number') setRatio(d.ratio);
      if (d.systemLabel) setSystemLabel(d.systemLabel);
      if (d.sector) setSector(d.sector);
    };

    if (typeof window !== 'undefined' && window.__esCalcEstimate) {
      apply(window.__esCalcEstimate);
    }

    const onEstimate = (e) => apply(e.detail || {});
    window.addEventListener('es-calc-estimate', onEstimate);
    return () => window.removeEventListener('es-calc-estimate', onEstimate);
  }, []);

  // Gentle auto-demo once so users understand the drag
  useEffect(() => {
    if (taughtRef.current || hasInteracted) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      taughtRef.current = true;
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || taughtRef.current) return;
        taughtRef.current = true;
        let t = 0;
        const start = 42;
        const run = () => {
          t += 1;
          // sweep right then settle mid-left (more "after solar" visible)
          if (t < 18) setSplit(start + t * 1.6);
          else if (t < 36) setSplit(70 - (t - 18) * 1.4);
          else {
            setSplit(38);
            return;
          }
          requestAnimationFrame(run);
        };
        requestAnimationFrame(run);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasInteracted]);

  const clampSplit = (val) => Math.min(92, Math.max(8, val));

  const updateSplitFromClientX = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setSplit(clampSplit(raw));
  }, []);

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
  }, [updateSplitFromClientX]);

  const handleStart = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    dragActiveRef.current = true;
    setIsDragging(true);
    setHasInteracted(true);
    setView('compare');
    updateSplitFromClientX(clientX);
    if (e.cancelable) e.preventDefault();
  };

  const handleKeyDown = (e) => {
    setHasInteracted(true);
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSplit((s) => clampSplit(s - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSplit((s) => clampSplit(s + 5));
    }
  };

  const setQuickView = (next) => {
    setHasInteracted(true);
    setView(next);
    if (next === 'today') setSplit(88);
    if (next === 'solar') setSplit(12);
    if (next === 'compare') setSplit(42);
  };

  const sectorWord =
    sector === 'commercial' ? 'business' : sector === 'industrial' ? 'factory' : 'home';

  const beforeClip = `inset(0 ${100 - split}% 0 0)`;
  const afterClip = `inset(0 0 0 ${split}%)`;

  return (
    <section className="es-compare-section" aria-labelledby="es-compare-heading">
      <div className="container">
        <header className="es-compare-header">
          <p className="es-compare-kicker">Step 2 — Feel the difference</p>
          <h2 id="es-compare-heading" className="es-compare-title">
            Your bill today vs with solar
          </h2>
          <p className="es-compare-lead">
            Using the <strong>{formatPKR(beforeBill)}</strong> you entered above for a typical{' '}
            <strong>{sectorWord}</strong> setup
            {systemLabel ? (
              <>
                {' '}
                (~<strong>{systemLabel}</strong>)
              </>
            ) : null}
            . Drag the handle — or tap a button — to compare.
          </p>
        </header>

        {/* Instant-read cards — primary for cognition */}
        <div className="es-compare-cards" role="list">
          <article className="es-compare-card es-compare-card-before" role="listitem">
            <span className="es-compare-card-tag">Today</span>
            <p className="es-compare-card-label">Monthly bill without solar</p>
            <p className="es-compare-card-value">{formatPKR(beforeBill)}</p>
            <p className="es-compare-card-note">You pay the full grid bill every month.</p>
          </article>

          <div className="es-compare-card-arrow" aria-hidden="true">
            <ArrowRight size={22} />
          </div>

          <article className="es-compare-card es-compare-card-after" role="listitem">
            <span className="es-compare-card-tag es-compare-card-tag-good">With solar</span>
            <p className="es-compare-card-label">Estimated monthly bill</p>
            <p className="es-compare-card-value es-compare-card-value-good">{formatPKR(afterBill)}</p>
            <p className="es-compare-card-note">
              You could keep about <strong>{formatPKR(monthlySave)}</strong> each month.
            </p>
          </article>
        </div>

        {/* Emotional takeaway */}
        <div className="es-compare-takeaway">
          <p>
            That’s roughly <strong>{formatPKR(yearlySave)}</strong> a year — about{' '}
            <strong>{savePercent}%</strong> of your current bill going back into your pocket.
          </p>
        </div>

        {/* Simple controls — for people who won’t discover drag */}
        <div className="es-compare-toggles" role="tablist" aria-label="Comparison view">
          <button
            type="button"
            role="tab"
            aria-selected={view === 'today'}
            className={`es-compare-toggle ${view === 'today' ? 'is-active' : ''}`}
            onClick={() => setQuickView('today')}
          >
            Show today
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={view === 'compare'}
            className={`es-compare-toggle ${view === 'compare' ? 'is-active' : ''}`}
            onClick={() => setQuickView('compare')}
          >
            Compare
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={view === 'solar'}
            className={`es-compare-toggle ${view === 'solar' ? 'is-active' : ''}`}
            onClick={() => setQuickView('solar')}
          >
            Show with solar
          </button>
        </div>

        {/* Drag stage */}
        <div
          ref={containerRef}
          className={`es-compare-stage ${isDragging ? 'is-dragging' : ''} ${!hasInteracted ? 'is-teaching' : ''}`}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
        >
          <div className="es-compare-stage-inner">
            <div className="es-compare-pane es-compare-pane-before" style={{ clipPath: beforeClip }}>
              <span className="es-compare-pane-badge">Today</span>
              <p className="es-compare-pane-label">Monthly bill</p>
              <p className="es-compare-pane-amount">
                <span>PKR</span> {formatNum(beforeBill)}
              </p>
              <ul className="es-compare-pane-points">
                <li>Full bill from the grid</li>
                <li>Costs rise with tariffs</li>
              </ul>
            </div>

            <div className="es-compare-pane es-compare-pane-after" style={{ clipPath: afterClip }}>
              <span className="es-compare-pane-badge es-compare-pane-badge-good">With solar</span>
              <p className="es-compare-pane-label">Estimated monthly bill</p>
              <p className="es-compare-pane-amount es-compare-pane-amount-good">
                <span>PKR</span> {formatNum(afterBill)}
              </p>
              <ul className="es-compare-pane-points">
                <li>Lower monthly outgo</li>
                <li>Power from your roof</li>
              </ul>
            </div>

            <div className="es-compare-divider" style={{ left: `${split}%` }} aria-hidden="true" />

            <div
              className={`es-compare-handle ${isDragging ? 'is-active' : ''}`}
              style={{ left: `${split}%` }}
              role="slider"
              tabIndex={0}
              aria-label="Drag to compare today versus with solar"
              aria-orientation="horizontal"
              aria-valuemin={8}
              aria-valuemax={92}
              aria-valuenow={Math.round(split)}
              aria-valuetext={`Showing ${Math.round(split)}% today and ${Math.round(100 - split)}% with solar`}
              onKeyDown={handleKeyDown}
              onMouseDown={handleStart}
              onTouchStart={handleStart}
            >
              <span className="es-compare-handle-icon" aria-hidden="true">
                <GripVertical size={18} />
              </span>
            </div>

            {!hasInteracted && (
              <div className="es-compare-coach" aria-hidden="true">
                <span>← Drag to compare →</span>
              </div>
            )}
          </div>
        </div>

        <div className="es-compare-footer">
          <p className="es-compare-disclaimer">
            Example based on your calculator inputs. Actual savings depend on roof, usage, and site survey.
          </p>
          <Link href="/contact#contact-form" className="es-btn-primary es-compare-cta">
            Get this checked for my site
          </Link>
        </div>
      </div>
    </section>
  );
}
