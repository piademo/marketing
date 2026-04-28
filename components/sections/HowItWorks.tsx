'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import BookingWidgetPreview from '@/components/ui/BookingWidgetPreview';
import { cn } from '@/lib/utils';
import { fadeInUp, staggerContainer, transition, viewport } from '@/lib/motion';

const steps = [
  {
    number: '1',
    title: 'Configura una vez',
    description: 'Define servicios, precios y horarios en menos de 10 minutos.',
  },
  {
    number: '2',
    title: 'Comparte tu link',
    description: 'Pega tu enlace en WhatsApp, Instagram o tu web.',
  },
  {
    number: '3',
    title: 'Recibes reservas 24/7',
    description: 'Ellos eligen servicio y hora. Tú solo ves la agenda llena.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-8 sm:gap-10 lg:gap-14 lg:grid-cols-2">
          {/* Columna izquierda: copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport.default}
            transition={transition.default}
            className="space-y-5 sm:space-y-6 lg:space-y-8"
          >
            <div className="space-y-2 sm:space-y-3 text-center mb-4 sm:mb-5">
              <h2 className="text-3xl sm:text-display-sm lg:text-display-md font-bold tracking-tight text-foreground">
                Tus clientes reservan en{' '}
                <span className="gradient-text">segundos</span>, no en minutos.
              </h2>
              <p className="text-base sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
                Enséñales un enlace y deja que el sistema se encargue. Sin llamadas, sin notas en papel.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={viewport.early}
              className="space-y-4 sm:space-y-5 mt-6 sm:mt-8 lg:mt-10 mb-8 sm:mb-10 lg:mb-12"
            >
              {steps.map((step) => (
                <motion.div key={step.title} variants={fadeInUp} className="flex items-start gap-4 sm:gap-5">
                  {/* Numbered circle */}
                  <div
                    className={cn(
                      'flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full',
                      'bg-gradient-to-br from-primary-500 to-secondary-500',
                      'text-white font-bold text-sm sm:text-base shadow-md shadow-primary-500/20',
                    )}
                  >
                    {step.number}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-sm sm:text-base font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-0.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Columna derecha: widget + badge */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport.default}
            transition={transition.slow}
            className="relative flex justify-center lg:justify-end mt-8 sm:mt-10 lg:mt-12"
          >
            <div
              className={cn(
                'relative w-full max-w-[280px] sm:max-w-xs lg:max-w-sm',
                'transform-gpu lg:rotate-3 lg:translate-x-4',
              )}
            >
              <BookingWidgetPreview />

              {/* Badge flotante */}
              <div className="absolute -top-4 sm:-top-6 -right-2 sm:-right-4 lg:-right-10 flex items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl bg-emerald-500 px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold text-white shadow-lg shadow-emerald-500/30">
                <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white/15 text-[10px] sm:text-[11px] font-bold">
                  +30%
                </span>
                <span>Reservas en 3 meses</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
