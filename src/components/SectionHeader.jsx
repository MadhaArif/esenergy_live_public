import React from 'react';

const SectionHeader = ({
  title,
  subtitle,
  description,
  align = 'center',
  className = '',
  ...props
}) => {
  const alignClass = align === 'center' ? 'section-header-center' : 'section-header-left';

  return (
    <header className={`section-header premium-section-header ${alignClass} ${className}`.trim()} {...props}>
      {subtitle ? <p className="section-eyebrow">{subtitle}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-desc">{description}</p> : null}
    </header>
  );
};

export default SectionHeader;
