import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { productsData, solutionCategories, getWhatsAppProductUrl } from '../data';
import { useCart } from '../context/CartContext';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { X } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Solutions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProductDetail, setActiveProductDetail] = useState(null);
  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    try {
      const saved = localStorage.getItem('en_energy_recently_viewed');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productId = params.get('id');
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
  }, [location.search]);

  // Track recently viewed products
  useEffect(() => {
    if (activeProductDetail) {
      setRecentlyViewed((prev) => {
        const filtered = prev.filter(id => id !== activeProductDetail.id);
        const updated = [activeProductDetail.id, ...filtered].slice(0, 6); // Keep latest 6
        localStorage.setItem('en_energy_recently_viewed', JSON.stringify(updated));
        return updated;
      });
    }
  }, [activeProductDetail]);

  // Filter products based on active category tab
  const filteredProducts = selectedCategory === 'all'
    ? productsData
    : productsData.filter(p => p.category === selectedCategory);

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
                  navigate('/solutions');
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
                      src={activeProductDetail.image} 
                      alt={activeProductDetail.title} 
                      className="product-detail-img"
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
                    <button 
                      className="btn-add-to-cart"
                      onClick={() => addToCart(activeProductDetail)}
                    >
                      Add to Cart
                    </button>

                    <a 
                      href={getWhatsAppProductUrl(activeProductDetail)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-order-whatsapp"
                    >
                      Order on WhatsApp
                    </a>
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
                <span className="solutions-list-eyebrow">Product Portfolio</span>
                <h2 className="solutions-list-heading">
                  {selectedCategory === 'all' ? 'Available Configurations' : `${solutionCategories.find(c => c.id === selectedCategory)?.name}`}
                </h2>
                <p className="solutions-list-desc">
                  Select a technology profile from our verified inventory below to load its full engineering specifications.
                </p>
              </div>

              <ScrollReveal delay={100} className="solutions-page-grid">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={(p) => {
                      navigate(`/solutions?id=${p.id}`);
                    }}
                  />
                ))}
              </ScrollReveal>
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
                    navigate(`/solutions?id=${p.id}`);
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
          <Button to="/contact" variant="primary">Contact Technical Division</Button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;

