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
    label: 'Centros de estética',
    description: 'Tratamientos por bonos, cabinas y citas largas que no se pueden improvisar.',
  },
];

export default function ForWho() {
  return (
    <section className="section">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-display-sm sm:text-display-md mb-4 text-white text-balance">
            ¿Para quién es <span className="gradient-text">BookFast</span>?
          </h2>
          <p className="text-lg text-neutral-300">
            Pensado para negocios de belleza que viven de la agenda: barberías, peluquerías y centros de estética.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {sectors.map((sector) => (
            <Card key={sector.href} hover>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-800 text-primary-300 shadow-[0_0_20px_rgba(14,165,233,0.4)]">
                  <sector.icon className="h-6 w-6" />
                </div>
                <CardTitle>{sector.label}</CardTitle>
                <CardDescription>{sector.description}</CardDescription>
              </CardHeader>
              <Button as="link" href={sector.href} variant="outline" fullWidth>
                Ver más detalles
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
