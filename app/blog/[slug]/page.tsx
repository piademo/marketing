import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import CTA from '@/components/sections/CTA';
import { getPostBySlug, getAllPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Post del Blog',
  description: 'Artículo del blog de BookFast',
};

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return null;
  }

  return (
    <>
      <section className="section-lg">
        <Container size="narrow">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al blog
          </Link>

          <div className="mb-6">
            <Badge variant="primary">{post.category}</Badge>
          </div>

          <h1 className="text-display-sm sm:text-display-md mb-4 text-white">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="aspect-video rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 mb-12 flex items-center justify-center text-5xl text-neutral-600">
            📝
          </div>

          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-neutral-300 prose-li:text-neutral-300 prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Container>
      </section>

      <CTA
        title="¿Te ha gustado? Prueba BookFast gratis"
        primaryButtonText="Probar BookFast gratis"
      />
    </>
  );
}
