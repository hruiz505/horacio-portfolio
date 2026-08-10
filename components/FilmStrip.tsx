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
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6667%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] w-screen overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-screen overflow-hidden flex items-center">
        <motion.div
          style={{ x, width: "300vw" }}
          className="flex h-screen will-change-transform"
        >
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="w-screen h-screen flex-shrink-0 flex flex-col justify-center items-center gap-6 p-10"
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
