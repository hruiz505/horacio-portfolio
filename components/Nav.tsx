"use client";

import { motion } from "framer-motion";
import { navLinks } from "@/data/content";

export default function Nav() {
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
      <nav className="flex items-center gap-6 text-xs uppercase tracking-[0.2em]">
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
    </header>
  );
}
