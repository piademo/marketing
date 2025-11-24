import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'BookFast - Gestión de Citas para Peluquerías, Barberías y Centros de Estética',
    template: '%s | BookFast',
  },
  description:
    'Software profesional de gestión de citas online para peluquerías, barberías y centros de estética. Agenda inteligente, CRM, recordatorios automáticos y más.',
  keywords: [
    'gestión de citas',
    'software peluquería',
    'agenda online',
    'reservas peluquería',
    'software barbería',
    'gestión salón belleza',
    'citas online',
    'BookFast',
  ],
  authors: [{ name: 'BookFast' }],
  creator: 'BookFast',
  publisher: 'BookFast',
  metadataBase: new URL('https://bookfast.es'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://bookfast.es',
    siteName: 'BookFast',
    title: 'BookFast - Gestión de Citas para Peluquerías y Centros de Estética',
    description:
      'Software profesional de gestión de citas online. Agenda inteligente, CRM y recordatorios automáticos.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BookFast',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BookFast - Gestión de Citas para Peluquerías',
    description: 'Software profesional de gestión de citas online',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
