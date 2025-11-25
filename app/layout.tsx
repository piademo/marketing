import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SpotlightBackground from '@/components/ui/SpotlightBackground';

const inter = localFont({
  src: [
    {
      path: '../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../node_modules/@fontsource/inter/files/inter-latin-500-normal.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../node_modules/@fontsource/inter/files/inter-latin-600-normal.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../node_modules/@fontsource/inter/files/inter-latin-700-normal.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'BookFast | El Software de Reservas nº1 para Barberías y Salones',
    template: '%s | BookFast',
  },
  description:
    'Automatiza tu agenda, reduce los no-shows un 80% y gestiona tu negocio desde el móvil. Prueba gratis el software de gestión preferido por los profesionales.',
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
        <SpotlightBackground />
        <Header />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
