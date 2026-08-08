"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/content";

interface ProjectSpreadProps {
  project: Project;
  index: number;
}

export default function ProjectSpread({ project, index }: ProjectSpreadProps) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex min-h-screen w-full items-center border-t border-white px-6 py-24 sm:px-10"
    >
      <div className="grid w-full gap-10 md:grid-cols-10">
        <div
          className={`flex flex-col gap-3 font-serif text-white/70 md:col-span-4 ${
            reversed ? "md:order-2" : "md:order-1"
          }`}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-lg">{project.company}</span>
          <span className="text-sm italic">{project.period}</span>
          <span className="text-sm">{project.role}</span>
        </div>

        <div
          className={`flex flex-col gap-6 md:col-span-6 ${
            reversed ? "md:order-1" : "md:order-2"
          }`}
        >
          <h3
            className="font-black leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
          >
            {project.title}
          </h3>
          <p className="max-w-[60ch] font-serif text-base leading-relaxed text-white/80 sm:text-lg">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            {project.metrics.map((metric) => (
              <span
                key={metric}
                className="border border-white px-4 py-2 text-xs uppercase tracking-wider"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
