import React from 'react';

const SectionHeader = ({
  title,
  subtitle,
  description,
  align = 'center', // 'center' | 'left'
  className = '',
  ...props
}) => {
  const containerStyle = {
    textAlign: align,
    maxWidth: '700px',
    margin: align === 'center' ? '0 auto 48px auto' : '0 0 48px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: align === 'center' ? 'center' : 'flex-start',
    gap: '12px',
  };

  const badgeStyle = {
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    color: 'var(--accent-light)',
    marginBottom: '4px',
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: '700',
    color: 'var(--text-primary)',
    margin: 0,
    lineHeight: '1.25',
  };

  const descStyle = {
    fontSize: '16px',
    color: 'var(--text-secondary)',
    margin: '8px 0 0 0',
    lineHeight: '1.5',
  };

  return (
    <div style={containerStyle} className={`section-header ${className}`} {...props}>
      {subtitle && <span style={badgeStyle}>{subtitle}</span>}
      <h2 style={titleStyle}>{title}</h2>
      {description && <p style={descStyle}>{description}</p>}
    </div>
  );
};

export default SectionHeader;
