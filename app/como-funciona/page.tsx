import type { Metadata } from 'next';
import { UserPlus, Settings, Share2, TrendingUp, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Cómo funciona',
  description:
    'Descubre lo fácil que es empezar con BookFast. Configura tu negocio en minutos y empieza a recibir reservas.',
};

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Empieza sin fricción',
    description:
      'Regístrate en menos de 2 minutos con tu email. No necesitas tarjeta de crédito para empezar.',
    details: [
      'Registro rápido y sencillo',
      'Sin compromiso ni permanencia',
      'Sin tarjeta para probar',
    ],
  },
  {
    number: '02',
    icon: Settings,
    title: 'Configura tu negocio',
    description:
      'Añade tu equipo, servicios, horarios y precios. Nuestro asistente te guía paso a paso.',
    details: [
      'Importa datos existentes fácilmente',
      'Plantillas predefinidas por sector',
      'Personalización completa',
    ],
  },
  {
    number: '03',
    icon: Share2,
    title: 'Conecta tus canales',
    description:
      'Integra WhatsApp, Instagram, tu web y más. Empieza a recibir reservas desde cualquier lugar.',
    details: [
      'Widget de reservas para tu web',
      'Integración con redes sociales',
      'Link de reserva personalizado',
    ],
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Gestiona y crece',
    description:
      'Controla tu agenda, envía recordatorios automáticos y analiza el rendimiento de tu negocio.',
    details: [
      'Panel de control intuitivo',
      'Recordatorios automáticos',
      'Estadísticas en tiempo real',
    ],
  },
];

export default function ComoFuncionaPage() {
  return (
    <>
      <section className="section-lg">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="text-display-md sm:text-display-lg mb-4">
              Empieza en minutos, no en días
            </h1>
            <p className="text-lg text-neutral-300 sm:text-xl">
              Configurar BookFast es rápido y sencillo. Sin complicaciones técnicas, sin formación
              compleja.
            </p>
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-primary/80 to-secondary text-2xl font-bold text-white shadow-medium animated-gradient">
                    {step.number}
                  </div>

                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/15 text-primary-300">
                    <step.icon className="h-6 w-6" />
                  </div>

                  <h2 className="text-3xl font-semibold text-white mb-4">{step.title}</h2>
                  <p className="text-lg text-neutral-300 mb-6">{step.description}</p>

                  <ul className="space-y-3 mb-8">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                        <span className="text-neutral-300">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {index === 0 && (
                    <Button as="link" href="/demo" size="lg">
                      Probar BookFast
                    </Button>
                  )}
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-square rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/30 via-neutral-950/40 to-neutral-900/10 shadow-medium overflow-hidden flex items-center justify-center">
                    <div className="text-center text-neutral-300">
                      <div className="text-6xl mb-4">
                        {index === 0 && '👤'}
                        {index === 1 && '⚙️'}
                        {index === 2 && '🔗'}
                        {index === 3 && '📊'}
                      </div>
                      <p className="text-sm">Ilustración paso {step.number}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">
              ¿Necesitas ayuda para empezar?
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              Nuestro equipo está aquí para ayudarte. Ofrecemos formación personalizada y soporte
              durante todo el proceso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="link" href="/contacto" size="lg">
                Solicitar demostración
              </Button>
              <Button as="link" href="/recursos" variant="outline" size="lg">
                Ver recursos
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
