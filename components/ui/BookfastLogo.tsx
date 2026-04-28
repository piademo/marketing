'use client';

import { useId } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoMarkProps {
  size?: number;
  className?: string;
}

export function BookfastLogoMark({ size = 32, className }: LogoMarkProps) {
  const id = useId();
  const gradId = `bf-grad-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6FB8E4" />
          <stop offset="55%" stopColor="#4FA1D8" />
          <stop offset="100%" stopColor="#1F6B9E" />
        </linearGradient>
      </defs>
      <g fill={`url(#${gradId})`}>
        <g transform="rotate(-6 20 11)">
          <path d="M 3 8.5 Q 3 6.5 5.5 6.5 L 33 6.5 Q 37 6.5 37 11 Q 37 15.5 33 15.5 L 5.5 15.5 Q 3 15.5 3 13.5 Z" />
        </g>
        <g transform="rotate(-4 20 22)">
          <path d="M 4 18.5 Q 4 16.5 7 16.5 L 32 16.5 Q 35 16.5 35 20.5 Q 35 25 30 25 L 7 25 Q 4 25 4 23 Z" />
        </g>
        <g transform="rotate(-3 20 31)">
          <path d="M 10 28.5 Q 10 26.5 13 26.5 L 27 26.5 Q 30 26.5 30 30.5 Q 30 34.5 27 34.5 L 13 34.5 Q 10 34.5 10 32.5 Z" />
        </g>
      </g>
    </svg>
  );
}

interface LogoProps {
  size?: number;
  className?: string;
  wordmarkClassName?: string;
  href?: string | null;
}

export function BookfastLogo({ size = 32, className, wordmarkClassName, href = '/' }: LogoProps) {
  const content = (
    <span className={cn('flex items-center gap-2', className)}>
      <BookfastLogoMark size={size} />
      <span className={cn('font-bold tracking-tight', wordmarkClassName)}>
        <span className="text-foreground dark:text-white">Book</span>
        <span style={{ color: '#4FA1D8' }}>Fast</span>
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="hover:opacity-80 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
}
