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
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent pt-3 sm:pt-4 lg:pt-5">
      <Container>
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-neutral-900/70 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:px-5 sm:py-3 lg:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white font-bold text-lg">
              B
            </div>
            <span className="text-xl font-bold text-white">BookFast</span>
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
                    <button className="flex items-center gap-1 text-sm font-medium text-neutral-300 hover:text-white transition-colors py-2">
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute left-0 top-full pt-2">
                        <div className="w-56 rounded-xl border border-neutral-800 bg-neutral-900 p-2 shadow-strong">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block rounded-lg px-4 py-2.5 text-sm text-neutral-200 hover:bg-neutral-800 hover:text-white transition-colors"
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
                    className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
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
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-neutral-900/70 text-neutral-200 shadow-sm hover:bg-neutral-800/80 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mb-4 mt-1 rounded-2xl border border-white/10 bg-neutral-900/90 px-3 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.55)] backdrop-blur-xl">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.items ? (
                    <div>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.name ? null : item.name)
                        }
                        className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-200 hover:bg-neutral-800"
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
                              className="block rounded-lg px-4 py-2 text-sm text-neutral-400 hover:bg-neutral-800 hover:text-white"
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
                      className="block rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-200 hover:bg-neutral-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2 border-t border-neutral-800 pt-4">
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
