"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Tier } from "@/data/content";

interface FilmStripProps {
  tiers: Tier[];
}

export default function FilmStrip({ tiers }: FilmStripProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const trackWidthVw = tiers.length * 100;
  const maxShiftPercent = ((tiers.length - 1) / tiers.length) * 100;
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${maxShiftPercent}%`]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] overflow-hidden border-t border-white"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x, width: `${trackWidthVw}vw`, willChange: "transform" }}
          className="flex"
        >
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="flex h-screen w-screen shrink-0 flex-col items-start justify-center gap-6 border-r border-white px-6 sm:px-16"
            >
              <span
                className="text-xs uppercase tracking-[0.4em]"
                style={{ color: tier.color }}
              >
                {tier.name}
              </span>
              <span
                className="font-black leading-none"
                style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)", color: tier.color }}
              >
                {tier.metric}
              </span>
              <p className="max-w-[55ch] font-serif text-base leading-relaxed text-white/80 sm:text-lg">
                {tier.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
