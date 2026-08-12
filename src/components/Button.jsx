import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  to,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'text'
  type = 'button',
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-main)',
    fontSize: '14px',
    fontWeight: '600',
    padding: '10px 20px',
    borderRadius: '6px',
    border: '1px solid transparent',
    transition: 'var(--transition-smooth)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    width: 'fit-content',
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--accent-color)',
      color: 'var(--bg-primary)',
      borderColor: 'var(--accent-color)',
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
      color: 'var(--accent-light)',
      border: 'none',
      padding: '4px 8px',
    }
  };

  const selectedStyle = variants[variant] || variants.primary;
  
  // Custom hover transitions defined dynamically (to keep CSS modular/contained)
  const handleMouseEnter = (e) => {
    if (disabled) return;
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
      e.currentTarget.style.borderColor = 'var(--accent-hover)';
    } else if (variant === 'secondary' || variant === 'outline') {
      e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
      e.currentTarget.style.borderColor = 'var(--accent-light)';
    } else if (variant === 'text') {
      e.currentTarget.style.color = 'var(--accent-hover)';
    }
  };

  const handleMouseLeave = (e) => {
    if (disabled) return;
    e.currentTarget.style.backgroundColor = selectedStyle.backgroundColor;
    e.currentTarget.style.borderColor = selectedStyle.borderColor || 'transparent';
    e.currentTarget.style.color = selectedStyle.color;
  };

  const { style: customStyle, ...restProps } = props;

  const elementProps = {
    className: `custom-btn ${className}`,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    disabled,
    ...restProps,
    style: { ...baseStyle, ...selectedStyle, ...customStyle },
  };

  if (to) {
    return (
      <Link to={to} {...elementProps}>
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
