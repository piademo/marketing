"use client";

import React from "react";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;        // Longitud de la cola del cometa
  duration?: number;    // Tiempo en dar una vuelta (segundos)
  borderWidth?: number; // Grosor del borde
  colorFrom?: string;   // Color de la cabeza
  colorTo?: string;     // Color de la cola
  delay?: number;       // Retraso en segundos
  radius?: number;      // Radio de la esquina
}

export default function BorderBeam({
  className,
  duration = 15,
  borderWidth = 1.5,
  colorFrom = "#0ea5e9", // primary-500
  colorTo = "#a855f7",   // secondary-500
  delay = 0,
  radius = 24, // Ajustado a 24px para coincidir con rounded-3xl
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          "--duration": duration,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": delay,
          "--radius": radius,
        } as CSSProperties
      }
      className={cn(
        // El contenedor hereda el rounded del padre y define el borde transparente base
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",

        // MÁSCARA: Recorta el interior para dejar solo el borde visible
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",

        // ANIMACIÓN: usamos un conic-gradient que rota suavemente alrededor del borde
        "after:absolute after:inset-[-1px] after:rounded-[inherit] after:animate-border-beam after:[animation-delay:calc(var(--delay)*1s)] after:[background:conic-gradient(from_0deg_at_50%_50%,var(--color-from),var(--color-to),transparent_60%,var(--color-from))]",
        className,
      )}
    />
  );
}
