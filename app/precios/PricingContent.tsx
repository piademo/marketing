"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type BillingPeriod = "monthly" | "yearly";

const basePrices = {
  starter: 29,
  professional: 79,
};

function getPrice(value: number, period: BillingPeriod, plan: "starter" | "professional") {
  if (period === "yearly" && plan === "professional") {
    // 2 meses gratis: se cobra 10x el precio mensual
    return value * 10;
  }
  if (period === "yearly") {
    // Sin oferta: se cobra 12x el precio mensual
    return value * 12;
  }
  return value;
}

const featureRows = [
  {
    label: "Nº de profesionales / locales incluidos",
    starter: "1 profesional",
    professional: "Hasta 5 profesionales",
    enterprise: "+5 profesionales / multi-centro",
  },
  {
    label: "Agenda online",
    starter: "Básica",
    professional: "Avanzada por sillón / cabina",
    enterprise: "Multi-centro + cabinas avanzadas",
  },
  {
    label: "Recordatorios automáticos",
    starter: "Email",
    professional: "WhatsApp + email",
    enterprise: "WhatsApp + email + campañas",
  },
  {
    label: "Lista de espera inteligente",
    starter: "—",
    professional: "Incluida",
    enterprise: "Incluida + prioridad por ticket",
  },
  {
    label: "Soporte y acompañamiento",
    starter: "Soporte estándar",
    professional: "Soporte prioritario",
    enterprise: "Customer Success dedicado",
  },
];

export default function PricingContent() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");
  const isYearly = billing === "yearly";

  return (
    <section className="section-lg">
      <Container>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h1 className="text-display-sm sm:text-display-md mb-4 text-white text-balance">
            Precios pensados para recuperarse con una sola cita salvada.
          </h1>
          <p className="text-lg text-neutral-300 text-balance">
            Elige el plan que mejor encaje con tu equipo. Sin permanencia, sin sorpresas y con todo el
            soporte que necesitas para poner tu agenda en piloto automático.
          </p>
        </div>

        {/* Toggle mensual / anual */}
        <div className="mb-10 flex flex-col items-center gap-4 text-sm text-center">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={
                billing === "monthly"
                  ? "text-white font-semibold"
                  : "text-neutral-400 hover:text-neutral-200"
              }
            >
              Mensual
            </button>
            <button
              type="button"
              className={cn(
                "relative flex h-9 w-20 items-center rounded-full p-1 transition-colors shadow-inner",
                isYearly
                  ? "bg-emerald-500/40 shadow-[0_0_18px_rgba(16,185,129,0.5)]"
                  : "bg-neutral-800 shadow-[0_0_12px_rgba(0,0,0,0.7)]",
              )}
              onClick={() => setBilling(isYearly ? "monthly" : "yearly")}
            >
              <span
                className={`inline-flex h-7 w-9 items-center justify-center rounded-full text-xs font-semibold text-neutral-900 shadow transition-transform ${
                  isYearly
                    ? "translate-x-9 bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.7)]"
                    : "translate-x-0 bg-white shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                }`}
              />
            </button>
            <button
              type="button"
              onClick={() => setBilling("yearly")}
              className={
                billing === "yearly"
                  ? "text-white font-semibold"
                  : "text-neutral-400 hover:text-neutral-200"
              }
            >
              Anual
            </button>
          </div>
          <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 border border-emerald-500/30">
            <span>2 meses gratis en el plan Professional pagando al año</span>
          </div>
        </div>

        {/* Cards de planes */}
        <div className="grid gap-6 md:grid-cols-3 md:items-stretch mb-16">
          {/* Starter */}
          <div className="relative flex flex-col rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-sm">
            <div className="mb-2 text-sm font-semibold text-neutral-50">Starter</div>
            <div className="mb-1 flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-white">
                {getPrice(basePrices.starter, billing, "starter")}€
              </span>
              <span className="text-sm text-neutral-400">{isYearly ? "/año" : "/mes"}</span>
            </div>
            {/* Sin oferta específica en Starter para anual */}
            <p className="mb-6 text-sm text-neutral-400">
              Ideal si trabajas solo o con 1 persona más y quieres dejar atrás la libreta.
            </p>
            <ul className="mb-6 space-y-2 text-sm text-neutral-200">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                <span>1 profesional incluido</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                <span>Agenda online básica</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                <span>Recordatorios por email</span>
              </li>
            </ul>
            <div className="mt-auto">
              <Button as="link" href="/contacto" variant="outline" className="w-full">
                Empezar con Starter
              </Button>
            </div>
          </div>

          {/* Professional (destacado) */}
          <div className="relative flex flex-col rounded-3xl border border-primary-500/40 bg-neutral-900/80 p-6 shadow-xl shadow-primary-500/30 md:scale-105">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-200">
              <span className="h-2 w-2 rounded-full bg-primary-400" />
              <Badge variant="primary" className="border-0 bg-transparent px-0 py-0 text-xs">
                Más popular
              </Badge>
            </div>
            <div className="mb-2 text-sm font-semibold text-neutral-50">Professional</div>
            <div className="mb-1 flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-white">
                {getPrice(basePrices.professional, billing, "professional")}€
              </span>
              <span className="text-sm text-neutral-400">{isYearly ? "/año" : "/mes"}</span>
            </div>
            {isYearly && (
              <p className="mb-3 text-xs text-emerald-300">
                Equivale a {basePrices.professional}€/mes (2 meses gratis)
              </p>
            )}
            <p className="mb-6 text-sm text-neutral-200">
              Para equipos que ya están llenos y quieren profesionalizar reservas, reducir ausencias y
              tener un control real de métricas.
            </p>
            <ul className="mb-6 space-y-2 text-sm text-neutral-200">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                <span>Hasta 5 profesionales</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                <span>Agenda avanzada por sillón / cabina</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                <span>Recordatorios WhatsApp automáticos</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                <span>Lista de espera inteligente</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                <span>Soporte prioritario</span>
              </li>
            </ul>
            <div className="mt-auto">
              <Button as="link" href="/contacto" variant="primary" className="w-full">
                Elegir plan Professional
              </Button>
            </div>
          </div>

          {/* Enterprise */}
          <div className="relative flex flex-col rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-sm">
            <div className="mb-2 text-sm font-semibold text-neutral-50">Enterprise</div>
            <div className="mb-4 flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-white">Personalizado</span>
            </div>
            <p className="mb-6 text-sm text-neutral-400">
              Para cadenas o grupos con varios locales y necesidades avanzadas de informes e
              integraciones.
            </p>
            <ul className="mb-6 space-y-2 text-sm text-neutral-200">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                <span>Más de 5 locales o equipos</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                <span>Onboarding y formación personalizada</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                <span>Integraciones a medida</span>
              </li>
            </ul>
            <div className="mt-auto">
              <Button as="link" href="/contacto" variant="ghost" className="w-full">
                Hablar con ventas
              </Button>
            </div>
          </div>
        </div>

        {/* Comparativa mobile (stacked, sin scroll horizontal) */}
        <div className="md:hidden space-y-4">
          {featureRows.map((row) => (
            <div
              key={row.label}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4 text-sm space-y-3"
            >
              <p className="text-neutral-200 font-medium">{row.label}</p>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-xs uppercase tracking-wide text-neutral-500">Starter</span>
                  <span className="text-neutral-200 text-right">{row.starter}</span>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-xs uppercase tracking-wide text-neutral-500">Professional</span>
                  <span className="text-neutral-200 text-right">{row.professional}</span>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-xs uppercase tracking-wide text-neutral-500">Enterprise</span>
                  <span className="text-neutral-200 text-right">{row.enterprise}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabla comparativa (solo visible en md+ para vista horizontal completa) */}
        <div className="hidden md:block rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6 shadow-sm overflow-x-auto">
          <table className="min-w-full text-sm text-left text-neutral-200">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="py-3 px-4 text-neutral-400 font-medium">Características</th>
                <th className="py-3 px-4 text-center font-medium text-white">Starter</th>
                <th className="py-3 px-4 text-center font-medium text-white">Professional</th>
                <th className="py-3 px-4 text-center font-medium text-white">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {featureRows.map((row) => (
                <tr key={row.label} className="border-b border-neutral-900/60 last:border-0">
                  <td className="py-3 px-4 text-neutral-300">{row.label}</td>
                  <td className="py-3 px-4 text-center text-neutral-200">{row.starter}</td>
                  <td className="py-3 px-4 text-center text-neutral-200">{row.professional}</td>
                  <td className="py-3 px-4 text-center text-neutral-200">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
