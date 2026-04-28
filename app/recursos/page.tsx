import type { Metadata } from 'next';
import { FileText, Video, HelpCircle, Download } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card, { CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Recursos',
  description:
    'Guías, tutoriales y recursos para sacar el máximo partido a BookFast y tu negocio de belleza.',
};

const resources = [
  {
    icon: FileText,
    title: 'Guía de inicio rápido',
    description: 'Todo lo que necesitas saber para configurar BookFast en menos de 10 minutos.',
    type: 'Guía',
    cta: 'Ver guía',
    href: '/como-funciona',
  },
  {
    icon: Video,
    title: 'Demo interactiva',
    description: 'Explora BookFast en acción: agenda, clientes, caja y recordatorios.',
    type: 'Demo',
    cta: 'Abrir demo',
    href: '/demo',
  },
  {
    icon: HelpCircle,
    title: 'Preguntas frecuentes',
    description: 'Respuestas a las dudas más comunes sobre BookFast y su funcionamiento.',
    type: 'FAQ',
    cta: 'Ver preguntas',
    href: '/contacto',
  },
  {
    icon: Download,
    title: 'Kit de marketing',
    description: 'Materiales para promocionar tu negocio y las reservas online. Pídelo a nuestro equipo.',
    type: 'Solicitar',
    cta: 'Solicitar kit',
    href: '/contacto',
  },
  {
    icon: FileText,
    title: 'Guía de mejores prácticas',
    description: 'Consejos y estrategias para optimizar tu agenda y reducir ausencias.',
    type: 'Blog',
    cta: 'Leer artículos',
    href: '/blog',
  },
  {
    icon: Video,
    title: 'Hablar con el equipo',
    description: 'Agenda una videollamada y te mostramos BookFast adaptado a tu negocio.',
    type: 'Llamada',
    cta: 'Reservar llamada',
    href: '/contacto',
  },
];

export default function RecursosPage() {
  return (
    <>
      <section className="section-lg">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="text-display-md sm:text-display-lg mb-4">
              Recursos y documentación
            </h1>
            <p className="text-lg text-neutral-300 sm:text-xl">
              Todo lo que necesitas para aprovechar al máximo BookFast y hacer crecer tu negocio.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Card key={resource.title} hover>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/15 text-primary-300">
                    <resource.icon className="h-6 w-6" />
                  </div>
                  <div className="mb-2">
                    <span className="inline-block rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-200">
                      {resource.type}
                    </span>
                  </div>
                  <CardTitle>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button as="link" href={resource.href} variant="outline" fullWidth>
                    {resource.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              Nuestro equipo de soporte está aquí para ayudarte con cualquier duda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="link" href="/contacto" size="lg">
                Contactar soporte
              </Button>
              <Button as="link" href="/como-funciona" variant="outline" size="lg">
                Ver cómo funciona
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
