'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const navigation = [
  {
    name: 'Producto',
    items: [
      { name: 'Funcionalidades', href: '/funcionalidades' },
      { name: 'Cómo funciona', href: '/como-funciona' },
      { name: 'Integraciones', href: '/integraciones' },
      { name: 'Precios', href: '/precios' },
    ],
  },
  {
    name: 'Soluciones',
    items: [
      { name: 'Peluquerías', href: '/sectores/peluquerias' },
      { name: 'Barberías', href: '/sectores/barberias' },
      { name: 'Centros de Estética', href: '/sectores/centros-estetica' },
    ],
  },
  { name: 'Recursos', href: '/recursos' },
  { name: 'Blog', href: '/blog' },
  { name: 'Sobre nosotros', href: '/sobre-nosotros' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white font-bold text-lg">
              B
            </div>
            <span className="text-xl font-bold text-neutral-900">BookFast</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.items ? (
                  <div
                    className="group relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors py-2">
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute left-0 top-full pt-2">
                        <div className="w-56 rounded-xl border border-neutral-200 bg-white p-2 shadow-strong">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block rounded-lg px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button
              as="link"
              href="https://pro.bookfast.es"
              external
              variant="ghost"
              size="sm"
            >
              Iniciar sesión
            </Button>
            <Button as="link" href="/contacto" size="sm">
              Empezar gratis
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden rounded-lg p-2 text-neutral-700 hover:bg-neutral-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 py-4">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.items ? (
                    <div>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.name ? null : item.name)
                        }
                        className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {openDropdown === item.name && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block rounded-lg px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className="block rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2 border-t border-neutral-200 pt-4">
              <Button
                as="link"
                href="https://pro.bookfast.es"
                external
                variant="outline"
                fullWidth
              >
                Iniciar sesión
              </Button>
              <Button as="link" href="/contacto" fullWidth>
                Empezar gratis
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
