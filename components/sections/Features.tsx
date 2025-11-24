import React from 'react';
import {
  Calendar,
  Users,
  MessageSquare,
  CreditCard,
  BarChart3,
  Zap,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Card, { CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

const features = [
  {
    icon: Calendar,
    title: 'Agenda inteligente',
    description:
      'Gestiona citas desde múltiples canales. Sincronización en tiempo real y vista multicalendario.',
  },
  {
    icon: Users,
    title: 'Gestión de equipo',
    description:
      'Organiza profesionales, cabinas y servicios. Control de horarios y disponibilidad.',
  },
  {
    icon: MessageSquare,
    title: 'Comunicación omnicanal',
    description:
      'Recordatorios automáticos por WhatsApp, email y SMS. Reduce ausencias hasta un 70%.',
  },
  {
    icon: CreditCard,
    title: 'Pagos y facturación',
    description:
      'Acepta pagos online, gestiona cobros y genera facturas automáticamente.',
  },
  {
    icon: BarChart3,
    title: 'Estadísticas y reporting',
    description:
      'Analiza el rendimiento de tu negocio con informes detallados y métricas clave.',
  },
  {
    icon: Zap,
    title: 'Integraciones potentes',
    description:
      'Conecta con tus herramientas favoritas: redes sociales, TPV, contabilidad y más.',
  },
];

export default function Features() {
  return (
    <section className="section bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-display-sm sm:text-display-md mb-4">
            Todo lo que necesitas para gestionar tu negocio
          </h2>
          <p className="text-lg text-neutral-600">
            Herramientas profesionales diseñadas específicamente para salones de belleza,
            peluquerías y barberías.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}
