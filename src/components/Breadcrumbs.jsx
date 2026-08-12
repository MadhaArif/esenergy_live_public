import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = ({ paths = [] }) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    color: 'var(--text-secondary)',
    marginBottom: '24px',
    flexWrap: 'wrap',
  };

  const linkStyle = {
    color: 'var(--text-secondary)',
    fontWeight: '500',
    transition: 'var(--transition-smooth)',
  };

  const activeStyle = {
    color: 'var(--text-muted)',
    fontWeight: '400',
  };

  return (
    <nav aria-label="Breadcrumb" style={containerStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      
      {paths.map((path, index) => {
        const isLast = index === paths.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight size={14} style={{ color: 'var(--text-muted)' }} />
            {isLast ? (
              <span style={activeStyle}>{path.label}</span>
            ) : (
              <Link to={path.url} style={linkStyle}>
                {path.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
