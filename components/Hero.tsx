"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import type { Profile } from "@/data/content";

interface HeroProps {
  profile: Profile;
}

const letterVariants: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)", y: 20, opacity: 0 },
  visible: (i: number) => ({
    clipPath: "inset(0 0% 0 0)",
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.05, ease: "easeOut" },
  }),
};

export default function Hero({ profile }: HeroProps) {
  const letters = profile.name.split("");
  const settleDelay = letters.length * 0.05;

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center"
    >
      <h1
        className="flex flex-wrap justify-center font-black leading-none tracking-tight"
        style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}
      >
        {letters.map((letter, i) => (
          <motion.span
            key={`${letter}-${i}`}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={letterVariants}
            className="inline-block whitespace-pre"
          >
            {letter === " " ? " " : letter}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: settleDelay + 0.2, duration: 0.6, ease: "easeOut" }}
        className="mt-6 font-serif text-lg italic text-white/80 sm:text-2xl"
      >
        {profile.title}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: settleDelay + 0.6, duration: 0.6 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
