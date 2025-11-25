import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BookingWidgetPreviewProps {
  className?: string;
}

const BookingWidgetPreview: React.FC<BookingWidgetPreviewProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'relative mx-auto w-full max-w-[240px] sm:max-w-xs rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white shadow-xl shadow-black/5',
        'overflow-hidden',
        className,
      )}
    >
      {/* Header */}
      <div className="bg-neutral-900 px-4 sm:px-5 py-3 sm:py-4 text-white">
        <div className="text-[10px] sm:text-xs text-neutral-400 mb-0.5 sm:mb-1">Barbería</div>
        <div className="text-xs sm:text-sm font-semibold tracking-tight">Barbería Ejemplo</div>
      </div>

      <div className="px-4 sm:px-5 py-3 sm:py-4 space-y-3 sm:space-y-4">
        {/* Paso 1: Servicio */}
        <div className="space-y-1.5 sm:space-y-2">
          <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.15em] sm:tracking-[0.18em] text-neutral-500">1. Servicio</p>
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-xl sm:rounded-2xl border border-primary-100 bg-primary-50 px-3 sm:px-4 py-2 sm:py-3 text-left"
          >
            <div>
              <div className="text-xs sm:text-sm font-semibold text-neutral-900">Corte Degradado</div>
              <div className="text-[10px] sm:text-xs text-neutral-500">45 min · 18€</div>
            </div>
            <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600 shrink-0" />
          </button>
        </div>

        {/* Paso 2: Hora */}
        <div className="space-y-1.5 sm:space-y-2">
          <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.15em] sm:tracking-[0.18em] text-neutral-500">2. Hora</p>
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
            <button
              type="button"
              className="rounded-full border border-neutral-200 bg-white px-2 sm:px-3 py-1.5 sm:py-2 text-neutral-700"
            >
              16:00
            </button>
            <button
              type="button"
              className="rounded-full border border-primary-600 bg-primary-600 px-2 sm:px-3 py-1.5 sm:py-2 font-semibold text-white shadow-sm"
            >
              17:00
            </button>
            <button
              type="button"
              className="rounded-full border border-neutral-200 bg-white px-2 sm:px-3 py-1.5 sm:py-2 text-neutral-700"
            >
              18:00
            </button>
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          className="mt-1 sm:mt-2 inline-flex w-full items-center justify-center rounded-xl sm:rounded-2xl bg-primary-600 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-sm shadow-primary-500/30"
        >
          Confirmar Reserva
        </button>
      </div>
    </div>
  );
};

export default BookingWidgetPreview;
