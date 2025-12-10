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
        'relative overflow-hidden rounded-3xl border backdrop-blur-2xl',
        // Transiciones optimizadas: solo transform, opacity y box-shadow
        'will-change-transform',
        // Light: hielo esmerilado
        'bg-white/60 text-card-foreground border-neutral-200 shadow-[0_18px_45px_rgba(15,23,42,0.10)]',
        // Dark: usando los tokens semánticos
        'dark:bg-card dark:text-card-foreground dark:border-card-border dark:shadow-none',

        // ESTADOS HOVER (solo transform y opacity - GPU accelerated):
        hoverEffect && 'hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(249,115,22,0.14)] dark:hover:bg-card/40 dark:hover:border-card-border',

        // VARIANTES DE GRADIENTE
        gradient === 'subtle' && 'bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent dark:from-primary/15 dark:via-secondary/10',
        gradient === 'strong' && 'bg-gradient-to-br from-primary/18 via-primary/80 to-secondary/18 animated-gradient',

        className,
      )}
      style={{
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
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
