import type { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad y protección de datos de BookFast.',
};

export default function PrivacidadPage() {
  return (
    <section className="section-lg bg-white">
      <Container size="narrow">
        <h1 className="text-display-sm sm:text-display-md mb-4">Política de Privacidad</h1>
        <p className="text-lg text-neutral-600 mb-12">
          Última actualización: Enero 2024
        </p>

        <div className="prose prose-lg max-w-none">
          <h2>1. Información que recopilamos</h2>
          <p>
            En BookFast, recopilamos información que nos proporcionas directamente cuando te
            registras, utilizas nuestros servicios o te comunicas con nosotros.
          </p>

          <h2>2. Cómo utilizamos tu información</h2>
          <p>
            Utilizamos la información recopilada para proporcionar, mantener y mejorar nuestros
            servicios, así como para comunicarnos contigo sobre actualizaciones y novedades.
          </p>

          <h2>3. Compartir información</h2>
          <p>
            No vendemos ni compartimos tu información personal con terceros, excepto cuando sea
            necesario para proporcionar nuestros servicios o cuando la ley lo requiera.
          </p>

          <h2>4. Seguridad de los datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para proteger tu
            información contra acceso no autorizado, pérdida o alteración.
          </p>

          <h2>5. Tus derechos</h2>
          <p>
            Tienes derecho a acceder, rectificar, eliminar o limitar el uso de tus datos
            personales. Para ejercer estos derechos, contáctanos en hola@bookfast.es.
          </p>

          <h2>6. Cookies</h2>
          <p>
            Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Puedes gestionar
            tus preferencias de cookies en cualquier momento.
          </p>

          <h2>7. Cambios en esta política</h2>
          <p>
            Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre
            cambios significativos publicando la nueva política en esta página.
          </p>

          <h2>8. Contacto</h2>
          <p>
            Si tienes preguntas sobre esta política de privacidad, contáctanos en:
            <br />
            Email: hola@bookfast.es
          </p>
        </div>
      </Container>
    </section>
  );
}
