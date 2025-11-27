'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Container from '@/components/ui/Container';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    negocio: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar envío de formulario
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className="section-lg">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="text-display-md sm:text-display-lg mb-4 text-foreground dark:text-white">
              Hablemos de tu negocio
            </h1>
            <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300">
              Estamos aquí para ayudarte. Cuéntanos qué necesitas y te responderemos lo antes
              posible.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Formulario */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Nombre completo"
                  name="nombre"
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                />

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                />

                <Input
                  label="Teléfono (opcional)"
                  name="telefono"
                  type="tel"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+34 600 000 000"
                />

                <Input
                  label="Nombre de tu negocio"
                  name="negocio"
                  type="text"
                  required
                  value={formData.negocio}
                  onChange={handleChange}
                  placeholder="Nombre de tu peluquería, barbería o centro"
                />

                <Textarea
                  label="Mensaje"
                  name="mensaje"
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos qué necesitas..."
                  rows={5}
                />

                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  icon={Send}
                  iconPosition="right"
                  className="bg-gradient-to-r from-primary/70 to-secondary/70 hover:from-primary/60 hover:to-secondary/60 bg-opacity-70 border border-white/60 shadow-sm backdrop-blur-sm"
                >
                  Enviar mensaje
                </Button>

                <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center">
                  Te responderemos en menos de 24 horas laborables
                </p>
              </form>
            </div>

            {/* Información de contacto */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-foreground dark:text-white">
                  Otras formas de contacto
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#ea580c] dark:bg-primary-500/15 dark:text-primary-300">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground dark:text-white">Email</h3>
                      <a
                        href="mailto:hola@bookfast.es"
                        className="text-neutral-700 hover:text-primary-500 dark:text-neutral-300 dark:hover:text-primary-300 transition-colors"
                      >
                        hola@bookfast.es
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#ea580c] dark:bg-primary-500/15 dark:text-primary-300">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground dark:text-white">Teléfono</h3>
                      <a
                        href="tel:+34900000000"
                        className="text-neutral-700 hover:text-primary-500 dark:text-neutral-300 dark:hover:text-primary-300 transition-colors"
                      >
                        +34 900 000 000
                      </a>
                      <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">Lun - Vie, 9:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#ea580c] dark:bg-primary-500/15 dark:text-primary-300">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground dark:text-white">Oficina</h3>
                      <p className="text-neutral-700 dark:text-neutral-300">
                        Barcelona, España
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border p-6 bg-white/80 border-neutral-200 dark:bg-neutral-900/70 dark:border-neutral-800">
                <h3 className="font-semibold mb-2 text-foreground dark:text-white">
                  ¿Prefieres una demostración?
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  Agenda una videollamada con nuestro equipo y te mostramos BookFast en acción.
                </p>
                <Button as="link" href="/como-funciona" variant="outline" fullWidth>
                  Solicitar demo
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
