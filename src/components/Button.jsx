'use client';

import Link from 'next/link';

const Button = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  className = '',
  disabled = false,
  ...props
}) => {
  const destination = href || to;

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-main)',
    fontSize: '14px',
    fontWeight: '700',
    padding: '11px 22px',
    borderRadius: '999px',
    border: '1px solid transparent',
    transition: 'var(--transition-smooth)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    width: 'fit-content',
    letterSpacing: '0.01em',
  };

  const variants = {
    primary: {
      backgroundImage: 'var(--gradient-solar)',
      backgroundColor: 'var(--brand-green)',
      color: '#ffffff',
      borderColor: 'transparent',
      boxShadow: '0 10px 28px -10px rgba(24, 176, 122, 0.5)',
    },
    secondary: {
      backgroundColor: 'var(--bg-tertiary)',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-color)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-color)',
    },
    text: {
      backgroundColor: 'transparent',
      color: 'var(--brand-blue)',
      border: 'none',
      padding: '4px 8px',
    },
  };

  const selectedStyle = variants[variant] || variants.primary;
  const { style: customStyle, ...restProps } = props;

  const elementProps = {
    className: `custom-btn ${className}`,
    disabled,
    ...restProps,
    style: { ...baseStyle, ...selectedStyle, ...customStyle },
  };

  if (destination) {
    return (
      <Link href={destination} {...elementProps} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} {...elementProps}>
      {children}
    </button>
  );
};

export default Button;
