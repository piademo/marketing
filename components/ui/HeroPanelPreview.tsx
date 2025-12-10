"use client";

import * as React from "react";
import { CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

type HeroPanelPreviewProps = {
  className?: string;
};

export default function HeroPanelPreview({ className }: HeroPanelPreviewProps) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl",
        // Fondo glass oscuro tipo panel Pro
        "bg-[#05070b]/95",
        "border border-white/12",
        "backdrop-blur-2xl",
        "shadow-[0_32px_80px_rgba(0,0,0,0.9)]",
        className,
      )}
    >
      {/* Glow de fondo muy sutil */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-[-40%] bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.30),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(129,140,248,0.30),transparent_55%),radial-gradient(circle_at_50%_120%,rgba(15,23,42,1),transparent_60%)] blur-2xl" />
      </div>

      {/* Contenido estático */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-sky-400 to-violet-500 shadow-[0_0_30px_rgba(56,189,248,0.7)]">
          <CalendarDays className="h-8 w-8 text-white" />
        </div>
        <p className="text-sm font-medium text-slate-50">
          Vista previa del panel de gestión
        </p>
        <p className="mt-1 max-w-xs text-[11px] text-slate-400">
          La versión real incluye agenda, clientes, staff y recordatorios
          automáticos conectados a tu barbería.
        </p>
      </div>
    </div>
  );
}