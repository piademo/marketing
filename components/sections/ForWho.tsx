'use client';

import React from 'react';
import { Scissors, Sparkles, Flower2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Card, { CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const sectors = [
  {
    href: '/sectores/barberias',
    icon: Scissors,
    label: 'Barberías',
    description: 'Ritmo rápido, walk-ins y agendas llenas. Mantén el flujo sin perder llamadas.',
    iconBg: 'from-primary-500 to-primary-600',
    iconShadow: 'shadow-primary-500/25',
  },
  {
    href: '/sectores/peluquerias',
    icon: Sparkles,
    label: 'Peluquerías',
    description: 'Salones exigentes con tickets medios altos y clientela fiel.',
    iconBg: 'from-secondary-500 to-secondary-600',
    iconShadow: 'shadow-secondary-500/25',
  },
  {
    href: '/sectores/centros-estetica',
    icon: Flower2,
    label: 'Centros de Estética',
    description: 'Tratamientos prolongados y gestión de cabinas optimizada.',
    iconBg: 'from-primary-400 to-secondary-500',
    iconShadow: 'shadow-primary-500/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function ForWho() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mx-auto max-w-3xl text-center mb-10 sm:mb-12 lg:mb-14"
        >
          <h2 className="text-3xl sm:text-display-sm lg:text-display-md mb-3 sm:mb-4 font-bold tracking-tight text-foreground text-balance">
            ¿Para quién es{' '}
            <span className="gradient-text">BookFast</span>?
          </h2>
          <p className="text-base sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-300 px-2">
            Pensado para negocios de belleza que viven de la agenda: barberías, peluquerías y centros de estética.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {sectors.map((sector) => (
            <motion.div key={sector.href} variants={itemVariants}>
              <Card hover className="h-full p-4 sm:p-6 group">
                <CardHeader className="p-0 mb-4">
                  <div
                    className={cn(
                      'mb-3 sm:mb-4 inline-flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-xl sm:rounded-2xl',
                      'bg-gradient-to-br text-white shadow-md',
                      sector.iconBg,
                      sector.iconShadow,
                    )}
                    style={{ transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  >
                    <sector.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-lg">{sector.label}</CardTitle>
                  <CardDescription className="text-sm sm:text-sm text-neutral-600 dark:text-neutral-400">
                    {sector.description}
                  </CardDescription>
                </CardHeader>
                <Button as="link" href={sector.href} variant="outline" fullWidth className="text-sm">
                  Ver más detalles
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
