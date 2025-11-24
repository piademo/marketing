import type { Metadata } from 'next';
import { Zap } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card, { CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Integraciones',
  description:
    'Conecta BookFast con tus herramientas favoritas: WhatsApp, Instagram, Stripe, y más.',
};

const integrations = [
  {
    name: 'WhatsApp Business',
    description: 'Recibe reservas y envía recordatorios automáticos por WhatsApp.',
    icon: '💬',
    status: 'Disponible',
  },
  {
    name: 'Instagram',
    description: 'Permite a tus seguidores reservar directamente desde tu perfil.',
    icon: '📸',
    status: 'Disponible',
  },
  {
    name: 'Stripe',
    description: 'Acepta pagos online con tarjeta de forma segura.',
    icon: '💳',
    status: 'Disponible',
  },
  {
    name: 'Google Calendar',
    description: 'Sincroniza tu agenda con Google Calendar automáticamente.',
    icon: '📅',
    status: 'Próximamente',
  },
  {
    name: 'Mailchimp',
    description: 'Sincroniza tu base de clientes con tus campañas de email.',
    icon: '📧',
    status: 'Próximamente',
  },
  {
    name: 'Zapier',
    description: 'Conecta BookFast con más de 3000 aplicaciones.',
    icon: '⚡',
    status: 'Próximamente',
  },
];

export default function IntegracionesPage() {
  return (
    <>
      <section className="section-lg bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
              <Zap className="h-8 w-8" />
            </div>
            <h1 className="text-display-md sm:text-display-lg mb-4">
              Integraciones potentes
            </h1>
            <p className="text-lg text-neutral-600 sm:text-xl">
              Conecta BookFast con las herramientas que ya usas para potenciar tu negocio.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration) => (
              <Card key={integration.name} hover>
                <CardHeader>
                  <div className="mb-4 text-6xl">{integration.icon}</div>
                  <div className="mb-2">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                        integration.status === 'Disponible'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-neutral-100 text-neutral-700'
                      }`}
                    >
                      {integration.status}
                    </span>
                  </div>
                  <CardTitle>{integration.name}</CardTitle>
                  <CardDescription>{integration.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              ¿Necesitas una integración específica?
            </h2>
            <p className="text-neutral-600 mb-6">
              Estamos constantemente añadiendo nuevas integraciones. Cuéntanos qué necesitas.
            </p>
          </div>
        </Container>
      </section>

      <CTA
        title="Empieza a conectar tus herramientas"
        description="Configura tus integraciones en minutos y automatiza tu negocio."
      />
    </>
  );
}
