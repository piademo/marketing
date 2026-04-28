"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3, Users, CalendarDays, MessageCircle, MoreHorizontal,
  Bell, Search, ChevronLeft, ChevronRight, SlidersHorizontal, X,
  Scissors, WalletCards, Megaphone, Settings, Download, Pencil,
  Trash2, Archive, UserPlus, Star, Clock, ChevronDown, Tag,
  Copy, Power, ArrowUpRight, Mail, CheckCircle2, RefreshCw,
  AlertCircle, Filter, UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { transition } from "@/lib/motion";
import { BookfastLogoMark } from "@/components/ui/BookfastLogo";

type Section =
  | "estadisticas" | "agenda" | "clientes" | "chats"
  | "staff" | "servicios" | "monedero" | "marketing" | "ajustes";

type ProDashboardDemoProps = { className?: string; mode?: "auto" | "mobile" };

const TEAL = "#4FA1D8";
const MAS_SECTIONS: Section[] = ["staff", "servicios", "monedero", "marketing", "ajustes"];

const SECTION_TITLE: Record<Section, string> = {
  estadisticas: "Estadísticas", agenda: "Agenda", clientes: "Clientes", chats: "Chats",
  staff: "Staff", servicios: "Servicios", monedero: "Monedero", marketing: "Marketing", ajustes: "Ajustes",
};

export default function ProDashboardDemo({ className, mode = "auto" }: ProDashboardDemoProps) {
  const [section, setSection] = useState<Section>("agenda");
  const [showMas, setShowMas] = useState(false);

  const go = (s: Section) => { setSection(s); setShowMas(false); };
  const isMain = !MAS_SECTIONS.includes(section);

  return (
    <div className={cn("relative flex h-full w-full overflow-hidden bg-black text-white", className)}>

      {/* Desktop sidebar */}
      <aside className={cn(
        "h-full w-14 flex-col items-center gap-3 border-r px-2 py-4 bg-[#0A0A0A] border-[#222]",
        mode === "auto" ? "hidden md:flex" : "hidden",
      )}>
        <div className="mb-3"><BookfastLogoMark size={28} /></div>
        {([ ["estadisticas", BarChart3], ["clientes", Users], ["agenda", CalendarDays], ["chats", MessageCircle] ] as [Section, React.ElementType][]).map(([id, Icon]) => (
          <button key={id} onClick={() => go(id)}
            className="flex h-9 w-9 items-center justify-center rounded-xl transition-colors"
            style={section === id ? { background: TEAL + "22", color: TEAL } : { color: "#555" }}>
            <Icon className="h-4 w-4" />
          </button>
        ))}
        <div className="mt-auto">
          <button onClick={() => setShowMas(!showMas)}
            className="flex h-9 w-9 items-center justify-center rounded-xl transition-colors"
            style={showMas || MAS_SECTIONS.includes(section) ? { background: TEAL + "22", color: TEAL } : { color: "#555" }}>
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </aside>

      {/* Main column */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Mobile top bar */}
        <header className={cn(
          "flex flex-shrink-0 items-center justify-between px-4 py-3",
          mode === "auto" ? "md:hidden" : "",
        )}>
          <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: TEAL }}>
            <span className="text-[13px] font-bold text-white">JC</span>
          </div>
          <h1 className="text-[17px] font-bold">{SECTION_TITLE[section]}</h1>
          <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: TEAL }}>
            <BookfastLogoMark size={18} />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={section} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }} transition={transition.fast} className="h-full overflow-y-auto no-scrollbar">
              {section === "estadisticas" && <EstadisticasSection />}
              {section === "agenda"       && <AgendaSection />}
              {section === "clientes"     && <ClientesSection />}
              {section === "chats"        && <ChatsSection />}
              {section === "staff"        && <StaffSection />}
              {section === "servicios"    && <ServiciosSection />}
              {section === "monedero"     && <MonederoSection />}
              {section === "marketing"    && <MarketingSection />}
              {section === "ajustes"      && <AjustesSection />}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Bottom tab bar */}
        <nav className={cn(
          "flex flex-shrink-0 items-end border-t border-[#1C1C1E] bg-black px-1 pb-3 pt-2",
          mode === "auto" ? "md:hidden" : "",
        )}>
          <BottomTab icon={BarChart3} label="Stats" active={section === "estadisticas" && !showMas} onClick={() => go("estadisticas")} />
          <BottomTab icon={Users} label="Clientes" active={section === "clientes" && !showMas} onClick={() => go("clientes")} />
          <button onClick={() => go("agenda")} className="flex flex-1 flex-col items-center pb-0.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full transition-all"
              style={{ background: section === "agenda" && !showMas ? TEAL : "#1C1C1E",
                boxShadow: section === "agenda" && !showMas ? "0 0 20px rgba(79,161,216,0.45)" : "none" }}>
              <CalendarDays className="h-5 w-5 text-white" />
            </div>
          </button>
          <BottomTab icon={MessageCircle} label="Chats" active={section === "chats" && !showMas} onClick={() => go("chats")} />
          <BottomTab icon={MoreHorizontal} label="Más" active={showMas || MAS_SECTIONS.includes(section)} onClick={() => setShowMas(!showMas)} />
        </nav>
      </div>

      {/* "Más opciones" bottom sheet */}
      <AnimatePresence>
        {showMas && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-20">
            <div className="absolute inset-0 bg-black/60" onClick={() => setShowMas(false)} />
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="absolute bottom-0 left-0 right-0 rounded-t-3xl bg-[#1C1C1E] px-5 pb-10 pt-3">
              <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-[#3A3A3C]" />
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[17px] font-bold">Más opciones</span>
                <button onClick={() => setShowMas(false)} className="rounded-full bg-[#2C2C2E] p-1.5">
                  <X className="h-4 w-4 text-[#8E8E93]" />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {([
                  [Scissors, "Servicios", "servicios"],
                  [Users,    "Staff",     "staff"],
                  [WalletCards, "Monedero", "monedero"],
                  [Megaphone, "Marketing", "marketing"],
                  [Settings, "Ajustes",   "ajustes"],
                ] as [React.ElementType, string, Section][]).map(([Icon, label, id]) => (
                  <button key={label} onClick={() => go(id)}
                    className="flex flex-col items-center gap-2 rounded-2xl bg-[#2C2C2E] px-3 py-4 transition-opacity active:opacity-60">
                    <Icon className="h-6 w-6 text-[#8E8E93]" />
                    <span className="text-[12px] text-[#8E8E93]">{label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── ESTADÍSTICAS ─────────────────────────────── */

function EstadisticasSection() {
  return (
    <div className="space-y-3 px-4 pb-4">
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-semibold">Martes, 28 de abril</span>
        <button className="flex items-center gap-1.5 rounded-xl bg-[#1C1C1E] px-3 py-1.5 text-[13px]">
          Hoy <ChevronDown className="h-3.5 w-3.5 text-[#8E8E93]" />
        </button>
      </div>

      {/* 4 stat tiles */}
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {[
          { color: "#34C759", icon: ArrowUpRight, value: "4",       label: "RESERVAS HOY" },
          { color: TEAL,      icon: null,         value: "143,00 €", label: "INGRESOS HOY" },
          { color: TEAL,      icon: BarChart3,    value: "8%",       label: "OCUPACIÓN HOY", extra: "5 prof." },
          { color: "#BF5AF2", icon: Star,         value: "35,75 €",  label: "TICKET HOY" },
        ].map(({ color, icon: Icon, value, label, extra }) => (
          <div key={label} className="flex min-w-[108px] flex-shrink-0 flex-col rounded-2xl bg-[#1C1C1E] p-3">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex h-7 w-7 items-center justify-center rounded-full" style={{ background: color + "33" }}>
                {Icon ? <Icon className="h-3.5 w-3.5" style={{ color }} /> : <span className="text-[12px] font-bold" style={{ color }}>€</span>}
              </div>
              {extra && <span className="rounded-full bg-[#2C2C2E] px-1.5 py-0.5 text-[9px] text-[#8E8E93]">{extra}</span>}
            </div>
            <p className="text-[18px] font-bold leading-tight">{value}</p>
            <p className="mt-0.5 text-[9px] uppercase tracking-wide text-[#8E8E93]">{label}</p>
          </div>
        ))}
      </div>

      {/* Staff hoy */}
      <div className="rounded-2xl bg-[#1C1C1E] p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[17px] font-bold">Staff hoy</span>
          <span className="text-[13px] text-[#8E8E93]">5 activos</span>
        </div>
        {([
          { name: "Carlos Martínez", ini: "C", color: "#BF5AF2", citas: 1, pct: "6%"  },
          { name: "David Hernández",  ini: "D", color: TEAL,     citas: 0, pct: "0%"  },
          { name: "Javier López",     ini: "J", color: "#FF375F", citas: 1, pct: "12%" },
          { name: "Josep Calafat",    ini: "J", color: "#FF9F0A", citas: 1, pct: "6%"  },
        ] as { name: string; ini: string; color: string; citas: number; pct: string }[]).map((s, i, arr) => (
          <React.Fragment key={s.name}>
            <div className="flex items-center gap-3 py-2.5">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[14px] font-semibold text-white" style={{ background: s.color }}>{s.ini}</div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-medium truncate">{s.name}</p>
                <p className="text-[12px] text-[#8E8E93]">{s.citas} cita{s.citas !== 1 ? "s" : ""}</p>
              </div>
              <span className="text-[14px] font-medium text-[#8E8E93]">{s.pct}</span>
            </div>
            {i < arr.length - 1 && <div className="h-px bg-[#2C2C2E]" />}
          </React.Fragment>
        ))}
      </div>

      {/* Performance */}
      <div className="rounded-2xl bg-[#1C1C1E] p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[17px] font-bold">Performance</span>
          <div className="flex gap-1">
            <span className="rounded-full bg-[#3A3A3C] px-3 py-1 text-[12px] text-white">7d</span>
            <span className="rounded-full px-3 py-1 text-[12px] text-[#8E8E93]">30d</span>
          </div>
        </div>
        <div className="flex items-baseline justify-between">
          <div><p className="text-[15px] font-semibold">Reservas diarias</p><p className="text-[12px] text-[#8E8E93]">Últimos 7 días</p></div>
          <div className="text-right"><p className="text-[20px] font-bold">22</p><p className="text-[11px] text-[#8E8E93]">total</p></div>
        </div>
        <div className="mt-3 flex items-end gap-1">
          {[ {day:"22",val:0},{day:"23",val:4},{day:"24",val:5},{day:"25",val:4},{day:"26",val:5},{day:"27",val:1},{day:"28",val:3} ].map(({day,val}) => (
            <div key={day} className="flex flex-1 flex-col items-center gap-1">
              <div className="w-full rounded-t" style={{ height: `${Math.max(val*7,3)}px`, background: val > 0 ? TEAL : "#2C2C2E" }} />
              <p className="text-[9px] text-[#8E8E93]">{day}</p>
              <p className="text-[9px] font-medium">{val}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-around border-t border-[#2C2C2E] pt-3">
          <div className="text-center"><p className="text-[13px] font-semibold" style={{color:"#34C759"}}>4.702,00 €</p><p className="text-[10px] text-[#8E8E93]">Ingresos 7d</p></div>
          <div className="text-center"><p className="text-[13px] font-semibold" style={{color:TEAL}}>3.1</p><p className="text-[10px] text-[#8E8E93]">Media/día 7d</p></div>
          <div className="text-center"><p className="text-[13px] font-semibold" style={{color:"#BF5AF2"}}>22,39 €</p><p className="text-[10px] text-[#8E8E93]">Ticket 7d</p></div>
        </div>
      </div>
    </div>
  );
}

/* ─── AGENDA ───────────────────────────────────── */

function AgendaSection() {
  const [activeDay, setActiveDay] = useState(0);
  const days = [
    {abbr:"MA",num:"28",count:4},{abbr:"MI",num:"29",count:5},{abbr:"JU",num:"30",count:5},
    {abbr:"VI",num:"1",count:5},{abbr:"SÁ",num:"2",count:1},{abbr:"DO",num:"3",count:3},
    {abbr:"LU",num:"4",count:0},{abbr:"MA",num:"5",count:0},
  ];
  const apts = [
    { time:"11:00 - 12:15", client:"Álvaro Delgado Torres",   service:"Pack Premium (Corte + Barba + Cejas) • 75 min • Josep Calafat", border:"#0A84FF", dot:"#0A84FF" },
    { time:"12:00 - 13:15", client:"Emilio Delgado Torres",   service:"Pack Premium (Corte + Barba + Cejas) • 75 min • Socio Co-Founder", border:"#BF5AF2", dot:"#FF2D55" },
    { time:"13:00 - 13:25", client:"Gabriel Pérez Medina",    service:"Diseño Especial (Líneas/Dibujos) • 25 min • Javier López", border:"#34C759", dot:"#34C759" },
    { time:"14:00 - 14:50", client:"Alejandro Prieto Prieto", service:"Corte + Barba • 50 min • Carlos Martínez", border:"#FF3B30", dot:"#FF3B30" },
  ];

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-shrink-0 items-center gap-1.5 px-4 pb-3">
        {[Bell, CalendarDays].map((Icon, i) => (
          <button key={i} className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#1C1C1E]">
            <Icon className="h-4 w-4 text-[#8E8E93]" />
          </button>
        ))}
        <div className="flex flex-1 items-center justify-between rounded-full bg-[#1C1C1E] px-3 py-2">
          <ChevronLeft className="h-3.5 w-3.5 text-[#8E8E93]" />
          <div className="flex items-center gap-1.5 text-[12px]"><Users className="h-3 w-3 text-[#8E8E93]" /><span>Todos 27</span></div>
          <ChevronRight className="h-3.5 w-3.5 text-[#8E8E93]" />
        </div>
        {[Search, SlidersHorizontal].map((Icon, i) => (
          <button key={i} className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#1C1C1E]">
            <Icon className="h-4 w-4 text-[#8E8E93]" />
          </button>
        ))}
      </div>

      <div className="flex flex-shrink-0 gap-1.5 overflow-x-auto px-4 pb-3 no-scrollbar">
        {days.map((d, i) => (
          <button key={i} onClick={() => setActiveDay(i)}
            className="flex flex-shrink-0 flex-col items-center rounded-2xl px-3 py-2 transition-all"
            style={{ background: i === activeDay ? TEAL : "transparent" }}>
            <span className="text-[10px] font-medium uppercase" style={{ color: i === activeDay ? "rgba(255,255,255,0.8)" : "#8E8E93" }}>{d.abbr}</span>
            <span className="text-[18px] font-bold leading-tight text-white">{d.num}</span>
            {d.count > 0
              ? <span className="mt-0.5 min-w-[16px] rounded-full px-1 text-[9px] font-semibold leading-4 text-center"
                  style={{ background: i === activeDay ? "rgba(255,255,255,0.2)" : "#2C2C2E", color: i === activeDay ? "white" : "#8E8E93" }}>{d.count}</span>
              : <span className="mt-0.5 h-4" />}
          </button>
        ))}
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto no-scrollbar px-4 pb-4">
        {activeDay === 0 ? apts.map((a, i) => (
          <div key={i} className="overflow-hidden rounded-2xl" style={{ background: "#231F13", borderLeft: `4px solid ${a.border}` }}>
            <div className="px-4 py-3">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[13px] font-semibold" style={{ color: TEAL }}>{a.time}</span>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full" style={{ background: a.dot }} />
                  <span className="text-[12px]" style={{ color: a.dot }}>Confirmada</span>
                </div>
              </div>
              <p className="text-[15px] font-bold leading-snug">{a.client}</p>
              <p className="mt-1 text-[12px] leading-relaxed text-[#8E8E93]">{a.service}</p>
            </div>
          </div>
        )) : (
          <div className="flex h-32 items-center justify-center text-[14px] text-[#8E8E93]">Sin reservas este día</div>
        )}
      </div>
    </div>
  );
}

/* ─── CLIENTES ─────────────────────────────────── */

function ClientesSection() {
  return (
    <div className="space-y-3 px-4 pb-4">
      <div className="flex items-center gap-2 rounded-xl bg-[#1C1C1E] px-3 py-2.5">
        <Search className="h-4 w-4 flex-shrink-0 text-[#8E8E93]" />
        <span className="text-[14px] text-[#8E8E93]">Buscar por nombre, email o teléfono...</span>
      </div>
      <div className="flex gap-2">
        <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#1C1C1E] py-2.5 text-[14px] font-medium">
          <Download className="h-4 w-4" /> Exportar
        </button>
        <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-[14px] font-semibold text-white" style={{ background: TEAL }}>
          <span className="text-[16px] leading-none">+</span> Nuevo
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { icon: <Users className="h-5 w-5" style={{color:"#34C759"}} />, label:"TOTAL",        value:"400" },
          { icon: <CalendarDays className="h-5 w-5" style={{color:TEAL}} />, label:"RESERVAS",   value:"400" },
          { icon: <Star className="h-5 w-5" style={{color:"#BF5AF2"}} />,   label:"VIP",         value:"118" },
          { icon: <Users className="h-5 w-5" style={{color:"#FF9F0A"}} />,  label:"SIN CONTACTO",value:"0"   },
        ].map(({icon,label,value}) => (
          <div key={label} className="rounded-2xl bg-[#1C1C1E] p-4">
            <div className="mb-2 flex items-center gap-2">{icon}<span className="text-[10px] uppercase tracking-wider text-[#8E8E93]">{label}</span></div>
            <p className="text-[28px] font-bold">{value}</p>
          </div>
        ))}
      </div>
      <button className="flex w-full items-center gap-2 rounded-xl bg-[#1C1C1E] px-4 py-3">
        <ChevronRight className="h-3.5 w-3.5 text-[#8E8E93]" />
        <span className="text-[11px] uppercase tracking-widest text-[#8E8E93]">Filtros avanzados</span>
      </button>
      {[
        { name:"Pablo Rojas Ortiz",       email:"pablo.ortiz@email.com",   phone:"+34 612000213", date:"6 ene 2025",  citas:1 },
        { name:"Enrique Reyes Fernández",  email:"enrique.reyes@email.com", phone:"+34 621000214", date:"12 ene 2025", citas:2 },
      ].map((c) => (
        <div key={c.name} className="rounded-2xl bg-[#1C1C1E] p-4">
          <div className="mb-2.5 flex items-start gap-3">
            <div className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border border-[#3A3A3C]" />
            <div className="flex-1 min-w-0">
              <p className="text-[15px] font-bold">{c.name}</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="rounded-full bg-[#2C2C2E] px-2 py-0.5 text-[11px] text-[#8E8E93]">marketing</span>
                <span className="text-[12px] text-[#8E8E93]">{c.citas} citas</span>
              </div>
            </div>
          </div>
          <div className="mb-1.5 space-y-1 text-[12px] text-[#8E8E93]">
            <p>✉ {c.email}</p><p>📞 {c.phone}</p>
          </div>
          <div className="mb-3 flex items-center gap-1 text-[12px] text-[#8E8E93]"><Clock className="h-3 w-3" /><span>{c.date}</span></div>
          <div className="flex gap-2">
            <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#2C2C2E] py-2 text-[13px]"><CalendarDays className="h-3.5 w-3.5" /> Historial</button>
            <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#2C2C2E] py-2 text-[13px]"><Pencil className="h-3.5 w-3.5" /> Editar</button>
            <button className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#FF3B30]/20"><Trash2 className="h-4 w-4 text-[#FF3B30]" /></button>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── CHATS ────────────────────────────────────── */

function ChatsSection() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-px">
        {[
          { name:"BookFast Barbería", preview:"Sin mensajes", time:"Hace 7 días", isGroup:true },
          { name:"Socio",             preview:"Hola",         time:"Hace 6 días", isGroup:false },
        ].map((chat) => (
          <div key={chat.name} className="flex items-center gap-3 bg-[#1C1C1E] px-4 py-3">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full" style={{ background: TEAL }}>
              {chat.isGroup ? <Users className="h-5 w-5 text-white" /> : <span className="text-[16px] font-bold text-white">S</span>}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between">
                <span className="text-[15px] font-semibold">{chat.name}</span>
                <span className="flex-shrink-0 text-[12px] text-[#8E8E93]">{chat.time}</span>
              </div>
              <p className="text-[13px] text-[#8E8E93]">✓✓ {chat.preview}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-3 px-4 pb-3 pt-3">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#1C1C1E] py-3 text-[14px] font-medium">
          <Archive className="h-4 w-4 text-[#8E8E93]" /> Archivados
        </button>
        <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#1C1C1E] py-3 text-[14px] font-medium">
          <UserPlus className="h-4 w-4 text-[#8E8E93]" /> Nuevo grupo
        </button>
      </div>
    </div>
  );
}

/* ─── STAFF ────────────────────────────────────── */

function StaffSection() {
  const [filter, setFilter] = useState<"todos"|"activos"|"inactivos">("todos");
  const members = [
    { name:"Josep", ini:"J", color:"#2C5F7A", citas:1, total:751, horas:"40h/sem" },
    { name:"David", ini:"D", color:"#2C5F7A", citas:0, total:606, horas:"30h/sem" },
    { name:"Javi",  ini:"J", color:"#2C5F7A", citas:1, total:640, horas:"35h/sem" },
    { name:"Socio", ini:"S", color:"#2C5F7A", citas:0, total:284, horas:"20h/sem" },
  ];

  return (
    <div className="space-y-3 px-4 pb-4">
      <div className="flex items-center justify-between">
        <span className="text-[13px] text-[#8E8E93]">5 miembros · 5 activos</span>
        <button className="flex items-center gap-1.5 rounded-xl bg-[#1C1C1E] px-3 py-2 text-[13px] font-medium">
          <UserCheck className="h-4 w-4" /> Nuevo Miembro
        </button>
      </div>

      <div className="rounded-2xl bg-[#1C1C1E] p-3 space-y-2">
        <div className="flex items-center gap-2 rounded-xl bg-[#2C2C2E] px-3 py-2">
          <Search className="h-4 w-4 text-[#8E8E93]" />
          <span className="text-[14px] text-[#8E8E93]">Buscar por nombre o bio...</span>
        </div>
        <div className="flex gap-2">
          {(["todos","activos","inactivos"] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className="rounded-full px-3 py-1 text-[13px] capitalize transition-all"
              style={{ background: filter === f ? TEAL : "#2C2C2E", color: filter === f ? "white" : "#8E8E93" }}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {members.map((m) => (
        <div key={m.name} className="rounded-2xl bg-[#1C1C1E] p-4">
          <div className="mb-3 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2C4A5E] text-[16px] font-bold">{m.ini}</div>
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#1C1C1E] bg-[#34C759]" />
              </div>
              <div>
                <p className="text-[16px] font-bold">{m.name}</p>
                <div className="flex items-center gap-2 mt-0.5 text-[12px] text-[#8E8E93]">
                  <Scissors className="h-3 w-3" /><span>Reservable</span>
                  {m.citas > 0 && <><CalendarDays className="h-3 w-3 ml-1" /><span>{m.citas} hoy</span></>}
                  <CheckCircle2 className="h-3 w-3 ml-1" /><span>{m.total} total</span>
                  <Clock className="h-3 w-3 ml-1" /><span>{m.horas}</span>
                </div>
              </div>
            </div>
            <div className="h-2.5 w-2.5 rounded-full mt-1" style={{ background: TEAL }} />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 text-[13px] text-[#8E8E93] px-2 py-1.5">
              <Pencil className="h-3.5 w-3.5" /> Editar
            </button>
            <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#2C2C2E] py-2 text-[13px]">
              <Power className="h-3.5 w-3.5" /> Desactivar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── SERVICIOS ────────────────────────────────── */

function ServiciosSection() {
  const [cat, setCat] = useState("Todos");
  const cats = ["Todos","Otros","Barba","Extras","Combo","Corte"];
  const services = [
    { name:"Afeitado Clásico",      cat:"Barba", price:"18.00 €", dur:"30 min + 5 min buffer", total:"35 min" },
    { name:"Afeitado Toalla Caliente", cat:"Barba", price:"25.00 €", dur:"40 min + 5 min buffer", total:"45 min" },
    { name:"Corte Clásico",         cat:"Corte", price:"15.00 €", dur:"25 min + 5 min buffer", total:"30 min" },
  ];

  return (
    <div className="space-y-3 px-4 pb-4">
      <div className="flex items-center justify-between">
        <span className="text-[12px] text-[#8E8E93]">20 servicios · 20 activos · 0 archivados</span>
        <button className="flex items-center gap-1.5 rounded-xl bg-[#1C1C1E] px-3 py-2 text-[13px] font-medium">
          <span className="text-[16px] leading-none">+</span> Nuevo Servicio
        </button>
      </div>

      <div className="flex gap-2">
        <div className="flex flex-1 items-center gap-2 rounded-xl bg-[#1C1C1E] px-3 py-2.5">
          <Search className="h-4 w-4 text-[#8E8E93]" />
          <span className="text-[13px] text-[#8E8E93]">Buscar servicio...</span>
        </div>
        <button className="flex items-center gap-1.5 rounded-xl bg-[#1C1C1E] px-3 py-2.5 text-[13px]">
          <SlidersHorizontal className="h-4 w-4 text-[#8E8E93]" /> Filtros
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)}
            className="flex flex-shrink-0 items-center gap-1 rounded-full px-3 py-1.5 text-[13px] transition-all"
            style={{ background: cat === c ? TEAL : "#1C1C1E", color: cat === c ? "white" : "#8E8E93" }}>
            <Tag className="h-3 w-3" /> {c}
          </button>
        ))}
      </div>

      {services.map((s) => (
        <div key={s.name} className="rounded-2xl bg-[#1C1C1E] p-4">
          <div className="mb-3 flex items-start justify-between">
            <div>
              <p className="text-[15px] font-bold">{s.name}</p>
              <p className="text-[12px] text-[#8E8E93]">{s.cat}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="rounded-full bg-[#34C759]/20 px-2.5 py-0.5 text-[11px] font-medium text-[#34C759]">Activo</span>
              <span className="rounded-full bg-[#FF9F0A]/20 px-2.5 py-0.5 text-[11px] font-medium text-[#FF9F0A]">Stripe pendiente</span>
            </div>
          </div>
          <div className="mb-1 flex items-baseline justify-between">
            <p className="text-[22px] font-bold">{s.price}</p>
            <p className="text-[13px] text-[#8E8E93]">{s.dur}</p>
          </div>
          <p className="mb-3 text-[12px] text-[#8E8E93]">Total: {s.total}</p>
          <div className="flex gap-2">
            <button className="px-2 py-1.5 text-[13px] text-[#8E8E93]">Editar</button>
            <button className="flex-1 rounded-xl bg-[#2C2C2E] py-1.5 text-[13px]">Duplicar</button>
            <button className="flex-1 rounded-xl bg-[#2C2C2E] py-1.5 text-[13px]">Desactivar</button>
            <button className="rounded-xl bg-[#FF3B30]/10 px-3 py-1.5 text-[13px] text-[#FF3B30]">Archivar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── MONEDERO ─────────────────────────────────── */

function MonederoSection() {
  const [tab, setTab] = useState<"resumen"|"movimientos"|"payouts">("resumen");
  return (
    <div className="space-y-3 px-4 pb-4">
      <div className="flex items-center gap-2 rounded-xl border border-[#FF3B30]/30 bg-[#FF3B30]/10 px-4 py-3">
        <AlertCircle className="h-4 w-4 flex-shrink-0 text-[#FF3B30]" />
        <span className="flex-1 text-[13px] text-[#FF3B30]">Stripe no está conectado para este tenant</span>
        <X className="h-4 w-4 text-[#FF3B30]" />
      </div>

      <div className="flex items-center justify-between rounded-2xl bg-[#1C1C1E] px-4 py-3">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4" style={{ color: TEAL }} />
          <span className="text-[15px] font-semibold">Filtros</span>
        </div>
        <div className="flex items-center gap-1 text-[13px] text-[#8E8E93]">
          <ChevronDown className="h-4 w-4" /><span>Mostrar</span>
        </div>
      </div>

      <div className="flex rounded-2xl bg-[#1C1C1E] overflow-hidden">
        {(["resumen","movimientos","payouts"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={cn("flex-1 py-3 text-[14px] capitalize border-b-2 transition-colors",
              tab === t ? "text-white border-white" : "text-[#8E8E93] border-transparent")}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <div className="rounded-2xl bg-[#1C1C1E] p-4">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: TEAL + "33" }}>
            <AlertCircle className="h-5 w-5" style={{ color: TEAL }} />
          </div>
          <span className="text-[16px] font-bold">Información importante</span>
        </div>
        <ul className="space-y-2 text-[13px] text-[#8E8E93]">
          {[
            "Los pagos se retienen 24-48 horas antes de estar disponibles",
            "Los payouts se realizan según tu configuración en Stripe",
            "Las comisiones de Stripe se deducen automáticamente",
            "Puedes ver más detalles en tu dashboard de Stripe",
          ].map((item, i) => (
            <li key={i} className="flex gap-2"><span className="text-[#555]">•</span>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── MARKETING ────────────────────────────────── */

function MarketingSection() {
  const [period, setPeriod] = useState("+60d");
  const clients = [
    { ini:"R", name:"Ricardo Jiménez Ibáñez",  email:"ricardo.ibanez.2@email.com" },
    { ini:"P", name:"Pablo Rojas Ortiz",        email:"pablo.ortiz@email.com"      },
    { ini:"E", name:"Enrique Reyes Fernández",  email:"enrique.fernandez@email.com"},
    { ini:"L", name:"Lucas Campos González",    email:"lucas.gonzalez@email.com"   },
    { ini:"R", name:"Rodrigo González Campos",  email:"rodrigo.campos.2@email.com" },
  ];

  return (
    <div className="space-y-3 px-4 pb-4">
      <div className="grid grid-cols-2 gap-2">
        {[
          { icon: <Users className="h-5 w-5" style={{color:"#FF9F0A"}} />,    label:"INACTIVOS DETECTADOS", value:"131" },
          { icon: <Mail className="h-5 w-5" style={{color:TEAL}} />,           label:"CON EMAIL",            value:"131" },
          { icon: <CheckCircle2 className="h-5 w-5" style={{color:"#34C759"}} />, label:"OPT-IN MARKETING",  value:"131" },
          { icon: <Megaphone className="h-5 w-5" style={{color:"#BF5AF2"}} />, label:"ÚLTIMO ENVÍO",         value:"—"   },
        ].map(({icon,label,value}) => (
          <div key={label} className="rounded-2xl bg-[#1C1C1E] p-4">
            <div className="mb-2 flex items-center gap-2">{icon}<span className="text-[9px] uppercase tracking-wide text-[#8E8E93] leading-tight">{label}</span></div>
            <p className="text-[26px] font-bold">{value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-[#1C1C1E] p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[17px] font-bold">Clientes inactivos</span>
          <span className="rounded-full bg-[#2C2C2E] px-2.5 py-1 text-[11px] text-[#8E8E93]">+60 días sin reserva</span>
        </div>
        <div className="flex gap-2">
          {["+30d","+60d","+90d"].map((p) => (
            <button key={p} onClick={() => setPeriod(p)}
              className="rounded-full px-3 py-1.5 text-[13px] transition-all"
              style={{ background: period === p ? TEAL : "#2C2C2E", color: period === p ? "white" : "#8E8E93" }}>
              {p}
            </button>
          ))}
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2C2C2E]">
            <RefreshCw className="h-4 w-4 text-[#8E8E93]" />
          </button>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-1 items-center gap-2 rounded-xl bg-[#2C2C2E] px-3 py-2">
            <Search className="h-3.5 w-3.5 text-[#8E8E93]" />
            <span className="text-[13px] text-[#8E8E93]">Buscar por nombre o email...</span>
          </div>
          <button className="rounded-xl bg-[#2C2C2E] px-3 py-2 text-[13px] text-[#8E8E93]">Selec. todos</button>
        </div>
        <div className="space-y-1">
          {clients.map((c) => (
            <div key={c.name} className="flex items-center gap-3 rounded-xl bg-[#2C2C2E] px-3 py-2.5">
              <div className="h-4 w-4 flex-shrink-0 rounded-full border border-[#555]" />
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#3A3A3C] text-[13px] font-semibold">{c.ini}</div>
              <div className="min-w-0">
                <p className="text-[13px] font-medium truncate">{c.name}</p>
                <p className="text-[11px] text-[#8E8E93] truncate">{c.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── AJUSTES ──────────────────────────────────── */

function AjustesSection() {
  const items = [
    { label:"Confirmación por WhatsApp", desc:"Envía mensaje automático al reservar.", on:true },
    { label:"Cobro de señal online",     desc:"Pide pago parcial para bloquear la cita.", on:false },
    { label:"Recordatorios +24h",        desc:"Reduce no-shows con avisos previos.", on:true },
    { label:"Lista de espera inteligente",desc:"Rellena huecos cancelados automáticamente.", on:true },
  ];

  return (
    <div className="space-y-3 px-4 pb-4">
      <div className="rounded-2xl bg-[#1C1C1E] overflow-hidden divide-y divide-[#2C2C2E]">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between gap-3 px-4 py-3.5">
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-medium">{item.label}</p>
              <p className="text-[12px] text-[#8E8E93] mt-0.5">{item.desc}</p>
            </div>
            <div className={cn("flex h-[28px] w-[50px] flex-shrink-0 items-center rounded-full p-0.5 transition-all",
              item.on ? "justify-end" : "justify-start bg-[#3A3A3C]")}
              style={item.on ? { background: TEAL } : {}}>
              <div className="h-[22px] w-[22px] rounded-full bg-white shadow-sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── BOTTOM TAB ───────────────────────────────── */

function BottomTab({ icon: Icon, label, active, onClick }: {
  icon: React.ElementType; label: string; active?: boolean; onClick?: () => void;
}) {
  return (
    <button type="button" onClick={onClick} className="flex flex-1 flex-col items-center gap-0.5 py-1">
      <Icon className="h-5 w-5" style={{ color: active ? TEAL : "#555" }} />
      <span className="text-[10px]" style={{ color: active ? TEAL : "#555" }}>{label}</span>
    </button>
  );
}
