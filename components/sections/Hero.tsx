import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-24 lg:pb-32">
      {/* Background Gradients - Tech/Premium Feel */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl filter" />
      <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-secondary-500/10 blur-3xl filter" />

      <Container>
        <div className="flex flex-col items-center text-center">
          {/* Badge: Social Proof / FOMO */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Badge variant="neutral" className="border-primary-200 bg-primary-50 text-primary-800 px-4 py-1.5">
              <Sparkles className="mr-2 h-3.5 w-3.5 text-primary-600" />
              <span className="font-medium">La plataforma #1 para Barberías Modernas</span>
            </Badge>
          </div>

          {/* H1: Value Proposition (Clear & Bold) */}
          <h1 className="mb-6 max-w-4xl text-display-md font-bold tracking-tight text-neutral-950 sm:text-display-lg animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 text-balance">
            Tu agenda llena, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">cero llamadas perdidas</span> y adiós al papel.
          </h1>

          {/* Subhead: Pain Points resolution */}
          <p className="mb-10 max-w-2xl text-lg text-neutral-600 sm:text-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 text-balance">
            BookFast automatiza tus citas y recordatorios por WhatsApp para que dejes de perder el 20% de tus ingresos en "no-shows". Configuración en 5 minutos.
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
