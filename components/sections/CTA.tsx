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
  title = '¿Listo para transformar tu negocio?',
  description = 'Únete a cientos de profesionales que ya confían en BookFast para gestionar sus citas.',
  primaryButtonText = 'Empezar gratis',
  primaryButtonHref = '/contacto',
  secondaryButtonText = 'Hablar con ventas',
  secondaryButtonHref = '/contacto',
}: CTAProps) {
  return (
    <section className="section">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 px-8 py-16 sm:px-16 lg:px-24 lg:py-20">
          {/* Decorative elements */}
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl"></div>

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-display-sm sm:text-display-md mb-4 text-white">{title}</h2>
            <p className="mb-8 text-lg text-primary-50 sm:text-xl">{description}</p>

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
