'use client';

import React, { useState } from 'react';
import { blogArticles } from '../data';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionHeader from '../components/SectionHeader';
import BlogCard from '../components/BlogCard';
import Button from '../components/Button';
import Card from '../components/Card';
import { X, Calendar, User, Clock } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeArticleDetail, setActiveArticleDetail] = useState(null);

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Email address is required.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setIsSubscribing(true);
    setEmailError('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || 'Could not subscribe right now.');
      }
      setSubscribed(true);
    } catch (err) {
      setEmailError(err.message || 'Could not subscribe right now.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const readerRef = React.useRef(null);

  const onSelectArticle = (article) => {
    setActiveArticleDetail(article);
    setTimeout(() => {
      readerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  };

  // Categories list derived from mock data (plus 'all')
  const categories = ['all', ...new Set(blogArticles.map(art => art.category))];

  // Filtered articles list
  const filteredArticles = activeCategory === 'all'
    ? blogArticles
    : blogArticles.filter(art => art.category === activeCategory);

  const featuredArticle = blogArticles[0];

  const tabStyle = (isActive) => ({
    padding: '10px 20px',
    borderRadius: '4px',
    border: '1px solid var(--border-color)',
    backgroundColor: isActive ? 'var(--accent-color)' : 'var(--bg-primary)',
    color: isActive ? 'var(--bg-primary)' : 'var(--text-secondary)',
    fontWeight: '600',
    fontSize: '13px',
    cursor: 'pointer',
    transition: 'var(--transition-smooth)',
  });

  return (
    <div className="insights-page">
      {/* 1. Page Hero */}
      <div className="page-hero">
        <div className="container">
          <Breadcrumbs paths={[{ label: 'Insights & Blog', url: '/insights' }]} />
          <h1>Energy Insights & Guidelines</h1>
          <p>
            Regulatory guides, net-metering walk-throughs, and structural assessments compiled by our technical team.
          </p>
        </div>
      </div>

      {/* 2. Featured Article Section (ALWAYS visible) */}
      <section className="featured-insight-section">
        <div className="container">
          <div className="featured-insight-grid">
            <ScrollReveal className="featured-insight-content">
              <div className="featured-meta-row">
                <span className="featured-tag">{featuredArticle.category}</span>
                {featuredArticle.readTime && (
                  <span className="featured-readtime">
                    <Clock size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    {featuredArticle.readTime}
                  </span>
                )}
              </div>
              <h2 className="featured-title">{featuredArticle.title}</h2>
              <p className="featured-excerpt">{featuredArticle.excerpt}</p>
              
              <div className="featured-divider-gold"></div>
              
              <button 
                onClick={() => onSelectArticle(featuredArticle)} 
                className="featured-cta-btn"
              >
                <span>Read Featured Guide</span>
                <span className="featured-cta-arrow">→</span>
              </button>
            </ScrollReveal>
            
            <div className="featured-insight-visual-wrap">
              <div className="net-metering-visual-box">
                <svg viewBox="0 0 320 220" className="net-metering-svg" aria-hidden="true">
                  <line x1="0" y1="55" x2="320" y2="55" stroke="rgba(15, 23, 42, 0.03)" strokeWidth="1" />
                  <line x1="0" y1="110" x2="320" y2="110" stroke="rgba(15, 23, 42, 0.03)" strokeWidth="1" />
                  <line x1="0" y1="165" x2="320" y2="165" stroke="rgba(15, 23, 42, 0.03)" strokeWidth="1" />
                  
                  <g transform="translate(40, 110)">
                    <rect x="-24" y="-30" width="48" height="60" rx="4" fill="none" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="1.5" />
                    <line x1="-24" y1="-10" x2="24" y2="-10" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="1" />
                    <line x1="-24" y1="10" x2="24" y2="10" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="1" />
                    <line x1="-8" y1="-30" x2="-8" y2="30" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="1" />
                    <line x1="8" y1="-30" x2="8" y2="30" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="1" />
                    <circle cx="0" cy="0" r="4" fill="var(--accent-gold)" />
                    <text x="0" y="44" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--text-secondary)" letterSpacing="0.05em">SOLAR ARRAY</text>
                  </g>

                  <path d="M 64,110 L 130,110" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
                  <path d="M 190,110 L 256,110" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />

                  <g transform="translate(160, 110)">
                    <circle cx="0" cy="0" r="30" fill="#ffffff" stroke="var(--accent-gold)" strokeWidth="2" />
                    <circle cx="0" cy="0" r="24" fill="none" stroke="rgba(15, 23, 42, 0.05)" strokeWidth="1" />
                    <rect x="-14" y="-8" width="28" height="12" rx="2" fill="rgba(15, 23, 42, 0.03)" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="1" />
                    <path d="M -8,12 L -2,12 M -5,9 L -8,12 L -5,15" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 8,12 L 2,12 M 5,9 L 8,12 L 5,15" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="0" y="1" textAnchor="middle" fontSize="7" fontWeight="800" fill="#10b981" letterSpacing="0.02em">NET METER</text>
                    <text x="0" y="44" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--text-secondary)" letterSpacing="0.05em">GRID INTERCONNECT</text>
                  </g>

                  <g transform="translate(280, 110)">
                    <line x1="0" y1="-30" x2="0" y2="30" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="2" />
                    <line x1="-16" y1="-20" x2="16" y2="-20" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="1.5" />
                    <line x1="-12" y1="-5" x2="12" y2="-5" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="1.5" />
                    <circle cx="-16" cy="-20" r="2" fill="var(--text-secondary)" />
                    <circle cx="16" cy="-20" r="2" fill="var(--text-secondary)" />
                    <text x="0" y="44" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--text-secondary)" letterSpacing="0.05em">UTILITY GRID</text>
                  </g>

                  <circle cx="97" cy="110" r="3" fill="var(--accent-gold)" opacity="0.8">
                    <animate attributeName="cx" values="64;130" dur="8s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="223" cy="110" r="3" fill="#10b981" opacity="0.8">
                    <animate attributeName="cx" values="190;256" dur="11s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. All Articles Categories + Directory (ALWAYS visible) */}
      <section className="article-directory-section" style={{ padding: '80px 0' }}>
        <div className="container">
          {/* Categories Navigation */}
          <ScrollReveal className="solutions-tabs-container" style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveArticleDetail(null);
                }}
                style={tabStyle(activeCategory === cat)}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </ScrollReveal>

          {/* Articles List Grid */}
          <SectionHeader
            title={activeCategory === 'all' ? 'Article Directory' : `${activeCategory} Guidelines`}
            description="Explore our technical guidelines. Click 'Read Guide' to open the details reader below."
          />
          
          <ScrollReveal delay={100} className="grid grid-3">
            {filteredArticles.map((article) => (
              <BlogCard
                key={article.id}
                article={article}
                onSelect={() => onSelectArticle(article)}
              />
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Newsletter Section (ALWAYS visible, below Article Directory) */}
      <section className="newsletter-section">
        <div className="container">
          <ScrollReveal delay={100} className="newsletter-card-wrapper">
            <span className="newsletter-eyebrow">NEWSLETTER SIGNUP</span>
            <h2 className="newsletter-heading">Stay informed on grid policy updates</h2>
            <p className="newsletter-description">
              We dispatch monthly analyses on solar taxes, NEPRA tariff adjustments, and net metering licensing times.
            </p>

            {subscribed ? (
              <div className="newsletter-success-box">
                <span className="newsletter-success-icon">✓</span>
                <p className="newsletter-success-title">Subscription Confirmed</p>
                <p className="newsletter-success-text">Thank you. You have been added to our energy insights distribution list.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form-container">
                <div className="newsletter-input-group">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError('');
                    }}
                    className={`newsletter-input ${emailError ? 'has-error' : ''}`}
                    aria-label="Email address for newsletter"
                    required
                  />
                  <button type="submit" className="newsletter-subscribe-btn" disabled={isSubscribing}>
                    {isSubscribing ? 'Saving…' : 'Subscribe'}
                  </button>
                </div>
                {emailError && <span className="newsletter-error-message">{emailError}</span>}
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Article Detail Reader (Appended at the bottom when an article is selected) */}
      {activeArticleDetail && (
        <section ref={readerRef} className="article-reader-section" style={{ padding: '40px 0 100px 0' }}>
          <div className="container">
            <div className="article-reader-card article-reader-card-reveal">
              <button 
                onClick={() => {
                  setActiveArticleDetail(null);
                  // Smooth scroll back to All Articles categories
                  window.scrollTo({ top: 750, behavior: 'smooth' });
                }}
                className="article-reader-close-btn"
                aria-label="Close article reader"
              >
                <span>← Back to Articles</span>
              </button>

              <div className="article-reader-header">
                <span className="article-reader-category">{activeArticleDetail.category}</span>
                <h2 className="article-reader-title">{activeArticleDetail.title}</h2>
                {activeArticleDetail.readTime && (
                  <span className="article-reader-readtime">
                    <Clock size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} aria-hidden="true" />
                    {activeArticleDetail.readTime}
                  </span>
                )}
              </div>

              <div className="article-reader-body">
                <p className="article-reader-intro">{activeArticleDetail.introduction}</p>
                
                <div className="article-reader-divider"></div>

                <div className="article-reader-sections">
                  {activeArticleDetail.sections && activeArticleDetail.sections.map((sec, idx) => (
                    <ScrollReveal key={idx} delay={idx * 100} className="article-reader-sec-group">
                      <h4 className="article-reader-sec-heading">{sec.heading}</h4>
                      <p className="article-reader-sec-content">{sec.content}</p>
                    </ScrollReveal>
                  ))}
                </div>

                {activeArticleDetail.keyPoints && (
                  <ScrollReveal delay={100} className="article-reader-keypoints-box">
                    <h4 className="keypoints-title">Key Takeaways</h4>
                    <ul className="keypoints-list">
                      {activeArticleDetail.keyPoints.map((pt, idx) => (
                        <li key={idx}>{pt}</li>
                      ))}
                    </ul>
                  </ScrollReveal>
                )}

                <div className="article-reader-divider"></div>

                <p className="article-reader-conclusion">{activeArticleDetail.conclusion}</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Insights;
