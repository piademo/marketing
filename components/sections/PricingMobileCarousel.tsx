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

// Física de muelle para un movimiento fluido y con "peso" tipo Cover Flow
const SPRING_OPTIONS = {
  type: "spring" as const,
  stiffness: 180,
  damping: 25,
  mass: 1.2,
};

export default function PricingMobileCarousel() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [activeIndex, setActiveIndex] = useState(1); // Empezar en el del medio (Professional)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Índice circular para loop infinito
  const getIndex = (index: number) => {
    const len = plans.length;
    return ((index % len) + len) % len;
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const threshold = 50; // distancia mínima algo mayor para un snap más pesado
    if (info.offset.x < -threshold) {
      setActiveIndex((prev) => prev + 1);
    } else if (info.offset.x > threshold) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full h-[480px] flex items-center justify-center overflow-hidden py-8">
      {/* Contenedor de Perspectiva 3D, clave para la profundidad */}
      <div className="relative w-full max-w-[320px] h-full flex items-center justify-center perspective-[1200px]">
        {[-1, 0, 1].map((offset) => {
          const index = getIndex(activeIndex + offset);
          const plan = plans[index];
          const isActive = offset === 0;

          return (
            <motion.div
              key={`${index}-${activeIndex}`}
              className={cn(
                "absolute top-0 w-full cursor-grab active:cursor-grabbing origin-center",
                isActive ? "z-30" : "z-10",
              )}
              initial={{
                scale: 0.8,
                x: `${offset * 100}%`,
                rotateY: offset === -1 ? 45 : offset === 1 ? -45 : 0,
                opacity: 0,
                filter: "blur(2px)",
              }}
              animate={{
                // Centro
                scale: isActive ? 1 : 0.85,
                x: isActive ? "0%" : `${offset * 65}%`, // overlap agresivo (~35-40% solapado)
                // Concavidad: las laterales miran hacia el centro
                rotateY: isActive ? 0 : offset === -1 ? 35 : -35,
                opacity: isActive ? 1 : 0.6,
                zIndex: isActive ? 30 : 5,
                // Profundidad de campo: blur ligero en las laterales
                filter: isActive ? "blur(0px)" : "blur(2px)",
              }}
              transition={SPRING_OPTIONS}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(e, info) => {
                // la central manda, pero permitimos que las laterales empujen si las arrastras hacia el centro
                if (isActive) {
                  handleDragEnd(e, info);
                } else {
                  if (offset === 1 && info.offset.x < -20) setActiveIndex((prev) => prev + 1);
                  if (offset === -1 && info.offset.x > 20) setActiveIndex((prev) => prev - 1);
                }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Tarjeta estilo glassmorphism inspirada en GlassCard */}
              <div
                className={cn(
                  "relative h-[380px] flex flex-col rounded-3xl overflow-hidden border backdrop-blur-2xl transition-all duration-300",
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
