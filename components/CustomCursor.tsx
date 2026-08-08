"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TrailDot {
  id: number;
  x: number;
  y: number;
}

const TRAIL_LIFETIME_MS = 1500;
const TRAIL_INTERVAL_MS = 45;
const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";

function subscribeToPointerCapability(callback: () => void) {
  const mediaQueryList = window.matchMedia(FINE_POINTER_QUERY);
  mediaQueryList.addEventListener("change", callback);
  return () => mediaQueryList.removeEventListener("change", callback);
}

function getPointerCapability() {
  return window.matchMedia(FINE_POINTER_QUERY).matches;
}

function getServerPointerCapability() {
  return false;
}

export default function CustomCursor() {
  const enabled = useSyncExternalStore(
    subscribeToPointerCapability,
    getPointerCapability,
    getServerPointerCapability
  );
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const nextTrailId = useRef(0);
  const lastTrailAt = useRef(0);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    if (!enabled) return;

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
  }, [enabled, cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {trail.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-white"
          style={{
            left: dot.x,
            top: dot.y,
            width: 3,
            height: 3,
            x: "-50%",
            y: "-50%",
          }}
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: TRAIL_LIFETIME_MS / 1000, ease: "easeOut" }}
        />
      ))}
      <motion.div
        className="absolute rounded-full bg-white/30"
        style={{
          left: springX,
          top: springY,
          width: 8,
          height: 8,
          x: "-50%",
          y: "-50%",
        }}
      />
    </div>
  );
}
