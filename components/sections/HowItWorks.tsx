import React from 'react';
import { Settings, Link2, MousePointer2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import BookingWidgetPreview from '@/components/ui/BookingWidgetPreview';
import { cn } from '@/lib/utils';

const steps = [
  {
    icon: Settings,
    title: 'Configura una vez',
    description: 'Define servicios, precios y horarios en menos de 10 minutos. No necesitas ser "tecnológico".',
  },
  {
    icon: Link2,
    title: 'Comparte tu link',
    description: 'Pega tu enlace en WhatsApp, Instagram o tu web. Tus clientes lo guardan como si fuera un contacto más.',
  },
  {
    icon: MousePointer2,
    title: 'Recibes reservas 24/7',
    description: 'Ellos eligen servicio y hora. Tú solo ves la agenda llena sin contestar un solo mensaje.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 min-h-screen">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Columna izquierda: copy */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-display-sm sm:text-display-md font-semibold tracking-tight text-white">
                Tus clientes reservan en segundos, no en minutos.
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 max-w-xl">
                Enséñales un enlace y deja que el sistema se encargue. Sin llamadas, sin notas en papel y sin discusiones
                de horarios por WhatsApp.
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900 text-primary-400 shadow-sm">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-50 sm:text-base">{step.title}</h3>
                    <p className="text-xs text-neutral-400 sm:text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha: widget + badge */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className={cn(
                'relative w-full max-w-xs sm:max-w-sm',
                'transform-gpu lg:rotate-3 lg:translate-x-4',
              )}
            >
              <BookingWidgetPreview />

              {/* Badge flotante */}
              <div className="absolute -top-6 -right-4 sm:-right-10 flex items-center gap-2 rounded-2xl bg-emerald-500 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-emerald-500/40">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[11px]">
                  +30%
                </span>
                <span>Reservas en 3 meses</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
