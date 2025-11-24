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
    <li className="flex items-start gap-2 text-sm text-neutral-700">
      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
        <Check className="h-3 w-3" />
      </span>
      <span className="text-sm text-neutral-700">{label}</span>
    </li>
  );
}

export default function Pricing() {
  return (
    <section className="bg-neutral-50 py-20">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-display-sm sm:text-display-md font-semibold tracking-tight text-neutral-900 text-balance">
            Una inversión que recuperas con una sola cita salvada.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            El coste de un "no-show" suele ser mayor que tu suscripción mensual. BookFast se paga solo evitando solo un hueco vacío.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
          {/* Plan Solo */}
          <div className="relative flex flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="mb-2 text-sm font-semibold text-neutral-900">Solo</div>
            <div className="mb-4 flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-neutral-900">29€</span>
              <span className="text-sm text-neutral-500">/mes</span>
            </div>
            <p className="mb-6 text-sm text-neutral-600">Ideal si estás empezando o trabajas solo y quieres dejar atrás la libreta.</p>
            <ul className="mb-6 space-y-2">
              {soloFeatures.map((item) => (
                <FeatureItem key={item} label={item} />
              ))}
            </ul>
            <div className="mt-auto">
              <Button as="link" href="/registro" variant="outline" className="w-full">
                Empezar con Solo
              </Button>
            </div>
          </div>

          {/* Plan Pro (destacado) */}
          <GlassCard
            gradient="subtle"
            className={cn(
              'relative flex flex-col border-primary-500/40 bg-white/80 p-6 shadow-xl shadow-primary-500/20 md:scale-105',
              'before:pointer-events-none before:absolute before:inset-0 before:rounded-[1.7rem] before:border before:border-transparent before:bg-[linear-gradient(135deg,rgba(59,130,246,0.6),rgba(236,72,153,0.6))] before:opacity-60 before:[mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] before:[mask-composite:exclude] before:p-px',
            )}
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
              <span className="h-2 w-2 rounded-full bg-primary-500" />
              Más Popular
            </div>
            <div className="mb-2 text-sm font-semibold text-neutral-900">Pro</div>
            <div className="mb-4 flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-neutral-900">59€</span>
              <span className="text-sm text-neutral-500">/mes</span>
            </div>
            <p className="mb-6 text-sm text-neutral-700">
              Para barberías que ya están llenas y quieren profesionalizar reservas y reducir ausencias sin contratar a otra persona.
            </p>
            <ul className="mb-6 space-y-2">
              {proFeatures.map((item) => (
                <FeatureItem key={item} label={item} />
              ))}
            </ul>
            <div className="mt-auto">
              <Button as="link" href="/registro" variant="primary" className="w-full">
                Elegir plan Pro
              </Button>
            </div>
          </GlassCard>

          {/* Plan Enterprise */}
          <div className="relative flex flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="mb-2 text-sm font-semibold text-neutral-900">Enterprise</div>
            <div className="mb-4 flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-neutral-900">A medida</span>
            </div>
            <p className="mb-6 text-sm text-neutral-600">Pensado para cadenas o grupos con varios locales y equipos.</p>
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
