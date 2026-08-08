"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { Profile } from "@/data/content";
import { sectionTitles } from "@/data/content";

interface ContactProps {
  profile: Profile;
}

function UnderlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <motion.a
      href={href}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative inline-block py-1 font-serif text-lg sm:text-xl"
    >
      {children}
      <motion.span
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{ originX: 0 }}
        className="absolute bottom-0 left-0 h-px w-full bg-white"
      />
    </motion.a>
  );
}

export default function Contact({ profile }: ContactProps) {
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center gap-10 border-t border-white px-6 text-center"
    >
      <h2
        className="font-black leading-none tracking-tight"
        style={{ fontSize: "clamp(2.5rem, 10vw, 8rem)" }}
      >
        {sectionTitles.contact}
      </h2>
      <div className="flex flex-col items-center gap-4 text-white/80">
        <UnderlineLink href={`mailto:${profile.email}`}>
          {profile.email}
        </UnderlineLink>
        <UnderlineLink href={`tel:${profile.phone}`}>
          {profile.phone}
        </UnderlineLink>
        <UnderlineLink href={`https://${profile.linkedin}`}>
          {profile.linkedin}
        </UnderlineLink>
      </div>
    </section>
  );
}
