"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import type { Specimen } from "@/data/content";
import { resumeDownloadUrl, sectionTitles } from "@/data/content";

interface TypeSpecimensProps {
  specimens: Specimen[];
}

export default function TypeSpecimens({ specimens }: TypeSpecimensProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="frameworks" className="border-t border-white px-6 py-24 sm:px-10">
      <h2
        className="mb-16 font-black leading-none tracking-tight"
        style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
      >
        {sectionTitles.frameworks}
      </h2>

      <div
        ref={containerRef}
        className="relative grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4"
      >
        {specimens.map((specimen) => (
          <motion.div
            key={specimen.name}
            drag
            dragConstraints={containerRef}
            dragElastic={0.15}
            whileHover={{ scale: 1.05, borderColor: "#D4AF37" }}
            whileTap={{ scale: 0.98 }}
            className="flex aspect-square cursor-grab flex-col justify-between border border-white bg-black p-5 active:cursor-grabbing"
          >
            <span className="font-bold uppercase tracking-tight">
              {specimen.name}
            </span>
            <span className="font-serif text-xs italic text-white/60">
              {specimen.category}
            </span>
          </motion.div>
        ))}
      </div>

      <a
        href={resumeDownloadUrl}
        download
        className="mt-16 inline-flex items-center gap-3 border border-white px-6 py-4 text-xs uppercase tracking-[0.3em] transition-colors hover:bg-white hover:text-black"
      >
        Download Resume PDF
      </a>
    </section>
  );
}
