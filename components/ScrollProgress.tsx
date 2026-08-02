"use client";

import { motion, useScroll, useSpring } from "motion/react";

// Thin progress bar under the nav, tracking how far down the page you
// are — a small, functional nod to "scroll as narrative."
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-20"
    />
  );
}
