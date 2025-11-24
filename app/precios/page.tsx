import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Precios',
  description:
    'Planes flexibles para peluquerías, barberías y centros de estética. Sin permanencia, cancela cuando quieras.',
};

const plans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfecto para empezar',
    features: [
      'Hasta 2 profesionales',
      'Agenda online ilimitada',
      'Recordatorios por email',
      'Panel de control básico',
      'Soporte por email',
    ],
    cta: 'Empezar gratis',
    popular: false,
  },
  {
    name: 'Professional',
    price: '79',
    description: 'Para negocios en crecimiento',
    features: [
      'Hasta 10 profesionales',
      'Todo lo de Starter',
      'Recordatorios WhatsApp y SMS',
      'CRM de clientes avanzado',
      'Estadísticas y reporting',
      'Integraciones premium',
      'Soporte prioritario',
    ],
    cta: 'Empezar prueba',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Personalizado',
    description: 'Para cadenas y franquicias',
    features: [
      'Profesionales ilimitados',
      'Todo lo de Professional',
      'Múltiples localizaciones',
      'API personalizada',
      'Gestor de cuenta dedicado',
      'Formación personalizada',
      'SLA garantizado',
    ],
    cta: 'Contactar ventas',
    popular: false,
  },
];

export default function PreciosPage() {
  return (
    <>
      <section className="section-lg bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="text-display-md sm:text-display-lg mb-4">
              Precios simples y transparentes
            </h1>
            <p className="text-lg text-neutral-600 sm:text-xl">
              Sin costes ocultos. Sin permanencia. Cancela cuando quieras.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border ${
                  plan.popular
                    ? 'border-primary-500 shadow-strong'
                    : 'border-neutral-200 shadow-soft'
                } bg-white p-8 ${plan.popular ? 'lg:scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="primary">Más popular</Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-neutral-900">{plan.name}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{plan.description}</p>
                </div>

                <div className="mb-6">
                  {typeof plan.price === 'string' && plan.price !== 'Personalizado' ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-neutral-900">{plan.price}€</span>
                      <span className="text-neutral-600">/mes</span>
                    </div>
                  ) : plan.price === 'Personalizado' ? (
                    <div className="text-3xl font-bold text-neutral-900">{plan.price}</div>
                  ) : null}
                </div>

                <Button
                  as="link"
                  href="/contacto"
                  variant={plan.popular ? 'primary' : 'outline'}
                  fullWidth
                  className="mb-6"
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                      <span className="text-sm text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-neutral-600">
              Todos los planes incluyen 14 días de prueba gratuita. No se requiere tarjeta de
              crédito.
            </p>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
