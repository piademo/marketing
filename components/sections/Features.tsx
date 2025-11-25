import React from 'react';
import {
  Calendar,
  Users,
  MessageSquare,
  BarChart3,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';

const Features = () => {
  return (
    <section className="relative h-[100dvh] flex flex-col justify-center py-8 sm:py-12 lg:py-16 text-white overflow-hidden">
      <Container>
        <div className="mb-8 sm:mb-10 lg:mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-display-sm lg:text-display-md mb-3 sm:mb-4 font-bold tracking-tight">
            Todo tu negocio,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              sincronizado al segundo
            </span>
            .
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-400 text-balance px-2">
            Deja de usar papel y WhatsApps sueltos. BookFast centraliza cada aspecto de tu salón en un sistema operativo diseñado
            para la velocidad.
          </p>
        </div>

        {/* BENTO GRID LAYOUT - Optimized for viewport */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {/* FEATURE 1: AGENDA */}
          <GlassCard className="col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group p-4 sm:p-5" gradient="subtle">
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

          {/* FEATURE 2: RECORDATORIOS */}
          <GlassCard className="col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group p-4 sm:p-5" gradient="strong">
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

          {/* FEATURE 3: MÉTRICAS */}
          <GlassCard className="col-span-1 group p-4 sm:p-5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
              <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h3 className="text-sm sm:text-base font-semibold mb-1">Control de Caja</h3>
            <p className="text-neutral-400 text-[11px] sm:text-xs leading-relaxed">
              Facturación en tiempo real.
            </p>
          </GlassCard>

          {/* FEATURE 4: EQUIPO */}
          <GlassCard className="col-span-1 group p-4 sm:p-5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 mb-3">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h3 className="text-sm sm:text-base font-semibold mb-1">Gestión de Equipo</h3>
            <p className="text-neutral-400 text-[11px] sm:text-xs leading-relaxed">
              Comisiones y horarios automáticos.
            </p>
          </GlassCard>

          {/* FEATURE 5: Preview - Chat simulation */}
          <GlassCard className="col-span-2 p-4 sm:p-5 group" gradient="subtle">
            <p className="text-xs text-neutral-500 mb-2 uppercase tracking-wide">Vista previa</p>
            <div className="flex flex-col gap-2 text-xs">
              <div className="bg-green-600/20 text-green-200 p-2 rounded-lg rounded-tr-none ml-auto max-w-[85%]">
                Hola Juan, recordatorio de tu cita mañana a las 17:00 ✂️
              </div>
              <div className="bg-neutral-800 text-neutral-300 p-2 rounded-lg rounded-tl-none max-w-[75%]">
                ¡Allí estaré! Gracias 👍
              </div>
            </div>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
};

export default Features;
