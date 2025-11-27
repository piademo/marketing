"use client";

import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import TiltCard from '@/components/ui/TiltCard';

export default function Hero() {
  return (
    // Mantenemos la estructura pero sin los divs de fondo "extra"
    <section className="relative -mt-16 overflow-hidden pt-24 pb-24 lg:-mt-20 lg:pt-28 lg:pb-32">
      {/* ELIMINADO: Las capas de ruido y color locales que causaban el corte.
         Ahora el Hero es totalmente transparente y mostrará el mismo SpotlightBackground que Features.
      */}

      <Container>
        <div className="flex flex-col items-center text-center">
          {/* Badge: Social Proof / FOMO */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Badge
              variant="neutral"
              className="border border-[#f97316]/40 bg-white/90 text-[#f97316] shadow-sm dark:border-primary-500/40 dark:bg-white/10 dark:text-primary-50 px-4 py-1.5 backdrop-blur-sm"
            >
              <Sparkles className="mr-2 h-3.5 w-3.5 text-[#f97316] dark:text-primary-400" />
              <span className="font-medium text-foreground dark:text-primary-50">
                La plataforma #1 para Barberías Modernas
              </span>
            </Badge>
          </div>

          {/* H1: Value Proposition */}
          <h1 className="mb-6 max-w-4xl text-display-md font-bold tracking-tight text-foreground sm:text-display-lg animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 text-balance">
            Tu agenda llena,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">cero llamadas perdidas</span> y adiós al papel.
          </h1>

          {/* Subhead */}
          <p className="mb-10 max-w-2xl text-lg text-neutral-700 dark:text-neutral-300 sm:text-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 text-balance">
            BookFast automatiza tus citas y recordatorios por WhatsApp para que dejes de perder el 20% de tus ingresos en "no-shows". 
          </p>

          {/* CTAs */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              as="link"
              href="/contacto"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              className="text-white"
            >
              Empezar gratis
            </Button>
            <Button
              as="link"
              href="/como-funciona"
              variant="outline"
              size="lg"
              className="text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white"
            >
              Ver cómo funciona
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
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

        {/* Hero Image / Mockup con efecto Tilt 3D */}
        <div className="mt-16 lg:mt-20">
          <TiltCard className="mx-auto max-w-5xl rounded-2xl">
            <div className="relative">
              <div className="aspect-video rounded-2xl border border-neutral-200/80 dark:border-white/10 bg-card dark:bg-gradient-to-br dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 shadow-[0_18px_45px_rgba(15,23,42,0.12)] dark:shadow-strong overflow-hidden">
                <div className="flex h-full items-center justify-center text-neutral-700 dark:text-neutral-400">
                  <div className="text-center">
                    <div className="mb-4 text-6xl">📅</div>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">Vista previa del panel de gestión</p>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </Container>
    </section>
  );
}
