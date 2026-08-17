"use client";

import { motion } from "framer-motion";
import type { Language, NavLink } from "@/data/content";

interface NavProps {
  navLinks: NavLink[];
  language: Language;
  onToggleLanguage: () => void;
}

export default function Nav({ navLinks, language, onToggleLanguage }: NavProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-white bg-black/50 px-6 py-5 backdrop-blur-md sm:px-10">
      <motion.a
        href="#top"
        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-xl font-black tracking-tight"
      >
        HR
      </motion.a>
      <div className="flex items-center gap-6 text-base uppercase tracking-[0.2em]">
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={onToggleLanguage}
          aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
          className="border border-white px-3 py-1.5 text-white transition-colors hover:bg-white hover:text-black"
        >
          {language === "en" ? "ES" : "EN"}
        </button>
      </div>
    </header>
  );
}
