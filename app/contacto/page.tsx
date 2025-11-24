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
      <section className="section-lg bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="text-display-md sm:text-display-lg mb-4">
              Hablemos de tu negocio
            </h1>
            <p className="text-lg text-neutral-600 sm:text-xl">
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

                <Button type="submit" size="lg" fullWidth icon={Send} iconPosition="right">
                  Enviar mensaje
                </Button>

                <p className="text-sm text-neutral-600 text-center">
                  Te responderemos en menos de 24 horas laborables
                </p>
              </form>
            </div>

            {/* Información de contacto */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
                  Otras formas de contacto
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                      <a href="mailto:hola@bookfast.es" className="text-neutral-600 hover:text-primary-600 transition-colors">
                        hola@bookfast.es
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Teléfono</h3>
                      <a href="tel:+34900000000" className="text-neutral-600 hover:text-primary-600 transition-colors">
                        +34 900 000 000
                      </a>
                      <p className="text-sm text-neutral-500 mt-1">Lun - Vie, 9:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Oficina</h3>
                      <p className="text-neutral-600">
                        Barcelona, España
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">
                  ¿Prefieres una demostración?
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
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
