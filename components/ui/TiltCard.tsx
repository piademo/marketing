"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  rotationFactor?: number; // Grados máximos de inclinación
  scaleFactor?: number; // Escala al hacer hover
  springConfig?: {
    stiffness: number; // Velocidad con la que persigue al ratón (0-1)
    damping: number; // No lo usamos directamente pero lo dejamos por API
  };
}

export default function TiltCard({
  children,
  className,
  rotationFactor = 12,
  scaleFactor = 1.02,
  springConfig = { stiffness: 0.1, damping: 0.1 },
}: TiltCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const state = useRef({
    isHovering: false,
    mouse: { x: 0, y: 0 },
    current: { x: 0, y: 0 },
  });

  useEffect(() => {
    let animationFrameId: number;

    const updateAnimation = () => {
      const { isHovering, mouse, current } = state.current;

      const targetX = isHovering ? mouse.x : 0;
      const targetY = isHovering ? mouse.y : 0;

      current.x += (targetX - current.x) * springConfig.stiffness;
      current.y += (targetY - current.y) * springConfig.stiffness;

      const delta = Math.abs(targetX - current.x) + Math.abs(targetY - current.y);

      if (containerRef.current && (delta > 0.01 || isHovering)) {
        const rotateX = current.y * rotationFactor;
        const rotateY = -current.x * rotationFactor;
        const scale = isHovering ? scaleFactor : 1;

        containerRef.current.style.transform = `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale3d(${scale}, ${scale}, ${scale})
        `;

        if (glareRef.current) {
          glareRef.current.style.transform = `translate(${current.x * 50}%, ${current.y * 50}%)`;
          glareRef.current.style.opacity = isHovering ? "0.4" : "0";
        }
      }

      animationFrameId = requestAnimationFrame(updateAnimation);
    };

    updateAnimation();

    return () => cancelAnimationFrame(animationFrameId);
  }, [rotationFactor, scaleFactor, springConfig.stiffness]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    state.current.mouse = {
      x: (x - 0.5) * 2,
      y: (y - 0.5) * 2,
    };
  };

  const handleMouseEnter = () => {
    state.current.isHovering = true;
  };

  const handleMouseLeave = () => {
    state.current.isHovering = false;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative will-change-transform", className)}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div
        ref={contentRef}
        className="relative z-10"
        style={{ transform: "translateZ(20px)" }}
      >
        {children}
      </div>

      <div
        className="absolute inset-0 z-20 overflow-hidden rounded-[inherit] pointer-events-none"
        style={{ transform: "translateZ(1px)" }}
      >
        <div
          ref={glareRef}
          className="absolute -inset-[100%] opacity-0 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.6) 0%, transparent 60%)",
            mixBlendMode: "overlay",
          }}
        />
      </div>
    </div>
  );
}
