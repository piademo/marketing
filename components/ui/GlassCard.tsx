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
        // BASE:
        'relative overflow-hidden rounded-3xl border transition-all duration-300',
        
        // EFECTO CRISTAL (Ajustado):
        // 1. backdrop-blur-xl: Mucho más desenfoque (efecto esmerilado)
        // 2. bg-neutral-900/30: Fondo oscuro muy transparente (deja ver el spotlight)
        // 3. border-white/10: Borde sutil para delimitar
        'bg-neutral-900/10 backdrop-blur-2xl border-white/10 shadow-lg',

        // ESTADOS HOVER (Más brillo al pasar el ratón):
        hoverEffect && 'hover:border-white/20 hover:bg-neutral-900/20 hover:shadow-primary-500/10 hover:-translate-y-1',

        // VARIANTES DE GRADIENTE (Ajustadas para ser sutiles):
        gradient === 'subtle' && 'bg-gradient-to-br from-white/5 to-transparent',
        gradient === 'strong' && 'bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border-primary-500/20',
        
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
