import type { Metadata } from 'next';
import { Calendar, Users, MessageSquare, TrendingUp, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card, { CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Software para Centros de Estética',
  description:
    'Software de gestión para centros de estética y belleza. Gestiona cabinas, tratamientos, profesionales y clientes.',
};

const problems = [
  {
    title: 'Gestión compleja de cabinas y salas',
    solution: 'Sistema de reservas por cabina y profesional simultáneamente',
  },
  {
    title: 'Tratamientos de larga duración',
    solution: 'Agenda flexible con bloques de tiempo personalizables',
  },
  {
    title: 'Seguimiento de tratamientos continuos',
    solution: 'Historial completo de cada cliente con notas y evolución',
  },
  {
    title: 'Coordinación entre profesionales',
    solution: 'Vista multicalendario con sincronización en tiempo real',
  },
];

const features = [
  {
    icon: Calendar,
    title: 'Gestión de cabinas',
    description: 'Organiza cabinas, salas y equipamiento. Asigna recursos automáticamente.',
  },
  {
    icon: Users,
    title: 'Equipo especializado',
    description: 'Gestiona esteticistas con especialidades: facial, corporal, depilación, etc.',
  },
  {
    icon: MessageSquare,
    title: 'Recordatorios de tratamientos',
    description: 'Recuerda a clientes sus citas y próximas sesiones de tratamientos continuos.',
  },
  {
    icon: TrendingUp,
    title: 'Análisis de tratamientos',
    description: 'Identifica qué tratamientos son más rentables y populares.',
  },
];

export default function CentrosEsteticaPage() {
  return (
    <>
      <section className="section-lg bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-display-md sm:text-display-lg mb-6">
                Software de gestión para{' '}
                <span className="gradient-text">centros de estética</span>
              </h1>
              <p className="text-lg text-neutral-600 mb-8">
                Diseñado para centros de estética y belleza. Gestiona cabinas, tratamientos,
                profesionales y clientes desde una plataforma integral. Profesionaliza tu centro.
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
                <div className="text-8xl mb-4">💆</div>
                <p className="text-sm">Gestión para centros de estética</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-display-sm sm:text-display-md mb-4">
              Resolvemos los desafíos de tu centro de estética
            </h2>
            <p className="text-lg text-neutral-600">
              Entendemos la complejidad de gestionar un centro de estética. BookFast simplifica tu
              día a día.
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
              Funcionalidades para centros de estética
            </h2>
            <p className="text-lg text-neutral-600">
              Herramientas profesionales para gestionar tu centro de forma eficiente.
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
        title="¿Listo para profesionalizar tu centro de estética?"
        description="Únete a los centros de estética que ya confían en BookFast."
        primaryButtonText="Empezar gratis"
        secondaryButtonText="Ver precios"
        secondaryButtonHref="/precios"
      />
    </>
  );
}
