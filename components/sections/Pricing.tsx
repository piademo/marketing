'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';
import { cn } from '@/lib/utils';
import BorderBeam from '@/components/ui/BorderBeam';
import PricingMobileCarousel from '@/components/sections/PricingMobileCarousel';
import { fadeInUp, staggerContainer, transition, viewport } from '@/lib/motion';

const soloFeatures = [
  '1 profesional incluido',
  'Agenda online básica',
  'Recordatorios por email',
];

const proFeatures = [
  'Hasta 5 profesionales',
  'Agenda avanzada',
  'WhatsApp automáticos',
  'Lista de espera',
  'Soporte prioritario',
];

const enterpriseFeatures = [
  '+5 locales o equipos',
  'Onboarding personalizado',
  'Integraciones a medida',
];

function FeatureItem({ label }: { label: string }) {
  return (
    <li className="flex items-start gap-1.5 sm:gap-2 text-sm sm:text-sm">
      <span className="mt-0.5 inline-flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 shrink-0">
        <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
      </span>
      <span>{label}</span>
    </li>
  );
}

export default function Pricing() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport.default}
          transition={transition.default}
          className="mx-auto mb-10 sm:mb-12 lg:mb-14 max-w-3xl text-center"
        >
          <h2 className="text-3xl sm:text-display-sm lg:text-display-md font-semibold tracking-tight text-foreground text-balance">
            Una inversión que recuperas salvando {" "}
            <span className="gradient-text">UNA sola cita</span> al mes.
          </h2>
          <p className="mt-2 sm:mt-3 text-base sm:text-base lg:text-base text-neutral-700 dark:text-neutral-300 px-2">
            El coste de un &quot;no-show&quot; suele ser mayor que tu suscripción mensual.
          </p>
        </motion.div>

        {/* Versión escritorio / desktop: grid estática de 3 columnas */}
        <div className="relative hidden lg:block">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewport.early}
            className="grid gap-5 lg:gap-6 grid-cols-3 items-stretch"
          >
            {/* Plan Starter */}
            <motion.div
              variants={fadeInUp}
              className="relative flex flex-col rounded-2xl sm:rounded-3xl border border-border bg-card p-4 sm:p-5 lg:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] dark:border-neutral-800 dark:bg-neutral-900/70 dark:shadow-sm text-center"
            >
              <div className="mb-1 sm:mb-2 text-sm sm:text-sm font-semibold text-foreground">Starter</div>
              <div className="mb-2 sm:mb-3 flex items-baseline justify-center gap-1">
                <span className="text-2xl sm:text-3xl font-semibold text-foreground">29€</span>
                <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">/mes</span>
              </div>
              <p className="mb-3 sm:mb-4 text-sm sm:text-xs text-neutral-700 dark:text-neutral-400">
                Ideal para 1-2 profesionales.
              </p>
              <ul className="mb-3 sm:mb-4 space-y-1.5 sm:space-y-2 text-neutral-800 dark:text-neutral-200 text-left mx-auto max-w-xs">
                {soloFeatures.map((item) => (
                  <FeatureItem key={item} label={item} />
                ))}
              </ul>
              <div className="mt-auto">
                <Button as="link" href="/contacto" variant="outline" className="w-full text-sm sm:text-sm">
                  Empezar con Starter
                </Button>
              </div>
            </motion.div>

            {/* Plan Professional (destacado) */}
            <motion.div
              variants={fadeInUp}
              className="relative rounded-3xl sm:rounded-[1.7rem]"
            >
              {/* BorderBeam recorre el borde EXTERIOR del wrapper con movimiento fluido */}
              <BorderBeam
                size={280}
                duration={18}
                delay={0}
                radius={24}
                colorFrom="#f97316"  /* Sunset naranja */
                colorTo="#fb7185"    /* Sunset rosa */
              />
              <GlassCard
                gradient="subtle"
                className={cn(
                  'relative flex flex-col h-full sm:scale-105 rounded-3xl sm:rounded-[1.7rem] border-primary-500/40 dark:bg-neutral-900/80 shadow-[0_20px_55px_rgba(249,115,22,0.18)] dark:shadow-primary-500/30 text-white',
                  'before:pointer-events-none before:absolute before:inset-0 before:rounded-[1.4rem] sm:before:rounded-[1.7rem] before:border before:border-transparent before:bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--secondary)))] before:opacity-60 before:[mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] before:[mask-composite:exclude] before:p-px',
                  'p-4 sm:p-5 lg:p-6',
                )}
              >
                <div className="flex h-full flex-col items-center text-center">
                  <div
                    className="mb-2 inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold w-fit bg-primary text-primary-foreground"
                  >
                    <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white/80" />
                    Más Popular
                  </div>
                  <div className="mb-1 sm:mb-2 text-sm sm:text-sm font-semibold text-white">Professional</div>
                  <div className="mb-2 sm:mb-3 flex items-baseline justify-center gap-1">
                    <span className="text-2xl sm:text-3xl font-semibold text-white">
                      79€
                    </span>
                    <span className="text-xs sm:text-sm text-neutral-200 dark:text-neutral-400">/mes</span>
                  </div>
                  <p className="mb-2 sm:mb-3 text-sm sm:text-xs text-neutral-100 dark:text-neutral-200">
                    Para negocios en crecimiento.
                  </p>
                  <ul className="mb-6 sm:mb-7 lg:mb-8 space-y-1.5 sm:space-y-2 text-neutral-100 dark:text-neutral-200 text-left mx-auto max-w-xs">
                    {proFeatures.map((item) => (
                      <FeatureItem key={item} label={item} />
                    ))}
                  </ul>
                  <div className="w-full">
                    <Button
                      as="link"
                      href="/contacto"
                      variant="primary"
                      className="w-full text-sm sm:text-sm bg-white !text-black hover:bg-white btn-cyber-animated"
                    >
                      Elegir Professional
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Plan Enterprise */}
            <motion.div
              variants={fadeInUp}
              className="relative flex flex-col rounded-2xl sm:rounded-3xl border border-border bg-card p-4 sm:p-5 lg:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] dark:border-neutral-800 dark:bg-neutral-900/70 dark:shadow-sm text-center"
            >
              <div className="mb-1 sm:mb-2 text-sm sm:text-sm font-semibold text-foreground">Enterprise</div>
              <div className="mb-2 sm:mb-3 flex items-baseline justify-center gap-1">
                <span className="text-lg sm:text-2xl font-semibold text-foreground">Personalizado</span>
              </div>
              <p className="mb-3 sm:mb-4 text-sm sm:text-xs text-neutral-700 dark:text-neutral-400">Cadenas y grupos.</p>
              <ul className="mb-3 sm:mb-4 space-y-1.5 sm:space-y-2 text-neutral-800 dark:text-neutral-200 text-left mx-auto max-w-xs">
                {enterpriseFeatures.map((item) => (
                  <FeatureItem key={item} label={item} />
                ))}
              </ul>
              <div className="mt-auto">
                <Button
                  as="link"
                  href="/contacto"
                  variant="ghost"
                  className="w-full text-sm sm:text-sm border border-border dark:border-neutral-700"
                >
                  Hablar con ventas
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Versión móvil / tablet: carrusel 3D tipo Cover Flow */}
        <div className="block lg:hidden mt-4">
          <PricingMobileCarousel />
        </div>
      </Container>
    </section>
  );
}
