import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';

export default function Hero() {
  return (
    <section className="relative -mt-16 overflow-hidden pt-20 pb-24 lg:-mt-20 lg:pt-24 lg:pb-32 text-white">
      {/* Soft background details */}
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-primary-500/18 blur-3xl" />
      <div className="pointer-events-none absolute top-1/4 right-0 h-72 w-72 rounded-full bg-secondary-500/14 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <Container>
        <div className="flex flex-col items-center text-center">
          {/* Badge: Social Proof / FOMO */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Badge variant="neutral" className="border-primary-500/40 bg-white/10 text-primary-50 px-4 py-1.5 backdrop-blur-sm">
              <Sparkles className="mr-2 h-3.5 w-3.5 text-primary-400" />
              <span className="font-medium">La plataforma #1 para Barberías Modernas</span>
            </Badge>
          </div>

          {/* H1: Value Proposition (SEO + CRO) */}
          <h1 className="mb-6 max-w-4xl text-display-md font-bold tracking-tight text-white sm:text-display-lg animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 text-balance">
            Tu negocio en piloto automático.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Tu agenda siempre llena.
            </span>
          </h1>

          {/* Subhead: Phone / Reservations 24-7 */}
          <p className="mb-10 max-w-2xl text-lg text-neutral-300 sm:text-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 text-balance">
            Deja de perder horas al teléfono. BookFast permite que tus clientes reserven 24/7 desde
            su móvil mientras tú te centras en el servicio. Sin comisiones por reserva y con
            recordatorios automáticos por WhatsApp para reducir los no-shows.
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
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-300">
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

          {/* Logos strip */}
          <div className="mt-8 w-full border-t border-white/5 pt-6">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-500 text-center">
              Confían en nosotros
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-600">
              <span className="font-semibold text-neutral-400">Barbería Central</span>
              <span className="font-semibold text-neutral-500">Glow Studio</span>
              <span className="font-semibold text-neutral-500">Linea Fade Club</span>
              <span className="font-semibold text-neutral-600">Estética 360</span>
            </div>
          </div>
        </div>

        {/* Hero Image / Mockup */}
        <div className="mt-16 lg:mt-20">
          <div className="relative mx-auto max-w-5xl">
            <div className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900/40 via-neutral-950/60 to-neutral-900/20 shadow-strong overflow-hidden">
              <div className="flex h-full items-center justify-center text-neutral-400">
                {/* Placeholder para screenshot del producto */}
                <div className="text-center">
                  <div className="mb-4 text-6xl">📅</div>
                  <p className="text-sm text-neutral-300">Vista previa del panel de gestión</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -left-4 top-1/4 h-72 w-72 rounded-full bg-primary-500/30 opacity-40 blur-3xl" />
            <div className="absolute -right-4 bottom-1/4 h-72 w-72 rounded-full bg-secondary-500/30 opacity-40 blur-3xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}
