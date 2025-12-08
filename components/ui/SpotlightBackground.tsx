"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function SpotlightBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme(); // Usamos resolvedTheme para evitar flasheos
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const state = useRef({
    mouse: { x: 0, y: 0 },
    pos: { x: 0, y: 0 },
    isTouch: false,
    autoParams: { t: 0 },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const checkEnvironment = () => {
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      const isNarrow = window.matchMedia("(max-width: 768px)").matches;
      state.current.isTouch = isCoarse;
      setIsMobile(isCoarse || isNarrow);
    };

    checkEnvironment();
    window.addEventListener("resize", checkEnvironment);

    return () => {
      window.removeEventListener("resize", checkEnvironment);
    };
  }, [mounted]);

  // Lógica de canvas / luz solo en desktop
  useEffect(() => {
    if (!mounted || isMobile) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isDark = resolvedTheme === "dark";

    const resizeObserver = new ResizeObserver(() => {
      const { width, height } = container.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        if (state.current.pos.x === 0) {
            state.current.pos = { x: width / 2, y: height / 2 };
            state.current.mouse = { x: width / 2, y: height / 2 };
        }
      }
    });
    resizeObserver.observe(container);

    const handleMouseMove = (e: MouseEvent) => {
      if (!state.current.isTouch) {
        state.current.mouse = { x: e.clientX, y: e.clientY };
      }
    };

    if (state.current.pos.x === 0) {
        state.current.pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        state.current.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    }

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const s = state.current;

      if (s.isTouch) {
        s.autoParams.t += 0.005;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        s.pos.x = centerX + Math.cos(s.autoParams.t) * (canvas.width * 0.3);
        s.pos.y = centerY + Math.sin(s.autoParams.t * 1.5) * (canvas.height * 0.2);
      } else {
        // Smoothing más suave (0.08 en vez de 0.1) para movimiento menos agresivo
        const SPRING = 0.08;
        s.pos.x += (s.mouse.x - s.pos.x) * SPRING;
        s.pos.y += (s.mouse.y - s.pos.y) * SPRING;
      }

      const radius = s.isTouch ? 250 : 350;
      const gradient = ctx.createRadialGradient(
        s.pos.x, s.pos.y, 0,
        s.pos.x, s.pos.y, radius
      );

      if (isDark) {
        // Dark Mode: Luz Cian/Azul
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.12)");
        gradient.addColorStop(0.2, "rgba(14, 165, 233, 0.12)"); 
        gradient.addColorStop(0.5, "rgba(168, 85, 247, 0.04)"); 
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      } else {
        // Light Mode: Luz Naranja/Rosa (Sunset)
        gradient.addColorStop(0, "rgba(249, 115, 22, 0.2)");   
        gradient.addColorStop(0.3, "rgba(236, 72, 153, 0.1)"); 
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      }

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(s.pos.x, s.pos.y, radius, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove);
    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [mounted, isMobile, resolvedTheme]); 

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div
      ref={containerRef}
      style={{
        transition: 'background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      className="pointer-events-none fixed inset-0 z-[-1] bg-background"
    >
      {/* GRID DE PUNTOS MEJORADO */}
      <div 
        style={{
          transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        className="absolute inset-0 h-full w-full"
        style={{
          // AJUSTE DE VISIBILIDAD:
          // - Dark: Opacidad 0.1 (10%) -> Sutil
          // - Light: Opacidad 0.25 (25%) -> Mucho más visible para contrarrestar el blanco
          opacity: isDark ? 0.1 : 0.25,
          
          // COLOR DE LOS PUNTOS:
          // - Dark: Blanco (#ffffff)
          // - Light: Negro Neutro (#171717) en vez de gris, para máximo contraste
          backgroundImage: `radial-gradient(${isDark ? '#ffffff' : '#171717'} 1px, transparent 1px)`,
          
          backgroundSize: "24px 24px",
        }}
      />
      
      {/* Luz interactiva solo en desktop; en móvil dejamos solo la malla estática */}
      {!isMobile && (
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 block w-full h-full"
          style={{ mixBlendMode: isDark ? "plus-lighter" : "normal" }} 
        />
      )}
    </div>
  );
}
