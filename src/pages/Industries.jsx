import React from 'react';
import { industryPagesData } from '../data';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';

import residentialImg from '../assets/residential_solar_villa.webp';
import commercialImg from '../assets/commercial_solar_array.webp';
import industrialImg from '../assets/industrial_solar_plant.webp';

const Industries = () => {
  const scrollToSector = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="industries-page">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <Breadcrumbs paths={[{ label: 'Industries', url: '/industries' }]} />
          <h1>Industries We Empower</h1>
          <p>
            Custom grid engineering for homeowners, corporate enterprises, and heavy processing factories.
          </p>

          {/* Quick jump anchor menu */}
          <ScrollReveal delay={100} className="industries-nav-segmented">
            <button onClick={() => scrollToSector('residential')} className="ind-nav-btn">Residential</button>
            <button onClick={() => scrollToSector('commercial')} className="ind-nav-btn">Commercial</button>
            <button onClick={() => scrollToSector('industrial')} className="ind-nav-btn">Industrial</button>
          </ScrollReveal>
        </div>
      </div>

      {/* 1. Residential Sector */}
      <section id="residential">
        <div className="container">
          <ScrollReveal delay={100} className="grid grid-2" style={{ alignItems: 'center', marginBottom: '48px', gap: '40px' }}>
            <div>
              <span className="wireframe-badge">SECTOR: HOUSING & VILLAS</span>
              <h2 style={{ fontSize: '32px', marginBottom: '16px', fontWeight: '700' }}>{industryPagesData.residential.title}</h2>
              <p style={{ fontSize: '15.5px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                {industryPagesData.residential.intro}
              </p>
              <div style={{ marginTop: '24px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Residential System Architecture</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>{industryPagesData.residential.solutionOverview}</p>
              </div>
            </div>
            <div>
              <div className="industry-media-container">
                <img 
                  src={residentialImg} 
                  alt="Pakistan premium residential solar villa project installation" 
                  className="industry-project-image"
                  loading="lazy" 
                  decoding="async"
                />
              </div>
            </div>
          </ScrollReveal>

          <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '24px' }}>Key Residential Benefits:</h3>
          
          <ScrollReveal delay={100} className="industry-benefits-grid">
            {industryPagesData.residential.benefits.map((benefit, i) => {
              const serial = `0${i + 1}`;
              return (
                <div key={i} className="industry-benefit-editorial-card">
                  <div className="industry-benefit-card-header">
                    <span className="industry-benefit-serial">{serial}</span>
                  </div>
                  <div className="industry-benefit-divider-gold"></div>
                  <h4 className="industry-benefit-card-title">{benefit.title}</h4>
                  <p className="industry-benefit-card-desc">{benefit.text}</p>
                </div>
              );
            })}
          </ScrollReveal>

          <ScrollReveal delay={100} className="industry-consultation-banner">
            <div className="industry-banner-text">
              <h4 className="industry-banner-title">Eliminate your residential utility bills today.</h4>
              <p className="industry-banner-desc">Request an engineer to model net-metering exports based on your current home load profile.</p>
            </div>
            <Button to="/contact?sector=residential" variant="primary">Request Home Feasibility Study</Button>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Commercial Sector */}
      <section id="commercial" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <ScrollReveal delay={100} className="grid grid-2" style={{ alignItems: 'center', marginBottom: '48px', gap: '40px' }}>
            <div>
              <div className="industry-media-container">
                <img 
                  src={commercialImg} 
                  alt="Premium office commercial rooftop solar panel array setup" 
                  className="industry-project-image"
                  loading="lazy" 
                  decoding="async"
                />
              </div>
            </div>
            <div>
              <span className="wireframe-badge">SECTOR: OFFICES & SCHOOLS</span>
              <h2 style={{ fontSize: '32px', marginBottom: '16px', fontWeight: '700' }}>{industryPagesData.commercial.title}</h2>
              <p style={{ fontSize: '15.5px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                {industryPagesData.commercial.intro}
              </p>
              <div style={{ marginTop: '24px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Commercial Project Mapping</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>{industryPagesData.commercial.solutionOverview}</p>
              </div>
            </div>
          </ScrollReveal>

          <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '24px' }}>Key Commercial Benefits:</h3>
          
          <ScrollReveal delay={100} className="industry-benefits-grid">
            {industryPagesData.commercial.benefits.map((benefit, i) => {
              const serial = `0${i + 1}`;
              return (
                <div key={i} className="industry-benefit-editorial-card">
                  <div className="industry-benefit-card-header">
                    <span className="industry-benefit-serial">{serial}</span>
                  </div>
                  <div className="industry-benefit-divider-gold"></div>
                  <h4 className="industry-benefit-card-title">{benefit.title}</h4>
                  <p className="industry-benefit-card-desc">{benefit.text}</p>
                </div>
              );
            })}
          </ScrollReveal>

          <ScrollReveal delay={100} className="industry-consultation-banner">
            <div className="industry-banner-text">
              <h4 className="industry-banner-title">Hedge corporate operating budgets against tariff rises.</h4>
              <p className="industry-banner-desc">Generate detailed solar generation charts and investment paybacks for board approvals.</p>
            </div>
            <Button to="/contact?sector=commercial" variant="primary">Request Commercial Consultation</Button>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Industrial Sector */}
      <section id="industrial">
        <div className="container">
          <ScrollReveal delay={100} className="grid grid-2" style={{ alignItems: 'center', marginBottom: '48px', gap: '40px' }}>
            <div>
              <span className="wireframe-badge">SECTOR: TEXTILE & PROCESSING</span>
              <h2 style={{ fontSize: '32px', marginBottom: '16px', fontWeight: '700' }}>{industryPagesData.industrial.title}</h2>
              <p style={{ fontSize: '15.5px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                {industryPagesData.industrial.intro}
              </p>
              <div style={{ marginTop: '24px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Industrial System Engineering</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>{industryPagesData.industrial.solutionOverview}</p>
              </div>
            </div>
            <div>
              <div className="industry-media-container">
                <img 
                  src={industrialImg} 
                  alt="Pakistan heavy industry textile factory rooftop solar array plant" 
                  className="industry-project-image"
                  loading="lazy" 
                  decoding="async"
                />
              </div>
            </div>
          </ScrollReveal>

          <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '24px' }}>Key Industrial Benefits:</h3>
          
          <ScrollReveal delay={100} className="industry-benefits-grid">
            {industryPagesData.industrial.benefits.map((benefit, i) => {
              const serial = `0${i + 1}`;
              return (
                <div key={i} className="industry-benefit-editorial-card">
                  <div className="industry-benefit-card-header">
                    <span className="industry-benefit-serial">{serial}</span>
                  </div>
                  <div className="industry-benefit-divider-gold"></div>
                  <h4 className="industry-benefit-card-title">{benefit.title}</h4>
                  <p className="industry-benefit-card-desc">{benefit.text}</p>
                </div>
              );
            })}
          </ScrollReveal>

          <ScrollReveal delay={100} className="industry-consultation-banner">
            <div className="industry-banner-text">
              <h4 className="industry-banner-title">Stabilize heavy machinery energy inputs and export compliance.</h4>
              <p className="industry-banner-desc">Configure zero-export grids, active safety thermal breakers, and power factor compensation.</p>
            </div>
            <Button to="/contact?sector=industrial" variant="primary">Schedule Industrial Plant Audit</Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Industries;
