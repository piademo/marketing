import type { Metadata } from 'next';
import { Calendar, Users, MessageSquare, TrendingUp, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card, { CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Software para Peluquerías',
  description:
    'Software de gestión de citas diseñado específicamente para peluquerías. Agenda online, recordatorios automáticos y CRM de clientes.',
};

const problems = [
  {
    title: 'Llamadas constantes para reservar',
    solution: 'Reservas online 24/7 desde tu web, Instagram o WhatsApp',
  },
  {
    title: 'Clientes que no se presentan',
    solution: 'Recordatorios automáticos que reducen ausencias hasta un 70%',
  },
  {
    title: 'Agenda desorganizada',
    solution: 'Calendario inteligente con vista por estilista y servicio',
  },
  {
    title: 'Pérdida de datos de clientes',
    solution: 'CRM completo con historial de servicios y preferencias',
  },
];

const features = [
  {
    icon: Calendar,
    title: 'Agenda por estilista',
    description: 'Gestiona múltiples estilistas con calendarios independientes y sincronizados.',
  },
  {
    icon: Users,
    title: 'Gestión de servicios',
    description: 'Corte, tinte, mechas, tratamientos... Organiza todos tus servicios con precios y duraciones.',
  },
  {
    icon: MessageSquare,
    title: 'Recordatorios inteligentes',
    description: 'Envía recordatorios automáticos por WhatsApp, SMS o email antes de cada cita.',
  },
  {
    icon: TrendingUp,
    title: 'Estadísticas del salón',
    description: 'Analiza qué servicios son más rentables y qué estilistas tienen mejor rendimiento.',
  },
];

export default function PeluqueriasPage() {
  return (
    <>
      <section className="section-lg bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-display-md sm:text-display-lg mb-6">
                Software de gestión para <span className="gradient-text">peluquerías</span>
              </h1>
              <p className="text-lg text-neutral-600 mb-8">
                Diseñado específicamente para salones de peluquería. Gestiona tu agenda, equipo y
                clientes desde una sola plataforma. Ahorra tiempo y aumenta tus ingresos.
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
                <div className="text-8xl mb-4">💇</div>
                <p className="text-sm">Gestión para peluquerías</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-display-sm sm:text-display-md mb-4">
              Resolvemos los problemas reales de tu peluquería
            </h2>
            <p className="text-lg text-neutral-600">
              Sabemos los desafíos del día a día. BookFast está diseñado para solucionarlos.
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
              Funcionalidades para peluquerías
            </h2>
            <p className="text-lg text-neutral-600">
              Todo lo que necesitas para gestionar tu salón de forma profesional.
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
        title="¿Listo para modernizar tu peluquería?"
        description="Únete a cientos de peluquerías que ya confían en BookFast."
        primaryButtonText="Empezar gratis"
        secondaryButtonText="Ver precios"
        secondaryButtonHref="/precios"
      />
    </>
  );
}
