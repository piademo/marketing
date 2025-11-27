"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Scissors, UserCheck, ChevronDown } from "lucide-react";

const navItems = [
  { name: "Producto", href: "/funcionalidades" },
  {
    name: "Sectores",
    href: "/sectores",
    children: [
      {
        name: "Barberías",
        href: "/sectores/barberias",
        description: "Gestión rápida para cortes y walk-ins.",
        icon: Scissors,
      },
      {
        name: "Peluquerías",
        href: "/sectores/peluquerias",
        description: "Control de tintes y tratamientos largos.",
        icon: UserCheck,
      },
    ],
  },
  { name: "Precios", href: "/precios" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredRect, setHoveredRect] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({ left: 0, width: 0, opacity: 0 });
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [ctaOpen, setCtaOpen] = useState(false);
  const ctaTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleMouseEnterLink = (
    e: React.MouseEvent<HTMLElement>,
    itemName: string,
  ) => {
    if (navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = e.currentTarget.getBoundingClientRect();
      setHoveredRect({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        opacity: 1,
      });
    }
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);

    const item = navItems.find((navItem) => navItem.name === itemName);
    if (item && item.children && item.children.length > 0) {
      setActiveDropdown(itemName);
    } else {
      setActiveDropdown(null);
    }
  };

  const handleMouseLeaveNav = () => {
    setHoveredRect((prev) => ({ ...prev, opacity: 0 }));
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleCtaEnter = () => {
    if (ctaTimeoutRef.current) clearTimeout(ctaTimeoutRef.current);
    setCtaOpen(true);
  };

  const handleCtaLeave = () => {
    ctaTimeoutRef.current = setTimeout(() => {
      setCtaOpen(false);
    }, 200);
  };

  const glassStyle = cn(
    // Light: cristal blanco visible con borde y sombra física
    "backdrop-blur-2xl",
    "bg-white/90 dark:bg-[#050505]/30",
    "border border-black/10 dark:border-white/20",
    "shadow-xl shadow-black/5 dark:shadow-none",
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]",
  );

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div
          className={cn(
            "pointer-events-auto relative h-[60px] flex items-center rounded-full transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)]",
            isLoaded
              ? "w-full max-w-5xl opacity-100 translate-y-0"
              : "w-[100px] opacity-0 translate-y-4",
            glassStyle,
          )}
        >
          {/* FONDO LÍQUIDO ANIMADO */}
          <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden rounded-full">
            <div
              className="absolute -inset-[100%] animate-liquid-glass blur-3xl opacity-60"
              style={{
                // Usamos las vars semánticas primary/secondary para que en Light sea Sunset (naranja/rosa)
                // y en Dark sea Cyber (cyan/morado), manteniendo la misma animación.
                background:
                  "radial-gradient(circle at 50% 50%, hsla(var(--primary) / 0.35), transparent 55%)," +
                  "radial-gradient(circle at 100% 0%, hsla(var(--secondary) / 0.35), transparent 55%)," +
                  "conic-gradient(from 0deg at 50% 50%, hsla(var(--primary) / 0), hsla(var(--secondary) / 0.30), hsla(var(--primary) / 0))",
                backgroundSize: "200% 200%",
              } as React.CSSProperties
              }
            />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
          </div>

          {/* SHIMMER SUPERFICIAL */}
          <div
            className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay rounded-full"
            style={{
              background:
                "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.6) 45%, rgba(255,255,255,0.6) 50%, transparent 70%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 6s infinite linear",
            }}
          />

          <div
            className={cn(
              "relative z-10 w-full h-full flex items-center justify-between pl-2 pr-1 md:pl-6 md:pr-3 transition-opacity duration-700 delay-300",
              isLoaded ? "opacity-100" : "opacity-0",
            )}
          >
          <Link
            href="/"
            className="ml-2 md:ml-0 text-lg font-bold tracking-tight text-foreground hover:text-foreground/80 transition-colors shrink-0 drop-shadow-md"
          >
            BookFast
          </Link>

            <nav
              ref={navRef}
              className="relative hidden md:flex items-center h-full"
              onMouseLeave={handleMouseLeaveNav}
            >
            <div
              className="absolute top-1/2 -translate-y-1/2 h-9 rounded-full transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] pointer-events-none"
              style={{
                left: hoveredRect.left,
                width: hoveredRect.width,
                opacity: hoveredRect.opacity,
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            />

            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              const hasChildren = item.children && item.children.length > 0;
              const isDropdownOpen = activeDropdown === item.name;

              return (
                <div key={item.name} className="relative h-full flex items-center">
                  <Link
                    href={item.href}
                    onMouseEnter={(e) => handleMouseEnterLink(e, item.name)}
                    className={cn(
                      "relative z-10 px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full flex items-center gap-1",
                      isActive
                        ? "text-foreground bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.25)]"
                        : "text-neutral-600 dark:text-neutral-300 hover:text-foreground",
                    )}
                  >
                    {item.name}
                    {hasChildren && (
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 transition-transform duration-300 opacity-70",
                          (isActive || isDropdownOpen) ? "rotate-180" : "rotate-0",
                        )}
                      />
                    )}
                  </Link>

                  {hasChildren && (
                    <div
                      onMouseEnter={handleMouseEnterDropdown}
                      onMouseLeave={handleMouseLeaveDropdown}
                      className={cn(
                        "absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[320px] p-2 rounded-2xl transition-all duration-300 origin-top",
                        // Más contraste en light: fondo más opaco y borde algo más marcado
                        "backdrop-blur-2xl bg-white/95 border border-black/10 shadow-[0_22px_55px_rgba(15,23,42,0.18)] dark:bg-[#050505]/30 dark:border-white/20 dark:shadow-none shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]",
                        isDropdownOpen
                          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 scale-95 -translate-y-2 pointer-events-none",
                      )}
                    >
                      <div className="relative z-10 flex flex-col gap-1">
                        {item.children?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors"
                          >
                            <div className="mt-0.5 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/30 group-hover:bg-white/10 transition-all text-neutral-300 group-hover:text-white">
                              <subItem.icon className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="hidden md:block text-sm font-medium text-neutral-600 dark:text-neutral-300 group-hover:text-foreground transition-colors px-2">
                                {subItem.name}
                              </span>
                              <div className="text-xs text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200">
                                {subItem.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <div className="hidden md:block mr-1">
              <ThemeToggle />
            </div>
            {/* CTA desplegable (solo desktop) */}
            <div
              className="hidden md:block relative"
              onMouseEnter={handleCtaEnter}
              onMouseLeave={handleCtaLeave}
            >
              <Button
                as="link"
                href="/contacto"
                size="md"
                className={cn(
                  "text-xs font-bold tracking-wide transition-all",
                  "bg-white text-black hover:bg-white/90",
                  "shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105",
                  "border border-white/50",
                )}
              >
                Empezar
              </Button>

              {ctaOpen && (
                <div
                  className={cn(
                    "absolute right-0 top-[calc(100%+20px)] w-44 rounded-xl p-1.5 transition-all duration-300 origin-top",
                    // Más contraste en light: fondo casi opaco y borde/sombra más marcados
                    "backdrop-blur-2xl bg-white/95 border border-black/10 shadow-[0_22px_55px_rgba(15,23,42,0.18)] dark:bg-[#050505]/30 dark:border-white/20 dark:shadow-none shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]",
                    "opacity-100 scale-100 translate-y-0 pointer-events-auto",
                  )}
                  onMouseEnter={handleCtaEnter}
                  onMouseLeave={handleCtaLeave}
                >
                  <div className="relative z-10 flex flex-col gap-1 text-sm">
                    <Link
                      href="/contacto"
                      className="group flex w-full items-center justify-end rounded-xl px-3 py-2 text-neutral-800 dark:text-neutral-200 hover:bg-white/10 hover:text-neutral-950 dark:hover:text-white transition-colors"
                    >
                      <span className="text-right">Empezar ahora</span>
                    </Link>
                    <Link
                      href="https://pro.bookfast.es"
                      className="group flex w-full items-center justify-end rounded-xl px-3 py-2 text-neutral-800 dark:text-neutral-200 hover:bg-white/10 hover:text-neutral-950 dark:hover:text-white transition-colors"
                    >
                      <span className="text-right">Iniciar sesión</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* CTA móvil simple */}
            <Button
              as="link"
              href="/contacto"
              size="sm"
              className="md:hidden text-xs font-bold tracking-wide"
            >
              Empezar
            </Button>

            <button
              type="button"
              aria-label="Abrir menú"
              onClick={() => setMobileOpen((open) => !open)}
              className="md:hidden p-2 text-neutral-800 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              <div className="space-y-1.5">
                <span
                  className={cn(
                    "block w-5 h-0.5 rounded-full bg-current transition-transform",
                    mobileOpen ? "translate-y-[5px] rotate-45" : "",
                  )}
                />
                <span
                  className={cn(
                    "block w-5 h-0.5 rounded-full bg-current transition-transform",
                    mobileOpen ? "-translate-y-[5px] -rotate-45" : "",
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      </header>

      {/* Spacer animado para empujar el contenido cuando hay dropdown */}
      <div
        className={cn(
          "hidden md:block w-full transition-[height] duration-300 ease-out",
          activeDropdown || ctaOpen ? "h-40" : "h-0",
        )}
      />

      {/* Spacer para móvil cuando el menú está abierto */}
      <div
        className={cn(
          "block md:hidden w-full transition-[height] duration-300 ease-out",
          mobileOpen ? "h-72" : "h-0",
        )}
      />

      {/* Menú móvil desplegable */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-x-0 top-24 z-40 px-4">
          <div
            className={cn(
              "rounded-2xl p-4 space-y-3 backdrop-blur-2xl border shadow-xl shadow-black/5",
              "bg-white/95 border-black/10 dark:bg-[#050505]/90 dark:border-white/10",
            )}
          >
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col gap-1">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between px-2 py-2 text-sm font-medium rounded-xl",
                    pathname.startsWith(item.href)
                      ? "text-foreground bg-black/5 dark:bg-white/10"
                      : "text-neutral-800 hover:bg-black/5 dark:text-neutral-200 dark:hover:bg-white/10",
                  )}
                >
                  <span>{item.name}</span>
                  {item.children && item.children.length > 0 && (
                    <span className="text-[10px] uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                      Sectores
                    </span>
                  )}
                </Link>

                {item.children && item.children.length > 0 && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-2 px-2 py-1.5 text-xs rounded-lg text-neutral-700 hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/10"
                      >
                        <child.icon className="w-4 h-4" />
                        <span>{child.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-3 mt-2 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-3">
              <ThemeToggle />
              <Button as="link" href="/contacto" size="sm" className="flex-1">
                Empezar gratis
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
