import React from 'react';
import { ArrowRight } from 'lucide-react';
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
    <section className="h-[100dvh] flex flex-col justify-center py-8 sm:py-12 lg:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary-600/35 via-primary-700/35 to-secondary-700/35 px-6 py-10 sm:px-12 sm:py-14 lg:px-24 lg:py-16">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-16 sm:-right-24 -top-16 sm:-top-24 h-48 sm:h-72 w-48 sm:w-72 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 sm:-bottom-24 -left-16 sm:-left-24 h-48 sm:h-72 w-48 sm:w-72 rounded-full bg-white/12 blur-3xl" />
          {/* Optional noise layer for SaaS premium feel */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-xl sm:text-display-sm lg:text-display-md mb-3 sm:mb-4 text-white text-balance">{title}</h2>
            <p className="mb-6 sm:mb-8 text-sm sm:text-lg lg:text-xl text-primary-50 text-balance px-2">{description}</p>

            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
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
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
