'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { productsData, solutionCategories, getOptimizedImageUrl } from '../data';
import { getContactInquiryUrl } from '@/lib/inquiry';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { X } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Solutions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProductDetail, setActiveProductDetail] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchQuery, setSearchQuery] = useState('');
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const contactForProduct = (product) =>
    getContactInquiryUrl({
      product: product.title || product.name,
      brand: product.brand,
    });

  useEffect(() => {
    try {
      const saved = localStorage.getItem('es_energy_recently_viewed');
      if (saved) setRecentlyViewed(JSON.parse(saved));
    } catch (e) {
      setRecentlyViewed([]);
    }
  }, []);

  useEffect(() => {
    const productId = searchParams.get('id');
    const searchParam = searchParams.get('search') || '';
    setSearchQuery(searchParam);
    if (productId) {
      const product = productsData.find(p => p.id === productId);
      if (product) {
        setActiveProductDetail(product);
        setSelectedCategory(product.category);
        
        // Scroll to detail panel smoothly on page load
        setTimeout(() => {
          const detailElement = document.getElementById('solutions-detail-view');
          if (detailElement) {
            detailElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 200);
      }
    } else {
      setActiveProductDetail(null);
    }
  }, [searchParams]);

  // Track recently viewed products
  useEffect(() => {
    if (activeProductDetail) {
      setRecentlyViewed((prev) => {
        const filtered = prev.filter(id => id !== activeProductDetail.id);
        const updated = [activeProductDetail.id, ...filtered].slice(0, 6); // Keep latest 6
        localStorage.setItem('es_energy_recently_viewed', JSON.stringify(updated));
        return updated;
      });
    }
  }, [activeProductDetail]);

  // Reset pagination when category or search changes
  useEffect(() => {
    setVisibleCount(6);
  }, [selectedCategory, searchQuery]);

  // Filter products based on active category tab and search query
  const filteredProducts = React.useMemo(() => {
    let results = selectedCategory === 'all'
      ? productsData
      : productsData.filter(p => p.category === selectedCategory);

    if (searchQuery.trim()) {
      const cleanQuery = searchQuery.trim().toLowerCase();
      results = results.filter((product) => {
        const categoryObj = solutionCategories.find((c) => c.id === product.category);
        const categoryName = categoryObj ? categoryObj.name.toLowerCase() : '';

        const searchFields = [
          product.name,
          product.title,
          product.brand,
          product.category,
          categoryName,
          product.type,
          product.model,
          product.subtitle,
          product.capacity
        ].filter(Boolean).map(field => field.toLowerCase());

        return searchFields.some((field) => field.includes(cleanQuery));
      });
    }

    return results;
  }, [selectedCategory, searchQuery]);

  // Get recently viewed products (excluding currently open)
  const getRecentlyViewedProducts = () => {
    const activeId = activeProductDetail ? activeProductDetail.id : null;
    return recentlyViewed
      .filter((id) => id !== activeId)
      .map((id) => productsData.find((p) => p.id === id))
      .filter(Boolean);
  };

  return (
    <div className="solutions-page">
      {/* 1. Page Hero */}
      <div className="page-hero">
        <div className="container">
          <Breadcrumbs paths={[{ label: 'Solutions', url: '/solutions' }]} />
          <h1>Solar Solutions & Products</h1>
          <p>
            Custom-engineered photovoltaic arrays, smart hybrid backup architectures, and grid-synchronization inverters.
          </p>
        </div>
      </div>

      {/* 2. Detail Experience & Product Listing */}
      <section style={{ backgroundColor: 'transparent' }}>
        <div className="container">
          
          {/* Active Product Detail Page Area */}
          {activeProductDetail && (
            <div id="solutions-detail-view" className="solutions-detail-page-container">
              {/* Back Button */}
              <button 
                onClick={() => {
                  setActiveProductDetail(null);
                  router.push('/solutions');
                }}
                className="detail-close-btn-premium"
                aria-label="Back to Portfolio"
              >
                <X size={14} />
                <span>Back to Catalog</span>
              </button>
              
              {/* Two-Column Hero Block */}
              <div className="product-detail-hero">
                {/* Left Column: Image with Warm Background */}
                <div className="product-detail-img-col">
                  <div className="product-detail-img-box">
                    <img 
                      src={getOptimizedImageUrl(activeProductDetail.image, 800)} 
                      alt={activeProductDetail.title} 
                      className="product-detail-img"
                      decoding="async"
                      width="800"
                      height="600"
                    />
                  </div>
                </div>

                {/* Right Column: Metadata & CTAs */}
                <div className="product-detail-meta-col">
                  <div className="product-detail-brand-category">
                    <span className="detail-brand-lbl">{activeProductDetail.brand}</span>
                    <span className="detail-meta-bullet">•</span>
                    <span className="detail-category-lbl">
                      {solutionCategories.find(c => c.id === activeProductDetail.category)?.name || activeProductDetail.type}
                    </span>
                  </div>

                  <h2 className="product-detail-title">{activeProductDetail.title}</h2>
                  <p className="product-detail-type-subtitle">{activeProductDetail.type}</p>

                  <div className="product-detail-price-spec">
                    <div className="detail-price-box">
                      <span className="price-label">Reference Price</span>
                      <span className="price-value">
                        {activeProductDetail.price 
                          ? `Rs. ${activeProductDetail.price.toLocaleString('en-US')}` 
                          : 'Price on request'}
                      </span>
                    </div>

                    {activeProductDetail.capacity && (
                      <div className="detail-spec-box-badge">
                        <span className="spec-badge-label">Capacity</span>
                        <span className="spec-badge-value">{activeProductDetail.capacity}</span>
                      </div>
                    )}
                  </div>

                  {/* Action CTAs */}
                  <div className="product-detail-actions">
                    <Button
                      href={contactForProduct(activeProductDetail)}
                      variant="primary"
                      className="btn-contact-product"
                    >
                      Contact Us for This Product →
                    </Button>
                  </div>
                </div>
              </div>

              {/* Full Width Details and Technical Specifications */}
              <div className="product-detail-specs-section">
                
                {/* 1. Product Overview (Description) */}
                {activeProductDetail.detailedDescription && (
                  <div className="specs-overview-block" style={{ marginBottom: '40px' }}>
                    <h3 className="specs-section-title">Product Overview</h3>
                    <p className="detail-description" style={{ fontSize: '15px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                      {activeProductDetail.detailedDescription}
                    </p>
                  </div>
                )}

                {/* 2. Key Features */}
                {activeProductDetail.features && activeProductDetail.features.length > 0 && (
                  <div className="specs-features-block" style={{ marginBottom: '48px' }}>
                    <h3 className="specs-section-title">Key Features</h3>
                    <ul className="specs-features-list-premium">
                      {activeProductDetail.features.map((feat, i) => (
                        <li key={i} className="specs-feature-item-premium">
                          <span className="feature-bullet-premium">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 3. Technical Specifications Datasheet */}
                {activeProductDetail.technicalDetails && Object.keys(activeProductDetail.technicalDetails).length > 0 && (
                  <div className="specs-datasheet-block">
                    <h3 className="specs-section-title" style={{ marginBottom: '32px' }}>Technical Datasheet</h3>
                    
                    <div className="specs-datasheet-grid">
                      {Object.entries(activeProductDetail.technicalDetails).map(([groupKey, groupFields], index) => {
                        const groupTitles = {
                          overview: "Product Overview",
                          technicalSpecifications: "Technical Specifications",
                          gridTiedOperation: "Grid-Tied Operation",
                          battery: "Battery Characteristics",
                          electricalCharacteristics: "Electrical Characteristics",
                          mechanical: "Mechanical Characteristics",
                          temperature: "Temperature Characteristics",
                          electrical: "Electrical Characteristics",
                          batteryManagement: "Battery Management System (BMS)",
                          input: "Input Specifications",
                          output: "Output Specifications",
                          solarInput: "Solar Input Specifications",
                          control: "Control Features",
                          protection: "Protection Features",
                          general: "General Specifications"
                        };
                        
                        const title = groupTitles[groupKey] || groupKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                        
                        return (
                          <div key={groupKey} className="specs-datasheet-group" style={{ animationDelay: `${index * 80}ms` }}>
                            <h4 className="specs-group-title">{title}</h4>
                            <div className="specs-group-table">
                              {Object.entries(groupFields).map(([fieldKey, fieldValue]) => (
                                <div key={fieldKey} className="specs-group-row">
                                  <span className="specs-row-label">{fieldKey}</span>
                                  <span className="specs-row-value">{fieldValue}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Category Navigation Tabs */}
          {!activeProductDetail && (
            <div className="solutions-tabs-container">
              <div className="solutions-tabs">
                {solutionCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                    }}
                    className={`solutions-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Product Listing Grid */}
          {!activeProductDetail && (
            <div>
              <div className="solutions-list-header">
                <span className="solutions-list-eyebrow">
                  {searchQuery.trim() ? 'Search Results' : 'Product Portfolio'}
                </span>
                <h2 className="solutions-list-heading">
                  {searchQuery.trim()
                    ? `Results for "${searchQuery.trim()}"`
                    : selectedCategory === 'all'
                    ? 'Available Configurations'
                    : `${solutionCategories.find(c => c.id === selectedCategory)?.name}`
                  }
                </h2>
                <p className="solutions-list-desc">
                  {searchQuery.trim()
                    ? `${filteredProducts.length} match${filteredProducts.length !== 1 ? 'es' : ''} found for "${searchQuery.trim()}". ${filteredProducts.length > 0 ? 'Select a product below to view its full engineering specifications.' : 'Try adjusting your search terms or browse all products.'}`
                    : 'Select a technology profile from our verified inventory below to load its full engineering specifications.'
                  }
                </p>
                {searchQuery.trim() && (
                  <button
                    onClick={() => {
                      router.push('/solutions');
                    }}
                    className="btn-clear-search"
                  >
                    <X size={14} />
                    Clear Search
                  </button>
                )}
              </div>

              {filteredProducts.length > 0 ? (
                <ScrollReveal delay={100} className="solutions-page-grid">
                  {filteredProducts.slice(0, visibleCount).map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      className={index >= 6 ? 'fade-in-up-reveal' : ''}
                      style={index >= 6 ? { animationDelay: `${(index % 6) * 60}ms` } : {}}
                      onSelect={(p) => {
                        router.push(`/solutions?id=${p.id}`);
                      }}
                    />
                  ))}
                </ScrollReveal>
              ) : (
                <div className="solutions-no-results">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }} aria-hidden="true">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 8px 0' }}>No products match your search</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0 0 20px 0', maxWidth: '400px' }}>
                    Try different keywords or browse our complete product catalog.
                  </p>
                  <button
                    onClick={() => router.push('/solutions')}
                    className="detail-close-btn-premium"
                  >
                    Browse All Products
                  </button>
                </div>
              )}

              {filteredProducts.length > 0 && visibleCount < filteredProducts.length && (
                <div className="load-more-container">
                  <button 
                    onClick={() => setVisibleCount(prev => Math.min(prev + 6, filteredProducts.length))}
                    className="btn-load-more"
                  >
                    LOAD MORE PRODUCTS <span className="arrow">→</span>
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      </section>

      {/* 3. Recently Viewed */}
      {activeProductDetail && getRecentlyViewedProducts().length > 0 && (
        <section style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="solutions-list-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span className="solutions-list-eyebrow" style={{ margin: '0 auto' }}>System Configurations</span>
              <h2 className="solutions-list-heading">Recently Viewed</h2>
              <p className="solutions-list-desc" style={{ margin: '0 auto' }}>
                Quickly jump back to alternative solar capacities, batteries, and safety configurations you examined.
              </p>
            </div>
            
            <ScrollReveal delay={100} className="solutions-recently-viewed-grid">
              {getRecentlyViewedProducts().map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={(p) => {
                    router.push(`/solutions?id=${p.id}`);
                  }}
                />
              ))}
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* 4. CTA */}
      <section style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <span className="detail-eyebrow" style={{ display: 'inline-block', margin: '0 auto 16px auto' }}>Bespoke Designs</span>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Need a completely custom engineering profile?</h2>
          <p style={{ marginBottom: '24px' }}>Our technical department designs bespoke transformer load connections and specialized structural angles.</p>
          <Button to="/contact#contact-form" variant="primary">Contact Technical Division</Button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;

