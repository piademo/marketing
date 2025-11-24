import type { Metadata } from 'next';
import {
  Calendar,
  Users,
  MessageSquare,
  CreditCard,
  BarChart3,
  Zap,
  Clock,
  Bell,
  Smartphone,
  Globe,
  Lock,
  Headphones,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Card, { CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Funcionalidades',
  description:
    'Descubre todas las funcionalidades de BookFast: agenda inteligente, CRM, comunicaciones, pagos y más.',
};

const featureCategories = [
  {
    title: 'Gestión de Agenda',
    description: 'Control total sobre tu calendario y citas',
    features: [
      {
        icon: Calendar,
        title: 'Agenda multicalendario',
        description:
          'Vista por profesional, por cabina o general. Arrastra y suelta para reorganizar citas fácilmente.',
      },
      {
        icon: Clock,
        title: 'Gestión de horarios',
        description:
          'Define horarios personalizados por profesional, días festivos y excepciones.',
      },
      {
        icon: Smartphone,
        title: 'Reservas online 24/7',
        description:
          'Tus clientes pueden reservar desde tu web, redes sociales o WhatsApp en cualquier momento.',
      },
    ],
  },
  {
    title: 'Equipo y Servicios',
    description: 'Organiza tu personal y catálogo de servicios',
    features: [
      {
        icon: Users,
        title: 'Gestión de profesionales',
        description:
          'Añade tu equipo, asigna servicios y gestiona disponibilidad individual.',
      },
      {
        icon: Zap,
        title: 'Catálogo de servicios',
        description:
          'Crea servicios con duración, precio y profesionales asignados. Paquetes y promociones.',
      },
    ],
  },
  {
    title: 'Comunicación y Clientes',
    description: 'Mantén el contacto con tus clientes',
    features: [
      {
        icon: MessageSquare,
        title: 'Recordatorios automáticos',
        description:
          'Envía recordatorios por WhatsApp, SMS o email. Reduce ausencias hasta un 70%.',
      },
      {
        icon: Bell,
        title: 'Notificaciones en tiempo real',
        description:
          'Alertas instantáneas de nuevas reservas, cancelaciones y cambios.',
      },
      {
        icon: Globe,
        title: 'CRM de clientes',
        description:
          'Historial completo de citas, preferencias, notas y datos de contacto.',
      },
    ],
  },
  {
    title: 'Pagos y Facturación',
    description: 'Cobra y factura sin complicaciones',
    features: [
      {
        icon: CreditCard,
        title: 'Pagos online',
        description:
          'Acepta pagos con tarjeta, Bizum y otros métodos. Integración con Stripe.',
      },
      {
        icon: BarChart3,
        title: 'Facturación automática',
        description:
          'Genera facturas automáticamente y envíalas por email a tus clientes.',
      },
    ],
  },
  {
    title: 'Seguridad y Soporte',
    description: 'Tu tranquilidad es nuestra prioridad',
    features: [
      {
        icon: Lock,
        title: 'Seguridad garantizada',
        description:
          'Datos encriptados, copias de seguridad automáticas y cumplimiento RGPD.',
      },
      {
        icon: Headphones,
        title: 'Soporte en español',
        description:
          'Equipo de soporte disponible por chat, email y teléfono en horario comercial.',
      },
    ],
  },
];

export default function FuncionalidadesPage() {
  return (
    <>
      <section className="section-lg bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="text-display-md sm:text-display-lg mb-4">
              Todo lo que necesitas en un solo lugar
            </h1>
            <p className="text-lg text-neutral-600 sm:text-xl">
              Funcionalidades profesionales diseñadas para hacer crecer tu negocio de belleza.
            </p>
          </div>

          <div className="space-y-20">
            {featureCategories.map((category, index) => (
              <div key={category.title}>
                <div className="mb-10 text-center">
                  <h2 className="text-3xl font-semibold text-neutral-900 mb-2">
                    {category.title}
                  </h2>
                  <p className="text-neutral-600">{category.description}</p>
                </div>

                <div
                  className={`grid gap-8 ${
                    category.features.length === 2
                      ? 'md:grid-cols-2'
                      : 'sm:grid-cols-2 lg:grid-cols-3'
                  }`}
                >
                  {category.features.map((feature) => (
                    <Card key={feature.title} hover>
                      <CardHeader>
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                          <feature.icon className="h-6 w-6" />
                        </div>
                        <CardTitle>{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
