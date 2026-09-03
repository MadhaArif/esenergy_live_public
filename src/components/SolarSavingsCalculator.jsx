'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Calculator, SlidersHorizontal, Keyboard, Home, Building2, Factory } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { isWhatsAppConfigured, getWhatsAppUrl } from '@/lib/contact';

const MIN_BILL = 5000;
const MAX_BILL = 500000;
const STEP_BILL = 1000;
const DEFAULT_BILL = 45000;

const SAVINGS_BY_SECTOR = {
  residential: 0.7,
  commercial: 0.65,
  industrial: 0.6,
};

const PRESETS = [
  { label: 'PKR 15,000', value: 15000 },
  { label: 'PKR 25,000', value: 25000 },
  { label: 'PKR 45,000', value: 45000 },
  { label: 'PKR 75,000', value: 75000 },
  { label: 'PKR 1,00,000', value: 100000 },
  { label: 'PKR 2,00,000', value: 200000 },
];

const SECTORS = [
  { id: 'residential', label: 'Home', icon: Home, hint: 'House / apartment' },
  { id: 'commercial', label: 'Business', icon: Building2, hint: 'Office / shop' },
  { id: 'industrial', label: 'Factory', icon: Factory, hint: 'Plant / warehouse' },
];

const CAPACITY_TIERS = [
  { label: '3 kW', minBill: 5000, maxBill: 25000, systemKW: 3, costPerKW: 135000 },
  { label: '5 kW', minBill: 25000, maxBill: 40000, systemKW: 5, costPerKW: 130000 },
  { label: '6.2 kW', minBill: 40000, maxBill: 55000, systemKW: 6.2, costPerKW: 128000 },
  { label: '8 kW', minBill: 55000, maxBill: 75000, systemKW: 8, costPerKW: 125000 },
  { label: '10 kW', minBill: 75000, maxBill: 110000, systemKW: 10, costPerKW: 122000 },
  { label: '15 kW', minBill: 110000, maxBill: 160000, systemKW: 15, costPerKW: 118000 },
  { label: '20 kW+', minBill: 160000, maxBill: Infinity, systemKW: 20, costPerKW: 115000 },
];

const getTierForBill = (bill) => {
  for (let i = 0; i < CAPACITY_TIERS.length; i++) {
    const tier = CAPACITY_TIERS[i];
    if (i === CAPACITY_TIERS.length - 1) {
      if (bill >= tier.minBill) return tier;
    } else if (bill >= tier.minBill && bill < tier.maxBill) {
      return tier;
    }
  }
  return CAPACITY_TIERS[2];
};

const formatPKR = (num) => `PKR ${Math.round(num).toLocaleString('en-PK')}`;
const formatNumber = (num) => Math.round(num).toLocaleString('en-PK');

const SolarSavingsCalculator = ({ standalone = false }) => {
  const router = useRouter();
  const inputRef = useRef(null);
  const [bill, setBill] = useState(DEFAULT_BILL);
  const [draft, setDraft] = useState(String(DEFAULT_BILL));
  const [isFocused, setIsFocused] = useState(false);
  const [inputMode, setInputMode] = useState('type'); // type | slider
  const [sector, setSector] = useState('residential');
  const [isSliding, setIsSliding] = useState(false);
  const [tickActive, setTickActive] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const prevTierRef = useRef('');
  const tickTimerRef = useRef(null);

  const clampBill = (val) => {
    if (isNaN(val)) return MIN_BILL;
    return Math.min(MAX_BILL, Math.max(MIN_BILL, val));
  };

  const applyBill = (val, { snap = false } = {}) => {
    let next = clampBill(val);
    if (snap) {
      const steps = Math.round((next - MIN_BILL) / STEP_BILL);
      next = MIN_BILL + steps * STEP_BILL;
    }
    setBill(next);
    setDraft(String(next));
    setError('');
    return next;
  };

  const handleDraftChange = (e) => {
    const digits = e.target.value.replace(/[^\d]/g, '');
    setDraft(digits);

    if (digits === '') {
      setError('Enter your monthly bill amount');
      return;
    }

    const num = Number(digits);
    if (num < MIN_BILL) {
      setError(`Minimum bill is ${formatPKR(MIN_BILL)}`);
      setBill(num);
      return;
    }
    if (num > MAX_BILL) {
      setError(`Maximum for this tool is ${formatPKR(MAX_BILL)}`);
      setBill(MAX_BILL);
      return;
    }

    setError('');
    setBill(num);
  };

  const handleDraftBlur = () => {
    setIsFocused(false);
    if (draft === '') {
      applyBill(DEFAULT_BILL);
      return;
    }
    applyBill(Number(draft));
  };

  const handleSliderChange = (e) => {
    applyBill(Number(e.target.value), { snap: true });
  };

  const estimate = useMemo(() => {
    const safeBill = clampBill(bill < MIN_BILL ? MIN_BILL : bill);
    const tier = getTierForBill(safeBill);
    const ratio = SAVINGS_BY_SECTOR[sector] ?? 0.7;
    const monthlySavings = Math.round(safeBill * ratio);
    const annualSavings = monthlySavings * 12;
    const systemCost = tier.systemKW * tier.costPerKW;
    const paybackYears = annualSavings > 0 ? systemCost / annualSavings : 0;
    const afterBill = Math.max(0, safeBill - monthlySavings);

    return {
      systemKW: tier.systemKW,
      systemLabel: tier.label,
      monthlySavings,
      annualSavings,
      paybackYears,
      afterBill,
      ratio,
      tierIndex: CAPACITY_TIERS.indexOf(tier),
      displayBill: safeBill,
    };
  }, [bill, sector]);

  useEffect(() => {
    if (prevTierRef.current && prevTierRef.current !== estimate.systemLabel) {
      if (tickTimerRef.current) clearTimeout(tickTimerRef.current);
      setTickActive(true);
      tickTimerRef.current = setTimeout(() => setTickActive(false), 280);
    }
    prevTierRef.current = estimate.systemLabel;
  }, [estimate.systemLabel]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const detail = {
      bill: estimate.displayBill,
      ratio: estimate.ratio,
      systemLabel: estimate.systemLabel,
      monthlySavings: estimate.monthlySavings,
      afterBill: estimate.afterBill,
      sector,
    };
    window.__esCalcEstimate = detail;
    window.dispatchEvent(new CustomEvent('es-calc-estimate', { detail }));
  }, [estimate, sector]);

  useEffect(() => {
    return () => {
      if (tickTimerRef.current) clearTimeout(tickTimerRef.current);
    };
  }, []);

  const sliderProgress =
    ((Math.min(MAX_BILL, Math.max(MIN_BILL, bill)) - MIN_BILL) / (MAX_BILL - MIN_BILL)) * 100;

  const displayValue = isFocused
    ? draft
    : draft === ''
      ? ''
      : formatNumber(Number(draft) || 0);

  const handlePrimaryCTA = async () => {
    const finalBill = applyBill(Number(draft || bill));
    setSubmitting(true);
    try {
      await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          monthlyBill: finalBill,
          systemLabel: estimate.systemLabel,
          systemKW: estimate.systemKW,
          estimatedSavings: estimate.monthlySavings,
          annualSavings: estimate.annualSavings,
          paybackYears: estimate.paybackYears,
          sector,
          source: 'calculator',
        }),
      });
    } catch {
      // best-effort
    } finally {
      setSubmitting(false);
    }

    router.push(
      `/contact?system=${encodeURIComponent(`${estimate.systemKW}kW`)}&bill=${finalBill}&sector=${sector}#contact-form`
    );
  };

  const hasValidWhatsApp = isWhatsAppConfigured();

  const handleWhatsApp = () => {
    if (!hasValidWhatsApp) return;
    const message = `Hi ES Energy, I'd like a ${estimate.systemLabel} solar quote. My monthly bill is about ${formatPKR(estimate.displayBill)} (${sector}). Estimated monthly savings: ${formatPKR(estimate.monthlySavings)}.`;
    const url = getWhatsAppUrl(message);
    if (url) window.open(url, '_blank');
  };

  const focusTypeMode = () => {
    setInputMode('type');
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  return (
    <section
      id="solar-calculator"
      className={`savings-calculator-section mode-engineering-dark es-calc-tool${standalone ? ' savings-calculator-standalone' : ''}`}
      aria-labelledby="savings-calc-heading"
    >
      <div className="container">
        {!standalone ? (
          <ScrollReveal>
            <div className="savings-calc-header">
              <span className="savings-calc-eyebrow">Solar calculator</span>
              <h2 id="savings-calc-heading" className="savings-calc-heading">
                See what solar could save you
              </h2>
              <p className="savings-calc-description">
                Enter your bill, pick your property type, and get an instant system size + savings estimate.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <div className="es-calc-section-intro">
            <h2 id="savings-calc-heading" className="es-calc-section-title">
              Step 1 — Enter your monthly bill
            </h2>
            <p className="es-calc-section-desc">
              Type the amount from your electricity bill, or use quick amounts / the slider.
            </p>
          </div>
        )}

        <div className="es-calc-layout">
          {/* LEFT: inputs */}
          <div className="es-calc-panel es-calc-inputs">
            <div className="es-calc-panel-head">
              <Calculator size={18} aria-hidden="true" />
              <span>Your details</span>
            </div>

            {/* Sector */}
            <fieldset className="es-calc-fieldset">
              <legend className="es-calc-label">Property type</legend>
              <div className="es-calc-sectors" role="radiogroup" aria-label="Property type">
                {SECTORS.map(({ id, label, icon: Icon, hint }) => (
                  <button
                    key={id}
                    type="button"
                    role="radio"
                    aria-checked={sector === id}
                    className={`es-calc-sector ${sector === id ? 'is-active' : ''}`}
                    onClick={() => setSector(id)}
                  >
                    <Icon size={18} aria-hidden="true" />
                    <span className="es-calc-sector-label">{label}</span>
                    <span className="es-calc-sector-hint">{hint}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Mode toggle */}
            <div className="es-calc-mode-toggle" role="tablist" aria-label="Bill input method">
              <button
                type="button"
                role="tab"
                aria-selected={inputMode === 'type'}
                className={`es-calc-mode-btn ${inputMode === 'type' ? 'is-active' : ''}`}
                onClick={focusTypeMode}
              >
                <Keyboard size={16} aria-hidden="true" />
                Type amount
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={inputMode === 'slider'}
                className={`es-calc-mode-btn ${inputMode === 'slider' ? 'is-active' : ''}`}
                onClick={() => setInputMode('slider')}
              >
                <SlidersHorizontal size={16} aria-hidden="true" />
                Use slider
              </button>
            </div>

            {/* Type input — always visible, emphasized in type mode */}
            <div className={`es-calc-type-block ${inputMode === 'type' ? 'is-emphasized' : ''}`}>
              <label htmlFor="bill-input" className="es-calc-label">
                Monthly electricity bill (PKR)
              </label>
              <div className={`es-calc-type-field ${isFocused ? 'is-focused' : ''} ${error ? 'has-error' : ''}`}>
                <span className="es-calc-type-prefix">PKR</span>
                <input
                  ref={inputRef}
                  id="bill-input"
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="e.g. 45000"
                  value={displayValue}
                  onChange={handleDraftChange}
                  onFocus={() => {
                    setIsFocused(true);
                    setInputMode('type');
                    setDraft(String(bill));
                  }}
                  onBlur={handleDraftBlur}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.currentTarget.blur();
                    }
                  }}
                  className="es-calc-type-input"
                  aria-invalid={Boolean(error)}
                  aria-describedby="bill-help bill-error"
                />
                <button
                  type="button"
                  className="es-calc-clear-btn"
                  onClick={() => {
                    setDraft('');
                    setError('Enter your monthly bill amount');
                    inputRef.current?.focus();
                  }}
                  aria-label="Clear amount"
                >
                  Clear
                </button>
              </div>
              {error ? (
                <p id="bill-error" className="es-calc-error" role="alert">
                  {error}
                </p>
              ) : (
                <p id="bill-help" className="es-calc-hint">
                  Tip: type the exact number from your bill — no commas needed.
                </p>
              )}
            </div>

            {/* Quick presets */}
            <div className="es-calc-presets">
              <span className="es-calc-label">Quick amounts</span>
              <div className="es-calc-preset-row">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.value}
                    type="button"
                    className={`es-calc-preset ${bill === preset.value ? 'is-active' : ''}`}
                    onClick={() => applyBill(preset.value)}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider — always available */}
            <div className={`es-calc-slider-block ${inputMode === 'slider' ? 'is-emphasized' : ''}`}>
                <div className="es-calc-slider-head">
                  <span className="es-calc-label">Or drag the slider</span>
                  <span className="es-calc-slider-live">{formatPKR(estimate.displayBill)}</span>
                </div>
                <div className="savings-slider-wrapper es-calc-slider">
                  <div className="savings-slider-rail" aria-hidden="true">
                    <div
                      className={`savings-slider-progress ${isSliding ? 'is-active' : ''}`}
                      style={{ width: `${sliderProgress}%` }}
                    />
                  </div>
                  <input
                    type="range"
                    min={MIN_BILL}
                    max={MAX_BILL}
                    step={STEP_BILL}
                    value={Math.min(MAX_BILL, Math.max(MIN_BILL, bill))}
                    onChange={handleSliderChange}
                    onMouseDown={() => {
                      setIsSliding(true);
                      setInputMode('slider');
                    }}
                    onMouseUp={() => setIsSliding(false)}
                    onTouchStart={() => {
                      setIsSliding(true);
                      setInputMode('slider');
                    }}
                    onTouchEnd={() => setIsSliding(false)}
                    className={`savings-slider-input ${isSliding ? 'is-dragging' : ''}`}
                    aria-label="Monthly electricity bill slider"
                  />
                  <div className="savings-slider-labels">
                    <span>{formatPKR(MIN_BILL)}</span>
                    <span>{formatPKR(MAX_BILL)}</span>
                  </div>
                </div>
              </div>
          </div>

          {/* RIGHT: results */}
          <div className="es-calc-panel es-calc-results">
            <div className="es-calc-panel-head">
              <span className="es-calc-live-dot" aria-hidden="true" />
              <span>Your estimate</span>
              <span className="es-calc-live-tag">Updates live</span>
            </div>

            <div className="es-calc-hero-metric">
              <span className="es-calc-metric-label">Recommended system size</span>
              <p className={`es-calc-metric-big ${tickActive ? 'is-tick' : ''}`} aria-live="polite">
                {estimate.systemLabel}
              </p>
              <span className="es-calc-metric-note">
                Based on ~{Math.round(estimate.ratio * 100)}% bill offset for {sector} use
              </span>
            </div>

            <div className="es-calc-metrics">
              <div className="es-calc-metric">
                <span className="es-calc-metric-label">Monthly savings</span>
                <strong className={tickActive ? 'is-tick' : ''} aria-live="polite">
                  {formatPKR(estimate.monthlySavings)}
                </strong>
              </div>
              <div className="es-calc-metric">
                <span className="es-calc-metric-label">Yearly savings</span>
                <strong className={tickActive ? 'is-tick' : ''} aria-live="polite">
                  {formatPKR(estimate.annualSavings)}
                </strong>
              </div>
              <div className="es-calc-metric">
                <span className="es-calc-metric-label">Est. payback</span>
                <strong className={tickActive ? 'is-tick' : ''} aria-live="polite">
                  ~{estimate.paybackYears.toFixed(1)} years
                </strong>
              </div>
              <div className="es-calc-metric">
                <span className="es-calc-metric-label">Bill after solar (est.)</span>
                <strong className={tickActive ? 'is-tick' : ''} aria-live="polite">
                  {formatPKR(estimate.afterBill)}
                </strong>
              </div>
            </div>

            <div className="es-calc-story">
              <p>
                If your bill is <strong>{formatPKR(estimate.displayBill)}</strong>, a{' '}
                <strong>{estimate.systemLabel}</strong> system could save about{' '}
                <strong>{formatPKR(estimate.monthlySavings)}</strong> every month.
              </p>
            </div>

            <div className="es-calc-actions">
              <button
                type="button"
                onClick={handlePrimaryCTA}
                className="es-btn-primary es-btn-shine es-calc-primary-btn"
                disabled={submitting || Boolean(error && draft === '')}
              >
                {submitting ? 'Saving…' : 'Get a detailed quote'}
              </button>
              {hasValidWhatsApp && (
                <button type="button" onClick={handleWhatsApp} className="es-calc-whatsapp-btn">
                  WhatsApp this estimate
                </button>
              )}
            </div>

            <p className="es-calc-disclaimer">
              Indicative only — final size depends on roof, load, and site survey.
            </p>
          </div>
        </div>

        {/* Capacity strip */}
        <div className="es-calc-gauge">
          <div className="es-calc-gauge-head">
            <span>System sizes we commonly install</span>
            <span className="es-calc-gauge-active">Selected: {estimate.systemLabel}</span>
          </div>
          <div className="es-calc-gauge-track" role="list">
            {CAPACITY_TIERS.map((tier, idx) => (
              <button
                key={tier.label}
                type="button"
                role="listitem"
                className={`es-calc-gauge-node ${idx === estimate.tierIndex ? 'is-active' : ''}`}
                onClick={() => applyBill(tier.minBill === 5000 ? 15000 : tier.minBill + 1000)}
                aria-current={idx === estimate.tierIndex ? 'true' : undefined}
              >
                {tier.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarSavingsCalculator;
