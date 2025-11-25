import type { Metadata } from 'next';
import { Calendar, Users, MessageSquare, TrendingUp, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card, { CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Software para Barberías y Barber Shops | Agenda y Citas Online',
  description:
    'La app de citas para barberías que elimina los no-shows y organiza tus sillones y walk-ins. Prueba hoy el mejor programa para barberías modernas.',
};

const problems = [
  {
    title: 'Clientes que reservan y no aparecen',
    solution:
      'Activa el modo Anti No-Show: recordatorios automáticos por WhatsApp antes de cada Corte y Barba para blindar tu facturación.',
  },
  {
    title: 'Sillones vacíos mientras el móvil no para de sonar',
    solution:
      'Tu app de citas para barbería centraliza todas las reservas online para que no pierdas ni un solo hueco facturable.',
  },
  {
    title: 'Walk-ins descontrolados que rompen el ritmo',
    solution:
      'Combina turnos y citas programadas en una sola agenda visual por sillón y barbero.',
  },
  {
    title: 'No sabes qué servicios te dejan más dinero',
    solution:
      'Un panel con métricas claras por servicio (Corte, Barba, Color) y por barbero para tomar decisiones rápidas.',
  },
];

const features = [
  {
    icon: Calendar,
    title: 'Agenda pensada para barberías',
    description:
      'Organiza tus sillones por barbero, tipo de servicio y duración. Controla walk-ins y citas programadas desde una sola vista.',
  },
  {
    icon: Users,
    title: 'Gestión de equipo y comisiones',
    description:
      'Define especialidades (fade, corte clásico, barbas premium) y calcula comisiones automáticamente por barbero.',
  },
  {
    icon: MessageSquare,
    title: 'Anti No-Show con WhatsApp',
    description:
      'Recordatorios automáticos por WhatsApp antes de cada cita para reducir al mínimo las faltas sin avisar.',
  },
  {
    icon: TrendingUp,
    title: 'Métricas de un negocio serio',
    description:
      'Ve en segundos qué días, barberos y servicios (Corte, Barba, Color) te dejan más caja para ajustar tu estrategia.',
  },
];

export default function BarberiasPage() {
  return (
    <>
      <section className="section-lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-display-md sm:text-display-lg mb-6">
                El copiloto digital que tu <span className="gradient-text">Barbería</span> necesita.
              </h1>
              <p className="text-lg text-neutral-300 mb-8">
                Programa para barberías pensado para el ritmo real de tu Barber Shop: walk-ins, Corte y Barba, clientes fieles y días
                de locura. Deja que BookFast se encargue de las citas mientras tú marcas estilo en el sillón.
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

            <div className="aspect-square rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/30 via-neutral-950/40 to-neutral-900/10 shadow-strong overflow-hidden flex items-center justify-center">
              <div className="text-center text-neutral-300">
                <div className="text-8xl mb-4">✂️</div>
                <p className="text-sm">Gestión para barberías</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-display-sm sm:text-display-md mb-4">
              Resolvemos los desafíos de tu barbería
            </h2>
            <p className="text-lg text-neutral-300">
              Entendemos cómo funciona una barbería. BookFast está pensado para tu negocio.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  ❌ {problem.title}
                </h3>
                <p className="text-neutral-300 flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                  <span>{problem.solution}</span>
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-display-sm sm:text-display-md mb-4">
              Funcionalidades para barberías
            </h2>
            <p className="text-lg text-neutral-300">
              Herramientas profesionales adaptadas a tu forma de trabajar.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} hover>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/15 text-primary-300">
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
