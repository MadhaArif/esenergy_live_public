import React from 'react';

const Card = ({
  children,
  className = '',
  hoverable = true,
  padding = '24px',
  ...props
}) => {
  const cardStyle = {
    backgroundColor: 'var(--bg-primary)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: padding,
    transition: 'var(--transition-smooth)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    height: '100%',
  };

  const handleMouseEnter = (e) => {
    if (!hoverable) return;
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)';
    e.currentTarget.style.borderColor = 'var(--accent-light)';
  };

  const handleMouseLeave = (e) => {
    if (!hoverable) return;
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.borderColor = 'var(--border-color)';
  };

  return (
    <div
      style={cardStyle}
      className={`ui-card ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
