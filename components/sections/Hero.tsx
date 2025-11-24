import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function Hero() {
  return (
    <section className="section-lg bg-gradient-to-b from-neutral-50 to-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
            </span>
            Nuevo: Integración con WhatsApp disponible
          </div>

          {/* Headline */}
          <h1 className="text-display-md sm:text-display-lg mb-6 text-balance">
            Gestiona tu salón de belleza con{' '}
            <span className="gradient-text">inteligencia</span>
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-lg text-neutral-600 sm:text-xl text-balance max-w-2xl mx-auto">
            Software profesional de gestión de citas para peluquerías, barberías y centros de
            estética. Ahorra tiempo, reduce ausencias y mantén tu agenda siempre llena.
          </p>

          {/* CTAs */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button as="link" href="/contacto" size="lg" icon={ArrowRight} iconPosition="right">
              Empezar gratis
            </Button>
            <Button as="link" href="/como-funciona" variant="outline" size="lg">
              Ver cómo funciona
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Sin permanencia</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Configuración en 5 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Soporte en español</span>
            </div>
          </div>
        </div>

        {/* Hero Image / Mockup */}
        <div className="mt-16 lg:mt-20">
          <div className="relative mx-auto max-w-5xl">
            <div className="aspect-video rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-100 to-neutral-50 shadow-strong overflow-hidden">
              <div className="flex h-full items-center justify-center text-neutral-400">
                {/* Placeholder para screenshot del producto */}
                <div className="text-center">
                  <div className="mb-4 text-6xl">📅</div>
                  <p className="text-sm">Vista previa del panel de gestión</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -left-4 top-1/4 h-72 w-72 rounded-full bg-primary-200 opacity-20 blur-3xl"></div>
            <div className="absolute -right-4 bottom-1/4 h-72 w-72 rounded-full bg-secondary-200 opacity-20 blur-3xl"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
