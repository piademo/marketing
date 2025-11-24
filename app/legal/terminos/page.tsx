import type { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso de BookFast.',
};

export default function TerminosPage() {
  return (
    <section className="section-lg bg-white">
      <Container size="narrow">
        <h1 className="text-display-sm sm:text-display-md mb-4">Términos y Condiciones</h1>
        <p className="text-lg text-neutral-600 mb-12">
          Última actualización: Enero 2024
        </p>

        <div className="prose prose-lg max-w-none">
          <h2>1. Aceptación de los términos</h2>
          <p>
            Al acceder y utilizar BookFast, aceptas estar sujeto a estos términos y condiciones.
            Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro
            servicio.
          </p>

          <h2>2. Descripción del servicio</h2>
          <p>
            BookFast proporciona un software de gestión de citas y clientes para negocios de
            belleza, incluyendo peluquerías, barberías y centros de estética.
          </p>

          <h2>3. Registro y cuenta</h2>
          <p>
            Para utilizar BookFast, debes crear una cuenta proporcionando información precisa y
            completa. Eres responsable de mantener la confidencialidad de tu cuenta y contraseña.
          </p>

          <h2>4. Uso aceptable</h2>
          <p>
            Te comprometes a utilizar BookFast únicamente para fines legales y de acuerdo con
            estos términos. No debes utilizar el servicio de manera que pueda dañar, deshabilitar
            o perjudicar el servicio.
          </p>

          <h2>5. Pagos y facturación</h2>
          <p>
            Los planes de pago se facturan mensualmente. Puedes cancelar tu suscripción en
            cualquier momento. No ofrecemos reembolsos por períodos parciales.
          </p>

          <h2>6. Propiedad intelectual</h2>
          <p>
            Todo el contenido, características y funcionalidades de BookFast son propiedad de
            BookFast y están protegidos por leyes de propiedad intelectual.
          </p>

          <h2>7. Limitación de responsabilidad</h2>
          <p>
            BookFast no será responsable de daños indirectos, incidentales, especiales o
            consecuentes que resulten del uso o la imposibilidad de usar el servicio.
          </p>

          <h2>8. Modificaciones del servicio</h2>
          <p>
            Nos reservamos el derecho de modificar o discontinuar el servicio en cualquier
            momento, con o sin previo aviso.
          </p>

          <h2>9. Ley aplicable</h2>
          <p>
            Estos términos se regirán e interpretarán de acuerdo con las leyes de España.
          </p>

          <h2>10. Contacto</h2>
          <p>
            Para cualquier pregunta sobre estos términos, contáctanos en:
            <br />
            Email: hola@bookfast.es
          </p>
        </div>
      </Container>
    </section>
  );
}
