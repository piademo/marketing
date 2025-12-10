"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import ProDashboardDemo from "@/components/ui/ProDashboardDemo";
import {
  fadeInUpMobile,
  staggerContainerHero,
  transition,
  usePrefersReducedMotion,
} from "@/lib/motion";

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
          {/* Badge: Social Proof / FOMO */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInUpMobile}
            transition={prefersReducedMotion ? undefined : transition.fast}
            className="mb-8"
          >
            <Badge
              variant="neutral"
              className="backdrop-blur-sm border border-[#f97316]/40 bg-white/90 px-4 py-1.5 text-[#f97316] shadow-sm dark:border-primary-500/40 dark:bg-white/10 dark:text-primary-50"
            >
              <Sparkles className="mr-2 h-3.5 w-3.5 text-[#f97316] dark:text-primary-400" />
              <span className="font-medium text-foreground dark:text-primary-50">
                La plataforma #1 para Barberías Modernas
              </span>
            </Badge>
          </motion.div>

          {/* H1: Value Proposition */}
          <motion.h1
            variants={prefersReducedMotion ? undefined : fadeInUpMobile}
            transition={prefersReducedMotion ? undefined : transition.default}
            className="mb-6 max-w-4xl text-balance text-display-md font-bold tracking-tight text-foreground sm:text-display-lg"
          >
            Tu agenda llena,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/60 to-secondary animated-gradient gradient-text">
              cero llamadas perdidas
            </span>{" "}
            y adiós al papel.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={prefersReducedMotion ? undefined : fadeInUpMobile}
            transition={prefersReducedMotion ? undefined : transition.fast}
            className="mb-10 max-w-2xl text-balance text-lg text-neutral-700 dark:text-neutral-300 sm:text-xl"
          >
            BookFast automatiza tus citas y recordatorios por WhatsApp para que
            dejes de perder el 20% de tus ingresos en &quot;no-shows&quot;.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInUpMobile}
            transition={prefersReducedMotion ? undefined : transition.fast}
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              as="link"
              href="/contacto"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/80 to-secondary hover:from-primary/60 hover:to-secondary/60 text-white border-0 shadow-lg animated-gradient"
            >
              Empezar gratis
            </Button>
            <Button
              as="link"
              href="/como-funciona"
              variant="outline"
              size="lg"
              className="text-neutral-800 hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white"
            >
              Ver cómo funciona
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInUpMobile}
            transition={prefersReducedMotion ? undefined : transition.fast}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-700 dark:text-neutral-300"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Sin permanencia</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Configuración en 5 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Soporte en español</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Image / Mockup con efecto Tilt 3D */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 32 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion
              ? undefined
              : { ...transition.default, delay: 0.2 }
          }
          className="mt-16 lg:mt-20"
        >
          <div className="mx-auto max-w-5xl">
            <div className="aspect-video rounded-2xl">
              <ProDashboardDemo />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
