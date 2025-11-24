import React from 'react';
import { UserPlus, Settings, Share2, TrendingUp } from 'lucide-react';
import Container from '@/components/ui/Container';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Crea tu cuenta',
    description:
      'Regístrate en menos de 2 minutos. Configura tu negocio, horarios y servicios de forma sencilla.',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Configura tu equipo',
    description:
      'Añade profesionales, define servicios y precios. Personaliza tu agenda según tus necesidades.',
  },
  {
    number: '03',
    icon: Share2,
    title: 'Conecta tus canales',
    description:
      'Integra WhatsApp, Instagram, tu web y más. Recibe reservas desde cualquier lugar.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Crece tu negocio',
    description:
      'Gestiona citas, reduce ausencias y analiza resultados. Dedica más tiempo a lo importante.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section bg-neutral-50">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-display-sm sm:text-display-md mb-4">
            Empieza en minutos, no en días
          </h2>
          <p className="text-lg text-neutral-600">
            Configurar BookFast es rápido y sencillo. Sin complicaciones técnicas.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-16 hidden h-0.5 w-full bg-gradient-to-r from-primary-300 to-primary-200 lg:block"></div>
              )}

              <div className="relative">
                {/* Number badge */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-2xl font-bold text-white shadow-medium">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary-600 shadow-soft">
                  <step.icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-semibold text-neutral-900">{step.title}</h3>
                <p className="text-sm text-neutral-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
