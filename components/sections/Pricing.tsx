import React from 'react';
import { Check } from 'lucide-react';
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
  'Agenda avanzada por cabina / sillón',
  'Recordatorios WhatsApp automáticos',
  'Lista de espera inteligente',
  'Soporte prioritario',
];

const enterpriseFeatures = [
  'Más de 5 locales o equipos',
  'Onboarding y formación personalizada',
  'Integraciones a medida',
];

function FeatureItem({ label }: { label: string }) {
  return (
    <li className="flex items-start gap-2 text-sm text-neutral-200">
      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
        <Check className="h-3 w-3" />
      </span>
      <span className="text-sm text-neutral-200">{label}</span>
    </li>
  );
}

export default function Pricing() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-display-sm sm:text-display-md font-semibold tracking-tight text-white text-balance">
            Una inversión que recuperas salvando UNA sola cita al mes.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            El coste de un "no-show" suele ser mayor que tu suscripción mensual. Con BookFast, evitar un hueco vacío ya compensa el plan.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
          {/* Plan Starter (resumen del plan Starter de /precios) */}
          <div className="relative flex flex-col rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-sm">
            <div className="mb-2 text-sm font-semibold text-neutral-50">Starter</div>
            <div className="mb-4 flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-white">29€</span>
              <span className="text-sm text-neutral-400">/mes</span>
            </div>
            <p className="mb-6 text-sm text-neutral-400">Perfecto para empezar: ideal para 1-2 profesionales que quieren dejar atrás la libreta.</p>
            <ul className="mb-6 space-y-2">
              {soloFeatures.map((item) => (
                <FeatureItem key={item} label={item} />
              ))}
            </ul>
            <div className="mt-auto">
              <Button as="link" href="/contacto" variant="outline" className="w-full">
                Empezar con Starter
              </Button>
            </div>
          </div>

          {/* Plan Professional (destacado, alineado con /precios) */}
          <GlassCard
            gradient="subtle"
            className={cn(
              'relative flex flex-col border-primary-500/40 bg-neutral-900/80 p-6 shadow-xl shadow-primary-500/30 md:scale-105',
              'before:pointer-events-none before:absolute before:inset-0 before:rounded-[1.7rem] before:border before:border-transparent before:bg-[linear-gradient(135deg,rgba(59,130,246,0.6),rgba(236,72,153,0.6))] before:opacity-60 before:[mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] before:[mask-composite:exclude] before:p-px',
            )}
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-200">
              <span className="h-2 w-2 rounded-full bg-primary-400" />
              Más Popular
            </div>
            <div className="mb-2 text-sm font-semibold text-neutral-50">Professional</div>
            <div className="mb-4 flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-white">79€</span>
              <span className="text-sm text-neutral-400">/mes</span>
            </div>
            <p className="mb-6 text-sm text-neutral-200">
              Para negocios en crecimiento que quieren profesionalizar reservas, reducir ausencias y tener un control real de clientes y métricas.
            </p>
            <ul className="mb-6 space-y-2">
              {proFeatures.map((item) => (
                <FeatureItem key={item} label={item} />
              ))}
            </ul>
            <div className="mt-auto">
              <Button as="link" href="/contacto" variant="primary" className="w-full">
                Elegir plan Professional
              </Button>
            </div>
          </GlassCard>

          {/* Plan Enterprise (personalizado, alineado con /precios) */}
          <div className="relative flex flex-col rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-sm">
            <div className="mb-2 text-sm font-semibold text-neutral-50">Enterprise</div>
            <div className="mb-4 flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-white">Personalizado</span>
            </div>
            <p className="mb-6 text-sm text-neutral-400">Pensado para cadenas o grupos con varios locales y equipos.</p>
            <ul className="mb-6 space-y-2">
              {enterpriseFeatures.map((item) => (
                <FeatureItem key={item} label={item} />
              ))}
            </ul>
            <div className="mt-auto">
              <Button as="link" href="/contacto" variant="ghost" className="w-full">
                Hablar con ventas
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
