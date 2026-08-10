"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TrailDot {
  id: number;
  x: number;
  y: number;
}

const TRAIL_LIFETIME_MS = 1500;
const TRAIL_INTERVAL_MS = 45;

export default function CustomCursor() {
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const nextTrailId = useRef(0);
  const lastTrailAt = useRef(0);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);

      const now = performance.now();
      if (now - lastTrailAt.current > TRAIL_INTERVAL_MS) {
        lastTrailAt.current = now;
        const id = nextTrailId.current++;
        setTrail((prev) => [
          ...prev,
          { id, x: event.clientX, y: event.clientY },
        ]);
        window.setTimeout(() => {
          setTrail((prev) => prev.filter((dot) => dot.id !== id));
        }, TRAIL_LIFETIME_MS);
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [cursorX, cursorY]);

  return (
    <>
      {trail.map((dot) => (
        <motion.div
          key={dot.id}
          className="fixed top-0 left-0 z-[9998] pointer-events-none w-1 h-1 bg-white/50 rounded-full"
          style={{ x: dot.x, y: dot.y }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: TRAIL_LIFETIME_MS / 1000, ease: "easeOut" }}
        />
      ))}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-2 h-2 bg-white rounded-full"
        style={{ x: springX, y: springY }}
      />
    </>
  );
}
