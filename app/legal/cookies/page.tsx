import type { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Información sobre el uso de cookies en BookFast.',
};

export default function CookiesPage() {
  return (
    <section className="section-lg bg-white">
      <Container size="narrow">
        <h1 className="text-display-sm sm:text-display-md mb-4">Política de Cookies</h1>
        <p className="text-lg text-neutral-600 mb-12">
          Última actualización: Enero 2024
        </p>

        <div className="prose prose-lg max-w-none">
          <h2>¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando
            visitas un sitio web. Nos ayudan a mejorar tu experiencia y entender cómo utilizas
            nuestro sitio.
          </p>

          <h2>Tipos de cookies que utilizamos</h2>

          <h3>Cookies esenciales</h3>
          <p>
            Estas cookies son necesarias para el funcionamiento básico del sitio web y no pueden
            ser desactivadas.
          </p>

          <h3>Cookies de rendimiento</h3>
          <p>
            Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web,
            recopilando información de forma anónima.
          </p>

          <h3>Cookies de funcionalidad</h3>
          <p>
            Permiten que el sitio web recuerde tus preferencias y proporcione funcionalidades
            mejoradas.
          </p>

          <h2>Gestión de cookies</h2>
          <p>
            Puedes controlar y/o eliminar las cookies según desees. Puedes eliminar todas las
            cookies que ya están en tu dispositivo y configurar la mayoría de los navegadores para
            que no se instalen.
          </p>

          <h2>Más información</h2>
          <p>
            Si tienes preguntas sobre nuestra política de cookies, contáctanos en hola@bookfast.es
          </p>
        </div>
      </Container>
    </section>
  );
}
