import React from 'react';

type ContainerSize = 'default' | 'narrow' | 'wide';

interface ContainerProps {
  children: React.ReactNode;
  size?: ContainerSize;
  className?: string;
}

const sizeClasses: Record<ContainerSize, string> = {
  default: 'container-custom',
  narrow: 'container-narrow',
  wide: 'container-wide',
};

export default function Container({ children, size = 'default', className = '' }: ContainerProps) {
  return <div className={`${sizeClasses[size]} ${className}`}>{children}</div>;
}
