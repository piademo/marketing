"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

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

  const glassStyle = cn(
    "bg-[#050505]/30 backdrop-blur-2xl",
    "border border-white/20",
    "shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]",
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]",
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
                background:
                  "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.3), transparent 50%)," +
                  "radial-gradient(circle at 100% 0%, rgba(168, 85, 247, 0.3), transparent 50%)," +
                  "conic-gradient(from 0deg at 50% 50%, rgba(14,165,233,0), rgba(168,85,247,0.2), rgba(14,165,233,0))",
                backgroundSize: "200% 200%",
              }}
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
              "relative z-10 w-full h-full flex items-center justify-between px-2 md:px-6 transition-opacity duration-700 delay-300",
              isLoaded ? "opacity-100" : "opacity-0",
            )}
          >
          <Link
            href="/"
            className="ml-2 md:ml-0 text-lg font-bold tracking-tight text-white hover:text-white/80 transition-colors shrink-0 drop-shadow-md"
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
                        ? "text-white bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.25)]"
                        : "text-neutral-300 hover:text-white",
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
                        glassStyle,
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
                              <div className="text-sm font-medium text-white group-hover:text-white/90">
                                {subItem.name}
                              </div>
                              <div className="text-xs text-neutral-400 group-hover:text-neutral-300">
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

          <div className="flex items-center gap-2 md:gap-4 shrink-0 mr-1 md:mr-0">
            <Link
              href="/login"
              className="hidden md:block text-sm font-medium text-neutral-300 hover:text-white transition-colors px-2"
            >
              Entrar
            </Link>
            <Button
              as="link"
              href="/contacto"
              size="sm"
              className={cn(
                "rounded-full px-6 h-10 text-xs font-bold tracking-wide transition-all",
                "bg-white text-black hover:bg-white/90",
                "shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105",
                "border border-white/50",
              )}
            >
              Empezar
            </Button>

            <button className="md:hidden p-2 text-neutral-300 hover:text-white">
              <div className="space-y-1.5">
                <span className="block w-5 h-0.5 bg-white/80 rounded-full" />
                <span className="block w-5 h-0.5 bg-white/80 rounded-full" />
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
          activeDropdown ? "h-56" : "h-0",
        )}
      />
    </>
  );
}
