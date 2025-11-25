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
    <section className="section min-h-screen">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600/35 via-primary-700/35 to-secondary-700/35 px-8 py-16 sm:px-16 lg:px-24 lg:py-20">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/12 blur-3xl" />
          {/* Optional noise layer for SaaS premium feel */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-display-sm sm:text-display-md mb-4 text-white text-balance">{title}</h2>
            <p className="mb-8 text-lg text-primary-50 sm:text-xl text-balance">{description}</p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                as="link"
                href={primaryButtonHref}
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="bg-white text-primary-700 hover:bg-neutral-50"
              >
                {primaryButtonText}
              </Button>
              <Button
                as="link"
                href={secondaryButtonHref}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
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
