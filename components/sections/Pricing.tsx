'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';
import { cn } from '@/lib/utils';

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
    <li className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-neutral-200">
      <span className="mt-0.5 inline-flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 shrink-0">
        <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
      </span>
      <span>{label}</span>
    </li>
  );
}

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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export default function Pricing() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 sm:mb-12 lg:mb-14 max-w-3xl text-center"
        >
          <h2 className="text-xl sm:text-display-sm lg:text-display-md font-semibold tracking-tight text-white text-balance">
            Una inversión que recuperas salvando UNA sola cita al mes.
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm lg:text-base text-neutral-300 px-2">
            El coste de un &quot;no-show&quot; suele ser mayor que tu suscripción mensual.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-3 md:items-stretch"
        >
          {/* Plan Starter */}
          <motion.div variants={itemVariants} className="relative flex flex-col rounded-2xl sm:rounded-3xl border border-neutral-800 bg-neutral-900/70 p-4 sm:p-5 lg:p-6 shadow-sm">
            <div className="mb-1 sm:mb-2 text-xs sm:text-sm font-semibold text-neutral-50">Starter</div>
            <div className="mb-2 sm:mb-3 flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-semibold text-white">29€</span>
              <span className="text-xs sm:text-sm text-neutral-400">/mes</span>
            </div>
            <p className="mb-3 sm:mb-4 text-[11px] sm:text-xs text-neutral-400">Ideal para 1-2 profesionales.</p>
            <ul className="mb-3 sm:mb-4 space-y-1.5 sm:space-y-2">
              {soloFeatures.map((item) => (
                <FeatureItem key={item} label={item} />
              ))}
            </ul>
            <div className="mt-auto">
              <Button as="link" href="/contacto" variant="outline" className="w-full text-xs sm:text-sm">
                Empezar con Starter
              </Button>
            </div>
          </motion.div>

          {/* Plan Professional (destacado) */}
          <motion.div variants={itemVariants}>
            <GlassCard
              gradient="subtle"
              className={cn(
                'relative flex flex-col h-full border-primary-500/40 bg-neutral-900/80 p-4 sm:p-5 lg:p-6 shadow-xl shadow-primary-500/30 sm:scale-105',
                'before:pointer-events-none before:absolute before:inset-0 before:rounded-[1.4rem] sm:before:rounded-[1.7rem] before:border before:border-transparent before:bg-[linear-gradient(135deg,rgba(59,130,246,0.6),rgba(236,72,153,0.6))] before:opacity-60 before:[mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] before:[mask-composite:exclude] before:p-px',
              )}
            >
              <div className="mb-2 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-primary-500/10 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-primary-200 w-fit">
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary-400" />
                Más Popular
              </div>
              <div className="mb-1 sm:mb-2 text-xs sm:text-sm font-semibold text-neutral-50">Professional</div>
              <div className="mb-2 sm:mb-3 flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-semibold text-white">79€</span>
                <span className="text-xs sm:text-sm text-neutral-400">/mes</span>
              </div>
              <p className="mb-3 sm:mb-4 text-[11px] sm:text-xs text-neutral-200">
                Para negocios en crecimiento.
              </p>
              <ul className="mb-3 sm:mb-4 space-y-1.5 sm:space-y-2">
                {proFeatures.map((item) => (
                  <FeatureItem key={item} label={item} />
                ))}
              </ul>
              <div className="mt-auto">
                <Button as="link" href="/contacto" variant="primary" className="w-full text-xs sm:text-sm">
                  Elegir Professional
                </Button>
              </div>
            </GlassCard>
          </motion.div>

          {/* Plan Enterprise */}
          <motion.div variants={itemVariants} className="relative flex flex-col rounded-2xl sm:rounded-3xl border border-neutral-800 bg-neutral-900/70 p-4 sm:p-5 lg:p-6 shadow-sm">
            <div className="mb-1 sm:mb-2 text-xs sm:text-sm font-semibold text-neutral-50">Enterprise</div>
            <div className="mb-2 sm:mb-3 flex items-baseline gap-1">
              <span className="text-lg sm:text-2xl font-semibold text-white">Personalizado</span>
            </div>
            <p className="mb-3 sm:mb-4 text-[11px] sm:text-xs text-neutral-400">Cadenas y grupos.</p>
            <ul className="mb-3 sm:mb-4 space-y-1.5 sm:space-y-2">
              {enterpriseFeatures.map((item) => (
                <FeatureItem key={item} label={item} />
              ))}
            </ul>
            <div className="mt-auto">
              <Button as="link" href="/contacto" variant="ghost" className="w-full text-xs sm:text-sm">
                Hablar con ventas
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
