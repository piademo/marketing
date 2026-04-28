import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Calendar } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Solicitud recibida',
  description: 'Hemos recibido tu solicitud. El equipo de BookFast se pondrá en contacto contigo pronto.',
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    icon: Calendar,
    title: 'Revisamos tu solicitud',
    description: 'Nuestro equipo analiza tu negocio para prepararte la mejor configuración.',
  },
  {
    icon: CheckCircle2,
    title: 'Te contactamos en 24h',
    description: 'Un especialista te llama o escribe para resolver dudas y guiarte en el alta.',
  },
  {
    icon: ArrowRight,
    title: 'Empiezas a recibir reservas',
    description: 'Configuración en menos de 10 minutos. Primeras reservas el mismo día.',
  },
];

export default function GraciasPage() {
  return (
    <section className="min-h-[70vh] flex items-center py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/15">
              <CheckCircle2 className="h-10 w-10 text-emerald-500" />
            </div>
          </div>

          <h1 className="text-display-sm sm:text-display-md font-extrabold tracking-tight text-foreground mb-4">
            ¡Solicitud recibida!
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-12 text-balance">
            Nuestro equipo revisará tu información y se pondrá en contacto contigo en menos de 24 horas laborables.
          </p>

          <div className="grid gap-6 sm:grid-cols-3 mb-12 text-left">
            {nextSteps.map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-neutral-200 bg-white/60 dark:border-neutral-800 dark:bg-neutral-900/40 p-5 backdrop-blur-sm">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400 text-sm font-bold">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">{step.title}</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button as="link" href="/demo" size="lg" icon={ArrowRight} iconPosition="right"
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white border-0 shadow-lg shadow-primary-500/25 animated-gradient"
            >
              Ver la demo mientras tanto
            </Button>
            <Button as="link" href="/" variant="outline" size="lg">
              Volver al inicio
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
