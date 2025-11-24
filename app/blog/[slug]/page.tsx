import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Post del Blog',
  description: 'Artículo del blog de BookFast',
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // TODO: Fetch post data based on slug
  console.log('Blog slug:', slug);
  return (
    <>
      <section className="section-lg bg-gradient-to-b from-neutral-50 to-white">
        <Container size="narrow">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al blog
          </Link>

          <div className="mb-6">
            <Badge variant="primary">Categoría</Badge>
          </div>

          <h1 className="text-display-sm sm:text-display-md mb-4">
            Título del artículo del blog
          </h1>

          <div className="flex items-center gap-4 text-sm text-neutral-600 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>15 de enero, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>5 min de lectura</span>
            </div>
          </div>

          <div className="aspect-video rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-100 to-neutral-50 mb-12 flex items-center justify-center text-8xl">
            📝
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              Este es un placeholder para el contenido del artículo del blog. Aquí irá el contenido
              completo del post con formato Markdown o HTML.
            </p>

            <h2>Subtítulo del artículo</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            <ul>
              <li>Punto importante número uno</li>
              <li>Punto importante número dos</li>
              <li>Punto importante número tres</li>
            </ul>

            <h2>Otro subtítulo</h2>

            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </Container>
      </section>

      <CTA
        title="¿Listo para mejorar la gestión de tu negocio?"
        primaryButtonText="Probar BookFast gratis"
      />
    </>
  );
}
