"use client";

import { motion } from "motion/react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

// Fades + slides content up as it scrolls into view, once. Reduced-motion
// handling is global (see MotionConfig in layout.tsx) rather than
// per-component — and the "hidden" state never drops below 40% opacity,
// so even if the reveal animation somehow never fires, the content is
// still fully readable rather than invisible.
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.4, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
