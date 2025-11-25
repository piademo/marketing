"use client";

import React, { useEffect, useRef } from "react";

export default function SpotlightBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const state = useRef({
    mouse: { x: 0, y: 0 },
    pos: { x: 0, y: 0 },
    // Velocidad automática para móvil
    autoParams: { t: 0 },
    isTouch: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // DETECCIÓN DE MÓVIL (Touch)
    // Si el dispositivo tiene puntero grueso (dedo), activamos modo automático
    const checkTouch = () => {
      state.current.isTouch = window.matchMedia("(pointer: coarse)").matches;
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);

    // Ajuste de tamaño robusto (evita flickeo por barra de navegación móvil)
    const resizeObserver = new ResizeObserver(() => {
      // Usamos dimensiones del contenedor, no window, para más estabilidad
      const { width, height } = container.getBoundingClientRect();
      // Solo redimensionamos si hay cambio real para evitar clears innecesarios
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        // Reinicializamos posición si es necesario
        if (state.current.pos.x === 0) {
          state.current.pos = { x: width / 2, y: height / 2 };
          state.current.mouse = { x: width / 2, y: height / 2 };
        }
      }
    });
    resizeObserver.observe(container);

    const handleMouseMove = (e: MouseEvent) => {
      // Solo actualizamos ratón si NO es táctil para evitar saltos al hacer scroll
      if (!state.current.isTouch) {
        state.current.mouse = { x: e.clientX, y: e.clientY };
      }
    };

    // Inicializar centro
    const initialW = window.innerWidth;
    const initialH = window.innerHeight;
    state.current.pos = { x: initialW / 2, y: initialH / 2 };
    state.current.mouse = { x: initialW / 2, y: initialH / 2 };

    let animationFrameId: number;

    const render = () => {
      // 1. LIMPIEZA
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const s = state.current;

      if (s.isTouch) {
        // --- MODO MÓVIL: ANIMACIÓN AUTOMÁTICA (Luz Ambiental) ---
        // La luz se mueve suavemente en forma de "ocho" o elipse
        s.autoParams.t += 0.005; // Velocidad lenta

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        // Movimiento oscilante suave
        s.pos.x = centerX + Math.cos(s.autoParams.t) * (canvas.width * 0.3);
        s.pos.y = centerY + Math.sin(s.autoParams.t * 1.5) * (canvas.height * 0.2);
      } else {
        // --- MODO ESCRITORIO: SEGUIR RATÓN ---
        const SPRING = 0.1;
        s.pos.x += (s.mouse.x - s.pos.x) * SPRING;
        s.pos.y += (s.mouse.y - s.pos.y) * SPRING;
      }

      // 3. DIBUJAR FOCO
      // Reducimos un poco el radio en móvil para rendimiento
      const radius = s.isTouch ? 250 : 350;

      const gradient = ctx.createRadialGradient(
        s.pos.x,
        s.pos.y,
        0,
        s.pos.x,
        s.pos.y,
        radius,
      );

      // Color ajustado para ser elegante
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.12)");
      gradient.addColorStop(0.2, "rgba(14, 165, 233, 0.12)");
      gradient.addColorStop(0.5, "rgba(168, 85, 247, 0.04)");
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
      window.removeEventListener("resize", checkTouch);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[-1] bg-neutral-950"
    >
      {/* Grid Base Estático */}
      <div
        className="absolute inset-0 h-full w-full opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)` ,
          backgroundSize: "24px 24px",
        }}
      />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full"
        style={{ mixBlendMode: "plus-lighter" }}
      />
    </div>
  );
}
