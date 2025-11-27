"use client";

import React, { useEffect, useState } from "react";
import { motion, PanInfo } from "framer-motion";
import { useTheme } from "next-themes";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import BorderBeam from "@/components/ui/BorderBeam";

// Planes sincronizados con la sección de Pricing principal
const plans = [
  {
    name: "Starter",
    price: "29€",
    description: "Ideal para 1-2 profesionales.",
    features: ["1 profesional incluido", "Agenda online básica", "Recordatorios por email"],
    highlight: false,
  },
  {
    name: "Professional",
    price: "79€",
    description: "Para negocios en crecimiento.",
    features: [
      "Hasta 5 profesionales",
      "Agenda avanzada",
      "WhatsApp automáticos",
      "Lista de espera",
      "Soporte prioritario",
    ],
    highlight: true, // Lleva BorderBeam y glow
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Cadenas y grupos.",
    features: ["+5 locales o equipos", "Onboarding personalizado", "Integraciones a medida"],
    highlight: false,
  },
];

// Física de muelle "snappy": rápida y precisa para evitar solapamientos visibles
const SPRING_OPTIONS = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
  mass: 0.8,
};

export default function PricingMobileCarousel() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Índice infinito: puede crecer/ decrecer sin hacer reset a 0..N
  // Empezamos en 1 para que el plan central sea Professional
  const [index, setIndex] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Normaliza un índice infinito al rango 0..len-1
  const getWrappedIndex = (i: number) => {
    const len = plans.length;
    return ((i % len) + len) % len;
  };

  // Lógica de slots virtuales: -1 (izquierda), 0 (centro), 1 (derecha)
  const getSlot = (cardIndex: number, activeIndex: number) => {
    const total = plans.length;
    let diff = (cardIndex - getWrappedIndex(activeIndex)) % total;
    if (diff > 1) diff -= total;
    if (diff < -1) diff += total;
    return diff;
  };

  // Variantes de animación según el slot (0 centro, 1 derecha, -1 izquierda, resto = backstage)
  const getVariants = (slot: number) => {
    if (slot === 0) {
      // Centro (activa)
      return {
        x: "0%",
        scale: 1,
        zIndex: 50,
        opacity: 1,
        rotateY: 0,
        z: 0,
        filter: "blur(0px) brightness(1)",
      };
    }
    if (slot === 1) {
      // Derecha (lateral) – mismo tamaño que la central, solo cambia posición/profundidad
      return {
        x: "75%", // un poco más alejada para compensar el scale 1
        scale: 1,
        zIndex: 10,
        opacity: 0.5,
        rotateY: -15,
        z: -100,
        filter: "blur(2px) brightness(0.6)",
      };
    }
    if (slot === -1) {
      // Izquierda (lateral) – mismo tamaño que la central
      return {
        x: "-75%",
        scale: 1,
        zIndex: 10,
        opacity: 0.5,
        rotateY: 15,
        z: -100,
        filter: "blur(2px) brightness(0.6)",
      };
    }
    // Backstage: cruce invisible por detrás
    return {
      x: "0%",
      scale: 0.5,
      zIndex: 0,
      opacity: 0,
      rotateY: 0,
      z: -200,
      filter: "blur(10px)",
    };
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const { offset, velocity } = info;
    const swipe = Math.abs(offset.x) * velocity.x;
    if (swipe < -200 || offset.x < -80) {
      setIndex((prev) => prev + 1);
    } else if (swipe > 200 || offset.x > 80) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full h-[520px] flex items-center justify-center overflow-hidden py-4">
      {/* Escenario 3D compacto con tarjetas anchas */}
      <div className="relative w-full h-[420px] flex items-center justify-center perspective-[1200px] px-4">
        {plans.map((plan, i) => {
          const slot = getSlot(i, index);
          const isActive = slot === 0;
          return (
            <motion.div
              key={plan.name}
              className={cn(
                "absolute top-0 h-full flex items-center justify-center p-2 origin-center",
                "w-full max-w-[360px] min-w-[320px] sm:max-w-[400px] md:max-w-[420px]", // ancho fijo consistente
                isActive ? "cursor-grab active:cursor-grabbing" : "pointer-events-none",
              )}
              animate={getVariants(slot)}
              transition={SPRING_OPTIONS}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: -140, right: 140 }}
              dragElastic={0.18}
              dragMomentum={false}
              onDragEnd={handleDragEnd}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Tarjeta estilo glassmorphism inspirada en GlassCard */}
              <div
                className={cn(
                  "relative h-full w-full flex flex-col rounded-3xl overflow-hidden border backdrop-blur-2xl transition-all duration-300",
                  "bg-gradient-to-br from-primary/15 via-secondary/10 to-neutral-50/5 dark:from-primary/15 dark:via-secondary/10 dark:to-neutral-900/80",
                  isActive
                    ? cn(
                        isDark
                          ? "border-cyan-400/50 shadow-[0_16px_40px_rgba(56,189,248,0.32)]"
                          : "border-primary-500/60 shadow-[0_16px_40px_rgba(249,115,22,0.32)]",
                      )
                    : "border-white/10 dark:border-white/5 opacity-60 grayscale",
                )}
              >
                {isActive && plan.highlight && (
                  <BorderBeam
                    size={180}
                    duration={16}
                    radius={28}
                    colorFrom={isDark ? "#22d3ee" : "#f97316"}
                    colorTo={isDark ? "#a855f7" : "#fb7185"}
                  />
                )}

                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-70" />

                <div
                  className={cn(
                    "relative z-10 flex h-full flex-col p-5",
                    !isActive && "pointer-events-none",
                  )}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <h3
                      className={cn(
                        "text-lg font-semibold",
                        isActive
                          ? "text-foreground dark:text-white"
                          : "text-neutral-500 dark:text-neutral-400",
                      )}
                    >
                      {plan.name}
                    </h3>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span
                        className={cn(
                          "text-3xl font-semibold",
                          isActive
                            ? "text-foreground dark:text-white"
                            : "text-neutral-500 dark:text-neutral-400",
                        )}
                      >
                        {plan.price}
                      </span>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        /mes
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="mb-4 space-y-2 flex-grow">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-200"
                      >
                        <div
                          className={cn(
                            "inline-flex h-5 w-5 items-center justify-center rounded-full",
                            isActive
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                              : "bg-neutral-800/60 text-neutral-500",
                          )}
                        >
                          <Check className="h-3 w-3" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    as="link"
                    href="/contacto"
                    variant={isActive && plan.highlight ? "primary" : "outline"}
                    className={cn(
                      "w-full text-sm",
                      isActive && plan.highlight ? "bg-white !text-black hover:bg-white btn-cyber-animated" : "",
                      !isDark && plan.name === 'Professional' && "!text-black",
                    )}
                  >
                    {plan.name === 'Starter' && 'Empezar con Starter'}
                    {plan.name === 'Professional' && 'Elegir Professional'}
                    {plan.name === 'Enterprise' && 'Hablar con ventas'}
                  </Button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
