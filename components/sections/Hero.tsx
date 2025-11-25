'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full flex flex-col justify-center overflow-hidden py-12 sm:py-16 lg:py-20 text-white">

      <Container>
        <div className="flex flex-col items-center text-center">
          {/* Badge: Social Proof / FOMO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 sm:mb-6 lg:mb-8"
          >
            <Badge variant="neutral" className="border-primary-500/40 bg-white/10 text-primary-50 px-3 sm:px-4 py-1 sm:py-1.5 backdrop-blur-sm">
              <Sparkles className="mr-1.5 sm:mr-2 h-3 sm:h-3.5 w-3 sm:w-3.5 text-primary-400" />
              <span className="font-medium text-xs sm:text-sm">La plataforma #1 para Barberías Modernas</span>
            </Badge>
          </motion.div>

          {/* H1: Value Proposition (SEO + CRO) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 sm:mb-6 max-w-4xl text-3xl sm:text-display-sm md:text-display-md lg:text-display-lg font-bold tracking-tight text-white text-balance"
          >
            Tu negocio en piloto automático.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Tu agenda siempre llena.
            </span>
          </motion.h1>

          {/* Subhead: Phone / Reservations 24-7 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 sm:mb-8 lg:mb-10 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 text-balance px-2"
          >
            Deja de perder horas al teléfono. BookFast permite que tus clientes reserven 24/7 desde
            su móvil mientras tú te centras en el servicio. Sin comisiones por reserva y con
            recordatorios automáticos por WhatsApp para reducir los no-shows.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6 sm:mb-8 lg:mb-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row"
          >
            <Button as="link" href="/contacto" size="lg" icon={ArrowRight} iconPosition="right">
              Empezar gratis
            </Button>
            <Button as="link" href="/como-funciona" variant="outline" size="lg">
              Ver cómo funciona
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-neutral-300"
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 shrink-0" />
              <span>Sin permanencia</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 shrink-0" />
              <span>Configuración en 5 min</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 shrink-0" />
              <span>Soporte en español</span>
            </div>
          </motion.div>

          {/* Logos strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 sm:mt-8 w-full border-t border-white/5 pt-4 sm:pt-6"
          >
            <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-500 text-center">
              Confían en nosotros
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-neutral-600">
              <span className="font-semibold text-neutral-400">Barbería Central</span>
              <span className="font-semibold text-neutral-500">Glow Studio</span>
              <span className="font-semibold text-neutral-500 hidden sm:inline">Linea Fade Club</span>
              <span className="font-semibold text-neutral-600 hidden md:inline">Estética 360</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
