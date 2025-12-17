import type { Metadata } from 'next';
import { Calendar, Users, MessageSquare, TrendingUp, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card, { CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Software para Peluquerías | Agenda, Color y Clientes – BookFast',
  description:
    'Gestiona citas, color y tratamientos en tu peluquería con BookFast. Agenda digital y control total de tu salón.',
};

const problems = [
  {
    title: 'Llamadas y WhatsApps a todas horas para reservar',
    solution:
      'Convierte tu agenda en una agenda digital de salón de belleza: tus clientas reservan sola desde Instagram o Google sin interrumpir el servicio.',
  },
  {
    title: 'No recuerdas qué tinte usaste la última vez',
    solution:
      'Historial de cliente con color, mechas, tratamientos y notas para que cada visita sea perfecta y consistente.',
  },
  {
    title: 'Agenda llena, pero ticket medio bajo',
    solution:
      'Sugiere servicios extra (tratamientos, brillo, peinados) durante la reserva online para aumentar el valor de cada visita.',
  },
  {
    title: 'Equipo descoordinado entre sillas y cabinas',
    solution:
      'Vista por estilista y por servicio para asignar tiempos, evitar solapes y mantener el salón siempre fluido.',
  },
];

const features = [
  {
    icon: Calendar,
    title: 'Agenda por silla y estilista',
    description:
      'Visualiza en segundos qué silla está libre, quién atiende a quién y cuánto durará cada servicio de color o corte.',
  },
  {
    icon: Users,
    title: 'Historial de cliente detallado',
    description:
      'Recuerda siempre qué tinte, mezcla y tratamiento usaste en la última visita. Nunca más un “no recuerdo qué hicimos”.',
  },
  {
    icon: MessageSquare,
    title: 'Recordatorios que cuidan la experiencia',
    description:
      'Recordatorios por WhatsApp que informan sin molestar y reducen ausencias para mantener tu agenda estable.',
  },
  {
    icon: TrendingUp,
    title: 'Ticket medio en crecimiento',
    description:
      'Detecta servicios que mejor funcionan juntos y ofrécelos como extras durante la reserva online.',
  },
];

export default function PeluqueriasPage() {
  return (
    <>
      <section className="section-lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-display-md sm:text-display-lg mb-6">
                Software para <span className="gradient-text">Peluquerías</span>: Gestión premium que marca tendencia.
              </h1>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
                Software de gestión para peluquerías que cuidan el detalle: agenda digital, historial de color y tratamientos, y una
                experiencia a la altura de tus clientas más exigentes.
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

            <div className="aspect-square rounded-2xl border border-border bg-card shadow-[0_18px_45px_rgba(15,23,42,0.10)] dark:border-neutral-800 dark:bg-gradient-to-br dark:from-neutral-900/30 dark:via-neutral-950/40 dark:to-neutral-900/10 dark:shadow-strong overflow-hidden flex items-center justify-center">
              <div className="text-center text-neutral-800 dark:text-neutral-300">
                <div className="text-8xl mb-4">💇</div>
                <p className="text-sm">Gestión para peluquerías</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-display-sm sm:text-display-md mb-4">
              Resolvemos los problemas reales de tu peluquería
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300">
              Sabemos los desafíos del día a día. BookFast está diseñado para solucionarlos.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-2xl border border-border bg-card p-6 dark:border-neutral-800 dark:bg-neutral-900/60"
              >
                <h3 className="text-lg font-semibold text-foreground dark:text-white mb-2">
                  ❌ {problem.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 flex items-start gap-2">
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
              Funcionalidades para peluquerías
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300">
              Todo lo que necesitas para gestionar tu salón de forma profesional.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
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
