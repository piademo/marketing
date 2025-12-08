import React from 'react';
import Link from 'next/link';
import { Scissors, UserCheck, ArrowRight, Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';
import Badge from '@/components/ui/Badge';

export const metadata = {
  title: 'Sectores | BookFast',
  description:
    'Descubre las soluciones especializadas de BookFast para barberías, peluquerías y centros de estética.',
};

export default function SectoresPage() {
  const sectores = [
    {
      title: 'Barberías',
      description:
        'Gestión rápida para el ritmo urbano. Control de walk-ins, cortes exprés y recordatorios automáticos para reducir no-shows.',
      href: '/sectores/barberias',
      icon: Scissors,
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/20',
      features: ['Gestión de Walk-ins', 'Recordatorios WhatsApp', 'Caja rápida'],
    },
    {
      title: 'Peluquerías',
      description:
        'Elegancia y detalle. Historial de tintes, gestión de tiempos de exposición y tickets medios altos.',
      href: '/sectores/peluquerias',
      icon: UserCheck,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      features: ['Historial de Color', 'Gestión de Empleados', 'Bonos y Packs'],
    },
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Glows específicos de esta página */}
      {/* Light: Glow Sunset */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none -z-10 dark:hidden"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(249,115,22,0.32), transparent 60%), radial-gradient(circle at 50% 100%, rgba(236,72,153,0.24), transparent 60%)',
          mixBlendMode: 'normal',
        }}
      />
      {/* Dark: Blob original Cyber */}
      <div className="hidden dark:block absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-900/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Container>
        {/* Header de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center mb-6">
            <Badge
              variant="neutral"
              className="bg-[#f97316]/10 text-neutral-900 border-[#f97316]/30 dark:bg-white/5 dark:border-white/10 dark:text-neutral-300 backdrop-blur-md"
            >
              <Sparkles className="w-3 h-3 mr-2 text-[#f97316] dark:text-primary-300" />
              Especialización
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground dark:text-white mb-6 text-balance">
            Software que habla <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              el idioma de tu negocio
            </span>
          </h1>
          <p className="text-lg text-neutral-700 dark:text-neutral-400 text-balance max-w-2xl mx-auto">
            No es lo mismo cortar pelo que hacer un tratamiento facial. Hemos diseñado BookFast adaptándonos a las
            necesidades reales de cada nicho.
          </p>
        </div>

        {/* Grid de Sectores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sectores.map((sector) => (
            <Link key={sector.title} href={sector.href} className="group block h-full">
              <GlassCard
                className="h-full flex flex-col p-8 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-white/60 dark:group-hover:border-white/20 dark:group-hover:bg-white/5 group-hover:-translate-y-1 will-change-transform"
                gradient="subtle"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className={`p-4 rounded-2xl ${sector.bg} ${sector.border} border shadow-inner`}>
                    <sector.icon className={`w-8 h-8 ${sector.color}`} />
                  </div>
                  <div className="p-2 rounded-full bg-[#f97316]/10 text-[#ea580c] border border-[#f97316]/30 dark:bg-primary/10 dark:text-primary dark:border-primary/20 dark:group-hover:bg-primary/20 dark:group-hover:text-primary-300 transition-colors">
                    <ArrowRight className="w-5 h-5 text-[#ea580c] group-hover:text-[#c05621] dark:text-primary dark:group-hover:text-primary-300" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-foreground dark:text-white mb-4 group-hover:text-[#ea580c] dark:group-hover:text-primary-300 transition-colors">
                  {sector.title}
                </h2>
                <p className="text-neutral-700 dark:text-neutral-400 leading-relaxed mb-8 flex-grow">{sector.description}</p>

                <div className="space-y-3 border-t border-border dark:border-white/5 pt-6 mt-auto">
                  {sector.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-neutral-700 dark:text-neutral-300">
                      <div className="w-1.5 h-1.5 rounded-full mr-3 bg-[#f97316] shadow-[0_0_8px_rgba(249,115,22,0.5)] dark:bg-primary-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>

        {/* CTA Final */}
        <div className="mt-24 text-center">
          <h3 className="text-xl text-foreground dark:text-white font-medium mb-6">¿Tu negocio es diferente?</h3>
          <Button
            as="link"
            href="/contacto"
            variant="outline"
            className="text-neutral-800 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
          >
            Habla con un experto
          </Button>
        </div>
      </Container>
    </div>
  );
}
