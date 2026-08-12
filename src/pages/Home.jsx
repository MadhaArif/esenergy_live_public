import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { statsData, brandIntroData, whyChooseUsData, howItWorksSteps, impactStats, productsData, projectsData, techPartners, blogArticles, faqsData, solutionCategories, solarCalculatorConfig } from '../data';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import Card from '../components/Card';
import FAQAccordion from '../components/FAQAccordion';
import ProductCard from '../components/ProductCard';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';

// HERO IMAGE CONFIGURATION (Easily swap this URL with a licensed company/project photograph later)
const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&h=960&q=80";

// BRAND INTRO IMAGE CONFIGURATION (Easily swap this URL with a licensed company/project photograph later)
const BRAND_INTRO_IMAGE_URL = "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&h=900&q=80";

const Home = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const uniqueBrands = [...new Set(productsData.map(p => p.brand))].filter(Boolean);
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(true);

  React.useEffect(() => {
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
  }, []);

  const handleMouseMove = (e) => {
    if (isTouch) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / (width / 2);
    const y = (clientY - top - height / 2) / (height / 2);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };
  
  const uniqueBrandsList = React.useMemo(() => {
    return uniqueBrands.map(brand => {
      const brandProducts = productsData.filter(p => p.brand === brand);
      const cats = [...new Set(brandProducts.map(p => {
        if (p.category === 'inverters') return 'Solar Inverters';
        if (p.category === 'panels') return 'Solar Panels';
        if (p.category === 'batteries') return 'Lithium Batteries';
        if (p.category === 'vfd') return 'VFD Inverters';
        return 'Solar Equipment';
      }))];
      return {
        name: brand,
        categories: cats.join(' · ')
      };
    });
  }, [uniqueBrands]);

  const clientPerspectivesData = [
    {
      category: "RESIDENTIAL",
      serial: "01",
      heading: "Designed Around Everyday Energy Needs",
      description: "Residential systems are planned around household consumption, available rooftop space, backup requirements, and future energy needs."
    },
    {
      category: "COMMERCIAL",
      serial: "02",
      heading: "Built Around Operational Demand",
      description: "Commercial installations are evaluated around daytime load profiles, rooftop conditions, system capacity, and continuity of business operations."
    },
    {
      category: "INDUSTRIAL",
      serial: "03",
      heading: "Engineered for High-Demand Environments",
      description: "Industrial systems require careful consideration of larger loads, equipment compatibility, generation profiles, and operating conditions."
    }
  ];

  // Calculator State
  const [bill, setBill] = useState(solarCalculatorConfig.defaultBill);
  const [calcResult, setCalcResult] = useState(null);

  const handleBillChange = (val) => {
    // Keep raw numeric input or handle empty inputs gracefully
    if (val === '') {
      setBill('');
      return;
    }
    const cleanNum = Number(val);
    setBill(cleanNum);
  };

  const calculateSolar = (e) => {
    if (e) e.preventDefault();
    
    // Bounds check
    const cleanBill = Math.max(
      solarCalculatorConfig.minBill,
      Math.min(solarCalculatorConfig.maxBill, Number(bill) || 0)
    );

    // Synchronize current bill value if it was out of bounds
    if (cleanBill !== bill) {
      setBill(cleanBill);
    }

    // Calculation model:
    // 1. Average Tariff is PKR per kWh unit consumed. Monthly usage (kWh) = bill / averageTariff
    const monthlyKWh = cleanBill / solarCalculatorConfig.averageTariff;
    
    // 2. Generation capacity (kW) needed = monthly consumption (kWh) / yield per kW per month
    const systemSizeKW = Number((monthlyKWh / solarCalculatorConfig.estimatedYield).toFixed(1));
    
    // 3. Panel count required based on panel wattage (W)
    const panelsRequired = Math.ceil((systemSizeKW * 1000) / solarCalculatorConfig.panelWattage);
    
    // 4. Monthly yield (kWh) from calculated capacity
    const estimatedGenKWh = Math.round(systemSizeKW * solarCalculatorConfig.estimatedYield);

    // 5. Offset of grid consumption (%)
    const offsetPercentage = solarCalculatorConfig.averageOffset;

    setCalcResult({
      kw: systemSizeKW,
      panels: panelsRequired,
      generation: estimatedGenKWh,
      offset: offsetPercentage,
    });
  };

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section 
        className="premium-hero"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container">
          <div className="hero-grid">
            {/* Left Column: Text and CTAs */}
            <div className="hero-text-col animate-hero-text">
              <span className="hero-eyebrow">SMART SOLAR • ENGINEERED FOR PERFORMANCE</span>
              <h1 className="hero-headline">Power Your Future With Smarter Solar.</h1>
              <p className="hero-description">
                Engineered solar solutions designed for reliable energy, greater efficiency, and long-term value.
              </p>
              <div className="hero-cta-group">
                <Button to="/contact" className="btn-hero-primary">
                  Get a Free Consultation →
                </Button>
                <Button to="/solutions" className="btn-hero-secondary">
                  Explore Solutions →
                </Button>
              </div>
            </div>

            {/* Right Column: Media composition and Floating Card */}
            <div className="hero-media-col animate-hero-media">
              <div className="hero-image-wrapper" style={{ overflow: 'hidden', borderRadius: '8px' }}>
                <img 
                  src={HERO_IMAGE_URL} 
                  alt="Premium modern architectural home with a high-efficiency rooftop solar panel installation under natural sunlight" 
                  className="hero-image"
                  loading="eager"
                  style={{
                    transform: !isTouch ? `scale(1.02) translate(${mousePos.x * 6}px, ${mousePos.y * 6}px)` : 'none',
                    transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
                
                {/* Floating Glassmorphic Info Card */}
                <div 
                  className="hero-floating-card"
                  style={{
                    transform: !isTouch ? `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)` : 'none',
                    transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <span className="card-label">SMART ENERGY</span>
                  <span className="card-value">Designed around your needs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Marquee Section */}
      <section className="brand-marquee-section">
        <div className="container">
          <span className="marquee-eyebrow">TRUSTED TECHNOLOGY PARTNERS</span>
          <div className="marquee-wrapper">
            <div className="marquee-content">
              {uniqueBrands.map((brand, i) => (
                <span key={`brand-1-${i}`} className="marquee-brand-item">
                  {brand}
                </span>
              ))}
              {uniqueBrands.map((brand, i) => (
                <span key={`brand-2-${i}`} className="marquee-brand-item">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust / Credibility Section */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-header-grid">
            <div>
              <span className="trust-eyebrow">WHY EN ENERGY</span>
              <h2 className="trust-heading">Engineering confidence into every solar decision.</h2>
            </div>
            <div>
              <p className="trust-description">
                From carefully selected technology to thoughtful system design, every solution is built around performance, reliability, and long-term value.
              </p>
            </div>
          </div>

          <div className="trust-pillars-grid">
            <div className="trust-pillar-item">
              <span className="trust-pillar-number">01</span>
              <h3 className="trust-pillar-title">Premium Components</h3>
              <p className="trust-pillar-text">
                Carefully selected solar technology built for dependable performance.
              </p>
            </div>
            <div className="trust-pillar-item">
              <span className="trust-pillar-number">02</span>
              <h3 className="trust-pillar-title">Expert Engineering</h3>
              <p className="trust-pillar-text">
                Solutions designed around the unique energy needs of every project.
              </p>
            </div>
            <div className="trust-pillar-item">
              <span className="trust-pillar-number">03</span>
              <h3 className="trust-pillar-title">End-to-End Support</h3>
              <p className="trust-pillar-text">
                From consultation and system design to installation and ongoing support.
              </p>
            </div>
            <div className="trust-pillar-item">
              <span className="trust-pillar-number">04</span>
              <h3 className="trust-pillar-title">Long-Term Performance</h3>
              <p className="trust-pillar-text">
                Solar systems designed with efficiency, reliability, and future needs in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Brand Introduction Section */}
      <section className="brand-intro-section">
        <div className="container">
          <div className="brand-intro-grid">
            {/* Left Column: Text & CTA Link */}
            <div className="brand-intro-text-col">
              <span className="brand-intro-eyebrow">THE EN ENERGY APPROACH</span>
              <h2 className="brand-intro-headline">Solar designed around how you live, work, and grow.</h2>
              <p className="brand-intro-description">
                We believe solar should be more than an installation. It should be a carefully engineered energy system built around your property, your consumption, and your long-term goals.
              </p>
              <Button to="/about" className="btn-brand-intro-link">
                Discover Our Approach →
              </Button>
            </div>

            {/* Right Column: Premium Photo & Caption */}
            <div className="brand-intro-media-col">
              <div className="brand-intro-image-wrapper">
                <img 
                  src={BRAND_INTRO_IMAGE_URL} 
                  alt="High-efficiency solar cells reflecting bright natural sunlight" 
                  className="brand-intro-image"
                  loading="lazy"
                />
              </div>
              <p className="brand-intro-caption">
                Solar infrastructure, thoughtfully engineered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Solutions / Products Section */}
      <section className="solutions-section">
        <div className="container">
          <div className="solutions-header-container">
            <span className="solutions-eyebrow">SOLAR SOLUTIONS</span>
            <h2 className="solutions-heading">The technology behind smarter energy.</h2>
            <p className="solutions-desc">
              Explore carefully selected solar technologies engineered for dependable performance across residential, commercial, and industrial applications.
            </p>
          </div>
          
          {/* Category Navigation Tabs */}
          <div className="solutions-tabs-container">
            <div className="solutions-tabs">
              {solutionCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`solutions-tab-btn ${activeCategory === category.id ? 'active' : ''}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid / Refined Uniform Layout */}
          <div className="solutions-category-grid">
            {activeCategory === 'all' ? (
              <>
                <ProductCard
                  product={productsData.find(p => p.id === 'knox-krypton-6200') || productsData[0]}
                  onSelect={(p) => navigate(`/solutions?id=${p.id}`)}
                />
                <ProductCard
                  product={productsData.find(p => p.id === 'longi-horizon-225w') || productsData[3]}
                  onSelect={(p) => navigate(`/solutions?id=${p.id}`)}
                />
                <ProductCard
                  product={productsData.find(p => p.id === 'coretech-luxwatt-5kw') || productsData[4]}
                  onSelect={(p) => navigate(`/solutions?id=${p.id}`)}
                />
              </>
            ) : (
              productsData
                .filter((p) => p.category === activeCategory)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={(p) => navigate(`/solutions?id=${p.id}`)}
                  />
                ))
            )}
          </div>

          {/* Explore All Solutions footer link */}
          <div className="solutions-footer-cta">
            <a href="/solutions" onClick={(e) => {
              e.preventDefault();
              navigate('/solutions');
            }} className="btn-solutions-all">
              Explore All Solutions →
            </a>
          </div>
        </div>
      </section>

      {/* 5. Industries We Serve Section */}
      <section className="homepage-industries-section">
        <div className="container">
          <div className="industries-header-container">
            <span className="industries-eyebrow">SECTORS WE EMPOWER</span>
            <h2 className="industries-heading">Custom Solutions by Industry Sector</h2>
            <p className="industries-description">
              We develop custom structures tailored to the load profiles and regulatory requirements of distinct economic sectors.
            </p>
          </div>

          <div className="homepage-industries-grid">
            {/* Card 1 */}
            <div 
              className="industry-editorial-panel"
              onClick={() => navigate('/industries')}
            >
              <div className="industry-panel-motif-container">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="var(--accent-gold)" strokeWidth="1" className="industry-panel-motif" aria-hidden="true">
                  <path d="M20,80 L20,50 L50,20 L80,50 L80,80 Z" />
                  <path d="M10,50 L50,18 L90,50" />
                  <rect x="42" y="60" width="16" height="20" />
                  <line x1="55" y1="30" x2="75" y2="46" />
                  <line x1="60" y1="26" x2="80" y2="42" />
                  <line x1="57" y1="28" x2="77" y2="44" strokeDasharray="2,2" />
                </svg>
              </div>
              <div className="industry-panel-header">
                <span className="industry-eyebrow-small">01 / RESIDENTIAL</span>
                <div className="industry-gold-line-small"></div>
              </div>
              <h3 className="industry-panel-title">Residential</h3>
              <p className="industry-panel-desc">
                Eliminate residential utility grids billing through net-metered arrays and backup battery integrations designed for urban villas.
              </p>
              <a href="/industries" className="industry-panel-cta" onClick={(e) => e.stopPropagation()}>
                <span>Residential Overview</span>
                <span className="industry-cta-arrow">→</span>
              </a>
            </div>

            {/* Card 2 */}
            <div 
              className="industry-editorial-panel"
              onClick={() => navigate('/industries')}
            >
              <div className="industry-panel-motif-container">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="var(--accent-gold)" strokeWidth="1" className="industry-panel-motif" aria-hidden="true">
                  <rect x="25" y="20" width="50" height="60" />
                  <line x1="37.5" y1="20" x2="37.5" y2="80" strokeDasharray="2,2" />
                  <line x1="50" y1="20" x2="50" y2="80" />
                  <line x1="62.5" y1="20" x2="62.5" y2="80" strokeDasharray="2,2" />
                  <line x1="25" y1="35" x2="75" y2="35" />
                  <line x1="25" y1="50" x2="75" y2="50" />
                  <line x1="25" y1="65" x2="75" y2="65" />
                  <path d="M30,12 L45,12 L40,20 L25,20 Z" />
                  <path d="M55,12 L70,12 L65,20 L50,20 Z" />
                </svg>
              </div>
              <div className="industry-panel-header">
                <span className="industry-eyebrow-small">02 / COMMERCIAL</span>
                <div className="industry-gold-line-small"></div>
              </div>
              <h3 className="industry-panel-title">Commercial</h3>
              <p className="industry-panel-desc">
                Hedge corporate campuses, schools, and offices against electricity tariff adjustments. Quick payback schedules.
              </p>
              <a href="/industries" className="industry-panel-cta" onClick={(e) => e.stopPropagation()}>
                <span>Commercial Overview</span>
                <span className="industry-cta-arrow">→</span>
              </a>
            </div>

            {/* Card 3 */}
            <div 
              className="industry-editorial-panel"
              onClick={() => navigate('/industries')}
            >
              <div className="industry-panel-motif-container">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="var(--accent-gold)" strokeWidth="1" className="industry-panel-motif" aria-hidden="true">
                  <path d="M15,80 L15,50 L35,35 L35,50 L55,35 L55,50 L75,35 L75,80 Z" />
                  <rect x="78" y="25" width="8" height="55" />
                  <line x1="78" y1="35" x2="86" y2="35" />
                  <line x1="20" y1="60" x2="70" y2="60" strokeDasharray="2,2" />
                  <line x1="20" y1="70" x2="70" y2="70" />
                </svg>
              </div>
              <div className="industry-panel-header">
                <span className="industry-eyebrow-small">03 / INDUSTRIAL</span>
                <div className="industry-gold-line-small"></div>
              </div>
              <h3 className="industry-panel-title">Industrial</h3>
              <p className="industry-panel-desc">
                High-capacity MW-scale solutions engineered to integrate with grid stations and generator farms for uninterrupted supply.
              </p>
              <a href="/industries" className="industry-panel-cta" onClick={(e) => e.stopPropagation()}>
                <span>Industrial Overview</span>
                <span className="industry-cta-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us Section */}
      <section className="why-choose-section" id="why-choose-us">
        <div className="container">
          <div className="why-choose-header-container">
            <span className="why-choose-eyebrow">WHY EN ENERGY</span>
            <h2 className="why-choose-heading">Quality Engineering at Every Stage</h2>
            <p className="why-choose-description">
              Our primary focus is hardware reliability, structural safety, and optimized grid synchronization.
            </p>
          </div>

          <div className="why-choose-grid-2x2">
            {whyChooseUsData.map((item, idx) => {
              const serialStr = `0${idx + 1}`;
              const icons = [
                <svg key="ic1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22v-8m0-4V2m0 8l-4 4m4-4l4 4" />
                  <circle cx="12" cy="12" r="1" fill="var(--accent-gold)" />
                  <path d="M6 18c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                </svg>,
                <svg key="ic2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="12" y1="3" x2="12" y2="21" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="7.5" x2="21" y2="7.5" />
                  <line x1="3" y1="16.5" x2="21" y2="16.5" />
                  <line x1="7.5" y1="3" x2="7.5" y2="21" />
                  <line x1="16.5" y1="3" x2="16.5" y2="21" />
                </svg>,
                <svg key="ic3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 3v18h18" />
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7-4.8 4.8" />
                  <circle cx="18.7" cy="8" r="1.5" fill="var(--accent-gold)" />
                </svg>,
                <svg key="ic4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 11l2 2 4-4" />
                </svg>
              ];

              return (
                <div key={item.id} className="why-choose-editorial-card">
                  <div className="why-choose-card-top">
                    <span className="why-choose-serial">{serialStr}</span>
                    <div className="why-choose-icon-wrap">{icons[idx]}</div>
                  </div>
                  <div className="why-choose-divider-gold"></div>
                  <h3 className="why-choose-card-title">{item.title}</h3>
                  <p className="why-choose-card-desc">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. How It Works Section */}
      <section className="timeline-section" id="why-choose-us-process">
        <div className="container">
          <div className="timeline-header-container">
            <span className="timeline-eyebrow">OUR PROCESS</span>
            <h2 className="timeline-heading">From Feasibility to Commissioning</h2>
            <p className="timeline-description">
              A structured engineering process designed to move every solar project from initial assessment to safe, compliant operation.
            </p>
          </div>

          <div className="timeline-journey-container">
            <div className="timeline-spine"></div>

            {howItWorksSteps.map((step, idx) => {
              const icons = [
                <svg key="tic1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="timeline-step-icon" aria-hidden="true">
                  <path d="M2 20h20" />
                  <path d="M5 17l5-5 5 5" />
                  <path d="M9 13l3-3 6 6" />
                  <circle cx="12" cy="5" r="2" />
                </svg>,
                <svg key="tic2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="timeline-step-icon" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="12" y1="3" x2="12" y2="21" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="12" x2="12" y2="3" />
                  <line x1="12" y1="3" x2="21" y2="12" />
                  <line x1="3" y1="12" x2="12" y2="21" />
                  <line x1="12" y1="21" x2="21" y2="12" />
                </svg>,
                <svg key="tic3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="timeline-step-icon" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>,
                <svg key="tic4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="timeline-step-icon" aria-hidden="true">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              ];

              return (
                <div key={step.step} className="timeline-step-row">
                  <div className="timeline-step-left">
                    <span className="timeline-step-num">{step.step}</span>
                    <div className="timeline-step-node"></div>
                  </div>
                  
                  <div className="timeline-step-right">
                    <div className="timeline-content-card">
                      <div className="timeline-card-header">
                        <h3 className="timeline-card-title">{step.title}</h3>
                        <div className="timeline-card-icon-wrap">{icons[idx]}</div>
                      </div>
                      <div className="timeline-card-divider"></div>
                      <p className="timeline-card-desc">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Impact / Results Section */}
      <section className="impact-section" id="home-impact-results">
        <div className="container">
          <div className="impact-header-container">
            <span className="impact-eyebrow">IMPACT & RESULTS</span>
            <h2 className="impact-heading">Expected Financial & Ecological Gains</h2>
            <p className="impact-description">
              Solar systems can reduce dependence on grid electricity, improve long-term energy cost predictability, and contribute to lower operational emissions. Actual results vary by system size, site conditions, electricity consumption, tariff structure, and operating profile.
            </p>
          </div>

          <div className="impact-grid-3">
            {impactStats.map((item) => (
              <div key={item.id} className="impact-editorial-card">
                <div className="impact-card-header">
                  <span className="impact-serial">{item.serial}</span>
                </div>
                <div className="impact-divider-gold"></div>
                <h3 className="impact-card-title">{item.title}</h3>
                <p className="impact-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Featured Projects Section */}
      <section className="featured-projects-section" id="home-featured-projects">
        <div className="container">
          <div className="projects-header-container">
            <span className="projects-eyebrow">FEATURED PROJECTS</span>
            <h2 className="projects-heading">Featured Case Studies & Installations</h2>
            <p className="projects-description">
              Explore selected solar installations and system references across residential, commercial, and industrial applications.
            </p>
          </div>

          <div className="projects-grid-3">
            {projectsData.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="projects-footer-cta">
            <Link to="/projects" className="projects-browse-all-btn">
              <span>Browse All Projects</span>
              <span className="projects-browse-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Smart Energy / Technology Section */}
      <section className="smart-tech-section" id="home-smart-tech">
        <div className="container">
          <div className="tech-grid-2">
            <div>
              <div className="dashboard-visual-container">
                <div className="dashboard-visual-header">
                  <div className="dashboard-header-left">
                    <span className="dashboard-title">System Status</span>
                    <span className="dashboard-badge-active">Online</span>
                  </div>
                  <span className="dashboard-device">Monitoring</span>
                </div>
                
                <div className="dashboard-stats-row">
                  <div className="dashboard-stat-box">
                    <span className="dashboard-stat-label">Solar Generation</span>
                    <span className="dashboard-stat-val">Active</span>
                  </div>
                  <div className="dashboard-stat-box">
                    <span className="dashboard-stat-label">Energy Overview</span>
                    <span className="dashboard-stat-val">Nominal</span>
                  </div>
                </div>

                <div className="dashboard-chart-box">
                  <span className="dashboard-chart-label">System Performance</span>
                  <div className="dashboard-chart-graph">
                    <svg viewBox="0 0 200 80" className="dashboard-svg-chart" aria-hidden="true">
                      <line x1="0" y1="20" x2="200" y2="20" stroke="rgba(15, 23, 42, 0.04)" strokeWidth="1" />
                      <line x1="0" y1="40" x2="200" y2="40" stroke="rgba(15, 23, 42, 0.04)" strokeWidth="1" />
                      <line x1="0" y1="60" x2="200" y2="60" stroke="rgba(15, 23, 42, 0.04)" strokeWidth="1" />
                      
                      <path 
                        d="M 0,60 C 30,55 50,25 80,30 C 110,35 130,48 160,20 C 180,8 190,12 200,10" 
                        fill="none" 
                        stroke="var(--accent-gold)" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                      />
                      
                      <circle cx="160" cy="20" r="3" fill="var(--accent-gold)" />
                      <circle cx="160" cy="20" r="6" fill="none" stroke="var(--accent-gold)" strokeWidth="1" opacity="0.5" className="pulse-circle" />
                    </svg>
                  </div>
                </div>

                <div className="dashboard-footer">
                  <span className="dashboard-update">Real-time telemetry visibility</span>
                </div>
              </div>
            </div>

            <div className="tech-content-block">
              <span className="tech-eyebrow">SMART TECHNOLOGY</span>
              <h2 className="tech-heading">Continuous Visibility Into Your Solar System</h2>
              <p className="tech-description">
                Monitor system performance and energy generation through compatible smart monitoring platforms, giving you clearer visibility into how your solar installation is performing.
              </p>

              <div className="tech-capabilities-list">
                <div className="tech-capability-item">
                  <div className="tech-capability-header">
                    <span className="tech-capability-serial">01</span>
                    <h3 className="tech-capability-title">REAL-TIME PERFORMANCE</h3>
                  </div>
                  <div className="tech-capability-divider"></div>
                  <p className="tech-capability-desc">
                    Monitor available generation and system performance through compatible monitoring platforms.
                  </p>
                </div>

                <div className="tech-capability-item">
                  <div className="tech-capability-header">
                    <span className="tech-capability-serial">02</span>
                    <h3 className="tech-capability-title">SYSTEM VISIBILITY</h3>
                  </div>
                  <div className="tech-capability-divider"></div>
                  <p className="tech-capability-desc">
                    Review energy production and operating information from connected solar equipment.
                  </p>
                </div>

                <div className="tech-capability-item">
                  <div className="tech-capability-header">
                    <span className="tech-capability-serial">03</span>
                    <h3 className="tech-capability-title">EARLY ISSUE AWARENESS</h3>
                  </div>
                  <div className="tech-capability-divider"></div>
                  <p className="tech-capability-desc">
                    Monitoring data can help identify unusual system behavior and support faster technical assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Solar Assessment / Calculator Section */}
      <section className="solar-calculator-section" id="solar-calculator">
        <div className="container">
          <div className="calculator-grid-2">
            <div>
              <span className="wireframe-badge">SOLAR FEASIBILITY CALCULATOR</span>
              <h2 style={{ fontSize: '32px', marginBottom: '16px', fontWeight: '700', color: 'var(--text-primary)' }}>Estimate Your Solar Requirement</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '32px' }}>
                Enter your approximate monthly electricity bill to get a preliminary estimate of the solar system size, panel count, and potential energy offset.
              </p>
              
              <form onSubmit={calculateSolar} className="calculator-card">
                <div style={{ marginBottom: '24px' }}>
                  <label htmlFor="billInput" style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Average Monthly Electricity Bill
                  </label>
                  <div className="calculator-input-wrap">
                    <span className="pkr-prefix">PKR</span>
                    <input 
                      id="billInput"
                      type="number" 
                      value={bill} 
                      onChange={(e) => handleBillChange(e.target.value)}
                      className="calculator-number-input"
                      min={solarCalculatorConfig.minBill}
                      max={solarCalculatorConfig.maxBill}
                      step="1000"
                      required
                    />
                  </div>
                </div>

                <div className="calculator-slider-wrap">
                  <input 
                    type="range"
                    value={bill || 0}
                    min={solarCalculatorConfig.minBill}
                    max={solarCalculatorConfig.maxBill}
                    step="5000"
                    onChange={(e) => handleBillChange(e.target.value)}
                    className="calculator-range-slider"
                    aria-label="Average Monthly Electricity Bill Slider"
                  />
                  <div className="slider-labels">
                    <span>PKR {solarCalculatorConfig.minBill.toLocaleString()}</span>
                    <span>PKR {solarCalculatorConfig.maxBill.toLocaleString()}</span>
                  </div>
                </div>

                <button type="submit" className="calculator-btn-submit">
                  <span>Calculate System Size</span>
                  <span>→</span>
                </button>
              </form>
            </div>

            <div>
              <div className="calculator-results-wrapper">
                {calcResult ? (
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', paddingBottom: '16px', margin: '0 0 20px 0' }}>
                      Estimated System Scope
                    </h3>
                    
                    <div className="calculator-results-grid">
                      <div className="calculator-metric-card">
                        <span className="calculator-metric-label">Estimated System Size</span>
                        <span className="calculator-metric-value">{calcResult.kw} kW</span>
                      </div>
                      <div className="calculator-metric-card">
                        <span className="calculator-metric-label">Estimated Panels</span>
                        <span className="calculator-metric-value">{calcResult.panels}</span>
                      </div>
                      <div className="calculator-metric-card">
                        <span className="calculator-metric-label">Estimated Monthly Generation</span>
                        <span className="calculator-metric-value">{calcResult.generation.toLocaleString()} kWh</span>
                      </div>
                      <div className="calculator-metric-card">
                        <span className="calculator-metric-label">Estimated Energy Offset</span>
                        <span className="calculator-metric-value">{calcResult.offset}%</span>
                      </div>
                    </div>

                    <p className="calculator-disclaimer">
                      These figures are preliminary estimates. A site survey and detailed load analysis are required for a final system recommendation.
                    </p>
                    
                    <Button to="/contact" variant="outline" style={{ marginTop: 'auto' }}>
                      Book Engineering Feasibility Audit
                    </Button>
                  </div>
                ) : (
                  <div className="calculator-empty-state">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }} aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    <p style={{ margin: 0, fontWeight: '600', color: 'var(--text-primary)' }}>Calculate Your Assessment</p>
                    <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--text-secondary)' }}>
                      Enter your monthly bill to see your preliminary estimate.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Technology Partners Section */}
      <section className="partners-section" id="home-tech-partners">
        <div className="container">
          <div className="partners-header-container">
            <span className="partners-eyebrow">TECHNOLOGY PARTNERS</span>
            <h2 className="partners-heading">Technology From Proven Manufacturers</h2>
            <p className="partners-description">
              We specify and integrate established solar, storage, and electrical technologies selected according to system requirements, compatibility, availability, and project conditions.
            </p>
          </div>

          <div className="partners-grid">
            {uniqueBrandsList.slice(0, 12).map((brand, idx) => (
              <div key={idx} className="partner-brand-card">
                <h3 className="partner-brand-name">{brand.name}</h3>
                <div className="partner-brand-divider-gold"></div>
                <span className="partner-brand-cats">{brand.categories}</span>
              </div>
            ))}
          </div>

          <div className="partners-footer-note">
            <span className="partners-disclaimer">
              Technology brands represented across our current solution catalog.
            </span>
            <Link to="/solutions" className="partners-explore-link">
              <span>Explore All Solutions</span>
              <span className="partners-explore-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 13. Client Perspectives Section */}
      <section className="perspectives-section" id="home-client-perspectives">
        <div className="container">
          <div className="perspectives-header-container">
            <span className="perspectives-eyebrow">CLIENT PERSPECTIVES</span>
            <h2 className="perspectives-heading">Built Around Real Project Needs</h2>
            <p className="perspectives-description">
              Every solar project has different energy demands, operating conditions, and priorities. Our approach focuses on understanding those requirements and delivering systems around the specific needs of each site.
            </p>
          </div>

          <div className="perspectives-grid">
            {clientPerspectivesData.map((item, idx) => (
              <div key={idx} className="perspective-card">
                <div className="perspective-card-header">
                  <span className="perspective-category">{item.category}</span>
                  <span className="perspective-serial">{item.serial}</span>
                </div>
                <div className="perspective-divider-gold"></div>
                <h3 className="perspective-card-heading">{item.heading}</h3>
                <p className="perspective-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="perspectives-footer-cta">
            <Link to="/contact" className="perspectives-discuss-btn">
              <span>Discuss Your Project</span>
              <span className="perspectives-discuss-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 14. Insights / Blog Preview Section */}
      <section className="insights-section" id="home-energy-insights">
        <div className="container">
          <div className="insights-header-container">
            <span className="insights-eyebrow">ENERGY INSIGHTS</span>
            <h2 className="insights-heading">Knowledge for Smarter Energy Decisions</h2>
            <p className="insights-description">
              Practical guides and technical insights covering solar systems, energy storage, net metering, and the evolving energy landscape in Pakistan.
            </p>
          </div>

          <div className="insights-grid-3">
            {blogArticles.slice(0, 3).map((article) => (
              <BlogCard 
                key={article.id} 
                article={article} 
                onSelect={() => navigate(`/insights`)} 
              />
            ))}
          </div>

          <div className="insights-footer-cta">
            <Link to="/insights" className="insights-explore-btn">
              <span>Explore Energy Insights</span>
              <span className="insights-explore-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 15. FAQ Section */}
      <section>
        <div className="container">
          <SectionHeader 
            title="Frequently Asked Inquiries" 
            subtitle="FAQ"
            description="Answers to regular technical questions regarding net-metering licenses, structural wind loads, and battery lifecycles."
          />
          <FAQAccordion items={faqsData} />
        </div>
      </section>

      {/* 16. Final CTA Section */}
      <section className="final-cta-section">
        {/* Decorative Grid Pattern */}
        <div className="final-cta-grid-bg">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none" />
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>

        <div className="container final-cta-container">
          <span className="final-cta-eyebrow">READY TO GET STARTED</span>
          <h2 className="final-cta-heading">Ready to Plan Your Solar System?</h2>
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

export default Home;
