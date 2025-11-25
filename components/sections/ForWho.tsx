import React from 'react';
import { Scissors, Sparkles, Flower2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card, { CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const sectors = [
  {
    href: '/sectores/barberias',
    icon: Scissors,
    label: 'Barberías',
    description: 'Ritmo rápido, walk-ins y agendas llenas. Mantén el flujo sin perder llamadas.',
  },
  {
    href: '/sectores/peluquerias',
    icon: Sparkles,
    label: 'Peluquerías',
    description: 'Salones exigentes con tickets medios altos y clientela fiel.',
  },
  {
    href: '/sectores/centros-estetica',
    icon: Flower2,
    label: 'Centros de Estética',
    description: 'Tratamientos prolongados y gestión de cabinas optimizada.',
  },
];

export default function ForWho() {
  return (
    <section className="h-[100dvh] flex flex-col justify-center py-8 sm:py-12 lg:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-display-sm lg:text-display-md mb-3 sm:mb-4 text-white text-balance">
            ¿Para quién es <span className="gradient-text">BookFast</span>?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-300 px-2">
            Pensado para negocios de belleza que viven de la agenda: barberías, peluquerías y centros de estética.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <Card key={sector.href} hover className="p-4 sm:p-6">
              <CardHeader className="p-0 mb-4">
                <div className="mb-3 sm:mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-neutral-800 text-primary-300 shadow-[0_0_20px_rgba(14,165,233,0.4)]">
                  <sector.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <CardTitle className="text-base sm:text-lg">{sector.label}</CardTitle>
                <CardDescription className="text-xs sm:text-sm">{sector.description}</CardDescription>
              </CardHeader>
              <Button as="link" href={sector.href} variant="outline" fullWidth className="text-sm">
                Ver más detalles
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
