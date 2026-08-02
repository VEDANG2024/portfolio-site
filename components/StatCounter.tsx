"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

export default function StatCounter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 15 });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (displayRef.current) displayRef.current.textContent = String(Math.round(v));
    });
  }, [spring]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl text-accent">
        <span ref={displayRef}>0</span>
      </div>
      <div className="text-xs text-text-muted uppercase tracking-wide mt-1">{label}</div>
    </div>
  );
}
