/**
 * Sistema centralizado de animaciones para BookFast
 * 
 * Principios:
 * - Solo animar `transform` y `opacity` para mejor rendimiento
 * - Curvas suaves y consistentes en toda la web
 * - Respeto por `prefers-reduced-motion`
 * - Timings coherentes con la identidad dark premium
 */

import { Transition, Variants } from 'framer-motion';

// ============================================
// DURACIONES ESTÁNDAR
// ============================================

export const duration = {
  /** Microinteracciones rápidas: hover, click */
  fast: 0.15,
  /** Transiciones estándar: entradas suaves de elementos */
  base: 0.3,
  /** Animaciones "heroicas": hero sections, elementos importantes */
  slow: 0.5,
  /** Animaciones largas: backgrounds, efectos ambientales */
  slower: 0.7,
} as const;

// ============================================
// CURVAS DE ANIMACIÓN (EASINGS)
// ============================================

/**
 * Curva principal: suave y profesional
 * Similar a easeOutQuint - perfecta para UI de producto
 */
export const easing = {
  /** Curva principal para la mayoría de animaciones */
  smooth: [0.16, 1, 0.3, 1] as const,
  /** Para microinteracciones muy rápidas */
  snappy: [0.25, 0.1, 0.25, 1] as const,
  /** Entrada dramática (para hero sections) */
  dramatic: [0.22, 0.61, 0.36, 1] as const,
  /** Salidas rápidas */
  exit: [0.4, 0, 1, 1] as const,
} as const;

// ============================================
// CONFIGURACIONES DE SPRING (Framer Motion)
// ============================================

export const spring = {
  /** Spring suave y elegante */
  smooth: {
    type: 'spring' as const,
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  },
  /** Spring rápido y preciso (carruseles, sliders) */
  snappy: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  },
  /** Spring con rebote sutil */
  bouncy: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 25,
    mass: 0.6,
  },
} as const;

// ============================================
// TRANSICIONES PREDEFINIDAS
// ============================================

export const transition = {
  /** Transición estándar para la mayoría de elementos */
  default: {
    duration: duration.base,
    ease: easing.smooth,
  } as Transition,
  
  /** Para microinteracciones (hover, tap) */
  fast: {
    duration: duration.fast,
    ease: easing.snappy,
  } as Transition,
  
  /** Para elementos heroicos */
  slow: {
    duration: duration.slow,
    ease: easing.dramatic,
  } as Transition,
  
  /** Spring suave */
  spring: spring.smooth,
  
  /** Spring rápido */
  springSnappy: spring.snappy,
} as const;

// ============================================
// VARIANTES DE ANIMACIÓN REUTILIZABLES
// ============================================

/**
 * Fade In simple
 */
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

/**
 * Fade In desde abajo (entrada suave)
 */
export const fadeInUp: Variants = {
  initial: { 
    opacity: 0,
  },
  animate: { 
    opacity: 1,
  },
  exit: { 
    opacity: 0,
  },
};

/**
 * Fade In optimizado para móvil (movimiento mínimo)
 * Perfecto para above-the-fold en mobile
 */
export const fadeInUpMobile: Variants = {
  initial: { 
    opacity: 0,
  },
  animate: { 
    opacity: 1,
  },
  exit: { 
    opacity: 0,
  },
};

/**
 * Fade In desde arriba
 */
export const fadeInDown: Variants = {
  initial: { 
    opacity: 0,
  },
  animate: { 
    opacity: 1,
  },
  exit: { 
    opacity: 0,
  },
};

/**
 * Scale In (para cards, modales)
 */
export const scaleIn: Variants = {
  initial: { 
    opacity: 0,
  },
  animate: { 
    opacity: 1,
  },
  exit: { 
    opacity: 0,
  },
};

/**
 * Slide In desde la izquierda
 */
export const slideInLeft: Variants = {
  initial: { 
    opacity: 0,
  },
  animate: { 
    opacity: 1,
  },
  exit: { 
    opacity: 0,
  },
};

/**
 * Slide In desde la derecha
 */
export const slideInRight: Variants = {
  initial: { 
    opacity: 0,
  },
  animate: { 
    opacity: 1,
  },
  exit: { 
    opacity: 0, 
  },
};

// ============================================
// VARIANTES PARA CONTENEDORES (STAGGER)
// ============================================

/**
 * Contenedor con stagger suave
 */
export const staggerContainer: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/**
 * Contenedor optimizado para Hero (ultra-rápido)
 * Elementos aparecen casi simultáneamente (0.04s stagger, sin delay inicial)
 */
export const staggerContainerHero: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0,
    },
  },
};

/**
 * Contenedor con stagger rápido
 */
export const staggerContainerFast: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

/**
 * Contenedor con stagger lento (para grids grandes)
 */
export const staggerContainerSlow: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

// ============================================
// PREFERS-REDUCED-MOTION UTILITY
// ============================================

/**
 * Hook para detectar si el usuario prefiere reducir las animaciones
 * Úsalo en componentes client para condicionar animaciones complejas
 */
export const usePrefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches;
};

/**
 * Función helper: devuelve una transición simplificada si el usuario
 * tiene activado prefers-reduced-motion
 */
export const getAccessibleTransition = (
  normalTransition: Transition,
  prefersReducedMotion: boolean
): Transition => {
  if (prefersReducedMotion) {
    return {
      duration: 0.01, // Casi instantáneo
      ease: 'linear',
    };
  }
  return normalTransition;
};

// ============================================
// VARIANTES PARA MICROINTERACCIONES
// ============================================

/**
 * Hover lift: elevar elemento suavemente
 */
export const hoverLift = {
  rest: { },
  hover: { 
    transition: transition.fast,
  },
};

/**
 * Hover scale: crecer suavemente
 */
export const hoverScale = {
  rest: { },
  hover: { 
    transition: transition.fast,
  },
};

/**
 * Tap scale: feedback al hacer clic
 */
export const tapScale = {
  transition: { duration: 0.1 },
};

// ============================================
// VIEWPORT CONFIGS (para whileInView)
// ============================================

export const viewport = {
  /** Configuración estándar: activa cuando el elemento entra 100px en viewport */
  default: {
    once: true,
    margin: '-100px',
  },
  
  /** Para elementos que deben activarse antes */
  early: {
    once: true,
    margin: '-50px',
  },
  
  /** Para elementos que deben activarse más tarde */
  late: {
    once: true,
    margin: '-200px',
  },
  
  /** Para animaciones que deben repetirse */
  repeat: {
    once: false,
    margin: '-100px',
  },
};

// ============================================
// HELPERS PARA ANIMACIONES PERSONALIZADAS
// ============================================

/**
 * Crea una variante fadeInUp con delay personalizado
 */
export const createFadeInUp = (delay: number = 0): Variants => ({
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      ...transition.default,
      delay,
    },
  },
});

/**
 * Crea una variante scaleIn con delay personalizado
 */
export const createScaleIn = (delay: number = 0): Variants => ({
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      ...transition.default,
      delay,
    },
  },
});
