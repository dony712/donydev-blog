// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import {
  Search,
  Info,
  Home,
  ChevronDown,
  MessageCircle,
  Monitor,
} from "lucide-react"; // Menggunakan lucide-react untuk icon modern

export default function Navbar() {
  const [isAIOpen, setIsAIOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4">
        {/* --- BARIS ATAS (Judul, Search, Toggle, Tentang) --- */}
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Judul + Icon */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-indigo-600 p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
              <Monitor size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              DonyDev <span className="text-indigo-600">.</span>
            </span>
          </Link>

          {/* Bar Pencarian Modern (Template UI) */}
          <div className="hidden md:flex flex-1 max-w-md relative group">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors"
              size={18}
            />
            <input
              type="text"
              placeholder="Cari tutorial atau artikel..."
              className="w-full bg-slate-100 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none text-slate-700"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-block h-5 select-none items-center gap-1 rounded border bg-white px-1.5 font-mono text-[10px] font-medium text-slate-400 opacity-100">
              CTRL K
            </kbd>
          </div>

          {/* Fitur Kanan */}
          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />

            <Link
              href="/tentang"
              className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium text-sm transition py-2 px-3 rounded-lg hover:bg-indigo-50"
            >
              <Info size={18} />
              <span className="hidden sm:inline">Tentang</span>
            </Link>
          </div>
        </div>

        {/* --- BARIS BAWAH (Navigasi, Dropdown, WhatsApp) --- */}
        <div className="flex h-12 items-center justify-between border-t border-slate-100">
          <nav className="flex items-center gap-6 text-sm font-medium">
            {/* Home */}
            <Link
              href="/"
              className="flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 transition group"
            >
              <Home
                size={16}
                className="group-hover:scale-110 transition-transform"
              />
              <span>Home</span>
            </Link>

            {/* Kategori Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsAIOpen(true)}
              onMouseLeave={() => setIsAIOpen(false)}
            >
              {/* BUTTON */}
              <button
                onClick={() => setIsAIOpen(!isAIOpen)}
                className="flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 transition py-3"
              >
                <span>AI</span>

                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    isAIOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* DROPDOWN */}
              <div
                className={`absolute left-0 top-full w-56 pt-2 transition-all duration-200 transform ${
                  isAIOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-2"
                }`}
              >
                <div className="bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden p-1">
                  <Link
                    href="/ai/alat-ai-produktivitas"
                    onClick={() => setIsAIOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition"
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    Alat AI Produktivitas
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* WhatsApp Link di Sudut Kanan */}
          <Link
            href="https://wa.me/6282384340599"
            target="_blank"
            className="flex items-center gap-2 bg-green-50 text-green-600 hover:bg-green-100 px-3 py-1.5 rounded-full text-xs font-bold transition transform active:scale-95"
          >
            <MessageCircle size={16} />
            <span>Hubungi Saya</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
