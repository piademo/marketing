import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';
import Container from '@/components/ui/Container';

const footerLinks = {
  producto: {
    title: 'Producto',
    links: [
      { name: 'Funcionalidades', href: '/funcionalidades' },
      { name: 'Cómo funciona', href: '/como-funciona' },
      { name: 'Integraciones', href: '/integraciones' },
      { name: 'Precios', href: '/precios' },
    ],
  },
  soluciones: {
    title: 'Soluciones',
    links: [
      { name: 'Peluquerías', href: '/sectores/peluquerias' },
      { name: 'Barberías', href: '/sectores/barberias' },
    ],
  },
  recursos: {
    title: 'Recursos',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Recursos', href: '/recursos' },
      { name: 'Contacto', href: '/contacto' },
    ],
  },
  empresa: {
    title: 'Empresa',
    links: [
      { name: 'Sobre nosotros', href: '/sobre-nosotros' },
      { name: 'Privacidad', href: '/legal/privacidad' },
      { name: 'Cookies', href: '/legal/cookies' },
      { name: 'Términos', href: '/legal/terminos' },
    ],
  },
};

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:hola@bookfast.es' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950/80">
      <Container>
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            {/* Brand */}
            <div className="col-span-2">
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white font-bold text-lg">
                  B
                </div>
                <span className="text-xl font-bold text-foreground">BookFast</span>
              </Link>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 max-w-xs">
                Software profesional de gestión de citas para peluquerías, barberías y centros de
                estética.
              </p>
              <div className="mt-6 flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 hover:text-primary transition-colors dark:bg-neutral-900 dark:text-neutral-400 dark:hover:text-primary-400"
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">{section.title}</h3>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-neutral-600 dark:text-neutral-500">
              © {currentYear} BookFast. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="/legal/privacidad"
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Privacidad
              </Link>
              <Link
                href="/legal/cookies"
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Cookies
              </Link>
              <Link
                href="/legal/terminos"
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Términos
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
