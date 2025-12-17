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
  title: 'Funcionalidades del Software BookFast | Agenda, Clientes y Automatización',
  description:
    'Descubre todas las funcionalidades de BookFast: agenda online, gestión de clientes, recordatorios automáticos y más.',
};

const featureCategories = [
  {
    title: 'Gestión de Agenda',
    description:
      'Agenda visual de arrastrar y soltar que te da control total sobre horarios, profesionales y cabinas.',
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
    description:
      'Automatiza la comunicación con tus clientes para reducir ausencias y mantener la agenda siempre activa.',
    features: [
      {
        icon: MessageSquare,
        title: 'Recordatorios automáticos',
        description:
          'Envía recordatorios por WhatsApp o email de forma automática. Reduce ausencias y evita huecos vacíos en la agenda.',
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
          'Historial completo de citas, servicios, preferencias y notas para cuidar la relación con cada cliente.',
      },
    ],
  },
  {
    title: 'Pagos y Facturación',
    description:
      'Convierte BookFast en el centro de tu caja: TPV, cierres diarios y control de comisiones en un clic.',
    features: [
      {
        icon: CreditCard,
        title: 'Pagos online',
        description:
          'Acepta pagos con tarjeta y otros métodos en un entorno seguro. Integra tu TPV físico y online sin fricción.',
      },
      {
        icon: BarChart3,
        title: 'Facturación automática',
        description:
          'Genera facturas y cierres de caja automáticos. Ten siempre claro cuánto has ingresado y qué servicios más venden.',
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
      <section className="section-lg">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="text-display-md sm:text-display-lg mb-4">
              Funcionalidades del software BookFast
            </h1>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 sm:text-xl">
              Funcionalidades profesionales diseñadas para hacer crecer tu negocio de belleza.
            </p>
          </div>

          <div className="space-y-20">
            {featureCategories.map((category, index) => (
              <div key={category.title} className={index % 2 === 1 ? 'md:flex md:flex-row-reverse md:items-center md:gap-12' : 'md:flex md:items-center md:gap-12'}>
                <div className="mb-10 md:mb-0 md:w-1/3 text-center md:text-left">
                  <h2 className="text-3xl font-semibold text-foreground dark:text-white mb-2">
                    {category.title}
                  </h2>
                  <p className="text-neutral-700 dark:text-neutral-400">{category.description}</p>
                </div>

                <div
                  className={`mt-10 md:mt-0 grid gap-8 md:w-2/3 ${category.features.length === 2
                      ? 'md:grid-cols-2'
                      : 'sm:grid-cols-2 lg:grid-cols-3'
                    }`}
                >
                  {category.features.map((feature) => (
                    <Card key={feature.title} hover>
                      <CardHeader>
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary dark:bg-neutral-800 dark:text-primary-300">
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
