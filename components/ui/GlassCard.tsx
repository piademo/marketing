import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: 'none' | 'subtle' | 'strong';
  hoverEffect?: boolean;
}

export default function GlassCard({ 
  children, 
  className,
  gradient = 'none',
  hoverEffect = true,
}: GlassCardProps) {
  return (
    <div 
      className={cn(
        // BASE: tarjeta de cristal adaptable a light/dark
        'relative overflow-hidden rounded-3xl border transition-all duration-300 backdrop-blur-2xl',
        // Light: hielo esmerilado
        'bg-white/60 text-card-foreground border-neutral-200 shadow-[0_18px_45px_rgba(15,23,42,0.10)]',
        // Dark: seguimos usando los tokens para mantener el look actual
        'dark:bg-card dark:text-card-foreground dark:border-card-border dark:shadow-none',

        // ESTADOS HOVER (más brillo al pasar el ratón):
        hoverEffect && 'hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(249,115,22,0.18)] dark:hover:bg-card/40 dark:hover:border-card-border',

        // VARIANTES DE GRADIENTE
        // subtle: halo muy suave basado en la paleta semántica (Sunset/Cyber)
        gradient === 'subtle' && 'bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent dark:from-primary/15 dark:via-secondary/10',
        // strong: acento más marcado en el fondo, borde se mantiene como el base
        gradient === 'strong' && 'bg-gradient-to-br from-primary/18 to-secondary/18',

        className,
      )}
    >
      {/* Capa de Ruido (Noise) para textura realista */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none" />
      
      {/* Brillo especular superior (borde de luz) */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />

      <div className="relative z-10 p-6 h-full">
        {children}
      </div>
    </div>
  );
}
