"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  WalletCards,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { transition } from "@/lib/motion";

type Section =
  | "dashboard"
  | "agenda"
  | "clientes"
  | "staff"
  | "chats"
  | "monedero"
  | "ajustes";

type ProDashboardDemoProps = {
  className?: string;
  /**
   * auto   = usa breakpoints (sidebar en md+)
   * mobile = fuerza siempre la versión móvil (sin sidebar)
   */
  mode?: "auto" | "mobile";
};

export default function ProDashboardDemo({
  className,
  mode = "auto",
}: ProDashboardDemoProps) {
  const [section, setSection] = useState<Section>("dashboard");
  const [range, setRange] = useState<"hoy" | "semana" | "mes">("hoy");

  return (
    <div
      className={cn(
        "relative flex h-full w-full overflow-hidden rounded-2xl",
        // Light
        "bg-slate-50 text-slate-900 border border-slate-200 shadow-sm",
        // Dark
        "dark:bg-[#050816] dark:text-slate-50 dark:border-slate-800/80 dark:shadow-none",
        className,
      )}
    >
      {/* Sidebar escritorio (solo mode=auto + md+) */}
      <aside
        className={cn(
          "h-full w-14 flex-col items-center gap-3 border-r px-2 py-3 text-[10px]",
          "bg-slate-100/90 border-slate-200/80 text-slate-500",
          "dark:bg-[#050814] dark:border-slate-800/80 dark:text-slate-400",
          mode === "auto" ? "hidden md:flex" : "hidden",
        )}
      >
        {/* Avatar tenant */}
        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-[11px] font-semibold text-white shadow-[0_0_18px_rgba(56,189,248,0.7)]">
          B
        </div>

        {/* Navegación principal */}
        <NavIcon
          active={section === "dashboard"}
          onClick={() => setSection("dashboard")}
        >
          <LayoutGrid className="h-4 w-4" />
        </NavIcon>
        <NavIcon
          active={section === "agenda"}
          onClick={() => setSection("agenda")}
        >
          <CalendarDays className="h-4 w-4" />
        </NavIcon>
        <NavIcon
          active={section === "clientes"}
          onClick={() => setSection("clientes")}
        >
          <Users className="h-4 w-4" />
        </NavIcon>
        <NavIcon
          active={section === "staff"}
          onClick={() => setSection("staff")}
        >
          <Scissors className="h-4 w-4" />
        </NavIcon>
        <NavIcon
          active={section === "chats"}
          onClick={() => setSection("chats")}
        >
          <MessageCircleMore className="h-4 w-4" />
        </NavIcon>
        <NavIcon
          active={section === "monedero"}
          onClick={() => setSection("monedero")}
        >
          <WalletCards className="h-4 w-4" />
        </NavIcon>
        <NavIcon
          active={section === "ajustes"}
          onClick={() => setSection("ajustes")}
        >
          <Settings className="h-4 w-4" />
        </NavIcon>

        {/* Extra / logout */}
        <NavIcon onClick={() => setSection("dashboard")}>
          <BarChart3 className="h-4 w-4" />
        </NavIcon>

        <div className="mt-auto">
          <NavIcon onClick={() => setSection("dashboard")}>
            <LogOut className="h-4 w-4" />
          </NavIcon>
        </div>
      </aside>

      {/* Contenedor principal */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top nav móvil (tabs) → siempre visible en mode=mobile, solo móvil en auto */}
        <div
          className={cn(
            "flex border-b px-3 pt-2 pb-1 text-[11px]",
            "border-slate-200 bg-slate-50/95",
            "dark:border-slate-800 dark:bg-[#050816]/95",
            mode === "auto" ? "md:hidden" : "",
          )}
        >
          <div className="flex w-full flex-col gap-2">
            {/* Identidad */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-[12px] font-semibold">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-[11px] font-semibold text-white shadow-[0_0_12px_rgba(56,189,248,0.7)]">
                  B
                </span>
                <span>BookFast Pro</span>
              </div>
            </div>

            {/* Tabs horizontales scrollables */}
            <div className="flex gap-1 overflow-x-auto pb-1 text-[10px] no-scrollbar">
              <TopTab
                active={section === "dashboard"}
                onClick={() => setSection("dashboard")}
              >
                Dash
              </TopTab>
              <TopTab
                active={section === "agenda"}
                onClick={() => setSection("agenda")}
              >
                Agenda
              </TopTab>
              <TopTab
                active={section === "clientes"}
                onClick={() => setSection("clientes")}
              >
                Clientes
              </TopTab>
              <TopTab
                active={section === "staff"}
                onClick={() => setSection("staff")}
              >
                Staff
              </TopTab>
              <TopTab
                active={section === "chats"}
                onClick={() => setSection("chats")}
              >
                Chats
              </TopTab>
              <TopTab
                active={section === "monedero"}
                onClick={() => setSection("monedero")}
              >
                Monedero
              </TopTab>
              <TopTab
                active={section === "ajustes"}
                onClick={() => setSection("ajustes")}
              >
                Ajustes
              </TopTab>
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-hidden px-4 py-3 md:px-5 md:py-4">
          <AnimatePresence mode="wait">
            {section === "dashboard" && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={transition.fast}
                className="flex h-full flex-col gap-3"
              >
                <DashboardSection range={range} onRangeChange={setRange} />
              </motion.div>
            )}

            {section === "agenda" && (
              <motion.div
                key="agenda"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={transition.fast}
                className="flex h-full flex-col gap-3"
              >
                <AgendaSection />
              </motion.div>
            )}

            {section === "clientes" && (
              <motion.div
                key="clientes"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={transition.fast}
                className="flex h-full flex-col gap-3"
              >
                <ClientesSection />
              </motion.div>
            )}

            {section === "staff" && (
              <motion.div
                key="staff"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={transition.fast}
                className="flex h-full flex-col gap-3"
              >
                <StaffSection />
              </motion.div>
            )}

            {section === "chats" && (
              <motion.div
                key="chats"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={transition.fast}
                className="flex h-full flex-col gap-3"
              >
                <ChatsSection />
              </motion.div>
            )}

            {section === "monedero" && (
              <motion.div
                key="monedero"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={transition.fast}
                className="flex h-full flex-col gap-3"
              >
                <MonederoSection />
              </motion.div>
            )}

            {section === "ajustes" && (
              <motion.div
                key="ajustes"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={transition.fast}
                className="flex h-full flex-col gap-3"
              >
                <AjustesSection />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

/* ─────────────────────────────
   SECCIONES PRINCIPALES
   ───────────────────────────── */

function DashboardSection({
  range,
  onRangeChange,
}: {
  range: "hoy" | "semana" | "mes";
  onRangeChange: (r: "hoy" | "semana" | "mes") => void;
}) {
  return (
    <>
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold tracking-tight">Dashboard</h2>

        <div className="hidden items-center gap-2 text-[11px] text-slate-600 dark:text-slate-300 md:flex">
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-500 dark:text-emerald-300">
            Día tranquilo
          </span>
          <div className="flex items-center gap-1 rounded-full bg-slate-100 px-0.5 py-0.5 text-[10px] dark:bg-slate-900">
            <RangePill
              label="Hoy"
              active={range === "hoy"}
              onClick={() => onRangeChange("hoy")}
            />
            <RangePill
              label="Semana"
              active={range === "semana"}
              onClick={() => onRangeChange("semana")}
            />
            <RangePill
              label="Mes"
              active={range === "mes"}
              onClick={() => onRangeChange("mes")}
            />
          </div>
        </div>
      </div>

      {/* Contenido */}
      <section className="grid flex-1 grid-cols-1 gap-3 md:grid-cols-4">
        {/* Saludo + métricas */}
        <Card className="col-span-1 md:col-span-2">
          <div className="mb-4">
            <p className="text-sm font-semibold">
              Hola, Sergi <span className="ml-1">👋</span>
            </p>
            <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
              Miércoles, 10 de diciembre
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 text-[11px]">
            <MiniStat
              label="Reservas hoy"
              value="0"
              badge="Nuevo"
              badgeColor="emerald"
            />
            <MiniStat
              label="Ingresos hoy"
              value="0,00 €"
              Icon={Euro}
              badgeColor="sky"
            />
            <MiniStat
              label="Ocupación hoy"
              value="0%"
              Icon={Activity}
              badgeColor="violet"
            />
          </div>
        </Card>

        <Card>
          <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
            Ticket hoy
          </p>
          <p className="mt-3 text-lg font-semibold">0,00 €</p>
          <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
            Sin reservas confirmadas todavía.
          </p>
        </Card>

        <Card>
          <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
            Objetivo mensual
          </p>
          <p className="mt-3 text-lg font-semibold">3.000 €</p>
          <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
            Aún no hay datos de este mes.
          </p>
        </Card>

        {/* Próximas reservas & Staff & Performance & Acciones */}
        <Card className="col-span-1 md:col-span-2">
          <div className="mb-2 flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2">
              <span className="font-medium">Próximas reservas</span>
              <div className="flex gap-1 rounded-full bg-slate-100 px-0.5 py-0.5 text-[10px] dark:bg-slate-900">
                <SmallPill active>Hoy</SmallPill>
                <SmallPill>Mañana</SmallPill>
              </div>
            </div>
            <button className="text-[11px] text-emerald-500 dark:text-emerald-300">
              Ver agenda →
            </button>
          </div>
          <div className="flex h-16 items-center justify-center rounded-xl border border-dashed border-slate-200 text-[11px] text-slate-500 dark:border-slate-700 dark:text-slate-400">
            <CalendarDays className="mr-2 h-4 w-4" />
            Sin reservas próximas
          </div>
        </Card>

        <Card>
          <div className="mb-2 flex items-center justify-between text-[11px]">
            <span className="font-medium">Staff hoy</span>
            <span className="text-slate-500 dark:text-slate-400">
              0 activos
            </span>
          </div>
          <div className="flex h-16 flex-col items-center justify-center text-[11px] text-slate-500 dark:text-slate-400">
            <Scissors className="mb-1 h-4 w-4" />
            <span>Sin staff activo</span>
            <button className="mt-1 text-[11px] text-emerald-500 dark:text-emerald-300">
              Añadir staff →
            </button>
          </div>
        </Card>

        <Card className="hidden md:flex md:col-span-2 md:flex-col">
          <div className="mb-2 flex items-center justify-between text-[11px]">
            <div>
              <p className="font-medium">Performance</p>
              <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">
                Reservas diarias · Últimos 7 días
              </p>
            </div>
            <div className="flex gap-1 rounded-full bg-slate-100 px-0.5 py-0.5 text-[10px] dark:bg-slate-900">
              <SmallPill active>7d</SmallPill>
              <SmallPill>30d</SmallPill>
            </div>
          </div>

          <div className="mt-2 flex-1 rounded-xl bg-slate-100/80 px-3 py-2 dark:bg-slate-950/40">
            <div className="flex h-16 items-end gap-1">
              {[0, 0, 0, 0, 0].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-slate-300/80 dark:bg-slate-800/80"
                  style={{ height: `${30 + i * 4}%` }}
                />
              ))}
            </div>
            <div className="mt-1 flex justify-between text-[9px] text-slate-500 dark:text-slate-400">
              <span>L</span>
              <span>M</span>
              <span>X</span>
              <span>J</span>
              <span>V</span>
            </div>
          </div>
        </Card>

        <Card className="flex flex-col">
          <p className="mb-2 text-sm font-medium">Acciones</p>

          <button className="mb-3 flex h-8 w-full items-center justify-between rounded-full bg-gradient-to-r from-sky-500 via-emerald-400 to-teal-400 px-3 text-[11px] font-medium text-slate-950 shadow-[0_0_18px_rgba(34,197,235,0.7)]">
            <span>+ Nueva cita</span>
            <ArrowRightTiny />
          </button>

          <div className="mb-2 space-y-1 text-[11px]">
            <QuickRow label="Clientes" />
            <QuickRow label="Agenda" />
          </div>

          <div className="mt-auto border-t border-slate-200 pt-2 text-[10px] text-slate-500 dark:border-slate-700 dark:text-slate-400">
            Acceso rápido: + Cliente · + Staff · + Servicio
          </div>
        </Card>
      </section>
    </>
  );
}

function AgendaSection() {
  const slots = [
    { time: "10:00", cliente: "Carlos", servicio: "Corte + barba" },
    { time: "11:00", cliente: "Ana", servicio: "Color + peinado" },
    { time: "12:00", cliente: "Libre", servicio: "Hueco libre" },
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold tracking-tight">Agenda</h2>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Vista rápida de hoy
          </p>
        </div>
        <div className="hidden items-center gap-1 rounded-full bg-slate-100 px-1 py-0.5 text-[10px] dark:bg-slate-900 md:flex">
          <SmallPill active>Hoy</SmallPill>
          <SmallPill>Mañana</SmallPill>
        </div>
      </div>

      <Card className="flex-1">
        <div className="mb-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <span>Turnos de hoy</span>
          <span>0/8 huecos ocupados</span>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-2 md:grid-cols-2">
          {slots.map((slot) => (
            <div
              key={slot.time}
              className={cn(
                "flex flex-col justify-between rounded-xl border px-3 py-2 text-[11px] transition-all",
                "border-slate-200 bg-slate-50 hover:border-sky-400 hover:bg-sky-50",
                "dark:border-slate-700 dark:bg-slate-950/40 dark:hover:border-sky-500 dark:hover:bg-slate-900/60",
              )}
            >
              <div className="mb-1 flex items-center justify-between">
                <span className="font-medium">{slot.time}</span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                  {slot.cliente === "Libre" ? "Disponible" : "Reservado"}
                </span>
              </div>
              <div className="text-slate-700 dark:text-slate-200">
                {slot.cliente}
              </div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">
                {slot.servicio}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

function ClientesSection() {
  const clientes = [
    { nombre: "Carlos López", visitas: 8, proximo: "Hoy · 10:00" },
    { nombre: "Ana Martínez", visitas: 5, proximo: "Hoy · 11:00" },
    { nombre: "Marcos Ruiz", visitas: 2, proximo: "Mañana · 17:30" },
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold tracking-tight">Clientes</h2>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Tus mejores clientes a un vistazo
          </p>
        </div>
        <div className="hidden rounded-full bg-slate-100 px-3 py-1.5 text-[11px] text-slate-500 dark:bg-slate-900 dark:text-slate-300 md:block">
          Buscar cliente…
        </div>
      </div>

      <Card className="flex-1">
        <div className="mb-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <span>Clientes activos</span>
          <span>+3 esta semana</span>
        </div>

        <div className="space-y-2">
          {clientes.map((c) => (
            <div
              key={c.nombre}
              className={cn(
                "flex items-center justify-between rounded-xl px-3 py-2 text-[11px]",
                "bg-slate-50 hover:bg-slate-100",
                "dark:bg-slate-950/40 dark:hover:bg-slate-900/70",
              )}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-slate-500 to-slate-800 text-[11px] font-medium text-white">
                  {c.nombre[0]}
                </div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-100">
                    {c.nombre}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    Próxima cita · {c.proximo}
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px] text-sky-600 dark:bg-sky-500/20 dark:text-sky-300">
                {c.visitas} visitas
              </span>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

function StaffSection() {
  const staff = [
    { nombre: "Javier", rol: "Barbero senior" },
    { nombre: "Lucía", rol: "Colorista" },
    { nombre: "Diego", rol: "Barbero junior" },
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold tracking-tight">Staff</h2>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Configura quién atiende cada silla
          </p>
        </div>
        <button className="hidden rounded-full bg-slate-900 px-3 py-1.5 text-[11px] text-slate-100 dark:bg-slate-100 dark:text-slate-900 md:block">
          + Añadir staff
        </button>
      </div>

      <Card className="flex-1">
        <div className="space-y-2">
          {staff.map((s) => (
            <div
              key={s.nombre}
              className={cn(
                "flex items-center justify-between rounded-xl px-3 py-2 text-[11px]",
                "bg-slate-50 hover:bg-slate-100",
                "dark:bg-slate-950/40 dark:hover:bg-slate-900/70",
              )}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 text-[11px] font-medium text-white">
                  {s.nombre[0]}
                </div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-100">
                    {s.nombre}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    {s.rol}
                  </p>
                </div>
              </div>
              <span className="text-[10px] text-emerald-500 dark:text-emerald-300">
                Hoy disponible
              </span>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

function ChatsSection() {
  const chats = [
    {
      nombre: "Carlos · WhatsApp",
      preview: "¿Puedo cambiar mi cita de hoy?",
      estado: "Sin responder",
    },
    {
      nombre: "Ana · Instagram",
      preview: "¿Tenéis hueco para dos el sábado?",
      estado: "Respondido",
    },
    {
      nombre: "Walk-in · Webchat",
      preview: "Quiero reservar para esta tarde",
      estado: "Sin responder",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold tracking-tight">Chats</h2>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Conversaciones unificadas (WhatsApp, Instagram y Web)
          </p>
        </div>
        <span className="hidden rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300 md:inline">
          IA activada
        </span>
      </div>

      <Card className="flex-1">
        <div className="mb-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <span>Chats de hoy</span>
          <span>3 abiertos</span>
        </div>

        <div className="space-y-2">
          {chats.map((chat, idx) => (
            <div
              key={idx}
              className={cn(
                "flex items-center justify-between rounded-xl px-3 py-2 text-[11px]",
                "bg-slate-50 hover:bg-slate-100",
                "dark:bg-slate-950/40 dark:hover:bg-slate-900/70",
              )}
            >
              <div className="flex flex-1 items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-violet-500 text-[10px] font-medium text-white">
                  {chat.nombre.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[11px] font-medium text-slate-800 dark:text-slate-100">
                    {chat.nombre}
                  </p>
                  <p className="truncate text-[10px] text-slate-500 dark:text-slate-400">
                    {chat.preview}
                  </p>
                </div>
              </div>
              <span
                className={cn(
                  "ml-2 rounded-full px-2 py-0.5 text-[10px]",
                  chat.estado === "Sin responder"
                    ? "bg-rose-500/10 text-rose-500 dark:bg-rose-500/15 dark:text-rose-300"
                    : "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300",
                )}
              >
                {chat.estado}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-xl bg-slate-100 px-3 py-2 text-[10px] text-slate-600 dark:bg-slate-900 dark:text-slate-300">
          La versión real permite responder desde el panel, asignar chats a
          staff y activar respuestas automáticas con IA.
        </div>
      </Card>
    </>
  );
}

function MonederoSection() {
  const movimientos = [
    { concepto: "Suscripción BookFast Pro", fecha: "1 dic", importe: "-39,00 €" },
    { concepto: "Señal online · Ana", fecha: "28 nov", importe: "+10,00 €" },
    { concepto: "Señal online · Carlos", fecha: "25 nov", importe: "+15,00 €" },
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold tracking-tight">Monedero</h2>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Controla pagos, señales y suscripciones
          </p>
        </div>
        <span className="hidden rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px] text-sky-600 dark:bg-sky-500/15 dark:text-sky-300 md:inline">
          Stripe conectado
        </span>
      </div>

      <section className="grid flex-1 grid-cols-1 gap-3 md:grid-cols-3">
        <Card className="md:col-span-1">
          <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
            Saldo disponible
          </p>
          <p className="mt-3 text-2xl font-semibold">0,00 €</p>
          <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
            El saldo se ingresa automáticamente en tu cuenta bancaria.
          </p>
        </Card>

        <Card className="md:col-span-2">
          <div className="mb-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
            <span>Últimos movimientos</span>
            <span>Vista demo</span>
          </div>

          <div className="space-y-1">
            {movimientos.map((m, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex items-center justify-between rounded-xl px-3 py-2 text-[11px]",
                  "bg-slate-50 hover:bg-slate-100",
                  "dark:bg-slate-950/40 dark:hover:bg-slate-900/70",
                )}
              >
                <div>
                  <p className="text-[11px] font-medium text-slate-800 dark:text-slate-100">
                    {m.concepto}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    {m.fecha}
                  </p>
                </div>
                <span
                  className={cn(
                    "ml-2 text-[11px] font-semibold",
                    m.importe.startsWith("+")
                      ? "text-emerald-500 dark:text-emerald-300"
                      : "text-rose-500 dark:text-rose-300",
                  )}
                >
                  {m.importe}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-xl bg-slate-100 px-3 py-2 text-[10px] text-slate-600 dark:bg-slate-900 dark:text-slate-300">
            El monedero real muestra devoluciones, señales, suscripciones y
            estadísticas de ingresos por canal.
          </div>
        </Card>
      </section>
    </>
  );
}

function AjustesSection() {
  const ajustes = [
    {
      nombre: "Confirmación por WhatsApp",
      descripcion: "Envía mensaje automático al reservar.",
      activo: true,
    },
    {
      nombre: "Cobro de señal online",
      descripcion: "Pide pago parcial para bloquear la cita.",
      activo: false,
    },
    {
      nombre: "Recordatorios +24h",
      descripcion: "Reduce no-shows con avisos previos.",
      activo: true,
    },
    {
      nombre: "Lista de espera inteligente",
      descripcion: "Rellena huecos cancelados automáticamente.",
      activo: true,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold tracking-tight">Ajustes</h2>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Reglas clave de tu sistema de reservas
          </p>
        </div>
        <button className="hidden rounded-full bg-slate-900 px-3 py-1.5 text-[11px] text-slate-100 dark:bg-slate-100 dark:text-slate-900 md:block">
          Abrir en Pro
        </button>
      </div>

      <Card className="flex-1">
        <div className="space-y-2">
          {ajustes.map((ajuste, idx) => (
            <div
              key={idx}
              className={cn(
                "flex items-center justify-between rounded-xl px-3 py-2 text-[11px]",
                "bg-slate-50 hover:bg-slate-100",
                "dark:bg-slate-950/40 dark:hover:bg-slate-900/70",
              )}
            >
              <div className="flex-1">
                <p className="font-medium text-slate-800 dark:text-slate-100">
                  {ajuste.nombre}
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  {ajuste.descripcion}
                </p>
              </div>
              <TogglePill active={ajuste.activo} />
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-xl bg-slate-100 px-3 py-2 text-[10px] text-slate-600 dark:bg-slate-900 dark:text-slate-300">
          En el panel real puedes configurar horarios, buffers, reglas de
          cancelación, métodos de pago y más.
        </div>
      </Card>
    </>
  );
}

/* ─────────────────────────────
   SUBCOMPONENTES
   ───────────────────────────── */

function NavIcon({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-xl border text-slate-500 transition-colors",
        "border-transparent bg-transparent hover:bg-slate-200/80",
        "dark:text-slate-400 dark:hover:bg-slate-800/80",
        active &&
          "bg-sky-500/10 text-sky-600 border-sky-400/70 shadow-[0_0_14px_rgba(56,189,248,0.8)] dark:text-sky-300",
      )}
    >
      {children}
    </button>
  );
}

function TopTab({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "whitespace-nowrap rounded-full px-2.5 py-0.5",
        active
          ? "bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900"
          : "text-slate-600 dark:text-slate-300",
      )}
    >
      {children}
    </button>
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
        "flex flex-col rounded-2xl border px-4 py-3",
        "border-slate-200/80 bg-white/95 shadow-sm",
        "dark:border-slate-800/80 dark:bg-slate-950/40 dark:shadow-[0_14px_40px_rgba(0,0,0,0.7)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function MiniStat({
  label,
  value,
  badge,
  badgeColor,
  Icon,
}: {
  label: string;
  value: string;
  badge?: string;
  badgeColor?: "emerald" | "sky" | "violet";
  Icon?: React.ComponentType<{ className?: string }>;
}) {
  const badgeClasses =
    badgeColor === "emerald"
      ? "bg-emerald-500/10 text-emerald-500"
      : badgeColor === "sky"
      ? "bg-sky-500/10 text-sky-500"
      : "bg-violet-500/10 text-violet-500";

  const IconComp = Icon;

  return (
    <div className="rounded-xl bg-slate-100/90 px-3 py-2 text-slate-800 dark:bg-slate-950/60 dark:text-slate-50">
      <div className="flex items-center justify-between text-[10px]">
        <p className="uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
          {label}
        </p>
        {badge && (
          <span
            className={cn(
              "rounded-full px-1.5 py-0.5 text-[9px]",
              badgeClasses,
            )}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="mt-1 flex items-center gap-1">
        {IconComp && (
          <IconComp className="h-3.5 w-3.5 text-slate-500 dark:text-slate-300" />
        )}
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
}

function SmallPill({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={cn(
        "rounded-full px-2 py-0.5 text-[10px]",
        active
          ? "bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900"
          : "text-slate-500 dark:text-slate-400",
      )}
    >
      {children}
    </span>
  );
}

function RangePill({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-2 py-0.5",
        active
          ? "bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900"
          : "text-slate-500 dark:text-slate-300",
      )}
    >
      {label}
    </button>
  );
}

function QuickRow({ label }: { label: string }) {
  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center justify-between rounded-xl px-3 py-1.5 text-left text-[11px]",
        "bg-slate-100 hover:bg-slate-200",
        "dark:bg-slate-950/50 dark:text-slate-200 dark:hover:bg-slate-900/80",
      )}
    >
      <span>{label}</span>
      <Clock className="h-3 w-3 text-slate-500 dark:text-slate-400" />
    </button>
  );
}

function TogglePill({ active }: { active: boolean }) {
  return (
    <div
      className={cn(
        "flex h-4.5 w-8 items-center rounded-full border bg-slate-200/70 p-0.5 text-[10px] transition-all",
        "dark:bg-slate-900 dark:border-slate-700",
        active &&
          "border-emerald-400/70 bg-emerald-500/20 dark:bg-emerald-500/20",
      )}
    >
      <div
        className={cn(
          "h-3 w-3 rounded-full bg-slate-500 transition-transform",
          active && "translate-x-3 bg-emerald-400",
        )}
      />
    </div>
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