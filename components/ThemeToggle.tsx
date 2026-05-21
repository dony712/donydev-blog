// src/components/ThemeToggle.tsx
"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />; 
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative z-[100] p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-lg hover:scale-110 active:scale-95 transition-all shadow-sm border border-slate-200 dark:border-slate-700"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}