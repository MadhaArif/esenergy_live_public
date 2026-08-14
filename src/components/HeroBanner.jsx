import React from 'react';
import { Link } from 'react-router-dom';
import residentialSolarVilla from '../assets/residential_solar_villa.webp';

const HeroBanner = () => {
  const headlineText = "Solar, Engineered Around You.";
  const words = headlineText.split(" ");

  return (
    <section className="premium-hero">
      {/* Subtle engineering grid background — static, near-invisible */}
      <div className="hero-grid-bg"></div>

      <div className="container">
        <div className="hero-grid">
          
          {/* Left Side: Content & Action */}
          <div className="hero-text-col">
            <span className="hero-eyebrow">
              SMART SOLAR / ENGINEERED FOR REAL LIFE
            </span>
            
            <h1 className="hero-headline">
              {words.map((word, idx) => (
                <span key={idx} className="hero-word-wrapper">
                  <span 
                    className="hero-word" 
                    style={{ animationDelay: `${150 + idx * 80}ms` }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h1>
            
            <p className="hero-description">
              High-performance solar systems designed around your energy use, property, and long-term goals.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <Link to="/contact" className="btn-hero-primary">
                Get a Free Consultation <span className="btn-arrow">→</span>
              </Link>
              <Link to="/solutions" className="btn-hero-secondary">
                Explore Solutions <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Right Side: Product Image Display */}
          <div className="hero-media-col animate-hero-media">
            <div className="hero-image-wrapper">
              <img 
                src={residentialSolarVilla} 
                alt="Premium architectural solar installation" 
                className="hero-image"
              />
              {/* Subtle image sweep shine */}
              <div className="hero-image-shine"></div>
              
              {/* Small Editorial Annotation */}
              <div className="hero-annotation">
                <span className="annotation-label">SYSTEM DESIGN</span>
                <span className="annotation-value">ENGINEERED FOR YOUR PROPERTY</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;