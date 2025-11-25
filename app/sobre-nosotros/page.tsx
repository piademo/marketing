import type { Metadata } from 'next';
import { Target, Users, Zap, Heart } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card, { CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | La Historia detrás de BookFast',
  description:
    'Descubre cómo nació BookFast en una barbería de barrio y nuestra misión de llevar tecnología de primera a los negocios locales de belleza.',
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
      <section className="section-lg">
        <Container size="narrow">
          <div className="text-center mb-16">
            <h1 className="text-display-md sm:text-display-lg mb-4">
              Nacimos en una barbería, no en una oficina
            </h1>
            <p className="text-lg text-neutral-300 sm:text-xl">
              Vimos cómo nuestro propio barbero perdía horas cada día contestando WhatsApps y
              llamadas para cuadrar la agenda. Decidimos que había una forma mejor de hacerlo.
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none mb-16 prose-p:text-neutral-300 prose-li:text-neutral-300">
            <h2>Nuestra historia</h2>
            <p>
              BookFast surge después de pasar muchas horas en el sillón, observando cómo el móvil
              de nuestro barbero no dejaba de sonar. Entre mensajes de WhatsApp, llamadas y notas en
              papel, era imposible llevar un control real de la agenda y de los ingresos.
            </p>
            <p>
              Hablando con peluquerías, barberías y centros de estética de barrio, vimos que las
              soluciones existentes estaban pensadas para grandes cadenas: caras, complejas y poco
              realistas para el día a día de un negocio pequeño.
            </p>

            <h2>Qué nos hace diferentes</h2>
            <p>
              No somos una gran corporación tecnológica. Somos un equipo cercano que quiere
              democratizar la tecnología de las grandes cadenas para el negocio de barrio.
              Escuchamos a los profesionales y construimos herramientas que se entienden en minutos,
              no en manuales de 80 páginas.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-display-sm sm:text-display-md mb-4">Nuestros valores</h2>
            <p className="text-lg text-neutral-300">
              Los principios que guían todo lo que hacemos en BookFast.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title} hover>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/15 text-primary-300">
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
