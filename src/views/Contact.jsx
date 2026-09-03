'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import Card from '../components/Card';
import { Phone, Mail, MapPin, MessageSquare, Clock } from 'lucide-react';
import { contactConfig, isWhatsAppConfigured, getWhatsAppUrl } from '@/lib/contact';
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sector: 'residential',
    bill: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [calcContext, setCalcContext] = useState({ system: null, bill: null });

  // Sync sector, system, bill, product from query parameters
  useEffect(() => {
    const sectorParam = searchParams.get('sector');
    const systemParam = searchParams.get('system');
    const billParam = searchParams.get('bill');
    const productParam = searchParams.get('product');
    const brandParam = searchParams.get('brand');
    const messageParam = searchParams.get('message');

    setFormData(prev => {
      const updated = { ...prev };
      if (sectorParam && ['residential', 'commercial', 'industrial'].includes(sectorParam)) {
        updated.sector = sectorParam;
      }
      if (billParam && !isNaN(Number(billParam))) {
        updated.bill = billParam;
      }
      if (productParam && !prev.message) {
        const brandLine = brandParam ? ` (${brandParam})` : '';
        updated.message = `I am interested in: ${productParam}${brandLine}. Please share availability and pricing.`;
      } else if (messageParam && !prev.message) {
        updated.message = messageParam;
      }
      return updated;
    });

    setCalcContext({
      system: systemParam || null,
      bill: billParam && !isNaN(Number(billParam)) ? billParam : null,
    });
  }, [searchParams]);

  // Land on the inquiry form when arriving via CTA hash or prefilled query
  useEffect(() => {
    const scrollToForm = () => {
      const el =
        document.getElementById('contact-form') ||
        document.getElementById('consultation-form');
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const firstField = el.querySelector('input, select, textarea');
      if (firstField && typeof firstField.focus === 'function') {
        setTimeout(() => firstField.focus({ preventScroll: true }), 400);
      }
    };

    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    const shouldScroll =
      hash === '#contact-form' ||
      hash === '#consultation-form' ||
      searchParams.has('sector') ||
      searchParams.has('system') ||
      searchParams.has('bill') ||
      searchParams.has('product') ||
      searchParams.has('message') ||
      searchParams.has('type');

    if (!shouldScroll) return;

    const t1 = setTimeout(scrollToForm, 80);
    const t2 = setTimeout(scrollToForm, 350);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Contact Name is required.';
    if (!formData.phone.trim()) tempErrors.phone = 'Phone Number is required.';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email Address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = 'Please enter a valid email address.';
      }
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          system: calcContext.system,
          source: 'contact',
        }),
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || 'Could not submit your request.');
      }
      setFormSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || 'Could not submit your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* 1. Page Hero */}
      <div className="page-hero">
        <div className="container">
          <Breadcrumbs paths={[{ label: 'Contact Us', url: '/contact' }]} />
          <h1>Start Your Solar Feasibility Review</h1>
          <p>
            Tell us about your energy requirements, property, and project goals. Our team can review the initial requirements and guide you through the next steps.
          </p>
        </div>
      </div>

      {/* 2. Contact Information & Inquiry Form */}
      <section>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'flex-start' }}>
            
            {/* Left Column: Contact Information */}
            <ScrollReveal delay={100} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div>
                <span className="featured-tag">CONTACT CHANNELS</span>
                <h2 style={{ fontSize: '28px', marginTop: '12px', fontWeight: '800', color: 'var(--text-primary)' }}>Direct Communication</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
                  Connect with our team for project questions, feasibility discussions, or consultation requests.
                </p>
              </div>

              {/* Info Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '16px', border: '1px solid var(--border-color)', borderRadius: '6px', backgroundColor: '#ffffff' }}>
                  <Phone size={24} style={{ color: 'var(--accent-light)', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Phone Support</h4>
                    <span style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-secondary)' }}>
                      {contactConfig.phoneNumber || "Contact details available on request"}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '16px', border: '1px solid var(--border-color)', borderRadius: '6px', backgroundColor: '#ffffff' }}>
                  <Mail size={24} style={{ color: 'var(--accent-light)', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Email Engineering</h4>
                    <span style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-secondary)' }}>
                      {contactConfig.approvedEmail}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '16px', border: '1px solid var(--border-color)', borderRadius: '6px', backgroundColor: '#ffffff' }}>
                  <MapPin size={24} style={{ color: 'var(--accent-light)', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Office Address</h4>
                    <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-secondary)' }}>
                      {contactConfig.officeAddress || "Office location details available on request"}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '16px', border: '1px solid var(--border-color)', borderRadius: '6px', backgroundColor: '#ffffff' }}>
                  <Clock size={24} style={{ color: 'var(--accent-light)', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Operating Hours</h4>
                    <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-secondary)' }}>
                      {contactConfig.operatingHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp & Call CTAs */}
              <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '24px', borderRadius: '6px', border: '1px solid rgba(15, 23, 42, 0.06)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)' }}>Quick Assistance</h4>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  For a quick project enquiry, contact our team through the available communication channels.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '4px' }}>
                  {isWhatsAppConfigured() ? (
                    <Button
                      onClick={() => {
                        const url = getWhatsAppUrl();
                        if (url) window.open(url, '_blank');
                      }}
                      variant="outline"
                      style={{ flex: 1 }}
                    >
                      <MessageSquare size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> WhatsApp Support
                    </Button>
                  ) : (
                    <Button href="#contact-form" variant="outline" style={{ flex: 1 }}>
                      <MessageSquare size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> Use Contact Form
                    </Button>
                  )}
                  {contactConfig.phoneNumber ? (
                    <Button
                      onClick={() => window.open(`tel:${contactConfig.phoneNumber}`, '_self')}
                      variant="primary"
                      style={{ flex: 1 }}
                    >
                      <Phone size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> Call Direct
                    </Button>
                  ) : (
                    <Button href={`mailto:${contactConfig.approvedEmail}`} variant="primary" style={{ flex: 1 }}>
                      <Mail size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> Email Us
                    </Button>
                  )}
                </div>
                {!isWhatsAppConfigured() && !contactConfig.phoneNumber && (
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginTop: '4px' }}>
                    * Contact details available on request
                  </span>
                )}
              </div>
            </ScrollReveal>

            {/* Right Column: Consultation / Inquiry Form */}
            <ScrollReveal delay={200}>
              <Card padding="30px" id="contact-form" className="contact-inquiry-form">
                <span id="consultation-form" className="visually-hidden" aria-hidden="true" />
                <span className="featured-tag">CONSULTATION FORM</span>
                <h3 style={{ fontSize: '22px', margin: '12px 0 6px 0', fontWeight: '800', color: 'var(--text-primary)' }}>Request Solar Feasibility</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  Complete the initial requirements profile below to help our team understand your project before the feasibility discussion.
                </p>

                {(calcContext.system || calcContext.bill) && (
                  <div style={{
                    backgroundColor: 'rgba(46, 160, 67, 0.08)',
                    border: '1px solid rgba(0, 87, 184, 0.18)',
                    borderRadius: '8px',
                    padding: '16px 18px',
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    flexWrap: 'wrap',
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }} aria-hidden="true">
                      <path d="M12 2v4" />
                      <path d="m16.2 7.8 2.9-2.9" />
                      <path d="M18 12h4" />
                      <path d="m16.2 16.2 2.9 2.9" />
                      <path d="M12 18v4" />
                      <path d="m4.9 19.1 2.9-2.9" />
                      <path d="M2 12h4" />
                      <path d="m4.9 4.9 2.9 2.9" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <span style={{
                        fontSize: '10px',
                        fontWeight: '700',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-gold)',
                        display: 'block',
                        marginBottom: '4px',
                      }}>
                        CALCULATOR CONTEXT
                      </span>
                      <span style={{
                        fontSize: '13px',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                      }}>
                        {calcContext.system ? `Recommended ${calcContext.system} system` : ''}
                        {calcContext.system && calcContext.bill ? ' · ' : ''}
                        {calcContext.bill ? `Monthly bill: PKR ${Number(calcContext.bill).toLocaleString('en-PK')}` : ''}
                      </span>
                    </div>
                  </div>
                )}
                
                {submitError ? (
                  <div className="form-status-error" role="alert">{submitError}</div>
                ) : null}

                {formSubmitted ? (
                  <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '6px', padding: '30px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div className="newsletter-success-icon" style={{ margin: '0 auto' }}>✓</div>
                    <h4 style={{ color: 'var(--text-primary)', margin: 0, fontWeight: '700' }}>Request received</h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                      Thank you. Your feasibility request is with the ES Energy team. We will review your details and follow up shortly.
                    </p>
                    {isWhatsAppConfigured() && (
                      <Button 
                        onClick={() => {
                          const text = `Solar Feasibility Request
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Sector: ${formData.sector}
Monthly Bill: ${formData.bill ? formData.bill + ' PKR' : 'N/A'}
Requirements: ${formData.message || 'N/A'}`;
                          const url = getWhatsAppUrl(text);
                          if (url) window.open(url, '_blank');
                        }} 
                        variant="primary" 
                        style={{ width: '100%', marginTop: '8px' }}
                      >
                        Send Request on WhatsApp
                      </Button>
                    )}
                    <Button 
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', sector: 'residential', bill: '', message: '' });
                      }} 
                      variant="outline" 
                      style={{ margin: '12px auto 0 auto', width: '100%' }}
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group" style={{ marginBottom: '16px' }}>
                      <label htmlFor="formName" style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                        Contact Name:
                      </label>
                      <input 
                        id="formName"
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                        className={`form-control ${errors.name ? 'has-error' : ''}`}
                        placeholder="e.g. Muhammad Ali" 
                        required 
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && <span id="name-error" className="newsletter-error-message" style={{ marginTop: '4px' }}>{errors.name}</span>}
                    </div>

                    <div className="grid grid-2" style={{ gap: '16px', marginBottom: '16px' }}>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label htmlFor="formEmail" style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                          Email Address:
                        </label>
                        <input 
                          id="formEmail"
                          type="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange}
                          className={`form-control ${errors.email ? 'has-error' : ''}`}
                          placeholder="e.g. email@domain.com" 
                          required 
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && <span id="email-error" className="newsletter-error-message" style={{ marginTop: '4px' }}>{errors.email}</span>}
                      </div>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label htmlFor="formPhone" style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                          Phone Number:
                        </label>
                        <input 
                          id="formPhone"
                          type="tel" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange}
                          className={`form-control ${errors.phone ? 'has-error' : ''}`}
                          placeholder="e.g. 0300 1234567" 
                          required 
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                        {errors.phone && <span id="phone-error" className="newsletter-error-message" style={{ marginTop: '4px' }}>{errors.phone}</span>}
                      </div>
                    </div>

                    <div className="grid grid-2" style={{ gap: '16px', marginBottom: '16px' }}>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label htmlFor="formSector" style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                          Sector Type:
                        </label>
                        <select 
                          id="formSector"
                          name="sector" 
                          value={formData.sector} 
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="residential">Residential Solar</option>
                          <option value="commercial">Commercial Solar</option>
                          <option value="industrial">Industrial Solar</option>
                        </select>
                      </div>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label htmlFor="formBill" style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                          Monthly Utility Bill (PKR):
                        </label>
                        <input 
                          id="formBill"
                          type="number" 
                          name="bill" 
                          value={formData.bill} 
                          onChange={handleChange}
                          className="form-control" 
                          placeholder="e.g. 45000" 
                        />
                      </div>
                    </div>

                    <div className="form-group" style={{ marginBottom: '24px' }}>
                      <label htmlFor="formMessage" style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                        Remarks / Specific Requirements:
                      </label>
                      <textarea 
                        id="formMessage"
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange}
                        className="form-control" 
                        placeholder="Please note structural loads, roof type, or net metering phase details..."
                      ></textarea>
                    </div>

                    <Button type="submit" variant="primary" style={{ width: '100%' }} disabled={isSubmitting}>
                      {isSubmitting ? 'Sending request…' : 'Submit Consultation Request'}
                    </Button>
                  </form>
                )}
              </Card>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. Geographical Coverage & Map Replacement */}
      <section style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <SectionHeader 
            title="Utility Coordination" 
            subtitle="Geographical Coverage"
            description="Applicable DISCO / utility requirements are assessed according to the project location."
          />
          
          <ScrollReveal delay={100} className="coverage-visual-panel" style={{ minHeight: '320px', backgroundColor: '#ffffff', border: '1px solid rgba(15, 23, 42, 0.06)', borderRadius: '8px', position: 'relative', overflow: 'hidden', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Engineering SVG Grid Pattern */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.04 }}>
              <svg width="100%" height="100%" aria-hidden="true">
                <defs>
                  <pattern id="coverage-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <rect width="30" height="30" fill="none" />
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="var(--text-primary)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#coverage-grid)" />
              </svg>
            </div>
            
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
              <span className="final-cta-eyebrow" style={{ color: 'var(--accent-gold)' }}>UTILITY COORDINATION</span>
              <h3 style={{ fontSize: '24px', fontWeight: '800', margin: '8px 0 12px 0', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>Site Location & Coverage</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-secondary)', margin: 0 }}>
                Share your project location with our team during the feasibility consultation. Site requirements and applicable utility coordination are assessed according to the project's location.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
