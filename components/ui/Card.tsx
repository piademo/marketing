import React from 'react';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

export default function Card({ children, hover = false, className = '' }: CardProps) {
  const baseClass = hover ? 'card-hover' : 'card';
  return <div className={`${baseClass} ${className}`}>{children}</div>;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return <h3 className={`text-xl font-semibold text-foreground dark:text-white ${className}`}>{children}</h3>;
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className = '' }: CardDescriptionProps) {
  return <p className={`mt-2 text-sm text-neutral-400 ${className}`}>{children}</p>;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={className}>{children}</div>;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return <div className={`mt-6 ${className}`}>{children}</div>;
}
