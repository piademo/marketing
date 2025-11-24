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
    <section className="relative -mt-8 pt-24 pb-24 text-white overflow-hidden">
      <Container>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-display-sm sm:text-display-md mb-6 font-bold tracking-tight">
            Todo tu negocio,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              sincronizado al segundo
            </span>
            .
          </h2>
          <p className="text-lg text-neutral-400 text-balance">
            Deja de usar papel y WhatsApps sueltos. BookFast centraliza cada aspecto de tu salón en un sistema operativo diseñado
            para la velocidad.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:min-h-[600px]">
          {/* FEATURE 1: AGENDA (Bloque Grande Vertical) */}
          <GlassCard className="md:col-span-1 md:row-span-2 flex flex-col justify-between group" gradient="subtle">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Agenda Inteligente</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Arrastra y suelta citas. Visualiza huecos libres al instante. Sincronización automática con Google Calendar
                para evitar dobles reservas.
              </p>
            </div>
            {/* Visual abstracto de calendario */}
            <div className="mt-8 -mb-6 -mx-4 bg-neutral-900/50 border-t border-white/10 p-4 rounded-t-xl h-56 relative overflow-hidden">
              <div className="absolute top-4 left-4 right-4 space-y-2 opacity-60">
                <div className="h-2 w-full bg-white/10 rounded" />
                <div className="flex gap-2">
                  <div className="h-12 w-1/3 bg-primary-500/30 rounded border border-primary-500/50" />
                  <div className="h-12 w-2/3 bg-transparent" />
                </div>
                <div className="h-2 w-full bg-white/10 rounded" />
              </div>
            </div>
          </GlassCard>

          {/* FEATURE 2: RECORDATORIOS (Bloque Ancho Horizontal) */}
          <GlassCard className="md:col-span-2 h-auto flex flex-col md:flex-row items-center gap-6 overflow-hidden group" gradient="strong">
            <div className="flex-1 py-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Adiós al "No-Show"</h3>
              </div>
              <p className="text-neutral-300 text-sm max-w-md">
                El sistema envía recordatorios automáticos por WhatsApp 24h antes. Si un cliente cancela, BookFast avisa
                automáticamente a tu lista de espera.
              </p>
            </div>
            {/* Simulación Chat WhatsApp */}
            <div className="w-full md:w-64 bg-white/5 rounded-xl border border-white/10 p-3 text-xs space-y-2 relative right-0 md:-right-8 transform md:rotate-3 transition-transform group-hover:rotate-0">
              <div className="bg-green-600/20 text-green-200 p-2 rounded-lg rounded-tr-none ml-auto max-w-[90%]">
                Hola Juan, recordatorio de tu cita mañana a las 17:00 ✂️
              </div>
              <div className="bg-neutral-800 text-neutral-300 p-2 rounded-lg rounded-tl-none max-w-[80%]">
                ¡Allí estaré! Gracias por avisar.
              </div>
            </div>
          </GlassCard>

          {/* FEATURE 3: MÉTRICAS (Cuadrado pequeño) */}
          <GlassCard className="md:col-span-1 h-full group">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Control de Caja</h3>
            <p className="text-neutral-400 text-sm">
              Sabe exactamente cuánto has facturado hoy, esta semana y este mes.
            </p>
          </GlassCard>

          {/* FEATURE 4: EQUIPO (Cuadrado pequeño) */}
          <GlassCard className="md:col-span-1 h-full group">
            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Gestión de Equipo</h3>
            <p className="text-neutral-400 text-sm">
              Comisiones automáticas y control de horarios para cada barbero.
            </p>
          </GlassCard>
        </div>

        <div className="mt-12 text-center opacity-50">
          <p className="text-sm">Y mucho más...</p>
        </div>
      </Container>
    </section>
  );
};

export default Features;
