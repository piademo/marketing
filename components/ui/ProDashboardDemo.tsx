"use client";

import * as React from "react";
import {
  LayoutGrid,
  CalendarDays,
  Users,
  Scissors,
  Settings,
  BarChart3,
  MessageCircleMore,
  Clock,
  Euro,
  Activity,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ProDashboardDemoProps = {
  className?: string;
};

export default function ProDashboardDemo({ className }: ProDashboardDemoProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full overflow-hidden rounded-2xl",
        // Fondo general tipo app Pro
        "bg-[#050816] text-slate-50",
        "border border-slate-800/80",
        "shadow-[0_32px_80px_rgba(0,0,0,0.9)]",
        className,
      )}
    >
      {/* Sidebar */}
      <aside className="flex w-14 flex-col items-center gap-3 border-r border-slate-800/80 bg-[#050814] px-2 py-3 text-[10px]">
        {/* Avatar tenant */}
        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-[11px] font-semibold shadow-[0_0_18px_rgba(56,189,248,0.7)]">
          B
        </div>

        {/* Iconos navegación */}
        <NavIcon active>
          <LayoutGrid className="h-4 w-4" />
        </NavIcon>
        <NavIcon>
          <CalendarDays className="h-4 w-4" />
        </NavIcon>
        <NavIcon>
          <Users className="h-4 w-4" />
        </NavIcon>
        <NavIcon>
          <Scissors className="h-4 w-4" />
        </NavIcon>
        <NavIcon>
          <MessageCircleMore className="h-4 w-4" />
        </NavIcon>
        <NavIcon>
          <BarChart3 className="h-4 w-4" />
        </NavIcon>
        <NavIcon>
          <Settings className="h-4 w-4" />
        </NavIcon>

        <div className="mt-auto">
          <NavIcon>
            <LogOut className="h-4 w-4" />
          </NavIcon>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 bg-[#050816] px-5 py-4">
        {/* Top bar */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold tracking-tight">Dashboard</h2>

          <div className="flex items-center gap-2 text-[11px] text-slate-300">
            <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-300">
              Día tranquilo
            </span>
            <div className="flex gap-1 rounded-full bg-slate-900 px-0.5 py-0.5">
              <button className="rounded-full bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-900">
                Hoy
              </button>
              <button className="rounded-full px-2 py-0.5 text-[10px] text-slate-400">
                Semana
              </button>
              <button className="rounded-full px-2 py-0.5 text-[10px] text-slate-400">
                Mes
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta saludo + stats superiores */}
        <section className="mb-4 grid grid-cols-1 gap-3 lg:grid-cols-4">
          {/* Saludo */}
          <Card className="col-span-1 lg:col-span-2">
            <div className="mb-4">
              <p className="text-sm font-semibold">
                Hola, Sergi <span className="ml-1">👋</span>
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Miércoles, 10 de diciembre
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-300">
              <div className="rounded-xl bg-slate-900/60 px-3 py-2">
                <p className="text-[10px] uppercase tracking-[0.16em] text-emerald-400">
                  Reservas hoy
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-50">0</p>
              </div>
              <div className="rounded-xl bg-slate-900/60 px-3 py-2">
                <p className="flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] text-sky-400">
                  <Euro className="h-3 w-3" />
                  Ingresos hoy
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-50">
                  0,00 €
                </p>
              </div>
              <div className="rounded-xl bg-slate-900/60 px-3 py-2">
                <p className="flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] text-violet-400">
                  <Activity className="h-3 w-3" />
                  Ocupación
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-50">0%</p>
              </div>
            </div>
          </Card>

          {/* Ticket medio / métrica extra */}
          <Card>
            <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
              Ticket hoy
            </p>
            <p className="mt-3 text-lg font-semibold text-slate-50">0,00 €</p>
            <p className="mt-1 text-[11px] text-slate-500">
              Sin reservas confirmadas todavía.
            </p>
          </Card>

          {/* Placeholder extra (p. ej. objetivos) */}
          <Card>
            <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
              Objetivo mensual
            </p>
            <p className="mt-3 text-lg font-semibold text-slate-50">3.000 €</p>
            <p className="mt-1 text-[11px] text-slate-500">
              Aún no hay datos de este mes.
            </p>
          </Card>
        </section>

        {/* Middle row: Próximas reservas + Staff hoy */}
        <section className="mb-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
          {/* Próximas reservas */}
          <Card className="lg:col-span-2">
            <div className="mb-3 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-medium text-slate-50">
                  Próximas reservas
                </span>
                <div className="flex gap-1 rounded-full bg-slate-900 px-0.5 py-0.5">
                  <span className="rounded-full bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-900">
                    Hoy
                  </span>
                  <span className="rounded-full px-2 py-0.5 text-[10px] text-slate-400">
                    Mañana
                  </span>
                </div>
              </div>
              <button className="text-[11px] text-emerald-400">
                Ver agenda →
              </button>
            </div>

            <div className="flex h-16 items-center justify-center rounded-xl border border-dashed border-slate-700/80 text-[11px] text-slate-500">
              <CalendarDays className="mr-2 h-4 w-4" />
              Sin reservas próximas
            </div>
          </Card>

          {/* Staff hoy */}
          <Card>
            <div className="mb-3 flex items-center justify-between text-[11px]">
              <span className="font-medium text-slate-50">Staff hoy</span>
              <span className="text-slate-500">0 activos</span>
            </div>
            <div className="flex h-16 flex-col items-center justify-center text-[11px] text-slate-500">
              <Scissors className="mb-1 h-4 w-4" />
              <span>Sin staff activo</span>
              <button className="mt-1 text-[11px] text-emerald-400">
                Añadir staff →
              </button>
            </div>
          </Card>
        </section>

        {/* Bottom row: Performance + Acciones */}
        <section className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          {/* Performance */}
          <Card className="lg:col-span-2">
            <div className="mb-2 flex items-center justify-between text-[11px]">
              <div>
                <p className="font-medium text-slate-50">Performance</p>
                <p className="mt-0.5 text-[10px] text-slate-500">
                  Reservas diarias · Últimos 7 días
                </p>
              </div>
              <div className="flex gap-1 rounded-full bg-slate-900 px-0.5 py-0.5">
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-200">
                  7d
                </span>
                <span className="rounded-full px-2 py-0.5 text-[10px] text-slate-400">
                  30d
                </span>
              </div>
            </div>

            {/* Mini gráfico placeholder */}
            <div className="mt-2 flex h-20 flex-col justify-between rounded-xl bg-slate-950/40 px-3 py-2">
              <div className="flex flex-1 items-end gap-1">
                {[0, 0, 0, 0, 0].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-slate-800/70"
                    style={{ height: `${20 + h}%` }}
                  />
                ))}
              </div>
              <div className="mt-1 flex justify-between text-[9px] text-slate-500">
                <span>L</span>
                <span>M</span>
                <span>X</span>
                <span>J</span>
                <span>V</span>
              </div>
            </div>

            {/* Footer métricas */}
            <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
              <span>Sin datos suficientes todavía.</span>
              <div className="flex gap-3">
                <span className="text-emerald-300">0,00 € ingresos 7d</span>
                <span className="text-sky-300">0,0 citas 7d</span>
                <span className="text-violet-300">0,00 € ticket</span>
              </div>
            </div>
          </Card>

          {/* Acciones rápidas */}
          <Card>
            <p className="mb-2 text-sm font-medium text-slate-50">Acciones</p>

            <button className="mb-3 flex h-8 w-full items-center justify-between rounded-full bg-gradient-to-r from-sky-500 via-emerald-400 to-teal-400 px-3 text-[11px] font-medium text-slate-950 shadow-[0_0_18px_rgba(34,197,235,0.7)]">
              <span>+ Nueva cita</span>
              <ArrowRightTiny />
            </button>

            <div className="mb-2 space-y-1 text-[11px] text-slate-200">
              <QuickRow label="Clientes" />
              <QuickRow label="Agenda" />
            </div>

            <div className="mt-2 border-t border-slate-800/80 pt-2 text-[10px] text-slate-500">
              Acceso rápido: + Cliente · + Staff · + Servicio
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}

/* ─────────────────────────────
   Subcomponentes pequeños
   ───────────────────────────── */

function NavIcon({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-xl text-slate-500",
        "bg-transparent border border-transparent",
        active &&
          "bg-sky-500/10 text-sky-300 border-sky-500/60 shadow-[0_0_14px_rgba(56,189,248,0.8)]",
      )}
    >
      {children}
    </div>
  );
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border border-slate-800/80 bg-slate-950/40 px-4 py-3",
        "shadow-[0_14px_40px_rgba(0,0,0,0.7)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function QuickRow({ label }: { label: string }) {
  return (
    <button className="flex w-full items-center justify-between rounded-xl bg-slate-950/50 px-3 py-1.5 text-left text-[11px] text-slate-200 hover:bg-slate-900/80">
      <span>{label}</span>
      <Clock className="h-3 w-3 text-slate-500" />
    </button>
  );
}

function ArrowRightTiny() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3 w-3"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 3.5L10 8L5 12.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}