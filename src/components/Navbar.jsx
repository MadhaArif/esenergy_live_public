import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import Button from './Button';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { totalItems, setIsCartOpen } = useCart();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Industries', path: '/industries' },
    { name: 'Projects', path: '/projects' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'About', path: '/about' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleAnchorClick = (path) => {
    closeMenu();
    // If we're not on Home, navigate to Home first, then scroll
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation and mount to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById('why-choose-us');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById('why-choose-us');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'var(--bg-primary)',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(15, 23, 42, 0.06)' : '1px solid var(--border-color)',
    boxShadow: scrolled ? '0 4px 30px rgba(15, 23, 42, 0.02)' : 'none',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  };

  const logoStyle = {
    fontSize: '22px',
    fontWeight: '800',
    letterSpacing: '-0.03em',
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const menuStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  };

  const linkStyle = ({ isActive }) => ({
    fontSize: '14px',
    fontWeight: '500',
    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
    position: 'relative',
    padding: '8px 0',
    transition: 'color 0.3s ease',
  });

  const mobileNavContainerStyle = {
    display: isOpen ? 'flex' : 'none',
    position: 'fixed',
    top: '80px',
    left: 0,
    width: '100%',
    height: 'calc(100vh - 80px)',
    backgroundColor: 'var(--bg-primary)',
    flexDirection: 'column',
    padding: '40px 24px',
    gap: '24px',
    borderTop: '1px solid var(--border-color)',
    zIndex: 999,
  };

  return (
    <nav style={navStyle}>
      <div className="container" style={containerStyle}>
        {/* Brand Logo */}
        <Link to="/" style={logoStyle} className="nav-logo" onClick={closeMenu}>
          <span style={{ border: '2px solid var(--text-primary)', padding: '2px 8px', borderRadius: '4px' }}>EN</span>
          <span>Energy</span>
        </Link>

        {/* Desktop Menu */}
        <div style={menuStyle} className="desktop-menu">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', alignItems: 'center', margin: 0, padding: 0 }}>
            {navItems.map((item) => (
              <li key={item.name}>
                {item.isAnchor ? (
                  <button
                    onClick={() => handleAnchorClick(item.path)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontFamily: 'var(--font-main)',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: 'var(--text-secondary)',
                      padding: '8px 0',
                      cursor: 'pointer',
                      transition: 'var(--transition-smooth)',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {item.name}
                  </button>
                ) : (
                  <NavLink to={item.path} style={linkStyle}>
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              onClick={() => setIsCartOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                fontSize: '14px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
                padding: '8px 12px',
                borderRadius: '4px',
                marginRight: '12px',
              }}
              className="navbar-cart-btn"
            >
              <ShoppingBag size={16} />
              <span>Cart ({totalItems})</span>
            </button>

            <Button to="/contact" variant="primary">Get a Quote</Button>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="mobile-toggle"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'none', // Overridden in custom media CSS or inline layout checks
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none', gap: '20px', padding: 0, margin: 0 }}>
          {navItems.map((item) => (
            <li key={item.name} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
              {item.isAnchor ? (
                <button
                  onClick={() => handleAnchorClick(item.path)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: 'var(--font-main)',
                    fontSize: '18px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    textAlign: 'left',
                    width: '100%',
                    padding: 0,
                    cursor: 'pointer',
                  }}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    display: 'block',
                  }}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
        
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button
            onClick={() => {
              closeMenu();
              setIsCartOpen(true);
            }}
            style={{
              width: '100%',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '4px',
              padding: '12px',
              fontWeight: '600',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}
          >
            <ShoppingBag size={18} />
            <span>Cart ({totalItems})</span>
          </button>

          <Button to="/contact" variant="primary" style={{ width: '100%' }} onClick={closeMenu}>
            Get a Quote
          </Button>
        </div>
      </div>

      {/* Responsive stylesheet inject for navbar */}
      <style>{`
        .desktop-menu ul li a {
          position: relative;
        }
        .desktop-menu ul li a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--accent-gold);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .desktop-menu ul li a.active::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        
        .mobile-drawer {
          display: none;
        }
        
        .nav-logo {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-logo:hover {
          transform: translateY(-1px);
        }
        .nav-logo:hover span:first-child {
          background-color: var(--text-primary) !important;
          color: var(--bg-primary) !important;
        }

        @media (max-width: 991px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
          .mobile-drawer {
            display: flex !important;
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            height: calc(100vh - 80px);
            background-color: var(--bg-primary);
            flex-direction: column;
            padding: 40px 24px;
            gap: 24px;
            border-top: 1px solid var(--border-color);
            z-index: 999;
            transform: translateY(-10px);
            opacity: 0;
            pointer-events: none;
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .mobile-drawer.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }
          .mobile-drawer ul li {
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .mobile-drawer.open ul li {
            opacity: 1;
            transform: translateY(0);
          }
          .mobile-drawer.open ul li:nth-child(1) { transition-delay: 0.05s; }
          .mobile-drawer.open ul li:nth-child(2) { transition-delay: 0.1s; }
          .mobile-drawer.open ul li:nth-child(3) { transition-delay: 0.15s; }
          .mobile-drawer.open ul li:nth-child(4) { transition-delay: 0.2s; }
          .mobile-drawer.open ul li:nth-child(5) { transition-delay: 0.25s; }
          .mobile-drawer.open ul li:nth-child(6) { transition-delay: 0.3s; }
          .mobile-drawer.open ul li:nth-child(7) { transition-delay: 0.35s; }
          .mobile-drawer.open ul li:nth-child(8) { transition-delay: 0.4s; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
