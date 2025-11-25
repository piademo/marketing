'use client';

import React from 'react';
import { Settings, Link2, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import BookingWidgetPreview from '@/components/ui/BookingWidgetPreview';
import { cn } from '@/lib/utils';

const steps = [
  {
    icon: Settings,
    title: 'Configura una vez',
    description: 'Define servicios, precios y horarios en menos de 10 minutos.',
  },
  {
    icon: Link2,
    title: 'Comparte tu link',
    description: 'Pega tu enlace en WhatsApp, Instagram o tu web.',
  },
  {
    icon: MousePointer2,
    title: 'Recibes reservas 24/7',
    description: 'Ellos eligen servicio y hora. Tú solo ves la agenda llena.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-8 sm:gap-10 lg:gap-14 lg:grid-cols-2">
          {/* Columna izquierda: copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-5 sm:space-y-6 lg:space-y-8"
          >
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-xl sm:text-display-sm lg:text-display-md font-semibold tracking-tight text-white">
                Tus clientes reservan en segundos, no en minutos.
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-neutral-300 max-w-xl">
                Enséñales un enlace y deja que el sistema se encargue. Sin llamadas, sin notas en papel.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="space-y-3 sm:space-y-4"
            >
              {steps.map((step) => (
                <motion.div key={step.title} variants={itemVariants} className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-lg sm:rounded-xl border border-neutral-700 bg-neutral-900 text-primary-400 shadow-sm shrink-0">
                    <step.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-neutral-50">{step.title}</h3>
                    <p className="text-[11px] sm:text-xs lg:text-sm text-neutral-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Columna derecha: widget + badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div
              className={cn(
                'relative w-full max-w-[280px] sm:max-w-xs lg:max-w-sm',
                'transform-gpu lg:rotate-3 lg:translate-x-4',
              )}
            >
              <BookingWidgetPreview />

              {/* Badge flotante */}
              <div className="absolute -top-4 sm:-top-6 -right-2 sm:-right-4 lg:-right-10 flex items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl bg-emerald-500 px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold text-white shadow-lg shadow-emerald-500/40">
                <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white/10 text-[10px] sm:text-[11px]">
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
