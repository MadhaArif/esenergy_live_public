import React from 'react';
import { Link } from 'react-router-dom';
import { contactConfig } from '../data';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#0f172a',
    padding: '80px 0 40px 0',
    color: 'rgba(248, 250, 252, 0.8)',
    fontSize: '14px',
    borderTop: 'none',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
    gap: '40px',
    marginBottom: '60px',
  };

  const colStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const titleStyle = {
    fontSize: '13px',
    fontWeight: '700',
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '4px',
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };

  const linkStyle = {
    color: 'rgba(248, 250, 252, 0.8)',
    textDecoration: 'none',
    transition: 'var(--transition-smooth)',
  };

  const subFooterStyle = {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
    color: 'rgba(248, 250, 252, 0.5)',
    fontSize: '12px',
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = 'var(--accent-gold)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = 'rgba(248, 250, 252, 0.8)';
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <div style={gridStyle} className="footer-grid">
          {/* Column 1: Brand */}
          <div style={colStyle}>
            <Link to="/" style={{ fontSize: '20px', fontWeight: '800', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <span style={{ border: '2px solid #ffffff', padding: '1px 6px', borderRadius: '4px', fontSize: '16px' }}>EN</span>
              <span>EN Energy</span>
            </Link>
            <p style={{ margin: '8px 0', maxWidth: '320px', lineHeight: '1.5', color: 'rgba(248, 250, 252, 0.7)' }}>
              Engineering-led solar solutions designed around real energy needs.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div style={colStyle}>
            <h4 style={titleStyle}>Quick Links</h4>
            <ul style={listStyle}>
              <li><Link to="/" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Home</Link></li>
              <li><Link to="/about" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>About Us</Link></li>
              <li><Link to="/solutions" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Solutions</Link></li>
              <li><Link to="/industries" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Industries</Link></li>
              <li><Link to="/projects" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Projects</Link></li>
              <li><Link to="/why-us" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Why Us</Link></li>
              <li><Link to="/insights" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Insights & Blog</Link></li>
              <li><Link to="/contact" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Sectors */}
          <div style={colStyle}>
            <h4 style={titleStyle}>Our Sectors</h4>
            <ul style={listStyle}>
              <li><Link to="/solutions?sector=residential" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Residential Solar</Link></li>
              <li><Link to="/solutions?sector=commercial" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Commercial Solar</Link></li>
              <li><Link to="/solutions?sector=industrial" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Industrial Solar</Link></li>
              <li><Link to="/solutions" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Net Metering Systems</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div style={colStyle}>
            <h4 style={titleStyle}>Contact Info</h4>
            <ul style={listStyle}>
              {contactConfig.phoneNumber && (
                <li>
                  <strong style={{ color: '#ffffff' }}>Phone:</strong><br />
                  {contactConfig.phoneNumber}
                </li>
              )}
              <li>
                <strong style={{ color: '#ffffff' }}>Email:</strong><br />
                <a href={`mailto:${contactConfig.approvedEmail}`} style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  {contactConfig.approvedEmail}
                </a>
              </li>
              {contactConfig.officeAddress && (
                <li>
                  <strong style={{ color: '#ffffff' }}>Office Address:</strong><br />
                  {contactConfig.officeAddress}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Sub-Footer */}
        <div style={subFooterStyle}>
          <div>
            © 2026 EN Energy. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/privacy-policy" style={{ color: 'rgba(248, 250, 252, 0.5)', textDecoration: 'none', transition: 'var(--transition-smooth)' }} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = 'rgba(248, 250, 252, 0.5)'}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: 'rgba(248, 250, 252, 0.5)', textDecoration: 'none', transition: 'var(--transition-smooth)' }} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = 'rgba(248, 250, 252, 0.5)'}>Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Footer responsive styles */}
      <style>{`
        @media (max-width: 991px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 30px !important;
          }
        }
        @media (max-width: 575px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
