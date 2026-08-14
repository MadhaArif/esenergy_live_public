import React from 'react';
import { RevealHeading, RevealEyebrow, RevealParagraph } from './ScrollReveal';

const SectionHeader = ({
  title,
  subtitle,
  description,
  align = 'center',
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
      {subtitle && (
        <RevealEyebrow customStyles={badgeStyle} delay={0}>
          {subtitle}
        </RevealEyebrow>
      )}
      <RevealHeading delay={60} customStyles={titleStyle}>
        {title}
      </RevealHeading>
      {description && (
        <RevealParagraph delay={140} customStyles={descStyle}>
          {description}
        </RevealParagraph>
      )}
    </div>
  );
};

export default SectionHeader;
