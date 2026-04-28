"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import ProDashboardDemo from "@/components/ui/ProDashboardDemo";
import { cn } from "@/lib/utils";
import {
  fadeInUpMobile,
  staggerContainerHero,
  transition,
  usePrefersReducedMotion,
} from "@/lib/motion";
import { track } from '@vercel/analytics';

const avatarInitials = ['C', 'M', 'J', 'A'];
const avatarGradients = [
  'from-sky-400 to-blue-500',
  'from-violet-400 to-purple-500',
  'from-cyan-400 to-sky-500',
  'from-indigo-400 to-violet-500',
];

const trustItems = [
  'Sin permanencia',
  'Configuración en 5 min',
  'Soporte en español',
];

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative -mt-16 overflow-hidden pt-24 pb-24 lg:-mt-20 lg:pt-28 lg:pb-32">
      <Container>
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainerHero}
          initial={prefersReducedMotion ? undefined : "initial"}
          animate={prefersReducedMotion ? undefined : "animate"}
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInUpMobile}
            transition={prefersReducedMotion ? undefined : transition.fast}
            className="mb-8"
          >
            <Badge
              variant="neutral"
              className={cn(
                "backdrop-blur-sm px-4 py-1.5 shadow-sm",
                "border border-primary-200 bg-primary-50 text-primary-700",
                "dark:border-primary-500/40 dark:bg-primary-500/10 dark:text-primary-200",
              )}
            >
              <Star className="mr-1.5 h-3.5 w-3.5 fill-primary-400 text-primary-400 dark:fill-primary-400 dark:text-primary-400" />
              <span className="font-medium">
                Software para Barberías y Centros de Estética
              </span>
            </Badge>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={prefersReducedMotion ? undefined : fadeInUpMobile}
            transition={prefersReducedMotion ? undefined : transition.default}
            className="mb-6 max-w-4xl text-balance text-display-md font-extrabold tracking-tight text-foreground sm:text-display-lg"
          >
            Agenda llena y{" "}
            <span className="gradient-text animated-gradient">
              cero estrés
            </span>{" "}
            en tu Barbería o Centro de Estética.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={prefersReducedMotion ? undefined : fadeInUpMobile}
            transition={prefersReducedMotion ? undefined : transition.fast}
            className="mb-10 max-w-2xl text-balance text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl"
          >
            El sistema que gestiona tu agenda y atiende a tus clientes por ti.
            Elimina los &quot;no-shows&quot; y recupera tu tiempo libre.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInUpMobile}
            transition={prefersReducedMotion ? undefined : transition.fast}
            className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              as="link"
              href="/demo"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => track('cta_try_bookfast_click', { location: 'hero' })}
              className="relative overflow-hidden bg-gradient-to-r from-primary-500 via-primary-400 to-secondary-500 hover:opacity-90 text-white border-0 shadow-lg shadow-primary-500/25 animated-gradient"
            >
              Probar BookFast
            </Button>
            <Button
              as="link"
              href="/como-funciona"
              variant="outline"
              size="lg"
            >
              Ver cómo funciona
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInUpMobile}
            transition={prefersReducedMotion ? undefined : transition.fast}
            className="flex flex-col items-center gap-5 sm:flex-row sm:gap-6"
          >
            {/* Avatar stack + rating */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {avatarInitials.map((initial, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full border-2 border-white dark:border-neutral-900",
                      "bg-gradient-to-br text-white text-[11px] font-bold",
                      avatarGradients[i],
                    )}
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 text-sm font-semibold text-foreground">4.9</span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  +500 barberos confían en BookFast
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden h-8 w-px bg-neutral-200 dark:bg-neutral-700 sm:block" />

            {/* Trust items */}
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:flex-nowrap">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Demo */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
          animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion ? undefined : { ...transition.default, delay: 0.2 }
          }
          className="mt-16 lg:mt-20"
        >
          {/* Móvil */}
          <div className="flex justify-center md:hidden">
            <div
              className={cn(
                "relative w-full max-w-[360px] aspect-[9/16]",
                "rounded-[32px] overflow-hidden",
                "border border-black/15 bg-slate-900/95 shadow-[0_24px_80px_rgba(0,0,0,0.75)]",
                "dark:border-white/10 dark:bg-[#020617]/95",
              )}
            >
              <ProDashboardDemo mode="mobile" />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex justify-center">
            <div
              className={cn(
                "w-full max-w-5xl aspect-video rounded-2xl overflow-hidden",
                "border border-black/10 bg-black/40 shadow-[0_32px_90px_rgba(0,0,0,0.8)]",
                "dark:border-slate-800/80 dark:bg-[#020617]/90",
              )}
            >
              <ProDashboardDemo mode="auto" />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
