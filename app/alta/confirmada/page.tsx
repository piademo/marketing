import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Suscripción activada',
  description: 'Tu suscripción se ha activado. Ya puedes empezar con BookFast.',
  robots: { index: false, follow: false },
};

export default function AltaConfirmadaPage() {
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
            ¡Suscripción activada!
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-10 text-balance">
            Estamos preparando tu espacio. En breve recibirás un email con el acceso y los siguientes pasos.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              as="link"
              href="/demo"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white border-0 shadow-lg shadow-primary-500/25 animated-gradient"
            >
              Ver la demo mientras tanto
            </Button>
            <Button as="link" href="/precios" variant="outline" size="lg">
              Volver a precios
            </Button>
          </div>

          <p className="mt-8 text-xs text-neutral-500 dark:text-neutral-400">
            Si necesitas ayuda, escríbenos desde{' '}
            <Link href="/contacto" className="underline underline-offset-4">
              contacto
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}

