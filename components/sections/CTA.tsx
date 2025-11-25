'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CTA({
  title = '¿Sigues gestionando citas por WhatsApp?',
  description = 'Únete a 500+ barberos que han recuperado 10 horas libres a la semana.',
  primaryButtonText = 'Crear cuenta gratis',
  primaryButtonHref = '/contacto',
  secondaryButtonText = 'Hablar con ventas',
  secondaryButtonHref = '/contacto',
}: CTAProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary-600/35 via-primary-700/35 to-secondary-700/35 px-6 py-12 sm:px-12 sm:py-16 lg:px-24 lg:py-20"
        >
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-16 sm:-right-24 -top-16 sm:-top-24 h-48 sm:h-72 w-48 sm:w-72 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 sm:-bottom-24 -left-16 sm:-left-24 h-48 sm:h-72 w-48 sm:w-72 rounded-full bg-white/12 blur-3xl" />
          {/* Noise texture for premium feel */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl sm:text-display-sm lg:text-display-md mb-3 sm:mb-4 text-white text-balance"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 sm:mb-8 text-sm sm:text-lg lg:text-xl text-primary-50 text-balance px-2"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row"
            >
              <Button
                as="link"
                href={primaryButtonHref}
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="bg-white text-primary-700 hover:bg-neutral-50 text-sm sm:text-base"
              >
                {primaryButtonText}
              </Button>
              <Button
                as="link"
                href={secondaryButtonHref}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 text-sm sm:text-base"
              >
                {secondaryButtonText}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
