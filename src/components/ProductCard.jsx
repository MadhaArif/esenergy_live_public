import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product, onSelect }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
  }, []);

  const handleMouseMove = (e) => {
    if (isTouch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  const formattedPrice = product.price !== null && product.price !== undefined
    ? `Rs. ${product.price.toLocaleString('en-US')}`
    : 'Price on request';

  return (
    <div 
      className="product-card-premium" 
      onClick={() => onSelect && onSelect(product)}
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${coords.x}px`,
        '--mouse-y': `${coords.y}px`,
      }}
    >
      <div className="product-card-img-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-img"
          loading="lazy"
        />
      </div>
      
      <div className="product-card-content">
        <div className="product-card-meta">
          <span className="product-card-brand">{product.brand}</span>
          <span className="product-card-divider">•</span>
          <span className="product-card-type">{product.type}</span>
        </div>
        
        <h3 className="product-card-title">{product.name}</h3>
        
        {product.capacity && (
          <div className="product-card-capacity">
            <span className="capacity-label">Verified Capacity:</span>
            <span className="capacity-value">{product.capacity}</span>
          </div>
        )}

        <div className="product-card-price">
          {formattedPrice}
        </div>
        
        <div className="product-card-cta">
          <span className="cta-text">View Product</span>
          <ArrowRight className="cta-arrow" size={15} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
