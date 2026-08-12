import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getWhatsAppCartUrl } from '../data';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalItems, totalPrice } = useCart();

  if (!isCartOpen) return null;

  const handleWhatsAppOrder = () => {
    const url = getWhatsAppCartUrl(cart, totalItems, totalPrice);
    window.open(url, '_blank');
  };

  return (
    <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-header-title">
            <ShoppingBag size={18} style={{ color: 'var(--text-primary)' }} />
            <h3>Your Cart</h3>
            <span className="drawer-count">({totalItems})</span>
          </div>
          <button className="drawer-close-btn" onClick={() => setIsCartOpen(false)}>
            <X size={18} />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="drawer-body">
          {cart.length === 0 ? (
            <div className="drawer-empty">
              <ShoppingBag size={40} style={{ color: 'var(--text-muted)', marginBottom: '16px' }} />
              <p>Your cart is empty</p>
              <button className="drawer-empty-btn" onClick={() => setIsCartOpen(false)}>
                Continue Exploring
              </button>
            </div>
          ) : (
            <div className="drawer-items-list">
              {cart.map((item) => {
                const formattedPrice = item.price
                  ? `Rs. ${item.price.toLocaleString('en-US')}`
                  : 'Price on request';

                return (
                  <div key={item.id} className="drawer-item">
                    {/* Item Image */}
                    <div className="drawer-item-img-container">
                      <img src={item.image} alt={item.title} className="drawer-item-img" />
                    </div>

                    {/* Item Details */}
                    <div className="drawer-item-details">
                      <span className="drawer-item-brand">{item.brand}</span>
                      <h4 className="drawer-item-title">{item.title}</h4>
                      <span className="drawer-item-price">{formattedPrice}</span>

                      {/* Quantity Controls & Remove */}
                      <div className="drawer-item-actions">
                        <div className="drawer-qty-controls">
                          <button
                            className="qty-btn"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus size={10} />
                          </button>
                          <span className="qty-val">{item.quantity}</span>
                          <button
                            className="qty-btn"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus size={10} />
                          </button>
                        </div>
                        
                        <button
                          className="drawer-remove-btn"
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Remove item"
                        >
                          <Trash2 size={12} />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && (
          <div className="drawer-footer">
            <div className="drawer-subtotal">
              <span>Estimated Subtotal</span>
              <span className="subtotal-val">Rs. {totalPrice.toLocaleString('en-US')}</span>
            </div>
            
            <p className="drawer-footer-note">
              Subtotal excludes items marked "Price on request". Orders are processed as inquiries on WhatsApp.
            </p>

            <button className="drawer-cta-btn" onClick={handleWhatsAppOrder}>
              Order on WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
