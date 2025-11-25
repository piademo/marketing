"use client";

import React, { useEffect, useRef } from "react";

export default function SpotlightBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const state = useRef({
    mouse: { x: 0, y: 0 },
    pos: { x: 0, y: 0 }, // Posición actual de la luz
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeObserver = new ResizeObserver(() => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    resizeObserver.observe(container);

    const handleMouseMove = (e: MouseEvent) => {
      state.current.mouse = { x: e.clientX, y: e.clientY };
    };

    // Inicializar en el centro
    state.current.pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    state.current.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    let animationFrameId: number;

    const render = () => {
      // 1. LIMPIEZA TOTAL: sin estela dibujada, solo luz actual
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const s = state.current;

      // 2. Inercia suave para que la luz persiga al ratón
      const SPRING = 0.1;
      s.pos.x += (s.mouse.x - s.pos.x) * SPRING;
      s.pos.y += (s.mouse.y - s.pos.y) * SPRING;

      // 3. Dibujar el foco de luz (orbe difuso)
      const radius = 350;
      const gradient = ctx.createRadialGradient(
        s.pos.x,
        s.pos.y,
        0,
        s.pos.x,
        s.pos.y,
        radius,
      );

      gradient.addColorStop(0, "rgba(255, 255, 255, 0.15)");
      gradient.addColorStop(0.2, "rgba(14, 165, 233, 0.15)");
      gradient.addColorStop(0.5, "rgba(168, 85, 247, 0.05)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

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
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[-1] bg-neutral-950"
    >
      {/* Grid Base Estático (Muy sutil para dar textura al fondo negro) */}
      <div 
        className="absolute inset-0 h-full w-full opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      
      {/* Canvas en modo 'plus-lighter' para que la luz brille sobre el fondo oscuro */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full"
        style={{ mixBlendMode: "plus-lighter" }}
      />
    </div>
  );
}
