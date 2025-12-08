'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { transition, viewport, usePrefersReducedMotion } from '@/lib/motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Tipo de animación: 'fadeInUp' | 'fadeIn' | 'scaleIn' | 'none' */
  variant?: 'fadeInUp' | 'fadeIn' | 'scaleIn';
  /** Desactivar animación completamente */
  disableAnimation?: boolean;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  variant = 'fadeInUp',
  disableAnimation = false,
}: AnimatedSectionProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (disableAnimation || prefersReducedMotion) {
    return <section className={cn('relative', className)}>{children}</section>;
  }

  const variants = {
    fadeInUp: {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
    },
  };

  const selectedVariant = variants[variant];

  return (
    <motion.section
      initial={selectedVariant.initial}
      whileInView={selectedVariant.animate}
      viewport={viewport.default}
      transition={{
        ...transition.default,
        delay,
      }}
      className={cn('relative', className)}
    >
      {children}
    </motion.section>
  );
}
