import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { productsData, solutionCategories } from '../data';

const ProductSearch = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchContainerRef = useRef(null);

  // Find the spotlight product from the catalog
  const spotlightProduct = productsData.find(
    (p) => p.id === 'knox-powerbase-32kw-51-2v-628a-lithium-battery'
  ) || productsData[0];

  // Perform live search filtering
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(-1);
      return;
    }

    const cleanQuery = query.trim().toLowerCase();

    const filtered = productsData.filter((product) => {
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

    // Limit to initial 5-6 results
    setResults(filtered.slice(0, 6));
    setSelectedIndex(-1);
  }, [query]);

  // Handle click outside to close search results dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setResults([]);
        setSelectedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation inside dropdown
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setResults([]);
      setSelectedIndex(-1);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0 && selectedIndex < results.length) {
        e.preventDefault();
        const selected = results[selectedIndex];
        navigate(`/solutions?id=${selected.id}`);
        setResults([]);
        setSelectedIndex(-1);
      } else if (query.trim()) {
        e.preventDefault();
        navigate(`/solutions?search=${encodeURIComponent(query.trim())}`);
        setResults([]);
        setSelectedIndex(-1);
      }
    }
  };

  const handleResultClick = (productId) => {
    navigate(`/solutions?id=${productId}`);
    setResults([]);
    setSelectedIndex(-1);
  };

  return (
    <section className="search-section">
      <div className="container">
        <div className="search-layout">
          
          {/* Top: Full-Width Search Header + Input Bar */}
          <div className="search-main" ref={searchContainerRef}>
            <div className="search-header">
              <span className="search-label">FIND YOUR SYSTEM</span>
              <p className="search-support">
                Search inverters, batteries, solar panels and leading brands.
              </p>
            </div>

            <div className="search-bar-container">
              <div className="search-input-wrapper">
                <Search size={18} className="search-input-icon" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search products, brands or categories..."
                  className="search-input"
                  aria-label="Search products, brands or categories"
                />
              </div>

              {/* Live Search Dropdown */}
              {results.length > 0 && (
                <div className="search-dropdown">
                  {results.map((product, idx) => (
                    <div
                      key={product.id}
                      onClick={() => handleResultClick(product.id)}
                      className={`search-result-item ${idx === selectedIndex ? 'selected' : ''}`}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="search-result-img-box">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="search-result-img"
                        />
                      </div>
                      
                      <div className="search-result-info">
                        <span className="search-result-brand">{product.brand}</span>
                        <span className="search-result-name">{product.title}</span>
                        <span className="search-result-meta">
                          {solutionCategories.find(c => c.id === product.category)?.name || product.type}
                        </span>
                      </div>

                      <div className="search-result-price-action">
                        <span className="search-result-price">
                          {product.price
                            ? `Rs. ${product.price.toLocaleString('en-US')}`
                            : 'Price on request'}
                        </span>
                        <span className="search-result-action">
                          View Product <span className="arrow">→</span>
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* View All Results link */}
                  <Link
                    to={`/solutions?search=${encodeURIComponent(query.trim())}`}
                    className="search-view-all"
                    onClick={() => {
                      setResults([]);
                      setSelectedIndex(-1);
                    }}
                  >
                    View All Results →
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Bottom: Wider Horizontal Editorial Product Spotlight Showcase */}
          {spotlightProduct && (
            <div className="spotlight-card spotlight-showcase">
              <div className="spotlight-showcase-media">
                <span className="spotlight-badge">FEATURED SPOTLIGHT</span>
                <div className="spotlight-img-box">
                  <img
                    src={spotlightProduct.image}
                    alt={spotlightProduct.title}
                    className="spotlight-img"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="spotlight-showcase-content">
                <span className="spotlight-brand">{spotlightProduct.brand}</span>
                <h3 className="spotlight-title">Premium Energy Storage</h3>
                <p className="spotlight-subtitle">{spotlightProduct.title}</p>
                <p className="spotlight-price">
                  {spotlightProduct.price
                    ? `Rs. ${spotlightProduct.price.toLocaleString('en-US')}`
                    : 'Price on request'}
                </p>
                <Link
                  to={`/solutions?id=${spotlightProduct.id}`}
                  className="spotlight-btn"
                >
                  Shop Now <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default ProductSearch;
