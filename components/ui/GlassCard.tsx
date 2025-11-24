import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: 'none' | 'subtle' | 'strong';
}

export default function GlassCard({ 
  children, 
  className,
  gradient = 'none' 
}: GlassCardProps) {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10",
        gradient === 'subtle' && "bg-gradient-to-br from-white/10 to-white/5",
        gradient === 'strong' && "bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border-primary-500/20",
        className
      )}
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div className="relative z-10 p-6 h-full">
        {children}
      </div>
    </div>
  );
}
