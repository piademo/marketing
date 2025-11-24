import React from 'react';

type BadgeVariant = 'primary' | 'success' | 'warning' | 'neutral';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'badge-primary',
  success: 'badge-success',
  warning: 'badge-warning',
  neutral: 'bg-neutral-100 text-neutral-700',
};

export default function Badge({ children, variant = 'neutral', className = '' }: BadgeProps) {
  return <span className={`badge ${variantClasses[variant]} ${className}`}>{children}</span>;
}
