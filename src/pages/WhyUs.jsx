import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import { Shield, Cpu, Activity, HeartHandshake } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const WhyUs = () => {
  return (
    <div className="why-us-page">
      {/* SECTION 1 — HERO */}
      <div className="page-hero">
        <div className="container">
          <Breadcrumbs paths={[{ label: 'Why Us', url: '/why-us' }]} />
          <span className="final-cta-eyebrow" style={{ color: 'var(--accent-gold)' }}>WHY EN ENERGY</span>
          <h1 style={{ marginTop: '8px', marginBottom: '16px' }}>Engineering Solar Systems Around Real Energy Needs</h1>
          <p style={{ maxWidth: '720px', margin: '0 auto 32px auto' }}>
            EN Energy approaches every solar project as an engineered energy system. We evaluate consumption, site conditions, equipment compatibility, backup requirements, and long-term operating needs before recommending a solution.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button to="/contact" variant="primary">Start Your Feasibility Review</Button>
            <Button to="/solutions" variant="outline">Explore Our Solutions</Button>
          </div>
        </div>
      </div>

      {/* SECTION 2 — WHY CHOOSE EN ENERGY */}
      <section className="why-choose-us-section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px auto' }}>
            <span className="featured-tag">BENEFITS & CAPABILITIES</span>
            <h2 style={{ fontSize: '32px', fontWeight: '800', marginTop: '12px', color: 'var(--text-primary)' }}>Why Choose EN Energy</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Our systems are designed by engineers to deliver long-term reliability and stable power offsets.</p>
          </div>

          <ScrollReveal delay={100} className="why-choose-grid">
            <div className="why-choose-card">
              <div className="why-choose-icon-box">
                <Cpu size={24} />
              </div>
              <span className="why-choose-num">01</span>
              <h3 className="why-choose-title">Engineered Solutions</h3>
              <p className="why-choose-desc">
                Systems are planned around the site's available space, electricity consumption, load profile, energy requirements, and operating conditions.
              </p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon-box">
                <Shield size={24} />
              </div>
              <span className="why-choose-num">02</span>
              <h3 className="why-choose-title">Proven Components</h3>
              <p className="why-choose-desc">
                Our solution catalog includes established solar panels, inverters, batteries, and electrical equipment selected according to project requirements and compatibility.
              </p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon-box">
                <Activity size={24} />
              </div>
              <span className="why-choose-num">03</span>
              <h3 className="why-choose-title">Technical Visibility</h3>
              <p className="why-choose-desc">
                Compatible monitoring platforms provide visibility into generation and system operating information, helping users understand system performance.
              </p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon-box">
                <HeartHandshake size={24} />
              </div>
              <span className="why-choose-num">04</span>
              <h3 className="why-choose-title">End-to-End Support</h3>
              <p className="why-choose-desc">
                Support extends across feasibility, system design, equipment selection, installation coordination, net-metering requirements, commissioning, and ongoing technical guidance.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3 — OUR ENGINEERING APPROACH */}
      <section className="engineering-approach-section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px auto' }}>
            <span className="featured-tag">OUR PROCESS</span>
            <h2 style={{ fontSize: '32px', fontWeight: '800', marginTop: '12px', color: 'var(--text-primary)' }}>Our Engineering Approach</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Every deployment follows a systematic timeline to ensure compliance, safety, and operational excellence.</p>
          </div>

          <ScrollReveal delay={100} className="approach-timeline-row">
            <div className="approach-step-card">
              <span className="approach-step-num">01</span>
              <h4 className="approach-step-title">Understand</h4>
              <p className="approach-step-desc">
                Review electricity bills, load patterns, roof conditions, available space, and project objectives.
              </p>
            </div>
            
            <div className="approach-step-card">
              <span className="approach-step-num">02</span>
              <h4 className="approach-step-title">Engineer</h4>
              <p className="approach-step-desc">
                Develop an appropriately sized system and select compatible components based on the site's requirements.
              </p>
            </div>

            <div className="approach-step-card">
              <span className="approach-step-num">03</span>
              <h4 className="approach-step-title">Implement</h4>
              <p className="approach-step-desc">
                Coordinate installation, electrical configuration, safety checks, and relevant utility requirements.
              </p>
            </div>

            <div className="approach-step-card">
              <span className="approach-step-num">04</span>
              <h4 className="approach-step-title">Support</h4>
              <p className="approach-step-desc">
                Provide technical guidance and help customers understand system performance and operational requirements.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 4 — WHAT MAKES OUR APPROACH DIFFERENT */}
      <section className="diff-approach-section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px auto' }}>
            <span className="featured-tag">METHODOLOGY</span>
            <h2 style={{ fontSize: '32px', fontWeight: '800', marginTop: '12px', color: 'var(--text-primary)' }}>What Makes Our Approach Different</h2>
            <p style={{ color: 'var(--text-secondary)' }}>We focus on transparency and long-term performance rather than speed of installation.</p>
          </div>

          <ScrollReveal delay={100} className="diff-panels-grid">
            <div className="diff-panel-item">
              <h3 className="diff-panel-title">Site-Specific Design</h3>
              <p className="diff-panel-desc">
                No two properties have identical energy requirements. System recommendations should reflect the actual site and consumption profile.
              </p>
            </div>
            
            <div className="diff-panel-item">
              <h3 className="diff-panel-title">Transparent Recommendations</h3>
              <p className="diff-panel-desc">
                Explain system capacity, component selection, expected generation assumptions, and important project considerations clearly.
              </p>
            </div>

            <div className="diff-panel-item">
              <h3 className="diff-panel-title">Long-Term Thinking</h3>
              <p className="diff-panel-desc">
                Consider future energy requirements, backup needs, equipment compatibility, maintenance, and operating conditions rather than focusing only on initial installation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 5 — SECTORS WE SERVE */}
      <section className="sectors-serve-section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px auto' }}>
            <span className="featured-tag">APPLICATIONS</span>
            <h2 style={{ fontSize: '32px', fontWeight: '800', marginTop: '12px', color: 'var(--text-primary)' }}>Sectors We Serve</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Tailoring engineered solar configurations to residential, commercial, and industrial sites.</p>
          </div>

          <ScrollReveal delay={100} className="sectors-serve-grid">
            <div className="sector-serve-card">
              <h3 className="sector-card-heading">Residential</h3>
              <p className="sector-card-desc">
                Solar systems designed around household consumption, available rooftop space, backup requirements, and future energy needs.
              </p>
              <Link to="/solutions?sector=residential" className="sector-card-link">
                View Residential Solutions →
              </Link>
            </div>

            <div className="sector-serve-card">
              <h3 className="sector-card-heading">Commercial</h3>
              <p className="sector-card-desc">
                Solutions planned around daytime demand, rooftop conditions, system capacity, and continuity of business operations.
              </p>
              <Link to="/solutions?sector=commercial" className="sector-card-link">
                View Commercial Solutions →
              </Link>
            </div>

            <div className="sector-serve-card">
              <h3 className="sector-card-heading">Industrial</h3>
              <p className="sector-card-desc">
                Large-scale energy systems evaluated around high loads, equipment compatibility, generation profiles, and operating conditions.
              </p>
              <Link to="/solutions?sector=industrial" className="sector-card-link">
                View Industrial Solutions →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA */}
      <section className="final-cta-section">
        {/* Decorative Grid Pattern */}
        <div className="final-cta-grid-bg">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="why-cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none" />
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#why-cta-grid)" />
          </svg>
        </div>

        <div className="container final-cta-container">
          <span className="final-cta-eyebrow">READY TO PLAN?</span>
          <h2 className="final-cta-heading">Let's Engineer Your Solar System</h2>
          <p className="final-cta-description">
            Start with a feasibility review tailored to your electricity consumption, available space, system requirements, and project goals.
          </p>
          <div className="final-cta-buttons">
            <Link to="/contact" className="final-cta-btn-primary">
              <span>Book a Feasibility Study</span>
              <span className="cta-btn-arrow">→</span>
            </Link>
            <Link to="/contact?type=consultation" className="final-cta-btn-secondary">
              <span>Speak to an Engineer</span>
              <span className="cta-btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
