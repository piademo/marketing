import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import { getAllPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Consejos, guías y novedades sobre gestión de negocios de belleza, peluquerías y barberías.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="section-lg">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="text-display-md sm:text-display-lg mb-4 text-foreground dark:text-white">Blog de BookFast</h1>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 sm:text-xl">
              Consejos, guías y estrategias para hacer crecer tu negocio de belleza.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:bg-white/70 hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900/30 dark:hover:border-primary-500/40 dark:hover:bg-neutral-900/60 will-change-transform"
              >
                <div className="mb-4">
                  <div className="aspect-video rounded-xl border border-border bg-gradient-to-br from-primary/10 via-secondary/10 to-card flex items-center justify-center text-4xl dark:border-neutral-800 dark:from-neutral-900/40 dark:via-neutral-950/60 dark:to-neutral-900/20">
                    <span className="text-neutral-600 dark:text-neutral-500">{post.category.slice(0, 2).toUpperCase()}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <Badge variant="primary">{post.category}</Badge>
                </div>

                <h2 className="text-xl font-semibold text-foreground dark:text-white mb-2 group-hover:text-[#f97316] dark:group-hover:text-primary-300 transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm text-neutral-700 dark:text-neutral-400 mb-4">{post.excerpt}</p>

                <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div style={{
                  transition: 'gap 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }} className="mt-4 flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3">
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
