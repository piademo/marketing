'use client';

import React from 'react';
import {
  Calendar,
  Users,
  MessageSquare,
  BarChart3,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import { fadeInUp, staggerContainer, transition, viewport } from '@/lib/motion';

const Features = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport.default}
          transition={transition.default}
          className="mb-10 sm:mb-12 lg:mb-14 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-display-sm lg:text-display-md mb-3 sm:mb-4 font-bold tracking-tight text-foreground">
            Todo tu negocio,{' '}
            <span className="gradient-text">sincronizado al segundo</span>.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-300 text-balance px-2">
            Deja de usar papel y WhatsApps sueltos. BookFast centraliza cada aspecto de tu salón en un sistema diseñado
            para la velocidad.
          </p>
        </motion.div>

        {/* BENTO GRID */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewport.early}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5"
        >
          {/* FEATURE 1: AGENDA */}
          <motion.div variants={fadeInUp} className="col-span-2">
            <GlassCard className="h-full flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group p-4 sm:p-5" gradient="subtle">
              <div
                style={{ transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)' }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-100 dark:bg-primary-500/20 flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0 group-hover:scale-110"
              >
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 text-foreground">Agenda Inteligente</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Arrastra y suelta citas. Sincronización automática con Google Calendar.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* FEATURE 2: NO-SHOW */}
          <motion.div variants={fadeInUp} className="col-span-2">
            <GlassCard className="h-full flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group p-4 sm:p-5" gradient="subtle">
              <div
                style={{ transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)' }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-110"
              >
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 text-foreground">Adiós al &quot;No-Show&quot;</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Recordatorios automáticos por WhatsApp 24h antes de cada cita.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* FEATURE 3: CAJA */}
          <motion.div variants={fadeInUp} className="col-span-1">
            <GlassCard className="h-full group p-4 sm:p-5" gradient="subtle">
              <div
                style={{ transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)' }}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary-100 dark:bg-secondary-500/20 flex items-center justify-center text-secondary-600 dark:text-secondary-400 mb-3 group-hover:scale-110"
              >
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold mb-1 text-foreground">Control de Caja</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-[11px] sm:text-xs leading-relaxed">
                Facturación en tiempo real.
              </p>
            </GlassCard>
          </motion.div>

          {/* FEATURE 4: EQUIPO */}
          <motion.div variants={fadeInUp} className="col-span-1">
            <GlassCard className="h-full group p-4 sm:p-5" gradient="subtle">
              <div
                style={{ transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)' }}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary-100 dark:bg-primary-500/20 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-3 group-hover:scale-110"
              >
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold mb-1 text-foreground">Gestión de Equipo</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-[11px] sm:text-xs leading-relaxed">
                Comisiones y horarios automáticos.
              </p>
            </GlassCard>
          </motion.div>

          {/* FEATURE 5: Preview WhatsApp */}
          <motion.div variants={fadeInUp} className="col-span-2">
            <GlassCard className="h-full p-4 sm:p-5 group" gradient="subtle">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-wider font-medium">
                Vista previa — Recordatorio automático
              </p>
              <div className="flex flex-col gap-2 text-xs">
                <div className="p-2.5 rounded-xl rounded-tr-none ml-auto max-w-[85%] bg-emerald-50 text-emerald-900 border border-emerald-100 dark:bg-emerald-600/20 dark:text-emerald-200 dark:border-emerald-500/20">
                  Hola Juan, recordatorio de tu cita mañana a las 17:00. ¿Confirmamos?
                </div>
                <div className="p-2.5 rounded-xl rounded-tl-none max-w-[70%] bg-white text-neutral-800 border border-neutral-100 shadow-sm dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-700">
                  ¡Confirmado! Allí estaré. Gracias.
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Features;
