import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Consejos, guías y novedades sobre gestión de negocios de belleza, peluquerías y barberías.',
};

// Placeholder posts
const posts = [
  {
    slug: 'como-reducir-ausencias-citas',
    title: 'Cómo reducir las ausencias en tu peluquería hasta un 70%',
    excerpt:
      'Descubre las estrategias más efectivas para que tus clientes no falten a sus citas y optimiza tu agenda.',
    category: 'Gestión',
    date: '2024-01-15',
    readTime: '5 min',
    image: '📊',
  },
  {
    slug: 'whatsapp-reservas-peluqueria',
    title: 'WhatsApp para reservas: La guía completa para tu salón',
    excerpt:
      'Aprende a configurar WhatsApp Business para recibir reservas y comunicarte con tus clientes de forma profesional.',
    category: 'Marketing',
    date: '2024-01-10',
    readTime: '8 min',
    image: '💬',
  },
  {
    slug: 'precios-servicios-peluqueria',
    title: '¿Cómo fijar precios en tu peluquería? Guía práctica',
    excerpt:
      'Estrategias de pricing para servicios de belleza que te ayudarán a ser competitivo sin perder rentabilidad.',
    category: 'Negocio',
    date: '2024-01-05',
    readTime: '6 min',
    image: '💰',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="section-lg bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="text-display-md sm:text-display-lg mb-4">Blog de BookFast</h1>
            <p className="text-lg text-neutral-600 sm:text-xl">
              Consejos, guías y estrategias para hacer crecer tu negocio de belleza.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft transition-all duration-200 hover:shadow-medium hover:-translate-y-1"
              >
                <div className="mb-4">
                  <div className="aspect-video rounded-xl border border-neutral-200 bg-gradient-to-br from-neutral-100 to-neutral-50 flex items-center justify-center text-6xl">
                    {post.image}
                  </div>
                </div>

                <div className="mb-3">
                  <Badge variant="primary">{post.category}</Badge>
                </div>

                <h2 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm text-neutral-600 mb-4">{post.excerpt}</p>

                <div className="flex items-center gap-4 text-xs text-neutral-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary-600 group-hover:gap-3 transition-all">
                  Leer más
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
