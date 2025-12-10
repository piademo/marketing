"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Scissors, UserCheck, ChevronDown } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/motion";

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

  const prefersReducedMotion = usePrefersReducedMotion();

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
  const ctaButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Si el usuario prefiere menos movimiento, mostramos el header directamente
    if (prefersReducedMotion) {
      setIsLoaded(true);
      return;
    }

    const timer = setTimeout(() => setIsLoaded(true), 80);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        ctaButtonRef.current &&
        !ctaButtonRef.current.contains(event.target as Node)
      ) {
        setCtaOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [prefersReducedMotion]);

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
    "backdrop-blur-2xl",
    "bg-white/90 dark:bg-[#050505]/30",
    "border border-black/10 dark:border-white/20",
    "shadow-xl shadow-black/5 dark:shadow-none",
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]",
  );

  const shellTransition = prefersReducedMotion
    ? undefined
    : {
        transition:
          "width 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
      };

  const innerTransition = prefersReducedMotion
    ? undefined
    : { transition: "opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1) 0.18s" };

  return (
    <>
      <header className="pointer-events-none fixed left-0 right-0 top-6 z-50 flex justify-center px-4">
        <div
          style={shellTransition}
          className={cn(
            "pointer-events-auto relative flex h-[60px] items-center rounded-full",
            prefersReducedMotion
              ? "w-full max-w-5xl opacity-100 translate-y-0"
              : isLoaded
                ? "w-full max-w-5xl opacity-100 translate-y-0"
                : "w-[100px] opacity-0 translate-y-4",
            glassStyle,
          )}
        >
          {/* FONDO LÍQUIDO ANIMADO */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-full opacity-30">
            <div
              className={cn(
                "absolute -inset-[100%] blur-3xl opacity-60",
                !prefersReducedMotion && "animate-liquid-glass",
              )}
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, hsla(var(--primary) / 0.35), transparent 55%)," +
                  "radial-gradient(circle at 100% 0%, hsla(var(--secondary) / 0.35), transparent 55%)," +
                  "conic-gradient(from 0deg at 50% 50%, hsla(var(--primary) / 0), hsla(var(--secondary) / 0.30), hsla(var(--primary) / 0))",
                backgroundSize: "200% 200%",
              } as React.CSSProperties}
            />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
          </div>

          {/* SHIMMER SUPERFICIAL */}
          <div
            className="pointer-events-none absolute inset-0 z-0 rounded-full opacity-10 mix-blend-overlay"
            style={{
              background:
                "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.6) 45%, rgba(255,255,255,0.6) 50%, transparent 70%)",
              backgroundSize: "200% 100%",
              animation: prefersReducedMotion
                ? "none"
                : "shimmer 6s infinite linear",
            }}
          />

          <div
            style={innerTransition}
            className={cn(
              "relative z-10 flex h-full w-full items-center justify-between pl-2 pr-1 md:pl-6 md:pr-3",
              isLoaded || prefersReducedMotion ? "opacity-100" : "opacity-0",
            )}
          >
            <Link
              href="/"
              className="ml-2 shrink-0 text-lg font-bold tracking-tight text-foreground drop-shadow-md transition-colors hover:text-foreground/80 md:ml-0"
            >
              BookFast
            </Link>

            <nav
              ref={navRef}
              className="relative hidden h-full items-center md:flex"
              onMouseLeave={handleMouseLeaveNav}
            >
              <div
                className="pointer-events-none absolute top-1/2 h-9 -translate-y-1/2 rounded-full"
                style={{
                  transition:
                    "left 0.3s cubic-bezier(0.16, 1, 0.3, 1), width 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
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
                  <div
                    key={item.name}
                    className="relative flex h-full items-center"
                  >
                    <Link
                      href={item.href}
                      onMouseEnter={(e) => handleMouseEnterLink(e, item.name)}
                      style={{
                        transition:
                          "color 0.15s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      className={cn(
                        "relative z-10 flex items-center gap-1 rounded-full px-5 py-2 text-sm font-medium",
                        isActive
                          ? "bg-white/10 text-foreground shadow-[0_0_12px_rgba(255,255,255,0.25)]"
                          : "text-neutral-600 hover:text-foreground dark:text-neutral-300",
                      )}
                    >
                      {item.name}
                      {hasChildren && (
                        <ChevronDown
                          style={{
                            transition:
                              "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                          className={cn(
                            "h-3 w-3 opacity-70",
                            isActive || isDropdownOpen
                              ? "rotate-180"
                              : "rotate-0",
                          )}
                        />
                      )}
                    </Link>

                    {hasChildren && (
                      <div
                        onMouseEnter={handleMouseEnterDropdown}
                        onMouseLeave={handleMouseLeaveDropdown}
                        style={{
                          transition:
                            "opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                        className={cn(
                          "absolute left-1/2 top-[calc(100%+12px)] w-[320px] origin-top -translate-x-1/2 rounded-2xl p-2",
                          "border border-black/10 bg-white/95 shadow-[0_22px_55px_rgba(15,23,42,0.18)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-2xl dark:border-white/20 dark:bg-[#050505]/30 dark:shadow-none",
                          isDropdownOpen
                            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                            : "pointer-events-none -translate-y-2 scale-95 opacity-0",
                        )}
                      >
                        <div className="relative z-10 flex flex-col gap-1">
                          {item.children?.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/10"
                            >
                              <div
                                style={{
                                  transition:
                                    "border-color 0.15s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.15s cubic-bezier(0.16, 1, 0.3, 1), color 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
                                }}
                                className="mt-0.5 rounded-lg border border-white/10 bg-white/5 p-2 text-neutral-300 group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white"
                              >
                                <subItem.icon className="h-4 w-4" />
                              </div>
                              <div>
                                <span className="hidden px-2 text-sm font-medium text-neutral-600 transition-colors group-hover:text-foreground dark:text-neutral-300 md:block">
                                  {subItem.name}
                                </span>
                                <div className="text-xs text-neutral-600 group-hover:text-neutral-800 dark:text-neutral-400 dark:group-hover:text-neutral-200">
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

            <div className="flex shrink-0 items-center gap-2 md:gap-4">
              <div className="mr-1 hidden md:block">
                <ThemeToggle />
              </div>

              {/* CTA desplegable (solo desktop) */}
              <div
                className="relative hidden md:block"
                onMouseEnter={handleCtaEnter}
                onMouseLeave={handleCtaLeave}
              >
                <Button
                  as="link"
                  href="/contacto"
                  size="md"
                  className={cn(
                    "text-xs font-bold tracking-wide",
                    "relative overflow-hidden bg-gradient-to-r from-primary via-primary/80 to-secondary hover:from-primary/60 hover:to-secondary/60 text-white border-0",
                    "shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
                    "transition-all duration-150 animated-gradient",
                  )}
                >
                  Empezar
                </Button>

                {ctaOpen && (
                  <div
                    style={{
                      transition:
                        "opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    className={cn(
                      "absolute right-0 top-[calc(100%+20px)] w-44 origin-top rounded-xl p-1.5",
                      "border border-black/10 bg-white/95 shadow-[0_22px_55px_rgba(15,23,42,0.18)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-2xl dark:border-white/20 dark:bg-[#050505]/30 dark:shadow-none",
                      "pointer-events-auto translate-y-0 scale-100 opacity-100",
                    )}
                    onMouseEnter={handleCtaEnter}
                    onMouseLeave={handleCtaLeave}
                  >
                    <div className="relative z-10 flex flex-col gap-1 text-sm">
                      <Link
                        href="/contacto"
                        className="group flex w-full items-center justify-end rounded-xl px-3 py-2 text-neutral-800 transition-colors hover:bg-white/10 hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white"
                      >
                        <span className="text-right">Empezar ahora</span>
                      </Link>
                      <Link
                        href="https://pro.bookfast.es"
                        className="group flex w-full items-center justify-end rounded-xl px-3 py-2 text-neutral-800 transition-colors hover:bg-white/10 hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white"
                      >
                        <span className="text-right">Iniciar sesión</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA móvil con menú desplegable */}
              <div ref={ctaButtonRef} className="relative md:hidden">
                <Button
                  onClick={() => setCtaOpen((open) => !open)}
                  size="md"
                  className={cn(
                    "text-xs font-bold tracking-wide",
                    "relative overflow-hidden bg-gradient-to-r from-primary via-primary/80 to-secondary hover:from-primary/60 hover:to-secondary/60 text-white border-0",
                    "shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
                    "transition-all duration-150 animated-gradient",
                  )}
                >
                  Empezar
                </Button>

                {ctaOpen && (
                  <div
                    className={cn(
                      "absolute right-0 top-full z-40 mt-2 w-40 rounded-xl p-1.5",
                      "border border-black/10 bg-white/95 shadow-xl backdrop-blur-2xl dark:border-white/20 dark:bg-[#050505]/95",
                    )}
                  >
                    <div className="flex flex-col gap-1 text-sm">
                      <Link
                        href="/contacto"
                        className="flex w-full items-center justify-end rounded-xl px-3 py-2 text-neutral-800 transition-colors hover:bg-white/10 hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white"
                        onClick={() => setCtaOpen(false)}
                      >
                        <span className="text-right">Empezar ahora</span>
                      </Link>
                      <Link
                        href="https://pro.bookfast.es"
                        className="flex w-full items-center justify-end rounded-xl px-3 py-2 text-neutral-800 transition-colors hover:bg-white/10 hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white"
                        onClick={() => setCtaOpen(false)}
                      >
                        <span className="text-right">Iniciar sesión</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="button"
                aria-label="Abrir menú"
                onClick={() => setMobileOpen((open) => !open)}
                className="p-2 text-neutral-800 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white md:hidden"
              >
                <div className="space-y-1.5">
                  <span
                    className={cn(
                      "block h-0.5 w-5 rounded-full bg-current transition-transform duration-150",
                      mobileOpen ? "translate-y-[5px] rotate-45" : "",
                    )}
                  />
                  <span
                    className={cn(
                      "block h-0.5 w-5 rounded-full bg-current transition-transform duration-150",
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
        style={{
          transition: "height 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className={cn(
          "hidden w-full md:block",
          activeDropdown || ctaOpen ? "h-40" : "h-0",
        )}
      />

      {/* Spacer para móvil cuando el menú está abierto */}
      <div
        style={{
          transition: "height 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className={cn(
          "block w-full md:hidden",
          mobileOpen ? "h-72" : "h-0",
        )}
      />

      {/* Spacer adicional para el menú desplegable del CTA en móvil */}
      <div
        style={{
          transition: "height 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className={cn(
          "block w-full md:hidden",
          ctaOpen ? "h-28" : "h-0",
        )}
      />

      {/* Menú móvil desplegable */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-24 z-40 px-4 md:hidden">
          <div
            className={cn(
              "space-y-3 rounded-2xl border p-4 shadow-xl shadow-black/5 backdrop-blur-2xl",
              "border-black/10 bg-white/95 dark:border-white/10 dark:bg-[#050505]/90",
            )}
          >
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col gap-1">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-2 py-2 text-sm font-medium",
                    pathname.startsWith(item.href)
                      ? "bg-black/5 text-foreground dark:bg-white/10"
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
                  <div className="space-y-1 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-neutral-700 hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/10"
                      >
                        <child.icon className="h-4 w-4" />
                        <span>{child.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-2 flex items-center justify-between gap-3 border-t border-neutral-200 pt-3 dark:border-neutral-800">
              <ThemeToggle />
              <Button as="link" href="/contacto" size="sm" className="flex-1 relative overflow-hidden bg-gradient-to-r from-primary via-primary/80 to-secondary hover:from-primary/60 hover:to-secondary/60 text-white border-0 shadow-md animated-gradient">
                Empezar gratis
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
