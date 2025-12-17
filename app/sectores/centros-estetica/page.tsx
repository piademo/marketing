import type { Metadata } from 'next';
import { Calendar, Users, MessageSquare, TrendingUp, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card, { CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Software para Centros de Estética | Bonos y Citas – BookFast',
  description:
    'Programa para centros de estética y clínicas que controla bonos, sesiones y cabinas. El software más sencillo y seguro.',
};

const problems = [
  {
    title: 'Bonos y packs anotados en papel o Excel',
    solution:
      'Controla automáticamente cuántas sesiones le quedan a cada bono, sin depender de hojas sueltas ni memoria.',
  },
  {
    title: 'Cabinas bloqueadas por solapes de agenda',
    solution:
      'Reserva por cabina y por profesional a la vez para que nunca haya dos servicios compitiendo por la misma máquina.',
  },
  {
    title: 'Tratamientos largos difíciles de encajar',
    solution:
      'Bloques de tiempo personalizados según tipo de sesión (láser, radiofrecuencia, facial completo, etc.).',
  },
  {
    title: 'Historial clínico y notas repartidas por varios sitios',
    solution:
      'Unifica fichas, consentimiento y evolución en un único software de clínica estética pensado para el día a día.',
  },
];

const features = [
  {
    icon: Calendar,
    title: 'Cabinas y aparatología bajo control',
    description:
      'Asigna cada cita a una cabina y máquina concreta para evitar solapes y aprovechar al máximo tu equipamiento.',
  },
  {
    icon: Users,
    title: 'Bonos y packs de sesiones',
    description:
      'Gestiona bonos de 3, 5 o 10 sesiones, controla asistencias y caducidades sin perder ningún detalle.',
  },
  {
    icon: MessageSquare,
    title: 'Recordatorios y seguimiento',
    description:
      'Recordatorios de cita y avisos de próximas sesiones para que tus clientas completen sus tratamientos.',
  },
  {
    icon: TrendingUp,
    title: 'Visión clara de tu clínica estética',
    description:
      'Informes por tratamiento, profesional y cabina para saber qué te da más rentabilidad.',
  },
];

export default function CentrosEsteticaPage() {
  return (
    <>
      <section className="section-lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-display-md sm:text-display-lg mb-6">
                Software para <span className="gradient-text">Centros de Estética</span>: Organización y paz mental.
              </h1>
              <p className="text-lg text-neutral-300 mb-8">
                Software para centros de estética y clínicas que necesitan controlar bonos, cabinas y aparatología sin perder la
                calma. Todo tu centro organizado en una sola pantalla, con foco en la seguridad y la experiencia de cada paciente.
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
                <div className="text-8xl mb-4">💆</div>
                <p className="text-sm">Gestión para centros de estética</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-display-sm sm:text-display-md mb-4">
              Resolvemos los desafíos de tu centro de estética
            </h2>
            <p className="text-lg text-neutral-300">
              Entendemos la complejidad de gestionar un centro de estética. BookFast simplifica tu
              día a día.
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
              Funcionalidades para centros de estética
            </h2>
            <p className="text-lg text-neutral-300">
              Herramientas profesionales para gestionar tu centro de forma eficiente.
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
        title="¿Listo para profesionalizar tu centro de estética?"
        description="Únete a los centros de estética que ya confían en BookFast."
        primaryButtonText="Empezar gratis"
        secondaryButtonText="Ver precios"
        secondaryButtonHref="/precios"
      />
    </>
  );
}
