import type { Metadata } from 'next';
import { Calendar, Users, MessageSquare, TrendingUp, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card, { CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Software para Barberías',
  description:
    'Software de gestión de citas para barberías modernas. Reservas online, recordatorios automáticos y gestión de barberos.',
};

const problems = [
  {
    title: 'Clientes sin cita que interrumpen',
    solution: 'Sistema de reservas online que organiza tu flujo de trabajo',
  },
  {
    title: 'Dificultad para gestionar varios barberos',
    solution: 'Agenda individual por barbero con sincronización automática',
  },
  {
    title: 'Clientes que olvidan su cita',
    solution: 'Recordatorios automáticos por WhatsApp que reducen ausencias',
  },
  {
    title: 'Falta de control sobre ingresos',
    solution: 'Dashboard con estadísticas de facturación y servicios más solicitados',
  },
];

const features = [
  {
    icon: Calendar,
    title: 'Turnos y citas',
    description: 'Gestiona tanto citas programadas como sistema de turnos para walk-ins.',
  },
  {
    icon: Users,
    title: 'Gestión de barberos',
    description: 'Calendario individual, especialidades y comisiones por barbero.',
  },
  {
    icon: MessageSquare,
    title: 'Recordatorios WhatsApp',
    description: 'Conecta con tus clientes por su canal favorito y reduce ausencias.',
  },
  {
    icon: TrendingUp,
    title: 'Control de ingresos',
    description: 'Analiza qué servicios generan más ingresos y optimiza tu negocio.',
  },
];

export default function BarberiasPage() {
  return (
    <>
      <section className="section-lg bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-display-md sm:text-display-lg mb-6">
                Software de gestión para <span className="gradient-text">barberías</span>
              </h1>
              <p className="text-lg text-neutral-600 mb-8">
                Diseñado para barberías modernas. Gestiona reservas, barberos y servicios desde una
                plataforma profesional. Más organización, más clientes, más ingresos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button as="link" href="/contacto" size="lg">
                  Probar gratis 14 días
                </Button>
                <Button as="link" href="/como-funciona" variant="outline" size="lg">
                  Ver cómo funciona
                </Button>
              </div>
            </div>

            <div className="aspect-square rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-100 to-neutral-50 shadow-strong overflow-hidden flex items-center justify-center">
              <div className="text-center text-neutral-400">
                <div className="text-8xl mb-4">✂️</div>
                <p className="text-sm">Gestión para barberías</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-display-sm sm:text-display-md mb-4">
              Resolvemos los desafíos de tu barbería
            </h2>
            <p className="text-lg text-neutral-600">
              Entendemos cómo funciona una barbería. BookFast está pensado para tu negocio.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
              >
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  ❌ {problem.title}
                </h3>
                <p className="text-neutral-600 flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                  <span>{problem.solution}</span>
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-neutral-50">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-display-sm sm:text-display-md mb-4">
              Funcionalidades para barberías
            </h2>
            <p className="text-lg text-neutral-600">
              Herramientas profesionales adaptadas a tu forma de trabajar.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
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
        </Container>
      </section>

      <CTA
        title="¿Listo para llevar tu barbería al siguiente nivel?"
        description="Únete a las barberías más modernas que ya usan BookFast."
        primaryButtonText="Empezar gratis"
        secondaryButtonText="Ver precios"
        secondaryButtonHref="/precios"
      />
    </>
  );
}
