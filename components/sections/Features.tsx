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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

const Features = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 lg:mb-14 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-display-sm lg:text-display-md mb-3 sm:mb-4 font-bold tracking-tight text-foreground">
            Todo tu negocio,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              sincronizado al segundo
            </span>
            .
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-700 dark:text-neutral-300 text-balance px-2">
            Deja de usar papel y WhatsApps sueltos. BookFast centraliza cada aspecto de tu salón en un sistema operativo diseñado
            para la velocidad.
          </p>
        </motion.div>

        {/* BENTO GRID LAYOUT - Optimized for viewport */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5"
        >
          {/* FEATURE 1: AGENDA */}
          <motion.div variants={itemVariants} className="col-span-2">
            <GlassCard className="h-full flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group p-4 sm:p-5" gradient="subtle">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400 shrink-0 group-hover:scale-110 transition-transform">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-1">Agenda Inteligente</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Arrastra y suelta citas. Sincronización con Google Calendar.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* FEATURE 2: RECORDATORIOS */}
          <motion.div variants={itemVariants} className="col-span-2">
            <GlassCard className="h-full flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group p-4 sm:p-5" gradient="strong">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-1">Adiós al &quot;No-Show&quot;</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Recordatorios automáticos por WhatsApp 24h antes.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* FEATURE 3: MÉTRICAS */}
          <motion.div variants={itemVariants} className="col-span-1">
            <GlassCard className="h-full group p-4 sm:p-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold mb-1">Control de Caja</h3>
              <p className="text-neutral-400 text-[11px] sm:text-xs leading-relaxed">
                Facturación en tiempo real.
              </p>
            </GlassCard>
          </motion.div>

          {/* FEATURE 4: EQUIPO */}
          <motion.div variants={itemVariants} className="col-span-1">
            <GlassCard className="h-full group p-4 sm:p-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 mb-3">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold mb-1">Gestión de Equipo</h3>
              <p className="text-neutral-400 text-[11px] sm:text-xs leading-relaxed">
                Comisiones y horarios automáticos.
              </p>
            </GlassCard>
          </motion.div>

          {/* FEATURE 5: Preview - Chat simulation */}
          <motion.div variants={itemVariants} className="col-span-2">
            <GlassCard className="h-full p-4 sm:p-5 group" gradient="subtle">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2 uppercase tracking-wide">Vista previa</p>
              <div className="flex flex-col gap-2 text-xs">
                {/* Mensaje de BookFast */}
                <div className="p-2 rounded-lg rounded-tr-none ml-auto max-w-[85%] bg-green-100 text-green-900 dark:bg-green-600/20 dark:text-green-200">
                  Hola Juan, recordatorio de tu cita mañana a las 17:00 ✂️
                </div>
                {/* Respuesta del cliente */}
                <div className="p-2 rounded-lg rounded-tl-none max-w-[75%] bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300">
                  ¡Allí estaré! Gracias 👍
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
