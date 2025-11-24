import type { Metadata } from 'next';
import { Target, Users, Zap, Heart } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card, { CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Sobre nosotros',
  description:
    'Conoce la historia de BookFast y nuestro compromiso con los negocios de belleza locales.',
};

const values = [
  {
    icon: Target,
    title: 'Enfocados en el negocio local',
    description:
      'Creemos en el poder de los negocios locales y queremos ayudarles a competir con las grandes cadenas.',
  },
  {
    icon: Users,
    title: 'Diseñado por profesionales',
    description:
      'Nuestro equipo incluye profesionales del sector que entienden tus necesidades reales.',
  },
  {
    icon: Zap,
    title: 'Tecnología accesible',
    description:
      'Hacemos que la tecnología avanzada sea fácil de usar para cualquier profesional.',
  },
  {
    icon: Heart,
    title: 'Soporte cercano',
    description:
      'No eres un número más. Conocemos tu negocio y estamos aquí para ayudarte a crecer.',
  },
];

export default function SobreNosotrosPage() {
  return (
    <>
      <section className="section-lg bg-gradient-to-b from-neutral-50 to-white">
        <Container size="narrow">
          <div className="text-center mb-16">
            <h1 className="text-display-md sm:text-display-lg mb-4">
              Nuestra misión: empoderar a los profesionales de la belleza
            </h1>
            <p className="text-lg text-neutral-600 sm:text-xl">
              BookFast nace de la necesidad real de profesionales como tú que buscan una forma
              mejor de gestionar su negocio.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-16">
            <h2>Nuestra historia</h2>
            <p>
              BookFast surge después de hablar con cientos de propietarios de peluquerías,
              barberías y centros de estética que nos contaron sus frustraciones: llamadas
              constantes, clientes que no se presentan, agendas desorganizadas y la sensación de
              estar siempre "apagando fuegos".
            </p>
            <p>
              Vimos que las soluciones existentes eran demasiado complejas, caras o simplemente no
              entendían las necesidades específicas del sector de la belleza. Así que decidimos
              crear algo diferente.
            </p>

            <h2>Qué nos hace diferentes</h2>
            <p>
              No somos una gran corporación tecnológica. Somos un equipo cercano que realmente se
              preocupa por el éxito de tu negocio. Cada funcionalidad que desarrollamos viene de
              escuchar a profesionales como tú.
            </p>
          </div>
        </Container>
      </section>

      <section className="section bg-neutral-50">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-display-sm sm:text-display-md mb-4">Nuestros valores</h2>
            <p className="text-lg text-neutral-600">
              Los principios que guían todo lo que hacemos en BookFast.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title} hover>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="¿Quieres formar parte de la comunidad BookFast?"
        description="Únete a cientos de profesionales que ya están transformando su forma de trabajar."
      />
    </>
  );
}
