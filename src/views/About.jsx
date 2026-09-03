'use client';

import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  return (
    <div className="about-page">
      {/* 1. Page Hero */}
      <div className="page-hero">
        <div className="container">
          <Breadcrumbs paths={[{ label: 'About Us', url: '/about' }]} />
          <h1>About ES Energy</h1>
          <p>
            Engineering-focused solar solutions built around real energy needs.
          </p>
        </div>
      </div>

      {/* 2. Company Introduction */}
      <section style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <ScrollReveal delay={100} className="grid grid-2" style={{ alignItems: 'center', gap: '40px' }}>
            <div>
              <span className="featured-tag">COMPANY PROFILE</span>
              <h2 style={{ fontSize: '32px', marginBottom: '16px', fontWeight: '800', color: 'var(--text-primary)' }}>Integrity in Solar Integration</h2>
              <p style={{ fontSize: '15px', lineHeight: '1.65', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                ES Energy was established to deliver professional solar design and system integration. We focus on treating every rooftop and commercial project as an engineered installation, assessing building requirements, load profiles, structural components, and system configurations to ensure reliable, long-term power generation.
              </p>
              <p style={{ fontSize: '15px', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                We assist customers throughout the project lifecycle: from initial site feasibility assessments, custom sizing, and component selection, to commissioning documentation and performance visibility.
              </p>
            </div>
            <div>
              {/* Engineering blueprint SVG visual */}
              <div className="engineering-blueprint-box" style={{ minHeight: '300px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', position: 'relative', overflow: 'hidden', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Grid Background Pattern */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.04 }}>
                  <svg width="100%" height="100%" aria-hidden="true">
                    <defs>
                      <pattern id="blueprint-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect width="20" height="20" fill="none" />
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--text-primary)" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
                  </svg>
                </div>
                {/* Abstract Technical Blueprint Graphic */}
                <svg viewBox="0 0 300 200" width="100%" height="100%" style={{ opacity: 0.85, maxWidth: '280px', position: 'relative', zIndex: 1 }} aria-hidden="true">
                  <polygon points="50,150 150,50 250,150" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <g transform="translate(0, 0)">
                    <polygon points="90,120 115,95 135,115 110,140" fill="rgba(194, 155, 56, 0.08)" stroke="var(--accent-gold)" strokeWidth="1.5" />
                    <polygon points="120,120 145,95 165,115 140,140" fill="rgba(194, 155, 56, 0.08)" stroke="var(--accent-gold)" strokeWidth="1.5" />
                    <polygon points="150,120 175,95 195,115 170,140" fill="rgba(194, 155, 56, 0.08)" stroke="var(--accent-gold)" strokeWidth="1.5" />
                  </g>
                  <line x1="85" y1="150" x2="215" y2="150" stroke="var(--text-muted)" strokeWidth="1" />
                  <line x1="85" y1="146" x2="85" y2="154" stroke="var(--text-muted)" strokeWidth="1" />
                  <line x1="215" y1="146" x2="215" y2="154" stroke="var(--text-muted)" strokeWidth="1" />
                  <text x="150" y="172" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono, monospace)" fill="var(--text-muted)" fontWeight="600" letterSpacing="0.05em">ROOFTOP ARRAY LAYOUT PLAN</text>
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Our Approach */}
      <section style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span className="featured-tag">METHODOLOGY</span>
              <h2 style={{ fontSize: '32px', fontWeight: '800', marginTop: '12px', color: 'var(--text-primary)' }}>Our Approach</h2>
              <p style={{ color: 'var(--text-secondary)' }}>How we deliver thoughtfully sized solar solutions.</p>
            </div>
            
            <ScrollReveal delay={100} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'flex', gap: '24px', borderLeft: '3px solid var(--accent-gold)', paddingLeft: '24px' }}>
                <div style={{ fontWeight: '800', fontSize: '18px', color: 'var(--accent-gold)', minWidth: '40px', fontFamily: 'var(--font-mono, monospace)' }}>01</div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)' }}>Understand the Site</h4>
                  <p style={{ margin: '6px 0 0 0', fontSize: '14px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    Evaluate consumption, available space, roof conditions and project requirements.
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '24px', borderLeft: '3px solid var(--accent-gold)', paddingLeft: '24px' }}>
                <div style={{ fontWeight: '800', fontSize: '18px', color: 'var(--accent-gold)', minWidth: '40px', fontFamily: 'var(--font-mono, monospace)' }}>02</div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)' }}>Engineer the System</h4>
                  <p style={{ margin: '6px 0 0 0', fontSize: '14px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    Develop the appropriate solar configuration, component selection and electrical/structural requirements.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '24px', borderLeft: '3px solid var(--accent-gold)', paddingLeft: '24px' }}>
                <div style={{ fontWeight: '800', fontSize: '18px', color: 'var(--accent-gold)', minWidth: '40px', fontFamily: 'var(--font-mono, monospace)' }}>03</div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)' }}>Deliver & Support</h4>
                  <p style={{ margin: '6px 0 0 0', fontSize: '14px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    Coordinate installation, commissioning, documentation and ongoing technical support.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <ScrollReveal delay={100} className="grid grid-2" style={{ gap: '30px' }}>
            <Card padding="30px">
              <span className="featured-tag">CORE MISSION</span>
              <h3 style={{ fontSize: '22px', fontWeight: '800', margin: '12px 0 10px 0', color: 'var(--text-primary)' }}>Our Mission</h3>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                Deliver thoughtfully engineered solar systems for residential, commercial and industrial applications, balancing energy performance, safety, durability and long-term value.
              </p>
            </Card>
            <Card padding="30px">
              <span className="featured-tag">LONG-TERM VISION</span>
              <h3 style={{ fontSize: '22px', fontWeight: '800', margin: '12px 0 10px 0', color: 'var(--text-primary)' }}>Our Vision</h3>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                Build a trusted engineering-led solar platform recognized for thoughtful system design, transparent recommendations and responsible project execution.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. The ES Energy Advantage */}
      <section style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="featured-tag">BENEFITS</span>
            <h2 style={{ fontSize: '32px', fontWeight: '800', marginTop: '12px', color: 'var(--text-primary)' }}>The ES Energy Advantage</h2>
            <p style={{ color: 'var(--text-secondary)' }}>We implement design practices that support system lifespan and safety.</p>
          </div>
          <ScrollReveal delay={100} className="grid grid-3" style={{ gap: '24px' }}>
            <Card hoverable={false} padding="30px">
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--accent-gold)', marginBottom: '12px', fontFamily: 'var(--font-mono, monospace)' }}>01</div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 8px 0', color: 'var(--text-primary)' }}>Site-Specific Engineering</h4>
              <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                Systems are evaluated around site conditions, energy demand, available roof area and operating requirements.
              </p>
            </Card>
            <Card hoverable={false} padding="30px">
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--accent-gold)', marginBottom: '12px', fontFamily: 'var(--font-mono, monospace)' }}>02</div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 8px 0', color: 'var(--text-primary)' }}>Quality Components</h4>
              <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                Recommend suitable solar panels, inverters, batteries and electrical equipment based on application requirements rather than generic packages.
              </p>
            </Card>
            <Card hoverable={false} padding="30px">
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--accent-gold)', marginBottom: '12px', fontFamily: 'var(--font-mono, monospace)' }}>03</div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 8px 0', color: 'var(--text-primary)' }}>Electrical & Structural Safety</h4>
              <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                Consider appropriate protection, mounting, earthing, cable routing and system configuration as part of the engineering process.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Core Capabilities & SVG Schematic */}
      <section style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <ScrollReveal delay={100} className="grid grid-2" style={{ alignItems: 'center', gap: '40px' }}>
            <div>
              {/* Technical Single-Line Diagram SVG */}
              <div className="single-line-diagram-box" style={{ minHeight: '300px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', position: 'relative', overflow: 'hidden', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 320 200" width="100%" height="100%" style={{ maxWidth: '300px' }} aria-hidden="true">
                  <g transform="translate(25, 90)">
                    <rect x="-14" y="-20" width="28" height="40" rx="1" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" />
                    <line x1="-14" y1="-7" x2="14" y2="-7" stroke="var(--text-primary)" strokeWidth="1" />
                    <line x1="-14" y1="7" x2="14" y2="7" stroke="var(--text-primary)" strokeWidth="1" />
                    <line x1="-5" y1="-20" x2="-5" y2="20" stroke="var(--text-primary)" strokeWidth="1" />
                    <line x1="5" y1="-20" x2="5" y2="20" stroke="var(--text-primary)" strokeWidth="1" />
                    <text x="0" y="32" textAnchor="middle" fontSize="7" fontWeight="700" fill="var(--text-secondary)" letterSpacing="0.05em">PV ARRAY</text>
                  </g>
                  <line x1="39" y1="90" x2="80" y2="90" stroke="var(--text-primary)" strokeWidth="1.5" strokeDasharray="3 3" />
                  
                  <g transform="translate(90, 90)">
                    <circle cx="0" cy="0" r="9" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" />
                    <line x1="-5" y1="5" x2="5" y2="-5" stroke="var(--text-primary)" strokeWidth="1.5" />
                    <text x="0" y="20" textAnchor="middle" fontSize="7" fontWeight="700" fill="var(--text-secondary)" letterSpacing="0.05em">DC SWITCH</text>
                  </g>
                  <line x1="99" y1="90" x2="135" y2="90" stroke="var(--text-primary)" strokeWidth="1.5" strokeDasharray="3 3" />

                  <g transform="translate(160, 90)">
                    <rect x="-18" y="-18" width="36" height="36" rx="2" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" />
                    <line x1="-18" y1="18" x2="18" y2="-18" stroke="var(--accent-gold)" strokeWidth="1" opacity="0.3" />
                    <text x="-9" y="-5" textAnchor="middle" fontSize="8" fill="var(--text-primary)">=</text>
                    <text x="9" y="11" textAnchor="middle" fontSize="8" fill="var(--text-primary)">~</text>
                    <text x="0" y="29" textAnchor="middle" fontSize="7" fontWeight="700" fill="var(--text-secondary)" letterSpacing="0.05em">INVERTER</text>
                  </g>
                  <line x1="178" y1="90" x2="225" y2="90" stroke="var(--text-primary)" strokeWidth="1.5" strokeDasharray="3 3" />

                  <g transform="translate(240, 90)">
                    <circle cx="0" cy="0" r="11" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" />
                    <path d="M -5,0 L 5,0 M 0,-5 L 0,5" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" />
                    <text x="0" y="22" textAnchor="middle" fontSize="7" fontWeight="700" fill="var(--text-secondary)" letterSpacing="0.05em">AC BOARD</text>
                  </g>
                  
                  <line x1="251" y1="90" x2="295" y2="90" stroke="var(--text-primary)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <text x="160" y="160" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono, monospace)" fill="var(--text-muted)" fontWeight="600" letterSpacing="0.05em">SINGLE LINE DIAGRAM SCHEMATIC</text>
                </svg>
              </div>
            </div>
            <div>
              <span className="featured-tag">CORE CAPABILITIES</span>
              <h2 style={{ fontSize: '32px', marginBottom: '16px', fontWeight: '800', color: 'var(--text-primary)' }}>In-House System Design</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px' }}>
                We believe that robust system architecture starts on the drafting board. Our design scope includes:
              </p>
              <ul style={{ paddingLeft: '20px', fontSize: '14px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li>Solar system sizing and configuration</li>
                <li>Electrical single-line diagram planning</li>
                <li>Rooftop and mounting considerations</li>
                <li>Grid-connected and hybrid system planning</li>
                <li>Monitoring and system-performance considerations</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Standards & Compliance Section */}
      <section style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <SectionHeader 
            title="Standards & Compliance" 
            subtitle="Regulations"
            description="Applicable projects are evaluated against relevant Pakistani utility requirements and electrical/solar standards."
          />
          
          <ScrollReveal delay={100} style={{ maxWidth: '720px', margin: '0 auto', backgroundColor: '#ffffff', border: '1px solid rgba(15, 23, 42, 0.05)', borderRadius: '8px', padding: '40px', textAlign: 'center' }}>
            <span className="final-cta-eyebrow" style={{ color: 'var(--accent-gold)' }}>COMPLIANCE REVIEW</span>
            <h3 style={{ fontSize: '22px', fontWeight: '800', margin: '12px 0 16px 0', color: 'var(--text-primary)' }}>Engineering Verification</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-secondary)', margin: 0 }}>
              Every solar system integrated by ES Energy is evaluated against local grid code standards and utility coordination checklists. We coordinate connection permits, verify safety requirements, and plan earthing protection grids in compliance with Pakistan utility standards.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)', textAlign: 'center', padding: '100px 0' }}>
        <ScrollReveal delay={100} className="container" style={{ maxWidth: '600px' }}>
          <span className="featured-tag">READY TO PLAN?</span>
          <h2 style={{ fontSize: '32px', fontWeight: '800', marginTop: '12px', marginBottom: '16px', color: 'var(--text-primary)' }}>Plan Your Solar Project</h2>
          <p style={{ marginBottom: '24px', fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Start with a feasibility discussion tailored to your energy consumption, available space and project requirements.
          </p>
          <Button to="/contact#contact-form" variant="primary">
            Schedule a Site Audit &rarr;
          </Button>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default About;
