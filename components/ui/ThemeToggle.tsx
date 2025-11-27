"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Cambiar tema"
      className="inline-flex items-center justify-between h-8 w-16 rounded-full border border-glass-border bg-glass/80 backdrop-blur-md px-1 text-[11px] font-medium text-foreground shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.5)] transition-all"
    >
      <span
        className={`inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-sm transform transition-transform duration-300 ${
          isDark ? "translate-x-0" : "translate-x-7"
        }`}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5" />
        ) : (
          <Sun className="h-3.5 w-3.5" />
        )}
      </span>
    </button>
  );
}
