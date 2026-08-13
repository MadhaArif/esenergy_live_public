import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import { WHATSAPP_NUMBER } from '../data';

const MIN_BILL = 10000;
const MAX_BILL = 300000;
const STEP_BILL = 5000;
const DEFAULT_BILL = 45000;

const SAVINGS_RATIO = 0.7;

const CAPACITY_TIERS = [
  { label: '3 kW', minBill: 10000, maxBill: 25000, systemKW: 3, costPerKW: 135000 },
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
    if (i === 0) {
      if (bill >= tier.minBill && bill < tier.maxBill) return tier;
    } else if (i === CAPACITY_TIERS.length - 1) {
      if (bill >= tier.minBill) return tier;
    } else {
      if (bill >= tier.minBill && bill < tier.maxBill) return tier;
    }
  }
  return CAPACITY_TIERS[2];
};

const formatPKR = (num) => {
  return 'PKR ' + Math.round(num).toLocaleString('en-PK');
};

const SolarSavingsCalculator = () => {
  const navigate = useNavigate();
  const [bill, setBill] = useState(DEFAULT_BILL);
  const [inputValue, setInputValue] = useState(String(DEFAULT_BILL));
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [tickActive, setTickActive] = useState(false);
  const prevValuesRef = useRef({});
  const tickTimerRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const clampBill = (val) => {
    if (isNaN(val) || val < MIN_BILL) return MIN_BILL;
    if (val > MAX_BILL) return MAX_BILL;
    return val;
  };

  const snapToStep = (val) => {
    const steps = Math.round((val - MIN_BILL) / STEP_BILL);
    return MIN_BILL + steps * STEP_BILL;
  };

  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    const snapped = snapToStep(val);
    setBill(snapped);
    setInputValue(String(snapped));
  };

  const handleSliderMouseDown = () => setIsSliding(true);
  const handleSliderMouseUp = () => setIsSliding(false);

  const handleInputChange = (e) => {
    const raw = e.target.value;
    if (raw === '') {
      setInputValue('');
      return;
    }
    const digitsOnly = raw.replace(/[^\d]/g, '');
    if (digitsOnly === '') {
      setInputValue('');
      return;
    }
    const num = Number(digitsOnly);
    setInputValue(digitsOnly);
    const clamped = clampBill(num);
    setBill(clamped);
  };

  const handleInputBlur = () => {
    const num = inputValue === '' ? MIN_BILL : Number(inputValue);
    const clamped = clampBill(num);
    const snapped = snapToStep(clamped);
    setBill(snapped);
    setInputValue(String(snapped));
  };

  const estimate = useMemo(() => {
    const tier = getTierForBill(bill);
    const monthlySavings = Math.round(bill * SAVINGS_RATIO);
    const annualSavings = Math.round(monthlySavings * 12);
    const systemCost = tier.systemKW * tier.costPerKW;
    const paybackYears = annualSavings > 0 ? systemCost / annualSavings : 0;
    return {
      systemKW: tier.systemKW,
      systemLabel: tier.label,
      monthlySavings,
      annualSavings,
      paybackYears,
      tierIndex: CAPACITY_TIERS.indexOf(tier),
    };
  }, [bill]);

  const displayMonthly = prevValuesRef.current.monthlySavings ?? estimate.monthlySavings;
  const displayAnnual = prevValuesRef.current.annualSavings ?? estimate.annualSavings;
  const displayPayback = prevValuesRef.current.paybackYears ?? estimate.paybackYears;

  useEffect(() => {
    if (prefersReducedMotion) {
      prevValuesRef.current = {
        monthlySavings: estimate.monthlySavings,
        annualSavings: estimate.annualSavings,
        paybackYears: estimate.paybackYears,
      };
      return;
    }
    const prev = prevValuesRef.current;
    const changed =
      prev.monthlySavings !== estimate.monthlySavings ||
      prev.annualSavings !== estimate.annualSavings ||
      prev.paybackYears !== estimate.paybackYears ||
      prev.systemLabel !== estimate.systemLabel;
    if (changed) {
      if (tickTimerRef.current) clearTimeout(tickTimerRef.current);
      setTickActive(true);
      tickTimerRef.current = setTimeout(() => setTickActive(false), 220);
    }
    prevValuesRef.current = {
      monthlySavings: estimate.monthlySavings,
      annualSavings: estimate.annualSavings,
      paybackYears: estimate.paybackYears,
      systemLabel: estimate.systemLabel,
    };
  }, [estimate, prefersReducedMotion]);

  useEffect(() => {
    if (isSliding) {
      window.dispatchEvent(new CustomEvent('cursor-dragging-start'));
    } else {
      window.dispatchEvent(new CustomEvent('cursor-dragging-end'));
    }
  }, [isSliding]);

  useEffect(() => {
    return () => {
      if (tickTimerRef.current) clearTimeout(tickTimerRef.current);
      window.dispatchEvent(new CustomEvent('cursor-dragging-end'));
    };
  }, []);

  const sliderProgress = ((bill - MIN_BILL) / (MAX_BILL - MIN_BILL)) * 100;

  const handlePrimaryCTA = () => {
    const systemParam = estimate.systemKW + 'kW';
    navigate(`/contact?system=${encodeURIComponent(systemParam)}&bill=${bill}`);
  };

  const hasValidWhatsApp = WHATSAPP_NUMBER &&
    WHATSAPP_NUMBER !== 'YOUR_WHATSAPP_NUMBER' &&
    WHATSAPP_NUMBER.trim().length > 0;

  const handleWhatsApp = () => {
    if (!hasValidWhatsApp) return;
    const message = `Hi EN Energy, I'd like to discuss a ${estimate.systemLabel} solar system based on my monthly electricity bill of ${formatPKR(bill)}. Estimated monthly savings: ${formatPKR(estimate.monthlySavings)}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="savings-calculator-section mode-engineering-dark" aria-labelledby="savings-calc-heading">
      <div className="container">
        <ScrollReveal>
          <div className="savings-calc-header">
            <span className="savings-calc-eyebrow">
              01 / SOLAR INTELLIGENCE
            </span>
            <h2 id="savings-calc-heading" className="savings-calc-heading">
              See What Solar Could Save You.
            </h2>
            <p className="savings-calc-description">
              Estimate your recommended solar capacity, potential monthly savings, and approximate payback period based on your electricity bill.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="savings-calc-grid">
            <div className="savings-calc-left">
              <div className="savings-control-panel">
                <div className="savings-control-header">
                  <label htmlFor="bill-input" className="savings-control-label" id="bill-input-label">
                    MONTHLY ELECTRICITY BILL
                  </label>
                  <span className="savings-indicative-tag">Indicative Estimate</span>
                </div>

                <div className="savings-bill-display">
                  <span className="savings-bill-currency">PKR</span>
                  <input
                    id="bill-input"
                    type="text"
                    inputMode="numeric"
                    value={inputValue === '' ? '' : Number(inputValue).toLocaleString('en-PK')}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className="savings-bill-input"
                    aria-labelledby="bill-input-label"
                    aria-describedby="bill-input-help"
                    min={MIN_BILL}
                    max={MAX_BILL}
                    step={STEP_BILL}
                    aria-valuemin={MIN_BILL}
                    aria-valuemax={MAX_BILL}
                    aria-valuenow={bill}
                  />
                </div>

                <div className="savings-slider-wrapper">
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
                    value={bill}
                    onChange={handleSliderChange}
                    onMouseDown={handleSliderMouseDown}
                    onMouseUp={handleSliderMouseUp}
                    onTouchStart={handleSliderMouseDown}
                    onTouchEnd={handleSliderMouseUp}
                    className={`savings-slider-input ${isSliding ? 'is-dragging' : ''}`}
                    aria-label="Monthly electricity bill range slider"
                    aria-labelledby="bill-input-label"
                    aria-valuemin={MIN_BILL}
                    aria-valuemax={MAX_BILL}
                    aria-valuenow={bill}
                  />
                  <div className="savings-slider-labels">
                    <span>{formatPKR(MIN_BILL)}</span>
                    <span>{formatPKR(MAX_BILL)}</span>
                  </div>
                </div>

                <p id="bill-input-help" className="savings-helper-text">
                  Adjust your approximate monthly utility bill. Final system sizing depends on site conditions, load profile, roof area, equipment selection, and engineering assessment.
                </p>
              </div>
            </div>

            <div className="savings-calc-right">
              <div className="savings-results-panel">
                <div className="savings-results-header">
                  <div className="savings-results-dot" />
                  <span className="savings-results-status">ESTIMATION ENGINE</span>
                </div>

                <div className="savings-metric-card savings-metric-primary" style={{ transitionDelay: '0ms' }}>
                  <span className="savings-metric-label">RECOMMENDED SYSTEM</span>
                  <div className="savings-metric-value-row">
                    <span
                      className={`savings-metric-value savings-metric-kw ${tickActive ? 'tick' : ''}`}
                      aria-live="polite"
                    >
                      {estimate.systemLabel}
                    </span>
                  </div>
                  <span className="savings-metric-sub">HYBRID / ENGINEERED CONFIGURATION</span>
                </div>

                <div className="savings-metrics-grid">
                  <div className="savings-metric-card" style={{ transitionDelay: '50ms' }}>
                    <span className="savings-metric-label">ESTIMATED MONTHLY SAVINGS</span>
                    <span
                      className={`savings-metric-value ${tickActive ? 'tick' : ''}`}
                      aria-live="polite"
                    >
                      {formatPKR(estimate.monthlySavings)}
                    </span>
                  </div>

                  <div className="savings-metric-card" style={{ transitionDelay: '100ms' }}>
                    <span className="savings-metric-label">ESTIMATED ANNUAL SAVINGS</span>
                    <span
                      className={`savings-metric-value ${tickActive ? 'tick' : ''}`}
                      aria-live="polite"
                    >
                      {formatPKR(estimate.annualSavings)}
                    </span>
                  </div>

                  <div className="savings-metric-card savings-metric-payback" style={{ transitionDelay: '150ms' }}>
                    <span className="savings-metric-label">ESTIMATED PAYBACK</span>
                    <div className="savings-metric-value-row">
                      <span className="savings-metric-tilde">~</span>
                      <span
                        className={`savings-metric-value ${tickActive ? 'tick' : ''}`}
                        aria-live="polite"
                      >
                        {estimate.paybackYears.toFixed(1)}
                      </span>
                      <span className="savings-metric-unit">YEARS</span>
                    </div>
                  </div>
                </div>

                <div className="savings-cta-group">
                  <button
                    type="button"
                    onClick={handlePrimaryCTA}
                    className="savings-cta-primary"
                    aria-label="Get my detailed solar estimate based on current selection"
                  >
                    <span>Get My Detailed Estimate</span>
                    <span className="savings-cta-arrow">→</span>
                  </button>

                  {hasValidWhatsApp && (
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="savings-cta-secondary"
                      aria-label="Discuss this solar estimate on WhatsApp"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                      <span>Discuss This Estimate on WhatsApp</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="savings-capacity-gauge">
            <div className="savings-gauge-header">
              <span className="savings-gauge-label">CAPACITY RECOMMENDATION</span>
              <span className="savings-gauge-active-tag">
                Active: {estimate.systemLabel}
              </span>
            </div>
            <div className="savings-gauge-track" role="list" aria-label="Solar system capacity tiers">
              {CAPACITY_TIERS.map((tier, idx) => {
                const isActive = idx === estimate.tierIndex;
                return (
                  <div
                    key={tier.label}
                    role="listitem"
                    className={`savings-gauge-node ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <span className="savings-gauge-node-label">{tier.label}</span>
                    {isActive && <div className="savings-gauge-node-glow" aria-hidden="true" />}
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <p className="savings-final-disclaimer">
            <span className="savings-disclaimer-bullet" aria-hidden="true">
              ⓘ
            </span>
            Indicative estimate provided for preliminary guidance only. Final system sizing depends on site conditions, load profile, roof area, equipment selection, and engineering assessment.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SolarSavingsCalculator;
